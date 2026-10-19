import { availability } from "@/lib/availability";

/**
 * The remaining-dates count, as a small panel.
 *
 * The cap is the reason the number is low, so it says so. Scarcity without
 * a reason reads as a sales tactic; scarcity with a reason reads as a fact.
 */
export function AvailabilityNote({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`rounded-sm border border-[var(--gold)]/40 bg-[var(--khaki-wash)] px-6 py-5 ${className}`}
    >
      <p className="text-xs tracking-[0.3em] text-[var(--gold)] uppercase">
        Availability
      </p>
      <div className="mt-4 flex flex-wrap gap-x-10 gap-y-4">
        {availability.years.map((y) => (
          <div key={y.year}>
            <p className="font-serif text-3xl leading-none text-[var(--khaki)]">
              {y.datesLeft}
            </p>
            <p className="mt-2 text-sm text-[var(--ink-muted)]">
              {y.datesLeft === 1 ? "date" : "dates"} left for {y.year}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-5 text-sm leading-relaxed text-[var(--ink-muted)]">
        I take a maximum of 15 weddings a year so that every one is filmed
        personally, which is why these numbers are small. Correct as of{" "}
        {availability.asOf}.
      </p>
    </div>
  );
}

/** One-line version, for footers and bands. */
export function AvailabilityLine() {
  const [first, ...rest] = availability.years;
  return (
    <>
      {first.datesLeft} {first.datesLeft === 1 ? "date" : "dates"} left for{" "}
      {first.year}
      {rest.map((y) => `, ${y.datesLeft} for ${y.year}`).join("")}
    </>
  );
}
