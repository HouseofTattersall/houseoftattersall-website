import { testimonials } from "@/lib/testimonials";
import { ReviewSchema } from "@/components/schema";

export function Testimonials({
  heading = "Kind words",
  limit,
  county,
}: {
  heading?: string;
  limit?: number;
  /** Show only couples who married in this county */
  county?: string;
}) {
  const pool = county
    ? testimonials.filter((t) => t.county === county)
    : testimonials;
  const items = limit ? pool.slice(0, limit) : pool;

  if (!items.length) return null;

  return (
    <section className="bg-[var(--paper-alt)] px-6 py-20">
      <ReviewSchema items={items} />
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-serif text-3xl text-[var(--khaki)]">
          {heading}
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <figure key={t.names}>
              <blockquote className="leading-relaxed text-[var(--ink-muted)] italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="block font-medium text-[var(--khaki)]">
                  {t.names}
                </span>
                <span className="block text-[var(--ink-faint)]">
                  Married at {t.venue}, {t.date}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
