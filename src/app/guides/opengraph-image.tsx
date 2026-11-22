import { ogImage, OG_SIZE } from "@/lib/og";

export const alt = "Tiisha guides for parents";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogImage({ eyebrow: "Tiisha", title: "Guides for parents", sub: "How to choose an online tutor, and what you need for online classes." });
}
