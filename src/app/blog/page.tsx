import { PageBanner } from "@/components/page-banner";
import { CtaBand } from "@/components/cta";
import Link from "next/link";

const guides = [
  {
    title: "How much does a wedding videographer cost in the UK?",
    slug: "how-much-does-a-wedding-videographer-cost",
    blurb:
      "What UK wedding videography actually costs, what moves the price, and what should be included as standard.",
  },
  {
    title: "Wedding videographer vs photographer: do you need both?",
    slug: "wedding-videographer-vs-photographer",
    blurb:
      "The real difference between the two, and which I'd prioritise if your budget only stretches to one.",
  },
  {
    title: "How to choose a wedding videographer",
    slug: "how-to-choose-a-wedding-videographer",
    blurb:
      "How to tell suppliers apart when every website shows beautiful work, and the questions that reveal experience.",
  },
  {
    title: "Is a wedding videographer worth it?",
    slug: "is-a-wedding-videographer-worth-it",
    blurb:
      "An honest answer, including the cases where it isn't, and what couples say about their films years later.",
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <PageBanner
        title="Film Reviews"
        eyebrow="From the blog"
        image="/images/banner-blog.jpg"
      />

      <div className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="font-serif text-2xl text-[var(--khaki)]">
          Guides for couples
        </h2>
        <div className="mt-8 divide-y divide-[var(--rule)] border-t border-b border-[var(--rule)]">
          {guides.map((g) => (
            <Link
              key={g.slug}
              href={`/blog/${g.slug}/`}
              className="group block py-6"
            >
              <h3 className="font-serif text-lg text-[var(--khaki)] group-hover:text-[var(--khaki-deep)]">
                {g.title}
              </h3>
              <p className="mt-2 text-[var(--ink-muted)]">{g.blurb}</p>
            </Link>
          ))}
        </div>

        <div className="mt-14 rounded-sm border border-[var(--gold)]/40 bg-[var(--khaki-wash)] p-8">
          <p className="text-xs tracking-[0.3em] text-[var(--gold)] uppercase">
            Coming back soon
          </p>
          <p className="mt-3 leading-relaxed text-[var(--ink-muted)]">
            Real wedding write-ups and venue guides across Derbyshire,
            Staffordshire, Nottinghamshire, Leicestershire and Rutland are being
            moved across to the new site and will be back here shortly. In the
            meantime, you can see recent films on the{" "}
            <Link href="/films/" className="underline underline-offset-4">
              films page
            </Link>
            .
          </p>
        </div>
      </div>

      <CtaBand />
    </>
  );
}
