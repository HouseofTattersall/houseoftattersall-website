import Link from "next/link";

type County = {
  heading: string;
  href: string;
  body: string;
  linkLabel: string;
};

const counties: County[] = [
  {
    heading: "Wedding videographer, Staffordshire",
    href: "/staffordshire-wedding/",
    linkLabel: "Staffordshire wedding videography",
    body: "Wedding videography in Staffordshire from £2,000, including 10 hours of full-day coverage, drone footage and your ceremony and speeches in full. Based in Denstone, so the whole county sits inside the 50 miles of travel included in the price. Venues filmed at include Hanbury Wedding Barns, Foxtail Barns and The Ashes Barns.",
  },
  {
    heading: "Wedding videographer, Derbyshire",
    href: "/derbyshire-wedding-film/",
    linkLabel: "Derbyshire wedding videography",
    body: "Wedding videography in Derbyshire and the Peak District from £2,000, on the same terms: full-day coverage, drone where the venue allows it, and your ceremony and speeches as films in their own right. Venues filmed at include The West Mill in Derby, Yeldersley Hall, Grangefields and Lower Damgate Farm.",
  },
  {
    heading: "Wedding videographer, Nottinghamshire",
    href: "/nottinghamshire-wedding/",
    linkLabel: "Nottinghamshire wedding videography",
    body: "Wedding videography in Nottinghamshire from £2,000. Venues filmed at include Hazel Gap Barn, The Pumping House near Ollerton, Cockliffe Country House and Carriage Hall. Nottinghamshire sits a little beyond the included 50 miles from some postcodes, so there may be a small charge per mile. Ask and I will tell you before you book.",
  },
];

export function WhereIFilm() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-center font-serif text-3xl text-[var(--khaki)]">
        Wedding videography in Staffordshire, Derbyshire and Nottinghamshire
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-center leading-relaxed text-[var(--ink-muted)]">
        A maximum of 15 weddings a year, every one filmed personally by Andy
        Tattersall. These are the three counties most of them happen in, though
        the diary is open UK-wide.
      </p>

      <div className="mt-12 grid gap-10 md:grid-cols-3">
        {counties.map((c) => (
          <div key={c.href}>
            <h3 className="font-serif text-xl text-[var(--khaki)]">
              {c.heading}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">
              {c.body}
            </p>
            <p className="mt-4 text-sm">
              <Link
                href={c.href}
                className="text-[var(--khaki)] underline underline-offset-4"
              >
                {c.linkLabel}
              </Link>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
