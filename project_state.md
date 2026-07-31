# Project State — The River Church Website

_Last updated: 2026-07-31_

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

### 2026-07-31 content update

Client round of changes: confirmed phone number, real Tithe.ly giving link, watch buttons wired
to YouTube/Facebook, and five church-supplied photos added. New on the homepage: a
**Life At The River** photo band between Team and Location, and a two-column **Plan Your Visit**
(welcome photo beside the form). `worship-center.jpg` no longer does double duty — the Latest
Message section now uses a dedicated worship photo.

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
- [x] Replace placeholder social / media / giving links with real church URLs. _(2026-07-31)_
- [x] Confirm the correct public phone number — **715-423-3222**. _(2026-07-31)_
- [ ] Supply fresh featured-event copy + graphic (the Father's Day feature is stale).
- [ ] (Optional) Submit the sitemap to Google Search Console.

## Outbound Links

All live in `lib/site.ts` under `links`. External URLs render through `components/SmartLink.tsx`,
which emits a plain anchor with `target="_blank" rel="noopener noreferrer"`; internal routes and
in-page anchors still use `next/link`.

| Link | URL | Used by |
|------|-----|---------|
| Give (Tithe.ly) | `give.tithe.ly/?formId=a61803f7-…` | header GIVE, "Give & Serve" card, footer |
| YouTube | `youtube.com/@theriverchurchinc5721` | "Watch On YouTube", social icons, footer |
| Facebook | `facebook.com/theriverchurchinc` | social icons (header + footer) |
| Facebook videos | `facebook.com/theriverchurchinc/videos` | "Watch On Facebook" |
| Facebook events | `facebook.com/theriverchurchinc/events` | "See All Events" |
| Instagram | `instagram.com/theriverinc/` | social icons (header + footer) |

The only remaining `#visit` links are the ones that *should* reach the contact form: the
"Prayer" nav item, both "Plan Your Visit" CTAs, and the footer's Prayer Request entry.

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

- ~~**Phone discrepancy**~~ — resolved 2026-07-31. The church confirmed **715-423-3222**;
  the old mockup value (`715-257-0261`) has been removed everywhere.
- ~~**Placeholder outbound links**~~ — resolved 2026-07-31. All social, giving, and media
  CTAs now point at real church destinations (see Outbound Links below).
- **Old site is offline:** `theriverchurchinc.com` now redirects to
  `mychurchwebsite.net/suspend.php` (host suspended the account). The Facebook and Instagram
  URLs below were recovered from the Feb 2025 Wayback snapshot, not the live site.
- **Stale featured event:** the homepage still features the June 21 Father's Day service from
  the original mockup. Needs fresh event copy + graphic from the church.
- **Geo coordinates:** omitted from JSON-LD (no authoritative lat/long found); a Google Maps
  link by address is used for "Get Directions" instead.
- **OG image:** `og.jpg` is now a 1200×630 center-crop of the worship photo. A bespoke
  branded card (logo + tagline) could be created later for extra polish.

## Quality Review

A final adversarial multi-agent review ran across four dimensions (correctness/security,
SEO, accessibility, fidelity/responsive). Correctness/security and fidelity came back clean.
All 6 confirmed findings were fixed and redeployed (commit `21fab73`):

- a11y — `<main tabIndex={-1}>` so the skip link moves focus into content.
- a11y — darkened `--muted` (`#6d7986` → `#5a6673`) to meet WCAG AA contrast on white & cream.
- a11y — contact form focuses the first invalid field and announces errors via `role="alert"`.
- a11y — state-neutral `aria-label="Navigation menu"` on the mobile disclosure.
- seo — homepage sitemap URL matches the canonical (no trailing slash).
- seo — OG/Twitter image regenerated at 1200×630 (1.91:1) with updated declared dimensions.

## Next Recommendations

1. Provision Resend (API key + verified sender domain) and set the 3 contact env vars.
2. Set `NEXT_PUBLIC_SITE_URL` to the final domain for correct canonical/OG URLs.
3. Replace placeholder social + media/giving links with the church's real URLs.
4. Confirm the correct public phone number.
5. (Optional) Add a custom domain in Vercel and submit the sitemap to Google Search Console.
