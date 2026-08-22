import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export type TenantSession = {
  tenantId: string;
  tenantSlug: string;
  role: string;
  userId?: string;
};

export async function requireTenantSession(): Promise<TenantSession> {
  const session = await getServerSession(authOptions);
  const user = (session as any)?.user;
  if (!user?.tenantId || user.scope !== "tenant") throw new Error("Unauthorized");
  return {
    tenantId: user.tenantId,
    tenantSlug: user.tenantSlug,
    role: user.role,
    userId: user.id,
  };
}

export async function requirePlatformSession() {
  const session = await getServerSession(authOptions);
  const user = (session as any)?.user;
  if (!user?.email || user.scope !== "platform") throw new Error("Unauthorized");
  return { userId: user.id, email: user.email, role: user.role };
}
