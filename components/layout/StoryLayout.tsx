
import { useEffect } from "react";

import Navigation from "./Navigation";
import Footer from "./Footer";

import StoryProgress from "../ui/StoryProgress";
import {
  Hero,
  ScrubText,
  ChapterStack,
  Journey,
  Marquee,
  CursorGlow
} from "../ui/Cinematic";

import Chapter01 from "../chapters/Chapter01";
import Chapter02 from "../chapters/Chapter02";
import Chapter03 from "../chapters/Chapter03";
import Chapter04 from "../chapters/Chapter04";
import Chapter05 from "../chapters/Chapter05";

import { siteConfig } from "../../data/site.config";
import { story } from "../../data/story";

export default function StoryLayout() {

  useEffect(() => {
    document.title = siteConfig.name;

    const description = document.querySelector(
      'meta[name="description"]'
    );

    if (description) {
      description.setAttribute(
        "content",
        story.hero.subtitle
      );
    }

  }, []);

  return (
    <div className="story-app">

      <Navigation />

      <StoryProgress />
      <CursorGlow />

      <main id="main-content">

        <Hero />

        <ScrubText />

        <ChapterStack />

        <Chapter01 />

        <div className="chapter-transition" aria-hidden="true">
          <span>✧</span>
          <span>♡</span>
          <span>✧</span>
        </div>

        <Chapter02 />

        <div className="chapter-transition" aria-hidden="true">
          <span>☾</span>
          <span>✧</span>
          <span>♡</span>
        </div>

        <Chapter03 />

        <div className="chapter-transition" aria-hidden="true">
          <span>✿</span>
          <span>♡</span>
          <span>✿</span>
        </div>

        <Chapter04 />

        <div className="chapter-transition" aria-hidden="true">
          <span>✧</span>
          <span>♡</span>
          <span>✧</span>
        </div>

        <Chapter05 />

        <Journey />

        <Marquee />

      </main>

      <Footer
        wifeName={story.family.wifeName}
        daughterName={story.family.daughterName}
      />

    </div>
  );
}
