import type { Metadata } from "next";
import Link from "next/link";
import { Art, Split } from "@/components/Art";
import { PageHero, Section } from "@/components/PageShell";
import { FaqList } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { ClosingCta } from "@/components/sections";
import { links } from "@/lib/config";
import { faqLd, pageMetadata, serviceLd } from "@/lib/seo";

const description =
  "Each tutor sets their own price, shown in your currency when you book. Free cancellation up to 24 hours before a class.";

export const metadata: Metadata = pageMetadata({ title: "Online tutoring prices in your own currency", description, path: "/pricing" });

const FAQ = [
  {
    q: "Who sets the price?",
    a: "Each tutor sets their own price. You see it in your currency when you book, and that is what you pay.",
  },
  {
    q: "Can I pay in my own currency?",
    a: "Yes. Prices show in your currency when you book.",
  },
  {
    q: "Can I cancel a class?",
    a: "Yes. Cancellation is free up to 24 hours before a class.",
  },
];

export default function Pricing() {
  const crumbs = [
    { name: "Tiisha", path: "/" },
    { name: "Pricing", path: "/pricing" },
  ];
  return (
    <>
      <PageHero crumbs={crumbs} title="Clear prices in your own currency." lead="Each tutor sets their own price. You see it in your currency when you book, and that is what you pay.">
        <div className="btn-row">
          <Link href={links.signup} className="btn btn-sun">
            Find a tutor
          </Link>
        </div>
      </PageHero>

      <Section title="How pricing works">
        <Split reverse art={<Art name="scene-price" />}>
        <ul className="facts">
          <li className="card">
            <h3>Set per tutor.</h3>
            <p>Every tutor chooses their own price. Read their profile, compare, and pick the one that suits your family.</p>
          </li>
          <li className="card">
            <h3>Shown in your currency.</h3>
            <p>You see the price in your own currency at booking, before you confirm.</p>
          </li>
          <li className="card">
            <h3>What you see is what you pay.</h3>
            <p>The price on the tutor&apos;s profile is the price for your booking.</p>
          </li>
          <li className="card">
            <h3>Free cancellation.</h3>
            <p>Cancel up to 24 hours before a class at no cost.</p>
          </li>
        </ul>
        </Split>
      </Section>

      <Section tone="surface" title="Pricing questions">
        <div className="faq-aside">
          <FaqList items={FAQ} />
          <Art name="pip-read" />
        </div>
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
