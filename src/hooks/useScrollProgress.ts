
import { useEffect, useState } from "react";

interface ScrollProgress {
  progress: number;
  scrollY: number;
}

export function useScrollProgress(): ScrollProgress {
  const [state, setState] = useState<ScrollProgress>({
    progress: 0,
    scrollY: 0
  });

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const scrollY = window.scrollY;

      const scrollableHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        scrollableHeight > 0
          ? Math.min(
              100,
              Math.max(0, (scrollY / scrollableHeight) * 100)
            )
          : 0;

      setState({
        progress,
        scrollY
      });

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    updateProgress();

    window.addEventListener("scroll", handleScroll, {
      passive: true
    });

    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return state;
}
