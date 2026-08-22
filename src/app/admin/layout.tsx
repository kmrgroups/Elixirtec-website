// Admin shell — intentionally distinct from the public site's design system.
// Auth guard (next-auth session + role check) gets wired in here next;
// for now this just establishes the layout so admin pages have somewhere to live.

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <aside className="fixed inset-y-0 left-0 w-60 bg-slate-900 border-r border-slate-800 p-4">
        <div className="font-semibold tracking-wide text-sm mb-6">ELIXIR TEC · ADMIN</div>
        <nav className="text-sm text-slate-400 space-y-2">
          <div>Dashboard</div>
          <div>RFQs</div>
          <div>Quotations</div>
          <div>Orders</div>
          <div>Production</div>
          <div>Products / Services</div>
          <div>CMS Pages</div>
          <div>Media Library</div>
          <div>Users & Roles</div>
        </nav>
      </aside>
      <main className="ml-60 p-8">{children}</main>
    </div>
  );
}
