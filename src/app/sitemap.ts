import type { MetadataRoute } from "next";
import { MARKETS } from "@/content/markets";
import { SUBJECTS } from "@/content/subjects";
import { abs, marketAlternates } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = marketAlternates();
  const entries: MetadataRoute.Sitemap = [
    { url: abs("/"), changeFrequency: "weekly", priority: 1, alternates: { languages } },
    ...MARKETS.map((m) => ({
      url: abs(`/${m.slug}`),
      changeFrequency: "weekly" as const,
      priority: 0.9,
      alternates: { languages },
    })),
  ];
  for (const p of ["/how-it-works", "/tutor-checks", "/pricing", "/teach", "/faq", "/tutors"]) {
    entries.push({ url: abs(p), changeFrequency: "monthly", priority: 0.7 });
  }
  for (const s of SUBJECTS) {
    entries.push({ url: abs(`/tutors/${s.slug}`), changeFrequency: "monthly", priority: 0.6 });
  }
  return entries;
}
