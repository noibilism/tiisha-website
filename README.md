# Tiisha marketing website

Static marketing site for Tiisha, built for search. Next.js (App Router, TypeScript), every page prerendered at build time, React Server Components by default, plain CSS using the Tiisha brand tokens, fonts through `next/font`.

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # builds and prepares .next/standalone
npm start            # serves the standalone build (PORT, default 3000)
npm test             # SEO checks on every built page (run after build)
npm run lighthouse   # Lighthouse for / and /uk (needs Chrome, set CHROME_PATH if not found)
npm run typecheck
```

## Environment variables

`NEXT_PUBLIC_*` values are inlined at build time. Change them, then rebuild.

| Variable | Default | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_APP_URL` | `https://app.tiisha.com` | The product app. "Find a tutor" goes to `/signup`, "Sign in" to `/signin`, "Apply to teach" to `/tutor/apply`. |
| `NEXT_PUBLIC_SITE_URL` | `https://tiisha.com` | Public origin of this site. Used for canonicals, hreflang, sitemap, robots and Open Graph. Set it to the real domain. |
| `NEXT_PUBLIC_ANALYTICS_ID` | unset | Unset means no analytics script. `G-XXXX` loads GA4. Any other value is used as a Plausible domain. |

## Routes

- `/` shows the UK market by default, with a market switcher. A small client component sends first-time visitors to their market from browser language or time zone, and remembers the choice in the `tiisha_market` cookie. It never runs for crawlers, Lighthouse or headless browsers, which always get the real page.
- `/us`, `/uk`, `/ca`, `/ng`, `/gh`, `/ke`: market pages with their own hero, exams line, pricing line, extra FAQ, currency and metadata, plus hreflang alternates and x-default.
- `/teach`, `/how-it-works`, `/tutor-checks`, `/pricing`, `/faq`, `/privacy`, `/terms`, and a custom 404.
- `/tutors` and `/tutors/[subject]`: subject and exam pages (maths, english, science, physics, chemistry, biology, coding, 11-plus, gcse, a-level, sat, act, waec, neco, jamb, bece, kcse).
- `/sitemap.xml`, `/robots.txt`, and generated Open Graph images (`next/og`) for the home page, each market and each subject.

`/privacy` and `/terms` are marked drafts, are `noindex`, and are left out of the sitemap until legal text is ready.

## Where the content lives

- `src/content/markets.ts`: market variants (hero, exams line, pricing line, extra FAQ), core parent FAQ, tutor FAQ.
- `src/content/subjects.ts`: subject and exam pages.
- `src/components/sections.tsx` and `MarketPage.tsx`: the home and market page.
- `src/lib/seo.ts`: metadata and JSON-LD builders.
- `src/app/tokens.css`: brand tokens copied from the design system. `src/app/globals.css`: all styles.

Copy rule: sentence case, no em dashes. `npm test` fails if a built page has an em or en dash or a bracketed placeholder.

## What `npm test` checks

For every built HTML page: one h1, title, meta description, canonical, `lang`, Open Graph and Twitter tags, valid JSON-LD with schema.org context, BreadcrumbList on inner pages, FAQ JSON-LD matching visible FAQ text, images with alt, links with text. It also checks hreflang on market pages and that the sitemap matches the built pages.
