import { ogImage, OG_SIZE } from "@/lib/og";
import { MARKETS, getMarket } from "@/content/markets";

export const alt = "Tiisha online tutoring";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return MARKETS.map((m) => ({ market: m.slug }));
}

export default async function Image({ params }: { params: Promise<{ market: string }> }) {
  const { market } = await params;
  const m = getMarket(market);
  return ogImage({
    eyebrow: `Tiisha for ${m?.name ?? ""}`,
    title: m?.headline ?? "A tutor your child will actually learn from.",
    sub: `Prices in ${m?.currency.name ?? "your currency"}. Every class recorded.`,
  });
}
