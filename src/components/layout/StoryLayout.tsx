
import { useEffect } from "react";

import Navigation from "./Navigation";
import Footer from "./Footer";

import StoryProgress from "../ui/StoryProgress";

import Chapter01 from "../chapters/Chapter01";
import Chapter02 from "../chapters/Chapter02";
import Chapter03 from "../chapters/Chapter03";
import Chapter04 from "../chapters/Chapter04";
import Chapter05 from "../chapters/Chapter05";

import { siteConfig } from "../../data/site.config";

export default function StoryLayout() {

  useEffect(() => {
    document.title = siteConfig.siteTitle;

    const description = document.querySelector(
      'meta[name="description"]'
    );

    if (description) {
      description.setAttribute(
        "content",
        siteConfig.siteDescription
      );
    }

  }, []);

  return (
    <div className="story-app">

      {/* Navigation */}
      <Navigation />

      {/* Reading progress */}
      <StoryProgress />

      <main id="main-content">

        {/* Opening chapters */}
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

        {/* Emotional climax */}
        <Chapter04 />

        <div className="chapter-transition" aria-hidden="true">
          <span>✧</span>
          <span>♡</span>
          <span>✧</span>
        </div>

        {/* Final chapter */}
        <Chapter05 />

      </main>

      {/* Closing page */}
      <Footer
        wifeName={siteConfig.wifeName}
        daughterName={siteConfig.daughterName}
      />

    </div>
  );
}
