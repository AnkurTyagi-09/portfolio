import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PythonService from "./PythonService";

const STAGES = [
  {
    id:"docs",
    no:"01",
    title:"DOCUMENTS",
    text:"Raw knowledge enters the story — PDFs, text files or structured application data.",
  },
  {
    id:"chunks",
    no:"02",
    title:"CHUNKS",
    text:"Large documents are divided into smaller semantic units that can be retrieved later.",
  },
  {
    id:"embed",
    no:"03",
    title:"EMBEDDINGS",
    text:"Each chunk is transformed into a vector representation of its meaning.",
  },
  {
    id:"retrieve",
    no:"04",
    title:"RETRIEVAL",
    text:"The question searches the vector store and brings back the most relevant context.",
  },
  {
    id:"llm",
    no:"05",
    title:"LLM",
    text:"The model generates its answer using the retrieved context instead of working from the prompt alone.",
  },
];

export default function RagJourney() {
  const [active, setActive] = useState("retrieve");
  const current = STAGES.find((stage) => stage.id === active);

  return (
    <section className="ragStorySection">
      <div className="ragStoryDots" />

      <div className="ragStoryInner">
        <header className="ragStoryHeader">
          <div className="ragIssue">ISSUE 003 / THE INTELLIGENCE LAYER</div>

          <h2>
            THE ANSWER
            <em>IS THE LAST PANEL.</em>
          </h2>

          <p>
            A useful RAG system is a sequence of decisions before generation:
            ingest, split, embed, retrieve, assemble context, then ask the model.
          </p>
        </header>

        <div className="ragComicPage">
          <div className="ragPageTop">
            <span>PIPELINE / RAG_001</span>
            <span>INTERACTIVE CASE FILE</span>
          </div>

          <div className="ragStageGrid">
            {STAGES.map((stage,index) => (
              <motion.button
                type="button"
                key={stage.id}
                onMouseEnter={() => setActive(stage.id)}
                onFocus={() => setActive(stage.id)}
                whileHover={{
                  y: -4,
                  rotate: index % 2 ? .35 : -.35,
                }}
                className={`ragStagePanel ${active === stage.id ? "active" : ""}`}
              >
                <span>{stage.no}</span>
                <strong>{stage.title}</strong>
                <small>{index < STAGES.length - 1 ? "→" : "✓"}</small>
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 7, rotate: -.5 }}
              animate={{ opacity: 1, y: 0, rotate: -.3 }}
              exit={{ opacity: 0, y: -7 }}
              transition={{ duration: .26 }}
              className="ragNarratorBox"
            >
              <span>NARRATOR / {current.title}</span>
              {current.text}
            </motion.div>
          </AnimatePresence>

          <div className="ragStoryBottom">
            <div className="ragCapabilities">
              {[
                "Python",
                "RAG",
                "Embeddings",
                "Vector Search",
                "LLM APIs",
                "Semantic Retrieval",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <PythonService />
          </div>
        </div>
      </div>

      <style>{`
        .ragStorySection {
          position: relative;
          overflow: hidden;
          padding: clamp(6rem,10vw,9rem) clamp(1.3rem,5vw,4rem);
          background: #0e0d12;
          color: #eee8ef;
          border-top: 2px solid #211c23;
        }

        .ragStoryDots {
          position: absolute;
          left: -110px;
          top: 90px;
          width: 420px;
          height: 420px;
          opacity: .08;
          background-image:
            radial-gradient(circle,#bea8cd 1px,transparent 1.5px);
          background-size: 10px 10px;
          mask-image: radial-gradient(circle,black,transparent 70%);
        }

        .ragStoryInner {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          margin: auto;
        }

        .ragStoryHeader {
          margin-bottom: 42px;
        }

        .ragIssue {
          margin-bottom: 16px;
          color: #746d78;
          font-family: var(--font-mono);
          font-size: 7px;
          letter-spacing: 1.8px;
        }

        .ragStoryHeader h2 {
          margin: 0 0 18px;
          font-family: var(--font-display);
          font-size: clamp(2.9rem,5vw,4.9rem);
          line-height: .94;
          letter-spacing: -.055em;
        }

        .ragStoryHeader h2 em {
          display: block;
          margin-top: 8px;
          color: #b099c2;
          font-family: Georgia, serif;
          font-weight: 500;
        }

        .ragStoryHeader p {
          max-width: 670px;
          margin: 0;
          color: #9f98a3;
          line-height: 1.75;
        }

        .ragComicPage {
          padding: 14px;
          background: #e9e0d5;
          color: #1f1921;
          border: 2px solid #261f27;
          box-shadow: 14px 16px 0 rgba(0,0,0,.25);
          transform: rotate(-.35deg);
        }

        .ragPageTop {
          padding: 4px 4px 11px;
          display: flex;
          justify-content: space-between;
          color: #706673;
          font-family: var(--font-mono);
          font-size: 6px;
          letter-spacing: 1.4px;
        }

        .ragStageGrid {
          display: grid;
          grid-template-columns: repeat(5,1fr);
          gap: 8px;
        }

        .ragStagePanel {
          min-height: 126px;
          position: relative;
          padding: 14px;
          text-align: left;
          background: #151319;
          color: #c9c0cc;
          border: 2px solid #292229;
          cursor: pointer;
          overflow: hidden;
        }

        .ragStagePanel::after {
          content: "";
          position: absolute;
          right: -40px;
          top: -40px;
          width: 120px;
          height: 120px;
          opacity: .07;
          background-image:
            radial-gradient(circle,#c7b0d0 1px,transparent 1.4px);
          background-size: 9px 9px;
        }

        .ragStagePanel.active {
          background: #211923;
          border-color: #8d6f9b;
        }

        .ragStagePanel > span {
          display: block;
          margin-bottom: 44px;
          color: #5e5661;
          font-family: var(--font-mono);
          font-size: 6px;
        }

        .ragStagePanel strong {
          display: block;
          color: #e9e1ea;
          font-family: var(--font-mono);
          font-size: 7px;
          letter-spacing: .9px;
        }

        .ragStagePanel small {
          position: absolute;
          right: 11px;
          bottom: 9px;
          color: #655b69;
        }

        .ragNarratorBox {
          margin-top: 10px;
          padding: 12px 14px;
          background: #ddcfa3;
          border: 1.5px solid #2a232b;
          color: #211a22;
          font-size: .86rem;
          line-height: 1.6;
        }

        .ragNarratorBox span {
          display: block;
          margin-bottom: 4px;
          color: #776746;
          font-family: var(--font-mono);
          font-size: 5.7px;
          letter-spacing: 1.2px;
        }

        .ragStoryBottom {
          margin-top: 15px;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 24px;
          align-items: end;
        }

        .ragCapabilities {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .ragCapabilities span {
          padding: 6px 8px;
          background: #151319;
          color: #837b87;
          border: 1px solid rgba(255,255,255,.09);
          font-family: var(--font-mono);
          font-size: 6.5px;
          letter-spacing: .8px;
          text-transform: uppercase;
        }

        @media(max-width:860px) {
          .ragStageGrid {
            grid-template-columns: 1fr 1fr;
          }

          .ragStoryBottom {
            grid-template-columns: 1fr;
          }

          .ragComicPage {
            transform: none;
          }
        }

        @media(max-width:520px) {
          .ragStageGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
