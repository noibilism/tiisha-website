import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { DEFAULT_DESCRIPTION, organizationLd, websiteLd } from "@/lib/seo";
import { SITE_URL } from "@/lib/config";

const fredoka = localFont({
  src: "../fonts/fredoka-latin-wght-normal.woff2",
  variable: "--font-fredoka",
  weight: "300 700",
  display: "swap",
  adjustFontFallback: "Arial",
});
const figtree = localFont({
  src: "../fonts/figtree-latin-wght-normal.woff2",
  variable: "--font-figtree",
  weight: "300 900",
  display: "swap",
  adjustFontFallback: "Arial",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Tiisha: a tutor your child will actually learn from", template: "%s | Tiisha" },
  description: DEFAULT_DESCRIPTION,
  applicationName: "Tiisha",
  openGraph: { type: "website", siteName: "Tiisha", locale: "en" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#1f5bd8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fredoka.variable} ${figtree.variable}`}>
      <body>
        <a href="#main" className="skip">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd data={[organizationLd, websiteLd]} />
        <Analytics />
      </body>
    </html>
  );
}
