import ChapterTransition from "../components/story/ChapterTransition";
import ExperienceTrail from "../components/experience/ExperienceTrail";

export default function Experience() {
  return (
    <>
      <ChapterTransition
        pre="Every build came from somewhere — internships, real work, experiments and the lessons that stayed."
        eyebrow="CHAPTER 04 / THE JOURNEY"
        heading="The work changed. The way I build did too."
      />

      <ExperienceTrail />
    </>
  );
}
