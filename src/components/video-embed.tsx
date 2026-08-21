export function VideoEmbed({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  return (
    <div className="relative h-0 w-full pb-[56.25%]">
      <iframe
        className="absolute top-0 left-0 h-full w-full"
        src={`https://galleries.vidflow.co/videos/${id}`}
        title={title}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
}
