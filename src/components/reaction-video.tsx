import { VideoEmbed } from "@/components/video-embed";
import { VideoSchema } from "@/components/schema";

/**
 * A couple watching their film for the first time.
 *
 * The most persuasive thing on the site, because it is not a claim. It needs
 * almost no words around it, so it gets almost none.
 */
export function ReactionVideo({
  heading = "What it is actually like to watch it back",
  body = "Every testimonial on this page was written after the fact, once people had found the words. This is what happens before that, in the thirty seconds where they have not found them yet.",
  className = "",
}: {
  heading?: string;
  body?: string;
  className?: string;
}) {
  return (
    <section className={className}>
      <VideoSchema
        name="Ashton and Ben watching their wedding film for the first time"
        description="Ashton and Ben watching their House of Tattersall wedding film from Irnham Hall in Lincolnshire for the very first time. A real, unprompted reaction."
        videoId="jjp46962"
        thumbnail="/images/banner-films.jpg"
      />
      <p className="text-xs tracking-[0.3em] text-[var(--gold)] uppercase">
        Pressing play for the first time
      </p>
      <h2 className="mt-4 max-w-xl font-serif text-3xl text-[var(--khaki)]">
        {heading}
      </h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-[var(--ink-muted)]">
        {body}
      </p>
      <p className="mt-3 max-w-2xl text-sm text-[var(--ink-faint)]">
        Ashton and Ben, married at Irnham Hall in Lincolnshire.
      </p>
      <div className="mt-8">
        <VideoEmbed
          id="jjp46962"
          title="Ashton and Ben watching their wedding film for the first time"
        />
      </div>
    </section>
  );
}
