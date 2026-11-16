
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import HandwrittenNote from "../ui/HandwrittenNote";
import {
  CrescentMoon,
  DecorativeStar,
  Flower,
  FloatingDecorations
} from "../ui/DecorativeElements";
import MemoryGallery from "../ui/MemoryGallery";

import { story } from "../../data/story";

export default function Chapter01() {
  return (
    <section
      id="beginning"
      className="chapter chapter-one"
    >
      <FloatingDecorations variant="romantic" />

      {/* Opening illustration and headline */}
      <div className="chapter-one-hero">

        <Reveal direction="fade">
          <span className="chapter-label">
            CHAPTER 01 · THE BEGINNING
          </span>
        </Reveal>

        <Reveal direction="up" delay={150}>
          <CrescentMoon
            className="chapter-one-moon"
            size={65}
            color="#D6B779"
          />

          <h2 className="chapter-one-title">
            After Hajj,
            <br />
            A New Little
            <br />
            <span>Universe Began Within You.</span>
          </h2>

          <p className="chapter-one-subtitle">
            Some miracles begin quietly.
            Ours began after the sacred days of Hajj.
          </p>
        </Reveal>

        <Reveal direction="up" delay={250}>
          <div className="chapter-one-illustration">
            <img
              src="/images/illustrations/chapter-01-pregnancy.webp"
              alt="Faceless watercolor illustration of a pregnant woman gently holding her belly"
              fetchPriority="high"
            />

            <div className="chapter-one-flower">
              <Flower size={55} color="#E99CB7" />
            </div>

            <div className="chapter-one-star">
              <DecorativeStar size={30} color="#D6B779" />
            </div>
          </div>
        </Reveal>

      </div>

      {/* Hajj and the beginning */}
      <div className="chapter-content">

        <SectionHeading
          eyebrow="AFTER THE SACRED DAYS"
          title="A New Beginning We Never Expected."
          subtitle="July became the month that quietly changed our lives forever."
        />

        <div className="chapter-story-text">

          <Reveal direction="up">
            <p>
              After the beautiful and sacred days of Hajj,
              life was preparing something extraordinary
              for us.
            </p>

            <p>
              In July, we discovered that a little life
              had begun growing inside you.
            </p>

            <p>
              Suddenly, the future looked different.
              We were no longer dreaming only about
              ourselves. We were beginning to imagine
              a little person who would one day call us
              Mama and Papa.
            </p>
          </Reveal>

        </div>

        <HandwrittenNote
          eyebrow="MY FIRST THOUGHTS"
          message="I remember the happiness of realizing that we were going to become parents. But what I didn't yet understand was how extraordinary you would be throughout this journey. I was excited about our baby, but I was about to discover a new kind of admiration for you."
          signature="Your husband, always."
          variant="peach"
        />

      </div>

      {/* Early pregnancy */}
      <div className="chapter-early-pregnancy">

        <SectionHeading
          eyebrow="THE FIRST LITTLE CHANGES"
          title="Happiness Came With Its Own Challenges."
          subtitle="A beautiful beginning, accompanied by feelings and changes neither of us could fully imagine."
        />

        <div className="chapter-story-text">
          <Reveal direction="up">
            <p>
              The happiness was overwhelming.
              We started imagining our future together
              and wondering what our little one might be like.
            </p>

            <p>
              But pregnancy was already beginning to
              change your everyday life.
            </p>

            <p>
              Morning sickness arrived, bringing physical
              discomfort alongside all the excitement.
              There were happy moments, uncertain moments
              and so many new experiences.
            </p>

            <p>
              And through it all, you were becoming
              someone even more extraordinary.
            </p>
          </Reveal>
        </div>

        <div className="chapter-couple-illustration">
          <Reveal direction="up">
            <img
              src="/images/illustrations/couple-first-dreams.webp"
              alt="Faceless rear-facing illustration of a couple holding hands beneath a dreamy sunrise"
              loading="lazy"
            />
          </Reveal>
        </div>

      </div>

      {/* Real photographs */}
      <div className="chapter-memory-section">

        <MemoryGallery
          images={story.chapter01Gallery}
          eyebrow="OUR FIRST MEMORIES"
          title="The Beginning of Everything."
          subtitle="A few moments from the days when our little universe began."
        />

      </div>

      {/* Closing tribute */}
      <div className="chapter-one-closing">

        <Reveal direction="up">
          <div className="chapter-closing-symbol">
            <CrescentMoon size={45} color="#D6B779" />
            <DecorativeStar size={18} color="#D6B779" />
          </div>

          <h3>
            You Didn't Know It Yet,
            <br />
            But You Were Already Becoming Her World.
          </h3>

          <p>
            And I was beginning to understand that
            the greatest miracle wasn't only the life
            growing inside you. It was watching you
            begin this beautiful journey.
          </p>
        </Reveal>

      </div>

    </section>
  );
}
