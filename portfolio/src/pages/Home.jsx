import Hero from "../components/hero/Hero";

import ChapterTransition
  from "../components/story/ChapterTransition";

import StackArchitecture
  from "../components/web/StackArchitecture";

import RagJourney
  from "../components/ai/RagJourney";

import SkillsMarquee
  from "../components/SkillsMarquee";

export default function Home() {
  return (
    <>
      {/* ISSUE 01 */}
      <Hero />

      {/* ISSUE 02 */}
      <ChapterTransition
        eyebrow="CHAPTER 02 / THE BUILDER"
        pre="
          I started with the interface.
          Then I wanted to know what
          happened after the button was clicked.
        "
        heading="
          So I went deeper than the frontend.
        "
      />

      <StackArchitecture />

      {/* ISSUE 03 */}
      <ChapterTransition
        eyebrow="CHAPTER 03 / THE INTELLIGENCE LAYER"
        pre="
          Once applications could store,
          search and retrieve information,
          the next question became more interesting.
        "
        heading="
          What if the product could understand the data too?
        "
      />

      <RagJourney />

      {/* END CREDITS / STACK */}
      <SkillsMarquee />
    </>
  );
}