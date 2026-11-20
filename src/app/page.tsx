import type { Metadata } from "next";
import { MarketPage } from "@/components/MarketPage";
import { MarketRedirect } from "@/components/MarketRedirect";
import { mustMarket } from "@/content/markets";
import { DEFAULT_DESCRIPTION, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Tiisha: a tutor your child will actually learn from",
  description: DEFAULT_DESCRIPTION,
  path: "/",
  absoluteTitle: true,
  hreflang: true,
});

export default function Home() {
  return (
    <>
      <MarketPage market={mustMarket("uk")} home />
      <MarketRedirect />
    </>
  );
}
