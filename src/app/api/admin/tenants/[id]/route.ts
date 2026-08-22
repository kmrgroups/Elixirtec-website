import { NextRequest, NextResponse } from "next/server";
import { requirePlatformSession } from "@/lib/tenant";
import { prisma } from "@/lib/prisma";
import { jsonError } from "@/lib/api";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await requirePlatformSession();
  } catch {
    return jsonError("Unauthorized", 401);
  }
  const body = await req.json(); // { status: "ACTIVE" | "SUSPENDED" | "CANCELLED" }
  const tenant = await prisma.tenant.update({
    where: { id: params.id },
    data: { status: body.status },
  });
  return NextResponse.json(tenant);
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await requirePlatformSession();
  } catch {
    return jsonError("Unauthorized", 401);
  }
  await prisma.tenant.delete({ where: { id: params.id } });
  return NextResponse.json({ ok: true });
}
