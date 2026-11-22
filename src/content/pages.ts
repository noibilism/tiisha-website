import { SUBJECTS } from "./subjects";
import { GUIDES } from "./guides";
import { TEACH_SUBJECTS } from "./teach";

export type SitePage = { path: string; name: string; summary: string; section: "Core" | "Subjects" | "Guides" | "Teach" };

/** Every indexable page, once. The sitemap and llms.txt both read this list, so they cannot drift apart. */
export function sitePages(): SitePage[] {
  return [
    { path: "/", name: "Tiisha home", summary: "What Tiisha is: live one-to-one classes with verified tutors, recorded, with a monthly progress report.", section: "Core" },
    { path: "/how-it-works", name: "How Tiisha works", summary: "From first search to first class in four steps, on web, iPhone, iPad and Android.", section: "Core" },
    { path: "/tutor-checks", name: "How we check every tutor", summary: "Photo ID matched to a live selfie, qualifications, two referees, a video interview and bank details.", section: "Core" },
    { path: "/pricing", name: "Pricing", summary: "Each tutor sets their own price, shown in your currency when you book. Free cancellation up to 24 hours before a class.", section: "Core" },
    { path: "/faq", name: "Help and answers", summary: "Answers for parents and tutors on booking, safety, recordings, devices and payments.", section: "Core" },
    { path: "/tutors", name: "Online tutors by subject", summary: "All subjects, school subjects and languages.", section: "Subjects" },
    ...SUBJECTS.map((s) => ({ path: `/tutors/${s.slug}`, name: `Online ${s.term} tutors`, summary: s.description, section: "Subjects" as const })),
    { path: "/guides", name: "Parent guides", summary: "Plain guides on choosing a tutor, online or in person, and what you need for online classes.", section: "Guides" },
    ...GUIDES.map((g) => ({ path: `/guides/${g.slug}`, name: g.h1, summary: g.description, section: "Guides" as const })),
    { path: "/teach", name: "Teach on Tiisha", summary: "Set your own price and hours and teach live from a phone or laptop.", section: "Teach" },
    ...TEACH_SUBJECTS.map((t) => ({ path: `/teach/${t.slug}`, name: t.title, summary: t.description, section: "Teach" as const })),
  ];
}
