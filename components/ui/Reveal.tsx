
import type { ReactNode, CSSProperties } from "react";
import { useReveal } from "../../hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  once?: boolean;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true
}: RevealProps) {
  const { ref, isVisible } = useReveal({
    threshold: 0.12,
    once
  });

  const style: CSSProperties = {
    transitionDelay: `${delay}ms`
  };

  return (
    <div
      ref={ref}
      style={style}
      className={[
        "reveal",
        `reveal-${direction}`,
        isVisible ? "visible" : "",
        className
      ].filter(Boolean).join(" ")}
    >
      {children}
    </div>
  );
}
