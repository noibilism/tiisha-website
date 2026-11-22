import { ogImage, OG_SIZE } from "@/lib/og";

export const alt = "How Tiisha works";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogImage({ eyebrow: "Tiisha", title: "From first search to first class in a day.", sub: "Choose a verified tutor, learn live, and see progress in a monthly report." });
}
