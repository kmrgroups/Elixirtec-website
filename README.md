# Foundry — Phase 1 Foundation

A brand-new, standalone multi-tenant corporate website + CMS + RFQ platform.
Not connected to Elixir Tec in any way — new codebase, new design identity
("Foundry": one module, cast into independent-looking tenant sites).

## What's in this foundation

- **Next.js 14 / TypeScript / Tailwind** — free-tier friendly on Vercel
- **Prisma schema** (`prisma/schema.prisma`) — full multi-tenant data model:
  Tenants, Domains, TenantUsers (RBAC), Website/Pages/Sections/Menus/Media
  (CMS), Products/Services/Verticals/Processes/Equipment/Certifications,
  Careers, RFQ → Quotation pipeline, PlatformUser (super admin) + AuditLog
- **NextAuth** with two login surfaces: tenant login (scoped by company)
  and platform super-admin login — kept separate on purpose
- **Tenant isolation boundary**: `src/lib/tenant.ts` — every admin page/API
  route must call `requireTenantSession()` and scope every query by the
  returned `tenantId`. This is the single place isolation is enforced;
  never trust a tenantId from client input.
- A working demo: public marketing homepage (`/`) + tenant login
  (`/admin/login`) + a dashboard (`/admin`) that queries real tenant-scoped
  counts from the database.

## Deploying on the free tier (same workflow as before)

1. Create a new GitHub repo, upload this whole folder's contents.
2. Create a free Neon Postgres project, copy its connection string.
3. Import the repo into Vercel. Set env vars:
   - `DATABASE_URL` — the Neon connection string
   - `NEXTAUTH_SECRET` — any long random string
   - `NEXTAUTH_URL` — your Vercel URL (update after first deploy)
4. After first deploy, run the schema against your database. Easiest path
   with no local machine: use Neon's SQL editor to run
   `npx prisma db push` output, or tell me once DATABASE_URL is set and
   I'll generate the exact SQL to paste in.
5. Seed a demo login: the seed script creates
   `admin@platform.local` (super admin) and `owner@demo.local` (tenant
   "demo"), both password `ChangeMe123!` — change immediately.

## Roadmap (matches the master spec's own phases)

- [x] Phase 1 — architecture, database, auth, multi-tenancy
- [x] Phase 2 — Super Admin panel (`/admin/super/tenants`: create, suspend,
      activate tenants) + tenant admin shell with sidebar nav
- [~] Phase 3 — CMS: `Page`/`Section` data model + API to create pages exists;
      no drag-and-drop section editor UI yet (Section.content is a JSON blob
      ready for a builder to write into)
- [~] Phase 4 — Products: full CRUD (API + admin UI) + public listing on the
      tenant homepage. Services/Verticals/Processes/Equipment share the exact
      same schema shape but don't have their own CRUD screens yet — copy the
      products route/page as a template, it's a ~20 line change per entity
- [ ] Phase 5 — Clients, Certifications, Leadership, Careers: schema exists,
      no CRUD screens yet
- [x] Phase 6 — RFQ: public intake form → API → tenant-scoped tracking with
      status pipeline and activity trail, all working end to end
- [x] Phase 7 — Quotation: API creates a draft quotation from an RFQ with
      line items and totals; stays DRAFT until a human marks it sent (no
      printable/PDF view built yet — the data is ready for one)
- [~] Phase 8 — AI RFQ assistant: `/api/ai/rfq-summary/[id]` calls the
      Anthropic API to draft an internal summary, written to the RFQ's
      activity log for human review. Requires you to set an
      `ANTHROPIC_API_KEY` env var — returns a clear error until you do.
      No AI chatbot yet, no AI quotation drafting yet.
- [x] Phase 9 — SEO: dynamic sitemap.xml + robots.txt covering every active
      tenant; per-page SEO fields already in the schema
- [~] Phase 10 — baseline security headers + a simple in-memory rate limit
      on RFQ submissions. Real testing, CSRF tokens, and a production-grade
      rate limiter (e.g. Upstash) are still open.

`[x]` = working end to end · `[~]` = data model + partial implementation,
UI or integration still needed · `[ ]` = not started.

### What's genuinely not buildable without your input
- **AI chatbot / AI content assistant** — needs the `ANTHROPIC_API_KEY` above
- **WhatsApp Business API, transactional email** — need your own accounts/keys
- **Custom domains per tenant** — needs DNS you control per customer
- **Real PDF quotations** — can build next; needs a decision on library
- **Subscription billing** — needs a payment processor account (e.g. Stripe)

Tell me which of these to wire up first once you're ready, or I can keep
filling in the `[~]` and `[ ]` items (Services/Verticals/Careers CRUD,
the page-builder UI, printable quotations) next.
