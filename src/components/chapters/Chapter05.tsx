
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import HandwrittenNote from "../ui/HandwrittenNote";
import MemoryGallery from "../ui/MemoryGallery";

import {
  Flower,
  DecorativeStar,
  CrescentMoon,
  FloatingDecorations
} from "../ui/DecorativeElements";

import { story } from "../../data/story";

const firstLessons = [
  {
    icon: "♡",
    title: "The First Feeding",
    description:
      "Watching you hold our daughter close and nourish her with a love only a mother could give."
  },
  {
    icon: "✿",
    title: "Our First Bottle",
    description:
      "Our first attempt at bottle-feeding. The nipple seemed enormous compared with her tiny mouth, and our hands were full of nervous excitement."
  },
  {
    icon: "✧",
    title: "Learning Her Language",
    description:
      "Trying to understand every cry, movement and little expression, while wondering whether we were doing everything correctly."
  },
  {
    icon: "∞",
    title: "Becoming Parents",
    description:
      "Learning from the patient nurses, asking endless questions and slowly becoming more confident together."
  }
];

const recoveryMilestones = [
  {
    number: "01",
    title: "The First Steps",
    description:
      "Standing up and taking those first fragile steps after surgery."
  },
  {
    number: "02",
    title: "The Difficult Walk",
    description:
      "Even walking to the toilet became an achievement worth celebrating."
  },
  {
    number: "03",
    title: "Moving Forward",
    description:
      "Slowly moving around the hospital ward, one careful step at a time."
  },
  {
    number: "04",
    title: "Finding Your Strength",
    description:
      "Every little improvement became a reason to smile and another victory in your recovery."
  }
];

export default function Chapter05() {
  return (
    <section
      id="motherhood"
      className="chapter chapter-five"
    >
      <FloatingDecorations variant="romantic" />

      {/* Opening */}
      <div className="chapter-five-hero">

        <Reveal direction="fade">
          <span className="chapter-label">
            CHAPTER 05 · MOTHERHOOD & FOREVER
          </span>
        </Reveal>

        <Reveal direction="up">
          <Flower size={65} color="#E99CB7" />

          <h2 className="chapter-five-title">
            You Became a Mother.
            <br />
            <span>And We Began Learning to Be Parents.</span>
          </h2>

          <p>
            The miracle was finally in our arms.
            But our beautiful journey was only beginning.
          </p>
        </Reveal>

        <Reveal direction="up" delay={200}>
          <img
            src="/images/illustrations/chapter-05-motherhood.webp"
            alt="Faceless watercolor illustration of a mother lovingly holding her newborn daughter"
            className="chapter-five-hero-image"
            fetchPriority="high"
          />
        </Reveal>

      </div>

      {/* First connection */}
      <div className="chapter-first-connection">

        <SectionHeading
          eyebrow="HER FIRST CONNECTION"
          title="A Love That Needed No Introduction."
          subtitle="After months of carrying her, you could finally hold her close."
        />

        <div className="chapter-story-text">
          <Reveal direction="up">
            <p>
              The first moments of motherhood were
              filled with emotions neither of us
              could fully describe.
            </p>

            <p>
              You held our daughter close.
              You began feeding her.
              And the little life you had protected
              throughout pregnancy was finally
              in your arms.
            </p>

            <p>
              There was something extraordinary
              about watching that first connection.
            </p>

            <p className="motherhood-emphasis">
              You had been her first home.
              Now you were becoming her first comfort.
            </p>
          </Reveal>
        </div>

        <Reveal direction="up">
          <img
            src="/images/illustrations/first-feeding.webp"
            alt="Tasteful faceless watercolor illustration of a mother holding and feeding her newborn daughter"
            className="first-feeding-image"
            loading="lazy"
          />
        </Reveal>

        <HandwrittenNote
          eyebrow="WATCHING YOU BECOME HER MOTHER"
          message="I watched you hold her close, care for her and begin understanding her little needs. After everything your body had been through, you still found so much love to give. I don't think I will ever forget those first moments."
          signature="Your husband, forever grateful."
          variant="pink"
        />

      </div>

      {/* First lessons as parents */}
      <div className="chapter-first-lessons">

        <SectionHeading
          eyebrow="OUR FIRST LESSONS"
          title="Two Beginners. One Little Teacher."
          subtitle="We had waited months to become parents. Then suddenly, we were learning everything for the first time."
        />

        <Reveal direction="up">
          <img
            src="/images/illustrations/first-parenting.webp"
            alt="Faceless watercolor illustration of a father carefully holding his newborn daughter"
            className="first-parenting-image"
            loading="lazy"
          />
        </Reveal>

        <div className="parenting-lessons-grid">

          {firstLessons.map((lesson, index) => (
            <Reveal
              key={lesson.title}
              direction="up"
              delay={index * 100}
            >
              <article className="parenting-lesson-card">
                <span className="lesson-icon">
                  {lesson.icon}
                </span>

                <h3>{lesson.title}</h3>

                <p>{lesson.description}</p>
              </article>
            </Reveal>
          ))}

        </div>

        <div className="chapter-story-text">
          <Reveal direction="up">
            <p>
              We tried bottle-feeding for the first time.
              That tiny bottle nipple seemed so big
              compared with our daughter's little mouth.
            </p>

            <p>
              Our hands were trembling.
              We had endless questions.
              We wondered whether we were doing
              everything correctly.
            </p>

            <p>
              The nurses patiently guided us.
              We learned to understand her cries,
              her little movements and her needs.
            </p>

            <p>
              Slowly, the unfamiliar became familiar.
              We were learning how to be her parents.
            </p>
          </Reveal>
        </div>

      </div>

      {/* Recovery */}
      <div className="chapter-recovery">

        <SectionHeading
          eyebrow="HER RECOVERY · HER VICTORIES"
          title="Every Little Step Was a Big Victory."
          subtitle="The world might have seen ordinary movements. I saw extraordinary achievements."
        />

        <Reveal direction="up">
          <img
            src="/images/illustrations/mother-recovery.webp"
            alt="Faceless watercolor illustration of a mother taking careful first steps after surgery with her husband beside her"
            className="recovery-main-image"
            loading="lazy"
          />
        </Reveal>

        <div className="chapter-story-text">
          <Reveal direction="up">
            <p>
              After the C-section, recovery became
              its own journey.
            </p>

            <p>
              There was pain, discomfort and the
              difficult process of slowly beginning
              to move again.
            </p>

            <p>
              Your first fragile steps.
              The difficult walk to the toilet.
              Slowly moving around the hospital ward.
            </p>

            <p>
              I remember how even the smallest
              movements required so much effort.
            </p>

            <p className="recovery-emphasis">
              What seemed ordinary to someone else
              was a personal victory for you.
            </p>
          </Reveal>
        </div>

        <div className="recovery-milestones">

          {recoveryMilestones.map((milestone, index) => (
            <Reveal
              key={milestone.number}
              direction="up"
              delay={index * 100}
            >
              <article className="recovery-milestone">
                <span className="recovery-number">
                  {milestone.number}
                </span>

                <div>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>

                <span className="recovery-heart">♡</span>
              </article>
            </Reveal>
          ))}

        </div>

        <HandwrittenNote
          eyebrow="I SAW EVERY LITTLE VICTORY"
          message="I remember your first steps after surgery. I remember how difficult even a short walk could be. I remember the moments when we laughed between the difficult ones. You never needed to do everything at once. Every small step was enough. I was proud of you then, and I will always be proud of you."
          signature="Beside you, every step."
          variant="lavender"
        />

      </div>

      {/* Family */}
      <div className="chapter-family">

        <SectionHeading
          eyebrow="SURROUNDED BY LOVE"
          title="We Were Never Alone."
          subtitle="Our hospital room became a place filled with love, support and the beginning of family memories."
        />

        <Reveal direction="up">
          <img
            src="/images/illustrations/family-hospital.webp"
            alt="Faceless watercolor illustration of a family gathered around a mother and newborn in a hospital room"
            className="family-hospital-image"
            loading="lazy"
          />
        </Reveal>

        <div className="chapter-story-text">
          <Reveal direction="up">
            <p>
              Your mother was there.
              Your sister was there.
              And I was standing beside you.
            </p>

            <p>
              Our hospital room gradually filled
              with the warmth of family.
            </p>

            <p>
              There were conversations about
              our daughter's name, happy messages,
              practical arrangements, insurance
              discussions and countless little
              details of our new life.
            </p>

            <p>
              There was so much to learn,
              so much to organize and so much
              to be grateful for.
            </p>
          </Reveal>
        </div>

      </div>

      {/* Fatherhood */}
      <div className="chapter-fatherhood">

        <SectionHeading
          eyebrow="MY FIRST DAYS AS A FATHER"
          title="I Was Learning to Love in a New Way Too."
          subtitle="Watching you become a mother changed the way I understood our family."
        />

        <Reveal direction="up">
          <img
            src="/images/illustrations/father-newborn.webp"
            alt="Faceless watercolor illustration of a father gently holding his newborn daughter"
            className="father-newborn-image"
            loading="lazy"
          />
        </Reveal>

        <div className="chapter-story-text">
          <Reveal direction="up">
            <p>
              I learned how small a newborn's
              fingers could be.
            </p>

            <p>
              I learned how carefully a baby
              needed to be held.
            </p>

            <p>
              I learned that becoming a father
              meant asking questions, making
              mistakes, learning patiently
              and showing up every day.
            </p>

            <p>
              But the greatest lesson came from you.
            </p>

            <p className="fatherhood-emphasis">
              You showed me what unconditional
              love looked like before our daughter
              could even say a word.
            </p>
          </Reveal>
        </div>

      </div>

      {/* Real photographs */}
      <div className="chapter-memory-section">

        <MemoryGallery
          images={story.memoryGalleries.chapter05}
          eyebrow="THE FIRST DAYS OF FOREVER"
          title="Little Moments, A Lifetime of Love."
          subtitle="Her first cuddles, our first lessons, your recovery and our first memories as a family."
        />

      </div>

      {/* Final tribute */}
      <div className="chapter-final-letter">

        <div className="final-letter-decoration">
          <CrescentMoon size={65} color="#D6B779" />
          <DecorativeStar size={24} color="#D6B779" />
        </div>

        <Reveal direction="up">
          <span className="chapter-label">
            A LETTER TO MY WIFE
          </span>

          <h2 className="final-letter-heading">
            To the Woman Who Made
            <br />
            Our World Complete.
          </h2>
        </Reveal>

        <Reveal direction="up" delay={150}>
          <div className="final-letter-body">

            <p>My love,</p>

            <p>
              You carried her for months, protected her
              through every difficult day, sacrificed
              your comfort, endured pain, and filled
              your nights with prayers.
            </p>

            <p>
              I watched you become stronger in ways
              I never imagined possible.
            </p>

            <p>
              I stood beside you when you were frightened,
              held your hand when you were hurting,
              and witnessed the moment our daughter
              entered this world.
            </p>

            <p>
              But what I will remember most is not simply
              the day she was born.
            </p>

            <p className="final-letter-emphasis">
              It is the woman you were throughout
              the journey.
            </p>

            <p>
              You are her first home, her first comfort,
              her first love and her greatest blessing.
            </p>

            <p>
              Our daughter is lucky to have you
              as her mother.
            </p>

            <p>
              And I am forever grateful that I get
              to call you my wife.
            </p>

            <p className="final-letter-emphasis">
              I fell in love with you once.
            </p>

            <p className="final-letter-emphasis">
              Then I watched you become a mother.
            </p>

            <p className="final-letter-last">
              And I fell in love with you all over again.
            </p>

            <div className="final-letter-signature">
              <span>Forever yours,</span>
              <span className="final-letter-signature-name">
                Your husband ♡
              </span>
            </div>

          </div>
        </Reveal>

      </div>

      {/* Family of three */}
      <div className="chapter-family-of-three">

        <Reveal direction="up">
          <img
            src="/images/illustrations/family-of-three.webp"
            alt="Beautiful faceless watercolor illustration of a mother, father and newborn daughter together, seen from behind"
            loading="lazy"
          />

          <h3>
            One Journey.
            <br />
            Three Hearts.
            <br />
            One Beautiful Forever.
          </h3>

          <p>
            Her journey made us a family.
            Her love made our world complete.
          </p>

          <span className="family-final-heart">♡</span>
        </Reveal>

      </div>

    </section>
  );
}
