import type { Metadata } from "next";
import { Art, Split } from "@/components/Art";
import { FaqList } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import {
  ClassAndProgress,
  ClosingCta,
  ExamsStrip,
  Hero,
  HowItWorks,
  PricingSection,
  Safety,
  SubjectLinks,
  TutorChecks,
} from "@/components/sections";
import { coreFaq } from "@/content/faq";
import { DEFAULT_DESCRIPTION, faqLd, pageMetadata, serviceLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Tiisha: a tutor your child will actually learn from",
  description: DEFAULT_DESCRIPTION,
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  const faqs = coreFaq();
  return (
    <>
      <Hero />
      <ExamsStrip />
      <HowItWorks />
      <TutorChecks />
      <ClassAndProgress />
      <PricingSection />
      <Safety />
      <SubjectLinks />
      <section id="faq" className="section bg">
        <div className="wrap">
          <h2 className="title">Questions parents ask</h2>
          <div className="faq-aside">
            <FaqList items={faqs} />
            <Art name="pip-think" />
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
          faqLd(faqs),
        ]}
      />
    </>
  );
}
