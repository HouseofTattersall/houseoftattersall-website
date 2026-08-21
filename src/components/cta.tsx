import Link from "next/link";

export function CtaButton({
  href = "/enquire/",
  children,
  variant = "solid",
}: {
  href?: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
}) {
  const base =
    "inline-block rounded-full px-8 py-3 text-sm tracking-[0.15em] uppercase transition-colors";
  const styles =
    variant === "solid"
      ? "bg-[var(--khaki)] text-[var(--paper)] hover:bg-[var(--khaki-deep)]"
      : "border border-[var(--gold)] text-[var(--khaki)] hover:bg-[var(--khaki)] hover:text-[var(--paper)] hover:border-[var(--khaki)]";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

export function CtaBand({
  heading = "Begin your story",
  body = "If this feels like the kind of film you're looking for, let's talk.",
  note = "2027 & 2028 dates now open",
}: {
  heading?: string;
  body?: string;
  note?: string;
}) {
  return (
    <section className="bg-[var(--khaki)] px-6 py-20 text-center">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-serif text-3xl text-[var(--paper)]">{heading}</h2>
        <p className="mt-4 text-[var(--paper)]/85">{body}</p>
        {note ? (
          <p className="mt-2 text-sm tracking-[0.15em] text-[var(--gold-wash)] uppercase">
            {note}
          </p>
        ) : null}
        <div className="mt-8">
          <Link
            href="/enquire/"
            className="inline-block rounded-full bg-[var(--paper)] px-8 py-3 text-sm tracking-[0.15em] text-[var(--khaki)] uppercase transition-opacity hover:opacity-90"
          >
            Enquire today
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs tracking-[0.3em] text-[var(--gold)] uppercase">
      {children}
    </p>
  );
}
