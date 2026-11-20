import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/PageShell";
import { FaqList } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { ClosingCta } from "@/components/sections";
import { coreFaq, MARKETS } from "@/content/markets";
import { links } from "@/lib/config";
import { faqLd, pageMetadata, serviceLd } from "@/lib/seo";

const description =
  "From first search to first class in a day. Tell us about your child, choose a verified tutor, learn live and recorded, and see progress in a monthly report.";

export const metadata: Metadata = pageMetadata({ title: "How Tiisha online tutoring works", description, path: "/how-it-works" });

const STEPS = [
  ["Tell us about your child.", "Their age group, school year and curriculum, and what they find hard. It takes two minutes."],
  ["Choose a tutor you trust.", "Read their profile, see their verified badge and their price in your currency. Book a time that suits your family."],
  ["Learn live.", "Your child joins from a phone, tablet or laptop. The tutor teaches on a shared whiteboard. The class is recorded."],
  ["See what changed.", "The tutor writes feedback after each class. Short assessments show what your child has mastered. A monthly report shows the trend."],
];

export default function HowItWorks() {
  const crumbs = [
    { name: "Tiisha", path: "/" },
    { name: "How it works", path: "/how-it-works" },
  ];
  const faqs = coreFaq("the curricula and exams of your country").slice(0, 8);
  return (
    <>
      <PageHero crumbs={crumbs} title="From first search to first class in a day." lead="Four steps, from telling us about your child to seeing what changed.">
        <div className="btn-row">
          <Link href={links.signup} className="btn btn-sun">
            Find a tutor
          </Link>
        </div>
      </PageHero>

      <Section>
        <ol className="steps">
          {STEPS.map(([h, p], i) => (
            <li className="step" key={h}>
              <span className="num" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{h}</h3>
              <p>{p}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="surface" title="Inside a class">
        <div className="prose">
          <p>
            Your child joins from a phone, tablet or laptop. The tutor teaches on a shared whiteboard, so your child sees
            each step as it is written. A phone works. A laptop or tablet gives a bigger whiteboard.
          </p>
          <h3>Every class is recorded. You can sit in on any of them.</h3>
          <p>
            Join a live class quietly from your own phone, or watch the recording later. Your child can replay the part they
            missed. If something feels wrong, tell us and we review the recording.
          </p>
          <h3>Time zones are handled for you</h3>
          <p>
            Times show in your time zone. If your tutor is in another country, they see their own. A parent in Toronto can
            book a tutor in Lagos, Nairobi or Manchester, and classes are live video, so distance does not matter.
          </p>
        </div>
      </Section>

      <Section title="After class: know what changed">
        <div className="prose">
          <h3>Feedback after each class</h3>
          <p>After each class the tutor writes down what went well and what to practise.</p>
          <h3>Short assessments</h3>
          <p>
            Short assessments from a question bank built for your curriculum and exams show where marks are being lost.
          </p>
          <h3>A progress report every month</h3>
          <p>
            Your monthly report puts it together, with the topics that need work. You get a clear picture of what your
            child can do now, not just what they covered.
          </p>
        </div>
      </Section>

      <Section tone="surface" title="Your child joins from your account">
        <div className="prose">
          <p>
            Children do not need an email address. We keep only what tutoring needs, and we ask for your phone number so we
            can reach you if a class changes at short notice.
          </p>
          <p>
            Every tutor passes ID, liveness and qualification checks before any parent sees them.{" "}
            <Link href="/tutor-checks">Read how tutor checks work</Link>.
          </p>
        </div>
      </Section>

      <Section title="Pick your country for exact curricula and prices">
        <ul className="pillrow">
          {MARKETS.map((m) => (
            <li key={m.slug}>
              <Link href={`/${m.slug}`}>Tiisha in {m.name}</Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="surface" title="Questions parents ask">
        <FaqList items={faqs} />
      </Section>
      <ClosingCta />
      <JsonLd
        data={[
          serviceLd({ name: "Tiisha online tutoring", description, path: "/how-it-works" }),
          faqLd(faqs),
        ]}
      />
    </>
  );
}
