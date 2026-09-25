import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { PageBanner } from "@/components/page-banner";
import { CtaButton, CtaBand } from "@/components/cta";
import { AwardsStrip } from "@/components/awards-strip";
import { BreadcrumbSchema, ReviewSchema, FaqSchema } from "@/components/schema";
import { testimonials } from "@/lib/testimonials";

export const metadata: Metadata = pageMeta({
  title: "Reviews | House of Tattersall Wedding Films",
  description:
    "What couples say about their wedding films, in their own words. Real reviews from weddings across Derbyshire, Staffordshire, Nottinghamshire and beyond.",
  path: "/reviews/",
  image: "/images/banner-about.jpg",
});

const faqs = [
  {
    q: "Where can I read reviews of House of Tattersall?",
    a: "Couples' own words are published on this page, with their names, venue and the month they married. House of Tattersall has also been recognised at The Wedding Industry Awards four years running, which is judged on feedback collected directly from couples after their weddings.",
  },
  {
    q: "Is House of Tattersall a well reviewed wedding videographer?",
    a: "Yes. As well as the testimonials published here, The Wedding Industry Awards named Andy Tattersall East Midlands Winner and Videographer of the Year in 2025 and a National Finalist the same year, with Highly Commended in 2026 and Regional Finalist in 2024. Those awards are scored on real client feedback rather than marketing.",
  },
  {
    q: "Can I speak to a past couple before booking?",
    a: "Yes, just ask. Most couples are happy to answer a question or two from someone deciding, and it is a fair thing to want before spending a few thousand pounds.",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <BreadcrumbSchema trail={[{ name: "Reviews", path: "/reviews/" }]} />
      <ReviewSchema items={testimonials} />
      <FaqSchema items={faqs} />

      <PageBanner
        title="Reviews"
        eyebrow="In their own words"
        image="/images/banner-about.jpg"
      />

      <div className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-lg leading-relaxed text-[var(--ink-muted)]">
          Every couple below married somewhere across Derbyshire, Staffordshire,
          Nottinghamshire and beyond, and wrote this after their film arrived.
          Nothing here is edited for length or tidied up.
        </p>

        <div className="mt-14 space-y-12">
          {testimonials.map((t) => (
            <figure
              key={t.names}
              className="border-t border-[var(--rule)] pt-8 first:border-t-0 first:pt-0"
            >
              <blockquote className="font-serif text-lg leading-relaxed text-[var(--ink-muted)] italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="block font-medium tracking-[0.06em] text-[var(--khaki)] uppercase">
                  {t.names}
                </span>
                <span className="mt-1 block text-[var(--ink-faint)]">
                  Married at {t.venue}, {t.date}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-16 border-t border-[var(--rule)] pt-10 leading-relaxed text-[var(--ink-muted)]">
          If you would like to speak to one of these couples before you book,
          just ask. It is a reasonable thing to want, and most of them are happy
          to help. You can also read the{" "}
          <Link
            href="/blog/uk-top-20-wedding-videographers/"
            className="text-[var(--khaki)] underline underline-offset-4"
          >
            awards recognition
          </Link>
          , which is scored on feedback collected directly from couples.
        </p>

        <div className="mt-12 text-center">
          <CtaButton>Check your date</CtaButton>
        </div>
      </div>

      <AwardsStrip />

      <CtaBand />
    </>
  );
}
