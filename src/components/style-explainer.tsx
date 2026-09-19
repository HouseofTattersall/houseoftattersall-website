/**
 * Spells out what "cinematic" and "documentary" actually mean in practice,
 * rather than leaving them as adjectives. Used on the county landing pages
 * and the homepage.
 */
export function StyleExplainer({ county }: { county?: string }) {
  const where = county ? `your ${county} wedding film` : "your wedding film";

  return (
    <section className="mt-16 rounded-sm border border-[var(--gold)]/40 bg-[var(--khaki-wash)] p-8 md:p-10">
      <p className="text-xs tracking-[0.3em] text-[var(--gold)] uppercase">
        The style
      </p>
      <h2 className="mt-3 font-serif text-2xl text-[var(--khaki)]">
        What &ldquo;cinematic&rdquo; actually means for {where}
      </h2>

      <p className="mt-5 leading-relaxed text-[var(--ink-muted)]">
        Cinematic and documentary are not opposites. They describe two different
        things: how the film is shot, and how it feels to watch. Every film I
        make is shot documentary style, which means I capture your day as it
        actually happens. I do not direct moments, stage them, or ask anyone to
        do something again for the camera. What makes the result cinematic is
        everything either side of that.
      </p>

      <ul className="mt-6 list-disc space-y-3 pl-5 text-[var(--ink-muted)]">
        <li>
          <strong className="text-[var(--ink)]">
            Two or three angles on the ceremony and speeches
          </strong>
          , so the film can cut between a vow and the face of the person hearing
          it.
        </li>
        <li>
          <strong className="text-[var(--ink)]">
            Professionally recorded audio from your vows and speeches
          </strong>
          , so the film is carried by real voices rather than being a music-only
          edit with the words lost.
        </li>
        <li>
          <strong className="text-[var(--ink)]">Natural light</strong>, worked
          around the venue as it is on the day rather than lit with rigs that
          change how the room feels.
        </li>
        <li>
          <strong className="text-[var(--ink)]">Drone footage</strong> where the
          venue permissions, weather and flight regulations allow it.
        </li>
        <li>
          <strong className="text-[var(--ink)]">
            A moody, editorial colour grade
          </strong>{" "}
          rather than the bright, high-contrast look most social media edits
          use.
        </li>
        <li>
          <strong className="text-[var(--ink)]">
            An edit built around the story of your day
          </strong>{" "}
          rather than a chronological run through the schedule.
        </li>
      </ul>

      <p className="mt-6 leading-relaxed text-[var(--ink-muted)]">
        The finished film should feel like a film about the two of you, not a
        record of a timetable.
      </p>

      <p className="mt-6 border-t border-[var(--gold)]/30 pt-6 leading-relaxed text-[var(--ink-muted)]">
        You will notice I have said very little about cameras. That is
        deliberate.{" "}
        <strong className="text-[var(--ink)]">
          4K, drones and gimbals are the floor now, not the difference.
        </strong>{" "}
        Every videographer at this price has them, and a list of kit tells you
        almost nothing about what your film will feel like. What changes your
        film is the person holding the camera: whether they know what is about
        to happen, whether they are stood in the right place when it does, and
        whether they can tell the difference between a moment and a shot.
      </p>
    </section>
  );
}
