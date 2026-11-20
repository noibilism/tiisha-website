import type { Metadata } from "next";
import { PageHero, Section } from "@/components/PageShell";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy notice (draft)",
  description: "Draft privacy notice for Tiisha. This page is a draft and has not been reviewed by a lawyer.",
  path: "/privacy",
  noindex: true,
});

export default function Privacy() {
  const crumbs = [
    { name: "Tiisha", path: "/" },
    { name: "Privacy notice", path: "/privacy" },
  ];
  return (
    <>
      <PageHero crumbs={crumbs} title="Privacy notice" lead="Draft. Not yet in force." />
      <Section>
        <div className="prose">
          <p className="draft">
            Draft. This notice is a placeholder written from the product plan. It has not been reviewed by a lawyer and
            must not be treated as the final privacy notice. Items marked TO CONFIRM need a decision before launch.
          </p>
          <h2>What we plan to collect</h2>
          <ul>
            <li>Parent details: name, email address and phone number. We ask for a phone number so we can reach you if a class changes at short notice.</li>
            <li>Child details: first name, age group, school year or grade, curriculum and gender. We do not collect a birth date. Children do not need an email address.</li>
            <li>Tutor details: identity documents, a live selfie, qualifications, referee contacts and bank account details, so we can verify tutors and pay them.</li>
            <li>Class records: recordings, tutor feedback, assessment results and monthly reports.</li>
          </ul>
          <h2>Recordings</h2>
          <p>
            Classes are recorded so parents can watch them and so we can review a class if something feels wrong. Recording
            starts only with the parent&apos;s consent. How long recordings are kept: TO CONFIRM.
          </p>
          <h2>Who can see what</h2>
          <p>
            A parent sees only their linked children. A tutor sees only the students they are booked with. Access to
            recordings and child data is logged. Full detail: TO CONFIRM.
          </p>
          <h2>Your rights and how to contact us</h2>
          <p>Rights by country, the legal basis for processing and the contact address for privacy requests: TO CONFIRM.</p>
          <h2>Where data is stored and who processes it</h2>
          <p>Hosting locations, payment and identity providers and international transfers: TO CONFIRM.</p>
        </div>
      </Section>
    </>
  );
}
