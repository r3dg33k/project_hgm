
import { useLightbox } from "../../hooks/useLightbox";
import type { GalleryImage } from "../../types/story.types";

import MemoryCard from "./MemoryCard";
import Lightbox from "./Lightbox";
import SectionHeading from "./SectionHeading";

interface MemoryGalleryProps {
  images: readonly GalleryImage[];
  title?: string;
  subtitle?: string;
  eyebrow?: string;
}

export default function MemoryGallery({
  images,
  title = "Little Moments, Forever Memories",
  subtitle = "Every photograph holds a piece of our beautiful journey.",
  eyebrow = "A COLLECTION OF MEMORIES"
}: MemoryGalleryProps) {
  const {
    activeImage,
    openLightbox,
    closeLightbox
  } = useLightbox();

  return (
    <section className="memory-gallery-section">
      <div className="memory-gallery-container">

        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
        />

        <div className="memory-gallery-grid">
          {images.map((item, index) => (
            <MemoryCard
              key={item.id}
              image={item.image}
              caption={item.caption}
              alt={item.caption}
              index={index}
              onClick={() =>
                openLightbox({
                  src: item.image,
                  alt: item.caption,
                  caption: item.caption
                })
              }
            />
          ))}
        </div>

      </div>

      <Lightbox
        image={activeImage}
        onClose={closeLightbox}
      />
    </section>
  );
}
