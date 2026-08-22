import { prisma } from './prisma';

/**
 * Generates the next sequential document number for a given prefix
 * (e.g. "ETC-RFQ", "ETC-ORD"), scoped to the current year.
 * Uses a transaction so concurrent submissions don't collide.
 */
export async function nextDocumentNumber(prefix: 'ETC-RFQ' | 'ETC-ORD'): Promise<string> {
  const year = new Date().getFullYear();
  const settingKey = `sequence:${prefix}:${year}`;

  return prisma.$transaction(async (tx) => {
    const existing = await tx.siteSetting.findUnique({ where: { key: settingKey } });
    const current = (existing?.value as { count?: number } | undefined)?.count ?? 0;
    const next = current + 1;

    await tx.siteSetting.upsert({
      where: { key: settingKey },
      create: { key: settingKey, value: { count: next } },
      update: { value: { count: next } }
    });

    return `${prefix}-${year}-${String(next).padStart(6, '0')}`;
  });
}
