import { ogImage, OG_SIZE } from "@/lib/og";

export const alt = "Tiisha online tutors by subject";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogImage({ eyebrow: "Tiisha", title: "Online tutors by subject", sub: "Maths, English, science, Yoruba, Arabic and more. Live one-to-one classes." });
}
