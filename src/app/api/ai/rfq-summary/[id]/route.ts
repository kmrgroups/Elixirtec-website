import { NextRequest, NextResponse } from "next/server";
import { requireTenantSession } from "@/lib/tenant";
import { prisma } from "@/lib/prisma";
import { jsonError } from "@/lib/api";

// This endpoint drafts an internal RFQ summary using an LLM. It never
// generates a final price or sends anything to the customer — the result
// is written back as an RfqActivity entry an admin must review, matching
// the master spec's "AI must NOT automatically commit final prices... human
// admin must review and approve" requirement.
export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  let session;
  try {
    session = await requireTenantSession();
  } catch {
    return jsonError("Unauthorized", 401);
  }

  const rfq = await prisma.rfq.findUnique({
    where: { id: params.id },
    include: { items: { include: { product: true } } },
  });
  if (!rfq || rfq.tenantId !== session.tenantId) return jsonError("Not found", 404);

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return jsonError(
      "AI assistant isn't configured yet — add ANTHROPIC_API_KEY in your deployment environment.",
      501
    );
  }

  const prompt = `Summarize this RFQ for an internal sales team. List what's clear, what's missing, and suggest 2-3 clarification questions. Do not propose a price.\n\nCustomer: ${rfq.customerName} (${rfq.company ?? "n/a"})\nMessage: ${rfq.message ?? "n/a"}\nItems: ${rfq.items.map((i) => `${i.quantity}x ${i.product?.name ?? "unspecified"}`).join(", ") || "none listed"}`;

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 500,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!res.ok) return jsonError("AI request failed", 502);
  const data = await res.json();
  const summary = data.content?.find((b: any) => b.type === "text")?.text ?? "";

  const activity = await prisma.rfqActivity.create({
    data: { rfqId: rfq.id, actor: "AI Assistant", action: "Draft summary generated", note: summary },
  });

  return NextResponse.json(activity);
}
