import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/PageShell";
import { FaqList } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { TUTOR_FAQ, TUTOR_FEE_FAQ } from "@/content/faq";
import { links } from "@/lib/config";
import { faqLd, pageMetadata, webPageLd } from "@/lib/seo";

const title = "Teach children who need you, from wherever you are.";
const description =
  "Teach live from your phone or laptop. Set your own price and hours. Families around the world are looking for tutors like you.";

export const metadata: Metadata = pageMetadata({
  title: "Become an online tutor",
  description,
  path: "/teach",
});

const WHY = [
  ["You set the price.", "One price per hour, in your own currency. Tiisha takes a service fee from each booking, and your earnings show after it."],
  ["You set the hours.", "Open the slots that suit you. Block the ones that do not. Times convert to each family's time zone for you."],
  ["Your phone is enough.", "The Tiisha app runs your whole day: classes, availability, feedback and earnings."],
  ["You are paid in your own currency.", "Earnings show after each approved class and pay out to your bank account."],
  ["Parents come to you.", "Your verified profile does the introducing."],
];

const APPROVAL = [
  ["Prove who you are.", "A photo of an official ID and a short live selfie check, matched to each other."],
  ["Show your qualifications.", "Upload your certificates and give two referees."],
  ["Meet our team.", "A short video interview."],
  ["Add your bank account.", "The name must match your ID."],
  ["Agree to the tutor terms.", "Read and accept the tutor agreement."],
  ["Get approved.", "We review everything. Once you are approved, parents can find and book you."],
];

const TUTOR_PAGE_FAQ = [...TUTOR_FAQ.slice(0, 2), TUTOR_FEE_FAQ, ...TUTOR_FAQ.slice(2)];

export default function Teach() {
  const crumbs = [
    { name: "Tiisha", path: "/" },
    { name: "Teach on Tiisha", path: "/teach" },
  ];
  return (
    <>
      <PageHero
        crumbs={crumbs}
        title={title}
        lead="Set your own price and hours. Teach live from your phone or laptop. Families around the world are looking for tutors like you. You are paid in your own currency."
      >
        <div className="btn-row">
          <Link href={links.apply} className="btn btn-sun">
            Apply to teach
          </Link>
          <Link href="#approval" className="btn btn-ghost">
            See how approval works
          </Link>
        </div>
      </PageHero>

      <Section title="Why teach on Tiisha">
        <ul className="facts">
          {WHY.map(([h, p]) => (
            <li className="card" key={h}>
              <h3>{h}</h3>
              <p>{p}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="approval" tone="surface" title="How approval works">
        <p className="lead">Strict on purpose. Parents book verified tutors, and that is how you win bookings.</p>
        <ol className="steps three">
          {APPROVAL.map(([h, p], i) => (
            <li className="step" key={h}>
              <span className="num" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{h}</h3>
              <p>{p}</p>
            </li>
          ))}
        </ol>
        <p style={{ marginTop: 24 }}>
          <Link href="/tutor-checks" className="textlink">
            See the checks parents rely on
          </Link>
        </p>
      </Section>

      <Section title="Tutor questions">
        <FaqList items={TUTOR_PAGE_FAQ} />
      </Section>

      <section className="cta on-dark">
        <h2>Ready to teach?</h2>
        <div className="btn-row">
          <Link href={links.apply} className="btn btn-sun">
            Apply to teach
          </Link>
          <Link href="/how-it-works" className="textlink" style={{ fontSize: 17, textDecoration: "underline" }}>
            See how Tiisha works
          </Link>
        </div>
      </section>
      <JsonLd
        data={[
          webPageLd({ name: "Teach on Tiisha", description, path: "/teach" }),
          faqLd(TUTOR_PAGE_FAQ),
        ]}
      />
    </>
  );
}
