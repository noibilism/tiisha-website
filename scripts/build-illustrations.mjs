// Generates the original Tiisha illustration set into public/illustrations.
// Pip is a pencil character: the brand guide calls sun yellow "the pencil body".
// Palette comes from src/app/tokens.css. Run: node scripts/build-illustrations.mjs
import { mkdirSync, writeFileSync } from "node:fs";

const C = {
  ink: "#0b1f44",
  navy: "#0a2e6e",
  brand: "#1f5bd8",
  sun: "#ffc233",
  sunDeep: "#f0a800",
  coral: "#e8456b",
  leaf: "#12a357",
  violet: "#6137c2",
  white: "#ffffff",
  sunken: "#e6eeff",
  line: "#d5ddee",
  wood: "#f7d9b0",
  metal: "#c9d6f2",
};
const S = `stroke="${C.ink}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"`;

/** A shape that overrides the shared stroke width would repeat the attribute, so keep the last one. */
const dedupe = (markup) =>
  markup.replace(/<[^>]+>/g, (tag) => {
    const all = tag.match(/ stroke-width="[^"]*"/g);
    if (!all || all.length < 2) return tag;
    const last = all[all.length - 1];
    let seen = 0;
    return tag.replace(/ stroke-width="[^"]*"/g, (m) => (++seen === all.length ? last : ""));
  });

const svg = (w, h, title, body, decorative = false) =>
  dedupe(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}"${
    decorative ? ' aria-hidden="true"' : ' role="img"'
  }><title>${title}</title>${body}</svg>`) + "\n";

/* ---------- Pip ---------- */

const eyes = (mode = "open") => {
  if (mode === "happy")
    return `<path d="M82 106q6-9 12 0M106 106q6-9 12 0" fill="none" ${S} stroke-width="3.5"/>`;
  const [dx, dy] = mode === "up" ? [2, -2] : mode === "down" ? [0, 2] : [0, 0];
  const eye = (x) =>
    `<circle cx="${x}" cy="104" r="7" fill="${C.ink}"/><circle cx="${x + dx + 2}" cy="${104 + dy - 2}" r="2.4" fill="#fff"/>`;
  return eye(88) + eye(112);
};
const mouth = (mode = "smile") => {
  if (mode === "open")
    return `<path d="M88 117q12 18 24 0z" fill="${C.coral}" ${S} stroke-width="3"/>`;
  if (mode === "hmm") return `<path d="M93 121h14" fill="none" ${S} stroke-width="3.5"/>`;
  return `<path d="M91 117q9 11 18 0" fill="none" ${S} stroke-width="3.5"/>`;
};
const star = (cx, cy, r, extra = "") => {
  const pts = Array.from({ length: 10 }, (_, i) => {
    const a = (Math.PI / 5) * i - Math.PI / 2;
    const rr = i % 2 ? r * 0.45 : r;
    return `${(cx + rr * Math.cos(a)).toFixed(1)} ${(cy + rr * Math.sin(a)).toFixed(1)}`;
  });
  return `<path d="M${pts.join("L")}z" fill="${C.sun}" ${S} stroke-width="3.5"${extra}/>`;
};
const hand = (x, y) => `<circle cx="${x}" cy="${y}" r="8" fill="${C.sun}" ${S} stroke-width="3.5"/>`;
const arm = (d) => `<path d="${d}" fill="none" ${S} stroke-width="5"/>`;

/** Shared pencil body. Arms and props are drawn by each pose. */
const pip = (face, armsBack, armsFront, extra = "") => `
${extra}
${armsBack}
<path d="M84 172l-6 34M116 172l6 34" fill="none" ${S} stroke-width="5"/>
<ellipse cx="76" cy="210" rx="12" ry="7" fill="${C.brand}" ${S} stroke-width="3.5"/>
<ellipse cx="124" cy="210" rx="12" ry="7" fill="${C.brand}" ${S} stroke-width="3.5"/>
<path d="M70 168h60l-30 42z" fill="${C.wood}" ${S}/>
<path d="M91 196h18l-9 14z" fill="${C.ink}"/>
<rect x="70" y="62" width="60" height="108" fill="${C.sun}" ${S}/>
<path d="M118 66v100" stroke="${C.sunDeep}" stroke-width="10" stroke-linecap="round"/>
<rect x="70" y="50" width="60" height="14" fill="${C.metal}" ${S} stroke-width="3.5"/>
<path d="M70 28a12 12 0 0 1 12-12h36a12 12 0 0 1 12 12v22H70z" fill="${C.coral}" ${S}/>
<ellipse cx="80" cy="122" rx="6" ry="4.5" fill="${C.coral}" opacity=".55"/>
<ellipse cx="120" cy="122" rx="6" ry="4.5" fill="${C.coral}" opacity=".55"/>
${face}
${armsFront}`;

const poses = {
  wave: {
    title: "Pip, the Tiisha pencil, waving hello",
    body: pip(
      eyes() + mouth(),
      arm("M70 126q-16 12-14 28"),
      arm("M130 118q22-4 28-34") + hand(56, 156) + hand(158, 78) +
        `<path d="M172 62q8 8 4 20M180 56q12 12 6 30" fill="none" stroke="${C.coral}" stroke-width="4" stroke-linecap="round"/>`,
    ),
  },
  read: {
    title: "Pip reading a book",
    body: pip(
      eyes("down") + mouth(),
      "",
      `<path d="M62 146q38-14 76 0v34q-38-14-76 0z" fill="${C.white}" ${S}/>
       <path d="M100 150v34" ${S} stroke-width="3.5" fill="none"/>
       <path d="M70 156q14-4 24 0M70 164q14-4 24 0M106 156q14-4 24 0M106 164q14-4 24 0" fill="none" stroke="${C.brand}" stroke-width="3" stroke-linecap="round"/>
       ${arm("M70 128q-12 14-2 22")}${arm("M130 128q12 14 2 22")}${hand(66, 152)}${hand(134, 152)}`,
    ),
  },
  celebrate: {
    title: "Pip celebrating with a star",
    body: pip(
      eyes("happy") + mouth("open"),
      "",
      arm("M70 122q-24-8-28-44") + arm("M130 122q24-8 28-44") + hand(42, 72) + hand(158, 72) +
        star(158, 42, 20),
      `<circle cx="34" cy="40" r="4" fill="${C.coral}"/><circle cx="168" cy="38" r="4" fill="${C.leaf}"/>
       <circle cx="22" cy="92" r="3.5" fill="${C.brand}"/><circle cx="182" cy="96" r="3.5" fill="${C.coral}"/>
       <path d="M46 20l8 8M156 16l8 8" stroke="${C.violet}" stroke-width="4" stroke-linecap="round"/>`,
    ),
  },
  think: {
    title: "Pip thinking it over",
    body: pip(
      eyes("up") + mouth("hmm"),
      arm("M70 130q-14 14-10 30"),
      arm("M130 134q10 6-8 -4") + `<path d="M130 136q12-2 2-16" fill="none" ${S} stroke-width="5"/>` + hand(60, 162) + hand(128, 122),
      `<circle cx="150" cy="58" r="4" fill="${C.line}" stroke="${C.ink}" stroke-width="2.5"/><circle cx="162" cy="44" r="6" fill="${C.line}" stroke="${C.ink}" stroke-width="2.5"/>
       <ellipse cx="176" cy="22" rx="20" ry="16" fill="${C.white}" ${S} stroke-width="3.5"/>
       <path d="M169 18a7 7 0 1 1 10 6q-3 2-3 6" fill="none" stroke="${C.brand}" stroke-width="4" stroke-linecap="round"/><circle cx="176" cy="35" r="2.4" fill="${C.brand}"/>`,
    ),
    w: 210,
  },
  laptop: {
    title: "Pip teaching on a video call with a laptop",
    body: pip(
      eyes() + mouth(),
      "",
      `<path d="M58 176l10-34h64l10 34z" fill="${C.navy}" ${S} stroke-width="3.5"/>
       <rect x="72" y="146" width="56" height="24" rx="3" fill="${C.sunken}"/>
       <circle cx="88" cy="156" r="5" fill="${C.brand}"/><path d="M80 168q8-9 16 0z" fill="${C.brand}"/>
       <path d="M104 152h18M104 158h14M104 164h18" stroke="${C.navy}" stroke-width="3" stroke-linecap="round"/>
       <rect x="50" y="176" width="100" height="8" rx="4" fill="${C.metal}" ${S} stroke-width="3.5"/>
       ${arm("M70 128q-18 22-6 44")}${arm("M130 128q18 22 6 44")}${hand(64, 174)}${hand(136, 174)}`,
      `<rect x="136" y="14" width="56" height="42" rx="10" fill="${C.white}" ${S} stroke-width="3.5"/>
       <circle cx="164" cy="30" r="8" fill="${C.leaf}"/><path d="M150 50q14-14 28 0z" fill="${C.leaf}"/>
       <circle cx="184" cy="22" r="3" fill="${C.coral}"/>`,
    ),
    w: 210,
  },
  point: {
    title: "Pip pointing the way",
    body: pip(
      eyes() + mouth(),
      arm("M70 126q-14 12-8 26") + hand(62, 154),
      arm("M130 120l36-12") + hand(168, 108) +
        `<path d="M176 104l12-6" ${S} stroke-width="4" fill="none"/>`,
      `<path d="M184 70l4 8 8 4-8 4-4 8-4-8-8-4 8-4z" fill="${C.sun}" ${S} stroke-width="3"/>`,
    ),
    w: 210,
  },
};

/* ---------- Scenes ---------- */

const scenes = {
  "scene-tablet-tutor": {
    w: 360,
    h: 260,
    title: "A child learning on a tablet while a tutor teaches on screen",
    body: `
<ellipse cx="180" cy="236" rx="150" ry="14" fill="${C.sunken}"/>
<rect x="60" y="30" width="240" height="160" rx="18" fill="${C.navy}" ${S}/>
<rect x="72" y="42" width="216" height="136" rx="10" fill="${C.white}"/>
<rect x="82" y="52" width="86" height="116" rx="10" fill="${C.sunken}"/>
<circle cx="125" cy="92" r="17" fill="${C.sun}" ${S} stroke-width="3"/>
<path d="M113 90q12-12 24 0" fill="none" stroke="${C.ink}" stroke-width="3" stroke-linecap="round"/>
<circle cx="119" cy="95" r="2" fill="${C.ink}"/><circle cx="131" cy="95" r="2" fill="${C.ink}"/>
<path d="M120 102q5 4 10 0" fill="none" stroke="${C.ink}" stroke-width="2.5" stroke-linecap="round"/>
<path d="M94 156q4-34 31-34t31 34z" fill="${C.brand}" ${S} stroke-width="3"/>
<path d="M104 80q-6-26 21-26t21 26" fill="none" stroke="${C.coral}" stroke-width="5" stroke-linecap="round"/>
<rect x="176" y="52" width="104" height="116" rx="10" fill="${C.surface || "#f6f8fd"}" stroke="${C.line}" stroke-width="3"/>
<circle cx="208" cy="92" r="20" fill="${C.white}" ${S} stroke-width="3"/>
<path d="M208 92v-20a20 20 0 0 1 20 20z" fill="${C.sun}" ${S} stroke-width="3"/>
<path d="M240 82h28M240 96h20M240 110h28" stroke="${C.brand}" stroke-width="5" stroke-linecap="round"/>
<path d="M190 138h76M190 152h50" stroke="${C.line}" stroke-width="5" stroke-linecap="round"/>
<path d="M150 190l-14 38h88l-14-38" fill="${C.metal}" ${S} stroke-width="3.5"/>
<rect x="128" y="226" width="104" height="8" rx="4" fill="${C.navy}" ${S} stroke-width="3"/>
<g>
<circle cx="318" cy="150" r="22" fill="#8a5a3c" ${S} stroke-width="3.5"/>
<path d="M300 140a18 18 0 0 1 36 0q-18-12-36 0z" fill="${C.ink}"/>
<circle cx="326" cy="124" r="8" fill="${C.ink}"/>
<path d="M296 226q-4-48 22-48t22 48z" fill="${C.coral}" ${S} stroke-width="3.5"/>
<path d="M300 200l-28-6" fill="none" ${S} stroke-width="5"/><circle cx="270" cy="194" r="7" fill="#8a5a3c" ${S} stroke-width="3"/>
</g>
<circle cx="300" cy="40" r="6" fill="${C.sun}"/><circle cx="322" cy="62" r="4" fill="${C.coral}"/>`,
  },
  "scene-tutor-checks": {
    w: 320,
    h: 260,
    title: "A checklist with a shield showing tutors are verified",
    body: `
<ellipse cx="160" cy="240" rx="130" ry="12" fill="${C.sunken}"/>
<rect x="30" y="24" width="190" height="212" rx="18" fill="${C.white}" ${S}/>
<rect x="88" y="12" width="74" height="26" rx="10" fill="${C.brand}" ${S} stroke-width="3.5"/>
${[0, 1, 2, 3, 4]
  .map((i) => {
    const y = 62 + i * 34;
    return `<circle cx="58" cy="${y}" r="11" fill="${i < 4 ? C.leaf : C.white}" ${S} stroke-width="3"/>${
      i < 4 ? `<path d="M52 ${y}l4 4 8-9" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>` : ""
    }<path d="M82 ${y}h${[100, 84, 92, 70, 88][i]}" stroke="${C.line}" stroke-width="7" stroke-linecap="round"/>`;
  })
  .join("")}
<path d="M236 82l50 16v44c0 34-22 56-50 70-28-14-50-36-50-70V98z" fill="${C.sun}" ${S} transform="translate(0 -6)"/>
<path d="M236 100l34 11v31c0 24-15 40-34 51-19-11-34-27-34-51v-31z" fill="${C.brand}" transform="translate(0 -6)"/>
<path d="M218 140l12 12 22-26" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" transform="translate(0 -6)"/>
<circle cx="292" cy="44" r="5" fill="${C.coral}"/><circle cx="268" cy="36" r="3.5" fill="${C.leaf}"/>`,
  },
  "scene-calendar": {
    w: 300,
    h: 240,
    title: "A calendar with a class booked",
    body: `
<ellipse cx="150" cy="222" rx="118" ry="11" fill="${C.sunken}"/>
<rect x="30" y="28" width="220" height="180" rx="18" fill="${C.white}" ${S}/>
<path d="M30 46a18 18 0 0 1 18-18h184a18 18 0 0 1 18 18v28H30z" fill="${C.brand}" ${S}/>
<path d="M78 16v26M202 16v26" ${S} stroke-width="7" fill="none"/>
${Array.from({ length: 15 }, (_, n) => {
  const x = 56 + (n % 5) * 44;
  const y = 98 + Math.floor(n / 5) * 36;
  if (n === 7) return `<circle cx="${x}" cy="${y}" r="16" fill="${C.sun}" ${S} stroke-width="3.5"/><path d="M${x - 7} ${y}l5 5 10-11" fill="none" stroke="${C.ink}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`;
  return `<circle cx="${x}" cy="${y}" r="6" fill="${n === 3 || n === 11 ? C.brand : C.line}"/>`;
}).join("")}
<circle cx="250" cy="176" r="38" fill="${C.white}" ${S}/>
<circle cx="250" cy="176" r="28" fill="${C.sunken}"/>
<path d="M250 158v18l13 8" fill="none" ${S} stroke-width="4.5"/>
<circle cx="266" cy="30" r="5" fill="${C.coral}"/>`,
  },
  "scene-report": {
    w: 300,
    h: 250,
    title: "A progress report card with bars going up and a star",
    body: `
<ellipse cx="150" cy="232" rx="118" ry="11" fill="${C.sunken}"/>
<rect x="46" y="14" width="200" height="214" rx="16" fill="${C.white}" ${S} transform="rotate(-3 146 121)"/>
<g transform="rotate(-3 146 121)">
<circle cx="84" cy="52" r="16" fill="${C.sun}" ${S} stroke-width="3.5"/>
<path d="M112 46h90M112 60h58" stroke="${C.line}" stroke-width="7" stroke-linecap="round"/>
<rect x="68" y="136" width="30" height="48" rx="6" fill="${C.sunken}" ${S} stroke-width="3.5"/>
<rect x="110" y="112" width="30" height="72" rx="6" fill="${C.brand}" ${S} stroke-width="3.5"/>
<rect x="152" y="86" width="30" height="98" rx="6" fill="${C.leaf}" ${S} stroke-width="3.5"/>
<path d="M62 196h128" stroke="${C.line}" stroke-width="5" stroke-linecap="round"/>
<path d="M196 112l12-14 12 14M208 98v34" fill="none" stroke="${C.leaf}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M68 90h46M68 104h30" stroke="${C.line}" stroke-width="6" stroke-linecap="round"/>
</g>
<path d="M250 108l8 17 18 2.600-13 12.700 3 18-16-8.600-16 8.600 3-18-13-12.700 18-2.600z" fill="${C.sun}" ${S} stroke-width="3.5"/>
<circle cx="40" cy="38" r="5" fill="${C.coral}"/>`,
  },
  "scene-price": {
    w: 300,
    h: 220,
    title: "A price tag and coins showing a clear price",
    body: `
<ellipse cx="150" cy="204" rx="118" ry="10" fill="${C.sunken}"/>
<g transform="rotate(-10 130 100)">
<path d="M50 40h110l44 60-44 60H50a14 14 0 0 1-14-14V54a14 14 0 0 1 14-14z" fill="${C.brand}" ${S}/>
<circle cx="68" cy="100" r="9" fill="${C.white}" ${S} stroke-width="3.5"/>
<path d="M92 82h70M92 100h50M92 118h62" stroke="#fff" stroke-width="8" stroke-linecap="round"/>
</g>
<g ${S} stroke-width="3.5">
<ellipse cx="236" cy="172" rx="34" ry="12" fill="${C.sun}"/>
<ellipse cx="236" cy="158" rx="34" ry="12" fill="${C.sun}"/>
<ellipse cx="236" cy="144" rx="34" ry="12" fill="${C.sun}"/>
</g>
<path d="M214 144h44" stroke="${C.sunDeep}" stroke-width="4" stroke-linecap="round"/>
<circle cx="262" cy="86" r="5" fill="${C.coral}"/><circle cx="40" cy="170" r="4" fill="${C.leaf}"/>`,
  },
  "scene-privacy": {
    w: 260,
    h: 220,
    title: "A padlock protecting a child profile",
    body: `
<ellipse cx="130" cy="204" rx="100" ry="10" fill="#ffffff" opacity=".45"/>
<rect x="30" y="34" width="132" height="140" rx="16" fill="${C.white}" ${S}/>
<circle cx="96" cy="84" r="22" fill="${C.sunken}" ${S} stroke-width="3.5"/>
<path d="M58 150q4-40 38-40t38 40z" fill="${C.sunken}" ${S} stroke-width="3.5"/>
<path d="M54 52h40" stroke="${C.line}" stroke-width="6" stroke-linecap="round"/>
<path d="M170 110v-14a30 30 0 0 1 60 0v14" fill="none" ${S} stroke-width="9"/>
<rect x="156" y="108" width="88" height="76" rx="16" fill="${C.brand}" ${S}/>
<circle cx="200" cy="140" r="10" fill="${C.sun}" ${S} stroke-width="3.5"/>
<path d="M200 148v14" ${S} stroke-width="5" fill="none"/>`,
  },
};

/* ---------- Write ---------- */

mkdirSync("public/illustrations", { recursive: true });
for (const [name, p] of Object.entries(poses)) {
  const w = p.w || 200;
  writeFileSync(`public/illustrations/pip-${name}.svg`, svg(w, 232, p.title, p.body));
}
for (const [name, s] of Object.entries(scenes)) {
  writeFileSync(`public/illustrations/${name}.svg`, svg(s.w, s.h, s.title, s.body));
}
console.log("illustrations written");
