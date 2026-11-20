import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/PageShell";
import { FaqList } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { ClosingCta } from "@/components/sections";
import { coreFaq, MARKETS, TUTOR_FAQ } from "@/content/markets";
import { faqLd, pageMetadata } from "@/lib/seo";

const description =
  "Answers to the questions parents ask about Tiisha tutors, recorded classes, time zones, devices, paying in your own currency, and exams in each country.";

export const metadata: Metadata = pageMetadata({ title: "Questions parents ask", description, path: "/faq" });

export default function FaqPage() {
  const crumbs = [
    { name: "Tiisha", path: "/" },
    { name: "Help and questions", path: "/faq" },
  ];
  const core = coreFaq("the curricula and exams of your country");
  const byMarket = MARKETS.map((m) => ({ m, item: m.extraFaq }));
  const all = [...core, ...byMarket.map((b) => b.item), ...TUTOR_FAQ];
  return (
    <>
      <PageHero crumbs={crumbs} title="Questions parents ask" lead="Short answers about tutors, classes, progress and payment." />
      <Section>
        <FaqList items={core} />
      </Section>
      <Section tone="surface" title="Questions by country">
        <FaqList items={byMarket.map((b) => b.item)} />
        <ul className="pillrow">
          {MARKETS.map((m) => (
            <li key={m.slug}>
              <Link href={`/${m.slug}`}>Tiisha in {m.name}</Link>
            </li>
          ))}
        </ul>
      </Section>
      <Section title="Questions from tutors">
        <FaqList items={TUTOR_FAQ} />
        <p style={{ marginTop: 20 }}>
          <Link href="/teach" className="textlink">
            Read more about teaching on Tiisha
          </Link>
        </p>
      </Section>
      <ClosingCta />
      <JsonLd data={faqLd(all)} />
    </>
  );
}
