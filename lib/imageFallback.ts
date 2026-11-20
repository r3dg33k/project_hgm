/**
 * Image safety net.
 * The chapters reference many illustration paths that don't exist in /public/images.
 * When an <img> fails to load, swap in the closest real file if we have one,
 * otherwise hide it so no broken-image icons appear.
 *
 * When you add the real files, just drop them at the original paths —
 * this only runs for images that fail to load.
 */

import { generatedArt, type Scene } from "./generatedArt";

const IMG = "/images/";

// Images with no real file and no good stand-in: we paint one.
const generated: Record<string, Scene> = {
  [`${IMG}illustrations/baby-nursery.webp`]: "nursery",
  [`${IMG}illustrations/tiny-baby-clothes.webp`]: "clothes",
  [`${IMG}memories/tiny-clothes.webp`]: "clothes",
  [`${IMG}memories/hajj.webp`]: "hajj",
  [`${IMG}memories/discovery.webp`]: "discovery",
  [`${IMG}memories/early-pregnancy.webp`]: "early",
  [`${IMG}memories/ultrasound-03.webp`]: "scan"
};

const fallbacks: Record<string, string> = {
  // Chapter 1
  [`${IMG}illustrations/chapter-01-pregnancy.webp`]: `${IMG}chapter-hajj.webp`,
  [`${IMG}illustrations/couple-first-dreams.webp`]: `${IMG}chapter-dreams.webp`,

  // Chapter 2
  [`${IMG}illustrations/chapter-02-strength.webp`]: `${IMG}chapter-faith.webp`,
  [`${IMG}illustrations/india-journey.webp`]: `${IMG}chapter-faith.webp`,
  [`${IMG}illustrations/pregnant-taraweeh.webp`]: `${IMG}chapter-ramadan.webp`,
  [`${IMG}illustrations/ramadan-mosque.webp`]: `${IMG}chapter-ramadan.webp`,

  // Chapter 3
  [`${IMG}illustrations/chapter-03-dreams.webp`]: `${IMG}chapter-dreams.webp`,
  [`${IMG}illustrations/family-waiting.webp`]: `${IMG}family.webp`,
  [`${IMG}memories/ultrasound-01.webp`]: `${IMG}ultrasound-01.webp`,
  [`${IMG}memories/ultrasound-02.webp`]: `${IMG}ultrasound-02.webp`,

  // Chapter 4
  [`${IMG}illustrations/chapter-04-hospital.webp`]: `${IMG}chapter-hospital.webp`,
  [`${IMG}illustrations/final-pregnancy-waiting.webp`]: `${IMG}chapter-hospital.webp`,
  [`${IMG}illustrations/labour-strength.webp`]: `${IMG}chapter-hospital.webp`,
  [`${IMG}illustrations/operating-room-waiting.webp`]: `${IMG}chapter-birth.webp`,
  [`${IMG}illustrations/mother-newborn.webp`]: `${IMG}chapter-birth.webp`,
  [`${IMG}illustrations/newborn-first-glimpse.webp`]: `${IMG}newborn-01.webp`,

  // Chapter 5
  [`${IMG}illustrations/chapter-05-motherhood.webp`]: `${IMG}chapter-motherhood.webp`,
  [`${IMG}illustrations/first-feeding.webp`]: `${IMG}chapter-motherhood.webp`,
  [`${IMG}illustrations/first-parenting.webp`]: `${IMG}newborn-01.webp`,
  [`${IMG}illustrations/mother-recovery.webp`]: `${IMG}chapter-hospital.webp`,
  [`${IMG}illustrations/family-hospital.webp`]: `${IMG}family.webp`,
  [`${IMG}illustrations/father-newborn.webp`]: `${IMG}newborn-01.webp`,
  [`${IMG}illustrations/family-of-three.webp`]: `${IMG}family.webp`,

  // Photo galleries
  [`${IMG}memories/family.webp`]: `${IMG}family.webp`
};

function handle(img: HTMLImageElement) {
  const path = new URL(img.currentSrc || img.src, window.location.href).pathname;
  const next = fallbacks[path];
  const scene = generated[path];

  if (img.dataset.fallback) {
    img.classList.add("img-missing");
    return;
  }

  if (scene) {
    img.dataset.fallback = "1";
    img.src = generatedArt(scene);
    return;
  }

  if (next) {
    img.dataset.fallback = "1";
    img.src = next;
    return;
  }

  img.classList.add("img-missing");
}

// <img> error events don't bubble, so listen in the capture phase.
document.addEventListener(
  "error",
  (e) => {
    if (e.target instanceof HTMLImageElement) handle(e.target);
  },
  true
);
