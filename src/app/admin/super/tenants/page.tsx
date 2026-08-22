"use client";
import { useEffect, useState } from "react";

type Tenant = {
  id: string;
  name: string;
  slug: string;
  status: string;
  plan: string;
  createdAt: string;
  _count: { rfqs: number; users: number };
};

const emptyForm = { name: "", slug: "", industry: "", ownerName: "", ownerEmail: "", ownerPassword: "", plan: "BASIC" };

export default function SuperAdminTenants() {
  const [tenants, setTenants] = useState<Tenant[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(emptyForm);
  const [creating, setCreating] = useState(false);
  const [createError, setCreateError] = useState("");

  async function load() {
    setLoading(true);
    const res = await fetch("/api/admin/tenants");
    if (res.ok) setTenants(await res.json());
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  async function setStatus(id: string, status: string) {
    await fetch(`/api/admin/tenants/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    load();
  }

  async function createTenant(e: React.FormEvent) {
    e.preventDefault();
    setCreating(true);
    setCreateError("");
    const res = await fetch("/api/admin/tenants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setCreating(false);
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      setCreateError(body.error || "Could not create tenant.");
      return;
    }
    setForm(emptyForm);
    load();
  }

  return (
    <main className="min-h-screen bg-graphite text-ivory px-8 py-10">
      <p className="tenant-id mb-1">Super admin</p>
      <h1 className="font-display text-3xl mb-8">Tenants</h1>

      <form onSubmit={createTenant} className="grid md:grid-cols-3 gap-3 mb-10 border border-line p-6 rounded max-w-3xl">
        {(["name", "slug", "industry", "ownerName", "ownerEmail", "ownerPassword"] as const).map((f) => (
          <input
            key={f}
            placeholder={f}
            type={f === "ownerPassword" ? "password" : "text"}
            value={(form as any)[f]}
            onChange={(e) => setForm({ ...form, [f]: e.target.value })}
            className="bg-transparent border border-line rounded px-3 py-2 text-sm focus:outline-none focus:border-bronze"
            required={f !== "industry"}
          />
        ))}
        <select
          value={form.plan}
          onChange={(e) => setForm({ ...form, plan: e.target.value })}
          className="bg-graphite border border-line rounded px-3 py-2 text-sm"
        >
          <option value="BASIC">Basic</option>
          <option value="PROFESSIONAL">Professional</option>
          <option value="ENTERPRISE">Enterprise</option>
        </select>
        <button
          type="submit"
          disabled={creating}
          className="md:col-span-3 bg-bronze text-graphite font-medium py-2.5 rounded hover:bg-bronzeLight transition-colors disabled:opacity-50"
        >
          {creating ? "Creating…" : "Create tenant"}
        </button>
        {createError && <p className="md:col-span-3 text-sm text-bronzeLight">{createError}</p>}
      </form>

      {loading ? (
        <p className="text-steelLight text-sm">Loading…</p>
      ) : (
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="text-left text-steelLight border-b border-line">
              <th className="py-2">Company</th>
              <th>Slug</th>
              <th>Plan</th>
              <th>Status</th>
              <th>Users</th>
              <th>RFQs</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tenants.map((t) => (
              <tr key={t.id} className="border-b border-line/50">
                <td className="py-3">{t.name}</td>
                <td className="tenant-id">{t.slug}</td>
                <td>{t.plan}</td>
                <td>
                  <span
                    className={
                      t.status === "ACTIVE"
                        ? "text-success"
                        : t.status === "SUSPENDED"
                        ? "text-bronzeLight"
                        : "text-steelLight"
                    }
                  >
                    {t.status}
                  </span>
                </td>
                <td>{t._count.users}</td>
                <td>{t._count.rfqs}</td>
                <td className="text-right">
                  {t.status === "SUSPENDED" ? (
                    <button onClick={() => setStatus(t.id, "ACTIVE")} className="text-success hover:underline">
                      Activate
                    </button>
                  ) : (
                    <button onClick={() => setStatus(t.id, "SUSPENDED")} className="text-bronzeLight hover:underline">
                      Suspend
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
