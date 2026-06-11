# The River Church — Website

Production website for **The River Church**, Wisconsin Rapids, WI — _Igniting Fire, Faith and Freedom._

Built with **Next.js (App Router) + TypeScript**, migrated from the approved HTML mockup.
Static-first, fast, SEO-ready, and mobile responsive. No CMS, database, or auth — content
lives in code (`lib/content.ts`).

## Tech

- Next.js 16 (App Router, Turbopack) · React 19 · TypeScript
- Plain CSS design system in `app/globals.css` (ported from the mockup)
- `next/font` (Montserrat) · `next/image` (local assets in `assets/`)
- Resend for the "Plan Your Visit" contact form (`app/api/contact`)

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in values
npm run dev                  # http://localhost:3000
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Lint with ESLint |

## Environment variables

See [`.env.example`](.env.example). The contact form needs `RESEND_API_KEY`,
`CONTACT_FORM_TO`, and `CONTACT_FORM_FROM`; set `NEXT_PUBLIC_SITE_URL` to the
canonical origin (used for sitemap, canonicals, and Open Graph). Without the Resend
vars the form degrades gracefully (validates and returns a clear "not configured" message).

## Structure

```
app/            Routes: / (home), /about, /api/contact, sitemap.ts, robots.ts, layout
components/     Section + UI components (Header, Hero, Team, ContactForm, …)
lib/            site.ts (config/NAP) · content.ts (all editable copy)
assets/         Source images (imported by next/image)
public/         og.jpg, logo.jpg
```

## Editing content

- **Text, team, events, beliefs, values:** `lib/content.ts`
- **Name / address / phone / service time / links:** `lib/site.ts`
- **Styles:** `app/globals.css`

## Deployment

Deployed on **Vercel**. Set the environment variables in the Vercel project settings.

See `project_state.md` for full build/SEO/form status and open follow-ups.
