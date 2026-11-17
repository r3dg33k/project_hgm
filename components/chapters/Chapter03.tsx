
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import HandwrittenNote from "../ui/HandwrittenNote";
import {
  Flower,
  DecorativeStar,
  FloatingDecorations
} from "../ui/DecorativeElements";
import MemoryGallery from "../ui/MemoryGallery";
import { story } from "../../data/story";

const pregnancyMoments = [
  {
    number: "01",
    title: "The Monthly Glimpses",
    description:
      "Every ultrasound appointment brought another little glimpse of the life growing inside you."
  },
  {
    number: "02",
    title: "The Little Heartbeat",
    description:
      "Hearing that tiny heartbeat reminded us that our dreams were becoming real."
  },
  {
    number: "03",
    title: "Watching Her Grow",
    description:
      "We watched her development month after month, celebrating every little change."
  },
  {
    number: "04",
    title: "Closer to Meeting Her",
    description:
      "With every appointment, the day we would finally hold her came a little closer."
  }
];

const preparationMoments = [
  {
    icon: "♡",
    title: "Tiny Clothes",
    description:
      "Folding little outfits and imagining her wearing them."
  },
  {
    icon: "✿",
    title: "Choosing Her Name",
    description:
      "Discussing names, changing our minds and searching for the perfect one."
  },
  {
    icon: "✧",
    title: "Dreaming About Her",
    description:
      "Wondering what she would look like and imagining her personality."
  },
  {
    icon: "∞",
    title: "Family Excitement",
    description:
      "Sharing the happiness with family as everyone began waiting for her arrival."
  }
];

export default function Chapter03() {
  return (
    <section
      id="anticipation"
      className="chapter chapter-three"
    >
      <FloatingDecorations variant="dreamy" />

      {/* Chapter opening */}
      <div className="chapter-three-hero">

        <Reveal direction="fade">
          <span className="chapter-label">
            CHAPTER 03 · DREAMS & ANTICIPATION
          </span>
        </Reveal>

        <Reveal direction="up">
          <Flower size={62} color="#E99CB7" />

          <h2 className="chapter-three-title">
            Every Little Movement
            <br />
            <span>Brought Us Closer to You.</span>
          </h2>

          <p>
            Before we knew her little face,
            she had already filled our world
            with dreams.
          </p>
        </Reveal>

        <Reveal direction="up" delay={200}>
          <img
            src="/images/illustrations/chapter-03-dreams.webp"
            alt="Faceless watercolor illustration of a pregnant mother sitting beside a window with her hands resting on her belly"
            className="chapter-three-hero-image"
            fetchPriority="high"
          />
        </Reveal>

      </div>

      {/* Ultrasound journey */}
      <div className="chapter-ultrasounds">

        <SectionHeading
          eyebrow="MONTH AFTER MONTH"
          title="A Little More of You, Every Time."
          subtitle="Each appointment gave us another reason to smile."
        />

        <div className="ultrasound-story">

          <Reveal direction="up">
            <p>
              Every month brought another ultrasound
              appointment.
            </p>

            <p>
              We watched your little body develop
              on the screen, listened to your heartbeat
              and tried to understand all the wonderful
              changes happening inside your mother.
            </p>

            <p>
              Every measurement, every little glimpse
              and every appointment became a memory
              we wanted to hold onto forever.
            </p>
          </Reveal>

        </div>

        <div className="pregnancy-moments-grid">

          {pregnancyMoments.map((moment, index) => (
            <Reveal
              key={moment.number}
              direction="up"
              delay={index * 120}
            >
              <article className="pregnancy-moment-card">
                <span className="moment-number">
                  {moment.number}
                </span>

                <h3>{moment.title}</h3>

                <p>{moment.description}</p>

                <span className="moment-decoration">
                  ✧
                </span>
              </article>
            </Reveal>
          ))}

        </div>

        {/* Ultrasound illustration */}
        <Reveal direction="up">
          <div className="ultrasound-feature">
            <div className="ultrasound-frame">
              <img
                src="/images/memories/ultrasound-01.webp"
                alt="Placeholder for our daughter's first ultrasound photograph"
                loading="lazy"
              />
              <span className="ultrasound-frame-caption">
                OUR FIRST LITTLE GLIMPSE
              </span>
            </div>

            <p>
              A tiny image on a screen.
              An enormous place in our hearts.
            </p>
          </div>
        </Reveal>

      </div>

      {/* Preparing for daughter */}
      <div className="chapter-preparations">

        <SectionHeading
          eyebrow="GETTING READY FOR YOU"
          title="Our Home Started Filling With Little Dreams."
          subtitle="We were preparing for someone we hadn't yet held, but already loved beyond words."
        />

        <Reveal direction="up">
          <div className="nursery-illustration">
            <img
              src="/images/illustrations/baby-nursery.webp"
              alt="Pastel watercolor illustration of a beautiful baby nursery with tiny clothes, a cot and stars"
              loading="lazy"
            />
          </div>
        </Reveal>

        <div className="preparation-grid">

          {preparationMoments.map((moment, index) => (
            <Reveal
              key={moment.title}
              direction="up"
              delay={index * 100}
            >
              <article className="preparation-card">
                <span className="preparation-icon">
                  {moment.icon}
                </span>

                <h3>{moment.title}</h3>

                <p>{moment.description}</p>
              </article>
            </Reveal>
          ))}

        </div>

      </div>

      {/* Tiny clothes */}
      <div className="chapter-tiny-clothes">

        <Reveal direction="up">
          <img
            src="/images/illustrations/tiny-baby-clothes.webp"
            alt="Watercolor illustration of tiny pastel newborn clothes hanging on a clothesline"
            loading="lazy"
          />
        </Reveal>

        <div className="tiny-clothes-message">
          <Reveal direction="up">
            <h3>
              The Smallest Clothes
              <br />
              Held Our Biggest Dreams.
            </h3>

            <p>
              We folded little clothes, imagined
              her first days and wondered which
              tiny outfit she would wear first.
            </p>

            <p>
              We discussed names, changed our minds,
              imagined her personality and smiled
              at possibilities we couldn't wait
              to discover.
            </p>
          </Reveal>
        </div>

      </div>

      {/* Family anticipation */}
      <div className="chapter-family-excitement">

        <SectionHeading
          eyebrow="EVERYONE WAS WAITING"
          title="A Little Girl Was Already Bringing Us Together."
          subtitle="Our daughter hadn't arrived yet, but she was already surrounded by love."
        />

        <Reveal direction="up">
          <img
            src="/images/illustrations/family-waiting.webp"
            alt="Faceless watercolor illustration of a loving family gathered around an expecting mother"
            loading="lazy"
          />
        </Reveal>

        <div className="family-excitement-text">
          <Reveal direction="up">
            <p>
              Conversations about her name became
              part of everyday life.
            </p>

            <p>
              Family members shared their excitement.
              Messages arrived. Everyone wondered
              when they would finally meet her.
            </p>

            <p>
              We were two people waiting for our
              daughter, but the happiness was already
              spreading through an entire family.
            </p>
          </Reveal>
        </div>

      </div>

      {/* Personal letter */}
      <HandwrittenNote
        eyebrow="TO THE LITTLE GIRL WE WERE WAITING FOR"
        message="We hadn't met you yet. We didn't know your little expressions, your voice or the way you would look at us. But every appointment, every heartbeat and every tiny movement made us love you a little more. And through it all, your mother carried you with a love I will never be able to fully describe."
        signature="Mama and Papa, waiting for you."
        variant="pink"
      />

      {/* Real photographs */}
      <div className="chapter-memory-section">

        <MemoryGallery
          images={story.memoryGalleries.chapter03}
          eyebrow="OUR LITTLE COLLECTION"
          title="Dreams We Could Finally Photograph."
          subtitle="Ultrasounds, tiny clothes, preparations and the moments we spent imagining you."
        />

      </div>

      {/* Closing */}
      <div className="chapter-three-closing">

        <Reveal direction="up">
          <DecorativeStar size={38} color="#D6B779" />

          <h3>
            We Had Not Held You Yet.
            <br />
            But You Had Already Changed Everything.
          </h3>

          <p>
            And the woman who carried you through
            every appointment, every movement
            and every passing month was getting
            closer to the moment she would finally
            hold you in her arms.
          </p>

          <span className="chapter-closing-heart">♡</span>
        </Reveal>

      </div>

    </section>
  );
}
