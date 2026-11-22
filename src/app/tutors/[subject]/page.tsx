import type { Metadata } from "next";
import { Duo } from "@/components/Characters";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Art, Split } from "@/components/Art";
import { PageHero, Section } from "@/components/PageShell";
import { FaqList } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { ClosingCta } from "@/components/sections";
import { Check } from "@/components/Icons";
import { SUBJECTS, getSubject } from "@/content/subjects";
import { getTeachSubject } from "@/content/teach";
import { links } from "@/lib/config";
import { faqLd, pageMetadata, serviceLd } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return SUBJECTS.map((s) => ({ subject: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ subject: string }> }): Promise<Metadata> {
  const { subject } = await params;
  const s = getSubject(subject);
  if (!s) return {};
  return pageMetadata({ title: s.title, description: s.description, path: `/tutors/${s.slug}` });
}

const SHARED_STEPS = [
  "Book a time that suits your family. Times show in your time zone.",
  "Your child joins from a phone, tablet or laptop. The tutor teaches on a shared whiteboard.",
  "The class is recorded. You can join live as an observer or watch the recording.",
  "The tutor writes feedback after each class, and you get a progress report every month.",
];

export default async function SubjectPage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject } = await params;
  const s = getSubject(subject);
  if (!s) notFound();
  const path = `/tutors/${s.slug}`;
  const crumbs = [
    { name: "Tiisha", path: "/" },
    { name: "Tutors", path: "/tutors" },
    { name: s.name, path },
  ];  const teach = getTeachSubject(["physics", "chemistry", "biology"].includes(s.slug) ? "science" : s.slug);
  const related = s.related.map((r) => getSubject(r)).filter((r): r is NonNullable<typeof r> => Boolean(r));  return (
    <>
      <PageHero crumbs={crumbs} title={s.h1} lead={s.intro} art={<Duo pose="wave" />}>
        <div className="btn-row">
          <Link href={links.signup} className="btn btn-sun">
            Find a tutor
          </Link>
          <Link href="/tutor-checks" className="btn btn-ghost">
            How we check tutors
          </Link>
        </div>
      </PageHero>

      <Section title={`What does online ${s.term} tutoring cover?`}>
        <div className="prose">
          {s.what.map((p) => (
            <p key={p.slice(0, 30)}>{p}</p>
          ))}
        </div>
      </Section>

      <Section tone="surface" title={`Who is a ${s.term} tutor for?`}>
        <Split reverse art={<Duo pose="read" />}>
        <ul className="checks" style={{ maxWidth: 760 }}>
          {s.suits.map((x) => (
            <li key={x} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 18 }}>
              <Check size={22} color="var(--leaf-strong)" />
              <span>{x}</span>
            </li>
          ))}
        </ul>
        </Split>
      </Section>

      <Section title={`How do ${s.term} classes work on Tiisha?`}>
        <Split art={<Art name="scene-tablet-tutor" alt="A child learning on a tablet while the tutor teaches on screen" />}>
        <div className="prose">
          <ol>
            {SHARED_STEPS.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ol>
          <h3>In {s.term} classes in particular</h3>
          <ul>
            {s.classes.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
        </Split>
      </Section>

      <Section tone="surface" title={`${s.name} tutoring questions`}>
        <FaqList items={s.faq} />
      </Section>

      <Section title="Next steps">
        <ul className="pillrow">
          <li>
            <Link href="/guides/how-to-choose-an-online-tutor">How to choose an online tutor</Link>
          </li>
          <li>
            <Link href="/how-it-works">How Tiisha works</Link>
          </li>
          {teach && (
            <li>
              <Link href={`/teach/${teach.slug}`}>Teach {teach.name} on Tiisha</Link>
            </li>
          )}
        </ul>
      </Section>

      <Section tone="surface" title="Related subjects">
        <ul className="pillrow">
          {related.map((r) => (
            <li key={r.slug}>
              <Link href={`/tutors/${r.slug}`}>{r.name} tutors</Link>
            </li>
          ))}
          <li>
            <Link href="/tutors">All subjects</Link>
          </li>
        </ul>
      </Section>
      <ClosingCta />
      <JsonLd
        data={[
          serviceLd({ name: `Online ${s.name} tutoring`, description: s.description, path, serviceType: `${s.name} tutoring` }),
          faqLd(s.faq),
        ]}
      />
    </>
  );
}
