const steps = [
  {
    title: "You enquire",
    short: "Send your date and venue, I come back on availability as soon as I can.",
    body: "Send your date and venue, I come back on availability as soon as I can.",
  },
  {
    title: "A video call",
    short: "We meet properly before anything is signed.",
    body: "We meet properly before anything is signed so you get to ask any questions and I can explain everything in as much detail as you need.",
  },
  {
    // Title added by Claude: Andy's step 3 was written without one.
    title: "Securing your date",
    short: "£200 secures the date, with the balance due six weeks before.",
    body: "Once you are happy I send over links to your client portal, contract, invoice, schedule and questionnaire, all in one place. I ask for £200 to secure the date with the remaining balance due 6 weeks before your wedding.",
  },
  {
    title: "Six weeks before",
    short: "Automatic reminders, so nothing is left to memory.",
    body: "Automatic reminders, so nothing is left to memory.",
  },
  {
    title: "A second call, if it helps",
    short: "Another call if anything needs talking through.",
    body: "Another call if anything needs talking through.",
  },
  {
    title: "Your arrival time, confirmed",
    short: "You know exactly what time I arrive.",
    body: "You know exactly what time I arrive.",
  },
  {
    title: "Your films",
    short: "Teaser expected within 6 to 9 weeks, on Vidflow.",
    body: "Teaser expected within 6 to 9 weeks, on Vidflow.",
  },
];

/**
 * The booking process, start to finish.
 *
 * `compact` is for sitting directly above the enquiry form, where the whole
 * point is to answer "what happens if I send this" without pushing the form
 * down the page. The full version is for the Investment page, where someone
 * is reading rather than acting.
 */
export function Journey({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <section className="mt-10 rounded-sm border border-[var(--rule)] bg-[var(--paper-alt)] px-6 py-6">
        <p className="text-xs tracking-[0.3em] text-[var(--gold)] uppercase">
          What happens after you send this
        </p>
        <ol className="mt-5 space-y-2.5">
          {steps.map((step, i) => (
            <li key={step.title} className="flex gap-3 text-sm leading-relaxed">
              <span
                aria-hidden="true"
                className="mt-0.5 w-4 shrink-0 text-right font-serif text-[var(--gold)]"
              >
                {i + 1}
              </span>
              <span className="text-[var(--ink-muted)]">
                <strong className="font-normal text-[var(--ink)]">
                  {step.title}.
                </strong>{" "}
                {step.short}
              </span>
            </li>
          ))}
        </ol>
        <p className="mt-5 text-sm text-[var(--ink-faint)]">
          No obligation at any point before the booking fee.
        </p>
      </section>
    );
  }

  return (
    <section className="pt-16">
      <p className="text-xs tracking-[0.3em] text-[var(--gold)] uppercase">
        What happens next
      </p>
      <h2 className="mt-4 max-w-lg font-serif text-3xl text-[var(--khaki)]">
        Your journey, from first enquiry to finished film
      </h2>

      <ol className="mt-10 border-l border-[var(--rule)]">
        {steps.map((step, i) => (
          <li key={step.title} className="relative pb-9 pl-8 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute top-0 -left-[13px] flex h-6 w-6 items-center justify-center rounded-full bg-[var(--khaki-wash)] font-serif text-xs text-[var(--khaki)]"
            >
              {i + 1}
            </span>
            <h3 className="font-serif text-xl text-[var(--khaki)]">
              {step.title}
            </h3>
            <p className="mt-2 max-w-2xl leading-relaxed text-[var(--ink-muted)]">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
