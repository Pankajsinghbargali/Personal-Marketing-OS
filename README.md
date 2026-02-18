# MARKETING COMMAND CENTER (Personal Marketing OS)

A premium dark-mode Personal Marketing Operating System built with Next.js, Tailwind, Prisma, PostgreSQL, and modular API routes.

## Features (MVP)

- **Command Dashboard**: priorities, spend, leads, revenue, follow-ups, and quick-glance performance cards.
- **Idea Vault**: quick capture model with tags, priority, status, and campaign linkage.
- **Campaign Manager**: multi-platform campaign structure with performance fields.
- **Content War Room**: API-ready content records and publishing status support.
- **Lead Tracker**: CRM pipeline stages and follow-up structure.
- **Analytics Board**: ROAS/CPL trend chart with filter-ready data shape.
- **Personal Growth Tracker**: architecture-ready module area via navigation.
- **Authentication**: Email+password JWT route + Google OAuth placeholder endpoint.
- **Integration Layer**: modular sync service stubs for Meta Ads, Google Ads, GA, WhatsApp, Gmail, Calendar.

## Tech Stack

- Next.js 15 + React 19 + TypeScript
- Tailwind CSS
- Prisma ORM
- PostgreSQL
- Recharts
- Zod validation
- Vitest tests

## Security Baseline

- Input validation with Zod
- JWT session creation and verification helper
- RBAC role type structure (`admin`, `editor`, `viewer`)
- Environment variable template
- REST route-level error responses

## Project Structure

```text
app/
  api/
    analytics/
    auth/
    campaigns/
    content/
    dashboard/
    ideas/
    integrations/
    leads/
  page.tsx
components/
lib/
  auth/
  data/
  services/
  validation/
prisma/
tests/
```

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Configure environment:

```bash
cp .env.example .env
```

3. Start PostgreSQL (optional for mock mode, required for Prisma migrations):

```bash
docker compose up -d db
```

4. Run development server:

```bash
npm run dev
```

## Testing

```bash
npm run test
```

## Docker

```bash
docker compose up --build
```

## Deployment

- Vercel-compatible Next.js app
- Add production `DATABASE_URL`, `JWT_SECRET`, and Google OAuth env vars in Vercel settings
- Run `prisma migrate deploy` in CI/CD before startup

## Phase 2 Ideas

- AI insights engine
- Auto PDF report generator
- Competitor tracker
- CPL spike alerts
- Weekly summary email automation
