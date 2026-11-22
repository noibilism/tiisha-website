import { ogImage, OG_SIZE } from "@/lib/og";
import { TEACH_SUBJECTS, getTeachSubject } from "@/content/teach";

export const alt = "Teach on Tiisha";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return TEACH_SUBJECTS.map((t) => ({ subject: t.slug }));
}

export default async function Image({ params }: { params: Promise<{ subject: string }> }) {
  const { subject } = await params;
  const t = getTeachSubject(subject);
  return ogImage({ eyebrow: "Tiisha", title: t?.h1 ?? "Teach on Tiisha", sub: "Set your own price and hours. Every tutor is verified first." });
}
