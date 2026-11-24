/**
 * A short, answer-first Q&A block for high up a page.
 *
 * Answers are open rather than hidden behind an accordion, so the facts sit
 * in the page text where both readers and AI crawlers meet them immediately.
 * The items are a slice of the page's own FAQ array, so FAQPage schema is
 * still emitted once, lower down, from the full list.
 */

type Item = { q: string; a: string };

export function QuickAnswers({
  items,
  heading = "The short answers",
  className = "",
}: {
  items: Item[];
  heading?: string;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-3xl px-6 ${className}`}>
      <h2 className="text-xs tracking-[0.3em] text-[var(--gold)] uppercase">
        {heading}
      </h2>
      <dl className="mt-6 divide-y divide-[var(--rule)] border-t border-b border-[var(--rule)]">
        {items.map((item) => (
          <div key={item.q} className="py-6">
            <dt className="font-serif text-lg text-[var(--khaki)]">{item.q}</dt>
            <dd className="mt-2 leading-relaxed text-[var(--ink-muted)]">
              {item.a}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
