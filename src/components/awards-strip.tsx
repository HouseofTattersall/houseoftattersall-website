const awards = [
  { year: "2025", title: "National Finalist", detail: "Wedding Videography" },
  {
    year: "2025",
    title: "East Midlands Winner",
    detail: "Videographer of the Year",
  },
  {
    year: "2026",
    title: "Highly Commended",
    detail: "East Midlands",
  },
  { year: "2024", title: "Regional Finalist", detail: "East Midlands" },
];

/**
 * The Wedding Industry Awards results, set typographically.
 * No badge artwork: the site's own serif does the work.
 */
export function AwardsStrip({
  heading = "The Wedding Industry Awards",
}: {
  heading?: string;
}) {
  return (
    <section className="border-y border-[var(--rule)] bg-[var(--paper-alt)] px-6 py-14">
      <div className="mx-auto max-w-5xl">
        {heading ? (
          <p className="text-center text-xs tracking-[0.3em] text-[var(--gold)] uppercase">
            {heading}
          </p>
        ) : null}

        <ul className="mt-10 grid grid-cols-2 gap-y-10 sm:grid-cols-4 sm:gap-y-0">
          {awards.map((award, i) => (
            <li
              key={`${award.title}-${award.year}`}
              className={`px-4 text-center ${
                i > 0 ? "sm:border-l sm:border-[var(--rule)]" : ""
              }`}
            >
              <p className="font-serif text-3xl leading-none text-[var(--khaki)]">
                {award.year}
              </p>
              <span
                aria-hidden="true"
                className="mx-auto mt-4 block h-px w-8 bg-[var(--gold)]/60"
              />
              <p className="mt-4 font-serif text-sm leading-snug tracking-[0.06em] text-[var(--khaki)] uppercase">
                {award.title}
              </p>
              <p className="mt-1 font-serif text-sm leading-snug text-[var(--ink-muted)] italic">
                {award.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
