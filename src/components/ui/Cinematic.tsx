import {
  Fragment,
  useEffect,
  useRef,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent
} from "react";

import { story } from "../../data/story";
import { siteConfig } from "../../data/site.config";
import { useScrollVar } from "../../hooks/useScrollVar";

import "../../styles/cinematic.css";

const v = (vars: Record<string, string | number>) =>
  vars as unknown as CSSProperties;

/* ---------- letter-by-letter text, wrapped per word so it never overflows ---------- */

function Chars({ text, start = 0 }: { text: string; start?: number }) {
  let n = start;

  return (
    <>
      {text.split(" ").map((word, w) => (
        <Fragment key={w}>
          <span className="cx-word" aria-hidden="true">
            {word.split("").map((c) => (
              <span className="cx-ch" key={n} style={v({ "--i": n++ })}>
                {c}
              </span>
            ))}
          </span>{" "}
        </Fragment>
      ))}
    </>
  );
}

/* ---------- 1. CINEMATIC HERO: pinned, zooms into the story as you scroll ---------- */

export function Hero() {
  const ref = useScrollVar<HTMLElement>();
  const h = story.hero;

  const onMove = (e: ReactPointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty(
      "--mx",
      ((e.clientX - r.left) / r.width - 0.5).toFixed(3)
    );
    e.currentTarget.style.setProperty(
      "--my",
      ((e.clientY - r.top) / r.height - 0.5).toFixed(3)
    );
  };

  return (
    <section ref={ref} className="cx-hero" onPointerMove={onMove}>
      <div className="cx-hero-stage">
        <img className="cx-hero-img" src={h.image} alt="" fetchPriority="high" />
        <div className="cx-hero-veil" />
        <span className="cx-orb cx-orb-a" />
        <span className="cx-orb cx-orb-b" />
        <span className="cx-orb cx-orb-c" />

        <div className="cx-hero-copy">
          <p className="cx-eyebrow">{h.eyebrow}</p>

          <h1 aria-label={`${h.title} ${h.accent}`}>
            <span className="cx-line">
              <Chars text={h.title} />
            </span>
            <span className="cx-line cx-accent">
              <Chars text={h.accent} start={h.title.length} />
            </span>
          </h1>

          <p className="cx-hand">{h.handwrittenMessage}</p>

          <button
            type="button"
            className="cx-cta"
            onClick={() =>
              document
                .getElementById("beginning")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {h.buttonText} <span aria-hidden="true">↓</span>
          </button>
        </div>

        <div className="cx-cue" aria-hidden="true">
          <i />
          scroll
        </div>
      </div>
    </section>
  );
}

/* ---------- 2. SCRUBBED TEXT: words light up as you scroll ---------- */

export function ScrubText() {
  const ref = useScrollVar<HTMLElement>();
  const { eyebrow, title, description } = story.introduction;
  const words = description.split(" ");

  return (
    <section ref={ref} className="cx-scrub">
      <div className="cx-scrub-stage">
        <p className="cx-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="cx-scrub-text" style={v({ "--n": words.length })}>
          {words.map((w, i) => (
            <span key={i} style={v({ "--i": i })}>
              {w}{" "}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

/* ---------- 3. HORIZONTAL JOURNEY: vertical scroll drives a sideways ride ---------- */

const eventImages: Record<string, string> = {
  hajj: "/images/chapter-hajj.webp",
  discovery: "/images/chapter-dreams.webp",
  india: "/images/chapter-faith.webp",
  ramadan: "/images/chapter-ramadan.webp",
  preparations: "/images/ultrasound-02.webp",
  admission: "/images/chapter-hospital.webp",
  "c-section": "/images/chapter-birth.webp",
  birth: "/images/newborn-01.webp",
  feeding: "/images/chapter-motherhood.webp",
  family: "/images/family.webp"
};

export function Journey() {
  const ref = useScrollVar<HTMLElement>();

  return (
    <section ref={ref} className="cx-journey" id="journey">
      <div className="cx-journey-stage">
        <div className="cx-journey-track" data-track>
          <div className="cx-journey-intro">
            <p className="cx-eyebrow">THE JOURNEY WE WILL NEVER FORGET</p>
            <h2>
              Every Step
              <br />
              Brought Us Here.
            </h2>
            <p className="cx-hand">keep scrolling →</p>
          </div>

          {story.timeline.map((e, i) => (
            <article className="cx-card" key={e.id} style={v({ "--i": i })}>
              {eventImages[e.id] && (
                <img src={eventImages[e.id]} alt="" loading="lazy" />
              )}
              <span className="cx-card-n">{String(i + 1).padStart(2, "0")}</span>
              <div className="cx-card-body">
                {!e.date.startsWith("ADD") && <small>{e.date}</small>}
                <h3>{e.title}</h3>
                <p>{e.description}</p>
              </div>
            </article>
          ))}

          <div className="cx-journey-end">
            <span aria-hidden="true">♡</span>
            <p>And every difficult step was worth it.</p>
          </div>
        </div>

        <div className="cx-journey-bar" aria-hidden="true">
          <i />
        </div>
      </div>
    </section>
  );
}

/* ---------- 3b. CHAPTER STACK (Nordicus-style): cards pile over each other ---------- */

const chapterImages: Record<string, string> = {
  beginning: "/images/chapter-hajj.webp",
  "faith-and-strength": "/images/chapter-faith.webp",
  anticipation: "/images/chapter-dreams.webp",
  birth: "/images/chapter-birth.webp",
  motherhood: "/images/chapter-motherhood.webp"
};

export function ChapterStack() {
  return (
    <section className="cx-stack" aria-label="The five chapters">
      <div className="cx-stack-head">
        <p className="cx-eyebrow">FIVE CHAPTERS</p>
        <h2>Making a family more like our dreams.</h2>
        <p className="cx-hand">begin scrolling ↓</p>
      </div>

      {story.chapters.map((c, i) => {
        const t = siteConfig.chapterThemes[c.theme];

        return (
          <article
            key={c.id}
            className="cx-stack-card"
            style={v({
              "--i": i,
              "--bg": t.background,
              "--ac": t.accent,
              "--tx": t.text
            })}
          >
            <div className="cx-stack-copy">
              <span className="cx-stack-n">{c.number}</span>
              <small>{c.label}</small>
              <h3>{c.title}</h3>
              <p>{c.subtitle}</p>
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById(c.id)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Read this chapter <span aria-hidden="true">→</span>
              </button>
            </div>

            <div className="cx-stack-art">
              {chapterImages[c.id] && (
                <img src={chapterImages[c.id]} alt="" loading="lazy" />
              )}
            </div>
          </article>
        );
      })}
    </section>
  );
}

/* ---------- 3c. MARQUEE FINALE ---------- */

export function Marquee() {
  const text = story.closing.family;

  return (
    <div className="cx-marquee" aria-label={story.closing.title}>
      <div aria-hidden="true">
        {[0, 1, 2, 3].map((n) => (
          <span key={n}>{text} ♡ </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- 4. CURSOR GLOW: soft heart-light that follows the pointer ---------- */

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia("(pointer: fine)").matches) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let raf = 0;

    const loop = () => {
      x += (tx - x) * 0.14;
      y += (ty - y) * 0.14;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    const move = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      el.classList.add("on");
      el.classList.toggle(
        "grow",
        !!(e.target as HTMLElement).closest("button, a, article")
      );
    };

    const leave = () => el.classList.remove("on");

    loop();
    window.addEventListener("pointermove", move);
    document.addEventListener("pointerleave", leave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
    };
  }, []);

  return <div ref={ref} className="cx-cursor" aria-hidden="true" />;
}
