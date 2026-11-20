// Checks every built HTML page for the basics: one h1, title, description, canonical, valid JSON-LD.
// Run after `npm run build`.
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";
import { parse } from "node-html-parser";

const ROOT = ".next/server/app";
if (!existsSync(ROOT)) {
  console.error("No build output found. Run `npm run build` first.");
  process.exit(1);
}

const SKIP = new Set(["_global-error.html"]);
function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith(".html") ? [p] : [];
  });
}

const pages = walk(ROOT).filter((p) => !SKIP.has(p.split("/").pop()));
const errors = [];
const warnings = [];
const fail = (page, msg) => errors.push(`${page}: ${msg}`);
const warn = (page, msg) => warnings.push(`${page}: ${msg}`);

const normalise = (s) => s.replace(/\s+/g, " ").trim();

for (const file of pages) {
  const page = "/" + relative(ROOT, file).replace(/index\.html$/, "").replace(/\.html$/, "");
  const root = parse(readFileSync(file, "utf8"));

  const h1 = root.querySelectorAll("h1");
  if (h1.length !== 1) fail(page, `expected 1 h1, found ${h1.length}`);

  const title = root.querySelector("title")?.text.trim();
  if (!title) fail(page, "missing title");
  else if (title.length > 70) warn(page, `title is ${title.length} characters`);

  const desc = root.querySelector('meta[name="description"]')?.getAttribute("content")?.trim();
  if (!desc) fail(page, "missing meta description");
  else if (desc.length > 160) warn(page, `description is ${desc.length} characters`);

  if (!root.querySelector('link[rel="canonical"]')?.getAttribute("href")) fail(page, "missing canonical");
  if (!root.querySelector("html")?.getAttribute("lang")) fail(page, "missing html lang");
  if (!root.querySelector('meta[property="og:title"]')) fail(page, "missing og:title");
  if (!root.querySelector('meta[name="twitter:card"]')) fail(page, "missing twitter:card");

  const ld = root.querySelectorAll('script[type="application/ld+json"]');
  if (ld.length === 0) fail(page, "no JSON-LD");
  const types = [];
  const faqQs = [];
  for (const s of ld) {
    try {
      const data = JSON.parse(s.text);
      if (data["@context"] !== "https://schema.org") fail(page, "JSON-LD without schema.org context");
      if (!data["@type"]) fail(page, "JSON-LD without @type");
      types.push(data["@type"]);
      if (data["@type"] === "FAQPage") for (const q of data.mainEntity) faqQs.push(q.name);
    } catch (e) {
      fail(page, `invalid JSON-LD: ${e.message}`);
    }
  }
  const isNotFound = page === "/_not-found";
  if (!isNotFound && !types.includes("BreadcrumbList") && page !== "/") {
    fail(page, "missing BreadcrumbList");
  }

  // Visible FAQ text must match the FAQPage JSON-LD.
  for (const el of root.querySelectorAll("script, style")) el.remove();
  const visible = normalise(root.querySelector("main")?.text || "");
  for (const q of faqQs) if (!visible.includes(normalise(q))) fail(page, `FAQ question not visible: ${q}`);

  // Copy rules.
  const text = root.querySelector("body")?.text || "";
  if (/[—–]/.test(text) || /[—–]/.test(desc || "")) fail(page, "contains an em or en dash");
  if (/\[[^\]]{3,}\]/.test(visible)) fail(page, "contains a bracketed placeholder");

  for (const img of root.querySelectorAll("img")) {
    if (!img.hasAttribute("alt")) fail(page, "img without alt");
    const src = img.getAttribute("src") || "";
    if (src.startsWith("/illustrations/")) {
      if (!img.getAttribute("width") || !img.getAttribute("height")) fail(page, `${src} has no width and height`);
      if (!existsSync(join("public", src))) fail(page, `${src} does not exist`);
      if (!img.getAttribute("alt") && img.getAttribute("aria-hidden") !== "true") fail(page, `${src} is decorative but not aria-hidden`);
    }
  }
  for (const a of root.querySelectorAll("a")) {
    const label = normalise(a.text) || a.getAttribute("aria-label");
    if (!label) fail(page, `link without text: ${a.getAttribute("href")}`);
    if (/^(click here|here|read more)$/i.test(label || "")) fail(page, `non descriptive link text: ${label}`);
  }
}

// Global copy only: no country, currency, exam or national ID names anywhere in a built page.
const COUNTRY_WORDS = /\b(United States|United Kingdom|Canad\w*|Nigeria\w*|Ghana\w*|Kenya\w*|Lagos|Nairobi|Toronto|Manchester|naira|cedis?|shillings?|pounds?|dollars?|Common Core|National Curriculum|Ghana Card|WASSCE)\b/i;
const COUNTRY_CODES = /\b(US|UK|USA|GCSE|SAT|ACT|WAEC|NECO|JAMB|BECE|KCSE|CBC|BVN|NIN|NGN|GBP|USD|CAD|GHS|KES)\b|11 plus|A level/;
for (const file of pages) {
  const page = "/" + relative(ROOT, file).replace(/index\.html$/, "").replace(/\.html$/, "");
  const root = parse(readFileSync(file, "utf8"));
  for (const el of root.querySelectorAll("style")) el.remove();
  const fromLd = root.querySelectorAll('script[type="application/ld+json"]').map((e) => e.text).join(" ");
  const meta = root.querySelectorAll("meta").map((m) => m.getAttribute("content") || "").join(" ");
  const text = `${root.querySelector("title")?.text || ""} ${meta} ${fromLd} ${root.querySelector("body")?.structuredText || ""}`;
  const hit = text.match(COUNTRY_WORDS) || text.match(COUNTRY_CODES);
  if (hit) fail(page, `country-specific text: ${hit[0]}`);
  if (/hreflang/.test(readFileSync(file, "utf8"))) fail(page, "has hreflang alternates");
  if (page !== "/teach" && /\b(service fee|platform fee|fees?)\b|15%/i.test(root.querySelector("main")?.text || ""))
    fail(page, "mentions a fee outside the tutor page");
}

// Old country and exam URLs redirect with a 301.
const { REDIRECTS } = await import("../next.config.ts");
for (const c of ["us", "uk", "ca", "ng", "gh", "ke"]) {
  const r = REDIRECTS.find((x) => x.source.startsWith(`/${c}/`));
  if (!r || r.statusCode !== 301 || r.destination !== "/") fail(`/${c}`, "does not 301 to /");
}
for (const e of ["11-plus", "gcse", "a-level", "sat", "act", "waec", "neco", "jamb", "bece", "kcse"]) {
  const r = REDIRECTS.find((x) => x.source.startsWith(`/tutors/${e}/`));
  if (!r || r.statusCode !== 301) fail(`/tutors/${e}`, "does not 301");
}
for (const gone of ["us", "uk", "ca", "ng", "gh", "ke", "tutors/gcse", "tutors/waec"])
  if (existsSync(join(ROOT, `${gone}.html`))) fail(`/${gone}`, "page is still built");

// Sitemap lists only pages that were built, and every indexable page is listed.
const sitemapPath = join(ROOT, "sitemap.xml.body");
if (existsSync(sitemapPath)) {
  const xml = readFileSync(sitemapPath, "utf8");
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname.replace(/\/$/, "") || "/");
  const built = new Set(pages.map((f) => "/" + relative(ROOT, f).replace(/index\.html$/, "").replace(/\.html$/, "")));
  for (const u of urls) if (!built.has(u === "/" ? "/" : u)) fail("sitemap", `lists ${u}, which was not built`);
  for (const f of pages) {
    const p = "/" + relative(ROOT, f).replace(/index\.html$/, "").replace(/\.html$/, "");
    const noindex = /<meta name="robots" content="[^"]*noindex/.test(readFileSync(f, "utf8"));
    if (!noindex && !urls.includes(p)) fail("sitemap", `missing ${p}`);
    if (noindex && urls.includes(p)) fail("sitemap", `lists noindex page ${p}`);
  }
} else fail("sitemap", "sitemap.xml was not generated");
if (!existsSync(join(ROOT, "robots.txt.body"))) fail("robots", "robots.txt was not generated");

// The /faq help centre: grouped, searchable, and in sync with its JSON-LD.
{
  const file = join(ROOT, "faq.html");
  if (!existsSync(file)) fail("/faq", "faq.html was not built");
  else {
    const html = readFileSync(file, "utf8");
    const root = parse(html);
    const GROUPS = ["getting-started", "parents", "tutors", "classes-and-technology", "safety-and-trust", "account-and-support"];
    for (const id of GROUPS) {
      const sec = root.querySelector(`section#${id}`);
      if (!sec) fail("/faq", `missing group section #${id}`);
      else if (!sec.querySelector("h2")) fail("/faq", `group #${id} has no h2`);
      else if (sec.querySelectorAll("details").length === 0) fail("/faq", `group #${id} has no questions`);
    }
    const toc = root.querySelectorAll("nav.faq-toc a").map((a) => a.getAttribute("href"));
    for (const id of GROUPS) if (!toc.includes(`#${id}`)) fail("/faq", `table of contents lacks #${id}`);
    for (const h of toc) if (!root.querySelector(`[id="${(h || "").slice(1)}"]`)) fail("/faq", `table of contents link ${h} has no target`);

    const items = root.querySelectorAll("#faq-groups details");
    if (items.length < 40 || items.length > 60) fail("/faq", `expected 40 to 60 questions, found ${items.length}`);
    const ids = new Set();
    const visible = new Map();
    for (const d of items) {
      const id = d.getAttribute("id");
      if (!id || ids.has(id)) fail("/faq", `question anchor missing or duplicated: ${id}`);
      ids.add(id);
      const q = normalise(d.querySelector("summary")?.text || "");
      const a = normalise(d.querySelector("p")?.text || "");
      if (!q || !a) fail("/faq", `empty question or answer: ${id}`);
      if (visible.has(q)) fail("/faq", `duplicate question: ${q}`);
      visible.set(q, a);
    }
    if (root.querySelectorAll("h1").length !== 1) fail("/faq", "expected one h1");

    // JSON-LD must list exactly the visible questions, with the visible answers.
    const ldBlocks = root.querySelectorAll('script[type="application/ld+json"]').map((s) => JSON.parse(s.text));
    const faqPages = ldBlocks.filter((b) => b["@type"] === "FAQPage");
    if (faqPages.length !== 1) fail("/faq", `expected one FAQPage JSON-LD, found ${faqPages.length}`);
    else {
      const ld = faqPages[0].mainEntity;
      if (ld.length !== visible.size) fail("/faq", `JSON-LD has ${ld.length} questions, page shows ${visible.size}`);
      for (const e of ld) {
        const a = visible.get(normalise(e.name));
        if (a === undefined) fail("/faq", `JSON-LD question not on the page: ${e.name}`);
        else if (normalise(e.acceptedAnswer.text) !== a) fail("/faq", `JSON-LD answer differs from the page: ${e.name}`);
      }
    }
    // Parents never see the service fee.
    const body = normalise(root.querySelector("main")?.text || "");
    if (/\b15\s?%|service fee|commission|platform fee/i.test(body)) fail("/faq", "mentions the service fee");
    // The search box is added by script, so the server HTML must not ship a dead input.
    if (root.querySelector("#faq-q")) fail("/faq", "search input is in the server HTML, so it would be dead without JavaScript");
  }
}

// Illustration files stay small.
if (existsSync("public/illustrations")) {
  for (const f of readdirSync("public/illustrations")) {
    const size = statSync(join("public/illustrations", f)).size;
    if (size > 15 * 1024) fail("illustrations", `${f} is ${size} bytes, over the 15 KB limit`);
    if (/[—–]/.test(readFileSync(join("public/illustrations", f), "utf8"))) fail("illustrations", `${f} contains an em or en dash`);
  }
}

console.log(`Checked ${pages.length} pages.`);
for (const w of warnings) console.warn(`warn  ${w}`);
if (errors.length) {
  for (const e of errors) console.error(`FAIL  ${e}`);
  console.error(`\n${errors.length} problem(s).`);
  process.exit(1);
}
console.log("All checks passed.");
