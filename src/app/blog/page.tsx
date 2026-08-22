import Link from "next/link";
import { PageBanner } from "@/components/page-banner";
import { CtaBand } from "@/components/cta";
import { realWeddings, venueGuides, guides } from "@/lib/posts";
import type { Post } from "@/lib/posts";

const buyerGuides = [
  {
    slug: "how-much-does-a-wedding-videographer-cost",
    title: "How much does a wedding videographer cost in the UK?",
    excerpt:
      "What UK wedding videography actually costs, what moves the price, and what should be included as standard.",
  },
  {
    slug: "wedding-videographer-vs-photographer",
    title: "Wedding videographer vs photographer: do you need both?",
    excerpt:
      "The real difference between the two, and which I'd prioritise if your budget only stretches to one.",
  },
  {
    slug: "how-to-choose-a-wedding-videographer",
    title: "How to choose a wedding videographer",
    excerpt:
      "How to tell suppliers apart when every website shows beautiful work, and the questions that reveal experience.",
  },
  {
    slug: "is-a-wedding-videographer-worth-it",
    title: "Is a wedding videographer worth it?",
    excerpt:
      "An honest answer, including the cases where it isn't, and what couples say about their films years later.",
  },
];

function PostList({
  heading,
  items,
}: {
  heading: string;
  items: { slug: string; title: string; excerpt: string }[];
}) {
  return (
    <section className="mt-16">
      <h2 className="font-serif text-2xl text-[var(--khaki)]">{heading}</h2>
      <div className="mt-6 divide-y divide-[var(--rule)] border-t border-b border-[var(--rule)]">
        {items.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}/`} className="group block py-6">
            <h3 className="font-serif text-lg text-[var(--khaki)] group-hover:text-[var(--khaki-deep)]">
              {p.title}
            </h3>
            <p className="mt-2 text-[var(--ink-muted)]">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

const toItem = (p: Post) => ({
  slug: p.slug,
  title: p.title,
  excerpt: p.excerpt,
});

export default function BlogIndexPage() {
  return (
    <>
      <PageBanner
        title="Film Reviews"
        eyebrow="From the blog"
        image="/images/banner-blog.jpg"
      />

      <div className="mx-auto max-w-3xl px-6 py-14">
        <p className="leading-relaxed text-[var(--ink-muted)]">
          Real weddings I&apos;ve filmed, honest guides to the venues I work at
          most, and answers to the questions couples ask me before they book.
        </p>

        <PostList heading="Guides for couples" items={buyerGuides} />
        <PostList heading="Real weddings" items={realWeddings.map(toItem)} />
        <PostList heading="Venue guides" items={venueGuides.map(toItem)} />
        <PostList heading="Tips and updates" items={guides.map(toItem)} />
      </div>

      <CtaBand />
    </>
  );
}
