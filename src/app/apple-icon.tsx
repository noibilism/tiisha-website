import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon: the two dots of the Tiisha mark on brand blue. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 22, background: "#1f5bd8" }}>
        <div style={{ display: "flex", width: 44, height: 44, borderRadius: 22, background: "#ffc233" }} />
        <div style={{ display: "flex", width: 44, height: 44, borderRadius: 22, background: "#e8456b" }} />
      </div>
    ),
    size,
  );
}
