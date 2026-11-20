import type { Metadata } from "next";
import { PageHero, Section } from "@/components/PageShell";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of use (draft)",
  description: "Draft terms of use for Tiisha. This page is a draft and has not been reviewed by a lawyer.",
  path: "/terms",
  noindex: true,
});

export default function Terms() {
  const crumbs = [
    { name: "Tiisha", path: "/" },
    { name: "Terms of use", path: "/terms" },
  ];
  return (
    <>
      <PageHero crumbs={crumbs} title="Terms of use" lead="Draft. Not yet in force." />
      <Section>
        <div className="prose">
          <p className="draft">
            Draft. These terms are a placeholder written from the product plan. They have not been reviewed by a lawyer and
            must not be treated as the final terms. Items marked TO CONFIRM need a decision before launch.
          </p>
          <h2>Using Tiisha</h2>
          <p>
            Tiisha connects families with verified tutors for live, recorded one-to-one classes. A parent creates the
            account, adds their children and books and pays for classes. Full eligibility rules: TO CONFIRM.
          </p>
          <h2>Booking, payment and cancellation</h2>
          <ul>
            <li>Each tutor sets one price per hour. Parents see it in their chosen currency and pay that price.</li>
            <li>Cancellation is free up to 24 hours before a class. Refund rules inside 24 hours and when a tutor cancels: TO CONFIRM.</li>
            <li>Supported payment methods in each country: TO CONFIRM.</li>
          </ul>
          <h2>Recorded classes</h2>
          <p>Every class is recorded with the parent&apos;s consent. Rules for who can watch, how long recordings are kept and how to report a concern: TO CONFIRM.</p>
          <h2>Tutor terms</h2>
          <p>Tutors agree to separate tutor terms during onboarding. Fees, payouts and conduct rules: TO CONFIRM.</p>
          <h2>Liability and governing law</h2>
          <p>Limits of liability, dispute resolution and governing law: TO CONFIRM.</p>
        </div>
      </Section>
    </>
  );
}
