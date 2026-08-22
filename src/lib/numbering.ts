/**
 * Generates a human-readable document number without depending on a missing
 * Prisma model. The RFQ/quotation tables enforce tenant-level uniqueness.
 */
export async function nextDocumentNumber(prefix: 'ETC-RFQ' | 'ETC-ORD'): Promise<string> {
  const year = new Date().getFullYear();
  const suffix = `${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
  return `${prefix}-${year}-${suffix}`;
}
