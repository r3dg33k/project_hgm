
import Reveal from "./Reveal";

interface HandwrittenNoteProps {
  message: string;
  signature?: string;
  eyebrow?: string;
  variant?: "peach" | "lavender" | "pink" | "gold";
}

export default function HandwrittenNote({
  message,
  signature = "With all my love, always.",
  eyebrow = "A NOTE FROM MY HEART",
  variant = "peach"
}: HandwrittenNoteProps) {
  return (
    <Reveal direction="up">
      <article
        className={`handwritten-note handwritten-note-${variant}`}
      >
        <div
          className="handwritten-note-decoration"
          aria-hidden="true"
        >
          ✿
        </div>

        <span className="handwritten-note-eyebrow">
          {eyebrow}
        </span>

        <p className="handwritten-note-message">
          {message}
        </p>

        <div className="handwritten-note-bottom">
          <span className="handwritten-note-signature">
            {signature}
          </span>

          <span
            className="handwritten-note-heart"
            aria-hidden="true"
          >
            ♡
          </span>
        </div>
      </article>
    </Reveal>
  );
}
