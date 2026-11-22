import { ogImage, OG_SIZE } from "@/lib/og";

export const alt = "Tiisha pricing";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogImage({ eyebrow: "Tiisha", title: "Clear prices in your own currency.", sub: "Each tutor sets their own price. Free cancellation up to 24 hours before a class." });
}
