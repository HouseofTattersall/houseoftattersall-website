/** Where a film is hosted. Vidflow is the default; YouTube covers older films. */
export type VideoSource = "vidflow" | "youtube";

/** The player URL for a film, used by the embed and by VideoObject markup. */
export function embedUrl(id: string, source: VideoSource = "vidflow"): string {
  return source === "youtube"
    ? `https://www.youtube-nocookie.com/embed/${id}`
    : `https://galleries.vidflow.co/videos/${id}`;
}

export function VideoEmbed({
  id,
  title,
  priority = false,
  source = "vidflow",
}: {
  /** Vidflow video id, or the YouTube id when source is "youtube" */
  id: string;
  title: string;
  /** Set for an above-the-fold film so it loads immediately rather than on scroll. */
  priority?: boolean;
  source?: VideoSource;
}) {
  return (
    <div className="relative h-0 w-full overflow-hidden bg-[var(--paper-alt)] pb-[56.25%]">
      <iframe
        className="absolute top-0 left-0 h-full w-full"
        src={embedUrl(id, source)}
        title={title}
        loading={priority ? "eager" : "lazy"}
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
