import { SKILLS, EDUCATION } from "../data";
import { btnSolid } from "../styles";
import SectionLabel from "../components/SectionLabel";

export default function About() {
  return (
    <section style={{ padding: "clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)", paddingTop: "calc(clamp(5rem,10vw,8rem) + 64px)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionLabel label="01 — About" />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "clamp(2rem, 6vw, 5rem)", alignItems: "start",
        }}>
          {/* Left: bio */}
          <div>
            <h2 style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800,
              color: "var(--bright)", lineHeight: 1.1,
              marginBottom: 24, letterSpacing: -1,
            }}>
              Crafting digital<br />
              <span style={{ color: "transparent", WebkitTextStroke: "1px var(--dim)" }}>experiences.</span>
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 16, fontSize: "0.95rem" }}>
              I'm a passionate software developer who believes in the power of clean code
              and innovative solutions. Currently pursuing my BCA while actively contributing
              to real-world development workflows at 4C Plus.
            </p>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "0.95rem" }}>
              My journey spans Android development, Web development, and leading Google
              Developer Groups on Campus — where I mentor peers and organise technical workshops.
            </p>
            <div style={{ marginTop: 32 }}>
              <a href="mailto:tyagiank09@gmail.com" style={btnSolid}>
                tyagiank09@gmail.com ↗
              </a>
            </div>
          </div>

          {/* Right: skills grid */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {Object.entries(SKILLS).map(([cat, items]) => (
              <div key={cat} style={{
                background: "var(--bg2)", border: "1px solid var(--border)",
                padding: "16px 20px", borderRadius: 8,
              }}>
                <div style={{
                  fontFamily: "'DM Mono', monospace", fontSize: 10,
                  color: "var(--muted)", letterSpacing: 2,
                  textTransform: "uppercase", marginBottom: 10,
                }}>{cat}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {items.map(s => (
                    <span key={s} style={{
                      fontFamily: "'DM Mono', monospace", fontSize: 11,
                      color: "var(--sub)", background: "var(--bg3)",
                      border: "1px solid var(--border)",
                      padding: "3px 10px", borderRadius: 4,
                    }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div style={{ marginTop: "clamp(3rem, 6vw, 5rem)", borderTop: "1px solid var(--border)", paddingTop: 32 }}>
          <SectionLabel label="Education" small />
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 12, marginTop: 20,
          }}>
            {EDUCATION.map(e => (
              <div key={e.degree} style={{
                background: "var(--bg2)", border: "1px solid var(--border)",
                padding: "20px", borderRadius: 8,
              }}>
                <div style={{
                  fontFamily: "'DM Mono', monospace", fontSize: 10,
                  color: "var(--muted)", letterSpacing: 2, marginBottom: 8,
                }}>{e.year}</div>
                <div style={{ fontWeight: 700, color: "var(--text)", marginBottom: 4, fontSize: "0.9rem" }}>
                  {e.degree}
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--muted)" }}>{e.school}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
