
import { useCallback, useEffect, useState } from "react";

export interface LightboxImage {
  src: string;
  alt: string;
  caption?: string;
}

interface UseLightboxReturn {
  isOpen: boolean;
  activeImage: LightboxImage | null;
  openLightbox: (image: LightboxImage) => void;
  closeLightbox: () => void;
}

export function useLightbox(): UseLightboxReturn {
  const [activeImage, setActiveImage] =
    useState<LightboxImage | null>(null);

  const isOpen = activeImage !== null;

  const openLightbox = useCallback((image: LightboxImage) => {
    setActiveImage(image);
  }, []);

  const closeLightbox = useCallback(() => {
    setActiveImage(null);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeLightbox]);

  return {
    isOpen,
    activeImage,
    openLightbox,
    closeLightbox
  };
}
