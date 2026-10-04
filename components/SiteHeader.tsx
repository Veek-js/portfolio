"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { ArrowUpRight, Moon, Sun } from "./ui";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable */
    }
  }

  return (
    <>
      <header className="site-header">
        <div className="wrap flex h-[52px] items-center justify-between gap-6">
          <a
            href="#top"
            className="font-display text-[1.1rem] tracking-tight text-ink"
            onClick={() => setOpen(false)}
          >
            veekshith<span className="text-clay">.</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <span className="dynamic-island hidden sm:inline-flex">
              <span className="dot-gradient" />
              Available
            </span>

            <button
              type="button"
              onClick={toggleTheme}
              className="icon-btn"
              aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            >
              {dark ? <Sun /> : <Moon />}
            </button>

            <button
              type="button"
              className="icon-btn lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="relative block h-3 w-4">
                <span
                  className="absolute left-0 block h-px w-4 bg-current transition-transform duration-300"
                  style={{ top: open ? "6px" : "3px", transform: open ? "rotate(45deg)" : "none" }}
                />
                <span
                  className="absolute left-0 block h-px w-4 bg-current transition-transform duration-300"
                  style={{ top: "9px", transform: open ? "rotate(-45deg)" : "none" }}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-sheet lg:hidden ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="wrap flex flex-col gap-1 w-full">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-line-soft py-3.5 font-display text-2xl text-ink"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 w-full">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost w-full sm:w-auto"
            >
              GitHub <ArrowUpRight />
            </a>
            <a href={`mailto:${site.email}`} className="btn btn--primary w-full sm:w-auto">
              Email
            </a>
          </div>
        </div>
      </div>
    </>
  );
}