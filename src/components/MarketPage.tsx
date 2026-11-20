import { MarketBar } from "./MarketBar";
import { DetectedBanner } from "./DetectedBanner";
import { JsonLd } from "./JsonLd";
import { FaqList } from "./Faq";
import {
  ChooseCountry,
  ClassAndProgress,
  ClosingCta,
  ExamsStrip,
  Hero,
  HowItWorks,
  PricingSection,
  Safety,
  SubjectLinks,
  TutorChecks,
} from "./sections";
import { coreFaq, type Market } from "@/content/markets";
import { breadcrumbLd, faqLd, serviceLd } from "@/lib/seo";

export function marketFaqs(market: Market) {
  return [market.extraFaq, ...coreFaq(market.exams)];
}

export function MarketPage({ market, home = false }: { market: Market; home?: boolean }) {
  const faqs = marketFaqs(market);
  const path = home ? "/" : `/${market.slug}`;
  const ld = [
    serviceLd({
      name: `Tiisha online tutoring for ${market.name}`,
      description: `${market.examsLine} ${market.pricingLine}`,
      path,
      areas: [market.name],
    }),
    faqLd(faqs),
    ...(home ? [] : [breadcrumbLd([{ name: "Tiisha", path: "/" }, { name: market.name, path }])]),
  ];
  return (
    <>
      <MarketBar active={market.slug} home={home} />
      <DetectedBanner market={market.slug} name={market.name} />
      <Hero market={market} />
      <ExamsStrip text={market.examsLine} />
      <HowItWorks market={market} />
      <TutorChecks />
      <ClassAndProgress market={market} />
      <PricingSection market={market} />
      <Safety />
      <SubjectLinks market={market} />
      {home && <ChooseCountry />}
      <section id="faq" className="section bg">
        <div className="wrap">
          <h2 className="title">Questions parents ask</h2>
          <FaqList items={faqs} />
        </div>
      </section>
      <ClosingCta />
      <JsonLd data={ld} />
    </>
  );
}
