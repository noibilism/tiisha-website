import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Duo } from "@/components/Characters";
import { FaqList } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { PageHero, Section } from "@/components/PageShell";
import { Check } from "@/components/Icons";
import { TEACH_SUBJECTS, getTeachSubject } from "@/content/teach";
import { links } from "@/lib/config";
import { faqLd, pageMetadata, webPageLd } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return TEACH_SUBJECTS.map((t) => ({ subject: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ subject: string }> }): Promise<Metadata> {
  const { subject } = await params;
  const t = getTeachSubject(subject);
  if (!t) return {};
  return pageMetadata({ title: t.title, description: t.description, path: `/teach/${t.slug}` });
}

function Ticks({ items }: { items: string[] }) {
  return (
    <ul className="checks" style={{ maxWidth: 760 }}>
      {items.map((x) => (
        <li key={x} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 18 }}>
          <Check size={22} color="var(--leaf-strong)" />
          <span>{x}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function TeachSubjectPage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject } = await params;
  const t = getTeachSubject(subject);
  if (!t) notFound();
  const path = `/teach/${t.slug}`;
  const crumbs = [
    { name: "Tiisha", path: "/" },
    { name: "Teach on Tiisha", path: "/teach" },
    { name: `${t.name} tutors`, path },
  ];
  const others = TEACH_SUBJECTS.filter((x) => x.slug !== t.slug);
  return (
    <>
      <PageHero crumbs={crumbs} title={t.h1} lead={t.lead} art={<Duo pose="lead" />}>
        <div className="btn-row">
          <Link href={links.apply} className="btn btn-sun">
            Apply to teach
          </Link>
          <Link href="/tutor-checks" className="btn btn-ghost">
            See the checks
          </Link>
        </div>
      </PageHero>

      <Section title={`Who we want teaching ${t.name}`}>
        <Ticks items={t.wanted} />
      </Section>

      <Section tone="surface" title={`What does teaching ${t.name} on Tiisha look like?`}>
        <div className="prose">
          <ul>
            {t.classes.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <p>
            Parents find you by subject on the <Link href={`/tutors/${t.subject}`}>online {t.name} tutors page</Link>. You set your own price and hours, and you can teach from a phone or a laptop.
            More on the <Link href="/teach">tutor page</Link>.
          </p>
        </div>
      </Section>

      <Section title="What should you have ready?">
        <Ticks items={t.ready} />
        <p style={{ marginTop: 20 }}>
          Every step is explained on <Link href="/teach#approval" className="textlink">how approval works</Link>. Parents rely on it, which is why it is strict.
        </p>
      </Section>

      <Section tone="surface" title={`${t.name} tutor questions`}>
        <FaqList items={t.faq} />
      </Section>

      <Section title="Teach another subject">
        <ul className="pillrow">
          {others.map((o) => (
            <li key={o.slug}>
              <Link href={`/teach/${o.slug}`}>Teach {o.name}</Link>
            </li>
          ))}
          <li>
            <Link href="/teach">Teach on Tiisha</Link>
          </li>
        </ul>
      </Section>

      <section className="cta on-dark">
        <Duo pose="celebrate" className="cta-duo" />
        <h2>Ready to teach {t.name}?</h2>
        <div className="btn-row">
          <Link href={links.apply} className="btn btn-sun">
            Apply to teach
          </Link>
          <Link href="/how-it-works" className="textlink" style={{ fontSize: 17, textDecoration: "underline" }}>
            See how Tiisha works
          </Link>
        </div>
      </section>
      <JsonLd data={[webPageLd({ name: t.title, description: t.description, path }), faqLd(t.faq)]} />
    </>
  );
}
