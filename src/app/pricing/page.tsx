import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/PageShell";
import { FaqList } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { ClosingCta, CurrencyGrid } from "@/components/sections";
import { MARKETS } from "@/content/markets";
import { links } from "@/lib/config";
import { faqLd, pageMetadata, serviceLd } from "@/lib/seo";

const description =
  "Each tutor sets one price per hour, shown in your currency. Pay in naira, pounds, US dollars, Canadian dollars, cedis or Kenyan shillings. Free cancellation up to 24 hours before a class.";

export const metadata: Metadata = pageMetadata({ title: "Online tutoring prices in your own currency", description, path: "/pricing" });

const FAQ = [
  {
    q: "Can I pay in my own currency?",
    a: "Yes. Choose naira, pounds, US dollars, Canadian dollars, cedis or Kenyan shillings when you sign up.",
  },
  {
    q: "Who sets the price?",
    a: "Each tutor sets one price per hour. You see it in your currency, and that is what you pay.",
  },
  {
    q: "Can I cancel a class?",
    a: "Yes. Cancellation is free up to 24 hours before a class.",
  },
  {
    q: "What if a tutor has not set a price in my currency?",
    a: "We show it in US dollars until they do.",
  },
];

export default function Pricing() {
  const crumbs = [
    { name: "Tiisha", path: "/" },
    { name: "Pricing", path: "/pricing" },
  ];
  return (
    <>
      <PageHero crumbs={crumbs} title="Clear prices in your own currency." lead="Each tutor sets one price per hour. You see it in your currency, and that is what you pay.">
        <div className="btn-row">
          <Link href={links.signup} className="btn btn-sun">
            Find a tutor
          </Link>
        </div>
      </PageHero>

      <Section title="Six currencies">
        <p className="lead" style={{ marginBottom: 24 }}>
          Free cancellation up to 24 hours before a class. You can pay in naira, pounds, US dollars, Canadian dollars,
          cedis or Kenyan shillings.
        </p>
        <CurrencyGrid />
      </Section>

      <Section tone="surface" title="Prices and payment by country">
        <table className="tbl">
          <caption className="sr-only">Currency and payment line for each country</caption>
          <thead>
            <tr>
              <th scope="col">Country</th>
              <th scope="col">Currency</th>
              <th scope="col">Payment</th>
            </tr>
          </thead>
          <tbody>
            {MARKETS.map((m) => (
              <tr key={m.slug}>
                <th scope="row">
                  <Link href={`/${m.slug}`}>{m.name}</Link>
                </th>
                <td>
                  {m.currency.name} ({m.currency.code})
                </td>
                <td>{m.pricingLine}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section title="Pricing questions">
        <FaqList items={FAQ} />
      </Section>
      <ClosingCta />
      <JsonLd
        data={[
          serviceLd({ name: "Tiisha online tutoring pricing", description, path: "/pricing" }),
          faqLd(FAQ),
        ]}
      />
    </>
  );
}
