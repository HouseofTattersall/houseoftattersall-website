export type FaqItem = { q: string; a: string };

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-[var(--rule)] border-t border-b border-[var(--rule)]">
      {items.map((item) => (
        <details key={item.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg text-[var(--khaki)] transition-colors hover:text-[var(--khaki-deep)]">
            <span>{item.q}</span>
            <span
              aria-hidden="true"
              className="shrink-0 text-xl leading-none text-[var(--gold)] transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 leading-relaxed text-[var(--ink-muted)]">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
