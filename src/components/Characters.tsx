import type { ReactNode } from "react";

/**
 * The Tiisha brand characters, built from the "ii" mark.
 *
 * Tall stem with the yellow dot is the teacher. Short stem with the pink dot is the learner. The proportions are the
 * mark's own (96 unit grid scaled by 5), so the pair still reads as the logo. Each dot is a head with one big eye.
 * Poses are plain data. Eye tracking, blinking and the lean live in CharacterMotion.tsx and only use the hooks below:
 *   [data-ii]        the svg
 *   [data-eye]       an eye group (white disc), blinks by scaling
 *   [data-look]      the pupil group the tracker moves
 *   .f-t / .f-l      a figure, used for the hop reaction
 */

type Mouth = "smile" | "grin" | "flat" | "o" | "small" | "smirk";
type Brow = "up" | "down" | "tilt";
type Arm = {
  side: "l" | "r";
  dx: number;
  dy: number;
  cx: number;
  cy: number;
  wave?: boolean;
};
type FigurePose = {
  /** Where the pupil rests, each axis -1 to 1. */
  look: [number, number];
  mouth: Mouth;
  happyEyes?: boolean;
  brow?: Brow;
  arms: Arm[];
  scan?: boolean;
};

const T = {
  x: 70,
  y: 190,
  w: 130,
  h: 270,
  cx: 135,
  cy: 90,
  r: 65,
  shL: [76, 255],
  shR: [194, 255],
} as const;
const L = {
  x: 260,
  y: 260,
  w: 130,
  h: 200,
  cx: 325,
  cy: 160,
  r: 65,
  shL: [266, 325],
  shR: [384, 325],
} as const;

const REST_L: Arm = { side: "l", dx: -22, dy: 92, cx: -28, cy: 40 };
const REST_R: Arm = { side: "r", dx: 22, dy: 92, cx: 28, cy: 40 };
const UP_L: Arm = { side: "l", dx: -44, dy: -104, cx: -48, cy: -30 };
const UP_R: Arm = { side: "r", dx: 44, dy: -104, cx: 48, cy: -30 };
const WAVE_L: Arm = { side: "l", dx: -46, dy: -98, cx: -44, cy: -22, wave: true };
const WAVE_R: Arm = { side: "r", dx: 46, dy: -98, cx: 44, cy: -22, wave: true };
const CHIN_T: Arm = { side: "r", dx: -46, dy: -88, cx: 34, cy: -56 };
const CHIN_L: Arm = { side: "r", dx: -46, dy: -88, cx: 34, cy: -56 };

type Pose = { t: FigurePose; l: FigurePose; props?: ReactNode };

const sparkPath = (x: number, y: number, s: number) =>
  `M${x} ${y - s}Q${x} ${y} ${x + s} ${y}Q${x} ${y} ${x} ${y + s}Q${x} ${y} ${x - s} ${y}Q${x} ${y} ${x} ${y - s}Z`;

const Spark = ({
  x,
  y,
  s = 14,
  c = "var(--sun)",
}: {
  x: number;
  y: number;
  s?: number;
  c?: string;
}) => <path d={sparkPath(x, y, s)} fill={c} className="ii-spark" />;

const Question = ({ x, y }: { x: number; y: number }) => (
  <g transform={`translate(${x} ${y})`}>
    <g className="ii-q">
      <path
        d="M0 14Q0 -8 22 -8Q44 -8 44 12Q44 26 28 34Q22 38 22 50"
        fill="none"
        stroke="var(--sun)"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <circle cx="22" cy="72" r="7.5" fill="var(--sun)" />
    </g>
  </g>
);

const POSES: Record<string, Pose> = {
  hello: {
    t: { look: [0.55, 0.35], mouth: "smile", arms: [WAVE_L, REST_R] },
    l: { look: [-0.6, -0.75], mouth: "smile", arms: [REST_L, REST_R] },
    props: <Spark x={430} y={60} s={12} />,
  },
  wave: {
    t: { look: [0.5, 0.4], mouth: "smile", arms: [REST_L, REST_R] },
    l: {
      look: [-0.2, -0.5],
      mouth: "grin",
      arms: [REST_L, { ...WAVE_R, dx: 40, dy: -84, cx: 40, cy: -20 }],
    },
  },
  curious: {
    t: {
      look: [0.5, 0.4],
      mouth: "smile",
      arms: [REST_L, { side: "r", dx: 56, dy: -62, cx: 40, cy: -10 }],
    },
    l: { look: [-0.5, -0.85], mouth: "o", brow: "up", arms: [REST_L, REST_R] },
    props: <Question x={400} y={20} />,
  },
  think: {
    t: {
      look: [0.75, -0.7],
      mouth: "flat",
      brow: "tilt",
      arms: [REST_L, CHIN_T],
    },
    l: {
      look: [-0.35, -0.95],
      mouth: "small",
      brow: "down",
      arms: [REST_L, CHIN_L],
    },
    props: <Question x={190} y={-26} />,
  },
  celebrate: {
    t: { look: [0, 0], mouth: "grin", happyEyes: true, arms: [UP_L, UP_R] },
    l: { look: [0, 0], mouth: "grin", happyEyes: true, arms: [UP_L, UP_R] },
    props: (
      <>
        <Spark x={30} y={70} s={16} />
        <Spark x={236} y={46} s={12} c="#fff" />
        <Spark x={430} y={70} s={16} />
        <Spark x={236} y={196} s={10} />
      </>
    ),
  },
  read: {
    t: {
      look: [0.35, 0.95],
      mouth: "smile",
      arms: [REST_L, { side: "r", dx: 38, dy: 112, cx: 40, cy: 30 }],
    },
    l: {
      look: [-0.4, 0.85],
      mouth: "smile",
      arms: [{ side: "l", dx: -38, dy: 70, cx: -34, cy: 16 }, REST_R],
    },
    props: (
      <g className="ii-book">
        <path
          d="M168 372Q198 358 230 374Q262 358 292 372V438Q262 424 230 440Q198 424 168 438Z"
          fill="#fff"
          stroke="var(--stem)"
          strokeWidth="6"
          strokeLinejoin="round"
        />
        <path d="M230 374V440" stroke="var(--stem)" strokeWidth="5" />
        <path
          d="M180 392Q198 386 216 394M180 408Q198 402 216 410M244 394Q262 386 280 392M244 410Q262 402 280 408"
          stroke="#d5ddee"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    ),
  },
  aha: {
    t: {
      look: [0, -0.6],
      mouth: "grin",
      brow: "up",
      arms: [REST_L, { side: "r", dx: 42, dy: -100, cx: 40, cy: -24 }],
    },
    l: { look: [-0.4, -0.7], mouth: "o", brow: "up", arms: [UP_L, REST_R] },
    props: (
      <g className="ii-bulb">
        <circle cx="236" cy="12" r="26" fill="var(--sun)" />
        <rect x="224" y="38" width="24" height="14" rx="5" fill="var(--stem)" />
        <path
          d="M236 -34V-20M270 -22l-9 9M202 -22l9 9M286 12H272M186 12H200"
          stroke="var(--sun)"
          strokeWidth="7"
          strokeLinecap="round"
        />
      </g>
    ),
  },
  lost: {
    t: {
      look: [0, 0.1],
      mouth: "flat",
      brow: "tilt",
      scan: true,
      arms: [REST_L, REST_R],
    },
    l: {
      look: [0, 0.1],
      mouth: "small",
      brow: "down",
      scan: true,
      arms: [REST_L, REST_R],
    },
    props: (
      <>
        <Question x={196} y={-14} />
        <Question x={404} y={52} />
      </>
    ),
  },
  shield: {
    t: {
      look: [0.4, 0.5],
      mouth: "smile",
      arms: [
        { side: "l", dx: 26, dy: 106, cx: -20, cy: 50 },
        { side: "r", dx: -26, dy: 106, cx: 20, cy: 50 },
      ],
    },
    l: { look: [-0.6, -0.6], mouth: "smile", arms: [REST_L, REST_R] },
    props: (
      <g className="ii-shield">
        <path
          d="M135 338L178 352V398Q178 424 135 440Q92 424 92 398V352Z"
          fill="var(--leaf)"
          stroke="#fff"
          strokeWidth="6"
          strokeLinejoin="round"
        />
        <path
          d="M114 392L130 408L158 374"
          fill="none"
          stroke="#fff"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    ),
  },
  lead: {
    t: {
      look: [0.5, 0.45],
      mouth: "grin",
      arms: [REST_L, { side: "r", dx: 62, dy: -54, cx: 42, cy: -4 }],
    },
    l: { look: [-0.55, -0.85], mouth: "smile", arms: [REST_L, REST_R] },
    props: <Spark x={420} y={90} s={12} />,
  },
  search: {
    t: {
      look: [0.6, 0.2],
      mouth: "small",
      brow: "tilt",
      arms: [REST_L, CHIN_T],
    },
    l: {
      look: [0.7, -0.5],
      mouth: "small",
      brow: "down",
      arms: [REST_L, { side: "r", dx: 34, dy: -64, cx: 36, cy: -10 }],
    },
    props: (
      <g className="ii-mag">
        <circle
          cx="418"
          cy="232"
          r="34"
          fill="#fff"
          fillOpacity=".35"
          stroke="var(--sun)"
          strokeWidth="11"
        />
        <path
          d="M410 262L398 262"
          stroke="var(--sun)"
          strokeWidth="11"
          strokeLinecap="round"
        />
      </g>
    ),
  },
  found: {
    t: {
      look: [0.5, 0.3],
      mouth: "grin",
      happyEyes: true,
      arms: [REST_L, WAVE_R],
    },
    l: {
      look: [-0.2, -0.3],
      mouth: "grin",
      happyEyes: true,
      arms: [UP_L, UP_R],
    },
    props: (
      <g className="ii-tick">
        <circle
          cx="236"
          cy="20"
          r="30"
          fill="var(--leaf)"
          stroke="#fff"
          strokeWidth="6"
        />
        <path
          d="M221 21L232 32L252 8"
          fill="none"
          stroke="#fff"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    ),
  },
};

export type DuoPose = keyof typeof POSES;
export const DUO_POSES = Object.keys(POSES) as DuoPose[];

const armPath = (sh: readonly number[], a: Arm) =>
  `M${sh[0]} ${sh[1]}Q${sh[0] + a.cx} ${sh[1] + a.cy} ${sh[0] + a.dx} ${sh[1] + a.dy}`;

function mouthEl(m: Mouth) {
  const s = {
    fill: "none",
    stroke: "var(--ink-eye)",
    strokeWidth: 6.5,
    strokeLinecap: "round" as const,
  };
  switch (m) {
    case "smile":
      return <path d="M-15 36Q0 52 15 36" {...s} />;
    case "grin":
      return (
        <path
          d="M-20 32Q0 66 20 32Z"
          fill="var(--ink-eye)"
          stroke="var(--ink-eye)"
          strokeWidth="5"
          strokeLinejoin="round"
        />
      );
    case "flat":
      return <path d="M-11 42H11" {...s} />;
    case "o":
      return <ellipse cx="0" cy="43" rx="8" ry="10" fill="var(--ink-eye)" />;
    case "small":
      return <path d="M-9 40Q0 47 9 40" {...s} />;
    case "smirk":
      return <path d="M-13 42Q6 50 15 34" {...s} />;
  }
}

const BROWS: Record<Brow, string> = {
  up: "M-26 -49Q0 -66 24 -50",
  down: "M-26 -50L22 -42",
  tilt: "M-26 -42Q-4 -56 24 -54",
};

function Figure({ who, p }: { who: "t" | "l"; p: FigurePose }) {
  const g = who === "t" ? T : L;
  const dot = who === "t" ? "var(--dot-teacher)" : "var(--dot-learner)";
  const lx = (p.look[0] * 13).toFixed(1);
  const ly = (p.look[1] * 13).toFixed(1);
  return (
    <g className={`f f-${who}`} style={{ transformOrigin: `${g.cx}px 460px` }}>
      <g className="ii-breathe" style={{ transformOrigin: `${g.cx}px 460px` }}>
        <rect
          x={g.x}
          y={g.y}
          width={g.w}
          height={g.h}
          rx={g.r}
          fill="var(--stem)"
        />
        {p.arms.map((a, i) => (
          <path
            key={i}
            d={armPath(a.side === "l" ? g.shL : g.shR, a)}
            fill="none"
            stroke="var(--stem)"
            strokeWidth="19"
            strokeLinecap="round"
            className={a.wave ? "ii-wave" : undefined}
            style={
              a.wave
                ? {
                    transformOrigin: `${(a.side === "l" ? g.shL : g.shR)[0]}px ${(a.side === "l" ? g.shL : g.shR)[1]}px`,
                  }
                : undefined
            }
          />
        ))}
        <g className="ii-head" transform={`translate(${g.cx} ${g.cy})`}>
          <circle r={g.r} fill={dot} />
          {p.happyEyes ? (
            <path
              className="ii-happy"
              d="M-27 -2Q0 -36 27 -2"
              fill="none"
              stroke="var(--ink-eye)"
              strokeWidth="8.5"
              strokeLinecap="round"
            />
          ) : (
            <g transform="translate(0 -9)">
              <g data-eye className="ii-eye">
                <circle r="35" fill="#fff" />
                <g transform={`translate(${lx} ${ly})`}>
                  <g className={p.scan ? "ii-scan" : undefined}>
                    <g data-look className="ii-look">
                      <circle r="18.5" fill="var(--ink-eye)" />
                      <circle cx="-5.5" cy="-6" r="5.5" fill="#fff" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          )}
          {p.brow && !p.happyEyes && (
            <path
              d={BROWS[p.brow]}
              fill="none"
              stroke="var(--ink-eye)"
              strokeWidth="6.5"
              strokeLinecap="round"
            />
          )}
          <g className="ii-mouth">{mouthEl(p.mouth)}</g>
          <g className="ii-mouth-happy">{mouthEl("grin")}</g>
        </g>
      </g>
    </g>
  );
}

/**
 * The teacher and learner together. Inline SVG, decorative unless `title` is given.
 * `track` switches on eye following, blinking and the lean (see CharacterMotion).
 */
export function Duo({
  pose = "hello",
  className = "",
  title,
  track = true,
  lean = false,
}: {
  pose?: DuoPose;
  className?: string;
  title?: string;
  track?: boolean;
  /** Teacher leans towards the learner as the page scrolls. Hero only. */
  lean?: boolean;
}) {
  const p = POSES[pose];
  return (
    <svg
      viewBox="10 -52 440 536"
      width="440"
      height="536"
      className={`ii-duo art-duo art ${className}`.trim()}
      data-ii={track ? "" : undefined}
      data-lean={lean ? "" : undefined}
      data-pose={pose}
      {...(title
        ? { role: "img", "aria-label": title }
        : { "aria-hidden": true, focusable: "false" })}
    >
      {title && <title>{title}</title>}
      <ellipse cx="230" cy="474" rx="190" ry="12" className="ii-ground" />
      <g className="ii-lean" style={{ transformOrigin: "135px 460px" }}>
        <Figure who="t" p={p.t} />
      </g>
      <Figure who="l" p={p.l} />
      {p.props}
    </svg>
  );
}
