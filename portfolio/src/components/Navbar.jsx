import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const getPath = (link) =>
    link === "Home"
      ? "/"
      : `/${link.toLowerCase()}`;

  const isActive = (link) =>
    location.pathname === getPath(link);

  return (
    <nav className={`comicNavbar ${scrolled ? "scrolled" : ""}`}>
      <div className="comicNavInner">
        <Link to="/" className="comicLogo">
          <span className="logoIssue">AT</span>
          <span className="logoSlash">/</span>
          <span className="logoDev">DEV</span>
        </Link>

        <div className="comicDesktopNav">
          {NAV_LINKS.map((link, index) => (
            <Link
              key={link}
              to={getPath(link)}
              className={isActive(link) ? "active" : ""}
            >
              <small>{String(index + 1).padStart(2, "0")}</small>
              <span>{link}</span>
            </Link>
          ))}
        </div>

        <div className="navCaseMark">
          <span>PORTFOLIO</span>
          <strong>2026</strong>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className={`comicMenuButton ${open ? "open" : ""}`}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`comicMobileMenu ${open ? "open" : ""}`}>
        <div className="mobileMenuHeader">
          <span>CONTENTS / NAVIGATION</span>
          <span>ANKUR.DEV</span>
        </div>

        {NAV_LINKS.map((link, index) => (
          <Link
            key={link}
            to={getPath(link)}
            className={isActive(link) ? "active" : ""}
          >
            <small>{String(index + 1).padStart(2, "0")}</small>
            <span>{link}</span>
            <strong>→</strong>
          </Link>
        ))}
      </div>

      <style>{`
        .comicNavbar {
          position: fixed;
          z-index: 1000;
          top: 14px;
          left: 0;
          right: 0;
          padding: 0 clamp(1rem,4vw,3rem);
          pointer-events: none;
        }

        .comicNavInner {
          max-width: 1240px;
          min-height: 58px;
          margin: auto;
          padding: 0 10px 0 14px;
          display: flex;
          align-items: center;
          gap: 22px;
          background: rgba(17,16,21,.72);
          border: 1px solid rgba(255,255,255,.09);
          box-shadow: 0 12px 38px rgba(0,0,0,.18);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          pointer-events: auto;
          transition:
            background .25s ease,
            border-color .25s ease,
            transform .25s ease;
        }

        .comicNavbar.scrolled .comicNavInner {
          background: rgba(15,14,19,.93);
          border-color: rgba(255,255,255,.12);
        }

        .comicLogo {
          min-width: 105px;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          text-decoration: none;
          font-family: var(--font-mono);
          letter-spacing: 1.2px;
        }

        .logoIssue {
          display: grid;
          place-items: center;
          width: 27px;
          height: 27px;
          background: #ddcfa3;
          border: 1px solid #2a232b;
          color: #211b22;
          font-size: 8px;
          font-weight: 700;
          transform: rotate(-2deg);
        }

        .logoSlash {
          color: #4f4952;
          font-size: 9px;
        }

        .logoDev {
          color: #b7afb9;
          font-size: 8px;
        }

        .comicDesktopNav {
          flex: 1;
          display: flex;
          justify-content: center;
          gap: clamp(16px,2.5vw,34px);
        }

        .comicDesktopNav a {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: #77717b;
          text-decoration: none;
          font-family: var(--font-mono);
          font-size: 7px;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: color .2s ease;
        }

        .comicDesktopNav a small {
          color: #4d4850;
          font-size: 5px;
        }

        .comicDesktopNav a::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -9px;
          height: 2px;
          background: #ae95c1;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .2s ease;
        }

        .comicDesktopNav a:hover,
        .comicDesktopNav a.active {
          color: #e8e1e9;
        }

        .comicDesktopNav a.active::after {
          transform: scaleX(1);
        }

        .navCaseMark {
          min-width: 82px;
          padding-left: 14px;
          border-left: 1px solid rgba(255,255,255,.08);
          font-family: var(--font-mono);
          text-align: right;
        }

        .navCaseMark span {
          display: block;
          margin-bottom: 2px;
          color: #55505a;
          font-size: 5px;
          letter-spacing: 1px;
        }

        .navCaseMark strong {
          color: #817986;
          font-size: 7px;
          font-weight: 500;
          letter-spacing: 1px;
        }

        .comicMenuButton {
          width: 38px;
          height: 38px;
          display: none;
          padding: 9px;
          background: #17151b;
          border: 1px solid rgba(255,255,255,.09);
          cursor: pointer;
        }

        .comicMenuButton span {
          display: block;
          width: 100%;
          height: 1px;
          background: #aaa2ad;
          transition:
            transform .22s ease,
            opacity .22s ease;
        }

        .comicMenuButton span + span {
          margin-top: 5px;
        }

        .comicMenuButton.open span:nth-child(1) {
          transform: rotate(45deg) translate(4px,4px);
        }

        .comicMenuButton.open span:nth-child(2) {
          opacity: 0;
        }

        .comicMenuButton.open span:nth-child(3) {
          transform: rotate(-45deg) translate(4px,-4px);
        }

        .comicMobileMenu {
          max-width: 1240px;
          max-height: 0;
          margin: 7px auto 0;
          overflow: hidden;
          background: #e8dfd4;
          border: 0 solid #292229;
          box-shadow: 10px 12px 0 rgba(0,0,0,.2);
          pointer-events: auto;
          transition:
            max-height .3s ease,
            border-width .2s ease;
        }

        .comicMobileMenu.open {
          max-height: 520px;
          border-width: 2px;
        }

        .mobileMenuHeader {
          padding: 10px 12px;
          display: flex;
          justify-content: space-between;
          color: #756a76;
          font-family: var(--font-mono);
          font-size: 5px;
          letter-spacing: 1px;
          border-bottom: 1px solid rgba(33,27,34,.16);
        }

        .comicMobileMenu a {
          min-height: 55px;
          padding: 0 14px;
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 12px;
          align-items: center;
          color: #5f5661;
          text-decoration: none;
          border-bottom: 1px solid rgba(33,27,34,.13);
          font-family: var(--font-mono);
        }

        .comicMobileMenu a small {
          font-size: 5px;
          color: #9b8e95;
        }

        .comicMobileMenu a span {
          font-size: 8px;
          letter-spacing: 1.2px;
          text-transform: uppercase;
        }

        .comicMobileMenu a strong {
          font-size: 10px;
          color: #817086;
        }

        .comicMobileMenu a.active {
          color: #211b22;
          background: #ddcfa3;
        }

        @media(max-width: 860px) {
          .comicDesktopNav,
          .navCaseMark {
            display: none;
          }

          .comicNavInner {
            justify-content: space-between;
          }

          .comicMenuButton {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}
