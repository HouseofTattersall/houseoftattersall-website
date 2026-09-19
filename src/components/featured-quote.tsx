import { testimonials } from "@/lib/testimonials";

/**
 * The single headline testimonial, pulled out above the fold.
 * Its Review markup travels with the full set in <Testimonials />,
 * so this renders the words only and does not duplicate the schema.
 */
export function FeaturedQuote() {
  const quote = testimonials.find((t) => t.featured);
  if (!quote) return null;

  return (
    <section className="bg-[var(--paper-alt)] px-6 py-16">
      <figure className="mx-auto max-w-3xl text-center">
        <blockquote className="font-serif text-2xl leading-relaxed text-[var(--khaki)] italic md:text-3xl">
          &ldquo;{quote.quote}&rdquo;
        </blockquote>
        <figcaption className="mt-6 text-sm tracking-[0.15em] text-[var(--ink-faint)] uppercase">
          {quote.names}, {quote.date} wedding
        </figcaption>
      </figure>
    </section>
  );
}
