
import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  accent?: ReactNode;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  accent,
  className = ""
}: SectionHeadingProps) {
  return (
    <div
      className={`section-heading text-${align} ${className}`}
    >
      {eyebrow && (
        <Reveal direction="fade">
          <span className="section-eyebrow">
            {eyebrow}
          </span>
        </Reveal>
      )}

      <Reveal direction="up" delay={100}>
        <div className="heading-decoration" aria-hidden="true">
          <span />
          <span className="decoration-flower">✿</span>
          <span />
        </div>

        <h2 className="section-title">
          {title}
          {accent && (
            <span className="section-title-accent">
              {" "}{accent}
            </span>
          )}
        </h2>
      </Reveal>

      {subtitle && (
        <Reveal direction="up" delay={200}>
          <p className="section-subtitle">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
