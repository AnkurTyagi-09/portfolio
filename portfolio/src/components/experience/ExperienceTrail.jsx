import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EXPERIENCE } from "../../data";
import TrailNode from "./TrailNode";

export default function ExperienceTrail() {
  const [active, setActive] = useState(0);
  const e = EXPERIENCE[active];

  return (
    <section className="experienceComicSection">
      <div className="experienceDots dotsOne" />
      <div className="experienceDots dotsTwo" />

      <div className="experienceComicInner">
        <header className="experienceIntro">
          <div className="experienceIssue">
            ISSUE 005 / THE JOURNEY
          </div>

          <h2>
            EVERY ROLE
            <em>LEFT A PANEL BEHIND.</em>
          </h2>

          <p>
            A career is not a straight line. It is a sequence of projects,
            people, mistakes, experiments and lessons that slowly change
            how you approach the next build.
          </p>
        </header>

        <div className="experienceStoryLayout">
          <aside className="experienceCaseIndex">
            <div className="caseIndexHeader">
              <span>ARCHIVE / EXPERIENCE</span>
              <span>{String(EXPERIENCE.length).padStart(2, "0")} FILES</span>
            </div>

            <div className="caseIndexList">
              {EXPERIENCE.map((item, index) => (
                <TrailNode
                  key={`${item.company}-${index}`}
                  e={item}
                  index={index}
                  active={active}
                  onSelect={setActive}
                />
              ))}
            </div>
          </aside>

          <section className="activeExperienceWrap">
            <div className="experienceBackSheet backOne" />
            <div className="experienceBackSheet backTwo" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{
                  opacity: 0,
                  y: 12,
                  rotate: -0.8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotate: -0.25,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                transition={{
                  duration: .34,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="experienceComicPage"
              >
                <div className="experiencePageTop">
                  <span>
                    CASE FILE {String(active + 1).padStart(2, "0")}
                  </span>

                  <span>{e.period}</span>
                </div>

                <div className="experiencePanelGrid">
                  <div className="experienceMainPanel">
                    <div className="experiencePanelDots" />

                    <div className="panelStamp">
                      EXPERIENCE
                    </div>

                    <div className="experienceMainCopy">
                      <small>{e.type}</small>

                      <h3>{e.role}</h3>

                      <strong>@ {e.company}</strong>

                      <span>
                        {e.location}
                      </span>
                    </div>
                  </div>

                  <div className="experienceSidePanel narratorPanel">
                    <div className="narratorLabel">
                      NARRATOR
                    </div>

                    <p>
                      This chapter added another layer to how I approach
                      real software work — not just code, but ownership,
                      collaboration and delivery.
                    </p>
                  </div>

                  <div className="experienceSidePanel datePanel">
                    <span>PERIOD</span>
                    <strong>{e.period}</strong>

                    <span>LOCATION</span>
                    <strong>{e.location}</strong>
                  </div>

                  <div className="experienceBulletsPanel">
                    <div className="bulletsPanelHeader">
                      <span>WHAT HAPPENED IN THIS CHAPTER</span>
                      <span>↓</span>
                    </div>

                    <div className="experienceBulletList">
                      {e.bullets.map((bullet, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: .28,
                            delay: .06 * index,
                          }}
                          className="experienceBullet"
                        >
                          <small>
                            {String(index + 1).padStart(2, "0")}
                          </small>

                          <p>{bullet}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="experienceBottomCaption">
                    <span>THE TAKEAWAY</span>
                    <strong>
                      Every chapter changes the next build.
                    </strong>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </section>
        </div>
      </div>

      <style>{`
        .experienceComicSection {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          padding:
            clamp(6rem,10vw,9rem)
            clamp(1.3rem,5vw,4rem);
          background: #0f0e13;
          color: #eee8ef;
        }

        .experienceDots {
          position: absolute;
          width: 430px;
          height: 430px;
          opacity: .065;
          background-image:
            radial-gradient(circle,#bea8cb 1px,transparent 1.5px);
          background-size: 10px 10px;
          mask-image: radial-gradient(circle,black,transparent 70%);
          pointer-events: none;
        }

        .dotsOne {
          right: -110px;
          top: 80px;
        }

        .dotsTwo {
          left: -180px;
          bottom: -120px;
          opacity: .04;
        }

        .experienceComicInner {
          position: relative;
          z-index: 2;
          max-width: 1220px;
          margin: auto;
        }

        .experienceIntro {
          max-width: 760px;
          margin-bottom: 48px;
        }

        .experienceIssue {
          margin-bottom: 17px;
          color: #746d78;
          font-family: var(--font-mono);
          font-size: 7px;
          letter-spacing: 1.8px;
        }

        .experienceIntro h2 {
          margin: 0 0 20px;
          color: #f0e9ef;
          font-family: var(--font-display);
          font-size: clamp(3rem,5.2vw,5rem);
          line-height: .94;
          letter-spacing: -.055em;
        }

        .experienceIntro h2 em {
          display: block;
          margin-top: 8px;
          color: #ae95c1;
          font-family: Georgia, serif;
          font-weight: 500;
        }

        .experienceIntro p {
          max-width: 650px;
          margin: 0;
          color: #9e97a2;
          line-height: 1.75;
        }

        .experienceStoryLayout {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: clamp(36px,5vw,72px);
          align-items: start;
        }

        .experienceCaseIndex {
          padding: 11px;
          background: #e8dfd4;
          border: 2px solid #292229;
          box-shadow: 10px 12px 0 rgba(0,0,0,.22);
          transform: rotate(-.5deg);
        }

        .caseIndexHeader {
          padding: 3px 3px 10px;
          display: flex;
          justify-content: space-between;
          color: #6f6572;
          font-family: var(--font-mono);
          font-size: 5.5px;
          letter-spacing: 1.1px;
        }

        .caseIndexList {
          display: grid;
          gap: 8px;
        }

        .activeExperienceWrap {
          position: relative;
          min-height: 610px;
          display: grid;
          place-items: center;
          perspective: 1400px;
        }

        .experienceBackSheet {
          position: absolute;
          width: 84%;
          height: 84%;
          background: #17151b;
          border: 1px solid rgba(255,255,255,.06);
        }

        .backOne {
          transform: translate(28px,22px) rotate(3deg);
          opacity: .45;
        }

        .backTwo {
          transform: translate(13px,10px) rotate(1.4deg);
          opacity: .68;
        }

        .experienceComicPage {
          width: 92%;
          padding: 11px;
          background: #e9e0d5;
          border: 2px solid #292229;
          box-shadow:
            15px 18px 0 rgba(0,0,0,.25),
            0 50px 90px rgba(0,0,0,.24);
        }

        .experiencePageTop {
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

        .experiencePanelGrid {
          display: grid;
          grid-template-columns: 1.2fr .8fr;
          grid-template-rows: auto auto auto;
          gap: 8px;
        }

        .experienceMainPanel,
        .experienceSidePanel,
        .experienceBulletsPanel {
          position: relative;
          overflow: hidden;
          background: #151319;
          border: 2px solid #292229;
        }

        .experienceMainPanel {
          grid-row: 1 / 3;
          min-height: 290px;
          padding: 28px;
          display: flex;
          align-items: flex-end;
          background:
            linear-gradient(145deg,rgba(168,139,187,.17),transparent 54%),
            #121015;
        }

        .experiencePanelDots {
          position: absolute;
          right: -40px;
          top: -40px;
          width: 240px;
          height: 240px;
          opacity: .13;
          background-image:
            radial-gradient(circle,#c7b0d0 1px,transparent 1.5px);
          background-size: 9px 9px;
          mask-image: radial-gradient(circle,black,transparent 70%);
        }

        .panelStamp {
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

        .experienceMainCopy {
          position: relative;
          z-index: 2;
        }

        .experienceMainCopy small {
          display: block;
          margin-bottom: 7px;
          color: #6d6671;
          font-family: var(--font-mono);
          font-size: 6px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .experienceMainCopy h3 {
          margin: 0 0 7px;
          color: #eee8ef;
          font-family: var(--font-display);
          font-size: clamp(1.9rem,3.8vw,3.2rem);
          line-height: .97;
          letter-spacing: -.04em;
        }

        .experienceMainCopy strong {
          display: block;
          color: #b79fca;
          font-size: .92rem;
          font-weight: 600;
        }

        .experienceMainCopy span {
          display: block;
          margin-top: 6px;
          color: #77707b;
          font-family: var(--font-mono);
          font-size: 6px;
          letter-spacing: .8px;
        }

        .narratorPanel {
          min-height: 140px;
          padding: 34px 14px 14px;
          background: #ddcfa3;
          color: #211b22;
        }

        .narratorLabel {
          position: absolute;
          top: 8px;
          left: 8px;
          color: #786a4b;
          font-family: var(--font-mono);
          font-size: 5px;
          letter-spacing: 1px;
        }

        .narratorPanel p {
          margin: 0;
          font-size: .82rem;
          line-height: 1.6;
        }

        .datePanel {
          min-height: 140px;
          padding: 16px;
          display: grid;
          align-content: center;
          gap: 5px;
        }

        .datePanel span {
          color: #5d5661;
          font-family: var(--font-mono);
          font-size: 5px;
          letter-spacing: 1px;
        }

        .datePanel strong {
          color: #bbb3be;
          font-size: .78rem;
          font-weight: 500;
        }

        .datePanel strong + span {
          margin-top: 10px;
        }

        .experienceBulletsPanel {
          grid-column: 1 / -1;
          padding: 14px;
        }

        .bulletsPanelHeader {
          margin-bottom: 10px;
          display: flex;
          justify-content: space-between;
          color: #665f6a;
          font-family: var(--font-mono);
          font-size: 5.5px;
          letter-spacing: 1.1px;
        }

        .experienceBulletList {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .experienceBullet {
          min-height: 92px;
          padding: 11px;
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 9px;
          background: rgba(255,255,255,.025);
          border: 1px solid rgba(255,255,255,.07);
        }

        .experienceBullet small {
          color: #5b5560;
          font-family: var(--font-mono);
          font-size: 5px;
          padding-top: 2px;
        }

        .experienceBullet p {
          margin: 0;
          color: #aaa2ad;
          font-size: .78rem;
          line-height: 1.55;
        }

        .experienceBottomCaption {
          grid-column: 1 / -1;
          min-height: 42px;
          padding: 8px 11px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          background: #ddcfa3;
          border: 1px solid #292229;
          color: #211b22;
        }

        .experienceBottomCaption span {
          color: #786a4b;
          font-family: var(--font-mono);
          font-size: 5.5px;
          letter-spacing: 1.1px;
        }

        .experienceBottomCaption strong {
          font-size: 8.5px;
          text-align: right;
        }

        @media(max-width: 900px) {
          .experienceStoryLayout {
            grid-template-columns: 1fr;
          }

          .experienceCaseIndex {
            transform: none;
          }
        }

        @media(max-width: 620px) {
          .experiencePanelGrid {
            grid-template-columns: 1fr;
          }

          .experienceMainPanel,
          .experienceBulletsPanel,
          .experienceBottomCaption {
            grid-column: auto;
            grid-row: auto;
          }

          .experienceBulletList {
            grid-template-columns: 1fr;
          }

          .experienceComicPage {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
