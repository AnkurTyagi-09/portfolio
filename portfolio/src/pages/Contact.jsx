import { useState } from "react";
import { btnSolid, inputStyle } from "../styles";
import SectionLabel from "../components/SectionLabel";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section style={{
      padding: "clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)",
      paddingTop: "calc(clamp(5rem,10vw,8rem) + 64px)",
      background: "var(--bg2)",
      borderTop: "1px solid var(--border)",
      minHeight: "100vh",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionLabel label="04 — Contact" />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "clamp(2rem, 6vw, 5rem)", alignItems: "start",
        }}>
          {/* Left: info */}
          <div>
            <h2 style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800,
              color: "var(--bright)", letterSpacing: -1,
              lineHeight: 1.1, marginBottom: 20,
            }}>
              Let's build<br />
              <span style={{ color: "transparent", WebkitTextStroke: "1px var(--dim)" }}>together.</span>
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: 40 }}>
              I'm always open to new opportunities, interesting projects, or just a chat
              about technology. Currently available for internship roles and freelance work.
            </p>

            {[
              { label: "Email", value: "tyagiank09@gmail.com", href: "mailto:tyagiank09@gmail.com" },
              { label: "LinkedIn", value: "linkedin.com/in/ankurtyagi09", href: "https://linkedin.com/in/ankurtyagi09" },
              { label: "GitHub", value: "github.com/AnkurTyagi-09", href: "https://github.com/AnkurTyagi-09" },
              { label: "Location", value: "Ghaziabad, India", href: null },
            ].map(c => (
              <div key={c.label} style={{ display: "flex", gap: 16, marginBottom: 20, alignItems: "center" }}>
                <span style={{
                  fontFamily: "'DM Mono', monospace", fontSize: 9,
                  color: "var(--muted)", letterSpacing: 2,
                  textTransform: "uppercase", width: 60, flexShrink: 0,
                }}>{c.label}</span>
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noreferrer" style={{
                    color: "var(--text)", textDecoration: "none",
                    fontSize: "0.88rem", borderBottom: "1px solid var(--dim)", paddingBottom: 1,
                  }}>{c.value}</a>
                ) : (
                  <span style={{ color: "var(--sub)", fontSize: "0.88rem" }}>{c.value}</span>
                )}
              </div>
            ))}
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { key: "name", placeholder: "Your name", type: "text" },
              { key: "email", placeholder: "Your email", type: "email" },
            ].map(f => (
              <input
                key={f.key} type={f.type} placeholder={f.placeholder} required
                value={form[f.key]}
                onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = "var(--text)"}
                onBlur={e => e.target.style.borderColor = "var(--border)"}
              />
            ))}
            <textarea
              placeholder="Your message" required rows={5}
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
              onFocus={e => e.target.style.borderColor = "var(--text)"}
              onBlur={e => e.target.style.borderColor = "var(--border)"}
            />
            <button type="submit" style={{
              ...btnSolid, cursor: "none", border: "none",
              fontSize: "0.9rem", padding: "14px 28px", alignSelf: "flex-start",
            }}>
              {sent ? "Message sent ✓" : "Send message →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
