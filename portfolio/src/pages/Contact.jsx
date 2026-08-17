import ChapterTransition from "../components/story/ChapterTransition";
import HorizonContact from "../components/contact/HorizonContact";

export default function Contact() {
  return (
    <>
      <ChapterTransition
        pre="Every story needs a final panel. This one is intentionally left open."
        eyebrow="CHAPTER 05 / THE NEXT BUILD"
        heading="The next chapter could start with a message."
      />

      <HorizonContact />
    </>
  );
}
