import Link from "next/link";
import { CtaButton } from "@/components/cta";

const routes = [
  {
    href: "/blog/",
    label: "Film Reviews",
    body: "Real weddings, venue guides and answers to the questions couples ask before booking. If you followed a link to a post, it is most likely here.",
  },
  {
    href: "/films/",
    label: "Watch the films",
    body: "Recent wedding films from across Derbyshire, Staffordshire, Nottinghamshire and further afield.",
  },
  {
    href: "/investment/",
    label: "Packages and pricing",
    body: "What is included, what it costs, and how booking works. Films from £2,100.",
  },
];

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-28 text-center">
      <p className="text-xs tracking-[0.3em] text-[var(--gold)] uppercase">
        Page not found
      </p>

      <h1 className="mt-6 font-serif text-4xl leading-tight text-[var(--khaki)] md:text-5xl">
        This one got left on the cutting room floor
      </h1>

      <p className="mx-auto mt-6 max-w-xl leading-relaxed text-[var(--ink-muted)]">
        Sorry about that. The page you were after has either moved or no longer
        exists. Nothing is lost though, everything on the site is still a click
        or two away.
      </p>

      <div className="mt-14 space-y-4 text-left">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className="block rounded-sm border border-[var(--rule)] bg-[var(--khaki-wash)] px-6 py-5 transition-colors hover:border-[var(--gold)]"
          >
            <p className="font-serif text-xl text-[var(--khaki)]">
              {route.label}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
              {route.body}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-14 border-t border-[var(--rule)] pt-12">
        <p className="leading-relaxed text-[var(--ink-muted)]">
          Still cannot find what you were looking for? Tell me what you were
          after and I will point you at it, or just send your date and venue and
          we can start there.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <CtaButton>Enquire</CtaButton>
          <CtaButton href="/" variant="outline">
            Back to the homepage
          </CtaButton>
        </div>
        <p className="mt-8 text-sm text-[var(--ink-faint)]">
          Or email{" "}
          <a
            href="mailto:info@houseoftattersall.com"
            className="underline underline-offset-4 hover:text-[var(--ink)]"
          >
            info@houseoftattersall.com
          </a>
        </p>
      </div>
    </div>
  );
}
