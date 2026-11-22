import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Duo } from "@/components/Characters";
import { FaqList } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { PageHero, Section } from "@/components/PageShell";
import { RichText } from "@/components/RichText";
import { ClosingCta } from "@/components/sections";
import { GUIDES, getGuide } from "@/content/guides";
import { links } from "@/lib/config";
import { articleLd, faqLd, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  return pageMetadata({ title: g.title, description: g.description, path: `/guides/${g.slug}` });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();
  const path = `/guides/${g.slug}`;
  const crumbs = [
    { name: "Tiisha", path: "/" },
    { name: "Guides", path: "/guides" },
    { name: g.h1, path },
  ];
  const others = g.related.map((r) => GUIDES.find((x) => x.slug === r)).filter((x): x is NonNullable<typeof x> => Boolean(x));
  return (
    <>
      <PageHero crumbs={crumbs} title={g.h1} lead={g.lead} art={<Duo pose="read" />}>
        <p className="meta-line">
          Updated <time dateTime={g.modified}>{new Date(g.modified).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}</time>
        </p>
        <div className="btn-row">
          <Link href={links.signup} className="btn btn-sun">
            Find a tutor
          </Link>
        </div>
      </PageHero>

      {g.sections.map((s, i) => (
        <Fragment key={s.h2}>
          <Section tone={i % 2 ? "surface" : "bg"} title={s.h2}>
            <div className="prose">
              {s.paragraphs?.map((p) => (
                <p key={p.slice(0, 40)}>
                  <RichText text={p} />
                </p>
              ))}
              {s.list &&
                (s.ordered ? (
                  <ol>
                    {s.list.map((x) => (
                      <li key={x}>
                        <RichText text={x} />
                      </li>
                    ))}
                  </ol>
                ) : (
                  <ul>
                    {s.list.map((x) => (
                      <li key={x}>
                        <RichText text={x} />
                      </li>
                    ))}
                  </ul>
                ))}
            </div>
            {g.table && g.tableAfter === i && (
              <div className="compare-wrap">
                <table className="compare">
                  <caption>{g.table.caption}</caption>
                  <thead>
                    <tr>
                      {g.table.head.map((h, k) => (
                        <th key={k} scope="col">
                          {h || "Question"}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {g.table.rows.map(([a, b, c]) => (
                      <tr key={a}>
                        <th scope="row">{a}</th>
                        <td>{b}</td>
                        <td>{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </Section>
        </Fragment>
      ))}

      <Section tone={g.sections.length % 2 ? "surface" : "bg"} title="Questions parents ask">
        <FaqList items={g.faq} />
      </Section>

      <Section tone={g.sections.length % 2 ? "bg" : "surface"} title="Keep reading">
        <ul className="pillrow">
          {others.map((o) => (
            <li key={o.slug}>
              <Link href={`/guides/${o.slug}`}>{o.h1}</Link>
            </li>
          ))}
          <li>
            <Link href="/tutors">Online tutors by subject</Link>
          </li>
          <li>
            <Link href="/how-it-works">How Tiisha works</Link>
          </li>
          <li>
            <Link href="/faq">Help and answers</Link>
          </li>
        </ul>
      </Section>
      <ClosingCta />
      <JsonLd
        data={[
          articleLd({ headline: g.h1, description: g.description, path, published: g.published, modified: g.modified }),
          faqLd(g.faq),
        ]}
      />
    </>
  );
}
