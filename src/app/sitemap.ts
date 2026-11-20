import type { MetadataRoute } from "next";
import { SUBJECTS } from "@/content/subjects";
import { abs } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [{ url: abs("/"), changeFrequency: "weekly", priority: 1 }];
  for (const p of ["/how-it-works", "/tutor-checks", "/pricing", "/teach", "/faq", "/tutors"]) {
    entries.push({ url: abs(p), changeFrequency: "monthly", priority: 0.7 });
  }
  for (const s of SUBJECTS) {
    entries.push({ url: abs(`/tutors/${s.slug}`), changeFrequency: "monthly", priority: 0.6 });
  }
  return entries;
}
