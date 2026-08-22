import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-graphite text-ivory">
      <aside className="w-52 border-r border-line px-5 py-8 hidden md:block">
        <p className="font-display text-lg mb-8">Foundry</p>
        <nav className="space-y-3 text-sm text-steelLight">
          <Link href="/admin" className="block hover:text-ivory">Dashboard</Link>
          <Link href="/admin/products" className="block hover:text-ivory">Products</Link>
          <Link href="/admin/rfqs" className="block hover:text-ivory">RFQs</Link>
        </nav>
      </aside>
      <div className="flex-1">{children}</div>
    </div>
  );
}
