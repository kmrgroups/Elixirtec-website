"use client";

export const dynamic = "force-dynamic";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SuperAdminLogin() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const res = await signIn("platform-credentials", { ...form, redirect: false });
    if (res?.error) setError("Invalid email or password.");
    else router.push("/admin/super/tenants");
  }

  return (
    <main className="min-h-screen bg-graphite text-ivory flex items-center justify-center px-6">
      <form onSubmit={handleSubmit} className="w-full max-w-sm border border-line p-8 rounded">
        <p className="tenant-id mb-2">Platform sign in</p>
        <h1 className="font-display text-2xl mb-6">Super admin</h1>
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full mb-4 bg-transparent border border-line rounded px-3 py-2 focus:outline-none focus:border-bronze"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full mb-4 bg-transparent border border-line rounded px-3 py-2 focus:outline-none focus:border-bronze"
          required
        />
        {error && <p className="text-sm text-bronzeLight mb-4">{error}</p>}
        <button className="w-full bg-bronze text-graphite font-medium py-2.5 rounded hover:bg-bronzeLight transition-colors">
          Sign in
        </button>
      </form>
    </main>
  );
}
