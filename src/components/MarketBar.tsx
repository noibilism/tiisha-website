"use client";

import Link from "next/link";
import { COOKIE_NAME } from "@/lib/config";
import { MARKETS, type MarketSlug } from "@/content/markets";

export function MarketBar({ active, home = false }: { active: MarketSlug; home?: boolean }) {
  const remember = (slug: string) => {
    document.cookie = `${COOKIE_NAME}=${slug}; path=/; max-age=31536000; SameSite=Lax`;
  };
  return (
    <div className="marketbar on-dark" id="markets">
      <nav className="bar" aria-label="Country">
        <span className="label">Showing Tiisha for</span>
        {MARKETS.map((m) => (
          <Link
            key={m.slug}
            href={`/${m.slug}`}
            className="chip"
            aria-current={m.slug === active ? (home ? "true" : "page") : undefined}
            onClick={() => remember(m.slug)}
          >
            {m.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
