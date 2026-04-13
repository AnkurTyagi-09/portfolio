import { useState } from "react";
import { PROJECTS } from "../data";
import SectionLabel from "../components/SectionLabel";

function ProjectCard({ p }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? "var(--bg2)" : "var(--bg)",
        border: `1px solid ${hov ? p.accent + "44" : "var(--border)"}`,
        borderRadius: 12, padding: 28, transition: "all 0.3s",
        transform: hov ? "translateY(-4px)" : "none",
        boxShadow: hov ? "0 24px 48px rgba(0,0,0,0.4)" : "none",
        display: "flex", flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
        <span style={{ fontSize: "2rem" }}>{p.icon}</span>
        <a
          href={p.link} target="_blank" rel="noreferrer"
          style={{
            fontFamily: "'DM Mono', monospace", fontSize: 10,
            letterSpacing: 2, color: hov ? p.accent : "var(--muted)",
            textDecoration: "none", textTransform: "uppercase",
            transition: "color 0.3s",
          }}
        >
          Visit ↗
        </a>
      </div>
      <div style={{
        fontFamily: "'DM Mono', monospace", fontSize: 9,
        color: "var(--muted)", letterSpacing: 2,
        textTransform: "uppercase", marginBottom: 8,
      }}>{p.period}</div>
      <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--bright)", marginBottom: 10 }}>
        {p.title}
      </h3>
      <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.7, flex: 1, marginBottom: 20 }}>
        {p.desc}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {p.tags.map(t => (
          <span key={t} style={{
            fontFamily: "'DM Mono', monospace", fontSize: 9,
            letterSpacing: 1, textTransform: "uppercase",
            color: "var(--sub)", background: "var(--bg3)",
            border: "1px solid var(--border)", padding: "3px 8px", borderRadius: 3,
          }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section style={{
      padding: "clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)",
      paddingTop: "calc(clamp(5rem,10vw,8rem) + 64px)",
      minHeight: "100vh",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionLabel label="03 — Projects" />
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "clamp(2rem, 5vw, 4rem)",
          flexWrap: "wrap", gap: 16,
        }}>
          <h2 style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800,
            color: "var(--bright)", letterSpacing: -1,
          }}>
            Selected work.
          </h2>
          <a
            href="https://github.com/AnkurTyagi-09" target="_blank" rel="noreferrer"
            style={{
              fontFamily: "'DM Mono', monospace", fontSize: 11,
              letterSpacing: 2, color: "var(--muted)",
              textDecoration: "none", textTransform: "uppercase",
              borderBottom: "1px solid var(--dim)", paddingBottom: 2,
            }}
          >
            All projects ↗
          </a>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 16,
        }}>
          {PROJECTS.map(p => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
