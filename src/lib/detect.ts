import type { MarketSlug } from "@/content/markets";

const REGION: Record<string, MarketSlug> = { US: "us", GB: "uk", CA: "ca", NG: "ng", GH: "gh", KE: "ke" };

const ZONES: Record<string, MarketSlug> = {
  "Africa/Lagos": "ng",
  "Africa/Accra": "gh",
  "Africa/Nairobi": "ke",
  "Europe/London": "uk",
  "Europe/Belfast": "uk",
  "America/Toronto": "ca",
  "America/Vancouver": "ca",
  "America/Edmonton": "ca",
  "America/Winnipeg": "ca",
  "America/Halifax": "ca",
  "America/St_Johns": "ca",
  "America/Regina": "ca",
  "America/Montreal": "ca",
  "America/New_York": "us",
  "America/Chicago": "us",
  "America/Denver": "us",
  "America/Los_Angeles": "us",
  "America/Phoenix": "us",
  "America/Anchorage": "us",
  "America/Detroit": "us",
  "Pacific/Honolulu": "us",
};

/** Picks a market from the browser language region first, then the time zone. */
export function detectMarket(languages: readonly string[], timeZone: string | undefined): MarketSlug | null {
  for (const lang of languages) {
    const region = lang.split("-")[1]?.toUpperCase();
    if (region && REGION[region]) return REGION[region];
  }
  if (timeZone && ZONES[timeZone]) return ZONES[timeZone];
  return null;
}

export const BOT_PATTERN =
  /bot|crawl|spider|slurp|lighthouse|headless|pagespeed|gtmetrix|prerender|facebookexternalhit|preview/i;
