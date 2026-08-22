import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function TenantHome({ params }: { params: { tenant: string } }) {
  const tenant = await prisma.tenant.findUnique({
    where: { slug: params.tenant },
    include: { website: true },
  });
  if (!tenant || tenant.status === "SUSPENDED") notFound();

  const products = await prisma.product.findMany({
    where: { tenantId: tenant.id, published: true },
    take: 6,
  });

  const primary = tenant.website?.primaryColor ?? "#0B0D10";
  const accent = tenant.website?.secondaryColor ?? "#B8763E";

  return (
    <main style={{ background: primary }} className="min-h-screen text-ivory">
      <header className="flex items-center justify-between px-8 py-6 border-b border-line">
        <span className="font-display text-xl">{tenant.name}</span>
        <Link
          href={`/${tenant.slug}/rfq`}
          style={{ background: accent }}
          className="text-sm px-4 py-2 rounded text-graphite font-medium"
        >
          Request a quote
        </Link>
      </header>

      <section className="px-8 py-24">
        <p className="tenant-id mb-4">{tenant.industry ?? "Manufacturing"}</p>
        <h1 className="font-display text-4xl md:text-5xl max-w-2xl">{tenant.name}</h1>
      </section>

      {products.length > 0 && (
        <section className="px-8 py-16 border-t border-line">
          <h2 className="font-display text-2xl mb-8">Products</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.id} className="border border-line rounded p-5">
                <p className="font-display text-lg">{p.name}</p>
                {p.shortDesc && <p className="text-sm text-steelLight mt-2">{p.shortDesc}</p>}
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
