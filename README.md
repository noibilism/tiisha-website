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
| `NEXT_PUBLIC_SITE_URL` | `https://tiisha.com` | Public origin of this site. Used for canonicals, sitemap, robots and Open Graph. Set it to the real domain. |
| `NEXT_PUBLIC_APP_STORE_URL` | unset | App Store listing (https). Unset shows a disabled "Coming soon" button, never a dead link. |
| `NEXT_PUBLIC_PLAY_STORE_URL` | unset | Google Play listing (https). Same behaviour as above. |
| `NEXT_PUBLIC_ANALYTICS_ID` | unset | Unset means no analytics script. `G-XXXX` loads GA4. Any other value is used as a Plausible domain. |

## Routes

- `/`: the home page. One global copy set, no country content.
- `/teach`, `/how-it-works`, `/tutor-checks`, `/pricing`, `/faq`, `/privacy`, `/terms`, and a custom 404.
- `/tutors` and `/tutors/[subject]`: subject pages (maths, english, science, physics, chemistry, biology, coding).
- `/sitemap.xml`, `/robots.txt`, and generated Open Graph images (`next/og`) for the home page and each subject.
- Old `/us`, `/uk`, `/ca`, `/ng`, `/gh`, `/ke` and the old exam pages redirect with a 301 (see `next.config.ts`).

Country copy is not on the site for now. The removed text is in `docs/country-copy-archive.md`, for when the site goes live in specific countries.

`/privacy` and `/terms` are marked drafts, are `noindex`, and are left out of the sitemap until legal text is ready.

## Where the content lives

- `src/content/faq.ts`: core parent FAQ and tutor FAQ. The tutor service fee line is kept apart so it only shows on `/teach`.
- `src/content/subjects.ts`: subject pages.
- `src/components/sections.tsx`: the home page sections.
- `src/lib/seo.ts`: metadata and JSON-LD builders.
- `src/app/tokens.css`: brand tokens copied from the design system. `src/app/globals.css`: all styles.

Copy rule: sentence case, no em dashes. `npm test` fails if a built page has an em or en dash or a bracketed placeholder.

## What `npm test` checks

For every built HTML page: one h1, title, meta description, canonical, `lang`, Open Graph and Twitter tags, valid JSON-LD with schema.org context, BreadcrumbList on inner pages, FAQ JSON-LD matching visible FAQ text, images with alt, links with text. It also fails on any country, currency, exam or national ID name, any hreflang tag, any fee mention outside `/teach`, a missing 301 for the old country and exam URLs, and a sitemap that does not match the built pages.
