import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tiisha",
    short_name: "Tiisha",
    description: "Live one-to-one online classes with verified tutors.",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#1f5bd8",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
