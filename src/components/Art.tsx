/**
 * Original Tiisha illustrations (Pip the pencil and small scenes) from public/illustrations.
 * Sizes match each SVG's viewBox so the browser reserves space before it loads (no layout shift).
 * Decorative by default (empty alt, hidden from assistive tech). Pass `alt` when the picture carries meaning.
 */
const ART = {
  "pip-wave": [200, 232],
  "pip-read": [200, 232],
  "pip-celebrate": [200, 232],
  "pip-think": [210, 232],
  "pip-laptop": [210, 232],
  "pip-point": [210, 232],
  "scene-tablet-tutor": [360, 260],
  "scene-tutor-checks": [320, 260],
  "scene-calendar": [300, 240],
  "scene-report": [300, 250],
  "scene-price": [300, 220],
  "scene-privacy": [260, 220],
} as const;

export type ArtName = keyof typeof ART;

export function Art({
  name,
  alt = "",
  className = "",
  eager = false,
}: {
  name: ArtName;
  alt?: string;
  className?: string;
  /** Only for art that is visible on first paint. Everything else loads lazily. */
  eager?: boolean;
}) {
  const [w, h] = ART[name];
  return (
    // Plain img on purpose: these are small static SVGs, so the image optimiser adds nothing.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/illustrations/${name}.svg`}
      width={w}
      height={h}
      alt={alt}
      {...(alt ? {} : { "aria-hidden": true })}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={`art ${name.startsWith("pip") ? "art-pip" : "art-scene"} ${className}`.trim()}
    />
  );
}

/** Text on one side, art on the other. Art stacks under the text on small screens. */
export function Split({
  children,
  art,
  reverse = false,
  sticky = false,
}: {
  children: React.ReactNode;
  art: React.ReactNode;
  reverse?: boolean;
  sticky?: boolean;
}) {
  return (
    <div className={`split${reverse ? " rev" : ""}${sticky ? " sticky" : ""}`}>
      <div className="split-main">{children}</div>
      <div className="split-art">{art}</div>
    </div>
  );
}
