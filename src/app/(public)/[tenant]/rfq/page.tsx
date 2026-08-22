"use client";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function RfqPage() {
  const params = useParams();
  const tenant = params.tenant as string;
  const [form, setForm] = useState({ customerName: "", company: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const res = await fetch("/api/rfq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tenantSlug: tenant, ...form }),
    });
    setStatus(res.ok ? "sent" : "error");
  }

  if (status === "sent") {
    return (
      <main className="min-h-screen bg-graphite text-ivory flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <p className="tenant-id mb-3">Request received</p>
          <h1 className="font-display text-2xl">We'll be in touch shortly.</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-graphite text-ivory flex items-center justify-center px-6 py-16">
      <form onSubmit={submit} className="w-full max-w-md border border-line p-8 rounded">
        <p className="tenant-id mb-2">Request for quotation</p>
        <h1 className="font-display text-2xl mb-6">Tell us what you need</h1>

        {(["customerName", "company", "email", "phone"] as const).map((f) => (
          <input
            key={f}
            placeholder={f === "customerName" ? "Your name" : f}
            value={(form as any)[f]}
            onChange={(e) => setForm({ ...form, [f]: e.target.value })}
            className="w-full mb-4 bg-transparent border border-line rounded px-3 py-2 focus:outline-none focus:border-bronze"
            required={f === "customerName" || f === "email"}
          />
        ))}
        <textarea
          placeholder="What are you looking to order?"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full mb-4 bg-transparent border border-line rounded px-3 py-2 h-28 focus:outline-none focus:border-bronze"
        />
        <button
          disabled={status === "sending"}
          className="w-full bg-bronze text-graphite font-medium py-2.5 rounded hover:bg-bronzeLight transition-colors disabled:opacity-50"
        >
          {status === "sending" ? "Sending…" : "Submit request"}
        </button>
        {status === "error" && <p className="text-sm text-bronzeLight mt-3">Something went wrong — please try again.</p>}
      </form>
    </main>
  );
}
