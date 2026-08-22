import { redirect } from "next/navigation";
import { requireTenantSession } from "@/lib/tenant";
import { prisma } from "@/lib/prisma";

export default async function AdminDashboard() {
  let session;
  try {
    session = await requireTenantSession();
  } catch {
    redirect("/admin/login");
  }

  const [productCount, rfqCount, mediaCount] = await Promise.all([
    prisma.product.count({ where: { tenantId: session.tenantId } }),
    prisma.rfq.count({ where: { tenantId: session.tenantId } }),
    prisma.mediaAsset.count({ where: { tenantId: session.tenantId } }),
  ]);

  return (
    <main className="min-h-screen bg-graphite text-ivory px-8 py-10">
      <p className="tenant-id mb-1">{session.tenantSlug}</p>
      <h1 className="font-display text-3xl mb-8">Dashboard</h1>
      <div className="grid grid-cols-3 gap-px bg-line max-w-2xl">
        <Card label="Products" value={productCount} />
        <Card label="RFQs" value={rfqCount} />
        <Card label="Media files" value={mediaCount} />
      </div>
    </main>
  );
}

function Card({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-graphite p-6">
      <p className="text-3xl font-display text-bronzeLight">{value}</p>
      <p className="text-xs text-steelLight mt-1">{label}</p>
    </div>
  );
}
