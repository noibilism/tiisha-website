import type { Metadata } from "next";
import { Duo } from "@/components/Characters";
import Link from "next/link";

import { PageHero, Section } from "@/components/PageShell";
import { JsonLd } from "@/components/JsonLd";
import { ClosingCta } from "@/components/sections";
import { SUBJECTS } from "@/content/subjects";
import { links } from "@/lib/config";
import { pageMetadata, webPageLd } from "@/lib/seo";

const description =
  "Find verified online tutors by subject: maths, English, science, coding, Yoruba and Arabic. Live one-to-one classes, every class recorded.";

export const metadata: Metadata = pageMetadata({ title: "Online tutors by subject", description, path: "/tutors" });

export default function Tutors() {
  const crumbs = [
    { name: "Tiisha", path: "/" },
    { name: "Tutors", path: "/tutors" },
  ];
  return (
    <>
      <PageHero crumbs={crumbs} title="Online tutors by subject" lead="Live one-to-one classes with verified tutors. Pick what your child needs."
        art={<Duo pose="search" />}
      >
        <div className="btn-row">
          <Link href={links.signup} className="btn btn-sun">
            Find a tutor
          </Link>
        </div>
      </PageHero>
      <Section title="School subjects">
        <ul className="grid3">
          {SUBJECTS.filter((s) => s.group === "school").map((s) => (
            <li key={s.slug}>
              <Link href={`/tutors/${s.slug}`} className="linkcard">
                <span className="h">{s.name} tutors</span>
                <span className="d">{s.intro.split(". ")[0].replace(/\.$/, "")}.</span>
              </Link>
            </li>
          ))}
          <li className="span2">
            <div className="duo-card">
              <Duo pose="curious" />
              <div>
                <span className="h">Not sure where to start?</span>
                <span className="d">
                  Pick the subject your child finds hardest. A good first class starts there. Our guide on{" "}
                  <Link href="/guides/how-to-choose-an-online-tutor">how to choose an online tutor</Link> can help.
                </span>
              </div>
            </div>
          </li>
        </ul>
      </Section>
      <Section tone="surface" title="Languages">
        <ul className="grid3">
          {SUBJECTS.filter((s) => s.group === "language").map((s) => (
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
      <JsonLd data={webPageLd({ name: "Online tutors by subject", description, path: "/tutors" })} />
    </>
  );
}
