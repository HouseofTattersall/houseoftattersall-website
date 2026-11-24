import { testimonials } from "@/lib/testimonials";

/**
 * One named couple's words, with the venue spelled out in the attribution.
 *
 * Sits high on a county page. AI engines lift attributed quotes far more
 * readily than they lift an unattributed review grid lower down the page,
 * which is why the names and the venue are in the text rather than in an
 * image or a carousel.
 */
export function CountyQuote({
  county,
  className = "",
}: {
  county: "Derbyshire" | "Staffordshire" | "Nottinghamshire";
  className?: string;
}) {
  const t = testimonials.find(
    (x) => x.county === county && x.venue !== county,
  );
  if (!t) return null;

  const words = t.short ?? t.quote;

  return (
    <figure
      className={`border-l-2 border-[var(--gold)] pl-6 ${className}`}
    >
      <blockquote className="font-serif text-lg leading-relaxed text-[var(--ink)] italic">
        &ldquo;{words}&rdquo;
      </blockquote>
      <figcaption className="mt-3 text-sm text-[var(--ink-faint)]">
        {t.names}, married at {t.venue}
      </figcaption>
    </figure>
  );
}
