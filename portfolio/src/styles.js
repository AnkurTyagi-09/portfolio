import tokens from "./styles/tokens.css?inline";

export const globalCSS = `
${tokens}

@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&family=DM+Mono:wght@400;500&display=swap');

* { box-sizing: border-box; }

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  position: relative;
}

/* faint horizon atmosphere behind every page, purple sparingly */
body::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background:
    radial-gradient(ellipse 60% 40% at 50% 0%, rgba(118, 87, 255, 0.10), transparent 70%),
    linear-gradient(180deg, var(--desert-black) 0%, var(--desert-deep) 100%);
}

::selection {
  background: var(--purple-main);
  color: var(--moon);
}

a { color: inherit; }

/* ---- custom cursor ---- */
.cursor {
  position: fixed; top: 0; left: 0;
  width: 6px; height: 6px;
  background: var(--moon);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.1s ease;
}
.cursor-ring {
  position: fixed; top: 0; left: 0;
  width: 32px; height: 32px;
  border: 1px solid var(--purple-soft);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9998;
  transition: left 0.12s ease, top 0.12s ease, opacity 0.2s ease;
  opacity: 0.6;
}
@media (hover: none) {
  .cursor, .cursor-ring { display: none; }
}

/* ---- shared motion ---- */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
}
.fade-up {
  animation: fadeUp var(--dur-enter) var(--ease-cinematic) forwards;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 28s linear infinite;
}
.marquee-track:hover {
  animation-play-state: paused;
}

@media (prefers-reduced-motion: reduce) {
  .fade-up { animation: none; opacity: 1; }
  .marquee-track { animation: none; }
  html { scroll-behavior: auto; }
}
`;

/* ---- shared inline-style objects, reused across pages ---- */

export const btnSolid = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  padding: "13px 26px",
  background: "var(--purple-main)",
  color: "var(--moon)",
  fontFamily: "var(--font-mono)",
  fontSize: 12,
  letterSpacing: 1,
  textTransform: "uppercase",
  textDecoration: "none",
  borderRadius: 8,
  border: "1px solid var(--purple-main)",
  transition: "background 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease",
  boxShadow: "0 0 0 rgba(118,87,255,0)",
};

export const btnOutline = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  padding: "13px 26px",
  background: "transparent",
  color: "var(--text)",
  fontFamily: "var(--font-mono)",
  fontSize: 12,
  letterSpacing: 1,
  textTransform: "uppercase",
  textDecoration: "none",
  borderRadius: 8,
  border: "1px solid var(--border)",
  transition: "border-color 0.25s ease, color 0.25s ease",
};

export const btnGhost = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  padding: "13px 10px",
  background: "transparent",
  color: "var(--muted)",
  textDecoration: "none",
  border: "1px solid transparent",
  transition: "color 0.2s ease",
};

export const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  background: "var(--bg3)",
  border: "1px solid var(--border)",
  borderRadius: 8,
  color: "var(--text)",
  fontFamily: "var(--font-body)",
  fontSize: "0.9rem",
  outline: "none",
  transition: "border-color 0.2s ease",
};