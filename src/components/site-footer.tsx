import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-[var(--gold)] bg-[var(--paper-alt)] py-14 text-[var(--ink-muted)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 text-sm md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-serif text-base tracking-[0.12em] text-[var(--khaki)] uppercase">
            House of Tattersall
          </p>
          <p className="mt-2">Denstone, Staffordshire, UK</p>
          <p className="mt-1 text-[var(--gold)]">2027 &amp; 2028 dates now open</p>
        </div>

        <div className="flex flex-col gap-2">
          <Link href="/derbyshire-wedding-film/" className="hover:text-[var(--khaki)]">
            Derbyshire Wedding Videographer
          </Link>
          <Link href="/staffordshire-wedding/" className="hover:text-[var(--khaki)]">
            Staffordshire Wedding Videographer
          </Link>
          <Link href="/nottinghamshire-wedding/" className="hover:text-[var(--khaki)]">
            Nottinghamshire Wedding Videographer
          </Link>
          <Link href="/investment/" className="hover:text-[var(--khaki)]">
            Investment
          </Link>
          <Link href="/blog/" className="hover:text-[var(--khaki)]">
            Film Reviews
          </Link>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
          <a
            href="mailto:info@houseoftattersall.com"
            className="hover:text-[var(--khaki)]"
          >
            info@houseoftattersall.com
          </a>
          <a
            href="https://www.instagram.com/houseoftattersallfilms"
            className="hover:text-[var(--khaki)]"
          >
            @houseoftattersallfilms
          </a>
          <Link
            href="/enquire/"
            className="mt-3 rounded-full bg-[var(--khaki)] px-5 py-2 text-xs tracking-[0.15em] text-[var(--paper)] uppercase hover:bg-[var(--khaki-deep)]"
          >
            Enquire
          </Link>
        </div>
      </div>
    </footer>
  );
}
