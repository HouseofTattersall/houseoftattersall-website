import type { Metadata } from "next";
import Link from "next/link";
import { guideSections, guideClosing, guideWelcome } from "@/lib/guide";
import { CtaButton } from "@/components/cta";

/**
 * The guide itself.
 *
 * Deliberately noindex: it is what couples receive in exchange for their email
 * address, so it should not be sitting in search results. If you want parts of
 * it public, pull individual truths out as blog posts instead.
 */
export const metadata: Metadata = {
  title: "The Honest Guide | House of Tattersall",
  description:
    "Everything I would tell you over a pint about filming a wedding day, from a videographer who has filmed a few.",
  robots: { index: false, follow: false },
};

function Body({ lines }: { lines: string[] }) {
  const out: React.ReactNode[] = [];
  let bullets: string[] = [];
  let k = 0;

  const flush = () => {
    if (!bullets.length) return;
    out.push(
      <ul key={`ul${k++}`} className="my-5 space-y-3 border-l border-[var(--gold)] pl-6">
        {bullets.map((b) => (
          <li key={b} className="leading-relaxed text-[var(--ink-muted)]">
            {b}
          </li>
        ))}
      </ul>,
    );
    bullets = [];
  };

  for (const line of lines) {
    if (line.startsWith("- ")) {
      bullets.push(line.slice(2));
    } else {
      flush();
      out.push(
        <p key={`p${k++}`} className="mt-4 leading-relaxed text-[var(--ink-muted)]">
          {line}
        </p>,
      );
    }
  }
  flush();
  return <>{out}</>;
}

export default function HonestTruthsPage() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-20">
      <header className="border-b border-[var(--rule)] pb-12 text-center">
        <p className="text-xs tracking-[0.3em] text-[var(--gold)] uppercase">
          House of Tattersall
        </p>
        <h1 className="mt-6 font-serif text-4xl leading-tight text-[var(--khaki)] md:text-5xl">
          The Honest Guide
        </h1>
        <p className="mt-5 font-serif text-xl text-[var(--ink-muted)] italic">
          What I would tell you over a pint
        </p>
        <p className="mx-auto mt-6 max-w-lg leading-relaxed text-[var(--ink-muted)]">
          No sales pitch in here. Just the things I have learned filming
          weddings that would genuinely change how yours turns out, including
          the bits where I talk you out of spending money.
        </p>
        <p className="mt-8 print:hidden">
          <a
            href="/the-honest-guide.pdf"
            className="text-sm text-[var(--khaki)] underline underline-offset-4 hover:text-[var(--khaki-deep)]"
          >
            Download it as a PDF
          </a>
        </p>
      </header>

      <section className="break-inside-avoid border-b border-[var(--rule)] py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
          <div className="sm:w-2/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/house-of-tattersall-andy.jpg"
              alt="Andy Tattersall of House of Tattersall"
              className="w-full rounded-sm object-cover"
            />
          </div>
          <div className="sm:w-3/5">
            <p className="text-xs tracking-[0.3em] text-[var(--gold)] uppercase">
              Hello
            </p>
            {guideWelcome.map((line, i) => (
              <p
                key={line}
                className={
                  i === 0
                    ? "mt-4 font-serif text-xl leading-snug text-[var(--khaki)]"
                    : "mt-4 leading-relaxed text-[var(--ink-muted)]"
                }
              >
                {line}
              </p>
            ))}
            <p className="mt-6 font-serif text-2xl text-[var(--khaki)] italic">
              Andy
            </p>
          </div>
        </div>
      </section>

      {guideSections.map((section, i) => (
        <section
          key={section.id}
          className="break-inside-avoid border-b border-[var(--rule)] py-12"
        >
          <p className="text-xs tracking-[0.3em] text-[var(--gold)] uppercase">
            {String(i + 1).padStart(2, "0")} &middot; {section.kicker}
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-snug text-[var(--khaki)]">
            {section.title}
          </h2>
          <Body lines={section.body} />
        </section>
      ))}

      <section className="break-inside-avoid py-14">
        <p className="text-xs tracking-[0.3em] text-[var(--gold)] uppercase">
          Last thing
        </p>
        {guideClosing.map((line, i) => (
          <p
            key={line}
            className={
              i === 1
                ? "mt-6 font-serif text-2xl leading-snug text-[var(--khaki)]"
                : "mt-4 leading-relaxed text-[var(--ink-muted)]"
            }
          >
            {line}
          </p>
        ))}
      </section>

      <footer className="border-t border-[var(--rule)] pt-12 text-center print:hidden">
        <p className="leading-relaxed text-[var(--ink-muted)]">
          If any of that was useful and you want to talk about your day, I take
          a maximum of 15 weddings a year and I would love to hear about yours.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <CtaButton>Check your date</CtaButton>
          <CtaButton href="/films/" variant="outline">
            Watch the films
          </CtaButton>
        </div>
        <p className="mt-10 text-sm text-[var(--ink-faint)]">
          Andy Tattersall &middot; House of Tattersall &middot;{" "}
          <Link href="/" className="underline underline-offset-4">
            houseoftattersall.com
          </Link>
        </p>
      </footer>
    </article>
  );
}
