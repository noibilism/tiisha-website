import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

export function ogImage({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1f5bd8",
          color: "#ffffff",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 40, fontWeight: 700 }}>
          <div style={{ display: "flex", width: 22, height: 22, borderRadius: 11, background: "#ffc233" }} />
          <div style={{ display: "flex" }}>{eyebrow}</div>
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.05, maxWidth: 1040 }}>{title}</div>
        <div style={{ display: "flex", fontSize: 32, color: "#d6e2ff", maxWidth: 980 }}>{sub}</div>
        <div style={{ display: "flex", height: 12, width: 220, background: "#ffc233", borderRadius: 6 }} />
      </div>
    ),
    OG_SIZE,
  );
}
