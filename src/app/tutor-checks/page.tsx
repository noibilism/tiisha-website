import type { Metadata } from "next";
import Link from "next/link";
import { Art, Split } from "@/components/Art";
import { PageHero, Section } from "@/components/PageShell";
import { JsonLd } from "@/components/JsonLd";
import { ClosingCta, CHECK_LINES } from "@/components/sections";
import { Check } from "@/components/Icons";
import { links } from "@/lib/config";
import { pageMetadata, webPageLd } from "@/lib/seo";

const description =
  "Tutors are checked before they teach, not after: photo ID with a live selfie, qualifications, two referees, an interview, bank details and a signed agreement.";

export const metadata: Metadata = pageMetadata({ title: "How we check every tutor before they teach", description, path: "/tutor-checks" });

const DETAIL = [
  ["Photo ID, matched to a live selfie", "The tutor photographs an official ID, such as a passport, and completes a short live selfie check. The selfie is matched to the ID so nobody can borrow a face."],
  ["Qualification certificates", "Tutors upload their certificates. Our team reads and verifies them."],
  ["Two referees", "Every tutor gives two referees. We contact them ourselves."],
  ["A video interview", "Every tutor meets our team in a short video interview."],
  ["A bank account in the tutor's own name", "The name on the bank account must match the name on the ID."],
  ["A signed tutor agreement", "Every tutor agrees to our tutor terms, including how they behave in class."],
  ["Final approval", "Our team reviews every step. Only tutors who pass all of them are approved and appear in search."],
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
        art={<Art name="pip-point" eager />}
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
        <Split sticky art={<Art name="scene-tutor-checks" alt="A checklist with a shield showing a tutor has passed every check" />}>
          <div className="prose">
            {DETAIL.map(([h, p]) => (
              <div key={h}>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </Split>
      </Section>

      <Section tone="surface" title="After approval, you can still see every class">
        <Split reverse art={<Art name="pip-read" />}>
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
        </Split>
      </Section>
      <ClosingCta />
      <JsonLd data={webPageLd({ name: "Tutor checks", description, path: "/tutor-checks" })} />
    </>
  );
}
