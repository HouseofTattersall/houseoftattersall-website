import Link from "next/link";

/**
 * The lighter call to action.
 *
 * Everything else on the site asks people to enquire, which is a big ask of
 * someone 18 months out who has just found you. This asks for considerably
 * less, and the guide is the thing they get for it.
 *
 * Two shapes: `band` for a full-width break between sections, `inline` for the
 * end of a blog post or a narrow column.
 */
export function GuidePrompt({
  variant = "band",
  heading = "The Honest Guide",
  body = "Everything I would tell you over a pint about filming a wedding day. When to start in the morning, the one DJ light that spoils a first dance, how long portraits really take, and where I would not spend your money.",
  cta = "Send me the guide",
}: {
  variant?: "band" | "inline";
  heading?: string;
  body?: string;
  cta?: string;
}) {
  if (variant === "inline") {
    return (
      <aside className="mt-14 rounded-sm border border-[var(--gold)]/40 bg-[var(--khaki-wash)] px-6 py-6">
        <p className="text-xs tracking-[0.3em] text-[var(--gold)] uppercase">
          Free for couples
        </p>
        <h3 className="mt-3 font-serif text-2xl text-[var(--khaki)]">
          {heading}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">
          {body}
        </p>
        <p className="mt-5">
          <Link
            href="/guide/"
            className="inline-block rounded-full bg-[var(--khaki)] px-6 py-2.5 text-xs tracking-[0.15em] text-[var(--paper)] uppercase transition-colors hover:bg-[var(--khaki-deep)]"
          >
            {cta}
          </Link>
        </p>
      </aside>
    );
  }

  return (
    <section className="border-y border-[var(--rule)] bg-[var(--khaki-wash)] px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs tracking-[0.3em] text-[var(--gold)] uppercase">
          Free for couples
        </p>
        <h2 className="mt-4 font-serif text-3xl text-[var(--khaki)]">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-[var(--ink-muted)]">
          {body}
        </p>
        <p className="mt-8">
          <Link
            href="/guide/"
            className="inline-block rounded-full bg-[var(--khaki)] px-8 py-3 text-sm tracking-[0.15em] text-[var(--paper)] uppercase transition-colors hover:bg-[var(--khaki-deep)]"
          >
            {cta}
          </Link>
        </p>
        <p className="mt-4 text-sm text-[var(--ink-faint)]">
          No charge, no obligation, and no sales emails unless you want them.
        </p>
      </div>
    </section>
  );
}
