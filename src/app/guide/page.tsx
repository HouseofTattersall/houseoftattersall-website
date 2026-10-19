import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { BreadcrumbSchema, FaqSchema } from "@/components/schema";
import { PageBanner } from "@/components/page-banner";
import { EnquiryForm } from "@/components/enquiry-form";
import { Faq } from "@/components/faq";
import { AvailabilityNote } from "@/components/availability-note";
import { guideSections } from "@/lib/guide";
import { CtaBand } from "@/components/cta";

export const metadata: Metadata = pageMeta({
  title: "The Honest Wedding Film Guide | Free Download",
  description:
    "A free guide from a wedding videographer: when to start filming, the light that ruins a first dance, how long portraits take, and where not to spend money.",
  path: "/guide/",
  image: "/images/banner-enquire.jpg",
});

const faqs = [
  {
    q: "What is in the guide?",
    a: "Practical advice about filming a wedding day, written by a videographer rather than a marketing team. When to start filming in the morning, why everything runs late and what to do about it, how to handle phones during the ceremony, where speakers should stand and why microphones matter, how to make confetti look good, how long couple portraits actually take, the one DJ light that spoils a first dance, and a section on where I would and would not spend money.",
  },
  {
    q: "Is it really free?",
    a: "Yes. Send your name, email, wedding date and venue and it arrives by email. There is no charge and no obligation to book anything.",
  },
  {
    q: "Will I be chased with sales emails?",
    a: "No. You will get the guide, and I will let you know whether your date is still free, because that is usually the next thing people want to know. If you would rather I did not, say so in the form and I will leave you be.",
  },
  {
    q: "Is the advice specific to booking you?",
    a: "Mostly not. Almost all of it applies whoever you book, and some of it applies even if you decide not to have a videographer at all. Two sections mention how my own packages work, because the advice changes slightly depending on whether there are one or two filmmakers in the room.",
  },
  {
    q: "Do I have to live in Derbyshire or Staffordshire?",
    a: "No, the guide is useful wherever you are getting married. I film across Derbyshire, Staffordshire and Nottinghamshire, and UK-wide beyond that.",
  },
];

export default function GuidePage() {
  return (
    <>
      <BreadcrumbSchema trail={[{ name: "The Honest Guide", path: "/guide/" }]} />
      <PageBanner
        title="The Honest Guide"
        eyebrow="Free for couples"
        image="/images/banner-enquire.jpg"
      />

      <div className="mx-auto max-w-2xl px-6 pt-12 pb-24">
        <p className="text-lg leading-relaxed text-[var(--ink-muted)]">
          Everything I would tell you over a pint about filming a wedding day.
          No sales pitch, and a fair bit of it is me talking you out of spending
          money.
        </p>

        <p className="mt-6 leading-relaxed text-[var(--ink-muted)]">
          Send your name, email, date and venue below and it lands in your inbox
          straight away. I will also tell you whether your date is still free,
          since that tends to be the next question.
        </p>

        <EnquiryForm title="Request the honest guide" className="mt-10" />

        <section className="mt-16 border-t border-[var(--rule)] pt-12">
          <h2 className="font-serif text-2xl text-[var(--khaki)]">
            What is inside
          </h2>
          <ol className="mt-8 divide-y divide-[var(--rule)] border-t border-[var(--rule)]">
            {guideSections.map((section, i) => (
              <li key={section.id} className="flex gap-5 py-4">
                <span
                  aria-hidden="true"
                  className="w-6 shrink-0 font-serif text-sm text-[var(--gold)]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block font-serif text-lg text-[var(--khaki)]">
                    {section.title}
                  </span>
                  <span className="block text-sm text-[var(--ink-faint)]">
                    {section.kicker}
                  </span>
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-[var(--ink-faint)]">
            Plus a last word on why any of this matters in thirty years.
          </p>
        </section>

        <AvailabilityNote className="mt-14" />

        <section className="mt-16 border-t border-[var(--rule)] pt-12">
          <h2 className="font-serif text-2xl text-[var(--khaki)]">
            Questions about the guide
          </h2>
          <div className="mt-8">
            <Faq items={faqs} />
          </div>
          <FaqSchema items={faqs} />
        </section>
      </div>

      <CtaBand
        heading="Or skip the guide"
        body="If you already know what you are looking for, tell me your date and venue."
      />
    </>
  );
}
