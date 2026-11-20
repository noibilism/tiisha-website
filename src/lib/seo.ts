import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./config";
import type { Faq } from "@/content/faq";

export const DEFAULT_DESCRIPTION =
  "Live one-to-one online classes with verified tutors from around the world. Every class recorded, with feedback, assessments and a progress report every month.";

export function abs(path: string) {
  return `${SITE_URL}${path === "/" ? "" : path}` || SITE_URL;
}

type Opts = {
  title: string;
  description: string;
  path: string;
  /** Use the title as is, without the "| Tiisha" suffix. */
  absoluteTitle?: boolean;
  noindex?: boolean;
};

export function pageMetadata({ title, description, path, absoluteTitle, noindex }: Opts): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: abs(path) },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      url: abs(path),
      locale: "en",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

/* JSON-LD builders */

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  description: DEFAULT_DESCRIPTION,
};

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "en",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

export function faqLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceLd(o: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: o.name,
    description: o.description,
    url: abs(o.path),
    serviceType: o.serviceType || "Online tutoring",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "Worldwide",
  };
}

export function courseLd(o: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: o.name,
    description: o.description,
    url: abs(o.path),
    provider: { "@type": "Organization", name: SITE_NAME, sameAs: SITE_URL },
  };
}

export function webPageLd(o: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: o.name,
    description: o.description,
    url: abs(o.path),
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };
}
