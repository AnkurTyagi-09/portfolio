import Hero from "../components/hero/Hero";
import ChapterTransition from "../components/story/ChapterTransition";
import StackArchitecture from "../components/web/StackArchitecture";
import RagJourney from "../components/ai/RagJourney";
import SkillsMarquee from "../components/SkillsMarquee";

export default function Home() {
  return (
    <>
      <Hero />

      <ChapterTransition
        eyebrow="01 / Interface"
        heading="Interfaces built for real products."
      />
      <StackArchitecture />

      <ChapterTransition
        pre="The interface is only the visible layer."
        eyebrow="02 / Intelligence"
        heading="AI systems beyond the prompt box."
      />
      <RagJourney />

      <SkillsMarquee />
    </>
  );
}
