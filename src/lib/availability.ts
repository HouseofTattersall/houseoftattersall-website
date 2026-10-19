/**
 * Remaining dates, shown on the site.
 *
 * KEEP THIS HONEST. These numbers are the strongest thing on the site precisely
 * because they are real. A stale or invented count is worse than no count at
 * all, so update it whenever a date is booked, and set `asOf` when you do.
 *
 * Set a year's count to 0 and it reads as fully booked rather than disappearing.
 * Remove a year entirely once it has passed.
 */
export const availability = {
  asOf: "18 October 2026",
  years: [
    { year: "2027", datesLeft: 6 },
    { year: "2028", datesLeft: 8 },
  ],
};

/** "6 dates left for 2027, 8 for 2028" */
export function availabilitySentence(): string {
  const parts = availability.years.map((y, i) =>
    i === 0
      ? `${y.datesLeft} ${y.datesLeft === 1 ? "date" : "dates"} left for ${y.year}`
      : `${y.datesLeft} for ${y.year}`,
  );
  return parts.join(", ");
}
