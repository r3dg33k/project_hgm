/**
 * Generated watercolor-style placeholder art (SVG data URIs, no files needed).
 * Used by imageFallback.ts for images that don't exist yet.
 */

export type BaseScene = "nursery" | "clothes" | "hajj" | "discovery" | "early" | "scan";
export type Scene = BaseScene | keyof typeof more;

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

const scenes: Record<BaseScene, () => string> = {
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

/* ===== Faceless figures & props for the full illustration set ===== */

const SKIN = "#E9B8A0";

const woman = (x: number, y: number, s: number, c: string, scarf = "#F5D0D9", belly = true) =>
  `<g><path d="M${x - 55 * s} ${y - 270 * s}Q${x - 95 * s} ${y - 120 * s} ${x - 115 * s} ${y}H${x + 115 * s}Q${x + 95 * s} ${y - 120 * s} ${x + 55 * s} ${y - 270 * s}Z" fill="${c}"/>` +
  (belly ? `<circle cx="${x + 34 * s}" cy="${y - 175 * s}" r="${54 * s}" fill="${c}" stroke="#fff" stroke-opacity=".35" stroke-width="${3 * s}"/>` : "") +
  `<rect x="${x - 14 * s}" y="${y - 300 * s}" width="${28 * s}" height="${40 * s}" fill="${SKIN}"/><ellipse cx="${x}" cy="${y - 330 * s}" rx="${46 * s}" ry="${54 * s}" fill="${scarf}"/></g>`;

const man = (x: number, y: number, s: number, c: string) =>
  `<g><path d="M${x - 70 * s} ${y - 260 * s}Q${x - 85 * s} ${y - 120 * s} ${x - 80 * s} ${y}H${x + 80 * s}Q${x + 85 * s} ${y - 120 * s} ${x + 70 * s} ${y - 260 * s}Q${x} ${y - 290 * s} ${x - 70 * s} ${y - 260 * s}Z" fill="${c}"/><circle cx="${x}" cy="${y - 320 * s}" r="${38 * s}" fill="${SKIN}"/><path d="M${x - 38 * s} ${y - 325 * s}Q${x} ${y - 385 * s} ${x + 38 * s} ${y - 325 * s}Q${x} ${y - 345 * s} ${x - 38 * s} ${y - 325 * s}Z" fill="#3b3140"/></g>`;

const baby = (x: number, y: number, s: number, c = "#FFF9F2") =>
  `<g transform="rotate(-18 ${x} ${y})"><ellipse cx="${x}" cy="${y}" rx="${56 * s}" ry="${34 * s}" fill="${c}" stroke="#E9C9C0" stroke-width="${3 * s}"/><circle cx="${x - 50 * s}" cy="${y - 6 * s}" r="${26 * s}" fill="${SKIN}"/><path d="M${x - 30 * s} ${y - 26 * s}Q${x} ${y - 40 * s} ${x + 30 * s} ${y - 20 * s}" stroke="#F5D0D9" stroke-width="${6 * s}" fill="none"/></g>`;

const halo = (x: number, y: number, r: number, c: string) =>
  [1, 0.72, 0.46].map((k, i) => `<circle cx="${x}" cy="${y}" r="${r * k}" fill="${c}" opacity="${0.16 + i * 0.1}"/>`).join("");

const ground = (c: string) => `<ellipse cx="600" cy="980" rx="780" ry="200" fill="${c}"/>`;

const windowFrame = (x: number, y: number, w: number, h: number, sky = "#C8E2F3") =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="${sky}" stroke="#fff" stroke-width="14"/><path d="M${x + w / 2} ${y}V${y + h}M${x} ${y + h / 2}H${x + w}" stroke="#fff" stroke-width="10"/><ellipse cx="${x + w * 0.3}" cy="${y + h * 0.3}" rx="${w * 0.14}" ry="${h * 0.06}" fill="#fff" opacity=".8"/>`;

const mosque = (x: number, y: number, s: number, c: string) =>
  `<g fill="${c}"><path d="M${x - 120 * s} ${y}V${y - 90 * s}Q${x - 120 * s} ${y - 230 * s} ${x} ${y - 270 * s}Q${x + 120 * s} ${y - 230 * s} ${x + 120 * s} ${y - 90 * s}V${y}Z"/>` +
  [-190, 190].map((d) => `<rect x="${x + (d - 18) * s}" y="${y - 330 * s}" width="${36 * s}" height="${330 * s}"/><path d="M${x + (d - 26) * s} ${y - 330 * s}L${x + d * s} ${y - 400 * s}L${x + (d + 26) * s} ${y - 330 * s}Z"/>`).join("") +
  `<rect x="${x - 230 * s}" y="${y - 50 * s}" width="${460 * s}" height="${50 * s}"/></g>`;

const clock = (x: number, y: number, r: number, c: string) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" fill-opacity=".5" stroke="${c}" stroke-width="8"/>` +
  Array.from({ length: 12 }, (_, i) => { const a = (i * Math.PI) / 6; return `<path d="M${x + Math.sin(a) * r * 0.82} ${y - Math.cos(a) * r * 0.82}L${x + Math.sin(a) * r * 0.94} ${y - Math.cos(a) * r * 0.94}" stroke="${c}" stroke-width="6"/>`; }).join("") +
  `<path d="M${x} ${y}V${y - r * 0.6}M${x} ${y}L${x + r * 0.4} ${y + r * 0.2}" stroke="${c}" stroke-width="9" stroke-linecap="round"/>`;

const bed = (x: number, y: number, w: number) =>
  `<rect x="${x}" y="${y}" width="${w}" height="46" rx="20" fill="#fff"/><rect x="${x}" y="${y + 46}" width="12" height="110" fill="#B99352"/><rect x="${x + w - 12}" y="${y + 46}" width="12" height="110" fill="#B99352"/><rect x="${x - 8}" y="${y - 90}" width="14" height="136" rx="6" fill="#B99352"/>`;

const rays = (x: number, y: number, c: string) =>
  Array.from({ length: 14 }, (_, i) => { const a = (i * Math.PI) / 7; return `<path d="M${x} ${y}L${x + Math.cos(a) * 1200} ${y + Math.sin(a) * 1200}" stroke="${c}" stroke-opacity=".12" stroke-width="26"/>`; }).join("");

const crossSign = (x: number, y: number) =>
  `<rect x="${x - 14}" y="${y - 42}" width="28" height="84" rx="6" fill="#EF927F"/><rect x="${x - 42}" y="${y - 14}" width="84" height="28" rx="6" fill="#EF927F"/>`;

const PEACH = ["#FFF1E9", "#F8D2BE", "#F8C9B8", "#F5D0D9", "#F8E4A6", "#D9C9F0"];
const LAV = ["#F3EDFA", "#DDD0F0", "#D9C9F0", "#C8E2F3", "#F5D0D9", "#F8E4A6"];
const BLUE = ["#EDF6FC", "#D0E8F5", "#C8E2F3", "#D9C9F0", "#F8E4A6", "#C6E5D5"];
const GOLD = ["#FBF2DF", "#F2DFAD", "#F8E4A6", "#F8C9B8", "#F5D0D9", "#D9C9F0"];
const PINK = ["#FFF0F3", "#F5D1DC", "#F5D0D9", "#F8C9B8", "#D9C9F0", "#F8E4A6"];
const NIGHT = ["#252C4B", "#514568", "#303A60", "#9B7BC5", "#514568", "#303A60"];

const pal = (p: string[], seed: number, body: string) => frame(seed, p[0], p[1], p.slice(2), body);

const more = {
  pregnant: () => pal(PEACH, 101, halo(600, 420, 380, "#F8E4A6") + ground("#F6B2A0") + woman(600, 800, 1.45, "#E99A83") + heart(880, 330, 1.2, "#E99CB7") + flower(240, 700, 40, "#F5D0D9") + moon(260, 200, 60, "#D6B779") + sparkles()),
  couple: () => pal(PEACH, 102, `<circle cx="600" cy="560" r="190" fill="#F8E4A6"/>` + halo(600, 560, 420, "#F8C9B8") + ground("#D9C9F0") + woman(480, 800, 1.1, "#9B7BC5", "#F5D0D9", false) + man(720, 800, 1.15, "#514568") + `<path d="M560 650Q600 690 640 650" stroke="#fff" stroke-width="8" fill="none"/>` + sparkles()),
  strength: () => pal(LAV, 103, rays(600, 380, "#D6B779") + halo(600, 380, 340, "#F8E4A6") + ground("#DDD0F0") + woman(600, 800, 1.4, "#A58ACB", "#F2DFAD") + moon(960, 190, 66, "#E5C987") + sparkles()),
  journey: () => pal(BLUE, 104, windowFrame(130, 150, 520, 560, "#9BCBE8") + `<path d="M230 330L330 300L300 330L350 345Z" fill="#fff"/>` + ground("#C8E2F3") + woman(860, 800, 1.3, "#80B6D7", "#F8E4A6") + sparkles("#fff")),
  taraweeh: () => pal(NIGHT, 105, moon(880, 200, 90, "#E5C987") + star(300, 180, 22) + star(520, 120, 16) + star(700, 260, 14) + `<path d="M380 800V600Q380 520 450 470Q520 520 520 600V800Z" fill="#F2DFAD" opacity=".0"/><path d="M360 820V610Q360 500 600 440Q840 500 840 610V820Z" fill="#9B7BC5" opacity=".85"/><path d="M440 820V620Q440 550 600 510Q760 550 760 620V820Z" fill="#F2DFAD" opacity=".55"/>` + woman(600, 780, 0.9, "#F3EDFA", "#F3EDFA") + ground("#303A60")),
  mosque: () => pal(NIGHT, 106, moon(900, 190, 84, "#E5C987") + sparkles("#F8E4A6") + halo(600, 560, 340, "#9B7BC5") + mosque(600, 780, 1.6, "#161a33") + ground("#161a33")),
  window: () => pal(BLUE, 107, windowFrame(300, 100, 600, 620, "#F8E4A6") + halo(600, 420, 360, "#fff") + ground("#F5D0D9") + woman(600, 810, 1.4, "#D98DA7", "#D9C9F0") + flower(1000, 700, 40, "#E99CB7") + sparkles()),
  family: () => pal(PEACH, 108, halo(600, 430, 420, "#F8E4A6") + ground("#F6B2A0") + woman(300, 820, 1.0, "#9B7BC5", "#D9C9F0", false) + woman(600, 820, 1.25, "#E99A83") + man(880, 820, 1.1, "#514568") + woman(1060, 830, 0.8, "#80B6D7", "#C8E2F3", false) + heart(600, 160, 2, "#E99CB7") + sparkles()),
  hospital: () => pal(GOLD, 109, windowFrame(120, 120, 380, 460, "#F8E4A6") + crossSign(920, 250) + ground("#F2DFAD") + bed(520, 640, 460) + woman(300, 800, 1.2, "#C6A35F", "#F5D0D9") + sparkles()),
  waiting: () => pal(GOLD, 110, clock(900, 270, 130, "#B99352") + windowFrame(160, 130, 400, 480, "#EDF6FC") + halo(360, 380, 260, "#fff") + ground("#F2DFAD") + woman(560, 810, 1.35, "#C6A35F", "#F5D0D9") + sparkles()),
  labour: () => pal(GOLD, 111, clock(600, 270, 190, "#B99352") + ground("#F2DFAD") + woman(480, 820, 1.2, "#C6A35F", "#F5D0D9") + man(740, 820, 1.2, "#514568") + `<path d="M560 700Q610 730 660 700" stroke="#fff" stroke-width="10" fill="none"/>` + sparkles()),
  operating: () => pal(NIGHT, 112, `<rect x="450" y="130" width="300" height="560" rx="10" fill="#F8E4A6" opacity=".85"/><rect x="480" y="160" width="240" height="500" fill="#fff" opacity=".55"/>` + halo(600, 420, 420, "#F8E4A6") + `<path d="M0 900L450 690H750L1200 900Z" fill="#303A60"/>` + man(600, 840, 0.75, "#161a33") + sparkles("#F8E4A6")),
  motherBaby: () => pal(GOLD, 113, halo(600, 420, 380, "#F8E4A6") + moon(930, 190, 64, "#D6B779") + ground("#F2DFAD") + woman(600, 810, 1.45, "#C6A35F", "#F5D0D9", false) + baby(640, 560, 1.4) + heart(300, 300, 1.3, "#E99CB7") + sparkles()),
  newborn: () => pal(PINK, 114, halo(600, 450, 420, "#fff") + `<ellipse cx="600" cy="600" rx="420" ry="150" fill="#FFF9F2" opacity=".85"/>` + baby(600, 540, 3.3) + star(300, 200, 30) + star(900, 240, 24, "#F5D0D9") + moon(930, 150, 58, "#E5C987") + sparkles()),
  feeding: () => pal(PINK, 115, halo(600, 440, 380, "#F8C9B8") + ground("#F5D1DC") + woman(560, 810, 1.45, "#D98DA7", "#D9C9F0", false) + baby(600, 590, 1.35) + heart(900, 280, 1.5, "#E99CB7") + heart(250, 420, 0.8, "#F5D0D9") + sparkles()),
  father: () => pal(BLUE, 116, halo(600, 440, 380, "#fff") + ground("#C8E2F3") + man(600, 820, 1.45, "#514568") + baby(600, 590, 1.35) + heart(900, 280, 1.1, "#E99CB7") + star(260, 260, 26) + sparkles()),
  recovery: () => pal(LAV, 117, ground("#DDD0F0") + [260, 390, 520].map((x, i) => `<ellipse cx="${x}" cy="${790 + i * 6}" rx="34" ry="14" fill="#A58ACB" opacity="${0.3 + i * 0.2}"/>`).join("") + woman(680, 810, 1.3, "#A58ACB", "#F5D0D9", false) + man(900, 810, 1.25, "#514568") + heart(600, 200, 1.6, "#E99CB7") + sparkles()),
  hospitalFamily: () => pal(PEACH, 118, bed(380, 640, 440) + woman(600, 650, 0.8, "#E99A83", "#F5D0D9", false) + baby(690, 600, 0.8) + ground("#F6B2A0") + woman(160, 830, 1.0, "#9B7BC5", "#D9C9F0", false) + woman(290, 830, 0.95, "#80B6D7", "#C8E2F3", false) + man(980, 830, 1.1, "#514568") + heart(600, 200, 1.6, "#E99CB7") + sparkles()),
  three: () => pal(PEACH, 119, `<circle cx="600" cy="520" r="200" fill="#F8E4A6"/>` + halo(600, 520, 460, "#F8C9B8") + ground("#9B7BC5") + woman(470, 810, 1.15, "#E99A83", "#F5D0D9", false) + man(740, 810, 1.2, "#514568") + baby(605, 640, 0.9) + heart(600, 170, 1.7, "#E99CB7") + star(220, 240, 26) + star(980, 300, 22) + sparkles())
};

export function generatedArt(scene: Scene): string {
  const make = scene in scenes ? scenes[scene as BaseScene] : more[scene as keyof typeof more];
  return make();
}
