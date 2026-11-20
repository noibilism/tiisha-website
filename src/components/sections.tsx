import Link from "next/link";
import { links } from "@/lib/config";
import { ALL_CURRENCIES, MARKETS, type Market } from "@/content/markets";
import { SUBJECTS } from "@/content/subjects";
import { Check, Chart, Lock, ShieldCheck, Video } from "./Icons";

export const CHECK_LINES = [
  "Government ID, matched to a live selfie so nobody can borrow a face.",
  "Qualification certificates, read and verified by our team.",
  "Two referees, contacted by us.",
  "A video interview.",
  "A bank account in the tutor's own name.",
];

export function Hero({ market, h1 = true }: { market: Market; h1?: boolean }) {
  return (
    <section className="hero on-dark">
      <div className="hero-grid">
        <div>
          {h1 ? <h1>{market.headline}</h1> : <p className="h1like">{market.headline}</p>}
          <p className="hero-sub">{market.subline}</p>
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
        <div className="tutor-card" aria-hidden="true">
          <div className="tc-top">
            <span className="avatar">T</span>
            <div>
              <div className="tc-name">Your tutor</div>
              <div className="tc-sub">Maths, {market.level}. Fractions</div>
            </div>
            <span className="verified">
              <ShieldCheck size={16} color="var(--leaf-strong)" />
              Verified
            </span>
          </div>
          <div className="board">1/2 + 1/4 = ?</div>
          <div className="tags">
            <span className="tag">Live now</span>
            <span className="tag">Recording</span>
            <span className="tag">Parent watching</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExamsStrip({ text }: { text: string }) {
  return (
    <section className="strip" aria-label="Curricula and exams">
      <div className="wrap">
        <Chart color="var(--brand)" />
        <p>{text}</p>
      </div>
    </section>
  );
}

export function HowItWorks({ market }: { market: Market }) {
  const steps = [
    ["Tell us about your child.", "Their age group, school year and curriculum, and what they find hard. It takes two minutes."],
    [
      "Choose a tutor you trust.",
      `Read their profile, see their verified badge and their price in ${market.currency.name}. Book a time that suits your family.`,
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

export function ClassAndProgress({ market }: { market: Market }) {
  return (
    <section className="section bg">
      <div className="wrap cards2">
        <div className="card">
          <Video color="var(--brand)" />
          <h3>Every class is recorded. You can sit in on any of them.</h3>
          <p>
            Join a live class quietly from your own phone, or watch the recording later. Your child can replay the part
            they missed. If something feels wrong, tell us and we review the recording.
          </p>
        </div>
        <div className="card">
          <Chart size={32} color="var(--brand)" />
          <h3>Know what your child can do now, not just what they covered.</h3>
          <p>
            After each class the tutor writes down what went well and what to practise. Short assessments from a question
            bank built for {market.exams} show where marks are being lost. Your monthly report puts it together, with the
            topics that need work.
          </p>
        </div>
      </div>
    </section>
  );
}

export function CurrencyGrid() {
  return (
    <>
      <ul className="currencies">
        {ALL_CURRENCIES.map((c) => (
          <li className="cur" key={c.code}>
            <div className="code">{c.code}</div>
            <div className="sym">{c.symbol}</div>
            <div className="nm">{c.name}</div>
          </li>
        ))}
      </ul>
      <p className="note">Each tutor sets their own price. Tiisha shows it in the currency you chose.</p>
    </>
  );
}

export function PricingSection({ market }: { market: Market }) {
  return (
    <section id="pricing" className="section surface">
      <div className="wrap two">
        <div>
          <h2 className="title">Clear prices in {market.currency.name}.</h2>
          <p className="lead">
            Each tutor sets one price per hour. You see it in your currency, and that is what you pay. Free cancellation up
            to 24 hours before a class. You can pay in naira, pounds, US dollars, Canadian dollars, cedis or Kenyan
            shillings.
          </p>
          <p className="pricing-line">{market.pricingLine}</p>
          <p style={{ marginTop: 14 }}>
            <Link href="/pricing" className="textlink">
              More about pricing
            </Link>
          </p>
        </div>
        <div>
          <CurrencyGrid />
        </div>
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
        </div>
      </div>
    </section>
  );
}

export function SubjectLinks({ market }: { market?: Market }) {
  const list = market
    ? SUBJECTS.filter((s) => s.kind === "subject" || s.markets[market.slug])
    : SUBJECTS;
  return (
    <section className="section surface">
      <div className="wrap">
        <h2 className="title">Find a tutor by subject or exam.</h2>
        <p className="lead">Tutors list the subjects, grades and exams they teach. Start with the one your child needs.</p>
        <ul className="pillrow">
          {list.map((s) => (
            <li key={s.slug}>
              <Link href={`/tutors/${s.slug}`}>{s.name} tutors</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ChooseCountry() {
  return (
    <section className="section bg">
      <div className="wrap">
        <h2 className="title">Choose your country.</h2>
        <p className="lead">
          Where you live sets the curricula and exams we show, your currency and your time zone. Tutors can be anywhere in
          the world.
        </p>
        <ul className="grid3">
          {MARKETS.map((m) => (
            <li key={m.slug}>
              <Link href={`/${m.slug}`} className="linkcard">
                <span className="h">{m.name}</span>
                <span className="d">
                  {m.exams.charAt(0).toUpperCase() + m.exams.slice(1)}. Prices in {m.currency.name}.
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ClosingCta() {
  return (
    <section className="cta on-dark">
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
