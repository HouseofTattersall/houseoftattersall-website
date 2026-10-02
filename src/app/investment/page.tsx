import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Testimonials } from "@/components/testimonials";
import { PageBanner } from "@/components/page-banner";
import { CtaButton, CtaBand } from "@/components/cta";
import {
  BreadcrumbSchema,
  PackagesSchema,
  FaqSchema,
} from "@/components/schema";
import { Journey } from "@/components/journey";
import { Faq } from "@/components/faq";

export const metadata: Metadata = pageMeta({
  title: "Wedding Videography Packages & Pricing | From £2,100",
  description:
    "Wedding film packages and pricing. The £2,100 Core package includes 10 hours of coverage, a cinematic feature film, and your ceremony and speeches in full. The Complete Story is £2,540 and adds a second videographer and five films. First 50 miles of travel included, covering all of Staffordshire and Derbyshire.",
  path: "/investment/",
  image: "/images/banner-investment.jpg",
});

type Package = {
  name: string;
  strap: string;
  price: string;
  films: { name: string; length: string }[];
  included: string[];
  featured?: boolean;
};

const packages: Package[] = [
  {
    name: "Core",
    strap: "For couples who want the full day, beautifully told",
    price: "£2,100",
    films: [
      { name: "Cinematic feature film", length: "6 to 8 min" },
      { name: "Film trailer", length: "60 sec" },
      { name: "Your ceremony", length: "In full" },
      { name: "Your speeches", length: "In full" },
    ],
    included: [
      "Pre-wedding consultation",
      "10 hours of full-day coverage",
      "Drone footage",
      "6 to 9 week expected turnaround",
    ],
  },
  {
    name: "The Complete Story",
    strap: "Two filmmakers, five films, nothing missed",
    price: "£2,540",
    featured: true,
    films: [
      { name: "Film trailer", length: "60 sec" },
      { name: "Highlight film", length: "4 to 6 min" },
      { name: "Feature film", length: "14 to 18 min" },
      { name: "Your ceremony", length: "In full" },
      { name: "Your speeches", length: "In full" },
    ],
    included: [
      "Pre-wedding consultation",
      "10 hours of full-day coverage",
      "A second videographer throughout your day",
      "Drone footage",
      "6 to 9 week expected turnaround",
    ],
  },
];

const secondShooterGains = [
  "Guest reactions and laughter during the speeches",
  "Happy tears in the ceremony, caught from both sides of the room",
  "Bride and groom prep, happening at the same time in different rooms",
  "Wide shots and close-up detail, filmed together rather than one after the other",
];

const extras = [
  {
    name: "Extended feature film",
    desc: "Your feature film extended from 6 to 8 minutes up to 14 to 18 minutes. Included as standard in The Complete Story.",
    price: "£250",
  },
  {
    name: "Home movie",
    desc: "Every usable clip in one film, from the main camera",
    price: "£400",
  },
];

const faqs = [
  {
    q: "How do I book you for our wedding?",
    a: "Send an enquiry with your date and venue, then we have a video call so you can meet me and ask anything. A £200 booking fee secures the date, and I send you a client portal holding your contract, invoice, schedule and questionnaire in one place.",
  },
  {
    q: "How much is the booking fee?",
    a: "£200 secures your date. The remaining balance is due before the wedding, and you get automatic reminders for it six weeks beforehand alongside your questionnaire.",
  },
  {
    q: "What happens in the run-up to the wedding?",
    a: "Six weeks before, automatic reminders go out for your questionnaire and your remaining balance. If anything needs talking through we have a second video call, and I confirm exactly what time I will arrive on the day.",
  },
  {
    q: "When do we get our wedding films?",
    a: "Your teaser is expected within 6 to 9 weeks of the wedding, with everything else following within a week of that. Films are delivered on Vidflow, on your own private page, watchable on any smart device and downloadable for 10 years.",
  },
];

function Tick({ dark = false }: { dark?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`mt-[0.45rem] block h-[6px] w-[10px] shrink-0 -rotate-45 border-b-[1.5px] border-l-[1.5px] ${
        dark ? "border-[var(--gold-wash)]" : "border-[var(--gold)]"
      }`}
    />
  );
}

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

      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="max-w-2xl text-lg leading-relaxed text-[var(--ink-muted)]">
          A calm, unobtrusive approach from start to finish, allowing the day
          to unfold naturally while everything is captured with care.
        </p>
        <p className="mt-5 font-serif text-xl text-[var(--khaki)] italic">
          Wedding films start from £2,100
        </p>

        {/* Packages */}
        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {packages.map((pkg) => {
            const dark = pkg.featured;
            return (
              <div
                key={pkg.name}
                className={`flex flex-col p-8 md:p-10 ${
                  dark
                    ? "border border-[var(--khaki-deep)] bg-[var(--khaki)]"
                    : "border border-[var(--rule)] bg-[var(--paper)]"
                }`}
              >
                <p
                  className={`text-sm ${
                    dark ? "text-[var(--gold-wash)]" : "text-[var(--ink-faint)]"
                  }`}
                >
                  {pkg.strap}
                </p>
                <h2
                  className={`mt-3 font-serif text-3xl ${
                    dark ? "text-[var(--paper)]" : "text-[var(--khaki)]"
                  }`}
                >
                  {pkg.name}
                </h2>
                <p
                  className={`mt-1 font-serif text-4xl ${
                    dark ? "text-[var(--paper)]" : "text-[var(--khaki)]"
                  }`}
                >
                  {pkg.price}
                </p>

                <p
                  className={`mt-8 text-xs tracking-[0.3em] uppercase ${
                    dark ? "text-[var(--gold-wash)]" : "text-[var(--gold)]"
                  }`}
                >
                  The films
                </p>
                <ul
                  className={`mt-3 divide-y border-t ${
                    dark
                      ? "divide-[var(--paper)]/20 border-[var(--paper)]/20"
                      : "divide-[var(--rule)] border-[var(--rule)]"
                  }`}
                >
                  {pkg.films.map((film) => (
                    <li
                      key={film.name}
                      className="flex items-baseline justify-between gap-4 py-3"
                    >
                      <span
                        className={
                          dark ? "text-[var(--paper)]" : "text-[var(--ink)]"
                        }
                      >
                        {film.name}
                      </span>
                      {film.length ? (
                        <span
                          className={`shrink-0 font-serif text-sm whitespace-nowrap italic ${
                            dark
                              ? "text-[var(--gold-wash)]"
                              : "text-[var(--ink-faint)]"
                          }`}
                        >
                          {film.length}
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>

                <p
                  className={`mt-8 text-xs tracking-[0.3em] uppercase ${
                    dark ? "text-[var(--gold-wash)]" : "text-[var(--gold)]"
                  }`}
                >
                  Also included
                </p>
                <ul className="mt-3 space-y-2">
                  {pkg.included.map((item) => (
                    <li
                      key={item}
                      className={`flex gap-3 text-sm leading-relaxed ${
                        dark
                          ? "text-[var(--paper)]/90"
                          : "text-[var(--ink-muted)]"
                      }`}
                    >
                      <Tick dark={dark} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="border-b border-[var(--rule)] py-8 text-center text-sm text-[var(--ink-faint)]">
          Both packages include the first 50 miles of travel, which covers
          all of Staffordshire and Derbyshire, with a small charge per mile
          beyond that. Get in touch for exact availability for your date.
        </p>

        {/* Why a second videographer */}
        <section className="pt-14">
          <p className="text-xs tracking-[0.3em] text-[var(--gold)] uppercase">
            Why book two cameras
          </p>
          <h2 className="mt-4 max-w-md font-serif text-3xl text-[var(--khaki)]">
            The value of a second videographer
          </h2>

          <div className="mt-8 border-t border-b border-[var(--rule)]">
            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl text-[var(--khaki)] transition-colors hover:text-[var(--khaki-deep)]">
                <span>More of your day, from more angles</span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-xl leading-none text-[var(--gold)] transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="mt-5 grid gap-8 md:grid-cols-2">
                <p className="leading-relaxed text-[var(--ink-muted)]">
                  With one videographer, every angle is a decision: a tripod
                  moved, a lens changed, a few seconds where the camera
                  isn&apos;t quite where the moment is happening. With two,
                  there&apos;s far less time spent adjusting kit, setting up
                  tripods and checking audio, and far more time simply filming.
                  That means less down-time across your day, and more of it
                  captured, including the moments that would usually pass by
                  unfilmed.
                </p>
                <ul className="divide-y divide-[var(--rule)] border-t border-[var(--rule)] md:border-t-0">
                  {secondShooterGains.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 py-3 text-sm leading-relaxed text-[var(--ink-muted)]"
                    >
                      <Tick />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          </div>
        </section>

        {/* Optional extras */}
        <section className="pt-16">
          <h2 className="font-serif text-3xl text-[var(--khaki)]">
            Optional extras
          </h2>
          <p className="mt-3 max-w-xl text-[var(--ink-faint)]">
            Booked the Core package but want to add something on? These are
            available individually, or already included in the Complete Story
            package above.
          </p>

          <ul className="mt-8 divide-y divide-[var(--rule)] border-t border-b border-[var(--rule)]">
            {extras.map((extra) => (
              <li
                key={extra.name}
                className="flex items-baseline justify-between gap-6 py-5"
              >
                <span>
                  <span className="block text-[var(--ink-muted)]">
                    {extra.name}
                  </span>
                  <span className="mt-1 block text-sm text-[var(--ink-faint)]">
                    {extra.desc}
                  </span>
                </span>
                <span className="shrink-0 font-serif text-xl text-[var(--khaki)]">
                  {extra.price}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <Journey />

        <section className="pt-16">
          <h2 className="font-serif text-3xl text-[var(--khaki)]">
            Booking, in short
          </h2>
          <div className="mt-8">
            <Faq items={faqs} />
          </div>
          <FaqSchema items={faqs} />
        </section>

        <div className="mt-14 text-center">
          <CtaButton>Enquire</CtaButton>
        </div>
      </div>

      <Testimonials />

      <CtaBand />
    </>
  );
}
