import type { Metadata } from "next";
import Link from "next/link";
import { Art } from "@/components/Art";
import { FaqCenter } from "@/components/FaqCenter";
import { JsonLd } from "@/components/JsonLd";
import { PageHero, Section } from "@/components/PageShell";
import { ClosingCta } from "@/components/sections";
import { allGroupFaqs } from "@/content/faq";
import { faqLd, pageMetadata } from "@/lib/seo";

const description =
  "Answers for parents and tutors: booking, payment, cancelling, child safety, recordings, tutor checks, earnings, devices and how live video classes work.";

export const metadata: Metadata = pageMetadata({ title: "Help and answers for parents and tutors", description, path: "/faq" });

export default function FaqPage() {
  const crumbs = [
    { name: "Tiisha", path: "/" },
    { name: "Help and questions", path: "/faq" },
  ];
  return (
    <>
      <PageHero
        crumbs={crumbs}
        title="Questions and answers"
        lead="Plain answers about booking, paying, safety, recordings, tutor checks and how classes work."
        art={<Art name="pip-read" eager />}
      />
      <Section>
        <FaqCenter />
      </Section>
      <Section tone="surface" title="Looking for more?">
        <ul className="pillrow">
          <li>
            <Link href="/how-it-works">How Tiisha works</Link>
          </li>
          <li>
            <Link href="/tutor-checks">How we check tutors</Link>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/teach">Teach on Tiisha</Link>
          </li>
        </ul>
      </Section>
      <ClosingCta />
      <JsonLd data={faqLd(allGroupFaqs())} />
    </>
  );
}
