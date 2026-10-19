const steps = [
  {
    title: "You enquire",
    short: "Send your date and venue, I come back on availability.",
    body: "Send me your date and your venue, and I'll come back to you on availability.",
  },
  {
    title: "A video call",
    short: "We meet properly before anything is signed.",
    body: "We meet properly before anything is signed, and you ask whatever you want to ask.",
  },
  {
    title: "£200 secures your date",
    short: "A £200 booking fee holds the date.",
    body: "A £200 booking fee holds the date in the diary.",
  },
  {
    title: "Your client portal",
    short: "Contract, invoice, schedule and questionnaire, all in one place.",
    body: "I send you a portal with your contract, invoice, schedule and questionnaire all in one place, rather than scattered across email.",
  },
  {
    title: "Six weeks before",
    short: "Automatic reminders, so nothing is left to memory.",
    body: "Automatic reminders go out for your questionnaire and your remaining balance, so nothing is left to memory in the busiest weeks.",
  },
  {
    title: "A second call, if it helps",
    short: "Another call if anything needs talking through.",
    body: "Sometimes the questionnaire throws up something worth talking through properly. If it does, we have another call.",
  },
  {
    title: "Your arrival time, confirmed",
    short: "You know exactly what time I arrive.",
    body: "Before the day, I confirm exactly what time I'll arrive.",
  },
  {
    title: "Your films",
    short: "Teaser expected within 6 to 9 weeks, on Vidflow.",
    body: "Your teaser is expected within 6 to 9 weeks of the wedding, with everything else following within a week of that. It all lands on Vidflow, on your own page, ready to watch on any smart device.",
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
