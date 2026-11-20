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
  if (!isNotFound && !types.includes("BreadcrumbList") && page !== "/" && !/^\/(us|uk|ca|ng|gh|ke)$/.test(page)) {
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

  for (const img of root.querySelectorAll("img")) if (!img.hasAttribute("alt")) fail(page, "img without alt");
  for (const a of root.querySelectorAll("a")) {
    const label = normalise(a.text) || a.getAttribute("aria-label");
    if (!label) fail(page, `link without text: ${a.getAttribute("href")}`);
    if (/^(click here|here|read more)$/i.test(label || "")) fail(page, `non descriptive link text: ${label}`);
  }
}

// Market pages: hreflang set is complete.
for (const m of ["us", "uk", "ca", "ng", "gh", "ke"]) {
  const root = parse(readFileSync(join(ROOT, `${m}.html`), "utf8"));
  const langs = root.querySelectorAll('link[rel="alternate"]').map((l) => l.getAttribute("hreflang"));
  for (const need of ["en-US", "en-GB", "en-CA", "en-NG", "en-GH", "en-KE", "x-default"])
    if (!langs.includes(need)) fail(`/${m}`, `missing hreflang ${need}`);
}

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

console.log(`Checked ${pages.length} pages.`);
for (const w of warnings) console.warn(`warn  ${w}`);
if (errors.length) {
  for (const e of errors) console.error(`FAIL  ${e}`);
  console.error(`\n${errors.length} problem(s).`);
  process.exit(1);
}
console.log("All checks passed.");
