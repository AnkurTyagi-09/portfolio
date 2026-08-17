import {
  useEffect,
  useRef,
} from "react";

export default function DeveloperMonolith() {
  const wrapperRef = useRef(null);
  const boardRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const board = boardRef.current;

    if (!wrapper || !board)
      return;

    const move = (e) => {
      const rect =
        wrapper.getBoundingClientRect();

      const x =
        (e.clientX - rect.left)
        / rect.width - 0.5;

      const y =
        (e.clientY - rect.top)
        / rect.height - 0.5;

      board.style.transform = `
        perspective(1500px)
        rotateX(${(-y * 4).toFixed(2)}deg)
        rotateY(${(x * 5).toFixed(2)}deg)
      `;
    };

    const reset = () => {
      board.style.transform =
        `perspective(1500px)
         rotateX(0deg)
         rotateY(0deg)`;
    };

    wrapper.addEventListener(
      "mousemove",
      move
    );

    wrapper.addEventListener(
      "mouseleave",
      reset
    );

    return () => {
      wrapper.removeEventListener(
        "mousemove",
        move
      );

      wrapper.removeEventListener(
        "mouseleave",
        reset
      );
    };
  }, []);

  const rag = [
    "DOCS",
    "CHUNKS",
    "VECTOR",
    "RETRIEVE",
    "LLM",
  ];

  return (
    <div
      ref={wrapperRef}
      className="comicScene"
    >
      <div className="backPage back1" />
      <div className="backPage back2" />

      <div
        ref={boardRef}
        className="comicBoard"
      >
        <div className="comicHeader">
          <span>ANKUR.DEV</span>
          <span>CASE FILE 001</span>
        </div>

        <div className="panelGrid">
          {/* PANEL 1 */}
          <div className="panel codePanel">
            <PanelLabel>
              PANEL 01 / BUILD
            </PanelLabel>

            <pre>
<span className="line">01</span>{" "}
<span className="purple">const</span>{" "}
product = build()
{"\n"}

<span className="line">02</span>{" "}
product.connect(
<span className="green">API</span>
)
{"\n"}

<span className="line">03</span>{" "}
product.store(
<span className="cream">PostgreSQL</span>
)
{"\n"}

<span className="line">04</span>{" "}
product.retrieve(
<span className="purple">RAG</span>
)
{"\n"}

<span className="line">05</span>{" "}
product.answer(
<span className="green">LLM</span>
)
            </pre>

            <div className="codeFooter">
              WEB → BACKEND → AI
            </div>
          </div>

          {/* PANEL 2 */}
          <div className="panel identityPanel">
            <PanelLabel>
              PANEL 02 / WHO?
            </PanelLabel>

            <div className="developerAvatar">
              <div className="avatarOrbit" />
              <div className="avatarCircle">
                AT
              </div>
            </div>

            <h3>Ankur Tyagi</h3>

            <p>
              Full-Stack
              <br />
              +
              <br />
              AI Developer
            </p>

            <div className="miniBubble">
              “I prefer building the
              whole system.”
            </div>
          </div>

          {/* PANEL 3 */}
          <div className="panel ragPanel">
            <PanelLabel>
              PANEL 03 / RAG
            </PanelLabel>

            <div className="ragTrack">
              {rag.map(
                (item, index) => (
                  <div
                    key={item}
                    className="ragNode"
                  >
                    <small>
                      0{index + 1}
                    </small>

                    <strong>
                      {item}
                    </strong>

                    {index <
                      rag.length - 1 && (
                      <span className="arrow">
                        →
                      </span>
                    )}
                  </div>
                )
              )}
            </div>

            <div className="ragCaption">
              PYTHON · EMBEDDINGS ·
              VECTOR SEARCH · CONTEXT
            </div>
          </div>

          {/* FINAL CAPTION */}
          <div className="storyCaption">
            <small>CURRENT ARC</small>

            <strong>
              Building products where
              great interfaces meet
              useful intelligence.
            </strong>
          </div>
        </div>
      </div>

      <style>{`
        .comicScene {
          position: relative;

          width: 100%;
          height: 100%;

          min-height: 580px;

          display: grid;
          place-items: center;

          perspective: 1500px;
        }

        .backPage {
          position: absolute;

          width: 78%;
          height: 80%;

          background: #151319;

          border:
            1px solid
            rgba(255,255,255,0.07);
        }

        .back1 {
          transform:
            translate(32px, 28px)
            rotate(4deg);

          opacity: 0.48;
        }

        .back2 {
          transform:
            translate(15px, 13px)
            rotate(2deg);

          opacity: 0.72;
        }

        .comicBoard {
          width: 91%;
          height: 86%;

          min-height: 520px;

          padding: 11px;

          background: #ede4d8;

          border:
            2px solid #211c23;

          box-shadow:
            18px 22px 0
            rgba(0,0,0,0.28),
            0 60px 120px
            rgba(0,0,0,0.38);

          transform:
            perspective(1500px)
            rotateX(0deg)
            rotateY(0deg);

          transform-style:
            preserve-3d;

          transition:
            transform 180ms
            ease-out;
        }

        .comicHeader {
          height: 28px;

          padding: 0 5px 8px;

          display: flex;

          align-items: center;

          justify-content:
            space-between;

          border-bottom:
            1px solid
            rgba(20,15,22,0.22);

          font-family:
            var(--font-mono);

          font-size: 6px;

          letter-spacing: 1.6px;

          color: #6c626e;
        }

        .panelGrid {
          height:
            calc(100% - 28px);

          padding-top: 9px;

          display: grid;

          grid-template-columns:
            1.08fr 0.92fr;

          grid-template-rows:
            1fr 0.95fr auto;

          gap: 9px;
        }

        .panel {
          position: relative;

          overflow: hidden;

          border:
            2px solid #231e25;

          background: #121116;
        }

        .panel::after {
          content: "";

          position: absolute;
          inset: 0;

          pointer-events: none;

          opacity: 0.08;

          background-image:
            radial-gradient(
              circle,
              #cbb0d4 1px,
              transparent 1.4px
            );

          background-size:
            9px 9px;

          mask-image:
            linear-gradient(
              120deg,
              transparent 30%,
              black
            );
        }

        .panelTag {
          position: absolute;

          z-index: 4;

          top: 9px;
          left: 9px;

          padding: 4px 7px;

          color: #1c171d;

          background: #ddcfa3;

          border:
            1px solid #282229;

          font-family:
            var(--font-mono);

          font-size: 6px;

          letter-spacing: 1px;
        }

        .codePanel {
          padding:
            52px 17px 20px;

          background:
            radial-gradient(
              circle at 86% 15%,
              rgba(173,145,195,.17),
              transparent 25%
            ),
            #111015;
        }

        .codePanel pre {
          position: relative;

          z-index: 2;

          margin: 0;

          color: #c7c0c9;

          font-family:
            var(--font-mono);

          font-size:
            clamp(
              8px,
              0.72vw,
              11px
            );

          line-height: 2;

          white-space: pre-wrap;
        }

        .line {
          color: #504a54;
        }

        .purple {
          color: #b49bc7;
        }

        .cream {
          color: #ddcfa9;
        }

        .green {
          color: #9acdb8;
        }

        .codeFooter {
          position: absolute;

          z-index: 2;

          left: 17px;
          bottom: 13px;

          font-family:
            var(--font-mono);

          font-size: 6px;

          letter-spacing: 1.4px;

          color: #625c66;
        }

        .identityPanel {
          padding:
            48px 16px 18px;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content:
            center;

          background:
            linear-gradient(
              135deg,
              rgba(177,150,197,.17),
              transparent 50%
            ),
            #17151b;
        }

        .developerAvatar {
          position: relative;

          width: 105px;
          height: 105px;

          display: grid;

          place-items: center;

          margin-bottom: 12px;
        }

        .avatarOrbit {
          position: absolute;

          inset: 0;

          border-radius: 50%;

          border:
            1px solid
            rgba(221,204,230,.22);

          box-shadow:
            inset 0 0 0 11px
            rgba(175,148,194,.05);
        }

        .avatarCircle {
          width: 68px;
          height: 68px;

          display: grid;

          place-items: center;

          border-radius: 50%;

          background: #ddcfa4;

          border:
            2px solid #241e25;

          color: #1b161c;

          font-family:
            var(--font-display);

          font-size: 22px;

          font-weight: 800;
        }

        .identityPanel h3 {
          position: relative;

          z-index: 2;

          margin: 0 0 4px;

          color: #eee7ef;

          font-size: 14px;
        }

        .identityPanel p {
          position: relative;

          z-index: 2;

          margin: 0;

          text-align: center;

          color: #766f7a;

          font-family:
            var(--font-mono);

          font-size: 6.8px;

          line-height: 1.5;

          letter-spacing: 1px;
        }

        .miniBubble {
          position: absolute;

          z-index: 4;

          right: 7px;
          bottom: 8px;

          max-width: 125px;

          padding: 7px 8px;

          color: #201b21;

          background: #eee5d9;

          border:
            1.5px solid #272129;

          box-shadow:
            4px 4px 0
            rgba(0,0,0,.20);

          font-size: 7px;

          line-height: 1.4;

          transform:
            rotate(-2deg);
        }

        .ragPanel {
          grid-column: 1 / -1;

          padding:
            49px 15px 14px;
        }

        .ragTrack {
          position: relative;

          z-index: 2;

          display: grid;

          grid-template-columns:
            repeat(5,1fr);

          gap: 7px;
        }

        .ragNode {
          position: relative;

          min-height: 61px;

          padding: 9px;

          display: flex;

          flex-direction: column;

          justify-content:
            space-between;

          background:
            rgba(255,255,255,.025);

          border:
            1px solid
            rgba(255,255,255,.12);
        }

        .ragNode small {
          color: #554f59;

          font-family:
            var(--font-mono);

          font-size: 6px;
        }

        .ragNode strong {
          color: #b7aabd;

          font-family:
            var(--font-mono);

          font-size: 6.5px;

          letter-spacing: 0.9px;
        }

        .arrow {
          position: absolute;

          right: -8px;
          top: 50%;

          z-index: 5;

          color: #675d6c;

          transform:
            translateY(-50%);
        }

        .ragCaption {
          position: relative;

          z-index: 2;

          margin-top: 9px;

          color: #5e5862;

          font-family:
            var(--font-mono);

          font-size: 5.8px;

          letter-spacing: 1px;
        }

        .storyCaption {
          grid-column: 1 / -1;

          min-height: 43px;

          padding: 8px 11px;

          display: flex;

          align-items: center;

          justify-content:
            space-between;

          gap: 18px;

          background: #ddcfa3;

          color: #1d181e;
        }

        .storyCaption small {
          font-family:
            var(--font-mono);

          font-size: 5.5px;

          letter-spacing: 1.3px;

          color: #796b4b;
        }

        .storyCaption strong {
          max-width: 290px;

          text-align: right;

          font-size: 9px;

          line-height: 1.3;
        }

        @media(max-width:640px) {

          .comicScene {
            min-height: 420px;
          }

          .comicBoard {
            width: 96%;
            height: 92%;

            min-height: 390px;
          }

          .panelGrid {
            grid-template-columns:
              1fr;

            grid-template-rows:
              1fr 1fr auto;
          }

          .identityPanel {
            display: none;
          }

          .ragPanel,
          .storyCaption {
            grid-column: auto;
          }

          .ragTrack {
            grid-template-columns:
              repeat(3,1fr);
          }

          .ragNode:nth-child(2),
          .ragNode:nth-child(4) {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

function PanelLabel({ children }) {
  return (
    <div className="panelTag">
      {children}
    </div>
  );
}