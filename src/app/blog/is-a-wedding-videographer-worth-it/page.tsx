import type { Metadata } from "next";
import { Article, H2, P, Lead } from "@/components/article";
import { FaqSchema } from "@/components/schema";

export const metadata: Metadata = {
  title: "Is a wedding videographer worth it? | House of Tattersall",
  description:
    "An honest answer from a wedding videographer, including the cases where it isn't worth it and what couples actually say about their films years later.",
};

const faqs = [
  {
    q: "Is a wedding videographer worth it?",
    a: "For most couples who can afford it without sacrificing something they would miss more, yes, and usually more than they expect at the time. The core argument is that you will forget what your wedding sounded like, and film is the only thing that holds that. For couples where it means real compromise elsewhere, probably not.",
  },
  {
    q: "When is a wedding videographer not worth it?",
    a: "If it means cutting the photographer, if you genuinely will not rewatch it, if the remaining budget would only buy three hours of coverage, or if you are booking it because you feel you should rather than because you want it.",
  },
  {
    q: "Can we just film our wedding on phones?",
    a: "Guest phone footage is genuinely lovely and worth encouraging regardless. What it will not give you is clean audio, steady footage of the moments everyone was too involved in to film, or anything edited into something you would sit down and watch.",
  },
];

export default function Page() {
  return (
    <Article
      slug="is-a-wedding-videographer-worth-it"
      datePublished="2026-01-14"
      description="An honest answer from a wedding videographer, including the cases where it isn't worth it and what couples actually say about their films years later."
      title="Is a wedding videographer worth it?"
      banner="/images/banner-enquire.jpg"
      intro="I'm obviously biased. So rather than tell you it's worth it, here's what I actually think, including the cases where it isn't."
    >
      <H2>The honest case for it</H2>
      <Lead>You will forget what your wedding sounded like.</Lead>
      <P>
        Not immediately. But within a few years the specific sound of your
        partner&apos;s voice during the vows, your dad&apos;s pause before he
        managed the next line, the noise the room made when you walked in, those
        go. Photographs won&apos;t bring them back because photographs
        don&apos;t have sound.
      </P>
      <P>
        That&apos;s the whole argument, really. Everything else about a wedding
        day gets preserved somehow. Someone will photograph the flowers. Someone
        will remember the food. Nobody will remember exactly how it sounded, and
        film is the only thing that holds it.
      </P>

      <H2>What couples say afterwards</H2>
      <P>
        The pattern I notice is that the film matters more later than it does
        immediately. Straight after the wedding, couples are excited about it. A
        year on, they&apos;re using words like &ldquo;treasure&rdquo;. Several
        have told me they watch it every anniversary.
      </P>
      <P>
        I&apos;ve also had a few couples tell me the film became important for
        reasons nobody could have planned: a grandparent who died the following
        year, a speech from someone no longer around. That&apos;s not something
        I&apos;d ever use as a sales argument on a call, but it&apos;s true, and
        it&apos;s the reason I take the job as seriously as I do.
      </P>

      <H2>When it probably isn&apos;t worth it</H2>
      <P>
        <strong className="text-[var(--ink)]">
          If it means cutting the photographer.
        </strong>{" "}
        Have the photographs. More and more couples tell me video has become the
        more important of the two to them, but if it were me I&apos;d still
        prioritise photography, because that&apos;s what hangs on your wall and
        sits as your phone background.
      </P>
      <P>
        <strong className="text-[var(--ink)]">
          If you genuinely won&apos;t watch it.
        </strong>{" "}
        Some people aren&apos;t film people. If you never rewatch videos, never
        look back at old footage, and the idea of sitting down to watch eight
        minutes of your own wedding sounds like a chore, be honest with
        yourself.
      </P>
      <P>
        <strong className="text-[var(--ink)]">
          If the only budget left would buy three hours of coverage.
        </strong>{" "}
        A short window around the ceremony rarely produces a film worth the
        money. You end up with the formal bits and none of the texture.
        I&apos;d rather you spent it elsewhere and asked a friend to film the
        speeches on a phone.
      </P>
      <P>
        <strong className="text-[var(--ink)]">
          If you&apos;re doing it because you feel you should.
        </strong>{" "}
        Wedding pressure makes people book things they don&apos;t want. If
        videography is on your list because it&apos;s on everyone&apos;s list,
        take it off.
      </P>

      <H2>What about just filming it on phones?</H2>
      <P>
        Guest phone footage is genuinely lovely and I&apos;d encourage it
        regardless. What it won&apos;t give you is clean audio, stable footage
        of the moments everyone was too involved in to film, or anything edited
        into something you&apos;d actually sit down and watch.
      </P>
      <P>
        If budget is the constraint, a phone-footage-only approach is a
        reasonable fallback. Just go in knowing what it will and won&apos;t be.
      </P>

      <H2>So, is it worth it?</H2>
      <P>
        For most couples who can afford it without sacrificing something
        they&apos;d miss more: yes, and more than they expect at the time.
      </P>
      <P>
        For couples where it means real compromise elsewhere: probably not, and
        I&apos;d rather tell you that than take a booking you resent.
      </P>

      <FaqSchema items={faqs} />
    </Article>
  );
}
