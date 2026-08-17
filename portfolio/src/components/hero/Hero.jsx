import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import DeveloperMonolith from "./DeveloperMonolith";
import HeroTechLabels from "./HeroTechLabels";

export default function Hero() {
  return (
    <section className="comicHero">
      <div className="comicNoise" />
      <div className="halftone halfToneRight" />
      <div className="halftone halfToneLeft" />

      <div className="pageNumber">
        ISSUE 001 · THE DEVELOPER
      </div>

      <div className="heroContainer">
        {/* LEFT — portfolio identity */}
        <div className="heroCopy">
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -3 }}
            animate={{ opacity: 1, x: 0, rotate: -2 }}
            transition={{ duration: 0.6 }}
            className="locationCaption"
          >
            <span>ORIGIN</span>
            Ghaziabad, India
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="developerLabel">
              ANKUR TYAGI · FULL-STACK + AI DEVELOPER
            </div>

            <h1>
              I BUILD
              <br />
              <span>FOR THE WEB.</span>

              <em>
                THEN I MAKE
                <br />
                IT THINK.
              </em>
            </h1>

            <p className="heroDescription">
              I build complete digital products — from responsive interfaces
              and backend systems to Python-powered RAG pipelines, retrieval
              systems and LLM integrations.
            </p>

            <HeroTechLabels />

            <div className="heroButtons">
              <Link to="/projects" className="primaryComicButton">
                EXPLORE MY WORK
                <span>↗</span>
              </Link>

              <a
                href="https://github.com/AnkurTyagi-09"
                target="_blank"
                rel="noreferrer"
                className="secondaryComicButton"
              >
                GITHUB ↗
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -4 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ delay: 0.5 }}
            className="speechBubble"
          >
            <div className="speechTail" />

            <span>MY STACK?</span>

            <strong>
              UI → BACKEND → DATA
              <br />
              → RETRIEVAL → AI
            </strong>
          </motion.div>
        </div>

        {/* RIGHT — comic panels */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.18 }}
          className="heroVisual"
        >
          <DeveloperMonolith />
        </motion.div>
      </div>

      <div className="continueStory">
        SCROLL TO CONTINUE
        <span>↓</span>
      </div>

      <style>{`
        .comicHero {
          min-height: 100vh;
          position: relative;
          overflow: hidden;

          padding:
            125px
            clamp(1.3rem, 5vw, 4.5rem)
            80px;

          background: #111015;
          color: #f2ece5;
        }

        .comicHero::before {
          content: "";
          position: absolute;
          inset: 0;

          background:
            radial-gradient(
              circle at 78% 24%,
              rgba(149, 111, 169, 0.16),
              transparent 28%
            ),
            linear-gradient(
              120deg,
              rgba(93, 68, 104, 0.09),
              transparent 35%
            );

          pointer-events: none;
        }

        .comicNoise {
          position: absolute;
          inset: 0;

          opacity: 0.035;

          background-image:
            repeating-linear-gradient(
              0deg,
              #fff 0,
              #fff 1px,
              transparent 1px,
              transparent 5px
            );

          pointer-events: none;
        }

        .halftone {
          position: absolute;

          width: 430px;
          height: 430px;

          background-image:
            radial-gradient(
              circle,
              rgba(200, 169, 216, 0.55) 1px,
              transparent 1.5px
            );

          background-size: 10px 10px;

          mask-image:
            radial-gradient(
              circle,
              black,
              transparent 68%
            );

          opacity: 0.14;

          pointer-events: none;
        }

        .halfToneRight {
          right: -80px;
          top: 110px;
        }

        .halfToneLeft {
          left: -170px;
          bottom: -160px;
          opacity: 0.07;
        }

        .pageNumber {
          position: absolute;

          top: 95px;
          right: clamp(1.3rem, 5vw, 4.5rem);

          font-family: var(--font-mono);
          font-size: 8px;

          letter-spacing: 2px;

          color: #625c68;
        }

        .heroContainer {
          position: relative;
          z-index: 2;

          max-width: 1320px;
          width: 100%;

          margin: auto;

          display: grid;

          grid-template-columns:
            minmax(0, 0.86fr)
            minmax(520px, 1.14fr);

          align-items: center;

          gap: clamp(45px, 6vw, 100px);
        }

        .heroCopy {
          position: relative;
        }

        .locationCaption {
          width: fit-content;

          padding: 10px 14px;

          margin-bottom: 30px;

          background: #e1d0a1;
          color: #1c171d;

          border: 2px solid #211b22;

          box-shadow:
            6px 6px 0
            rgba(0, 0, 0, 0.32);

          font-family: var(--font-mono);
          font-size: 9px;

          letter-spacing: 1px;
        }

        .locationCaption span {
          display: block;

          margin-bottom: 4px;

          font-size: 6px;
          letter-spacing: 1.8px;

          opacity: 0.55;
        }

        .developerLabel {
          margin-bottom: 18px;

          color: #8e8793;

          font-family: var(--font-mono);
          font-size: 9px;

          letter-spacing: 1.8px;
        }

        .heroCopy h1 {
          margin: 0 0 28px;

          font-family: var(--font-display);

          font-size:
            clamp(3.4rem, 6.2vw, 6.2rem);

          line-height: 0.88;

          letter-spacing: -0.055em;

          color: #f1ece5;

          font-weight: 800;
        }

        .heroCopy h1 > span {
          color: #f1ece5;
        }

        .heroCopy h1 em {
          display: block;

          margin-top: 14px;

          color: #ae94c1;

          font-family: Georgia, serif;

          font-style: italic;

          font-weight: 500;

          line-height: 0.94;
        }

        .heroDescription {
          max-width: 570px;

          margin: 0 0 24px;

          color: #aaa3ad;

          font-size: 1rem;

          line-height: 1.78;
        }

        .heroButtons {
          margin-top: 32px;

          display: flex;

          gap: 13px;

          flex-wrap: wrap;
        }

        .primaryComicButton,
        .secondaryComicButton {
          min-height: 48px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 14px;

          padding: 0 20px;

          text-decoration: none;

          font-family: var(--font-mono);

          font-size: 9px;

          letter-spacing: 1.4px;

          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .primaryComicButton {
          background: #f0ebe3;

          color: #181419;

          border: 2px solid #1d181f;

          box-shadow:
            6px 6px 0
            #6d5676;
        }

        .primaryComicButton:hover {
          transform:
            translate(-2px, -2px);

          box-shadow:
            9px 9px 0
            #6d5676;
        }

        .secondaryComicButton {
          color: #c4bdc8;

          border:
            1px solid
            rgba(255,255,255,0.13);

          background:
            rgba(255,255,255,0.025);
        }

        .speechBubble {
          position: relative;

          width:
            min(360px, 85%);

          margin:
            46px 0 0 25px;

          padding:
            14px 18px;

          background: #17151b;

          border:
            1px solid
            rgba(255,255,255,0.14);

          box-shadow:
            8px 8px 0
            rgba(112, 81, 126, 0.28);
        }

        .speechBubble > span {
          display: block;

          margin-bottom: 7px;

          color: #6e6873;

          font-family:
            var(--font-mono);

          font-size: 6px;

          letter-spacing: 1.5px;
        }

        .speechBubble strong {
          color: #c8bfcb;

          font-family:
            var(--font-mono);

          font-size: 9px;

          line-height: 1.7;

          letter-spacing: 0.8px;
        }

        .speechTail {
          position: absolute;

          width: 20px;
          height: 20px;

          bottom: -11px;
          left: 24px;

          background: #17151b;

          border-right:
            1px solid
            rgba(255,255,255,0.14);

          border-bottom:
            1px solid
            rgba(255,255,255,0.14);

          transform:
            rotate(45deg);
        }

        .heroVisual {
          min-height: 610px;

          height: 72vh;

          max-height: 740px;
        }

        .continueStory {
          position: absolute;

          z-index: 4;

          bottom: 24px;
          left: 50%;

          transform:
            translateX(-50%);

          display: flex;

          align-items: center;

          gap: 12px;

          color: #625c67;

          font-family:
            var(--font-mono);

          font-size: 7px;

          letter-spacing: 1.8px;
        }

        @media(max-width: 1020px) {

          .heroContainer {
            grid-template-columns:
              1fr;
          }

          .heroVisual {
            min-height: 520px;
            height: 570px;
          }
        }

        @media(max-width: 640px) {

          .comicHero {
            padding-top: 105px;
          }

          .heroCopy h1 {
            font-size:
              clamp(
                3rem,
                15vw,
                4.4rem
              );
          }

          .heroVisual {
            min-height: 440px;
            height: 470px;
          }

          .continueStory {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}