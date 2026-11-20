import Script from "next/script";
import { ANALYTICS_ID } from "@/lib/config";

/** Loads nothing unless NEXT_PUBLIC_ANALYTICS_ID is set. "G-..." is GA4, anything else is a Plausible domain. */
export function Analytics() {
  if (!ANALYTICS_ID) return null;
  if (/^G-[A-Z0-9]+$/i.test(ANALYTICS_ID)) {
    return (
      <>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`} strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${ANALYTICS_ID}');`}
        </Script>
      </>
    );
  }
  return <Script defer data-domain={ANALYTICS_ID} src="https://plausible.io/js/script.js" strategy="afterInteractive" />;
}
