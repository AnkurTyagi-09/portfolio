import { useState } from "react";
import { EXPERIENCE } from "../data";
import SectionLabel from "../components/SectionLabel";

export default function Experience() {
  const [active, setActive] = useState(0);
  const e = EXPERIENCE[active];

  return (
    <section style={{
      padding: "clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)",
      paddingTop: "calc(clamp(5rem,10vw,8rem) + 64px)",
      background: "var(--bg2)",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
      minHeight: "100vh",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionLabel label="02 — Experience" />
        <h2 style={{
          fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800,
          color: "var(--bright)", letterSpacing: -1,
          marginBottom: "clamp(2rem, 5vw, 4rem)",
        }}>
          Where I've worked.
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "220px 1fr",
          gap: 40,
        }} className="exp-grid">
          {/* Tab list */}
          <div style={{ display: "flex", flexDirection: "column", borderLeft: "1px solid var(--border)" }}>
            {EXPERIENCE.map((ex, i) => (
              <button key={i} onClick={() => setActive(i)} style={{
                background: "none", border: "none", cursor: "none",
                textAlign: "left", padding: "14px 20px",
                borderLeft: i === active ? "2px solid var(--bright)" : "2px solid transparent",
                color: i === active ? "var(--bright)" : "var(--muted)",
                fontFamily: "'Syne', sans-serif",
                fontWeight: i === active ? 700 : 400,
                fontSize: "0.85rem", transition: "all 0.2s", marginLeft: -1,
              }}>
                {ex.company}
                <span style={{
                  display: "block", fontFamily: "'DM Mono', monospace",
                  fontSize: 9, color: "var(--muted)",
                  letterSpacing: 1, textTransform: "uppercase", marginTop: 2,
                }}>{ex.type}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div key={active}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap", marginBottom: 4 }}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--bright)" }}>{e.role}</h3>
              <span style={{ color: "var(--muted)", fontSize: "0.9rem" }}>@ {e.company}</span>
            </div>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: 11,
              color: "var(--muted)", letterSpacing: 1, marginBottom: 24,
            }}>
              {e.period} · {e.location}
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {e.bullets.map((b, i) => (
                <li key={i} style={{ display: "flex", gap: 12, color: "var(--sub)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                  <span style={{ color: "var(--dim)", flexShrink: 0, marginTop: 1 }}>▸</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .exp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
