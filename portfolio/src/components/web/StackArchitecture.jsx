import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StackNode from "./StackNode";

const NODES = [
  {
    id: "interface",
    number: "01",
    label: "THE INTERFACE",
    sub: "React · Next.js",
    detail:
      "The first panel the user sees — responsive components, clean interaction states and product-focused UI.",
  },
  {
    id: "backend",
    number: "02",
    label: "BEHIND THE BUTTON",
    sub: "Node.js · Express · REST APIs",
    detail:
      "A click becomes a request, then moves through routes, services, authentication and business logic.",
  },
  {
    id: "data",
    number: "03",
    label: "THE MEMORY",
    sub: "PostgreSQL · MongoDB · Supabase",
    detail:
      "The system remembers — application data, persistence, queries, indexing and access control.",
  },
  {
    id: "ai",
    number: "04",
    label: "THE INTELLIGENCE",
    sub: "Python · RAG · LLMs",
    detail:
      "Stored knowledge becomes useful context through retrieval, embeddings and model orchestration.",
  },
];

export default function StackArchitecture() {
  const [active, setActive] = useState("interface");
  const current = NODES.find((node) => node.id === active);

  return (
    <section className="stackComicSection">
      <div className="stackHalftone" />

      <div className="stackComicInner">
        <div className="stackStoryCopy">
          <div className="stackIssue">ISSUE 002 / HOW I BUILD</div>

          <h2>
            THE SCREEN
            <em>IS ONLY PANEL ONE.</em>
          </h2>

          <p>
            I work across the product stack, so I care about what happens
            after the user clicks, submits, searches or asks a question.
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8, rotate: -1 }}
              animate={{ opacity: 1, y: 0, rotate: -0.6 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
              className="stackNarrator"
            >
              <span>NARRATOR / {current.label}</span>
              {current.detail}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="stackPageWrap">
          <div className="stackBackPage" />

          <div className="stackComicPage">
            <div className="stackPageHeader">
              <span>PRODUCT ARCHITECTURE</span>
              <span>CASE FILE 002</span>
            </div>

            <div className="stackNodeGrid">
              {NODES.map((node, index) => (
                <StackNode
                  key={node.id}
                  node={node}
                  index={index}
                  active={active}
                  onEnter={setActive}
                />
              ))}
            </div>

            <div className="stackPageCaption">
              <span>FLOW</span>
              <strong>
                Interface → Backend → Data → Intelligence
              </strong>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .stackComicSection {
          position: relative;
          overflow: hidden;
          padding: clamp(6rem,10vw,9rem) clamp(1.3rem,5vw,4rem);
          background: #111015;
          color: #eee8ef;
        }

        .stackHalftone {
          position: absolute;
          right: -100px;
          top: 60px;
          width: 430px;
          height: 430px;
          opacity: .08;
          background-image:
            radial-gradient(circle, #c4afcf 1px, transparent 1.5px);
          background-size: 10px 10px;
          mask-image: radial-gradient(circle, black, transparent 70%);
        }

        .stackComicInner {
          position: relative;
          z-index: 2;
          max-width: 1220px;
          margin: auto;
          display: grid;
          grid-template-columns: .78fr 1.22fr;
          gap: clamp(48px,7vw,100px);
          align-items: center;
        }

        .stackIssue {
          margin-bottom: 18px;
          color: #756f79;
          font-family: var(--font-mono);
          font-size: 7px;
          letter-spacing: 1.8px;
        }

        .stackStoryCopy h2 {
          margin: 0 0 22px;
          color: #f0e9ef;
          font-family: var(--font-display);
          font-size: clamp(2.9rem,5vw,4.8rem);
          line-height: .94;
          letter-spacing: -.055em;
        }

        .stackStoryCopy h2 em {
          display: block;
          margin-top: 8px;
          color: #ae95c1;
          font-family: Georgia, serif;
          font-weight: 500;
        }

        .stackStoryCopy > p {
          max-width: 500px;
          margin: 0 0 28px;
          color: #9d96a1;
          line-height: 1.75;
          font-size: .96rem;
        }

        .stackNarrator {
          max-width: 470px;
          padding: 13px 15px;
          background: #ddcfa3;
          color: #201a21;
          border: 1.5px solid #2a232b;
          box-shadow: 6px 6px 0 rgba(84,61,90,.24);
          line-height: 1.65;
          font-size: .86rem;
        }

        .stackNarrator span {
          display: block;
          margin-bottom: 4px;
          color: #766747;
          font-family: var(--font-mono);
          font-size: 5.5px;
          letter-spacing: 1.2px;
        }

        .stackPageWrap {
          position: relative;
          min-height: 540px;
          display: grid;
          place-items: center;
          perspective: 1300px;
        }

        .stackBackPage {
          position: absolute;
          width: 82%;
          height: 78%;
          background: #17151b;
          border: 1px solid rgba(255,255,255,.06);
          transform: rotate(3deg) translate(24px,18px);
          opacity: .65;
        }

        .stackComicPage {
          position: relative;
          width: 91%;
          padding: 12px;
          background: #e8dfd4;
          border: 2px solid #292229;
          box-shadow: 14px 16px 0 rgba(0,0,0,.25);
          transform: rotate(-.5deg);
        }

        .stackPageHeader {
          padding: 4px 4px 10px;
          display: flex;
          justify-content: space-between;
          color: #716775;
          font-family: var(--font-mono);
          font-size: 6px;
          letter-spacing: 1.3px;
        }

        .stackNodeGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 9px;
        }

        .stackPageCaption {
          margin-top: 9px;
          min-height: 42px;
          padding: 8px 11px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          background: #ddcfa3;
          border: 1px solid #2b242c;
          color: #211b22;
        }

        .stackPageCaption span {
          color: #786a4b;
          font-family: var(--font-mono);
          font-size: 5.5px;
          letter-spacing: 1.1px;
        }

        .stackPageCaption strong {
          text-align: right;
          font-size: 9px;
        }

        @media(max-width:900px) {
          .stackComicInner {
            grid-template-columns: 1fr;
          }
        }

        @media(max-width:560px) {
          .stackNodeGrid {
            grid-template-columns: 1fr;
          }

          .stackComicPage {
            width: 100%;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
