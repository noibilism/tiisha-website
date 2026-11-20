import type { Metadata } from "next";
import { Duo } from "@/components/Characters";
import Link from "next/link";

import { links } from "@/lib/config";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page does not exist. Go back to the Tiisha home page or find a tutor.",
  alternates: { canonical: "/404" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="page-hero on-dark" style={{ minHeight: "50vh" }}>
      <div className="wrap hero-split">
        <div>
        <h1>We could not find that page.</h1>
        <p className="lead">The link may be old, or the address may have a typo.</p>
        <div className="btn-row">
          <Link href="/" className="btn btn-sun">
            Go to the home page
          </Link>
          <Link href={links.signup} className="btn btn-ghost">
            Find a tutor
          </Link>
        </div>
        </div>
        <div className="hero-art not-found-art">
          <Duo pose="lost" />
        </div>
      </div>
    </section>
  );
}
