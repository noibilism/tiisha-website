import type { NextConfig } from "next";

/** Old country pages and exam pages. They were removed, so they redirect permanently. */
const COUNTRY_PATHS = ["us", "uk", "ca", "ng", "gh", "ke"];
const EXAM_SLUGS = ["11-plus", "gcse", "a-level", "sat", "act", "waec", "neco", "jamb", "bece", "kcse"];

export const REDIRECTS = [
  ...COUNTRY_PATHS.map((c) => ({ source: `/${c}/:path*`, destination: "/" })),
  ...EXAM_SLUGS.map((e) => ({ source: `/tutors/${e}/:path*`, destination: "/tutors" })),
].map((r) => ({ ...r, statusCode: 301 as const }));

const config: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  async redirects() {
    return REDIRECTS;
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
      {
        // Illustrations and the logo are not fingerprinted, so cache them for a week and revalidate in the background.
        source: "/illustrations/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" }],
      },
    ];
  },
};

export default config;
