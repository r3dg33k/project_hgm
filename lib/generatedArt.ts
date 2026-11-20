/**
 * Generated watercolor-style placeholder art (SVG data URIs, no files needed).
 * Used by imageFallback.ts for images that don't exist yet.
 */

export type Scene = "nursery" | "clothes" | "hajj" | "discovery" | "early" | "scan";

let uid = 0;

const rnd = (s: number) => {
  const x = Math.sin(s * 9999) * 10000;
  return x - Math.floor(x);
};

const star = (x: number, y: number, s: number, c = "#F8E4A6") =>
  `<path transform="translate(${x} ${y}) scale(${s})" d="M0-1L.25-.25 1 0 .25.25 0 1-.25.25-1 0-.25-.25Z" fill="${c}"/>`;

const heart = (x: number, y: number, s: number, c: string) =>
  `<path transform="translate(${x} ${y}) scale(${s})" d="M0-10C-20-35-55-5 0 40 55-5 20-35 0-10Z" fill="${c}"/>`;

const moon = (x: number, y: number, r: number, c: string) => {
  const id = `m${uid++}`;
  return `<mask id="${id}"><rect x="${x - r * 2}" y="${y - r * 2}" width="${r * 4}" height="${r * 4}" fill="#fff"/><circle cx="${x + r * 0.42}" cy="${y - r * 0.12}" r="${r * 0.86}" fill="#000"/></mask><circle cx="${x}" cy="${y}" r="${r}" fill="${c}" mask="url(#${id})"/>`;
};

const flower = (x: number, y: number, r: number, c: string) =>
  [0, 72, 144, 216, 288]
    .map((a) => `<ellipse cx="${x}" cy="${y - r}" rx="${r * 0.55}" ry="${r}" fill="${c}" opacity=".85" transform="rotate(${a} ${x} ${y})"/>`)
    .join("") + `<circle cx="${x}" cy="${y}" r="${r * 0.4}" fill="#F8E4A6"/>`;

function frame(seed: number, c1: string, c2: string, blobs: string[], body: string) {
  const w = 1200;
  const h = 900;
  const b = blobs
    .map((c, i) => {
      const cx = 100 + rnd(seed + i) * 1000;
      const cy = 80 + rnd(seed + i * 3) * 740;
      const r = 150 + rnd(seed + i * 7) * 230;
      return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}" opacity=".5"/>`;
    })
    .join("");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
<defs>
<linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient>
<filter id="w" x="-20%" y="-20%" width="140%" height="140%"><feTurbulence type="fractalNoise" baseFrequency=".008" numOctaves="3" seed="${seed}"/><feDisplacementMap in="SourceGraphic" scale="70"/><feGaussianBlur stdDeviation="16"/></filter>
<filter id="p"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="${seed}"/><feColorMatrix values="0 0 0 0 .5  0 0 0 0 .4  0 0 0 0 .4  0 0 0 .07 0"/></filter>
</defs>
<rect width="${w}" height="${h}" fill="url(#g)"/>
<g filter="url(#w)">${b}</g>
<g>${body}</g>
<rect width="${w}" height="${h}" filter="url(#p)"/>
</svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

const sparkles = (c = "#D6B779") =>
  [[150, 140, 18], [1040, 190, 24], [220, 700, 14], [980, 720, 20], [600, 90, 12]]
    .map(([x, y, s]) => star(x, y, s, c))
    .join("");

const clothesLine = () => {
  const items = [
    { x: 230, c: "#F5D0D9", t: "M0 0H90L78 120H12Z" },
    { x: 400, c: "#C8E2F3", t: "M0 0H70L62 90H8Z" },
    { x: 560, c: "#F8E4A6", t: "M0 0H80L70 130H10Z" },
    { x: 730, c: "#D9C9F0", t: "M0 0H70L62 90H8Z" },
    { x: 880, c: "#C6E5D5", t: "M0 0H90L78 120H12Z" }
  ];
  return (
    `<path d="M60 240 Q600 380 1140 240" stroke="#B99352" stroke-width="5" fill="none"/>` +
    items
      .map((it, i) => {
        const y = 240 + Math.sin(((it.x - 60) / 1080) * Math.PI) * 108;
        return `<g transform="translate(${it.x} ${y + 6}) rotate(${(i - 2) * 3})"><path d="${it.t}" fill="${it.c}" stroke="#fff" stroke-width="3"/>${heart(40, 55, 0.5, "#fff")}</g>`;
      })
      .join("")
  );
};

const scenes: Record<Scene, () => string> = {
  clothes: () =>
    frame(11, "#FFF1E9", "#F5D0D9", ["#F8C9B8", "#D9C9F0", "#C8E2F3", "#F8E4A6"],
      clothesLine() + sparkles() + heart(600, 700, 1.4, "#E99CB7")),

  nursery: () => {
    const bars = Array.from({ length: 9 }, (_, i) => `<rect x="${380 + i * 55}" y="470" width="8" height="230" rx="4" fill="#B99352"/>`).join("");
    return frame(23, "#EDF6FC", "#F3EDFA", ["#C8E2F3", "#D9C9F0", "#F5D0D9", "#F8E4A6"],
      `<rect x="350" y="450" width="520" height="14" rx="7" fill="#B99352"/><rect x="350" y="700" width="520" height="14" rx="7" fill="#B99352"/><rect x="360" y="560" width="500" height="110" rx="36" fill="#F5D0D9" opacity=".9"/>` +
      bars +
      `<path d="M600 80V250" stroke="#B99352" stroke-width="3"/>` +
      star(500, 280, 30) + star(600, 300, 40, "#F5D0D9") + star(700, 270, 26, "#C8E2F3") +
      moon(940, 220, 70, "#F8E4A6") + sparkles());
  },

  hajj: () =>
    frame(37, "#FFF1E9", "#F8E4A6", ["#F8C9B8", "#F8E4A6", "#C8E2F3", "#F6B2A0"],
      `<rect x="470" y="330" width="260" height="290" fill="#2d2735"/><rect x="470" y="400" width="260" height="34" fill="#D6B779"/><rect x="560" y="470" width="80" height="150" rx="8" fill="#B99352" opacity=".8"/>` +
      `<ellipse cx="600" cy="640" rx="260" ry="26" fill="#252C4B" opacity=".12"/>` +
      moon(930, 190, 64, "#D6B779") + sparkles()),

  discovery: () =>
    frame(41, "#FFF0F3", "#F3EDFA", ["#F5D0D9", "#F8C9B8", "#D9C9F0", "#F8E4A6"],
      heart(600, 430, 5.5, "#E99CB7") + heart(600, 430, 3, "#F8D2D9") +
      `<text x="600" y="760" text-anchor="middle" font-family="Caveat, cursive" font-size="92" fill="#B8566F">July</text>` +
      flower(220, 640, 34, "#F5D0D9") + flower(990, 600, 42, "#F8C9B8") + sparkles()),

  early: () =>
    frame(53, "#EAF4ED", "#FBF3D8", ["#C6E5D5", "#F8E4A6", "#F5D0D9", "#C8E2F3"],
      `<path d="M600 760 C600 620 590 560 600 470" stroke="#7FB59A" stroke-width="12" fill="none" stroke-linecap="round"/>` +
      `<ellipse cx="540" cy="580" rx="70" ry="30" fill="#A8D5BE" transform="rotate(-28 540 580)"/><ellipse cx="665" cy="540" rx="70" ry="30" fill="#A8D5BE" transform="rotate(28 665 540)"/>` +
      flower(600, 440, 52, "#F5B6C6") + heart(900, 300, 1.3, "#E99CB7") + sparkles()),

  scan: () =>
    frame(67, "#252C4B", "#514568", ["#514568", "#303A60", "#9B7BC5"],
      `<path d="M600 90 L1020 820 A460 460 0 0 1 180 820 Z" fill="#0f1226" opacity=".75"/>` +
      `<ellipse cx="600" cy="520" rx="120" ry="150" fill="#d8dcec" opacity=".75"/><circle cx="600" cy="380" r="66" fill="#e6e9f5" opacity=".85"/><ellipse cx="520" cy="560" rx="38" ry="64" fill="#c5cbe0" opacity=".7" transform="rotate(25 520 560)"/>` +
      `<text x="600" y="860" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="30" letter-spacing="10" fill="#F8E4A6">OUR LITTLE GLIMPSE</text>` +
      sparkles("#F8E4A6"))
};

export function generatedArt(scene: Scene): string {
  return scenes[scene]();
}
