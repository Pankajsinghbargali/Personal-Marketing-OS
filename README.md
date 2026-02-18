# MARKETING COMMAND CENTER (Personal Marketing OS)

A premium dark-mode Personal Marketing Operating System that centralizes campaigns, content, leads, analytics, idea capture, and personal execution workflows.

## Stack
- Next.js 15 + React + Tailwind CSS
- Next.js API routes (RESTful pattern)
- PostgreSQL + Prisma ORM
- Custom auth API (Google OAuth-ready + email/password credentials)
- JWT sessions
- Recharts analytics visualizations
- Docker + Vercel-ready deployment structure

## Core Modules
1. **Command Dashboard**: top priorities, spend, leads, revenue, follow-ups, content scheduled with auto-refresh toggle.
2. **Idea Vault**: quick capture, voice action placeholder, tags and conversion-ready structure.
3. **Campaign Manager**: multi-platform campaign schema with objective/budget/performance/learnings.
4. **Content War Room**: status planning, hook/caption/script vault structure.
5. **Lead Tracker**: kanban stages, follow-up/deal-value/call-log support.
6. **Analytics Board**: ROAS, CPL, monthly revenue, platform performance charts.
7. **Personal Growth Tracker**: learning log + deep work timer.

## Security Highlights
- Zod input validation for API payloads
- Password hashing with bcrypt
- JWT token generation
- Prisma ORM protection against SQL injection by parameterized queries
- Encrypted token storage helper for integration credentials
- Role-ready user model

## API Integrations (mock-ready service abstraction)
Service layer scaffold is included for:
- Meta Ads
- Google Ads
- LinkedIn Ads

The architecture is extensible for GA, WhatsApp Business, Gmail, Google Calendar, and webhook workflows.

## Getting Started
```bash
npm install
cp .env.example .env
npx prisma migrate dev --name init
npm run dev
```

Open `http://localhost:3000`.

## Testing
```bash
npm run test
```

Includes:
- Unit validation tests
- API route contract test

## Deployment
### Vercel
- Set env vars from `.env.example`
- Provision PostgreSQL (Neon/Supabase/RDS)
- Run Prisma migrations in build/deploy pipeline

### Docker
```bash
docker compose up --build
```

## Project Structure
```text
app/
  api/
components/
lib/
  services/
prisma/
tests/
```
