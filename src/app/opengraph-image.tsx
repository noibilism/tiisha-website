import { ogImage, OG_SIZE } from "@/lib/og";

export const alt = "Tiisha: a tutor your child will actually learn from";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogImage({ eyebrow: "Tiisha", title: "A tutor your child will actually learn from.", sub: "Live one-to-one classes with verified tutors, recorded, with a progress report every month." });
}
