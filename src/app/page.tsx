import type { Metadata } from "next";
import Link from "next/link";
import { Duo } from "@/components/Characters";

import { FaqList } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import {
  ClassAndProgress,
  ClosingCta,
  ExamsStrip,
  Hero,
  HowItWorks,
  PlatformStrip,
  PlatformsSection,
  PricingSection,
  Safety,
  SubjectLinks,
  TutorChecks,
  WhatIs,
} from "@/components/sections";
import { coreFaq } from "@/content/faq";
import { DEFAULT_DESCRIPTION, faqLd, pageMetadata, serviceLd, softwareApplicationLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Tiisha: verified online tutors, live and recorded",
  description: DEFAULT_DESCRIPTION,
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  const faqs = coreFaq();
  return (
    <>
      <Hero />
      <PlatformStrip />
      <ExamsStrip />
      <WhatIs />
      <HowItWorks />
      <TutorChecks />
      <ClassAndProgress />
      <PricingSection />
      <Safety />
      <PlatformsSection />
      <SubjectLinks />
      <section id="faq" className="section bg">
        <div className="wrap">
          <h2 className="title">Questions parents ask</h2>
          <div className="faq-aside">
            <div>
              <FaqList items={faqs} />
              <p style={{ marginTop: 24 }}>
                More answers in the <Link href="/faq" className="textlink">help centre</Link>.
              </p>
            </div>
            <Duo pose="think" />
          </div>
        </div>
      </section>
      <ClosingCta mascot />
      <JsonLd
        data={[
          serviceLd({
            name: "Tiisha online tutoring",
            description: "Live one-to-one online classes with verified tutors. Parents book and pay online, every class is recorded, and a progress report comes every month.",
            path: "/",
          }),
          softwareApplicationLd(),
          faqLd(faqs),
        ]}
      />
    </>
  );
}
