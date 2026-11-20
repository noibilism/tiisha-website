import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/PageShell";
import { FaqList } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { TUTOR_FAQ } from "@/content/markets";
import { links } from "@/lib/config";
import { faqLd, pageMetadata, webPageLd } from "@/lib/seo";

const title = "Teach children who need you, from wherever you are.";
const description =
  "Teach live from your phone or laptop. Set your own price and hours. Families in the US, UK, Canada, Nigeria, Ghana and Kenya are looking for tutors like you.";

export const metadata: Metadata = pageMetadata({
  title: "Become an online tutor",
  description,
  path: "/teach",
});

const WHY = [
  ["You set the price.", "One price per hour, in your own currency. You keep it."],
  ["You set the hours.", "Open the slots that suit you. Block the ones that do not. Times convert to each family's time zone for you."],
  ["Your phone is enough.", "The Tiisha app runs your whole day: classes, availability, feedback and earnings."],
  ["You are paid in your own currency.", "Earnings show after each approved class and pay out to your bank account."],
  ["Parents come to you.", "Your verified profile does the introducing."],
];

const APPROVAL = [
  ["Tell us where you teach from.", "Choose your country."],
  ["Prove who you are.", "A photo of your ID and a short live selfie check. Some countries need an ID number too."],
  ["Show your qualifications.", "Upload your certificates and give two referees."],
  ["Meet our team.", "A short video interview."],
  ["Add your bank account.", "The name must match your ID."],
  ["Agree to the tutor terms,", "then we review everything."],
];

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
        lead="Set your own price and hours. Teach live from your phone or laptop. Families in the US, UK, Canada, Nigeria, Ghana and Kenya are looking for tutors like you. You are paid in your own currency."
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
        <ol className="steps" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
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

      <Section title="Where do you teach from?">
        <div className="prose">
          <p>
            This decides your ID check and the currency you are paid in. You can teach families in any country. You choose
            the country you live in and can show an ID for.
          </p>
          <ul>
            <li>
              <strong>Nigeria:</strong> You will need your BVN and NIN, a photo of your ID and a live selfie.
            </li>
            <li>
              <strong>Ghana:</strong> You will need your Ghana Card number, a photo of your ID and a live selfie.
            </li>
            <li>
              <strong>Any other country:</strong> You will need a photo of a government ID, such as a passport or national
              ID card, and a live selfie.
            </li>
          </ul>
        </div>
      </Section>

      <Section tone="surface" title="Tutor questions">
        <FaqList items={TUTOR_FAQ} />
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
          faqLd(TUTOR_FAQ),
        ]}
      />
    </>
  );
}
