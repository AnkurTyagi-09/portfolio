const LINKS = [
  ["GitHub", "https://github.com/AnkurTyagi-09"],
  ["LinkedIn", "https://linkedin.com/in/ankurtyagi09"],
  ["Email", "mailto:tyagiank09@gmail.com"],
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="comicFooter">
      <div className="footerHalftone" />

      <div className="comicFooterInner">
        <div className="footerTopLine">
          <span>END CREDITS / ANKUR.DEV</span>
          <span>ISSUE COMPLETE</span>
        </div>

        <div className="footerMain">
          <div className="footerTitle">
            <small>BUILT BY</small>
            <strong>
              ANKUR
              <em>TYAGI.</em>
            </strong>
          </div>

          <div className="footerLinks">
            {LINKS.map(([label, href], index) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                <small>
                  {String(index + 1).padStart(2, "0")}
                </small>
                <span>{label}</span>
                <strong>↗</strong>
              </a>
            ))}
          </div>
        </div>

        <div className="footerBottom">
          <span>© {year} ANKUR TYAGI</span>
          <span>FULL-STACK · AI · WEB</span>
          <span>THE STORY CONTINUES...</span>
        </div>
      </div>

      <style>{`
        .comicFooter {
          position: relative;
          overflow: hidden;
          padding: 48px clamp(1.3rem,5vw,4rem) 28px;
          background: #ddcfa3;
          color: #211b22;
          border-top: 2px solid #211c23;
        }

        .footerHalftone {
          position: absolute;
          right: -80px;
          bottom: -130px;
          width: 330px;
          height: 330px;
          opacity: .12;
          background-image:
            radial-gradient(circle,#45394a 1.1px,transparent 1.5px);
          background-size: 10px 10px;
          mask-image: radial-gradient(circle,black,transparent 70%);
        }

        .comicFooterInner {
          position: relative;
          z-index: 2;
          max-width: 1220px;
          margin: auto;
        }

        .footerTopLine {
          padding-bottom: 11px;
          display: flex;
          justify-content: space-between;
          color: #796c4d;
          border-bottom: 1px solid rgba(33,27,34,.16);
          font-family: var(--font-mono);
          font-size: 5.5px;
          letter-spacing: 1.2px;
        }

        .footerMain {
          padding: 34px 0;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 40px;
          align-items: end;
        }

        .footerTitle small {
          display: block;
          margin-bottom: 8px;
          color: #786a4b;
          font-family: var(--font-mono);
          font-size: 5.5px;
          letter-spacing: 1.1px;
        }

        .footerTitle strong {
          display: block;
          font-family: var(--font-display);
          font-size: clamp(2.8rem,5vw,4.8rem);
          line-height: .88;
          letter-spacing: -.055em;
        }

        .footerTitle em {
          display: block;
          margin-top: 8px;
          color: #6e5677;
          font-family: Georgia, serif;
          font-weight: 500;
        }

        .footerLinks {
          min-width: 280px;
          display: grid;
          gap: 7px;
        }

        .footerLinks a {
          min-height: 46px;
          padding: 0 12px;
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 10px;
          align-items: center;
          color: #bbb3be;
          background: #151319;
          border: 2px solid #292229;
          text-decoration: none;
          font-family: var(--font-mono);
          transition:
            transform .2s ease,
            box-shadow .2s ease;
        }

        .footerLinks a:hover {
          transform: translate(-2px,-2px);
          box-shadow: 5px 5px 0 rgba(72,52,78,.19);
        }

        .footerLinks small {
          color: #5d5661;
          font-size: 5px;
        }

        .footerLinks span {
          font-size: 7px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .footerLinks strong {
          color: #9f84ac;
          font-size: 9px;
        }

        .footerBottom {
          padding-top: 12px;
          display: flex;
          justify-content: space-between;
          gap: 16px;
          border-top: 1px solid rgba(33,27,34,.16);
          color: #786a4b;
          font-family: var(--font-mono);
          font-size: 5.5px;
          letter-spacing: 1px;
        }

        @media(max-width: 720px) {
          .footerMain {
            grid-template-columns: 1fr;
          }

          .footerLinks {
            min-width: 0;
          }

          .footerBottom {
            flex-direction: column;
          }
        }
      `}</style>
    </footer>
  );
}
