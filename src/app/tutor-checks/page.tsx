import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/PageShell";
import { JsonLd } from "@/components/JsonLd";
import { ClosingCta, CHECK_LINES } from "@/components/sections";
import { Check } from "@/components/Icons";
import { links } from "@/lib/config";
import { pageMetadata, webPageLd } from "@/lib/seo";

const description =
  "Tutors are checked before they teach, not after. Government ID with a live selfie, verified qualifications, two referees, a video interview and a bank account in their own name.";

export const metadata: Metadata = pageMetadata({ title: "How we check every tutor before they teach", description, path: "/tutor-checks" });

const DETAIL = [
  ["Government ID, matched to a live selfie", "The tutor photographs a government ID, such as a passport or national ID card, and completes a short live selfie check. The selfie is matched to the ID so nobody can borrow a face. For tutors in Nigeria we also check BVN and NIN, and for tutors in Ghana the Ghana Card number."],
  ["Qualification certificates", "Tutors upload their certificates. Our team reads and verifies them."],
  ["Two referees", "Every tutor gives two referees. We contact them ourselves."],
  ["A video interview", "Every tutor meets our team in a short video interview."],
  ["A bank account in the tutor's own name", "The name on the bank account must match the name on the ID."],
];

export default function TutorChecks() {
  const crumbs = [
    { name: "Tiisha", path: "/" },
    { name: "Tutor checks", path: "/tutor-checks" },
  ];
  return (
    <>
      <PageHero
        crumbs={crumbs}
        title="Tutors are checked before they teach, not after."
        lead="Your child will be alone with this person on a screen. So we check them properly."
      >
        <div className="btn-row">
          <Link href={links.signup} className="btn btn-sun">
            Find a tutor
          </Link>
        </div>
      </PageHero>

      <section className="section navy on-dark">
        <div className="wrap two">
          <div>
            <h2 className="title" style={{ color: "#fff" }}>
              Five checks, one standard.
            </h2>
            <p className="strong">Only tutors who pass every step appear in search.</p>
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

      <Section title="What each check involves">
        <div className="prose">
          {DETAIL.map(([h, p]) => (
            <div key={h}>
              <h3>{h}</h3>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="surface" title="After approval, you can still see every class">
        <div className="prose">
          <p>
            Every class is recorded. You can join a live class quietly from your own phone, or watch the recording later.
            If something feels wrong, tell us and we review the recording.
          </p>
          <p>
            Tutors are checked on the subjects and grades they teach, and you will see a verified badge on their profile.
            If your child does not click with a tutor, say so after the first class and we help you move to another one.
          </p>
          <p>
            Tutors can see how the process works from their side on <Link href="/teach">the tutor page</Link>.
          </p>
        </div>
      </Section>
      <ClosingCta />
      <JsonLd data={webPageLd({ name: "Tutor checks", description, path: "/tutor-checks" })} />
    </>
  );
}
