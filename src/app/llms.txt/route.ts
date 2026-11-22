import { sitePages } from "@/content/pages";
import { SUBJECTS } from "@/content/subjects";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/config";
import { abs } from "@/lib/seo";

export const dynamic = "force-static";

/** Plain-text summary for AI assistants and search tools (llmstxt.org format). Facts here must match the pages. */
export function GET() {
  const appsLive = Boolean(APP_STORE_URL && PLAY_STORE_URL);
  const lines: string[] = [
    "# Tiisha",
    "",
    "> Tiisha is an online tutoring platform. Parents book verified tutors for live one-to-one classes on a shared whiteboard. Every class is recorded. Classes run inside Tiisha, so there is no extra video-call subscription.",
    "",
    "## Facts",
    "",
    "- What it is: a marketplace where parents book tutors and tutors teach live online. The name is spelled Tiisha.",
    `- Subjects: ${SUBJECTS.map((s) => s.term).join(", ")}.`,
    "- Tutors: verified before parents see them. Checks are photo ID matched to a live selfie, qualifications, two referees, a video interview and a bank account in the tutor's own name.",
    "- Classes: live video, one to one, on a shared whiteboard. Every class is recorded. Parents can observe live or watch the recording. The tutor writes feedback after each class and parents get a progress report every month.",
    "- Devices: the web app works in a browser on a phone, tablet or laptop. " +
      (appsLive ? "iPhone, iPad and Android apps are available in the stores." : "The iPhone, iPad and Android apps are coming soon."),
    "- Price: each tutor sets their own price. Parents see it in their own currency when they book. Cancellation is free up to 24 hours before a class.",
    "- Tutors: anyone can apply to teach, from anywhere. Tutors set their own price and hours.",
    "- Support: support@tiisha.com",
    "",
  ];
  const sections: Array<"Core" | "Subjects" | "Guides" | "Teach"> = ["Core", "Subjects", "Guides", "Teach"];
  for (const section of sections) {
    lines.push(`## ${section === "Core" ? "Main pages" : section === "Teach" ? "For tutors" : section === "Guides" ? "Guides for parents" : "Subjects"}`, "");
    for (const p of sitePages().filter((x) => x.section === section)) lines.push(`- [${p.name}](${abs(p.path)}): ${p.summary}`);
    lines.push("");
  }
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
