
import { useEffect, useRef } from "react";
import type { LightboxImage } from "../../hooks/useLightbox";

interface LightboxProps {
  image: LightboxImage | null;
  onClose: () => void;
}

export default function Lightbox({
  image,
  onClose
}: LightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!image) return;

    previousFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    closeButtonRef.current?.focus();

    return () => {
      previousFocusRef.current?.focus();
    };
  }, [image]);

  if (!image) return null;

  return (
    <div
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Photograph viewer"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <button
        ref={closeButtonRef}
        type="button"
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close photograph"
      >
        ×
      </button>

      <div className="lightbox-content">
        <img
          src={image.src}
          alt={image.alt}
          className="lightbox-image"
        />

        {image.caption && (
          <p className="lightbox-caption">
            {image.caption}
          </p>
        )}
      </div>
    </div>
  );
}
