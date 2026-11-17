
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import HandwrittenNote from "../ui/HandwrittenNote";
import {
  CrescentMoon,
  DecorativeStar,
  FloatingDecorations
} from "../ui/DecorativeElements";
import MemoryGallery from "../ui/MemoryGallery";

import { story } from "../../data/story";

export default function Chapter02() {
  return (
    <section
      id="faith-and-strength"
      className="chapter chapter-two"
    >
      <FloatingDecorations variant="spiritual" />

      {/* Chapter opening */}
      <div className="chapter-two-hero">

        <Reveal direction="fade">
          <span className="chapter-label">
            CHAPTER 02 · FAITH & STRENGTH
          </span>
        </Reveal>

        <Reveal direction="up">
          <CrescentMoon size={76} color="#E5C987" />

          <h2 className="chapter-two-title">
            She Carried a Little Life,
            <br />
            <span>Even When Life Became Heavy.</span>
          </h2>

          <p>
            Some journeys test the body.
            Others reveal the extraordinary strength
            already living within a person.
          </p>
        </Reveal>

        <Reveal direction="up" delay={200}>
          <img
            src="/images/illustrations/chapter-02-strength.webp"
            alt="Faceless watercolor illustration of a pregnant woman standing beneath a soft golden light"
            className="chapter-two-hero-image"
            loading="lazy"
          />
        </Reveal>

      </div>

      {/* Journey to India */}
      <div className="chapter-india">

        <SectionHeading
          eyebrow="A JOURNEY AWAY FROM HOME"
          title="Even Far From Home, You Kept Going."
          subtitle="The journey to India brought experiences we had never expected."
        />

        <div className="chapter-story-text">

          <Reveal direction="up">
            <p>
              During pregnancy, we travelled to India.
              What should have been an ordinary journey
              became a difficult chapter for us.
            </p>

            <p>
              A fever brought fear and uncertainty.
              We worried about you, about our little one,
              and about what might happen next.
            </p>

            <p>
              There were uncomfortable days,
              difficult moments and concerns that
              neither of us could simply ignore.
            </p>

            <p>
              Eventually, we returned home.
              And even after everything, you continued
              carrying our little miracle with love.
            </p>
          </Reveal>

        </div>

        <Reveal direction="up">
          <div className="chapter-india-illustration">
            <img
              src="/images/illustrations/india-journey.webp"
              alt="Faceless watercolor illustration of a pregnant woman travelling beside a window"
              loading="lazy"
            />
          </div>
        </Reveal>

      </div>

      {/* Physical challenges */}
      <div className="chapter-sacrifice">

        <SectionHeading
          eyebrow="THE THINGS YOU ENDURED"
          title="The Little Sacrifices Nobody Could See."
          subtitle="Pregnancy was not always comfortable. Sometimes, simply getting through the day was an achievement."
        />

        <div className="sacrifice-grid">

          <Reveal direction="up">
            <article className="sacrifice-card">
              <span aria-hidden="true">♡</span>
              <h3>Days of Nausea</h3>
              <p>
                Nausea that continued throughout
                the journey, making ordinary days
                difficult.
              </p>
            </article>
          </Reveal>

          <Reveal direction="up" delay={100}>
            <article className="sacrifice-card">
              <span aria-hidden="true">☾</span>
              <h3>Sleepless Nights</h3>
              <p>
                Nights spent searching for a
                comfortable sleeping position,
                while your body kept changing.
              </p>
            </article>
          </Reveal>

          <Reveal direction="up" delay={200}>
            <article className="sacrifice-card">
              <span aria-hidden="true">✿</span>
              <h3>Physical Pain</h3>
              <p>
                Frequent discomfort and pain,
                even during moments when you
                simply wanted to rest.
              </p>
            </article>
          </Reveal>

          <Reveal direction="up" delay={300}>
            <article className="sacrifice-card">
              <span aria-hidden="true">♡</span>
              <h3>Food Sacrifices</h3>
              <p>
                When blood sugar readings raised
                concerns, you became disciplined
                about your diet and gave up rice
                and favourite foods for our baby.
              </p>
            </article>
          </Reveal>

        </div>

        <HandwrittenNote
          eyebrow="WHAT I REMEMBER"
          message="I remember the things you gave up, the nights you struggled to sleep, and the discomfort you carried quietly. I wish I could have taken every difficult moment away. What I can promise is that I will never take your sacrifices for granted."
          signature="With gratitude, your husband."
          variant="lavender"
        />

      </div>

      {/* Ramadan cinematic section */}
      <div className="chapter-ramadan">

        <div className="ramadan-stars" aria-hidden="true">
          <DecorativeStar size={22} color="#E5C987" />
          <DecorativeStar size={14} color="#FFF0C5" />
          <DecorativeStar size={28} color="#E5C987" />
        </div>

        <Reveal direction="fade">
          <span className="chapter-label ramadan-label">
            THE SACRED MONTH OF RAMADAN
          </span>
        </Reveal>

        <Reveal direction="up">
          <CrescentMoon size={92} color="#E5C987" />

          <h2 className="ramadan-title">
            Her Body Was Tired.
            <br />
            <span>Her Faith Never Stopped Shining.</span>
          </h2>

          <p className="ramadan-intro">
            Ramadan arrived while you were carrying
            our daughter.
          </p>
        </Reveal>

        <Reveal direction="up" delay={150}>
          <div className="ramadan-main-illustration">
            <img
              src="/images/illustrations/pregnant-taraweeh.webp"
              alt="Faceless illustration of a pregnant woman praying on a prayer mat beneath a glowing crescent moon"
              loading="lazy"
            />
          </div>
        </Reveal>

        <div className="ramadan-story">

          <Reveal direction="up">
            <p>
              Even with the physical weakness,
              discomfort and exhaustion of pregnancy,
              you continued attending Taraweeh prayers.
            </p>

            <p className="ramadan-highlight">
              Not a night missed.
              <br />
              Not a prayer left behind.
            </p>

            <p>
              I watched you continue with a devotion
              that moved me deeply.
            </p>

            <p>
              There was a little life growing inside you,
              and there was a strength of faith within
              your heart that inspired me every day.
            </p>
          </Reveal>

        </div>

        <Reveal direction="up">
          <div className="ramadan-mosque">
            <img
              src="/images/illustrations/ramadan-mosque.webp"
              alt="Dreamy midnight-blue illustration of a mosque silhouette beneath a star-filled sky"
              loading="lazy"
            />
          </div>
        </Reveal>

        <div className="ramadan-quote">
          <Reveal direction="up">
            <span className="quote-decoration">✦</span>

            <blockquote>
              Her body carried the weight of pregnancy,
              but her heart carried the strength of faith.
              Even on her weakest nights, she found
              the strength to pray.
            </blockquote>

            <span className="quote-decoration">☾</span>
          </Reveal>
        </div>

      </div>

      {/* Personal Ramadan tribute */}
      <div className="chapter-ramadan-letter">

        <HandwrittenNote
          eyebrow="WHAT RAMADAN TAUGHT ME ABOUT YOU"
          message="I will always remember those nights. While carrying our daughter and dealing with the difficulties of pregnancy, you still made space for your prayers. You taught me that strength is not always loud. Sometimes it is simply showing up, night after night, with faith in your heart."
          signature="I admire you more than words can say."
          variant="gold"
        />

      </div>

      {/* Real memories */}
      <div className="chapter-memory-section">

        <MemoryGallery
          images={story.memoryGalleries.chapter02}
          eyebrow="MEMORIES OF STRENGTH"
          title="The Days That Made You Stronger."
          subtitle="The journeys, the difficult days and the moments of faith we will never forget."
        />

      </div>

      {/* Closing */}
      <div className="chapter-two-closing">

        <Reveal direction="up">
          <CrescentMoon size={48} color="#D6B779" />

          <h3>
            You Were Stronger
            <br />
            Than You Ever Realized.
          </h3>

          <p>
            And through every sacrifice, every prayer,
            every sleepless night and every difficult day,
            you continued moving forward.
          </p>

          <p className="chapter-closing-final">
            I was not simply watching a pregnancy journey.
            I was witnessing the strength of the woman
            I was lucky enough to marry.
          </p>
        </Reveal>

      </div>

    </section>
  );
}
