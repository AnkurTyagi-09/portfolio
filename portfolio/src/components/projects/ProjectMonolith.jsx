import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function getStory(p) {
  return {
    problem: p.problem || p.desc,
    build:
      p.build ||
      `Built using ${p.tags.slice(0, 4).join(", ")}${
        p.tags.length > 4 ? " and supporting tools" : ""
      }.`,
    result:
      p.result ||
      "A working project that demonstrates the product idea, architecture and implementation.",
  };
}

function TechStrip({ tags }) {
  return (
    <div className="projectTechStrip">
      {tags.map((tag, index) => (
        <span key={tag}>
          <small>{String(index + 1).padStart(2, "0")}</small>
          {tag}
        </span>
      ))}
    </div>
  );
}

export default function ProjectMonolith({
  p,
  index,
  featured = false,
  reverse = false,
}) {
  const [open, setOpen] = useState(false);
  const story = useMemo(() => getStory(p), [p]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`projectStory ${featured ? "featured" : ""} ${
        reverse ? "reverse" : ""
      }`}
    >
      <div className="projectStoryTop">
        <span>
          CASE FILE {String(index + 1).padStart(2, "0")}
        </span>
        <span>{p.period}</span>
      </div>

      <div className="projectSpread">
        <section className="projectNarrative">
          <div className="projectType">
            {featured ? "FEATURED BUILD" : "SELECTED BUILD"}
          </div>

          <h2>{p.title}</h2>

          <div className="narratorCard">
            <small>NARRATOR</small>
            <p>{p.desc}</p>
          </div>

          <div className="projectMetaGrid">
            <div>
              <span>ROLE</span>
              <strong>Developer</strong>
            </div>

            <div>
              <span>FOCUS</span>
              <strong>
                {p.tags.slice(0, 2).join(" + ")}
              </strong>
            </div>
          </div>

          <TechStrip tags={p.tags} />

          <div className="projectLinks">
            <button type="button" onClick={() => setOpen((v) => !v)}>
              {open ? "CLOSE STORY" : "READ CASE STORY"} <span>↘</span>
            </button>

            {p.link !== "#" && (
              <a href={p.link} target="_blank" rel="noreferrer">
                OPEN PROJECT ↗
              </a>
            )}
          </div>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: 8 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -6 }}
                transition={{ duration: 0.35 }}
                className="caseStoryDetails"
              >
                {[
                  ["01 / THE PROBLEM", story.problem],
                  ["02 / THE BUILD", story.build],
                  ["03 / THE RESULT", story.result],
                ].map(([label, value]) => (
                  <div className="caseStoryRow" key={label}>
                    <span>{label}</span>
                    <p>{value}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        <section className="projectVisualStory">
          <div className="paperBack paperBackOne" />
          <div className="paperBack paperBackTwo" />

          <motion.div
            className="projectComicSpread"
            whileHover={{
              rotateX: featured ? 1 : 0.7,
              rotateY: reverse ? -1.4 : 1.4,
              y: -4,
            }}
            transition={{ duration: 0.25 }}
          >
            <div className="visualIssueBar">
              <span>PROJECT / {String(index + 1).padStart(2, "0")}</span>
              <span>ANKUR.DEV</span>
            </div>

            <div className="visualGrid">
              <div className="visualMainPanel">
                <div className="visualHalftone" />

                <div className="visualPanelIndex">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="visualMainCopy">
                  <small>{featured ? "MAIN FEATURE" : "BUILD"}</small>
                  <strong>{p.title}</strong>
                  <span>
                    {p.tags.slice(0, 3).join(" / ")}
                  </span>
                </div>
              </div>

              <div className="visualSidePanel architecturePanel">
                <div className="miniPanelLabel">
                  SYSTEM
                </div>

                {[
                  "UI",
                  "API",
                  "DATA",
                  "AI",
                ].map((item, i) => (
                  <div
                    key={item}
                    className={`architectureStep ${
                      i <= Math.min(3, p.tags.length - 1) ? "on" : ""
                    }`}
                  >
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <strong>{item}</strong>
                  </div>
                ))}
              </div>

              <div className="visualSidePanel quotePanel">
                <div className="quoteMark">“</div>
                <p>
                  {featured
                    ? "A project should show how I think, not just what I can style."
                    : "Each build adds another layer to the story."}
                </p>
              </div>

              <div className="visualCaption">
                <span>CURRENT STACK</span>
                <strong>{p.tags.slice(0, 4).join(" · ")}</strong>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      <style>{`
        .projectStory {
          padding: clamp(4.5rem, 8vw, 7rem) 0;
          border-bottom: 1px solid rgba(255,255,255,.08);
        }

        .projectStoryTop {
          margin-bottom: 18px;
          display: flex;
          justify-content: space-between;
          gap: 16px;
          color: #6e6872;
          font-family: var(--font-mono);
          font-size: 6px;
          letter-spacing: 1.5px;
        }

        .projectSpread {
          display: grid;
          grid-template-columns: .84fr 1.16fr;
          gap: clamp(42px, 6vw, 90px);
          align-items: center;
        }

        .projectStory.reverse .projectNarrative {
          order: 2;
        }

        .projectStory.reverse .projectVisualStory {
          order: 1;
        }

        .projectType {
          width: fit-content;
          margin-bottom: 18px;
          padding: 6px 8px;
          color: #201a21;
          background: #ddcfa3;
          border: 1px solid #2a232b;
          box-shadow: 4px 4px 0 rgba(83,60,89,.22);
          font-family: var(--font-mono);
          font-size: 6px;
          letter-spacing: 1.2px;
          transform: rotate(-1deg);
        }

        .projectNarrative h2 {
          margin: 0 0 24px;
          max-width: 540px;
          color: #f0e9ef;
          font-family: var(--font-display);
          font-size: clamp(2.8rem, 5vw, 5rem);
          line-height: .92;
          letter-spacing: -.055em;
        }

        .projectStory.featured .projectNarrative h2 {
          font-size: clamp(3.2rem, 5.8vw, 5.8rem);
        }

        .narratorCard {
          max-width: 510px;
          margin-bottom: 26px;
          padding: 13px 15px;
          color: #211b22;
          background: #e0d3aa;
          border: 1.5px solid #2a232b;
          box-shadow: 6px 6px 0 rgba(82,58,87,.24);
          transform: rotate(-.6deg);
        }

        .narratorCard small {
          display: block;
          margin-bottom: 5px;
          color: #776847;
          font-family: var(--font-mono);
          font-size: 5.5px;
          letter-spacing: 1.2px;
        }

        .narratorCard p {
          margin: 0;
          font-size: .88rem;
          line-height: 1.65;
        }

        .projectMetaGrid {
          max-width: 480px;
          margin-bottom: 22px;
          padding: 15px 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid rgba(255,255,255,.08);
          border-bottom: 1px solid rgba(255,255,255,.08);
        }

        .projectMetaGrid div + div {
          padding-left: 20px;
          border-left: 1px solid rgba(255,255,255,.08);
        }

        .projectMetaGrid span {
          display: block;
          margin-bottom: 5px;
          color: #5e5862;
          font-family: var(--font-mono);
          font-size: 5.5px;
          letter-spacing: 1.2px;
        }

        .projectMetaGrid strong {
          color: #bbb4be;
          font-size: .82rem;
          font-weight: 500;
        }

        .projectTechStrip {
          max-width: 510px;
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .projectTechStrip > span {
          display: inline-flex;
          gap: 7px;
          align-items: center;
          padding: 6px 8px;
          color: #827a86;
          border: 1px solid rgba(255,255,255,.09);
          background: rgba(255,255,255,.018);
          font-family: var(--font-mono);
          font-size: 6.5px;
          letter-spacing: .8px;
          text-transform: uppercase;
        }

        .projectTechStrip small {
          color: #504a54;
          font-size: 5px;
        }

        .projectLinks {
          margin-top: 26px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .projectLinks button,
        .projectLinks a {
          border: 0;
          padding: 0;
          background: none;
          color: #b398c6;
          font-family: var(--font-mono);
          font-size: 7px;
          letter-spacing: 1.2px;
          text-decoration: none;
          cursor: pointer;
        }

        .projectLinks a {
          color: #7b7480;
        }

        .caseStoryDetails {
          max-width: 520px;
          margin-top: 26px;
          overflow: hidden;
          background: #17151b;
          border: 1px solid rgba(255,255,255,.08);
        }

        .caseStoryRow {
          padding: 15px 16px;
        }

        .caseStoryRow + .caseStoryRow {
          border-top: 1px solid rgba(255,255,255,.07);
        }

        .caseStoryRow span {
          color: #ae95c1;
          font-family: var(--font-mono);
          font-size: 6px;
          letter-spacing: 1.1px;
        }

        .caseStoryRow p {
          margin: 6px 0 0;
          color: #9e97a2;
          font-size: .84rem;
          line-height: 1.65;
        }

        .projectVisualStory {
          position: relative;
          min-height: 520px;
          display: grid;
          place-items: center;
          perspective: 1400px;
        }

        .paperBack {
          position: absolute;
          width: 82%;
          height: 78%;
          background: #17151b;
          border: 1px solid rgba(255,255,255,.06);
        }

        .paperBackOne {
          transform: translate(27px, 22px) rotate(3deg);
          opacity: .48;
        }

        .paperBackTwo {
          transform: translate(13px, 11px) rotate(1.5deg);
          opacity: .7;
        }

        .projectComicSpread {
          width: 92%;
          padding: 11px;
          background: #e9e0d5;
          border: 2px solid #292229;
          box-shadow:
            15px 18px 0 rgba(0,0,0,.25),
            0 50px 90px rgba(0,0,0,.24);
          transform-style: preserve-3d;
        }

        .visualIssueBar {
          min-height: 26px;
          padding: 0 4px 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #6d6370;
          font-family: var(--font-mono);
          font-size: 5.5px;
          letter-spacing: 1.2px;
        }

        .visualGrid {
          display: grid;
          grid-template-columns: 1.28fr .72fr;
          grid-template-rows: 1fr 1fr auto;
          gap: 8px;
        }

        .visualMainPanel,
        .visualSidePanel {
          position: relative;
          overflow: hidden;
          border: 2px solid #292229;
          background: #131117;
        }

        .visualMainPanel {
          grid-row: 1 / 3;
          min-height: 360px;
          padding: 28px;
          display: flex;
          align-items: flex-end;
          background:
            linear-gradient(145deg, rgba(154,124,172,.16), transparent 54%),
            #121015;
        }

        .visualHalftone {
          position: absolute;
          right: -30px;
          top: -30px;
          width: 260px;
          height: 260px;
          opacity: .13;
          background-image:
            radial-gradient(circle,#c7b0d0 1px,transparent 1.5px);
          background-size: 9px 9px;
          mask-image: radial-gradient(circle,black,transparent 70%);
        }

        .visualPanelIndex {
          position: absolute;
          left: 20px;
          top: 18px;
          color: #4e4853;
          font-family: var(--font-mono);
          font-size: 7px;
        }

        .visualMainCopy {
          position: relative;
          z-index: 2;
        }

        .visualMainCopy small {
          display: block;
          margin-bottom: 8px;
          color: #6e6772;
          font-family: var(--font-mono);
          font-size: 6px;
          letter-spacing: 1.1px;
        }

        .visualMainCopy strong {
          display: block;
          color: #eee8ef;
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 3.4vw, 3rem);
          line-height: .95;
          letter-spacing: -.04em;
        }

        .visualMainCopy span {
          display: block;
          margin-top: 10px;
          color: #857d89;
          font-family: var(--font-mono);
          font-size: 6px;
          letter-spacing: .8px;
        }

        .architecturePanel {
          min-height: 170px;
          padding: 38px 12px 12px;
        }

        .miniPanelLabel {
          position: absolute;
          top: 8px;
          left: 8px;
          padding: 4px 6px;
          background: #ddcfa3;
          color: #211b22;
          border: 1px solid #292229;
          font-family: var(--font-mono);
          font-size: 5px;
          letter-spacing: .8px;
        }

        .architectureStep {
          min-height: 27px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #5f5863;
          border-bottom: 1px solid rgba(255,255,255,.06);
          font-family: var(--font-mono);
        }

        .architectureStep span {
          font-size: 5px;
        }

        .architectureStep strong {
          font-size: 6px;
          letter-spacing: .6px;
        }

        .architectureStep.on {
          color: #b79fca;
        }

        .quotePanel {
          min-height: 170px;
          padding: 20px 14px 14px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          background:
            linear-gradient(145deg, rgba(177,151,198,.12), transparent),
            #17151b;
        }

        .quoteMark {
          position: absolute;
          top: 2px;
          left: 10px;
          color: #6d5975;
          font-family: Georgia, serif;
          font-size: 42px;
          line-height: 1;
        }

        .quotePanel p {
          position: relative;
          z-index: 2;
          margin: 0;
          color: #c0b7c3;
          font-family: Georgia, serif;
          font-style: italic;
          font-size: .82rem;
          line-height: 1.45;
        }

        .visualCaption {
          grid-column: 1 / -1;
          min-height: 43px;
          padding: 8px 11px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          background: #ddcfa3;
          border: 1px solid #292229;
          color: #211b22;
        }

        .visualCaption span {
          color: #786a4b;
          font-family: var(--font-mono);
          font-size: 5.5px;
          letter-spacing: 1.1px;
        }

        .visualCaption strong {
          max-width: 70%;
          text-align: right;
          font-size: 8.5px;
        }

        @media(max-width: 900px) {
          .projectSpread {
            grid-template-columns: 1fr;
          }

          .projectStory.reverse .projectNarrative,
          .projectStory.reverse .projectVisualStory {
            order: unset;
          }
        }

        @media(max-width: 580px) {
          .projectVisualStory {
            min-height: 430px;
          }

          .projectComicSpread {
            width: 100%;
          }

          .visualGrid {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
          }

          .visualMainPanel {
            grid-row: auto;
            min-height: 230px;
          }

          .architecturePanel,
          .quotePanel {
            min-height: 130px;
          }

          .visualCaption {
            grid-column: auto;
          }
        }
      `}</style>
    </motion.article>
  );
}
