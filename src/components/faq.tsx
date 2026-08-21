export type FaqItem = { q: string; a: string };

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-[var(--rule)] border-t border-b border-[var(--rule)]">
      {items.map((item) => (
        <div key={item.q} className="py-6">
          <h3 className="font-serif text-lg text-[var(--khaki)]">{item.q}</h3>
          <p className="mt-2 leading-relaxed text-[var(--ink-muted)]">
            {item.a}
          </p>
        </div>
      ))}
    </div>
  );
}
