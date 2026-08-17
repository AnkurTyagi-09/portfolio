import { motion } from "framer-motion";

export default function StackNode({
  node,
  index,
  active,
  onEnter,
}) {
  const isActive = active === node.id;

  return (
    <motion.button
      type="button"
      onMouseEnter={() => onEnter(node.id)}
      onFocus={() => onEnter(node.id)}
      initial={{ opacity: 0, y: 18, rotate: index % 2 ? 1 : -1 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.55,
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -5,
        rotate: index % 2 ? 0.6 : -0.6,
      }}
      className={`comicStackNode ${isActive ? "active" : ""}`}
    >
      <div className="stackNodeTop">
        <span className="stackNodeNumber">{node.number}</span>
        <span className="stackNodeDot" />
      </div>

      <div className="stackNodeTitle">{node.label}</div>
      <div className="stackNodeSub">{node.sub}</div>

      <div className="stackNodeArrow">
        {index < 3 ? "↓" : "✓"}
      </div>

      <style>{`
        .comicStackNode {
          position: relative;
          min-height: 170px;
          padding: 18px;
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

        .comicStackNode::after {
          content: "";
          position: absolute;
          right: -46px;
          top: -46px;
          width: 160px;
          height: 160px;
          opacity: .08;
          background-image:
            radial-gradient(circle, #c9b4d2 1px, transparent 1.5px);
          background-size: 9px 9px;
          mask-image: radial-gradient(circle, black, transparent 68%);
          pointer-events: none;
        }

        .comicStackNode.active {
          background: #1e1821;
          border-color: #8e709b;
          box-shadow: 7px 7px 0 rgba(87,61,94,.24);
        }

        .stackNodeTop {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }

        .stackNodeNumber {
          color: #5f5863;
          font-family: var(--font-mono);
          font-size: 6px;
          letter-spacing: 1.3px;
        }

        .stackNodeDot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #514a55;
        }

        .comicStackNode.active .stackNodeDot {
          background: #b69bc8;
          box-shadow: 0 0 0 5px rgba(182,155,200,.07);
        }

        .stackNodeTitle {
          position: relative;
          z-index: 2;
          margin-bottom: 8px;
          color: #eee8ef;
          font-family: var(--font-display);
          font-size: 1.08rem;
          font-weight: 700;
        }

        .stackNodeSub {
          position: relative;
          z-index: 2;
          max-width: 190px;
          color: #7d7581;
          font-family: var(--font-mono);
          font-size: 7px;
          line-height: 1.6;
          letter-spacing: .8px;
        }

        .stackNodeArrow {
          position: absolute;
          right: 14px;
          bottom: 11px;
          color: #645b69;
          font-size: 13px;
        }
      `}</style>
    </motion.button>
  );
}
