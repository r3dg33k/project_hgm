
import { useState } from "react";
import type { TimelineEvent } from "../../types/story.types";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

interface StoryTimelineProps {
  events: readonly TimelineEvent[];
}

const milestoneIcons: Record<string, string> = {
  hajj: "☾",
  discovery: "✿",
  india: "✈",
  ramadan: "☪",
  preparations: "♡",
  "false-labour": "✧",
  admission: "✚",
  labour: "◷",
  "c-section": "✦",
  birth: "♥",
  feeding: "❀",
  recovery: "🌸",
  family: "∞"
};

export default function StoryTimeline({
  events
}: StoryTimelineProps) {
  const [activeEvent, setActiveEvent] = useState<string | null>(
    events[0]?.id ?? null
  );

  return (
    <section
      className="story-timeline-section"
      id="story-timeline"
    >
      <div className="story-timeline-container">

        <SectionHeading
          eyebrow="THE JOURNEY WE WILL NEVER FORGET"
          title="Every Step Brought Us Here."
          subtitle="Thirteen beautiful milestones. One extraordinary journey. Three hearts forever connected."
        />

        <div className="story-timeline">

          <div
            className="story-timeline-line"
            aria-hidden="true"
          />

          {events.map((event, index) => {
            const isActive = activeEvent === event.id;

            return (
              <Reveal
                key={event.id}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index % 2 === 0 ? 0 : 100}
              >
                <button
                  type="button"
                  className={[
                    "timeline-event",
                    isActive ? "timeline-event-active" : ""
                  ].join(" ")}
                  onClick={() => setActiveEvent(event.id)}
                  aria-expanded={isActive}
                >
                  <span className="timeline-marker">
                    {milestoneIcons[event.id] ?? "✧"}
                  </span>

                  <span className="timeline-event-content">

                    <span className="timeline-event-date">
                      {event.date}
                    </span>

                    <span className="timeline-event-title">
                      {event.title}
                    </span>

                    {isActive && (
                      <span className="timeline-event-description">
                        {event.description}
                      </span>
                    )}

                  </span>

                  <span
                    className="timeline-event-indicator"
                    aria-hidden="true"
                  >
                    {isActive ? "−" : "+"}
                  </span>
                </button>
              </Reveal>
            );
          })}

        </div>

        <div className="timeline-closing">
          <span aria-hidden="true">✦</span>
          <p>And every difficult step was worth it.</p>
          <span aria-hidden="true">♡</span>
        </div>

      </div>
    </section>
  );
}
