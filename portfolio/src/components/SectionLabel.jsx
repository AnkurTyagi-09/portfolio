export default function SectionLabel({ label, small }) {
  return (
    <div style={{
      fontFamily: "'DM Mono', monospace",
      fontSize: small ? 9 : 10,
      letterSpacing: 3,
      textTransform: "uppercase",
      color: "var(--muted)",
      marginBottom: small ? 0 : 16,
      display: "flex",
      alignItems: "center",
      gap: 12,
    }}>
      <span style={{ display: "inline-block", width: 24, height: 1, background: "var(--dim)" }} />
      {label}
    </div>
  );
}
