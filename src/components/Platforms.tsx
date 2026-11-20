import { Art, Split } from "./Art";
import { Devices } from "./Icons";
import { APP_STORE_URL, APP_URL, PLAY_STORE_URL } from "@/lib/config";

/** One line for the strip, the section, the footer and the FAQ to share. */
export const PLATFORMS_LINE = "Learn on the web, iPhone, iPad and Android.";

/**
 * Store buttons are plain text in our own style (no Apple or Google badge artwork).
 * A button links out only when its store URL is set. Otherwise it is a disabled "Coming soon" pill,
 * so the site never ships a dead link.
 */
function StoreButton({ href, label }: { href: string; label: string }) {
  if (href) {
    return (
      <a href={href} className="btn btn-store" rel="noopener">
        {label}
      </a>
    );
  }
  return (
    <button type="button" className="btn btn-store is-soon" disabled>
      {label}
      <span className="soon">Coming soon</span>
    </button>
  );
}

export function StoreButtons() {
  const soon = !APP_STORE_URL || !PLAY_STORE_URL;
  return (
    <div className="store" data-store>
      <div className="btn-row">
        <a href={APP_URL} className="btn btn-brand">
          Open the web app
        </a>
        <StoreButton href={APP_STORE_URL} label="Download on the App Store" />
        <StoreButton href={PLAY_STORE_URL} label="Get it on Google Play" />
      </div>
      {soon && (
        <p className="note">
          The iPhone, iPad and Android apps are coming soon. Until then the web app works in the browser on any phone,
          tablet or laptop.
        </p>
      )}
    </div>
  );
}

/** Thin strip under the home hero. */
export function PlatformStrip() {
  return (
    <section className="strip platform-strip" aria-label="Platforms">
      <div className="wrap">
        <Devices color="var(--brand)" />
        <p>
          {PLATFORMS_LINE} <span className="strip-sub">One account for parents, students and tutors.</span>
        </p>
      </div>
    </section>
  );
}

const WHO = [
  ["Parents", "Book, pay and watch classes, and read progress reports, from a laptop or a phone."],
  ["Students", "Join a class from the parent's account or with a sign-in code, on whichever device is nearest."],
  ["Tutors", "Teach from a phone or a laptop. Set hours, run classes, write feedback and see earnings."],
];

/** Fuller section lower on the home page, with the device illustration. */
export function PlatformsSection() {
  return (
    <section id="get-the-app" className="section bg">
      <div className="wrap">
        <Split art={<Art name="scene-devices" alt="A laptop and a phone showing the same live class" />}>
          <div>
            <h2 className="title">One account on the web, iPhone, iPad and Android.</h2>
            <p className="lead">
              Parents, students and tutors can all use the same account on the web and on mobile. Book on a laptop, join
              from a phone, and pick up where you left off.
            </p>
            <ul className="who">
              {WHO.map(([h, p]) => (
                <li key={h}>
                  <strong>{h}.</strong> {p}
                </li>
              ))}
            </ul>
            <StoreButtons />
          </div>
        </Split>
      </div>
    </section>
  );
}
