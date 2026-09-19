const steps = [
  {
    title: "You enquire",
    body: "Send me your date and your venue, and I'll come back to you on availability.",
  },
  {
    title: "A video call",
    body: "We meet properly before anything is signed, and you ask whatever you want to ask.",
  },
  {
    title: "£200 secures your date",
    body: "A £200 booking fee holds the date in the diary.",
  },
  {
    title: "Your client portal",
    body: "I send you a portal with your contract, invoice, schedule and questionnaire all in one place, rather than scattered across email.",
  },
  {
    title: "Six weeks before",
    body: "Automatic reminders go out for your questionnaire and your remaining balance, so nothing is left to memory in the busiest weeks.",
  },
  {
    title: "A second call, if it helps",
    body: "Sometimes the questionnaire throws up something worth talking through properly. If it does, we have another call.",
  },
  {
    title: "Your arrival time, confirmed",
    body: "Before the day, I confirm exactly what time I'll arrive.",
  },
  {
    title: "Your films",
    body: "Your teaser arrives within 6 to 12 weeks of the wedding, and I aim for 6 to 9 even in the busiest part of the season. Everything else follows within a week of that. It all lands on Vidflow, on your own page, ready to watch on any smart device.",
  },
];

/** The booking process, start to finish, as couples actually experience it. */
export function Journey() {
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
