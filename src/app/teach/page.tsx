import type { Metadata } from "next";
import { Duo } from "@/components/Characters";
import Link from "next/link";
import { Art, Split } from "@/components/Art";
import { PageHero, Section } from "@/components/PageShell";
import { StoreButtons } from "@/components/Platforms";
import { FaqList } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { TUTOR_FAQ, TUTOR_FEE_FAQ } from "@/content/faq";
import { TEACH_SUBJECTS } from "@/content/teach";
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
  ["Your phone is enough.", "The Tiisha app runs your whole day: classes, the whiteboard, availability, feedback and earnings."],
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

const TEACH_STEP_POSES = ["wave", "shield", "lead"] as const;

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
        art={<Duo pose="lead" />}
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
          <li className="facts-art" aria-hidden="true">
            <Art name="scene-calendar" />
          </li>
        </ul>
      </Section>

      <Section tone="surface" title="Teach from a phone or a laptop">
        <Split reverse art={<Art name="scene-devices" alt="A laptop and a phone showing the same live class" />}>
          <div className="prose">
            <p>
              Many tutors do not have a laptop, which is why Tiisha has a tutor app. It runs your whole day from a phone:
              your hours, your classes, feedback and earnings. If you prefer a laptop, the web app does the same. It is
              one account, on both.
            </p>
            <p>A tablet or laptop gives you a bigger whiteboard to write on.</p>
            <StoreButtons />
          </div>
        </Split>
      </Section>

      <Section id="approval" title="How approval works">
        <p className="lead">Strict on purpose. Parents book verified tutors, and that is how you win bookings.</p>
        <ol className="steps three">
          {APPROVAL.map(([h, p], i) => (
            <li className="step" key={h}>
              <Duo pose={TEACH_STEP_POSES[i]} className="step-duo" />
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

      <Section title="Which subjects can you teach?">
        <p className="lead">We are recruiting tutors in these subjects first. Pick yours to see what we look for.</p>
        <ul className="pillrow">
          {TEACH_SUBJECTS.map((t) => (
            <li key={t.slug}>
              <Link href={`/teach/${t.slug}`}>Teach {t.name}</Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="surface" title="Tutor questions">
        <FaqList items={TUTOR_PAGE_FAQ} />
        <p style={{ marginTop: 24 }}>
          More answers for tutors in the <Link href="/faq" className="textlink">help centre</Link>.
        </p>
      </Section>

      <section className="cta on-dark">
        <Duo pose="celebrate" className="cta-duo" />
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
