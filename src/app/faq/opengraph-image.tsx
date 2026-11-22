import { ogImage, OG_SIZE } from "@/lib/og";

export const alt = "Tiisha help and answers";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogImage({ eyebrow: "Tiisha", title: "Questions and answers", sub: "Booking, safety, recordings, tutor checks, devices and payments." });
}
