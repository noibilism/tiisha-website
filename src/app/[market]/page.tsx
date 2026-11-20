import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketPage } from "@/components/MarketPage";
import { MARKETS, getMarket } from "@/content/markets";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return MARKETS.map((m) => ({ market: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ market: string }> }): Promise<Metadata> {
  const { market } = await params;
  const m = getMarket(market);
  if (!m) return {};
  return pageMetadata({
    title: `${m.titleKeywords} (${m.short})`,
    description: `Live one-to-one classes with verified tutors for ${m.exams}. Watch every class, get a monthly progress report. Prices in ${m.currency.name}.`,
    path: `/${m.slug}`,
    hreflang: true,
  });
}

export default async function MarketRoute({ params }: { params: Promise<{ market: string }> }) {
  const { market } = await params;
  const m = getMarket(market);
  if (!m) notFound();
  return <MarketPage market={m} />;
}
