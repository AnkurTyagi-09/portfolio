export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      padding: "24px clamp(1.5rem, 5vw, 4rem)",
      display: "flex", justifyContent: "space-between",
      alignItems: "center", flexWrap: "wrap", gap: 12,
    }}>
      <span style={{
        fontFamily: "'DM Mono', monospace", fontSize: 10,
        color: "var(--muted)", letterSpacing: 2,
      }}>
        © 2025 ANKUR TYAGI — ALL RIGHTS RESERVED
      </span>
      <div style={{ display: "flex", gap: 24 }}>
        {[
          ["GitHub", "https://github.com/AnkurTyagi-09"],
          ["LinkedIn", "https://linkedin.com/in/ankurtyagi09"],
          ["Email", "mailto:tyagiank09@gmail.com"],
        ].map(([l, h]) => (
          <a key={l} href={h} target="_blank" rel="noreferrer" style={{
            fontFamily: "'DM Mono', monospace", fontSize: 10,
            letterSpacing: 2, color: "var(--muted)",
            textDecoration: "none", textTransform: "uppercase",
          }}>
            {l}
          </a>
        ))}
      </div>
    </footer>
  );
}
