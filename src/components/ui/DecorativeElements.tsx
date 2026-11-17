
import type { CSSProperties } from "react";

interface DecorationProps {
  className?: string;
  color?: string;
  size?: number;
}

export function CrescentMoon({
  className = "",
  color = "#D6B779",
  size = 48
}: DecorationProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M67 9C36 18 21 49 34 75C47 101 81 99 94 79C73 87 51 73 45 53C39 34 49 16 67 9Z"
        fill={color}
      />
    </svg>
  );
}

export function DecorativeStar({
  className = "",
  color = "#D6B779",
  size = 24
}: DecorationProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M50 4L61 39L96 50L61 61L50 96L39 61L4 50L39 39L50 4Z"
        fill={color}
      />
    </svg>
  );
}

export function Flower({
  className = "",
  color = "#E99CB7",
  size = 40
}: DecorationProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      <g fill={color}>
        <ellipse cx="50" cy="24" rx="13" ry="23" />
        <ellipse cx="50" cy="76" rx="13" ry="23" />
        <ellipse
          cx="24"
          cy="50"
          rx="23"
          ry="13"
        />
        <ellipse
          cx="76"
          cy="50"
          rx="23"
          ry="13"
        />
        <ellipse
          cx="32"
          cy="32"
          rx="13"
          ry="23"
          transform="rotate(-45 32 32)"
        />
        <ellipse
          cx="68"
          cy="32"
          rx="13"
          ry="23"
          transform="rotate(45 68 32)"
        />
        <ellipse
          cx="32"
          cy="68"
          rx="13"
          ry="23"
          transform="rotate(45 32 68)"
        />
        <ellipse
          cx="68"
          cy="68"
          rx="13"
          ry="23"
          transform="rotate(-45 68 68)"
        />
      </g>

      <circle cx="50" cy="50" r="12" fill="#F8E4A6" />
    </svg>
  );
}

export function Sparkle({
  className = "",
  color = "#D6B779",
  size = 28
}: DecorationProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M50 5C54 35 65 46 95 50C65 54 54 65 50 95C46 65 35 54 5 50C35 46 46 35 50 5Z"
        fill={color}
      />
    </svg>
  );
}

interface FloatingDecorationsProps {
  variant?: "romantic" | "spiritual" | "dreamy";
  className?: string;
}

export function FloatingDecorations({
  variant = "romantic",
  className = ""
}: FloatingDecorationsProps) {
  const decorations = {
    romantic: [
      { type: "flower", x: "8%", y: "15%", size: 38, color: "#E99CB7" },
      { type: "sparkle", x: "85%", y: "20%", size: 22, color: "#D6B779" },
      { type: "star", x: "75%", y: "78%", size: 18, color: "#F8C9B8" },
      { type: "flower", x: "12%", y: "82%", size: 26, color: "#D9C9F0" }
    ],
    spiritual: [
      { type: "moon", x: "10%", y: "15%", size: 52, color: "#D6B779" },
      { type: "star", x: "82%", y: "18%", size: 22, color: "#F8E4A6" },
      { type: "sparkle", x: "75%", y: "75%", size: 24, color: "#D6B779" },
      { type: "star", x: "18%", y: "80%", size: 16, color: "#F8E4A6" }
    ],
    dreamy: [
      { type: "star", x: "12%", y: "18%", size: 22, color: "#9BCBE8" },
      { type: "flower", x: "82%", y: "20%", size: 35, color: "#E99CB7" },
      { type: "sparkle", x: "80%", y: "80%", size: 25, color: "#D6B779" },
      { type: "flower", x: "10%", y: "78%", size: 30, color: "#D9C9F0" }
    ]
  };

  const selected = decorations[variant];

  return (
    <div
      className={`floating-decorations ${className}`}
      aria-hidden="true"
    >
      {selected.map((item, index) => {
        const style: CSSProperties = {
          left: item.x,
          top: item.y,
          animationDelay: `${index * 0.7}s`
        };

        const props = {
          size: item.size,
          color: item.color,
          className: "floating-decoration"
        };

        return (
          <span
            key={`${variant}-${index}`}
            className="decoration-position"
            style={style}
          >
            {item.type === "moon" && <CrescentMoon {...props} />}
            {item.type === "star" && <DecorativeStar {...props} />}
            {item.type === "flower" && <Flower {...props} />}
            {item.type === "sparkle" && <Sparkle {...props} />}
          </span>
        );
      })}
    </div>
  );
}
