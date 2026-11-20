import Link from "next/link";
import { Breadcrumbs } from "./Breadcrumbs";
import { JsonLd } from "./JsonLd";
import { breadcrumbLd } from "@/lib/seo";

type Crumb = { name: string; path: string };

export function PageHero({
  crumbs,
  title,
  lead,
  children,
}: {
  crumbs: Crumb[];
  title: string;
  lead?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-hero on-dark">
      <div className="wrap">
        <Breadcrumbs items={crumbs} />
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
        {children}
      </div>
      <JsonLd data={breadcrumbLd(crumbs)} />
    </section>
  );
}

export function Section({
  children,
  tone = "bg",
  id,
  title,
}: {
  children: React.ReactNode;
  tone?: "bg" | "surface" | "navy";
  id?: string;
  title?: string;
}) {
  return (
    <section id={id} className={`section ${tone}${tone === "navy" ? " on-dark" : ""}`}>
      <div className="wrap">
        {title && <h2 className="title">{title}</h2>}
        {children}
      </div>
    </section>
  );
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="textlink">
      {children}
    </Link>
  );
}
