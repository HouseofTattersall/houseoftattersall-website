import type { Metadata } from "next";
import { Article, H2, P, UL, Lead } from "@/components/article";
import { FaqSchema } from "@/components/schema";

export const metadata: Metadata = {
  title: "How much does a wedding videographer cost in the UK? | House of Tattersall",
  description:
    "An honest breakdown of UK wedding videography pricing, what moves the price, what should be included as standard, and what the common extras are worth.",
};

const faqs = [
  {
    q: "How much does a wedding videographer cost in the UK?",
    a: "Most full-day UK wedding videography sits between £1,500 and £3,500. My Core package is £2,100 and includes your ceremony and speeches in full as standard. My Complete Story package, which adds a second videographer and a one-week teaser, is £2,750.",
  },
  {
    q: "What should be included in a wedding videography package?",
    a: "At that price point, expect a pre-wedding consultation, full-day coverage rather than a short window, a feature film of at least 5 to 7 minutes, professionally recorded audio from your vows and speeches, and delivery through a proper platform. My Core package also includes your ceremony and speeches in full as standalone films, a landscape trailer and drone footage where the venue allows, with a 6 to 12 week turnaround.",
  },
  {
    q: "Do wedding videographers charge for travel?",
    a: "Most do beyond a certain radius. My first 50 miles are included in the price, which covers all of Staffordshire and Derbyshire, with a small charge per mile beyond that. Always ask, because a competitive quote can change once travel and accommodation are added.",
  },
  {
    q: "Why do wedding videographers vary so much in price?",
    a: "Four things move the price more than anything else: hours of coverage, whether it is one filmmaker or two, how much edit time goes into the film, and how many weddings that videographer takes on each year.",
  },
];

export default function Page() {
  return (
    <Article
      slug="how-much-does-a-wedding-videographer-cost"
      datePublished="2026-01-10"
      description="An honest breakdown of UK wedding videography pricing, what moves the price, what should be included as standard, and what the common extras are worth."
      title="How much does a wedding videographer cost in the UK?"
      banner="/images/banner-investment.jpg"
      intro="Most couples I speak to have no reference point for this. You've never booked a wedding videographer before and you'll probably never book another one, so 'is that a lot?' is an impossible question to answer on your own. Here's the honest version."
    >
      <H2>What&apos;s the average cost of a wedding videographer in the UK?</H2>
      <P>
        Across the UK, most full-day wedding videography sits somewhere between
        £1,500 and £3,500. Below that you&apos;re usually looking at someone
        newer, working alone with limited kit, or offering only a few hours of
        coverage. Above it you&apos;re typically paying for a two-person team,
        same-day edits, or a name that carries a premium.
      </P>
      <Lead>
        For wedding videography in Derbyshire and Staffordshire, House of
        Tattersall&apos;s Core package is £2,100. It includes 10 hours of
        full-day coverage, professionally recorded vows and speeches, your
        ceremony and speeches in full, and travel included for the first 50 miles,
        which covers both counties. The Complete Story package, which adds a
        second videographer and a one-week teaser, is £2,750.
      </Lead>

      <H2>Why is there such a big range?</H2>
      <P>Four things move the price more than anything else.</P>
      <P>
        <strong className="text-[var(--ink)]">Hours of coverage.</strong> A film
        that starts at the morning prep and runs to the first dance takes a very
        different day to one covering the ceremony and speeches only. I film 10
        hours as standard, because the moments couples end up treasuring are
        rarely the ones on the schedule.
      </P>
      <P>
        <strong className="text-[var(--ink)]">One filmmaker or two.</strong> A
        second shooter means two angles on the ceremony and someone else
        catching the reactions while the main camera is on the couple. It also
        roughly doubles the day rate. I film every wedding personally, and my
        Complete Story package adds a second videographer alongside me for the
        whole day.
      </P>
      <P>
        <strong className="text-[var(--ink)]">Edit time.</strong> This is the
        part nobody sees. A 7 to 9 minute film built around story rather than
        chronology takes days of editing, not hours. Cheaper packages are
        usually cheaper because the edit is faster and more formulaic.
      </P>
      <P>
        <strong className="text-[var(--ink)]">
          How many weddings they take.
        </strong>{" "}
        Someone filming 40 weddings a year can charge less per wedding. Someone
        filming 15 to 20 can give each couple more attention but has to price
        accordingly.
      </P>

      <H2>What should be included as standard?</H2>
      <P>At the price point above, I&apos;d expect to see:</P>
      <UL>
        <li>A pre-wedding consultation, so the film is planned rather than improvised</li>
        <li>Full-day coverage, not a three-hour window</li>
        <li>A feature film of at least 5 to 7 minutes</li>
        <li>Professionally recorded audio from your vows and speeches</li>
        <li>Delivery through a proper platform, not a link that expires</li>
      </UL>
      <P>
        My Core package includes all of that, plus your ceremony and speeches
        in full as standalone films, a landscape trailer and drone footage
        where the venue allows it, with a 6 to 12 week turnaround. I deliver
        through Vidflow, a premium platform that plays properly on all smart
        devices, and which also acts as storage for your films for 10 years.
      </P>

      <H2>What are the common extras, and are they worth it?</H2>
      <P>The ones couples ask for most:</P>
      <P>
        <strong className="text-[var(--ink)]">
          Your ceremony and speeches in full.
        </strong>{" "}
        The two I used to argue for hardest, so I stopped charging for them.
        Both are now included as standard in my Core package. The feature film
        will only ever use fragments of your vows, and speeches are usually the
        single most emotional part of the day and the part guests most want to
        rewatch. If a videographer you&apos;re comparing charges for these,
        factor it into their quote.
      </P>
      <P>
        <strong className="text-[var(--ink)]">A one-week teaser.</strong> A
        short film delivered within a week of the wedding, while everyone still
        wants to talk about it.
      </P>
      <P>
        <strong className="text-[var(--ink)]">A home movie.</strong> Every
        usable clip from my main camera in one long film. Unpolished, but some
        couples love having everything.
      </P>

      <H2>Do videographers charge for travel?</H2>
      <P>
        Most do beyond a certain radius. My first 50 miles are included in
        the price, which covers all of Staffordshire and Derbyshire, and
        there&apos;s a small charge per mile beyond that. Always ask, because a
        quote that looks competitive can change once travel and accommodation
        are added.
      </P>

      <H2>When should we budget for it?</H2>
      <P>
        Videography is usually one of the last things couples book and one of
        the first they cut when the budget tightens. I&apos;d gently push back
        on that: your flowers, your cake and your dress all exist for one day.
        The film is the only supplier whose product you&apos;ll still be using
        in twenty years.
      </P>

      <H2>What if it&apos;s out of our budget?</H2>
      <P>
        Say so when you enquire. I&apos;d rather have an honest conversation
        about what&apos;s possible on your budget than have you not ask.
        Sometimes a smaller package works. Sometimes I&apos;m simply not the
        right fit, and I&apos;ll say so and point you towards someone who is.
      </P>

      <FaqSchema items={faqs} />
    </Article>
  );
}
