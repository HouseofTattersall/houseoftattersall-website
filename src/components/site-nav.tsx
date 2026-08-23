"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const locations = [
  { href: "/derbyshire-wedding-film/", label: "Derbyshire" },
  { href: "/staffordshire-wedding/", label: "Staffordshire" },
  { href: "/nottinghamshire-wedding/", label: "Nottinghamshire" },
];

const primary = [
  { href: "/about/", label: "About" },
  { href: "/films/", label: "Films" },
];

const secondary = [
  { href: "/investment/", label: "Investment" },
  { href: "/blog/", label: "Film Reviews" },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 8"
      className={`h-2 w-3 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M1 1.5 6 6.5 11 1.5" />
    </svg>
  );
}

export function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [locOpen, setLocOpen] = useState(false);
  const [mobileLocOpen, setMobileLocOpen] = useState(false);
  const locRef = useRef<HTMLDivElement>(null);

  const closeAll = () => {
    setMenuOpen(false);
    setLocOpen(false);
    setMobileLocOpen(false);
  };

  // close the desktop dropdown on outside click or Escape
  useEffect(() => {
    if (!locOpen) return;
    const onClick = (e: MouseEvent) => {
      if (locRef.current && !locRef.current.contains(e.target as Node)) {
        setLocOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLocOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [locOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--rule)] bg-[var(--paper)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
        <Link
          href="/"
          onClick={closeAll}
          className="font-serif text-sm tracking-[0.08em] text-[var(--khaki)] uppercase sm:text-base sm:tracking-[0.12em] lg:text-lg"
        >
          House of Tattersall
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-7 text-sm tracking-wide text-[var(--ink-muted)] md:flex">
          {primary.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[var(--khaki)]"
            >
              {link.label}
            </Link>
          ))}

          <div ref={locRef} className="relative">
            <button
              type="button"
              onClick={() => setLocOpen((v) => !v)}
              aria-expanded={locOpen}
              aria-haspopup="true"
              className="flex items-center gap-1.5 tracking-wide transition-colors hover:text-[var(--khaki)]"
            >
              Locations
              <Chevron open={locOpen} />
            </button>

            {locOpen ? (
              <div className="absolute top-full left-1/2 z-50 mt-4 w-56 -translate-x-1/2 border border-[var(--rule)] bg-[var(--paper)] py-2 shadow-lg">
                {locations.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeAll}
                    className="block px-5 py-3 text-sm text-[var(--ink-muted)] transition-colors hover:bg-[var(--khaki-wash)] hover:text-[var(--khaki)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          {secondary.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[var(--khaki)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/enquire/"
            onClick={closeAll}
            className="rounded-full bg-[var(--khaki)] px-3 py-2 text-[0.65rem] tracking-[0.1em] text-[var(--paper)] uppercase transition-colors hover:bg-[var(--khaki-deep)] sm:px-5 sm:text-xs sm:tracking-[0.15em]"
          >
            Enquire
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--rule)] text-[var(--khaki)] transition-colors hover:bg-[var(--khaki-wash)] md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 block h-[1.5px] w-5 bg-current transition-all duration-200 ${
                  menuOpen ? "top-1/2 rotate-45" : "top-0.5"
                }`}
              />
              <span
                className={`absolute top-1/2 left-0 block h-[1.5px] w-5 -translate-y-1/2 bg-current transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-[1.5px] w-5 bg-current transition-all duration-200 ${
                  menuOpen ? "top-1/2 -rotate-45" : "bottom-0.5"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <nav
        id="mobile-menu"
        hidden={!menuOpen}
        className="border-t border-[var(--rule)] bg-[var(--paper)] md:hidden"
      >
        <ul className="mx-auto max-w-6xl px-6 py-2">
          {primary.map((link) => (
            <li key={link.href} className="border-b border-[var(--rule)]">
              <Link
                href={link.href}
                onClick={closeAll}
                className="block py-4 font-serif text-lg text-[var(--khaki)]"
              >
                {link.label}
              </Link>
            </li>
          ))}

          <li className="border-b border-[var(--rule)]">
            <button
              type="button"
              onClick={() => setMobileLocOpen((v) => !v)}
              aria-expanded={mobileLocOpen}
              className="flex w-full items-center justify-between py-4 font-serif text-lg text-[var(--khaki)]"
            >
              Locations
              <Chevron open={mobileLocOpen} />
            </button>
            {mobileLocOpen ? (
              <ul className="pb-2 pl-4">
                {locations.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeAll}
                      className="block py-3 text-[var(--ink-muted)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>

          {secondary.map((link) => (
            <li key={link.href} className="border-b border-[var(--rule)]">
              <Link
                href={link.href}
                onClick={closeAll}
                className="block py-4 font-serif text-lg text-[var(--khaki)]"
              >
                {link.label}
              </Link>
            </li>
          ))}

          <li className="py-5">
            <Link
              href="/enquire/"
              onClick={closeAll}
              className="block rounded-full bg-[var(--khaki)] px-6 py-3 text-center text-sm tracking-[0.15em] text-[var(--paper)] uppercase"
            >
              Enquire
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
