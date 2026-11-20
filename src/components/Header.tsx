import Link from "next/link";
import { links } from "@/lib/config";
import { Logo } from "./Logo";

const NAV = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/tutor-checks", label: "Tutor checks" },
  { href: "/pricing", label: "Pricing" },
  { href: "/teach", label: "Teach on Tiisha" },
];

export function Header() {
  return (
    <header className="site-header on-dark">
      <div className="bar">
        <Link href="/" className="brand-link" aria-label="Tiisha home">
          <Logo eyes />
        </Link>
        <nav className="main-nav" aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
          <Link href={links.signin}>Sign in</Link>
          <Link href={links.signup} className="nav-cta">
            Find a tutor
          </Link>
        </nav>
        <details className="menu">
          <summary>Menu</summary>
          <nav className="menu-list" aria-label="Main menu">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href}>
                {n.label}
              </Link>
            ))}
            <Link href="/tutors">Subjects</Link>
            <Link href="/#get-the-app">Get the app</Link>
            <Link href={links.signin}>Sign in</Link>
            <Link href={links.signup}>Find a tutor</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
