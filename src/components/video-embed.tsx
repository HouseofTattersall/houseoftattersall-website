export function VideoEmbed({
  id,
  title,
  priority = false,
}: {
  id: string;
  title: string;
  /** Set for an above-the-fold film so it loads immediately rather than on scroll. */
  priority?: boolean;
}) {
  return (
    <div className="relative h-0 w-full overflow-hidden bg-[var(--paper-alt)] pb-[56.25%]">
      <iframe
        className="absolute top-0 left-0 h-full w-full"
        src={`https://galleries.vidflow.co/videos/${id}`}
        title={title}
        loading={priority ? "eager" : "lazy"}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
}
