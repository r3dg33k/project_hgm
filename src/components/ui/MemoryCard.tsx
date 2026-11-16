
import Reveal from "./Reveal";

interface MemoryCardProps {
  image: string;
  caption: string;
  alt?: string;
  index?: number;
  onClick?: () => void;
}

export default function MemoryCard({
  image,
  caption,
  alt = caption,
  index = 0,
  onClick
}: MemoryCardProps) {
  return (
    <Reveal
      direction="up"
      delay={index * 120}
      className="memory-card-reveal"
    >
      <button
        type="button"
        className="memory-card"
        onClick={onClick}
        aria-label={`View photograph: ${caption}`}
      >
        <div className="memory-card-image-wrap">
          <img
            src={image}
            alt={alt}
            className="memory-card-image"
            loading="lazy"
          />

          <span
            className="memory-card-overlay"
            aria-hidden="true"
          >
            <span className="memory-card-zoom">↗</span>
          </span>
        </div>

        <div className="memory-card-caption">
          <span className="memory-card-caption-mark">
            ✿
          </span>

          <span>{caption}</span>
        </div>
      </button>
    </Reveal>
  );
}
