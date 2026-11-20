import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/PageShell";
import { JsonLd } from "@/components/JsonLd";
import { ClosingCta } from "@/components/sections";
import { SUBJECTS } from "@/content/subjects";
import { links } from "@/lib/config";
import { pageMetadata, webPageLd } from "@/lib/seo";

const description =
  "Find verified online tutors by subject or exam: maths, English, sciences, coding, 11 plus, GCSE, A level, SAT, ACT, WAEC, NECO, JAMB, BECE and KCSE.";

export const metadata: Metadata = pageMetadata({ title: "Online tutors by subject and exam", description, path: "/tutors" });

export default function Tutors() {
  const crumbs = [
    { name: "Tiisha", path: "/" },
    { name: "Tutors", path: "/tutors" },
  ];
  const subjects = SUBJECTS.filter((s) => s.kind === "subject");
  const exams = SUBJECTS.filter((s) => s.kind === "exam");
  return (
    <>
      <PageHero crumbs={crumbs} title="Online tutors by subject and exam" lead="Live one-to-one classes with verified tutors. Pick what your child needs.">
        <div className="btn-row">
          <Link href={links.signup} className="btn btn-sun">
            Find a tutor
          </Link>
        </div>
      </PageHero>
      <Section title="Subjects">
        <ul className="grid3">
          {subjects.map((s) => (
            <li key={s.slug}>
              <Link href={`/tutors/${s.slug}`} className="linkcard">
                <span className="h">{s.name} tutors</span>
                <span className="d">{s.intro.split(". ")[0].replace(/\.$/, "")}.</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <Section tone="surface" title="Exams">
        <ul className="grid3">
          {exams.map((s) => (
            <li key={s.slug}>
              <Link href={`/tutors/${s.slug}`} className="linkcard">
                <span className="h">{s.name} tutors</span>
                <span className="d">{s.intro.split(". ")[0].replace(/\.$/, "")}.</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <ClosingCta />
      <JsonLd data={webPageLd({ name: "Online tutors by subject and exam", description, path: "/tutors" })} />
    </>
  );
}
