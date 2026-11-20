import Link from "next/link";
import { links } from "@/lib/config";
import { SUBJECTS } from "@/content/subjects";
import { Art, Split } from "./Art";
import { Duo } from "./Characters";
import { Check, Chart, Lock, ShieldCheck, Video } from "./Icons";

export const CHECK_LINES = [
  "Photo ID, matched to a live selfie so nobody can borrow a face.",
  "Qualification certificates, read and verified by our team.",
  "Two referees, contacted by us.",
  "A video interview.",
  "A bank account in the tutor's own name.",
];

const STRIP_TEXT =
  "Tutors teach the curriculum and exams your child follows, wherever you live. Homework, catching up and exam preparation.";

export const HERO = {
  headline: "A tutor your child will actually learn from.",
  subline:
    "Live one-to-one classes with verified tutors, wherever you are. Book and pay online, watch every class, and get a progress report every month. Homework help, catching up and exam prep.",
};

export function Hero() {
  return (
    <section className="hero on-dark">
      <div className="hero-grid">
        <div>
          <h1>{HERO.headline}</h1>
          <p className="hero-sub">{HERO.subline}</p>
          <div className="btn-row">
            <Link href={links.signup} className="btn btn-sun">
              Find a tutor
            </Link>
            <Link href={links.apply} className="btn btn-ghost">
              Become a tutor
            </Link>
          </div>
          <p className="hero-trust">
            <ShieldCheck color="var(--sun)" />
            <span>Every tutor passes ID, liveness and qualification checks before any parent sees them.</span>
          </p>
        </div>
        <div className="hero-duo">
          <Duo pose="hello" lean />
        </div>
      </div>
    </section>
  );
}

export { PlatformStrip, PlatformsSection } from "./Platforms";

export function ExamsStrip({ text = STRIP_TEXT }: { text?: string }) {
  return (
    <section className="strip" aria-label="Curricula and exams">
      <div className="wrap">
        <Chart color="var(--brand)" />
        <p>{text}</p>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    ["Tell us about your child.", "Their age group, school year and curriculum, and what they find hard. It takes two minutes."],
    [
      "Choose a tutor you trust.",
      "Read their profile, see their verified badge and their price in your currency. Book a time that suits your family.",
    ],
    ["Learn live.", "Your child joins from a phone, tablet or laptop. The tutor teaches on a shared whiteboard. The class is recorded."],
    ["See what changed.", "The tutor writes feedback after each class. Short assessments show what your child has mastered. A monthly report shows the trend."],
  ];
  return (
    <section id="how" className="section bg">
      <div className="wrap">
        <h2 className="title">From first search to first class in a day.</h2>
        <ol className="steps">
          {steps.map(([h, p], i) => (
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
          <Link href="/how-it-works" className="textlink">
            See how Tiisha works in detail
          </Link>
        </p>
      </div>
    </section>
  );
}

export function TutorChecks() {
  return (
    <section id="vetting" className="section navy on-dark">
      <div className="wrap two">
        <div>
          <h2 className="title" style={{ color: "#fff" }}>
            Tutors are checked before they teach, not after.
          </h2>
          <p className="lead" style={{ marginBottom: 36 }}>
            Your child will be alone with this person on a screen. So we check them properly.
          </p>
          <p className="strong">Only tutors who pass every step appear in search.</p>
          <p style={{ marginTop: 18 }}>
            <Link href="/tutor-checks" className="textlink">
              Read how tutor checks work
            </Link>
          </p>
        </div>
        <ul className="checks">
          {CHECK_LINES.map((c) => (
            <li className="check" key={c}>
              <Check color="var(--sun)" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ClassAndProgress() {
  return (
    <section className="section bg">
      <div className="wrap cards2">
        <div className="card">
          <Art name="scene-tablet-tutor" alt="A child learning on a tablet while the tutor teaches on screen" className="card-art" />
          <Video color="var(--brand)" />
          <h3>Every class is recorded. You can sit in on any of them.</h3>
          <p>
            Join a live class quietly from your own phone, or watch the recording later. Your child can replay the part
            they missed. If something feels wrong, tell us and we review the recording.
          </p>
        </div>
        <div className="card">
          <Art name="scene-report" alt="A progress report with bars going up and a star" className="card-art" />
          <Chart size={32} color="var(--brand)" />
          <h3>Know what your child can do now, not just what they covered.</h3>
          <p>
            After each class the tutor writes down what went well and what to practise. Short assessments from a question
            bank built for your child's curriculum and exams show where marks are being lost. Your monthly report puts it together, with the
            topics that need work.
          </p>
        </div>
      </div>
    </section>
  );
}

export function PricingSection() {
  return (
    <section id="pricing" className="section surface">
      <div className="wrap two">
        <div>
          <h2 className="title">Clear prices in your own currency.</h2>
          <p className="lead">
            Each tutor sets their own price. You see it in your currency when you book, and that is what you pay. Free
            cancellation up to 24 hours before a class.
          </p>
          <p style={{ marginTop: 14 }}>
            <Link href="/pricing" className="textlink">
              More about pricing
            </Link>
          </p>
          <Art name="scene-price" className="side-art" />
        </div>
        <ul className="facts">
          <li className="card">
            <h3>Set per tutor.</h3>
            <p>Every tutor chooses their own price. Compare profiles and pick the one that suits your family.</p>
          </li>
          <li className="card">
            <h3>Shown in your currency.</h3>
            <p>You see the price in your own currency at booking, before you confirm.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export function Safety() {
  return (
    <section className="section bg">
      <div className="wrap">
        <div className="safety">
          <Lock color="var(--on-sun)" />
          <div>
            <h2>Your child joins from your account.</h2>
            <p>
              Children do not need an email address. We keep only what tutoring needs, and we ask for your phone number so
              we can reach you if a class changes at short notice.
            </p>
          </div>
          <Art name="scene-privacy" className="band-art" />
        </div>
      </div>
    </section>
  );
}

export function SubjectLinks() {
  return (
    <section className="section surface">
      <div className="wrap">
        <Split reverse art={<Art name="pip-point" />}>
          <div>
            <h2 className="title">Find a tutor by subject.</h2>
            <p className="lead">Tutors list the subjects, grades and exams they teach. Start with the subject your child needs.</p>
            <ul className="pillrow">
              {SUBJECTS.map((s) => (
                <li key={s.slug}>
                  <Link href={`/tutors/${s.slug}`}>{s.name} tutors</Link>
                </li>
              ))}
            </ul>
          </div>
        </Split>
      </div>
    </section>
  );
}

export function ClosingCta({ mascot = true }: { mascot?: boolean }) {
  return (
    <section className="cta on-dark">
      {mascot && <Art name="pip-celebrate" className="cta-pip" />}
      <h2>Your child&apos;s next good class is a day away.</h2>
      <div className="btn-row">
        <Link href={links.signup} className="btn btn-sun">
          Find a tutor
        </Link>
        <Link href="/teach" className="textlink" style={{ fontSize: 17, textDecoration: "underline" }}>
          Teach on Tiisha
        </Link>
      </div>
    </section>
  );
}
