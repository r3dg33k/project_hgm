
import { useState } from "react";

import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import HandwrittenNote from "../ui/HandwrittenNote";
import MemoryGallery from "../ui/MemoryGallery";

import {
  CrescentMoon,
  DecorativeStar,
  FloatingDecorations
} from "../ui/DecorativeElements";

import { story } from "../../data/story";

export default function Chapter04() {
  const [announcementRevealed, setAnnouncementRevealed] =
    useState(false);

  return (
    <section
      id="birth"
      className="chapter chapter-four"
    >
      <FloatingDecorations variant="golden" />

      {/* Cinematic opening */}
      <div className="chapter-four-hero">

        <Reveal direction="fade">
          <span className="chapter-label">
            CHAPTER 04 · THE MIRACLE
          </span>
        </Reveal>

        <Reveal direction="up">
          <CrescentMoon size={65} color="#D6B779" />

          <h2 className="chapter-four-title">
            Thirty Minutes
            <br />
            <span>Between Pain and Miracle.</span>
          </h2>

          <p>
            After everything you endured,
            everything you hoped for,
            and every moment you held on,
            the day finally arrived.
          </p>
        </Reveal>

        <Reveal direction="up" delay={200}>
          <img
            src="/images/illustrations/chapter-04-hospital.webp"
            alt="Faceless watercolor illustration of a pregnant woman in a hospital room with warm golden light"
            className="chapter-four-hero-image"
            fetchPriority="high"
          />
        </Reveal>

      </div>

      {/* The waiting */}
      <div className="chapter-final-days">

        <SectionHeading
          eyebrow="THE FINAL DAYS"
          title="We Were So Close to Meeting Her."
          subtitle="Every passing day brought us closer to the moment we had imagined for months."
        />

        <div className="chapter-story-text">
          <Reveal direction="up">
            <p>
              The final days of pregnancy carried
              their own mixture of excitement,
              uncertainty and anticipation.
            </p>

            <p>
              Pains would arrive and disappear.
              Sometimes we thought the moment
              had finally come, only to discover
              that it was false labour.
            </p>

            <p>
              We kept waiting, wondering and hoping.
              We knew our daughter was getting closer.
            </p>

            <p>
              Then came the moment when hospital
              admission became necessary.
            </p>
          </Reveal>
        </div>

        <Reveal direction="up">
          <img
            src="/images/illustrations/final-pregnancy-waiting.webp"
            alt="Faceless illustration of an expecting mother holding her belly beside a hospital window"
            className="chapter-four-secondary-image"
            loading="lazy"
          />
        </Reveal>

      </div>

      {/* Ten hours of labour */}
      <div className="chapter-labour">

        <SectionHeading
          eyebrow="TEN HOURS OF COURAGE"
          title="You Held On Through Every Hour."
          subtitle="The waiting became real. The contractions became stronger. And your courage became something I will never forget."
        />

        <div className="labour-clock">
          <div className="labour-clock-face">
            <span className="clock-decoration">✧</span>
            <strong>10</strong>
            <span>HOURS</span>
            <span className="clock-decoration">✧</span>
          </div>
        </div>

        <div className="chapter-story-text">
          <Reveal direction="up">
            <p>
              You were admitted to the hospital.
              The hours began passing, and labour
              became a reality.
            </p>

            <p>
              There were induced contractions,
              regular medical checks and continuous
              monitoring.
            </p>

            <p>
              You walked, breathed, endured and
              kept going through contractions that
              became increasingly difficult.
            </p>

            <p>
              I stood beside you, watching you
              experience something I could never
              fully understand or take away.
            </p>

            <p className="labour-emphasis">
              Ten hours of pain.
              Ten hours of courage.
              Ten hours in which you showed me
              just how strong you could be.
            </p>
          </Reveal>
        </div>

        <Reveal direction="up">
          <img
            src="/images/illustrations/labour-strength.webp"
            alt="Faceless watercolor illustration of a husband holding his wife's hand beside a hospital bed"
            className="labour-couple-image"
            loading="lazy"
          />
        </Reveal>

      </div>

      {/* Unexpected C-section */}
      <div className="chapter-csection">

        <div className="csection-decoration">
          <DecorativeStar size={28} color="#D6B779" />
        </div>

        <Reveal direction="up">
          <span className="chapter-label">
            THE UNEXPECTED TURN
          </span>

          <h2>
            Then Came Two Words
            <br />
            We Had Not Expected.
          </h2>

          <p className="csection-announcement">
            "A C-section."
          </p>
        </Reveal>

        <div className="chapter-story-text">
          <Reveal direction="up">
            <p>
              After everything you had endured,
              the delivery journey took an unexpected
              turn.
            </p>

            <p>
              You had hoped for a different experience.
              You had already given so much of yourself.
              And hearing that the plan would change
              was heartbreaking.
            </p>

            <p>
              There were emotions that words
              could never fully describe.
            </p>

            <p>
              But when it mattered most, you chose
              the safety of our daughter over the
              expectations you had carried for months.
            </p>
          </Reveal>
        </div>

        <Reveal direction="up">
          <div className="csection-message">
            <span>♡</span>

            <h3>
              A Different Birth Plan.
              <br />
              The Same Extraordinary Mother.
            </h3>

            <p>
              A C-section did not diminish your strength.
              It was another part of the journey
              through which you became her mother.
            </p>
          </div>
        </Reveal>

        <HandwrittenNote
          eyebrow="WHAT I WANT YOU TO REMEMBER"
          message="I know it wasn't how you had imagined meeting our daughter. I know there was disappointment and heartbreak. But I hope you always remember this: you did not fail. You were brave. You made difficult decisions in an emotional moment, and you put our daughter's safety first. I could not have been prouder of you."
          signature="Always beside you."
          variant="lavender"
        />

      </div>

      {/* Thirty minutes */}
      <div className="chapter-thirty-minutes">

        <Reveal direction="up">
          <span className="chapter-label">
            THE MOMENT EVERYTHING CHANGED
          </span>

          <h2>
            Thirty Minutes
            <br />
            That Changed Our Lives Forever.
          </h2>

          <p>
            The preparation. The stillness.
            The uncertainty. And the hope
            of finally meeting our daughter.
          </p>
        </Reveal>

        <Reveal direction="up">
          <img
            src="/images/illustrations/operating-room-waiting.webp"
            alt="Symbolic faceless watercolor illustration of a husband waiting outside an operating room under soft golden light"
            loading="lazy"
          />
        </Reveal>

        <div className="chapter-story-text">
          <Reveal direction="up">
            <p>
              The preparation for surgery began.
              There were medical procedures,
              waiting and moments of uncertainty.
            </p>

            <p>
              I wanted you to know that you were
              not alone.
            </p>

            <p>
              I stood beside you, held your hand
              and whispered whatever words of
              encouragement I could find.
            </p>

            <p>
              I could not take away your fear.
              I could not experience your pain.
              But I could be there with you.
            </p>

            <p className="golden-emphasis">
              And then, in just thirty minutes,
              our entire world changed.
            </p>
          </Reveal>
        </div>

      </div>

      {/* Birth reveal */}
      <div className="chapter-birth-reveal">

        <div className="birth-reveal-stars" aria-hidden="true">
          <DecorativeStar size={18} color="#F9E3A5" />
          <DecorativeStar size={28} color="#E7C67D" />
          <DecorativeStar size={14} color="#FFF4D9" />
        </div>

        <Reveal direction="fade">
          <span className="chapter-label birth-label">
            BORN DURING THE BLESSED MONTH OF RAMADAN
          </span>
        </Reveal>

        <Reveal direction="up">
          <CrescentMoon size={85} color="#E8CA89" />

          <p className="birth-small-heading">
            THE WAIT WAS OVER.
          </p>

          <h2 className="birth-reveal-title">
            She Was Here.
          </h2>

          <p className="birth-reveal-subtitle">
            Our daughter.
            Your little miracle.
            Our forever beginning.
          </p>
        </Reveal>

        <Reveal direction="up" delay={250}>
          <img
            src="/images/illustrations/mother-newborn.webp"
            alt="Faceless watercolor illustration of a mother embracing her newborn daughter in warm golden light"
            className="birth-mother-image"
            loading="lazy"
          />
        </Reveal>

        <div className="birth-details">
          <p>
            Born during Ramadan.
            A moment of gratitude we will carry forever.
          </p>
        </div>

      </div>

      {/* Original message reveal */}
      <div className="birth-announcement-section">

        <Reveal direction="up">
          <span className="chapter-label">
            THE MESSAGE THAT CHANGED EVERYTHING
          </span>

          <h3>
            Some Messages Are
            <br />
            Impossible to Forget.
          </h3>

          <p>
            A few words.
            A lifetime of emotion.
          </p>
        </Reveal>

        <div className="announcement-reveal-card">

          {!announcementRevealed ? (
            <button
              type="button"
              className="announcement-reveal-button"
              onClick={() => setAnnouncementRevealed(true)}
            >
              <span className="announcement-envelope">
                ♡
              </span>

              <span>Open the message</span>

              <span className="announcement-hint">
                A moment we will remember forever
              </span>
            </button>
          ) : (
            <Reveal direction="up">
              <div
                className="announcement-message"
                aria-live="polite"
              >
                <span className="announcement-heart">♡</span>

                <p className="announcement-quote">
                  "Delivered… safe… operation successful."
                </p>

                <span className="announcement-caption">
                  THE WORDS WE HAD BEEN WAITING FOR
                </span>
              </div>
            </Reveal>
          )}

        </div>

        <Reveal direction="up">
          <p className="announcement-followup">
            Then came the calls.
            The messages.
            The excitement.
          </p>

          <p className="announcement-family-question">
            "How does the baby look?"
          </p>

          <p className="announcement-closing">
            And suddenly, the happiness that had
            been growing inside our little family
            was shared by everyone we loved.
          </p>
        </Reveal>

      </div>

      {/* First glimpse */}
      <div className="chapter-first-glimpse">

        <SectionHeading
          eyebrow="OUR FIRST LOOK"
          title="The Little Person We Had Been Waiting For."
          subtitle="A tiny body, delicate hands and a moment too beautiful for words."
        />

        <Reveal direction="up">
          <img
            src="/images/illustrations/newborn-first-glimpse.webp"
            alt="Artistic faceless watercolor illustration of a newborn baby wrapped in a soft ivory blanket"
            className="newborn-glimpse-image"
            loading="lazy"
          />
        </Reveal>

        <div className="chapter-story-text">
          <Reveal direction="up">
            <p>
              We finally saw her.
            </p>

            <p>
              Her tiny body.
              Her beautiful little eyes.
              Her soft hair.
              Her delicate hands.
            </p>

            <p>
              After months of imagining her,
              waiting for her and hearing her
              little heartbeat, she was finally here.
            </p>

            <p className="first-glimpse-emphasis">
              And the happiness of seeing her
              for the first time was beyond
              anything we had ever imagined.
            </p>
          </Reveal>
        </div>

      </div>

      {/* Real memories */}
      <div className="chapter-memory-section">

        <MemoryGallery
          images={story.chapter04Gallery}
          eyebrow="THE DAY OUR WORLD CHANGED"
          title="The Moments We Will Never Forget."
          subtitle="A few photographs from the most extraordinary day of our lives."
        />

      </div>

      {/* Tribute to wife */}
      <div className="chapter-four-closing">

        <HandwrittenNote
          eyebrow="TO THE WOMAN WHO MADE ME A FATHER"
          message="I remember the hours you endured. I remember the disappointment when things didn't go as planned. I remember holding your hand and waiting for our daughter. But more than anything, I remember your courage. Our daughter arrived safely, but I also witnessed something extraordinary: the strength of the woman I love becoming the mother our daughter will love forever."
          signature="Your husband. Her father. Forever grateful."
          variant="gold"
        />

        <Reveal direction="up">
          <h3>
            Our Daughter Was Born.
            <br />
            And So Was A Mother.
          </h3>

          <p>
            The miracle was finally in our arms.
            But the woman who made this journey
            possible will always be the heart
            of this story.
          </p>

          <span className="chapter-closing-heart">♡</span>
        </Reveal>

      </div>

    </section>
  );
}
