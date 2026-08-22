# Elixir Tec Corporation Platform — Foundation Scaffold

This is the starting foundation for the full rebuild: Next.js 14 (App Router) +
TypeScript + Tailwind + Prisma/Postgres + NextAuth. It intentionally does
**not** include the RFQ engine, AI quotation system, WhatsApp integration, or
real CMS content yet — those are the next phases. What's here proves the
stack, deploy pipeline, and data model foundation.

## What's included
- `prisma/schema.prisma` — the core data model: users/roles, customers, CMS
  (products, services, pages/sections, media), and the full RFQ → quote →
  order → production → dispatch pipeline.
- `src/app/` — App Router structure with a placeholder public homepage and an
  admin shell (`/admin`) with a distinct visual design.
- `src/lib/prisma.ts` — Prisma client singleton.
- `src/lib/numbering.ts` — sequential document numbering (ETC-RFQ-2026-000001
  style) via a transaction-safe counter.

## Getting this running

1. **Create a new GitHub repo** and push this folder to it.
2. **Create a Neon Postgres database** at neon.tech (free tier is fine to
   start). Copy the connection string.
3. **Create a new Vercel project** and import the GitHub repo.
4. In Vercel → Project → Settings → Environment Variables, add everything in
   `.env.example` (copy it to `.env.local` for local dev too):
   - `DATABASE_URL` — from Neon
   - `NEXTAUTH_URL` / `NEXTAUTH_SECRET`
   - `RESEND_API_KEY`, `RFQ_FROM_EMAIL`, `RFQ_TO_EMAIL`
   - `BLOB_READ_WRITE_TOKEN` — from Vercel Blob (Storage tab)
   - WhatsApp Cloud API credentials (once Meta approval is in place)
   - `ANTHROPIC_API_KEY` — for the AI quotation drafting + chatbot
5. Locally:
   ```bash
   npm install
   npx prisma migrate dev --name init
   npm run dev
   ```
6. Push to GitHub — Vercel auto-deploys on commit, same workflow as before.

## Next build phases (in order)
1. **Auth + RBAC** — NextAuth credentials provider wired to the `User` model,
   admin route protection by role.
2. **CMS admin CRUD** — products, services, pages/sections, media library.
3. **Public site** — real homepage, About, Products, Services, Contact, etc.,
   pulling from the CMS.
4. **RFQ system** — public RFQ form, file uploads (Vercel Blob), email +
   WhatsApp notification on submit, admin RFQ inbox + assignment.
5. **AI quotation engine** — draft generation with mandatory "REQUIRES HUMAN
   INPUT" flags on any missing commercial data, human review/approval
   workflow, PDF generation.
6. **Order → production → dispatch tracking**, customer portal, chatbot,
   analytics.

## Notes carried over from the previous site
- Company contact: Operations@elixirtec.com, +91-99020 09152, Hebbal
  Industrial Estate, Mysuru.
- Footer must read "Powered By KMR Group of Companies" linking to
  https://www.kmr-groups.com in a new tab — the only KMR mention allowed
  anywhere on the public site.
- The Resend API key used previously was exposed in a screenshot and should
  be treated as compromised — generate a fresh one, don't reuse it.
