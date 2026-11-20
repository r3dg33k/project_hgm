import { useEffect, useRef } from "react";

/**
 * Writes scroll progress through a tall "track" element into CSS variables,
 * with no React re-renders:
 *   --p     0 → 1 while the element's sticky stage is pinned
 *   --dist  horizontal overflow (px) of a [data-track] child, if present
 * All motion is then driven from CSS via calc(var(--p) * …).
 */
export function useScrollVar<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const track = el.querySelector<HTMLElement>("[data-track]");
    let raf = 0;

    const measure = () => {
      if (track) {
        const dist = Math.max(0, track.scrollWidth - window.innerWidth);
        el.style.setProperty("--dist", `${dist}px`);
      }
    };

    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      el.style.setProperty("--p", p.toFixed(4));
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("load", onResize);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", onResize);
    };
  }, []);

  return ref;
}
