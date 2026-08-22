"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type Rfq = { id: string; rfqNumber: string; customerName: string; company: string | null; status: string; createdAt: string };

export default function AdminRfqs() {
  const [rfqs, setRfqs] = useState<Rfq[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/rfq")
      .then((r) => r.json())
      .then(setRfqs)
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen bg-graphite text-ivory px-8 py-10">
      <p className="tenant-id mb-1">Pipeline</p>
      <h1 className="font-display text-3xl mb-8">RFQs</h1>

      {loading ? (
        <p className="text-steelLight text-sm">Loading…</p>
      ) : rfqs.length === 0 ? (
        <p className="text-steelLight text-sm">No RFQs yet.</p>
      ) : (
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-steelLight border-b border-line">
              <th className="py-2">Number</th>
              <th>Customer</th>
              <th>Company</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rfqs.map((r) => (
              <tr key={r.id} className="border-b border-line/50">
                <td className="py-3 tenant-id">{r.rfqNumber}</td>
                <td>{r.customerName}</td>
                <td>{r.company || "—"}</td>
                <td className="text-bronzeLight">{r.status.replace(/_/g, " ")}</td>
                <td className="text-right">
                  <Link href={`/admin/rfqs/${r.id}`} className="hover:underline text-steelLight">
                    View →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
