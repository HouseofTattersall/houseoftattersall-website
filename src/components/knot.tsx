/**
 * The knot mark on its own, used sparingly as a quiet divider.
 * Two forms: a rule with the mark set into it, and the bare mark.
 */

export function KnotMark({ className = "h-6" }: { className?: string }) {
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src="/images/knot.png"
      alt=""
      aria-hidden="true"
      width={600}
      height={320}
      className={`w-auto opacity-70 ${className}`}
    />
  );
}

export function KnotRule({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center gap-5 ${className}`}
      role="presentation"
    >
      <span className="h-px flex-1 bg-[var(--rule)]" />
      <KnotMark className="h-5" />
      <span className="h-px flex-1 bg-[var(--rule)]" />
    </div>
  );
}
