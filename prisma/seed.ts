import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const superAdminPassword = await bcrypt.hash("ChangeMe123!", 10);
  await prisma.platformUser.upsert({
    where: { email: "admin@platform.local" },
    update: {},
    create: {
      email: "admin@platform.local",
      passwordHash: superAdminPassword,
      name: "Platform Super Admin",
      role: "SUPER_ADMIN",
    },
  });

  const tenant = await prisma.tenant.upsert({
    where: { slug: "demo" },
    update: {},
    create: {
      slug: "demo",
      name: "Meridian Fabrication (Demo)",
      industry: "Precision Manufacturing",
      status: "ACTIVE",
      plan: "PROFESSIONAL",
      website: {
        create: {
          template: "industrial",
          seoTitle: "Meridian Fabrication",
        },
      },
    },
  });

  const ownerPassword = await bcrypt.hash("ChangeMe123!", 10);
  await prisma.tenantUser.upsert({
    where: { tenantId_email: { tenantId: tenant.id, email: "owner@demo.local" } },
    update: {},
    create: {
      tenantId: tenant.id,
      email: "owner@demo.local",
      passwordHash: ownerPassword,
      name: "Demo Owner",
      role: "OWNER",
    },
  });

  console.log("Seeded: super admin admin@platform.local / demo tenant owner@demo.local (password: ChangeMe123!)");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
