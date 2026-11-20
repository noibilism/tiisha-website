type P = { size?: number; color?: string; sw?: number };
const base = (size: number, color: string, sw: number) => ({
  "aria-hidden": true as const,
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: sw,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  style: { flex: "none" as const },
});

export const ShieldCheck = ({ size = 20, color = "currentColor", sw = 2.6 }: P) => (
  <svg {...base(size, color, sw)}>
    <path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);
export const Check = ({ size = 24, color = "currentColor", sw = 3 }: P) => (
  <svg {...base(size, color, sw)}>
    <path d="M5 12l5 5 9-10" />
  </svg>
);
export const Chart = ({ size = 28, color = "currentColor", sw = 2.4 }: P) => (
  <svg {...base(size, color, sw)}>
    <path d="M5 20V10M12 20V4M19 20v-7" />
  </svg>
);
export const Video = ({ size = 32, color = "currentColor", sw = 2.4 }: P) => (
  <svg {...base(size, color, sw)}>
    <rect x="3" y="6" width="13" height="12" rx="3" />
    <path d="M16 10l5-3v10l-5-3" />
  </svg>
);
export const Lock = ({ size = 36, color = "currentColor", sw = 2.4 }: P) => (
  <svg {...base(size, color, sw)}>
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
);
export const Chevron = ({ size = 22, color = "currentColor", sw = 2.6 }: P) => (
  <svg {...base(size, color, sw)}>
    <path d="M5 9l7 7 7-7" />
  </svg>
);
