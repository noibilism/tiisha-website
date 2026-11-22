import { ogImage, OG_SIZE } from "@/lib/og";
import { GUIDES, getGuide } from "@/content/guides";

export const alt = "Tiisha guide for parents";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = getGuide(slug);
  return ogImage({ eyebrow: "Tiisha guides", title: g?.h1 ?? "Guides for parents", sub: g?.description.split(". ")[0] + "." });
}
