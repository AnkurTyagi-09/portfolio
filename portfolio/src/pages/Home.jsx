import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { btnSolid, btnOutline, btnGhost } from "../styles";
import SkillsMarquee from "../components/SkillsMarquee";

export default function Home() {
  const [typed, setTyped] = useState("");
  const words = ["Software Developer.", "BCA Student.", "Problem Solver.", "Builder."];
  const wIdx = useRef(0);
  const cIdx = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    startTyping();
  }, []);

  function startTyping() {
    const t = setInterval(() => {
      const word = words[wIdx.current];
      if (deleting.current) {
        cIdx.current--;
        setTyped(word.slice(0, cIdx.current));
        if (cIdx.current === 0) {
          deleting.current = false;
          wIdx.current = (wIdx.current + 1) % words.length;
          clearInterval(t);
          startTyping();
        }
      } else {
        cIdx.current++;
        setTyped(words[wIdx.current].slice(0, cIdx.current));
        if (cIdx.current === words[wIdx.current].length) {
          deleting.current = true;
          clearInterval(t);
          setTimeout(() => startTyping(), 1400);
        }
      }
    }, 70);
    return t;
  }

  return (
    <>
      <section style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        padding: "0 clamp(1.5rem, 5vw, 4rem)", paddingTop: 80,
        position: "relative", overflow: "hidden",
      }}>
        {/* Grid background */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "60px 60px", opacity: 0.3, zIndex: 0,
        }} />
        {/* Radial glow */}
        <div style={{
          position: "absolute", top: "30%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: 600, height: 600,
          background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
          zIndex: 0,
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", zIndex: 1 }}>
          <div className="fade-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
            <span style={{
              fontFamily: "'DM Mono', monospace", fontSize: 11,
              letterSpacing: 3, textTransform: "uppercase",
              color: "var(--muted)", display: "block", marginBottom: 24,
            }}>
              ↳ Based in Ghaziabad, India
            </span>

            <h1 style={{
              fontSize: "clamp(3rem, 9vw, 8rem)", fontWeight: 800,
              lineHeight: 0.95, letterSpacing: -2, color: "var(--bright)", marginBottom: 8,
            }}>
              Ankur
            </h1>
            <h1 style={{
              fontSize: "clamp(3rem, 9vw, 8rem)", fontWeight: 800,
              lineHeight: 0.95, letterSpacing: -2,
              color: "transparent", WebkitTextStroke: "1px var(--dim)", marginBottom: 32,
            }}>
              Tyagi
            </h1>

            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 40, height: 28 }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "clamp(0.85rem, 2vw, 1.1rem)", color: "var(--sub)" }}>
                {typed}
              </span>
              <span style={{
                display: "inline-block", width: 2, height: "1.1em",
                background: "var(--text)", animation: "blink 1s step-end infinite",
              }} />
            </div>

            <p style={{
              maxWidth: 520, color: "var(--muted)", lineHeight: 1.7,
              fontSize: "clamp(0.9rem, 1.5vw, 1rem)", marginBottom: 48,
            }}>
              BCA student at HR Institute of Science &amp; Technology. Building scalable
              Android &amp; Web applications, integrating APIs, and contributing to
              real-world software projects.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link to="/contact" style={btnSolid}>Get in touch ↗</Link>
              <Link to="/projects" style={btnOutline}>View work</Link>
              <a href="https://linkedin.com/in/ankurtyagi09" target="_blank" rel="noreferrer"
                style={{ ...btnGhost, fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: 1 }}>
                LinkedIn ↗
              </a>
              <a href="https://github.com/AnkurTyagi-09" target="_blank" rel="noreferrer"
                style={{ ...btnGhost, fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: 1 }}>
                GitHub ↗
              </a>
            </div>
          </div>

          {/* Floating stat cards */}
          <div className="fade-up stat-cards" style={{
            animationDelay: "0.4s", opacity: 0,
            position: "absolute", right: "clamp(1.5rem, 5vw, 6rem)",
            top: "50%", transform: "translateY(-50%)",
            display: "flex", flexDirection: "column", gap: 12,
          }}>
            {[["34", "Projects"], ["1", "Internship"], ["BCA", "In Progress"]].map(([n, l]) => (
              <div key={l} style={{
                background: "var(--bg2)", border: "1px solid var(--border)",
                padding: "16px 20px", borderRadius: 8, minWidth: 110,
              }}>
                <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--bright)", lineHeight: 1 }}>{n}</div>
                <div style={{
                  fontFamily: "'DM Mono', monospace", fontSize: 10,
                  color: "var(--muted)", letterSpacing: 1,
                  textTransform: "uppercase", marginTop: 4,
                }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <style>{`@media (max-width: 900px) { .stat-cards { display: none !important; } }`}</style>
      </section>

      <SkillsMarquee />
    </>
  );
}
