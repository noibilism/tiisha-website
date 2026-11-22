import type { Metadata } from "next";
import Link from "next/link";
import { Duo } from "@/components/Characters";
import { PageHero, Section } from "@/components/PageShell";
import { JsonLd } from "@/components/JsonLd";
import { ClosingCta } from "@/components/sections";
import { GUIDES } from "@/content/guides";
import { links } from "@/lib/config";
import { pageMetadata, webPageLd } from "@/lib/seo";

const description =
  "Plain guides for parents: how to choose an online tutor, online or in-person tutoring, and what you need for online classes.";

export const metadata: Metadata = pageMetadata({ title: "Guides for parents choosing an online tutor", description, path: "/guides" });

export default function Guides() {
  const crumbs = [
    { name: "Tiisha", path: "/" },
    { name: "Guides", path: "/guides" },
  ];
  return (
    <>
      <PageHero crumbs={crumbs} title="Guides for parents" lead="Short answers to the questions parents ask before they book an online tutor." art={<Duo pose="read" />}>
        <div className="btn-row">
          <Link href={links.signup} className="btn btn-sun">
            Find a tutor
          </Link>
        </div>
      </PageHero>
      <Section title="Read before you book">
        <ul className="grid3">
          {GUIDES.map((g) => (
            <li key={g.slug}>
              <Link href={`/guides/${g.slug}`} className="linkcard">
                <span className="h">{g.h1}</span>
                <span className="d">{g.lead.split(". ")[0].replace(/\.$/, "")}.</span>
              </Link>
            </li>
          ))}
        </ul>
        <p style={{ marginTop: 28 }}>
          Ready to look? Browse <Link href="/tutors" className="textlink">online tutors by subject</Link>, or see{" "}
          <Link href="/how-it-works" className="textlink">how Tiisha works</Link>.
        </p>
      </Section>
      <ClosingCta />
      <JsonLd data={webPageLd({ name: "Guides for parents", description, path: "/guides" })} />
    </>
  );
}
