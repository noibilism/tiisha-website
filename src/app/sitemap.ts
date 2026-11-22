import type { MetadataRoute } from "next";
import { sitePages } from "@/content/pages";
import { abs } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitePages().map((p) => ({
    url: abs(p.path),
    changeFrequency: p.path === "/" ? "weekly" : "monthly",
    priority: p.path === "/" ? 1 : p.section === "Core" || p.path === "/teach" ? 0.7 : 0.6,
  }));
}
