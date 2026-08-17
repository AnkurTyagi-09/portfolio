import { SKILLS, EDUCATION } from "../data";

export default function About() {
  return (
    <main className="aboutComicPage">
      <div className="aboutDots aboutDotsA" />
      <div className="aboutDots aboutDotsB" />

      <section className="aboutIntro">
        <div className="aboutIssue">CHARACTER FILE / ABOUT</div>

        <div className="aboutNarrator">
          <span>NARRATOR</span>
          Before the projects, pipelines and case files, there is the person
          who kept asking what happens one layer deeper.
        </div>

        <h1>
          ANKUR
          <em>TYAGI.</em>
        </h1>

        <p>
          Full-stack developer working across modern web products, backend
          systems and AI applications — with a focus on building complete,
          understandable systems rather than isolated screens.
        </p>
      </section>

      <section className="characterSpread">
        <div className="characterPage">
          <div className="characterPageHeader">
            <span>PROFILE / AT_001</span>
            <span>ANKUR.DEV</span>
          </div>

          <div className="characterGrid">
            <div className="characterMainPanel">
              <div className="characterHalftone" />

              <div className="characterStamp">
                DEVELOPER PROFILE
              </div>

              <div className="characterPortrait">
                <div className="portraitRing" />
                <div className="portraitCore">AT</div>
              </div>

              <div className="characterIdentity">
                <small>FULL-STACK + AI DEVELOPER</small>
                <strong>Ankur Tyagi</strong>
                <span>Ghaziabad, India</span>
              </div>
            </div>

            <div className="characterSidePanel storyPanel">
              <div className="miniLabel">THE STORY</div>

              <p>
                I started by building interfaces, then moved deeper into
                backend systems, databases and application architecture.
                That path eventually led into Python, retrieval systems,
                embeddings, RAG and LLM-powered products.
              </p>
            </div>

            <div className="characterSidePanel philosophyPanel">
              <div className="quoteMark">“</div>
              <p>
                I like understanding what happens after the button is clicked.
              </p>
            </div>

            <div className="characterBottomCaption">
              <span>CURRENT ARC</span>
              <strong>
                Web engineering → backend systems → AI applications
              </strong>
            </div>
          </div>
        </div>

        <aside className="aboutBioColumn">
          <div className="bioCaseNote">
            <span>CASE NOTE / 01</span>
            <h2>BUILDING ACROSS THE STACK.</h2>

            <p>
              I work with modern frontend technologies, backend APIs,
              databases and AI workflows. The goal is not to collect tools —
              it is to understand how each layer contributes to the product.
            </p>
          </div>

          <a
            href="mailto:tyagiank09@gmail.com"
            className="aboutContactButton"
          >
            START A CONVERSATION ↗
          </a>
        </aside>
      </section>

      <section className="skillsCaseSection">
        <div className="skillsSectionHeader">
          <span>CASE FILE / CAPABILITIES</span>
          <strong>THE TOOLKIT</strong>
        </div>

        <div className="skillsCaseGrid">
          {Object.entries(SKILLS).map(([category, items], index) => (
            <div
              key={category}
              className="skillCasePanel"
              style={{
                transform: `rotate(${index % 2 ? ".35deg" : "-.35deg"})`,
              }}
            >
              <div className="skillCaseTop">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span className="skillDot" />
              </div>

              <h3>{category}</h3>

              <div className="skillItems">
                {items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="educationCaseSection">
        <div className="educationHeader">
          <span>ARCHIVE / EDUCATION</span>
          <strong>EARLIER CHAPTERS</strong>
        </div>

        <div className="educationCaseGrid">
          {EDUCATION.map((item, index) => (
            <div key={item.degree} className="educationCase">
              <span className="educationNo">
                {String(index + 1).padStart(2, "0")}
              </span>

              <small>{item.year}</small>

              <h3>{item.degree}</h3>

              <p>{item.school}</p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .aboutComicPage {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          padding: 132px clamp(1.3rem,5vw,4rem) 90px;
          background: #0f0e13;
          color: #eee8ef;
        }

        .aboutDots {
          position: absolute;
          width: 430px;
          height: 430px;
          opacity: .06;
          background-image:
            radial-gradient(circle,#bea8cb 1px,transparent 1.5px);
          background-size: 10px 10px;
          mask-image: radial-gradient(circle,black,transparent 70%);
          pointer-events: none;
        }

        .aboutDotsA {
          right: -110px;
          top: 80px;
        }

        .aboutDotsB {
          left: -170px;
          top: 760px;
          opacity: .04;
        }

        .aboutIntro,
        .characterSpread,
        .skillsCaseSection,
        .educationCaseSection {
          position: relative;
          z-index: 2;
          max-width: 1220px;
          margin-left: auto;
          margin-right: auto;
        }

        .aboutIntro {
          margin-bottom: 48px;
        }

        .aboutIssue {
          margin-bottom: 17px;
          color: #756e79;
          font-family: var(--font-mono);
          font-size: 7px;
          letter-spacing: 1.8px;
        }

        .aboutNarrator {
          width: fit-content;
          max-width: 620px;
          margin-bottom: 26px;
          padding: 11px 14px;
          background: #ddcfa3;
          color: #211b22;
          border: 1.5px solid #29222a;
          box-shadow: 6px 6px 0 rgba(80,58,86,.24);
          font-size: .88rem;
          line-height: 1.6;
          transform: rotate(-.6deg);
        }

        .aboutNarrator span {
          display: block;
          margin-bottom: 4px;
          color: #756746;
          font-family: var(--font-mono);
          font-size: 5.5px;
          letter-spacing: 1.2px;
        }

        .aboutIntro h1 {
          margin: 0;
          color: #f0e9ef;
          font-family: var(--font-display);
          font-size: clamp(4rem,8vw,7.7rem);
          line-height: .84;
          letter-spacing: -.06em;
        }

        .aboutIntro h1 em {
          display: block;
          margin-top: 12px;
          color: #ae95c1;
          font-family: Georgia, serif;
          font-weight: 500;
        }

        .aboutIntro > p {
          max-width: 680px;
          margin: 28px 0 0;
          color: #9e97a2;
          font-size: 1rem;
          line-height: 1.75;
        }

        .characterSpread {
          display: grid;
          grid-template-columns: 1.15fr .85fr;
          gap: clamp(36px,5vw,64px);
          align-items: center;
          margin-bottom: 80px;
        }

        .characterPage {
          padding: 11px;
          background: #e8dfd4;
          color: #211b22;
          border: 2px solid #292229;
          box-shadow: 13px 15px 0 rgba(0,0,0,.24);
          transform: rotate(-.45deg);
        }

        .characterPageHeader {
          min-height: 27px;
          padding: 0 4px 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #6d6370;
          font-family: var(--font-mono);
          font-size: 5.5px;
          letter-spacing: 1.2px;
        }

        .characterGrid {
          display: grid;
          grid-template-columns: 1.2fr .8fr;
          grid-template-rows: 1fr 1fr auto;
          gap: 8px;
        }

        .characterMainPanel,
        .characterSidePanel {
          position: relative;
          overflow: hidden;
          border: 2px solid #292229;
          background: #151319;
        }

        .characterMainPanel {
          grid-row: 1 / 3;
          min-height: 410px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          background:
            linear-gradient(145deg,rgba(168,139,187,.17),transparent 54%),
            #121015;
        }

        .characterHalftone {
          position: absolute;
          right: -40px;
          top: -40px;
          width: 250px;
          height: 250px;
          opacity: .12;
          background-image:
            radial-gradient(circle,#c7b0d0 1px,transparent 1.5px);
          background-size: 9px 9px;
          mask-image: radial-gradient(circle,black,transparent 70%);
        }

        .characterStamp {
          position: absolute;
          top: 10px;
          left: 10px;
          padding: 4px 7px;
          background: #ddcfa3;
          color: #211b22;
          border: 1px solid #292229;
          font-family: var(--font-mono);
          font-size: 5.5px;
          letter-spacing: 1px;
        }

        .characterPortrait {
          position: absolute;
          right: 26px;
          top: 72px;
          width: 126px;
          height: 126px;
          display: grid;
          place-items: center;
        }

        .portraitRing {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1px solid rgba(221,204,230,.22);
          box-shadow: inset 0 0 0 12px rgba(175,148,194,.05);
        }

        .portraitCore {
          width: 78px;
          height: 78px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #ddcfa4;
          border: 2px solid #241e25;
          color: #1b161c;
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 800;
        }

        .characterIdentity {
          position: relative;
          z-index: 2;
        }

        .characterIdentity small {
          display: block;
          margin-bottom: 7px;
          color: #6d6671;
          font-family: var(--font-mono);
          font-size: 6px;
          letter-spacing: 1px;
        }

        .characterIdentity strong {
          display: block;
          color: #eee8ef;
          font-family: var(--font-display);
          font-size: clamp(2rem,3.6vw,3.2rem);
          line-height: .95;
          letter-spacing: -.04em;
        }

        .characterIdentity span {
          display: block;
          margin-top: 7px;
          color: #77707b;
          font-family: var(--font-mono);
          font-size: 6px;
          letter-spacing: .8px;
        }

        .storyPanel {
          min-height: 200px;
          padding: 42px 14px 14px;
          background: #ddcfa3;
          color: #211b22;
        }

        .miniLabel {
          position: absolute;
          top: 8px;
          left: 8px;
          color: #786a4b;
          font-family: var(--font-mono);
          font-size: 5px;
          letter-spacing: 1px;
        }

        .storyPanel p {
          margin: 0;
          font-size: .82rem;
          line-height: 1.62;
        }

        .philosophyPanel {
          min-height: 200px;
          padding: 20px 14px 14px;
          display: flex;
          align-items: flex-end;
          background:
            linear-gradient(145deg,rgba(177,151,198,.12),transparent),
            #17151b;
        }

        .quoteMark {
          position: absolute;
          top: 2px;
          left: 10px;
          color: #6d5975;
          font-family: Georgia, serif;
          font-size: 42px;
        }

        .philosophyPanel p {
          position: relative;
          z-index: 2;
          margin: 0;
          color: #c0b7c3;
          font-family: Georgia, serif;
          font-style: italic;
          font-size: .9rem;
          line-height: 1.45;
        }

        .characterBottomCaption {
          grid-column: 1 / -1;
          min-height: 42px;
          padding: 8px 11px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          background: #ddcfa3;
          border: 1px solid #292229;
        }

        .characterBottomCaption span {
          color: #786a4b;
          font-family: var(--font-mono);
          font-size: 5.5px;
          letter-spacing: 1.1px;
        }

        .characterBottomCaption strong {
          max-width: 72%;
          text-align: right;
          font-size: 8.5px;
        }

        .aboutBioColumn {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .bioCaseNote {
          padding: 22px;
          background: #17151b;
          border: 1px solid rgba(255,255,255,.09);
          box-shadow: 7px 7px 0 rgba(78,57,84,.2);
          transform: rotate(.7deg);
        }

        .bioCaseNote > span {
          display: block;
          margin-bottom: 12px;
          color: #655f69;
          font-family: var(--font-mono);
          font-size: 6px;
          letter-spacing: 1.2px;
        }

        .bioCaseNote h2 {
          margin: 0 0 16px;
          color: #eee8ef;
          font-family: var(--font-display);
          font-size: clamp(1.8rem,3vw,2.8rem);
          line-height: .98;
          letter-spacing: -.04em;
        }

        .bioCaseNote p {
          margin: 0;
          color: #9e97a2;
          line-height: 1.7;
          font-size: .9rem;
        }

        .aboutContactButton {
          margin-top: 22px;
          min-height: 46px;
          padding: 0 18px;
          display: inline-flex;
          align-items: center;
          background: #ddcfa3;
          color: #211b22;
          border: 2px solid #292229;
          box-shadow: 5px 5px 0 rgba(76,55,82,.23);
          font-family: var(--font-mono);
          font-size: 7px;
          letter-spacing: 1.1px;
          text-decoration: none;
          transition: transform .2s ease, box-shadow .2s ease;
        }

        .aboutContactButton:hover {
          transform: translate(-2px,-2px);
          box-shadow: 8px 8px 0 rgba(76,55,82,.23);
        }

        .skillsCaseSection {
          margin-bottom: 80px;
        }

        .skillsSectionHeader,
        .educationHeader {
          margin-bottom: 14px;
          display: flex;
          justify-content: space-between;
          color: #6f6872;
          font-family: var(--font-mono);
          font-size: 6px;
          letter-spacing: 1.2px;
        }

        .skillsSectionHeader strong,
        .educationHeader strong {
          color: #8e8195;
        }

        .skillsCaseGrid {
          display: grid;
          grid-template-columns:
            repeat(auto-fit,minmax(220px,1fr));
          gap: 10px;
        }

        .skillCasePanel {
          min-height: 180px;
          padding: 18px;
          background: #151319;
          border: 2px solid #292229;
          box-shadow: 5px 5px 0 rgba(73,53,79,.18);
        }

        .skillCaseTop {
          margin-bottom: 34px;
          display: flex;
          justify-content: space-between;
          color: #5b5560;
          font-family: var(--font-mono);
          font-size: 6px;
        }

        .skillDot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #8e709b;
        }

        .skillCasePanel h3 {
          margin: 0 0 13px;
          color: #eee8ef;
          font-size: 1rem;
          text-transform: uppercase;
        }

        .skillItems {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .skillItems span {
          padding: 5px 7px;
          color: #817986;
          border: 1px solid rgba(255,255,255,.08);
          font-family: var(--font-mono);
          font-size: 6px;
          letter-spacing: .7px;
        }

        .educationCaseGrid {
          display: grid;
          grid-template-columns:
            repeat(auto-fit,minmax(240px,1fr));
          gap: 10px;
        }

        .educationCase {
          position: relative;
          min-height: 170px;
          padding: 18px;
          background: #e3d7b8;
          color: #211b22;
          border: 2px solid #292229;
          box-shadow: 5px 5px 0 rgba(72,52,78,.18);
        }

        .educationNo {
          position: absolute;
          right: 14px;
          top: 13px;
          color: #9b8e6e;
          font-family: var(--font-mono);
          font-size: 6px;
        }

        .educationCase small {
          display: block;
          margin-bottom: 35px;
          color: #786a4b;
          font-family: var(--font-mono);
          font-size: 6px;
          letter-spacing: 1px;
        }

        .educationCase h3 {
          margin: 0 0 8px;
          font-size: .95rem;
        }

        .educationCase p {
          margin: 0;
          color: #655b63;
          font-size: .78rem;
          line-height: 1.5;
        }

        @media(max-width:900px) {
          .characterSpread {
            grid-template-columns: 1fr;
          }

          .characterPage {
            transform: none;
          }
        }

        @media(max-width:560px) {
          .characterGrid {
            grid-template-columns: 1fr;
          }

          .characterMainPanel,
          .characterBottomCaption {
            grid-column: auto;
            grid-row: auto;
          }

          .characterBottomCaption {
            align-items: flex-start;
            flex-direction: column;
          }

          .characterBottomCaption strong {
            max-width: 100%;
            text-align: left;
          }
        }
      `}</style>
    </main>
  );
}
