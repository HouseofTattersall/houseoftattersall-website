import { CtaButton, CtaBand } from "@/components/cta";

const kindWords = [
  "He blended seamlessly into our day — we barely noticed he was filming, which is exactly what we wanted.",
  "From the very first call, Andy put us completely at ease with his relaxed, friendly approach.",
  "Andy has an incredible eye for capturing both the big emotional moments and the small details you'd otherwise miss.",
  "Watching our film felt like reliving the entire day all over again.",
  "We always felt like we were in safe hands from start to finish.",
  "The editing is unreal! Every shot felt purposeful and the storytelling was beautiful.",
  "He made everyone feel comfortable, even guests who had never experienced a videographer before.",
  "Andy is not only incredibly talented, but also a genuine pleasure to have around on your wedding day.",
  "Out of everything, this is what we'll treasure forever. We can't stop watching it.",
  "If you're even considering a videographer, book Andy. You won't regret it.",
  "He captured moments we didn't even realise were happening and they're now some of our favourites.",
  "Having Andy there felt effortless, calm, professional, and like having a friend with us on the day.",
];

export default function InvestmentPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="font-serif text-4xl text-[var(--khaki)]">Investment</h1>
      <p className="mt-6 text-lg text-[var(--ink-muted)]">
        A calm, unobtrusive approach from start to finish, allowing the day
        to unfold naturally while everything is captured with care.
      </p>

      <p className="mt-8 rounded-lg border border-[var(--rule)] bg-[var(--khaki-wash)] px-6 py-4 text-[var(--ink-muted)]">
        Most of my couples invest between £2,300 and £2,700 for their wedding
        film, depending on hours of coverage and any extras you add on.
      </p>

      <div className="mt-14">
        <h2 className="text-xs tracking-[0.3em] text-[var(--gold)] uppercase">
          Core Package
        </h2>
        <ul className="mt-4 space-y-2 text-[var(--ink-muted)]">
          <li>Pre-Wedding Consultation</li>
          <li>10 hours of full-day coverage</li>
          <li>7–9 Minute Cinematic Feature Film</li>
          <li>Landscape Film Trailer</li>
          <li>Drone Footage</li>
          <li>6–12 week turnaround</li>
        </ul>
      </div>

      <div className="mt-14">
        <h2 className="text-xs tracking-[0.3em] text-[var(--gold)] uppercase">
          Optional Extras
        </h2>
        <ul className="mt-4 space-y-2 text-[var(--ink-muted)]">
          <li>Your Ceremony in Full as a stand alone film</li>
          <li>Your Speeches in Full as a stand alone film</li>
          <li>
            1 Week Anniversary — Short Social Teaser within 1 week of your
            wedding
          </li>
          <li>Home Movie — Every usable clip in one film from my main camera</li>
        </ul>
      </div>

      <div className="mt-14">
        <h2 className="text-xs tracking-[0.3em] text-[var(--gold)] uppercase">
          Bundles
        </h2>
        <ul className="mt-4 space-y-2 text-[var(--ink-muted)]">
          <li>
            <strong className="text-[var(--ink)]">Story Upgrade:</strong> Ceremony in
            Full, Speeches in Full &amp; Home Movie
          </li>
          <li>
            <strong className="text-[var(--ink)]">Story Upgrade PLUS:</strong>{" "}
            Ceremony in Full, Speeches in Full, Home Movie, 1 Week Anniversary
            Teaser
          </li>
        </ul>
      </div>

      <p className="mt-14 text-lg text-[var(--ink-muted)]">
        Enquire for exact availability and pricing for your date.
      </p>

      <div className="mt-10 text-center">
        <CtaButton>Enquire</CtaButton>
      </div>

      <div className="mt-20 border-t border-[var(--rule)] pt-14">
        <h2 className="font-serif text-2xl text-[var(--khaki)]">Kind words</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {kindWords.map((quote) => (
            <blockquote
              key={quote}
              className="text-sm leading-relaxed text-[var(--ink-muted)] italic"
            >
              &ldquo;{quote}&rdquo;
            </blockquote>
          ))}
        </div>
      </div>
      </div>

      <CtaBand />
    </>
  );
}
