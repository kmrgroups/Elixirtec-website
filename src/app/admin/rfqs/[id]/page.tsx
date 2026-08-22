"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const STATUSES = [
  "NEW", "ACKNOWLEDGED", "UNDER_REVIEW", "TECHNICAL_REVIEW", "COSTING",
  "QUOTE_PREPARATION", "QUOTE_SENT", "NEGOTIATION", "ORDER_CONFIRMED",
  "IN_PRODUCTION", "QUALITY_INSPECTION", "DISPATCHED", "COMPLETED", "CANCELLED",
];

export default function RfqDetail() {
  const { id } = useParams();
  const [rfq, setRfq] = useState<any>(null);
  const [aiBusy, setAiBusy] = useState(false);
  const [aiError, setAiError] = useState("");

  async function load() {
    const res = await fetch(`/api/rfq/${id}`);
    if (res.ok) setRfq(await res.json());
  }

  useEffect(() => {
    load();
  }, [id]);

  async function setStatus(status: string) {
    await fetch(`/api/rfq/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    load();
  }

  async function runAiSummary() {
    setAiBusy(true);
    setAiError("");
    const res = await fetch(`/api/ai/rfq-summary/${id}`, { method: "POST" });
    setAiBusy(false);
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      setAiError(body.error || "AI request failed.");
      return;
    }
    load();
  }

  if (!rfq) return <main className="min-h-screen bg-graphite text-ivory px-8 py-10">Loading…</main>;

  return (
    <main className="min-h-screen bg-graphite text-ivory px-8 py-10 max-w-2xl">
      <p className="tenant-id mb-1">{rfq.rfqNumber}</p>
      <h1 className="font-display text-3xl mb-2">{rfq.customerName}</h1>
      <p className="text-steelLight text-sm mb-8">{rfq.company} &middot; {rfq.email}</p>

      <label className="block mb-8">
        <span className="text-xs text-steelLight">Status</span>
        <select
          value={rfq.status}
          onChange={(e) => setStatus(e.target.value)}
          className="mt-1 w-full bg-graphite border border-line rounded px-3 py-2"
        >
          {STATUSES.map((s) => (
            <option key={s} value={s}>{s.replace(/_/g, " ")}</option>
          ))}
        </select>
      </label>

      <button
        onClick={runAiSummary}
        disabled={aiBusy}
        className="mb-2 border border-bronze text-bronzeLight px-4 py-2 rounded text-sm hover:bg-bronze hover:text-graphite transition-colors disabled:opacity-50"
      >
        {aiBusy ? "Generating…" : "Generate AI summary (draft only)"}
      </button>
      {aiError && <p className="text-sm text-bronzeLight mb-6">{aiError}</p>}

      <h2 className="font-display text-lg mt-8 mb-3">Activity</h2>
      <div className="space-y-3">
        {rfq.activity.map((a: any) => (
          <div key={a.id} className="border-l-2 border-line pl-4 text-sm">
            <p className="text-steelLight">{a.actor} &middot; {new Date(a.createdAt).toLocaleString()}</p>
            <p>{a.action}</p>
            {a.note && <p className="text-steelLight mt-1 whitespace-pre-wrap">{a.note}</p>}
          </div>
        ))}
      </div>
    </main>
  );
}
