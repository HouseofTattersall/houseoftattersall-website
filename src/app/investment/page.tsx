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
    "Wedding film packages and pricing. The £2,100 Core package includes full-day coverage, a feature film, and your ceremony and speeches in full. The Complete Story package, with a second videographer and a 16 to 18 minute feature film, is £2,750. The first 50 miles of travel are included, covering all of Staffordshire and Derbyshire.",
  path: "/investment/",
  image: "/images/banner-investment.jpg",
});

const corePackage = [
  "Pre-wedding consultation",
  "10 hours of full-day coverage",
  "7 to 9 minute cinematic feature film",
  "Your ceremony in full, as a standalone film",
  "Your speeches in full, as a standalone film",
  "Landscape film trailer",
  "Drone footage",
  "6 to 12 week turnaround",
];

const completePackage = [
  "Everything in the Core package",
  "A second videographer throughout your day",
  "Your feature film extended to 16 to 18 minutes as standard",
  "1 week anniversary: a short social teaser within a week of your wedding",
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
    desc: "Your feature film extended from 7 to 9 minutes up to 16 to 18 minutes. Included as standard in the Complete Story package.",
    price: "£195",
  },
  {
    name: "1 week anniversary",
    desc: "Short social teaser within 1 week of your wedding",
    price: "£210",
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
    a: "Your teaser arrives within 6 to 12 weeks of the wedding, and I aim for 6 to 9 weeks even in the busiest part of the season. Everything else follows within a week of that. Films are delivered on Vidflow, on your own private page, watchable on any smart device and downloadable for 10 years.",
  },
];

function Tick() {
  return (
    <span
      aria-hidden="true"
      className="mt-[0.45rem] block h-[6px] w-[10px] shrink-0 -rotate-45 border-b-[1.5px] border-l-[1.5px] border-[var(--gold)]"
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
          <div className="border border-[var(--rule)] bg-[var(--paper)] p-8 md:p-10">
            <p className="text-sm text-[var(--ink-faint)]">
              For couples who want the full day, beautifully told
            </p>
            <h2 className="mt-3 font-serif text-3xl text-[var(--khaki)]">
              Core package
            </h2>
            <p className="mt-1 font-serif text-4xl text-[var(--khaki)]">
              £2,100
            </p>
            <ul className="mt-7 divide-y divide-[var(--rule)] border-t border-[var(--rule)]">
              {corePackage.map((item) => (
                <li key={item} className="py-3 text-[var(--ink-muted)]">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-[var(--khaki-deep)] bg-[var(--khaki)] p-8 md:p-10">
            <p className="text-sm text-[var(--gold-wash)]">
              Two cameras, every angle, nothing missed
            </p>
            <h2 className="mt-3 font-serif text-3xl text-[var(--paper)]">
              The complete story package
            </h2>
            <p className="mt-1 font-serif text-4xl text-[var(--paper)]">
              £2,750
            </p>
            <ul className="mt-7 divide-y divide-[var(--paper)]/20 border-t border-[var(--paper)]/20">
              {completePackage.map((item) => (
                <li key={item} className="py-3 text-[var(--paper)]/90">
                  {item}
                </li>
              ))}
            </ul>
          </div>
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
