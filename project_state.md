# Project State — The River Church Website

_Last updated: 2026-06-11_

## Overview

Production-ready **Next.js** website for **The River Church** (Wisconsin Rapids, WI),
migrated from the approved single-file HTML mockup (`../river-church-mockup/index.html`).
The mockup is the source of truth for layout, color, type, spacing, and section order.
This is a **migration, not a redesign**.

- **Framework:** Next.js 16.2.9 (App Router, Turbopack) · React 19.2.4 · TypeScript 5.9
- **Styling:** Plain CSS ported verbatim from the mockup into `app/globals.css`, then
  extended for responsiveness / forms / About page / a11y. No CSS framework.
- **Fonts:** Montserrat via `next/font/google` (self-hosted, no layout shift).
- **Images:** Local assets in `assets/`, imported and served through `next/image`.
- **Email:** Resend (via `/api/contact` route handler).
- **Rendering:** Static-first. Home + About are static; only `/api/contact` is dynamic.
- **Scope:** 2 pages — Home (`/`) and About (`/about`). No CMS, DB, or auth (by design).

## Current Status

**🎉 Complete & live in production.** All 10 milestones done. Site builds/lints/type-checks
clean, is pushed to GitHub, and is deployed and verified on Vercel.

- **Live:** https://river-church-beige.vercel.app
- **Repo:** https://github.com/jpiercedev/the-river-church (push-to-deploy connected)

The only outstanding item is operational, not engineering: provide Resend credentials so the
contact form sends live email (it currently validates and responds gracefully without them).

## Milestone Progress

| # | Milestone | Status |
|---|-----------|--------|
| 1 | Discovery | ✅ Complete |
| 2 | Next.js Foundation | ✅ Complete |
| 3 | Homepage Conversion | ✅ Complete (visually verified) |
| 4 | About Page | ✅ Complete (visually verified) |
| 5 | Forms (Resend) | ✅ Complete (delivery pending API key) |
| 6 | SEO | ✅ Complete (verified) |
| 7 | Quality Assurance | ✅ Clean build / lint / types |
| 8 | GitHub | ✅ Complete |
| 9 | Vercel | ✅ Complete — deployed & verified live |
| 10 | Final Verification | ✅ Complete |

## Completed Tasks

- Inspected directory, assets (7 images), and the mockup HTML/CSS; documented the design system.
- Retrieved + summarized the church's Statement of Faith from theriverchurchinc.com/our_beliefs.
- Scaffolded Next.js (TypeScript, App Router, ESLint, no Tailwind, `@/*` alias).
- Ported the mockup CSS into `app/globals.css`; added responsive breakpoints (1024/860/520),
  form styles, About-page styles, zero-JS mobile menu, focus-visible, skip link, reduced-motion.
- Built section components: Header, DailyVerse, Hero, MissionIntro, LatestMessage, Events,
  Team, Location, PlanYourVisit, Footer, StructuredData, ContactForm.
- Centralized all copy + NAP + team + doctrine in `lib/content.ts` and `lib/site.ts`.
- Homepage composed from components; matches mockup (topbar, header, verse, hero, mission
  cards, message, events, team, location, plan-your-visit form, footer).
- About page: page hero, 7 Core Values, 10-point Statement of Faith (with scripture refs), CTA.
- Contact form: client validation, honeypot, loading/success/error states; `/api/contact`
  route with Resend, server validation, HTML escaping, graceful no-config fallback.
- SEO: per-page metadata, canonicals, Open Graph + Twitter, JSON-LD (Church + WebSite +
  recurring service Event), `sitemap.ts`, `robots.ts`, church favicon/apple-icon, one H1/page.
- Verified: clean `next build`, clean `eslint`, contact API behaviors (5 cases), robots,
  sitemap, metadata, JSON-LD, desktop + mobile rendering via live preview.

## Remaining Tasks

All engineering milestones complete. Operational follow-ups (need church-provided info):

- [ ] Provide Resend creds (`RESEND_API_KEY`, `CONTACT_FORM_TO`, `CONTACT_FORM_FROM`) so the
      form sends live email, then redeploy.
- [ ] (Optional) Add a custom domain in Vercel; update `NEXT_PUBLIC_SITE_URL` to match.
- [ ] Replace placeholder social / media / giving links with real church URLs.
- [ ] Confirm the correct public phone number (see Known Issues).
- [ ] (Optional) Submit the sitemap to Google Search Console.

## Environment Variables

Defined in `.env.example` (copy to `.env.local`; never commit real values):

| Variable | Purpose | Status |
|----------|---------|--------|
| `RESEND_API_KEY` | Resend API key for sending mail | ⚠️ Not provided — needed for live email |
| `CONTACT_FORM_TO` | Recipient inbox for submissions | ⚠️ Not provided |
| `CONTACT_FORM_FROM` | Verified Resend sender | ⚠️ Not provided |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin (sitemap/OG/canonical) | ✅ Set on Vercel = `https://river-church-beige.vercel.app` |

Without the three Resend vars, the form validates and responds gracefully with a 503
("not fully configured") instead of sending — no crash, no leaked details.

## GitHub Repository

- Authenticated CLI account: **jpiercedev** (`gh` verified).
- **Repo:** https://github.com/jpiercedev/the-river-church (public, default branch `main`).
- Initial commit pushed. The repo root **is** the Next.js project, so Vercel needs no
  "root directory" override — it auto-detects Next.js at the repo root.

## Vercel Deployment

- **Status: deployed & verified live.** ✅
- **Production URL:** https://river-church-beige.vercel.app
- **Project:** `jpiercedevs-projects/river-church` (deployed via Vercel CLI with a token the
  owner supplied).
- **GitHub integration:** the CLI connected the repo, so pushes to `jpiercedev/the-river-church`
  `main` now trigger automatic production deployments.
- **Deployment Protection:** the team had Vercel Authentication (SSO) on by default, which
  returned 401 on the deployment URLs. Disabled `ssoProtection` for this project so the public
  church site is reachable anonymously.
- `NEXT_PUBLIC_SITE_URL` set to the production URL and baked into the build.
- **Verified on the live URL:** `/` 200, `/about` 200, correct `<title>`/canonical/OG,
  JSON-LD Church node, `robots.txt`, `sitemap.xml`, optimized images, and `/api/contact`
  returning a graceful 503 (no Resend creds yet).

## Form Status

**Operational** end-to-end except live email delivery (blocked on `RESEND_API_KEY` +
`CONTACT_FORM_TO` + `CONTACT_FORM_FROM`). Validation, honeypot, and all UI states work.

## SEO Status

**Complete.** Metadata + canonicals (per page), Open Graph + Twitter, JSON-LD (Church /
LocalBusiness + WebSite + service Event), sitemap.xml, robots.txt, semantic headings,
descriptive alt text, accessible nav, internal linking. Image optimization + static
rendering for performance.

## Known Issues

- **Phone discrepancy:** mockup/footer list `715-257-0261`; some external directories list
  `(715) 423-3222`. Using the mockup value (source of truth). Confirm with the church.
- **Placeholder outbound links:** social icons (Facebook/Instagram/YouTube) and media CTAs
  ("Watch Latest Message", "Give", "Event Details") point to in-page anchors / generic
  destinations until the church supplies real URLs (giving platform, YouTube channel, etc.).
- **Geo coordinates:** omitted from JSON-LD (no authoritative lat/long found); a Google Maps
  link by address is used for "Get Directions" instead.
- **No precise OG render:** `og.jpg` reuses the worship photo (1440×1080) rather than a
  1200×630 branded card. Acceptable; can be refined later.

## Next Recommendations

1. Provision Resend (API key + verified sender domain) and set the 3 contact env vars.
2. Set `NEXT_PUBLIC_SITE_URL` to the final domain for correct canonical/OG URLs.
3. Replace placeholder social + media/giving links with the church's real URLs.
4. Confirm the correct public phone number.
5. (Optional) Add a custom domain in Vercel and submit the sitemap to Google Search Console.
