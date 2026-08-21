export function PlaceholderMedia({
  label,
  className = "",
  aspect = "aspect-video",
}: {
  label: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={`flex ${aspect} items-center justify-center border border-dashed border-white/20 bg-gradient-to-br from-neutral-800 to-neutral-950 px-6 text-center text-xs tracking-wide text-white/40 uppercase ${className}`}
    >
      {label} — replace with real image/video
    </div>
  );
}
