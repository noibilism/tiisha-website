import Link from "next/link";
import { links } from "@/lib/config";
import { Logo } from "./Logo";
import { Duo } from "./Characters";

export function Footer() {
  return (
    <footer className="site-footer on-dark">
      <div className="top">
        <Link href="/" className="foot-brand brand-link" aria-label="Tiisha home">
          <Logo width={106} />
        </Link>
        <nav className="links" aria-label="Footer">
          <Link href="/how-it-works">How it works</Link>
          <Link href="/tutor-checks">Tutor checks</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/tutors">Subjects</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/teach">Become a tutor</Link>
          <Link href="/#get-the-app">Get the app</Link>
          <Link href="/faq">Help</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href={links.signin}>Sign in</Link>
        </nav>
      </div>
      <div className="foot-sign">
        <p className="tag-line">Tiisha. Tutors you can trust, wherever they are.</p>
        <Duo pose="wave" className="foot-duo" />
      </div>
      <p className="small">Tiisha serves families and tutors around the world. Available on the web, iOS and Android. App Store is a service mark of Apple Inc. Google Play is a trademark of Google LLC.</p>
    </footer>
  );
}
