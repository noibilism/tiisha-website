import type { Metadata } from "next";
import { Duo } from "@/components/Characters";
import Link from "next/link";
import { PageHero, Section } from "@/components/PageShell";
import { Art, Split } from "@/components/Art";
import { FaqList } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { ClosingCta } from "@/components/sections";
import { StoreButtons } from "@/components/Platforms";
import { coreFaq } from "@/content/faq";
import { links } from "@/lib/config";
import { faqLd, pageMetadata, serviceLd } from "@/lib/seo";

const description =
  "From first search to first class in a day, on web, iOS or Android. Choose a verified tutor, learn live, and see progress in a monthly report.";

export const metadata: Metadata = pageMetadata({ title: "How Tiisha online tutoring works", description, path: "/how-it-works" });

const STEPS = [
  ["Tell us about your child.", "Their age group, school year and curriculum, and what they find hard. It takes two minutes."],
  ["Choose a tutor you trust.", "Read their profile, see their verified badge and their price in your currency. Book a time that suits your family."],
  ["Learn live.", "Your child joins from a phone, tablet or laptop. The tutor teaches on a shared whiteboard. The class is recorded."],
  ["See what changed.", "The tutor writes feedback after each class. Short assessments show what your child has mastered. A monthly report shows the trend."],
];

const STEP_POSES = ["search", "shield", "lead", "found"] as const;

export default function HowItWorks() {
  const crumbs = [
    { name: "Tiisha", path: "/" },
    { name: "How it works", path: "/how-it-works" },
  ];
  const faqs = coreFaq().slice(0, 8);
  return (
    <>
      <PageHero
        crumbs={crumbs}
        title="From first search to first class in a day."
        lead="Four steps, from telling us about your child to seeing what changed."
        art={<Duo pose="hello" />}
      >
        <div className="btn-row">
          <Link href={links.signup} className="btn btn-sun">
            Find a tutor
          </Link>
        </div>
      </PageHero>

      <Section title="Four steps to your first class">
        <ol className="steps">
          {STEPS.map(([h, p], i) => (
            <li className="step" key={h}>
              <Duo pose={STEP_POSES[i]} className="step-duo" />
              <span className="num" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{h}</h3>
              <p>{p}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="surface" title="Use it on the device you have">
        <Split reverse art={<Art name="scene-devices" alt="A laptop and a phone showing the same live class" />}>
          <div className="prose">
            <p>
              Tiisha works on the web, on iPhone and iPad, and on Android. Parents, students and tutors use the same
              account everywhere, so you can book on a laptop and join from a phone.
            </p>
            <p>You do not have to install anything to join a class. The apps are there if you want one-tap joining and reminders.</p>
            <StoreButtons />
          </div>
        </Split>
      </Section>

      <Section title="Inside a class">
        <Split art={<Art name="scene-tablet-tutor" alt="A child learning on a tablet while the tutor teaches on screen" />}>
        <div className="prose">
          <p>
            Your child joins from a phone, tablet or laptop. The tutor teaches on a shared whiteboard, so your child sees
            each step as it is written. Your child can write and draw on it from a phone, tablet or laptop. A bigger screen gives more room.
          </p>
          <h3>Every class is recorded. You can sit in on any of them.</h3>
          <p>
            Join a live class quietly from your own phone, or watch the recording later. Your child can replay the part they
            missed. If something feels wrong, tell us and we review the recording.
          </p>
          <h3>Time zones are handled for you</h3>
          <p>
            Times show in your time zone. If your tutor is in another part of the world, they see their own. A parent in one city can book a tutor in another, and classes are live video, so distance does not matter.
          </p>
        </div>
        </Split>
      </Section>

      <Section tone="surface" title="After class: know what changed">
        <Split reverse art={<Art name="scene-report" alt="A progress report with bars going up and a star" />}>
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
        </Split>
      </Section>

      <Section title="Your child joins from your account">
        <Split art={<Art name="scene-privacy" />}>
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
        </Split>
      </Section>

      <Section tone="surface" title="Questions parents ask">
        <FaqList items={faqs} />
        <p style={{ marginTop: 24 }}>
          More answers in the <Link href="/faq" className="textlink">help centre</Link>, or read our{" "}
          <Link href="/guides" className="textlink">guides for parents</Link>.
        </p>
      </Section>
      <ClosingCta mascot />
      <JsonLd
        data={[
          serviceLd({ name: "Tiisha online tutoring", description, path: "/how-it-works" }),
          faqLd(faqs),
        ]}
      />
    </>
  );
}
