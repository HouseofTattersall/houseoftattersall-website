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
      className={`flex ${aspect} items-center justify-center border border-dashed border-[var(--rule)] bg-[var(--paper-alt)] px-6 text-center text-xs tracking-[0.15em] text-[var(--ink-faint)] uppercase ${className}`}
    >
      {label}
    </div>
  );
}
