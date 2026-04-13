export const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg:     #0a0a0a;
    --bg2:    #111111;
    --bg3:    #1a1a1a;
    --border: #2a2a2a;
    --dim:    #3a3a3a;
    --muted:  #666666;
    --sub:    #999999;
    --text:   #e8e8e8;
    --bright: #ffffff;
    --accent: #d4d4d4;
    --glow:   rgba(212,212,212,0.08);
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Syne', sans-serif;
    overflow-x: hidden;
    cursor: none;
  }

  ::-webkit-scrollbar { width: 3px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--dim); border-radius: 2px; }

  .cursor {
    position: fixed;
    width: 10px; height: 10px;
    background: var(--bright);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%,-50%);
    transition: transform 0.1s, width 0.2s, height 0.2s, opacity 0.2s;
    mix-blend-mode: difference;
  }
  .cursor-ring {
    position: fixed;
    width: 36px; height: 36px;
    border: 1px solid rgba(255,255,255,0.4);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9998;
    transform: translate(-50%,-50%);
    transition: transform 0.15s, width 0.3s, height 0.3s;
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 0;
    opacity: 0.4;
  }

  section { position: relative; z-index: 1; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes blink {
    0%,100% { opacity: 1; } 50% { opacity: 0; }
  }
  .fade-up { animation: fadeUp 0.7s cubic-bezier(.16,1,.3,1) forwards; }

  @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  .marquee-track { animation: marquee 18s linear infinite; display: flex; white-space: nowrap; }
`;

export const btnSolid = {
  display: "inline-flex", alignItems: "center", gap: 8,
  background: "var(--bright)", color: "#0a0a0a",
  padding: "12px 24px", borderRadius: 6, fontWeight: 700,
  textDecoration: "none", fontSize: "0.85rem", transition: "opacity 0.2s",
  fontFamily: "'Syne', sans-serif",
};

export const btnOutline = {
  display: "inline-flex", alignItems: "center", gap: 8,
  background: "transparent", color: "var(--text)",
  border: "1px solid var(--border)", padding: "12px 24px",
  borderRadius: 6, fontWeight: 600, textDecoration: "none",
  fontSize: "0.85rem", transition: "border-color 0.2s",
  fontFamily: "'Syne', sans-serif",
};

export const btnGhost = {
  display: "inline-flex", alignItems: "center",
  color: "var(--muted)", textDecoration: "none",
  padding: "12px 16px", fontSize: "0.8rem",
  transition: "color 0.2s",
};

export const inputStyle = {
  background: "var(--bg3)", border: "1px solid var(--border)",
  borderRadius: 8, padding: "14px 16px", color: "var(--text)",
  fontFamily: "'Syne', sans-serif", fontSize: "0.9rem",
  outline: "none", transition: "border-color 0.2s", width: "100%",
};
