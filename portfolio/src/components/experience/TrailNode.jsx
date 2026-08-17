import { motion } from "framer-motion";

export default function TrailNode({
  e,
  index,
  active,
  onSelect,
}) {
  const isActive = active === index;

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(index)}
      onFocus={() => onSelect(index)}
      whileHover={{
        x: 4,
        rotate: index % 2 ? 0.3 : -0.3,
      }}
      className={`experienceCaseTab ${isActive ? "active" : ""}`}
    >
      <div className="caseTabNo">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="caseTabCopy">
        <span>{e.period}</span>
        <strong>{e.company}</strong>
        <small>{e.type}</small>
      </div>

      <div className="caseTabArrow">
        {isActive ? "→" : "·"}
      </div>

      <style>{`
        .experienceCaseTab {
          position: relative;
          width: 100%;
          min-height: 112px;
          padding: 15px 15px 14px;
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 13px;
          align-items: start;
          text-align: left;
          color: inherit;
          background: #151319;
          border: 2px solid #292229;
          cursor: pointer;
          overflow: hidden;
          transition:
            background .25s ease,
            border-color .25s ease,
            box-shadow .25s ease;
        }

        .experienceCaseTab::after {
          content: "";
          position: absolute;
          right: -36px;
          top: -36px;
          width: 120px;
          height: 120px;
          opacity: .07;
          background-image:
            radial-gradient(circle,#c8b1d1 1px,transparent 1.5px);
          background-size: 9px 9px;
          mask-image: radial-gradient(circle,black,transparent 70%);
        }

        .experienceCaseTab.active {
          background: #211923;
          border-color: #8d6f9b;
          box-shadow: 6px 6px 0 rgba(83,59,89,.23);
        }

        .caseTabNo {
          position: relative;
          z-index: 2;
          color: #5c5560;
          font-family: var(--font-mono);
          font-size: 6px;
          letter-spacing: 1.2px;
          padding-top: 2px;
        }

        .caseTabCopy {
          position: relative;
          z-index: 2;
        }

        .caseTabCopy span {
          display: block;
          margin-bottom: 6px;
          color: #716a75;
          font-family: var(--font-mono);
          font-size: 6px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .caseTabCopy strong {
          display: block;
          color: #e9e2ea;
          font-family: var(--font-display);
          font-size: .98rem;
          line-height: 1.2;
        }

        .caseTabCopy small {
          display: block;
          margin-top: 4px;
          color: #77707b;
          font-size: .72rem;
        }

        .caseTabArrow {
          position: relative;
          z-index: 2;
          color: #75667c;
          font-size: 13px;
          padding-top: 1px;
        }

        .experienceCaseTab.active .caseTabArrow {
          color: #b398c6;
        }
      `}</style>
    </motion.button>
  );
}
