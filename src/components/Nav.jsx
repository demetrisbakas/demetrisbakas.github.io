import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { navSections, profile } from "../data/cv";
import useScrollSpy from "../hooks/useScrollSpy";
import { IconClose, IconDownload, IconMenu, IconMoon, IconSun } from "./icons";

export default function Nav({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(navSections.map((s) => s.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <a className="nav__brand" href="#home" aria-label="Demetris Bakas — home">
          <span className="nav__mark">DB</span>
          <span className="nav__brand-full">Demetris Bakas</span>
        </a>

        <nav aria-label="Primary">
          <ul className="nav__links">
            {navSections.map((s) => (
              <li key={s.id}>
                <a
                  className={`nav__link ${active === s.id ? "nav__link--active" : ""}`}
                  href={`#${s.id}`}
                  aria-current={active === s.id ? "true" : undefined}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__actions">
          <a
            className="btn btn--primary btn--sm only-desktop"
            href={profile.cvPdf}
            download
          >
            <IconDownload width={15} height={15} /> CV
          </a>
          <button
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <IconSun /> : <IconMoon />}
          </button>
          <button
            className="icon-btn nav__toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <ul>
              {navSections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} onClick={() => setOpen(false)}>
                    {s.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={profile.cvPdf} download onClick={() => setOpen(false)}>
                  ↓ Download CV (PDF)
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
