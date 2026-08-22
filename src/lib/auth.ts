import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      id: "tenant-credentials",
      name: "Tenant credentials",
      credentials: { tenantSlug: {}, email: {}, password: {} },
      async authorize(credentials) {
        const tenantSlug = credentials?.tenantSlug?.trim();
        const email = credentials?.email?.trim().toLowerCase();
        const password = credentials?.password;
        if (!tenantSlug || !email || !password) return null;

        const user = await prisma.tenantUser.findFirst({
          where: { email, tenant: { slug: tenantSlug, status: { not: "SUSPENDED" } }, isActive: true },
          include: { tenant: true },
        });
        if (!user || !(await bcrypt.compare(password, user.passwordHash))) return null;

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          tenantId: user.tenantId,
          tenantSlug: user.tenant.slug,
          role: user.role,
          scope: "tenant",
        } as any;
      },
    }),
    CredentialsProvider({
      id: "platform-credentials",
      name: "Platform credentials",
      credentials: { email: {}, password: {} },
      async authorize(credentials) {
        const email = credentials?.email?.trim().toLowerCase();
        const password = credentials?.password;
        if (!email || !password) return null;
        const user = await prisma.platformUser.findUnique({ where: { email } });
        if (!user || !(await bcrypt.compare(password, user.passwordHash))) return null;
        return { id: user.id, name: user.name, email: user.email, role: user.role, scope: "platform" } as any;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const u = user as any;
        token.scope = u.scope;
        token.tenantId = u.tenantId;
        token.tenantSlug = u.tenantSlug;
        token.role = u.role;
      }
      return token;
    },
    async session({ session, token }) {
      (session as any).user = {
        ...session.user,
        scope: token.scope,
        tenantId: token.tenantId,
        tenantSlug: token.tenantSlug,
        role: token.role,
      };
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
