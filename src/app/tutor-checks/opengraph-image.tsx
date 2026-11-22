import { ogImage, OG_SIZE } from "@/lib/og";

export const alt = "How Tiisha checks tutors";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogImage({ eyebrow: "Tiisha", title: "Tutors are checked before they teach.", sub: "Photo ID with a live selfie, qualifications, two referees, an interview and bank details." });
}
