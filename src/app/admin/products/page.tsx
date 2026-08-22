"use client";
import { useEffect, useState } from "react";

type Product = {
  id: string;
  name: string;
  slug: string;
  sku: string | null;
  published: boolean;
};

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [form, setForm] = useState({ name: "", slug: "", sku: "", shortDesc: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function load() {
    setLoading(true);
    const res = await fetch("/api/products");
    if (res.ok) setProducts(await res.json());
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  async function createProduct(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      setError(body.error || "Could not create product.");
      return;
    }
    setForm({ name: "", slug: "", sku: "", shortDesc: "" });
    load();
  }

  async function togglePublish(p: Product) {
    await fetch(`/api/products/${p.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ published: !p.published }),
    });
    load();
  }

  async function remove(id: string) {
    await fetch(`/api/products/${id}`, { method: "DELETE" });
    load();
  }

  return (
    <main className="min-h-screen bg-graphite text-ivory px-8 py-10">
      <p className="tenant-id mb-1">Catalog</p>
      <h1 className="font-display text-3xl mb-8">Products</h1>

      <form onSubmit={createProduct} className="grid md:grid-cols-4 gap-3 mb-10 border border-line p-6 rounded max-w-3xl">
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="bg-transparent border border-line rounded px-3 py-2 text-sm"
          required
        />
        <input
          placeholder="Slug (url-name)"
          value={form.slug}
          onChange={(e) => setForm({ ...form, slug: e.target.value })}
          className="bg-transparent border border-line rounded px-3 py-2 text-sm"
          required
        />
        <input
          placeholder="SKU"
          value={form.sku}
          onChange={(e) => setForm({ ...form, sku: e.target.value })}
          className="bg-transparent border border-line rounded px-3 py-2 text-sm"
        />
        <input
          placeholder="Short description"
          value={form.shortDesc}
          onChange={(e) => setForm({ ...form, shortDesc: e.target.value })}
          className="bg-transparent border border-line rounded px-3 py-2 text-sm"
        />
        <button className="md:col-span-4 bg-bronze text-graphite font-medium py-2.5 rounded hover:bg-bronzeLight transition-colors">
          Add product
        </button>
        {error && <p className="md:col-span-4 text-sm text-bronzeLight">{error}</p>}
      </form>

      {loading ? (
        <p className="text-steelLight text-sm">Loading…</p>
      ) : (
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-steelLight border-b border-line">
              <th className="py-2">Name</th>
              <th>SKU</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-b border-line/50">
                <td className="py-3">{p.name}</td>
                <td>{p.sku || "—"}</td>
                <td className={p.published ? "text-success" : "text-steelLight"}>
                  {p.published ? "Published" : "Draft"}
                </td>
                <td className="text-right space-x-4">
                  <button onClick={() => togglePublish(p)} className="text-bronzeLight hover:underline">
                    {p.published ? "Unpublish" : "Publish"}
                  </button>
                  <button onClick={() => remove(p.id)} className="text-steelLight hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
