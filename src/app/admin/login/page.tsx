"use client";

export const dynamic = "force-dynamic";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [form, setForm] = useState({ tenantSlug: "", email: "", password: "" });
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const res = await signIn("tenant-credentials", { ...form, redirect: false });
    if (res?.error) setError("Invalid company, email, or password.");
    else router.push("/admin");
  }

  return (
    <main className="min-h-screen bg-graphite text-ivory flex items-center justify-center px-6">
      <form onSubmit={handleSubmit} className="w-full max-w-sm border border-line p-8 rounded">
        <p className="tenant-id mb-2">Tenant sign in</p>
        <h1 className="font-display text-2xl mb-6">Log in to your dashboard</h1>

        <Field label="Company" value={form.tenantSlug} onChange={(v) => setForm({ ...form, tenantSlug: v })} />
        <Field label="Email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} type="email" />
        <Field label="Password" value={form.password} onChange={(v) => setForm({ ...form, password: v })} type="password" />

        {error && <p className="text-sm text-bronzeLight mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full bg-bronze text-graphite font-medium py-2.5 rounded hover:bg-bronzeLight transition-colors"
        >
          Sign in
        </button>
      </form>
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <label className="block mb-4">
      <span className="text-xs text-steelLight">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full bg-transparent border border-line rounded px-3 py-2 text-ivory focus:outline-none focus:border-bronze"
        required
      />
    </label>
  );
}
