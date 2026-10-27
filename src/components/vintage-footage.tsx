import Link from "next/link";
import { VideoEmbed } from "@/components/video-embed";

/**
 * The vintage camera add-on, explained.
 *
 * Linked from both package cards via #vintage. Andy's brief: nostalgic feel,
 * honest raw unpolished footage. The argument is that the roughness is the
 * point rather than a compromise, which is also why it sits next to clean 4K
 * instead of replacing it.
 */
export function VintageFootage({ className = "" }: { className?: string }) {
  return (
    <section id="vintage" className={`scroll-mt-28 ${className}`}>
      <p className="text-xs tracking-[0.3em] text-[var(--gold)] uppercase">
        Free add-on
      </p>
      <h2 className="mt-4 max-w-xl font-serif text-3xl text-[var(--khaki)]">
        Vintage camera footage, woven through your film
      </h2>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <div>
          <p className="leading-relaxed text-[var(--ink-muted)]">
            Alongside the main cameras I bring a vintage style camera that
            mimics Super 8. Soft, grainy, a bit washed out, and nothing like
            the clean 4K everything else is shot on.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--ink-muted)]">
            That is the whole point of it. It looks like a memory rather than a
            recording. Cut in among the sharp footage, those few seconds land
            differently, because your brain reads them as something you are
            remembering rather than something you are watching.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--ink-muted)]">
            It is also honest. Handheld, unsteady, nobody looking their best,
            no grading to rescue it. The unpolished bits are the ones couples
            end up loving, and they are the hardest thing to fake.
          </p>
        </div>
        <div>
          <p className="leading-relaxed text-[var(--ink-muted)]">
            It is the closest thing I have found to how a wedding actually
            feels afterwards: half of it sharp and in order, half of it warm
            and out of focus.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--ink-muted)]">
            Guests notice the camera too, which is a small bonus. It looks like
            an object rather than equipment, so people lean in rather than
            straighten up.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--ink-muted)]">
            Why not real Super 8? Cost and waiting. Film adds steps, time and a
            significant bill, and I would not see a frame of it until weeks
            later. This way I can watch it back the same night and build it
            into the plan for your film. You get the look without the wait.
          </p>
          <p className="mt-6 rounded-sm border border-[var(--gold)]/40 bg-[var(--khaki-wash)] px-5 py-4 text-[var(--ink-muted)]">
            <strong className="text-[var(--ink)]">
              Free on both packages, just ask.
            </strong>{" "}
            You can also borrow a camera in the months before the wedding to
            capture your own moments, for a small charge.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <p className="text-sm text-[var(--ink-faint)]">
          Ashton and Ben at Irnham Hall, where the vintage footage runs right
          through the film.
        </p>
        <div className="mt-4">
          <VideoEmbed
            id="iei8p632"
            title="Ashton and Ben, Irnham Hall, with vintage camera footage"
          />
        </div>
        <p className="mt-4 text-sm">
          <Link
            href="/blog/ashton-ben-irnham-hall/"
            className="text-[var(--khaki)] underline underline-offset-4"
          >
            More on how that film came together
          </Link>
        </p>
      </div>
    </section>
  );
}
