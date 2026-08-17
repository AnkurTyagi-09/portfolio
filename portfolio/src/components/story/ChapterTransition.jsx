import { motion } from "framer-motion";

export default function ChapterTransition({
  pre,
  eyebrow,
  heading,
}) {
  return (
    <section className="comicChapter">
      <div className="chapterDots" />

      <motion.div
        initial={{
          opacity: 0,
          y: 35,
          rotate: -1.5,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          rotate: 0,
        }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{
          duration: 0.7,
        }}
        className="chapterPanel"
      >
        <div className="chapterIssue">
          {eyebrow}
        </div>

        {pre && (
          <div className="narratorBox">
            <span>NARRATOR</span>

            {pre}
          </div>
        )}

        <h2>
          {heading}
        </h2>

        <div className="nextChapter">
          CONTINUE
          <span>→</span>
        </div>
      </motion.div>

      <style>{`
        .comicChapter {
          position: relative;

          min-height: 440px;

          padding:
            90px
            clamp(1.3rem,5vw,4rem);

          display: grid;

          place-items: center;

          overflow: hidden;

          background: #ddcfa3;

          border-top:
            2px solid #211c23;

          border-bottom:
            2px solid #211c23;
        }

        .chapterDots {
          position: absolute;
          inset: 0;

          opacity: .15;

          background-image:
            radial-gradient(
              circle,
              #45394a 1.2px,
              transparent 1.5px
            );

          background-size:
            12px 12px;

          mask-image:
            linear-gradient(
              90deg,
              black,
              transparent 38%,
              transparent 62%,
              black
            );
        }

        .chapterPanel {
          position: relative;

          z-index: 2;

          width:
            min(900px,100%);

          padding:
            clamp(
              34px,
              5vw,
              62px
            );

          background: #121116;

          color: #ede7e0;

          border:
            2px solid #211c23;

          box-shadow:
            14px 14px 0
            rgba(55,41,58,.28);
        }

        .chapterIssue {
          margin-bottom: 25px;

          color: #8b8190;

          font-family:
            var(--font-mono);

          font-size: 8px;

          letter-spacing: 2px;

          text-transform: uppercase;
        }

        .narratorBox {
          width: fit-content;

          max-width: 540px;

          margin-bottom: 22px;

          padding: 9px 12px;

          color: #1f1a20;

          background: #ddcfa3;

          font-family:
            var(--font-mono);

          font-size: 8px;

          line-height: 1.6;

          transform:
            rotate(-1deg);
        }

        .narratorBox span {
          display: block;

          margin-bottom: 3px;

          color: #786948;

          font-size: 5.8px;

          letter-spacing: 1.5px;
        }

        .chapterPanel h2 {
          max-width: 760px;

          margin: 0;

          color: #efe9e3;

          font-family:
            var(--font-display);

          font-size:
            clamp(
              2.5rem,
              5.3vw,
              4.8rem
            );

          line-height: 1;

          letter-spacing: -.05em;

          font-weight: 700;
        }

        .nextChapter {
          margin-top: 34px;

          color: #6e6872;

          font-family:
            var(--font-mono);

          font-size: 6.5px;

          letter-spacing: 1.6px;
        }

        .nextChapter span {
          margin-left: 9px;

          color: #b398c6;
        }
      `}</style>
    </section>
  );
}