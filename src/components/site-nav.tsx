import Link from "next/link";

const links = [
  { href: "/about/", label: "About" },
  { href: "/films/", label: "Films" },
  { href: "/enquire/", label: "Enquire" },
  { href: "/investment/", label: "Investment" },
  { href: "/blog/", label: "Film Reviews" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-serif text-lg tracking-wide text-white uppercase"
        >
          House of Tattersall
        </Link>
        <nav className="hidden gap-8 text-sm tracking-wide text-white/80 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/enquire/"
          className="rounded-full border border-white/30 px-4 py-2 text-xs tracking-wide text-white uppercase transition-colors hover:bg-white hover:text-black"
        >
          Enquire
        </Link>
      </div>
    </header>
  );
}
