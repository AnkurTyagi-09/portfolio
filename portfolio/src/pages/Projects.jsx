import { PROJECTS } from "../data";
import ProjectMonolith from "../components/projects/ProjectMonolith";

export default function Projects() {
  return (
    <main className="projectArchive">
      <div className="archiveHalftone archiveDotsOne" />
      <div className="archiveHalftone archiveDotsTwo" />

      <section className="archiveIntro">
        <div className="archiveEyebrow">
          ISSUE 004 / THE BUILDS
        </div>

        <div className="archiveNarrator">
          <span>NARRATOR</span>
          The portfolio is the story. These are the chapters where the ideas
          became actual software.
        </div>

        <div className="archiveTitleRow">
          <h1>
            SELECTED
            <em>PROJECTS.</em>
          </h1>

          <div className="archiveNote">
            <small>ARCHIVE NOTE</small>
            <strong>
              Not a gallery.
              <br />
              A record of what I built.
            </strong>
          </div>
        </div>

        <div className="archiveMeta">
          <span>
            {String(PROJECTS.length).padStart(2, "0")} CASE FILES
          </span>

          <a
            href="https://github.com/AnkurTyagi-09"
            target="_blank"
            rel="noreferrer"
          >
            FULL GITHUB ARCHIVE ↗
          </a>
        </div>
      </section>

      <section className="projectStoryList">
        {PROJECTS.map((project, index) => (
          <ProjectMonolith
            key={project.title}
            p={project}
            index={index}
            featured={index === 0}
            reverse={index % 2 === 1}
          />
        ))}
      </section>

      <section className="archiveOutro">
        <div>
          <span>NEXT ISSUE</span>
          <strong>
            More builds are always in progress.
          </strong>
        </div>

        <a
          href="https://github.com/AnkurTyagi-09"
          target="_blank"
          rel="noreferrer"
        >
          SEE WHAT I'M BUILDING NOW ↗
        </a>
      </section>

      <style>{`
        .projectArchive {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          padding: 132px clamp(1.3rem,5vw,4rem) 90px;
          background: #0f0e13;
          color: #eee8ef;
        }

        .archiveHalftone {
          position: absolute;
          width: 430px;
          height: 430px;
          opacity: .07;
          background-image:
            radial-gradient(circle,#bea8cb 1px,transparent 1.5px);
          background-size: 10px 10px;
          mask-image: radial-gradient(circle,black,transparent 70%);
          pointer-events: none;
        }

        .archiveDotsOne {
          right: -100px;
          top: 90px;
        }

        .archiveDotsTwo {
          left: -180px;
          top: 780px;
          opacity: .045;
        }

        .archiveIntro,
        .projectStoryList,
        .archiveOutro {
          position: relative;
          z-index: 2;
          max-width: 1220px;
          margin-left: auto;
          margin-right: auto;
        }

        .archiveIntro {
          margin-bottom: 34px;
        }

        .archiveEyebrow {
          margin-bottom: 18px;
          color: #756e79;
          font-family: var(--font-mono);
          font-size: 7px;
          letter-spacing: 1.8px;
        }

        .archiveNarrator {
          width: fit-content;
          max-width: 610px;
          margin-bottom: 27px;
          padding: 11px 14px;
          background: #ddcfa3;
          color: #211b22;
          border: 1.5px solid #29222a;
          box-shadow: 6px 6px 0 rgba(80,58,86,.24);
          font-size: .88rem;
          line-height: 1.6;
          transform: rotate(-.6deg);
        }

        .archiveNarrator span {
          display: block;
          margin-bottom: 4px;
          color: #756746;
          font-family: var(--font-mono);
          font-size: 5.5px;
          letter-spacing: 1.2px;
        }

        .archiveTitleRow {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 38px;
          align-items: end;
        }

        .archiveTitleRow h1 {
          margin: 0;
          color: #f0e9ef;
          font-family: var(--font-display);
          font-size: clamp(4rem, 8vw, 7.7rem);
          line-height: .84;
          letter-spacing: -.06em;
        }

        .archiveTitleRow h1 em {
          display: block;
          margin-top: 13px;
          color: #ae95c1;
          font-family: Georgia, serif;
          font-weight: 500;
        }

        .archiveNote {
          max-width: 230px;
          margin-bottom: 8px;
          padding: 15px;
          color: #c6bdc9;
          border: 1px solid rgba(255,255,255,.1);
          background: #17151b;
          box-shadow: 6px 6px 0 rgba(78,57,84,.2);
          transform: rotate(1.2deg);
        }

        .archiveNote small {
          display: block;
          margin-bottom: 8px;
          color: #655f69;
          font-family: var(--font-mono);
          font-size: 5.5px;
          letter-spacing: 1.2px;
        }

        .archiveNote strong {
          font-family: Georgia, serif;
          font-size: .9rem;
          font-style: italic;
          font-weight: 500;
          line-height: 1.45;
        }

        .archiveMeta {
          margin-top: 30px;
          padding: 13px 0;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          border-top: 1px solid rgba(255,255,255,.08);
          border-bottom: 1px solid rgba(255,255,255,.08);
          color: #6d6671;
          font-family: var(--font-mono);
          font-size: 6px;
          letter-spacing: 1.2px;
        }

        .archiveMeta a {
          color: #8e8195;
          text-decoration: none;
        }

        .archiveOutro {
          margin-top: 70px;
          padding: 25px 0 0;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 26px;
          border-top: 1px solid rgba(255,255,255,.08);
        }

        .archiveOutro span {
          display: block;
          margin-bottom: 6px;
          color: #625c67;
          font-family: var(--font-mono);
          font-size: 6px;
          letter-spacing: 1.3px;
        }

        .archiveOutro strong {
          color: #bdb5c0;
          font-family: Georgia, serif;
          font-size: 1.15rem;
          font-style: italic;
          font-weight: 500;
        }

        .archiveOutro a {
          color: #ae95c1;
          font-family: var(--font-mono);
          font-size: 7px;
          letter-spacing: 1.1px;
          text-decoration: none;
        }

        @media(max-width: 760px) {
          .archiveTitleRow {
            grid-template-columns: 1fr;
          }

          .archiveNote {
            margin-top: 8px;
          }

          .archiveOutro {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}
