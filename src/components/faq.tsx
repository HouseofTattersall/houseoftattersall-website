export type FaqItem = { q: string; a: string };

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-white/10 border-t border-b border-white/10">
      {items.map((item) => (
        <div key={item.q} className="py-6">
          <h3 className="text-base font-medium text-white">{item.q}</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/70">{item.a}</p>
        </div>
      ))}
    </div>
  );
}
