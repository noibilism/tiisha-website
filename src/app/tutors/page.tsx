import type { Metadata } from "next";
import Link from "next/link";
import { Art, Split } from "@/components/Art";
import { PageHero, Section } from "@/components/PageShell";
import { JsonLd } from "@/components/JsonLd";
import { ClosingCta } from "@/components/sections";
import { SUBJECTS } from "@/content/subjects";
import { links } from "@/lib/config";
import { pageMetadata, webPageLd } from "@/lib/seo";

const description =
  "Find verified online tutors by subject: maths, English, science, physics, chemistry, biology and coding. Live one-to-one classes, every class recorded.";

export const metadata: Metadata = pageMetadata({ title: "Online tutors by subject", description, path: "/tutors" });

export default function Tutors() {
  const crumbs = [
    { name: "Tiisha", path: "/" },
    { name: "Tutors", path: "/tutors" },
  ];  return (
    <>
      <PageHero crumbs={crumbs} title="Online tutors by subject" lead="Live one-to-one classes with verified tutors. Pick what your child needs.">
        <div className="btn-row">
          <Link href={links.signup} className="btn btn-sun">
            Find a tutor
          </Link>
        </div>
      </PageHero>
      <Section title="Subjects">
        <ul className="grid3">
          {SUBJECTS.map((s) => (
            <li key={s.slug}>
              <Link href={`/tutors/${s.slug}`} className="linkcard">
                <span className="h">{s.name} tutors</span>
                <span className="d">{s.intro.split(". ")[0].replace(/\.$/, "")}.</span>
              </Link>
            </li>
          ))}
          <li className="span2">
            <div className="pip-card">
              <Art name="pip-point" />
              <div>
                <span className="h">Not sure where to start?</span>
                <span className="d">Pick the subject your child finds hardest. A good first class starts there.</span>
              </div>
            </div>
          </li>
        </ul>
      </Section>
      <ClosingCta />
      <JsonLd data={webPageLd({ name: "Online tutors by subject", description, path: "/tutors" })} />
    </>
  );
}
