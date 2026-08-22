import { NextRequest, NextResponse } from "next/server";
import { requirePlatformSession } from "@/lib/tenant";
import { prisma } from "@/lib/prisma";
import { jsonError } from "@/lib/api";
import bcrypt from "bcryptjs";

export async function GET() {
  try {
    await requirePlatformSession();
  } catch {
    return jsonError("Unauthorized", 401);
  }
  const tenants = await prisma.tenant.findMany({
    orderBy: { createdAt: "desc" },
    include: { _count: { select: { rfqs: true, users: true } }, domains: true },
  });
  return NextResponse.json(tenants);
}

export async function POST(req: NextRequest) {
  try {
    await requirePlatformSession();
  } catch {
    return jsonError("Unauthorized", 401);
  }
  const body = await req.json();
  const { name, slug, industry, ownerEmail, ownerName, ownerPassword, plan } = body;
  if (!name || !slug || !ownerEmail || !ownerName || !ownerPassword) {
    return jsonError("Missing required fields");
  }

  const existing = await prisma.tenant.findUnique({ where: { slug } });
  if (existing) return jsonError("That company slug is already taken");

  const passwordHash = await bcrypt.hash(ownerPassword, 10);

  const tenant = await prisma.tenant.create({
    data: {
      name,
      slug,
      industry,
      plan: plan ?? "BASIC",
      status: "ACTIVE",
      website: { create: { template: "industrial" } },
      users: {
        create: {
          email: ownerEmail,
          name: ownerName,
          passwordHash,
          role: "OWNER",
        },
      },
    },
    include: { users: true, website: true },
  });

  return NextResponse.json(tenant, { status: 201 });
}
