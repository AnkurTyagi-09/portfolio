import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CONTACTS = [
  {
    label: "EMAIL",
    value: "tyagiank09@gmail.com",
    href: "mailto:tyagiank09@gmail.com",
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/ankurtyagi09",
    href: "https://linkedin.com/in/ankurtyagi09",
  },
  {
    label: "GITHUB",
    value: "github.com/AnkurTyagi-09",
    href: "https://github.com/AnkurTyagi-09",
  },
  {
    label: "LOCATION",
    value: "Ghaziabad, India",
    href: null,
  },
];

export default function HorizonContact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setSent(false);
    }, 4000);
  };

  return (
    <section className="finalPanelSection">
      <div className="contactDots contactDotsOne" />
      <div className="contactDots contactDotsTwo" />

      <div className="finalPanelInner">
        <header className="finalIntro">
          <div className="finalIssue">
            ISSUE 006 / FINAL PANEL
          </div>

          <h2>
            THE STORY
            <em>DOESN'T END HERE.</em>
          </h2>

          <p>
            If you have a product to build, an idea to explore, or a role
            where full-stack and AI work meet, this is where the next chapter starts.
          </p>
        </header>

        <div className="contactStorySpread">
          {/* LEFT PAGE */}
          <section className="contactIdentityPage">
            <div className="contactPageHeader">
              <span>CONTACT FILE / 006</span>
              <span>ANKUR.DEV</span>
            </div>

            <div className="contactIdentityPanel">
              <div className="contactNarrator">
                <span>NARRATOR</span>
                A good project usually starts with one simple thing:
                someone deciding to start the conversation.
              </div>

              <div className="contactHeroLine">
                <small>ANKUR TYAGI</small>
                <strong>
                  LET'S BUILD
                  <br />
                  WHAT'S NEXT.
                </strong>
              </div>

              <div className="contactList">
                {CONTACTS.map((contact, index) => (
                  <div className="contactRow" key={contact.label}>
                    <span className="contactIndex">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <small>{contact.label}</small>

                      {contact.href ? (
                        <a
                          href={contact.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <strong>{contact.value}</strong>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="availabilityNote">
                <span className="availabilityDot" />
                <div>
                  <small>STATUS</small>
                  <strong>OPEN TO INTERESTING OPPORTUNITIES</strong>
                </div>
              </div>
            </div>

            <div className="contactPageCaption">
              <span>CURRENT FOCUS</span>
              <strong>WEB PRODUCTS · BACKEND · AI / RAG</strong>
            </div>
          </section>

          {/* RIGHT PAGE */}
          <section className="messageCasePage">
            <div className="messageBackSheet backA" />
            <div className="messageBackSheet backB" />

            <form
              onSubmit={handleSubmit}
              className="messageComicForm"
            >
              <div className="messageFormHeader">
                <span>MESSAGE FILE</span>
                <span>NEW CHAPTER</span>
              </div>

              <div className="messageFormIntro">
                <small>YOUR TURN</small>
                <strong>What are we building?</strong>
              </div>

              <label>
                <span>01 / YOUR NAME</span>
                <input
                  type="text"
                  required
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                />
              </label>

              <label>
                <span>02 / YOUR EMAIL</span>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                />
              </label>

              <label>
                <span>03 / THE IDEA</span>
                <textarea
                  required
                  rows={6}
                  placeholder="Tell me about the project, role or collaboration..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value,
                    })
                  }
                />
              </label>

              <button type="submit" className="sendComicButton">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={sent ? "sent" : "idle"}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: .2 }}
                  >
                    {sent
                      ? "MESSAGE LOGGED ✓"
                      : "START THE NEXT CHAPTER →"}
                  </motion.span>
                </AnimatePresence>
              </button>

              <div className="formFootnote">
                NO AUTO-REPLY. JUST A REAL PERSON READING YOUR MESSAGE.
              </div>
            </form>
          </section>
        </div>

        <div className="finalFooterLine">
          <span>END OF ISSUE 006</span>
          <strong>
            BUILT BY ANKUR TYAGI
          </strong>
        </div>
      </div>

      <style>{`
        .finalPanelSection {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          padding:
            clamp(6rem,10vw,9rem)
            clamp(1.3rem,5vw,4rem)
            70px;
          background: #0f0e13;
          color: #eee8ef;
        }

        .contactDots {
          position: absolute;
          width: 430px;
          height: 430px;
          background-image:
            radial-gradient(circle,#bea8cb 1px,transparent 1.5px);
          background-size: 10px 10px;
          mask-image: radial-gradient(circle,black,transparent 70%);
          opacity: .065;
          pointer-events: none;
        }

        .contactDotsOne {
          right: -110px;
          top: 90px;
        }

        .contactDotsTwo {
          left: -160px;
          bottom: -120px;
          opacity: .04;
        }

        .finalPanelInner {
          position: relative;
          z-index: 2;
          max-width: 1220px;
          margin: auto;
        }

        .finalIntro {
          max-width: 770px;
          margin-bottom: 46px;
        }

        .finalIssue {
          margin-bottom: 17px;
          color: #746d78;
          font-family: var(--font-mono);
          font-size: 7px;
          letter-spacing: 1.8px;
        }

        .finalIntro h2 {
          margin: 0 0 18px;
          color: #f0e9ef;
          font-family: var(--font-display);
          font-size: clamp(3rem,5.2vw,5.1rem);
          line-height: .94;
          letter-spacing: -.055em;
        }

        .finalIntro h2 em {
          display: block;
          margin-top: 8px;
          color: #ae95c1;
          font-family: Georgia, serif;
          font-weight: 500;
        }

        .finalIntro p {
          max-width: 650px;
          margin: 0;
          color: #9e97a2;
          line-height: 1.75;
        }

        .contactStorySpread {
          display: grid;
          grid-template-columns: .92fr 1.08fr;
          gap: clamp(32px,5vw,64px);
          align-items: stretch;
        }

        .contactIdentityPage {
          padding: 11px;
          background: #e8dfd4;
          color: #211b22;
          border: 2px solid #292229;
          box-shadow: 13px 15px 0 rgba(0,0,0,.24);
          transform: rotate(-.45deg);
        }

        .contactPageHeader {
          min-height: 28px;
          padding: 0 4px 8px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #6d6370;
          font-family: var(--font-mono);
          font-size: 5.5px;
          letter-spacing: 1.2px;
        }

        .contactIdentityPanel {
          min-height: 520px;
          position: relative;
          overflow: hidden;
          padding: 24px;
          background:
            radial-gradient(circle at 88% 10%,rgba(174,149,195,.15),transparent 26%),
            #141217;
          border: 2px solid #292229;
        }

        .contactIdentityPanel::after {
          content: "";
          position: absolute;
          right: -45px;
          top: -45px;
          width: 230px;
          height: 230px;
          opacity: .08;
          background-image:
            radial-gradient(circle,#c8b1d1 1px,transparent 1.5px);
          background-size: 9px 9px;
          mask-image: radial-gradient(circle,black,transparent 70%);
        }

        .contactNarrator {
          position: relative;
          z-index: 2;
          width: min(390px,100%);
          margin-bottom: 32px;
          padding: 11px 13px;
          background: #ddcfa3;
          color: #211b22;
          border: 1.5px solid #2a232b;
          box-shadow: 5px 5px 0 rgba(79,58,84,.22);
          font-size: .82rem;
          line-height: 1.6;
          transform: rotate(-.8deg);
        }

        .contactNarrator span {
          display: block;
          margin-bottom: 4px;
          color: #766747;
          font-family: var(--font-mono);
          font-size: 5.5px;
          letter-spacing: 1.2px;
        }

        .contactHeroLine {
          position: relative;
          z-index: 2;
          margin-bottom: 34px;
        }

        .contactHeroLine small {
          display: block;
          margin-bottom: 8px;
          color: #6d6671;
          font-family: var(--font-mono);
          font-size: 6px;
          letter-spacing: 1.2px;
        }

        .contactHeroLine strong {
          display: block;
          color: #eee8ef;
          font-family: var(--font-display);
          font-size: clamp(2.2rem,4vw,3.5rem);
          line-height: .94;
          letter-spacing: -.05em;
        }

        .contactList {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 8px;
        }

        .contactRow {
          min-height: 64px;
          padding: 10px 12px;
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 11px;
          align-items: center;
          background: rgba(255,255,255,.025);
          border: 1px solid rgba(255,255,255,.075);
        }

        .contactIndex {
          color: #514b55;
          font-family: var(--font-mono);
          font-size: 5px;
        }

        .contactRow small {
          display: block;
          margin-bottom: 4px;
          color: #625c67;
          font-family: var(--font-mono);
          font-size: 5.5px;
          letter-spacing: 1px;
        }

        .contactRow a,
        .contactRow strong {
          color: #bdb5c0;
          font-size: .78rem;
          font-weight: 500;
          text-decoration: none;
          word-break: break-word;
        }

        .availabilityNote {
          position: relative;
          z-index: 2;
          margin-top: 16px;
          padding-top: 15px;
          display: flex;
          align-items: center;
          gap: 10px;
          border-top: 1px solid rgba(255,255,255,.07);
        }

        .availabilityDot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #9acdb8;
          box-shadow: 0 0 0 5px rgba(154,205,184,.06);
        }

        .availabilityNote small {
          display: block;
          margin-bottom: 3px;
          color: #5c5660;
          font-family: var(--font-mono);
          font-size: 5px;
          letter-spacing: 1px;
        }

        .availabilityNote strong {
          color: #9acdb8;
          font-family: var(--font-mono);
          font-size: 6px;
          letter-spacing: .8px;
        }

        .contactPageCaption {
          margin-top: 8px;
          min-height: 42px;
          padding: 8px 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          background: #ddcfa3;
          border: 1px solid #292229;
        }

        .contactPageCaption span {
          color: #786a4b;
          font-family: var(--font-mono);
          font-size: 5.5px;
          letter-spacing: 1.1px;
        }

        .contactPageCaption strong {
          max-width: 70%;
          text-align: right;
          font-size: 8px;
        }

        .messageCasePage {
          position: relative;
          min-height: 620px;
          display: grid;
          place-items: center;
          perspective: 1400px;
        }

        .messageBackSheet {
          position: absolute;
          width: 80%;
          height: 82%;
          background: #17151b;
          border: 1px solid rgba(255,255,255,.06);
        }

        .backA {
          transform: translate(26px,20px) rotate(3deg);
          opacity: .45;
        }

        .backB {
          transform: translate(12px,10px) rotate(1.4deg);
          opacity: .67;
        }

        .messageComicForm {
          width: 92%;
          padding: 12px;
          background: #e9e0d5;
          border: 2px solid #292229;
          box-shadow:
            15px 18px 0 rgba(0,0,0,.25),
            0 50px 90px rgba(0,0,0,.23);
          transform: rotate(.45deg);
        }

        .messageFormHeader {
          min-height: 28px;
          padding: 0 4px 8px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #6d6370;
          font-family: var(--font-mono);
          font-size: 5.5px;
          letter-spacing: 1.2px;
        }

        .messageFormIntro {
          padding: 20px;
          margin-bottom: 8px;
          background: #151319;
          border: 2px solid #292229;
        }

        .messageFormIntro small {
          display: block;
          margin-bottom: 7px;
          color: #625b66;
          font-family: var(--font-mono);
          font-size: 5.5px;
          letter-spacing: 1.1px;
        }

        .messageFormIntro strong {
          display: block;
          color: #eee8ef;
          font-family: var(--font-display);
          font-size: clamp(1.7rem,3vw,2.5rem);
          letter-spacing: -.035em;
        }

        .messageComicForm label {
          display: block;
          margin-bottom: 8px;
          padding: 12px;
          background: #151319;
          border: 2px solid #292229;
        }

        .messageComicForm label > span {
          display: block;
          margin-bottom: 8px;
          color: #665f69;
          font-family: var(--font-mono);
          font-size: 5.5px;
          letter-spacing: 1px;
        }

        .messageComicForm input,
        .messageComicForm textarea {
          width: 100%;
          box-sizing: border-box;
          padding: 11px 12px;
          color: #d2cbd5;
          background: rgba(255,255,255,.025);
          border: 1px solid rgba(255,255,255,.08);
          outline: none;
          font: inherit;
          font-size: .86rem;
          transition: border-color .2s ease, background .2s ease;
        }

        .messageComicForm input:focus,
        .messageComicForm textarea:focus {
          border-color: #8e709b;
          background: rgba(178,151,198,.05);
        }

        .messageComicForm textarea {
          resize: vertical;
          min-height: 130px;
        }

        .sendComicButton {
          width: 100%;
          min-height: 49px;
          display: grid;
          place-items: center;
          color: #211b22;
          background: #ddcfa3;
          border: 2px solid #292229;
          box-shadow: 5px 5px 0 rgba(76,55,82,.23);
          font-family: var(--font-mono);
          font-size: 7px;
          letter-spacing: 1.2px;
          cursor: pointer;
          transition: transform .2s ease, box-shadow .2s ease;
        }

        .sendComicButton:hover {
          transform: translate(-2px,-2px);
          box-shadow: 8px 8px 0 rgba(76,55,82,.23);
        }

        .formFootnote {
          margin-top: 12px;
          color: #776d78;
          font-family: var(--font-mono);
          font-size: 5.5px;
          letter-spacing: .8px;
          text-align: center;
        }

        .finalFooterLine {
          margin-top: 60px;
          padding-top: 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          border-top: 1px solid rgba(255,255,255,.08);
        }

        .finalFooterLine span {
          color: #5e5862;
          font-family: var(--font-mono);
          font-size: 6px;
          letter-spacing: 1.2px;
        }

        .finalFooterLine strong {
          color: #837b87;
          font-family: var(--font-mono);
          font-size: 6px;
          letter-spacing: 1px;
        }

        @media(max-width: 900px) {
          .contactStorySpread {
            grid-template-columns: 1fr;
          }

          .contactIdentityPage,
          .messageComicForm {
            transform: none;
          }
        }

        @media(max-width: 560px) {
          .contactIdentityPanel {
            padding: 18px;
          }

          .contactPageCaption,
          .finalFooterLine {
            align-items: flex-start;
            flex-direction: column;
          }

          .contactPageCaption strong {
            max-width: 100%;
            text-align: left;
          }

          .messageCasePage {
            min-height: 560px;
          }

          .messageComicForm {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
