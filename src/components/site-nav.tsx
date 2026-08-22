"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/about/", label: "About" },
  { href: "/films/", label: "Films" },
  { href: "/derbyshire-wedding-film/", label: "Derbyshire" },
  { href: "/staffordshire-wedding/", label: "Staffordshire" },
  { href: "/investment/", label: "Investment" },
  { href: "/blog/", label: "Film Reviews" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--rule)] bg-[var(--paper)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
        <Link
          href="/"
          onClick={close}
          className="font-serif text-sm tracking-[0.08em] text-[var(--khaki)] uppercase sm:text-base sm:tracking-[0.12em] lg:text-lg"
        >
          House of Tattersall
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden gap-7 text-sm tracking-wide text-[var(--ink-muted)] lg:flex">
          {links.map((link) => (
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
            onClick={close}
            className="rounded-full bg-[var(--khaki)] px-3 py-2 text-[0.65rem] tracking-[0.1em] text-[var(--paper)] uppercase transition-colors hover:bg-[var(--khaki-deep)] sm:px-5 sm:text-xs sm:tracking-[0.15em]"
          >
            Enquire
          </Link>

          {/* Menu toggle, shown below the desktop breakpoint */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--rule)] text-[var(--khaki)] transition-colors hover:bg-[var(--khaki-wash)] lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 block h-[1.5px] w-5 bg-current transition-all duration-200 ${
                  open ? "top-1/2 rotate-45" : "top-0.5"
                }`}
              />
              <span
                className={`absolute top-1/2 left-0 block h-[1.5px] w-5 -translate-y-1/2 bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-[1.5px] w-5 bg-current transition-all duration-200 ${
                  open ? "top-1/2 -rotate-45" : "bottom-0.5"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <nav
        id="mobile-menu"
        hidden={!open}
        className="border-t border-[var(--rule)] bg-[var(--paper)] lg:hidden"
      >
        <ul className="mx-auto max-w-6xl px-6 py-2">
          {links.map((link) => (
            <li key={link.href} className="border-b border-[var(--rule)] last:border-0">
              <Link
                href={link.href}
                onClick={close}
                className="block py-4 font-serif text-lg text-[var(--khaki)] transition-colors hover:text-[var(--khaki-deep)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="py-5">
            <Link
              href="/enquire/"
              onClick={close}
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
