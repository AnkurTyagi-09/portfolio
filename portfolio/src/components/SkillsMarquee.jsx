import { SKILLS } from "../data";

export default function SkillsMarquee() {
  const all = Object.values(SKILLS).flat();
  const doubled = [...all, ...all];

  return (
    <div style={{
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
      overflow: "hidden", padding: "14px 0",
      background: "var(--bg2)",
    }}>
      <div className="marquee-track" style={{ gap: 48 }}>
        {doubled.map((s, i) => (
          <span key={i} style={{
            fontFamily: "'DM Mono', monospace", fontSize: 11,
            letterSpacing: 2, textTransform: "uppercase",
            color: "var(--muted)", flexShrink: 0,
          }}>
            {s} <span style={{ color: "var(--dim)", marginLeft: 12 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
