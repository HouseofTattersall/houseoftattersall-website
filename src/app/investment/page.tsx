import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Testimonials } from "@/components/testimonials";
import { Photo } from "@/components/photo";
import { PageBanner } from "@/components/page-banner";
import { CtaButton, CtaBand } from "@/components/cta";
import { BreadcrumbSchema, PackagesSchema } from "@/components/schema";

export const metadata: Metadata = pageMeta({
  title:
    "Wedding Videography Packages & Pricing | From £2,000",
  description:
    "Wedding film packages and pricing. Films start from £2,000, with most couples investing between £2,300 and £2,700, including full-day coverage, a feature film, trailer and drone footage.",
  path: "/investment/",
  image: "/images/banner-investment.jpg",
});




export default function InvestmentPage() {
  return (
    <>
      <PackagesSchema />
      <BreadcrumbSchema trail={[{ name: "Investment", path: "/investment/" }]} />
      <PageBanner
        title="Investment"
        eyebrow="Packages & pricing"
        image="/images/banner-investment.jpg"
      />

      <div className="mx-auto max-w-3xl px-6 py-24">
      <p className="mt-6 text-lg text-[var(--ink-muted)]">
        A calm, unobtrusive approach from start to finish, allowing the day
        to unfold naturally while everything is captured with care.
      </p>

      <p className="mt-8 rounded-lg border border-[var(--rule)] bg-[var(--khaki-wash)] px-6 py-4 text-[var(--ink-muted)]">
        Luxury cinematic wedding films start from £2,000. Most couples invest
        between £2,300 and £2,700 for their wedding film, depending on hours
        of coverage and any extras you add on.
      </p>

      <div className="mt-14 flex flex-col gap-10 md:flex-row md:items-start md:gap-14">
        <div className="md:w-1/2">
      <div className="mt-14">
        <h2 className="text-xs tracking-[0.3em] text-[var(--gold)] uppercase">
          Core Package
        </h2>
        <ul className="mt-4 space-y-2 text-[var(--ink-muted)]">
          <li>Pre-Wedding Consultation</li>
          <li>10 hours of full-day coverage</li>
          <li>7–9 Minute Cinematic Feature Film</li>
          <li>Landscape Film Trailer</li>
          <li>Drone Footage</li>
          <li>6–12 week turnaround</li>
        </ul>
      </div>

      <div className="mt-14">
        <h2 className="text-xs tracking-[0.3em] text-[var(--gold)] uppercase">
          Optional Extras
        </h2>
        <ul className="mt-4 space-y-2 text-[var(--ink-muted)]">
          <li>Your Ceremony in Full as a stand alone film</li>
          <li>Your Speeches in Full as a stand alone film</li>
          <li>
            1 Week Anniversary: Short Social Teaser within 1 week of your
            wedding
          </li>
          <li>Home Movie: Every usable clip in one film from my main camera</li>
        </ul>
      </div>

      <div className="mt-14">
        <h2 className="text-xs tracking-[0.3em] text-[var(--gold)] uppercase">
          Bundles
        </h2>
        <ul className="mt-4 space-y-2 text-[var(--ink-muted)]">
          <li>
            <strong className="text-[var(--ink)]">Story Upgrade:</strong> Ceremony in
            Full, Speeches in Full &amp; Home Movie
          </li>
          <li>
            <strong className="text-[var(--ink)]">Story Upgrade PLUS:</strong>{" "}
            Ceremony in Full, Speeches in Full, Home Movie, 1 Week Anniversary
            Teaser
          </li>
        </ul>
      </div>
        </div>
        <div className="md:sticky md:top-28 md:w-1/2">
          <Photo src="/images/investment-1.jpg" alt="" />
        </div>
      </div>

      <p className="mt-14 text-lg text-[var(--ink-muted)]">
        Enquire for exact availability and pricing for your date.
      </p>

      <div className="mt-10 text-center">
        <CtaButton>Enquire</CtaButton>
      </div>
      </div>

      <Testimonials />

      <CtaBand />
    </>
  );
}
