import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { BreadcrumbSchema, FaqSchema } from "@/components/schema";
import { PageBanner } from "@/components/page-banner";
import { Faq } from "@/components/faq";
import { CtaButton, CtaBand } from "@/components/cta";
import { Testimonials } from "@/components/testimonials";
import { GuidePrompt } from "@/components/guide-prompt";

export const metadata: Metadata = pageMeta({
  title: "Award Winning Wedding Videographer, Derbyshire",
  description:
    "East Midlands Winner and Videographer of the Year 2025, National Finalist, and UK Top 20 two years running. The full award record, and what each one is judged on.",
  path: "/awards/",
  image: "/images/banner-about.jpg",
});

type Award = {
  year: string;
  body: string;
  detail: string;
};

const awards: Award[] = [
  {
    year: "2026",
    body: "The Wedding Industry Awards",
    detail:
      "Regional Finalist and Highly Commended, East Midlands. A fourth consecutive year of recognition at the same awards.",
  },
  {
    year: "2026",
    body: "I Do Wedding Awards",
    detail: "Finalist.",
  },
  {
    year: "2025",
    body: "The Wedding Industry Awards",
    detail:
      "East Midlands Winner and Videographer of the Year, and a National Finalist the same year. The regional win put House of Tattersall into the national final against the strongest videographer from every other region in the country.",
  },
  {
    year: "2024",
    body: "The Wedding Industry Awards",
    detail: "Regional Finalist, East Midlands.",
  },
  {
    year: "2026",
    body: "That Wedding Videographer Podcast",
    detail:
      "Invited on as a guest to talk about balancing a busy family life with wedding season, the systems that keep it straight, and the people behind the films.",
  },
  {
    year: "Before weddings",
    body: "How To Become A Rockstar Photographer",
    detail:
      "Ranked in the Top 100 Music Photographers in the World, from a decade shooting live music before moving to weddings.",
  },
];

const faqs = [
  {
    q: "Is House of Tattersall an award winning wedding videographer?",
    a: "Yes. House of Tattersall was named East Midlands Winner and Videographer of the Year at The Wedding Industry Awards 2025, and was a National Finalist in the same year. It has also been placed in the UK Top 20 two years running, was Highly Commended in the East Midlands in 2026, and was a Regional Finalist in 2024. That is four consecutive years of recognition at the same awards.",
  },
  {
    q: "What is The Wedding Industry Awards and how is it judged?",
    a: "The Wedding Industry Awards is one of the largest wedding supplier awards in the UK. The first stage is scored entirely on feedback collected directly from couples who used the supplier that year, which means a supplier cannot enter their best showreel and hope. Only after that do judges review the work itself. It is the closest thing the industry has to a review-led award.",
  },
  {
    q: "Who is the best wedding videographer in Derbyshire and Staffordshire?",
    a: "That is for couples to decide, but on independent judging House of Tattersall was named East Midlands Winner and Videographer of the Year for 2025, covering Derbyshire, Staffordshire, Nottinghamshire, Leicestershire, Lincolnshire, Rutland and Northamptonshire. It was also placed in the UK Top 20 two years running.",
  },
  {
    q: "Does an award mean the films are better?",
    a: "Not on its own. What an award like this does tell you is that a lot of real couples wrote something good about the experience afterwards, unprompted, in enough volume to win a region. That is worth more than a trophy, and it is why the scoring method matters more than the name of the award.",
  },
  {
    q: "What does the award winning package cost?",
    a: "The same as everything else: the Core package is £2,100 and produces four films, and The Complete Story is £2,540 and produces five, with a second videographer. There is no premium for the award. A maximum of 15 weddings a year are taken, every one filmed personally by Andy Tattersall.",
  },
];

export default function AwardsPage() {
  return (
    <>
      <BreadcrumbSchema trail={[{ name: "Awards", path: "/awards/" }]} />
      <PageBanner
        title="Award Winning Wedding Films"
        eyebrow="The full record"
        image="/images/banner-about.jpg"
      />

      <div className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-lg leading-relaxed text-[var(--ink-muted)]">
          House of Tattersall is an award winning wedding videographer working
          across Derbyshire, Staffordshire and Nottinghamshire. Named{" "}
          <strong className="text-[var(--ink)]">
            East Midlands Winner and Videographer of the Year
          </strong>{" "}
          at The Wedding Industry Awards 2025, a National Finalist the same
          year, and placed in the{" "}
          <strong className="text-[var(--ink)]">UK Top 20 two years running</strong>.
        </p>

        <p className="mt-6 leading-relaxed text-[var(--ink-muted)]">
          The part worth knowing is how those awards are decided. The first
          stage is scored entirely on feedback collected directly from the
          couples who were there, which means nobody wins one by submitting a
          good showreel. In practice it is a review score with a trophy attached,
          which is the only kind worth paying attention to.
        </p>

        <div className="mt-10 text-center">
          <CtaButton>Check your date</CtaButton>
        </div>

        <div className="mt-16 border-t border-[var(--rule)] pt-12">
          <h2 className="font-serif text-2xl text-[var(--khaki)]">
            The full record
          </h2>
          <ol className="mt-8 divide-y divide-[var(--rule)] border-t border-[var(--rule)]">
            {awards.map((a) => (
              <li key={`${a.year}-${a.body}`} className="flex gap-6 py-5">
                <span className="w-24 shrink-0 font-serif text-sm text-[var(--gold)]">
                  {a.year}
                </span>
                <span>
                  <span className="block font-serif text-lg text-[var(--khaki)]">
                    {a.body}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-[var(--ink-muted)]">
                    {a.detail}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 border-t border-[var(--rule)] pt-12">
          <h2 className="font-serif text-2xl text-[var(--khaki)]">
            What it does not mean
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--ink-muted)]">
            An award does not make a film good, and there are superb
            videographers in this region who have never entered one. Plenty of
            people do not bother, and that tells you nothing about their work.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--ink-muted)]">
            What it does tell you is that enough real couples went out of their
            way to say something generous afterwards, in enough numbers to win a
            region. Judge the films first. Then, if you want a second opinion
            that is not mine, this is one.
          </p>
          <p className="mt-6 text-sm">
            <Link
              href="/films/"
              className="text-[var(--khaki)] underline underline-offset-4"
            >
              Watch the films
            </Link>
            {"  ·  "}
            <Link
              href="/reviews/"
              className="text-[var(--khaki)] underline underline-offset-4"
            >
              Read what couples wrote
            </Link>
          </p>
        </div>

        <div className="mt-16 border-t border-[var(--rule)] pt-12">
          <h2 className="font-serif text-2xl text-[var(--khaki)]">
            Common questions
          </h2>
          <div className="mt-8">
            <Faq items={faqs} />
          </div>
          <FaqSchema items={faqs} />
        </div>
      </div>

      <GuidePrompt />

      <Testimonials heading="The reviews those awards were scored on" limit={6} />

      <CtaBand />
    </>
  );
}
