import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 text-white/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-base text-white">House of Tattersall</p>
          <p className="mt-1">Denstone, Staffordshire, UK</p>
        </div>
        <div className="flex flex-col gap-1 md:items-end">
          <a href="mailto:info@houseoftattersall.com" className="hover:text-white">
            info@houseoftattersall.com
          </a>
          <a
            href="https://www.instagram.com/houseoftattersallfilms"
            className="hover:text-white"
          >
            @houseoftattersallfilms
          </a>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl px-6 text-xs text-white/40">
        <div className="flex flex-wrap gap-4">
          <Link href="/derbyshire-wedding-film/" className="hover:text-white/70">
            Derbyshire Wedding Videographer
          </Link>
          <Link href="/staffordshire-wedding/" className="hover:text-white/70">
            Staffordshire Wedding Videographer
          </Link>
        </div>
      </div>
    </footer>
  );
}
