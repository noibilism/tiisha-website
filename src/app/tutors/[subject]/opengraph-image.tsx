import { ogImage, OG_SIZE } from "@/lib/og";
import { SUBJECTS, getSubject } from "@/content/subjects";

export const alt = "Tiisha online tutors";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return SUBJECTS.map((s) => ({ subject: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ subject: string }> }) {
  const { subject } = await params;
  const s = getSubject(subject);
  return ogImage({
    eyebrow: "Tiisha",
    title: s?.h1 ?? "Online tutors",
    sub: "Verified tutors. Live, recorded one-to-one classes. A progress report every month.",
  });
}
