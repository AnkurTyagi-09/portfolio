import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [location]);

  const getPath = (link) => link === "Home" ? "/" : `/${link.toLowerCase()}`;

  const isActive = (link) => {
    const path = getPath(link);
    return location.pathname === path;
  };

  const navStyle = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
    transition: "all 0.4s",
    background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
    backdropFilter: scrolled ? "blur(20px)" : "none",
    borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
    padding: "0 clamp(1.5rem, 5vw, 4rem)",
  };

  return (
    <nav style={navStyle}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "flex", alignItems: "center",
        justifyContent: "space-between", height: 64,
      }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span style={{
            fontFamily: "'DM Mono', monospace", fontSize: 13,
            color: "var(--muted)", letterSpacing: 2, textTransform: "uppercase",
          }}>
            AT<span style={{ color: "var(--bright)" }}>.</span>dev
          </span>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: 36 }} className="desktop-nav">
          {NAV_LINKS.map(l => (
            <Link key={l} to={getPath(l)} style={{
              fontFamily: "'DM Mono', monospace", fontSize: 11,
              letterSpacing: 2, textTransform: "uppercase",
              color: isActive(l) ? "var(--bright)" : "var(--muted)",
              textDecoration: "none", transition: "color 0.2s",
              borderBottom: isActive(l) ? "1px solid var(--bright)" : "1px solid transparent",
              paddingBottom: 2,
            }}>
              {l}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "none", border: "none", color: "var(--text)",
            cursor: "none", padding: 8, display: "none",
          }}
          className="mobile-btn"
        >
          <span style={{ display: "block", width: 20, height: 1, background: "currentColor", marginBottom: 5, transition: "all 0.2s", transform: open ? "rotate(45deg) translateY(6px)" : "" }} />
          <span style={{ display: "block", width: 20, height: 1, background: "currentColor", opacity: open ? 0 : 1, transition: "opacity 0.2s" }} />
          <span style={{ display: "block", width: 20, height: 1, background: "currentColor", marginTop: 5, transition: "all 0.2s", transform: open ? "rotate(-45deg) translateY(-6px)" : "" }} />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          background: "var(--bg2)", borderTop: "1px solid var(--border)",
          padding: "1rem clamp(1.5rem, 5vw, 4rem)",
        }}>
          {NAV_LINKS.map(l => (
            <Link key={l} to={getPath(l)} style={{
              display: "block", padding: "12px 0",
              fontFamily: "'DM Mono', monospace", fontSize: 12,
              letterSpacing: 2, textTransform: "uppercase",
              color: isActive(l) ? "var(--bright)" : "var(--text)",
              textDecoration: "none", borderBottom: "1px solid var(--border)",
            }}>
              {l}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
