import Link from "next/link";
import { links } from "@/lib/config";
import { Logo } from "./Logo";

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
          <Link href="/teach">Become a tutor</Link>
          <Link href="/faq">Help</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href={links.signin}>Sign in</Link>
        </nav>
      </div>
      <p className="tag-line">Tiisha. Tutors you can trust, wherever they are.</p>
      <p className="small">Tiisha serves families and tutors around the world.</p>
    </footer>
  );
}
