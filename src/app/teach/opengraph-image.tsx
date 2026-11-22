import { ogImage, OG_SIZE } from "@/lib/og";

export const alt = "Teach on Tiisha";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogImage({ eyebrow: "Tiisha", title: "Teach children who need you, from wherever you are.", sub: "Set your own price and hours. Teach live from a phone or a laptop." });
}
