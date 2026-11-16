
import { useScrollProgress } from "../../hooks/useScrollProgress";

interface StoryProgressProps {
  showPercentage?: boolean;
}

export default function StoryProgress({
  showPercentage = false
}: StoryProgressProps) {
  const { progress } = useScrollProgress();

  return (
    <>
      <div
        className="story-progress-track"
        role="progressbar"
        aria-label="Story reading progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress)}
      >
        <div
          className="story-progress-fill"
          style={{
            width: `${progress}%`
          }}
        />

        <span
          className="story-progress-star"
          style={{
            left: `${progress}%`
          }}
          aria-hidden="true"
        >
          ✦
        </span>
      </div>

      {showPercentage && (
        <span className="story-progress-label">
          {Math.round(progress)}% of our story
        </span>
      )}
    </>
  );
}
