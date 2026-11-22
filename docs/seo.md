# SEO notes

Source of the method: github.com/Illyism/seo-skills (read as reference only, nothing from it is run). `npm test` enforces the rules below.

## Skills used and skipped

Used: seo-roast (fatal first: crawl, canonical, share images, soft 404, internal links), seo-title-optimization (titles 20 to 65 characters, keyword first, unique), unslop-seo (answer in the first 45 words, question headings, banned AI wording, no em dashes), internal-linking (every page gets 3 or more body links from other pages), seo-blog-images (alt text, width and height, lazy loading, share image size), vs-and-alternatives (honest comparison: names where the other option wins, no unsourced claims), customer-journey (guide topics), proof-kb (only claims that appear elsewhere on the site, no invented numbers).

Skipped, with reason: ahrefs-research, dataforseo-serp, aiseotracker, ai-seo-report, content-coverage, linkdr, honest-link-outreach, directory-submissions, reddit-serp, parasite-and-pr (need paid data or accounts, or are post-launch off-site work); domain-migration (no migration, old country URLs already 301); block-ai-scrapers (we want AI search visibility); blog-refresher, blitz-seo, seo-autopilot (no existing rankings yet); youtube-seo, scribiz, intro, blitz-copy, diff-marketing, understand-customers, awesome-tools (not relevant to this site now).

## Policy that the checks protect

- One global copy. No country names, currencies, exam names or national ID names in built pages. Because of that there are no country pages, so no hreflang. When country pages exist, emit a reciprocal set for en-US, en-GB, en-CA, en-NG, en-GH, en-KE plus x-default, each page listing every other page and itself, and replace the "has hreflang alternates" rule in `scripts/check-seo.mjs` with a reciprocity check.
- No fee percentage, ratings, testimonials, counts of parents or tutors, or names of other video-call products. The only video-call line allowed is that classes need no extra video-call subscription.

## Keyword map

Search volumes are not verified: no keyword tool was available. Treat these as targets to test in Search Console after launch.

| Page | Primary keyword | Also |
| --- | --- | --- |
| / | online tutors | verified online tutors, online tutoring for kids |
| /tutors/maths | maths tutors | online maths tutor, online math tutor |
| /tutors/english | english tutors | online English tutor for kids |
| /tutors/science, /physics, /chemistry, /biology | science tutors (and each science) | online science tutor |
| /tutors/yoruba | yoruba tutors | learn Yoruba online, Yoruba classes for children |
| /tutors/arabic | arabic tutors | learn Arabic online for kids, online Quran tutor |
| /teach | online tutor | become an online tutor, teach online from phone |
| /teach/yoruba, arabic, english, maths, science | yoruba tutor (and each subject) | online Yoruba tutor jobs, become an online maths tutor |
| /guides/how-to-choose-an-online-tutor | online tutor | how to choose a tutor |
| /guides/online-tutor-vs-in-person-tutor | online tutor | online vs in-person tutoring |
| /guides/what-you-need-for-online-classes | online tutoring | classes with no extra video-call subscription |
| /pricing | tutoring | online tutoring prices |
| /tutor-checks | tutor | verified tutors, tutor background checks |

By country (for when country pages go live, not on the site now): US "math tutor online", "SAT tutor"; UK "maths tutor online", "GCSE tutor", "11 plus tutor"; Canada "online math tutor", "Ontario curriculum tutor"; Nigeria "WAEC tutor", "JAMB tutor", "online Yoruba tutor"; Ghana "WASSCE tutor", "BECE tutor"; Kenya "KCSE tutor", "CBC tutor". Spelling follows the audience: "maths" for UK, Nigeria, Ghana, Kenya; "math" for US and Canada.

## Owner checklist

1. Add tiisha.com to Google Search Console (domain property, DNS TXT) and Bing Webmaster Tools. Submit https://tiisha.com/sitemap.xml in both.
2. Point tiisha.com DNS at the Railway site service, add the custom domain there, set NEXT_PUBLIC_SITE_URL=https://tiisha.com, redeploy. Redirect www to the apex.
3. Set NEXT_PUBLIC_APP_STORE_URL and NEXT_PUBLIC_PLAY_STORE_URL when the apps are live. llms.txt and the store buttons follow them.
4. Publish /privacy and /terms (they are noindex drafts) and remove noindex.
5. After launch, check Search Console for coverage and the share images in a link preview tool.
