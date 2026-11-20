"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { COOKIE_NAME } from "@/lib/config";
import { BOT_PATTERN, detectMarket } from "@/lib/detect";
import { MARKET_SLUGS } from "@/content/markets";

/**
 * Runs only in a real browser, after the page has rendered. Crawlers and test
 * tools always keep the page they asked for. First-time visitors are sent to
 * their market, and the choice is remembered in a cookie.
 */
export function MarketRedirect() {
  const router = useRouter();
  useEffect(() => {
    if (BOT_PATTERN.test(navigator.userAgent) || navigator.webdriver) return;
    const saved = document.cookie
      .split("; ")
      .find((c) => c.startsWith(`${COOKIE_NAME}=`))
      ?.split("=")[1];
    if (saved && (MARKET_SLUGS as string[]).includes(saved)) {
      router.replace(`/${saved}`);
      return;
    }
    let tz: string | undefined;
    try {
      tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    } catch {}
    const found = detectMarket(navigator.languages?.length ? navigator.languages : [navigator.language], tz);
    if (!found) return;
    document.cookie = `${COOKIE_NAME}=${found}; path=/; max-age=31536000; SameSite=Lax`;
    try {
      sessionStorage.setItem("tiisha_detected", found);
    } catch {}
    router.replace(`/${found}`);
  }, [router]);
  return null;
}
