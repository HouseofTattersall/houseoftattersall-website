import Link from "next/link";

const links = [
  { href: "/about/", label: "About" },
  { href: "/films/", label: "Films" },
  { href: "/derbyshire-wedding-film/", label: "Derbyshire" },
  { href: "/staffordshire-wedding/", label: "Staffordshire" },
  { href: "/investment/", label: "Investment" },
  { href: "/blog/", label: "Film Reviews" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--rule)] bg-[var(--paper)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-serif text-lg tracking-[0.12em] text-[var(--khaki)] uppercase"
        >
          House of Tattersall
        </Link>
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
        <Link
          href="/enquire/"
          className="rounded-full bg-[var(--khaki)] px-5 py-2 text-xs tracking-[0.15em] text-[var(--paper)] uppercase transition-colors hover:bg-[var(--khaki-deep)]"
        >
          Enquire
        </Link>
      </div>
    </header>
  );
}
