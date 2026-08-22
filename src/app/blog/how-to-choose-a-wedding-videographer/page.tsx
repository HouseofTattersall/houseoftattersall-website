import type { Metadata } from "next";
import { Article, H2, P, UL } from "@/components/article";
import { FaqSchema } from "@/components/schema";

export const metadata: Metadata = {
  title: "How to choose a wedding videographer | House of Tattersall",
  description:
    "How to tell wedding videographers apart when every website shows beautiful work: what to watch, what to listen for, and the questions that reveal experience.",
};

const faqs = [
  {
    q: "How do you choose a wedding videographer?",
    a: "Watch a full film start to finish rather than only the highlights, listen to the audio with your eyes shut, ask what happens when equipment fails, check whether they have filmed at your venue, and meet them before booking. Reviews that mention specific moments tell you far more than enthusiastic but vague ones.",
  },
  {
    q: "What questions should I ask a wedding videographer?",
    a: "Ask how many camera angles they run on the ceremony, what happens if one fails, where the footage is stored between the wedding and delivery, and what their plan is if they are ill on the day. A fluent, specific answer tells you they have already thought about it.",
  },
  {
    q: "How many cameras should a wedding videographer use?",
    a: "I run two or three angles on the ceremony and speeches, partly for variety in the edit and partly because equipment fails and guests step into shot. More angles means fewer single points of failure on a day you cannot repeat.",
  },
  {
    q: "How is wedding footage backed up?",
    a: "I back up footage myself and also send it to my editor the following day, so it already sits in three separate places within 24 hours of your wedding.",
  },
];

export default function Page() {
  return (
    <Article
      title="How to choose a wedding videographer"
      banner="/images/banner-derbyshire.jpg"
      intro="You're looking at four websites that all show beautiful work and say roughly the same thing. Here's how to actually tell them apart."
    >
      <H2>Watch a full film, not just the highlights</H2>
      <P>
        Every videographer&apos;s website shows their best 90 seconds. That
        tells you they can cut a good trailer. It doesn&apos;t tell you whether
        they can hold a story together for eight minutes.
      </P>
      <P>
        Ask to watch a complete film start to finish. Ideally one from a wedding
        like yours: similar size, similar venue, similar time of year. If the
        full film is as good as the trailer, you&apos;ve learned something real.
      </P>

      <H2>Listen to the audio, not just the pictures</H2>
      <P>
        Play a film with your eyes shut. Can you hear the vows clearly? The
        speeches? Or is it all music with the occasional muffled line
        underneath?
      </P>
      <P>
        Audio is where the emotion lives and it&apos;s the thing most couples
        don&apos;t think to check. It&apos;s also expensive and fiddly to do
        properly, which is exactly why some films quietly avoid it.
      </P>

      <H2>Ask what happens when something goes wrong</H2>
      <P>
        This is the question that separates people who&apos;ve done this a while
        from people who haven&apos;t. Ask:
      </P>
      <UL>
        <li>How many angles do you run during the ceremony?</li>
        <li>What happens if one fails?</li>
        <li>Where does the footage live between the wedding and delivery?</li>
        <li>What happens if you&apos;re ill on the day?</li>
      </UL>
      <P>
        I run two or three angles on the ceremony and speeches, partly for
        variety in the edit and partly because things break and your auntie will
        step into shot with an iPad. On backups, I back the footage up myself
        and also send it to my editor the following day, so it already sits in
        three separate places within 24 hours of your wedding.
      </P>
      <P>
        You don&apos;t need to grill anyone. But an answer that&apos;s fluent
        and specific tells you they&apos;ve already thought about it. An answer
        that&apos;s vague tells you they haven&apos;t.
      </P>

      <H2>Check they&apos;ve worked at your venue, or are honest that they haven&apos;t</H2>
      <P>
        Venue familiarity genuinely helps. Someone who&apos;s filmed at your
        venue knows where the light falls at five o&apos;clock and how long the
        walk from ceremony to reception really takes.
      </P>
      <P>
        That said, &ldquo;I haven&apos;t filmed there but I&apos;ll visit
        beforehand&rdquo; is a perfectly good answer. &ldquo;I&apos;ve filmed
        everywhere&rdquo; from someone with six weddings behind them is not.
      </P>

      <H2>Meet them, even briefly</H2>
      <P>
        You&apos;ll spend more of your wedding day with your photographer and
        videographer than with almost any guest. If someone puts you on edge on
        a video call, that won&apos;t improve on the day.
      </P>
      <P>
        The couples whose films I&apos;m proudest of are almost always the ones
        I got on with. That&apos;s not a coincidence. People relax around people
        they like, and relaxed people film better.
      </P>

      <H2>Read reviews for specifics, not enthusiasm</H2>
      <P>
        &ldquo;Amazing, thank you so much&rdquo; tells you nothing. A review
        that names the venue, or a particular moment that was caught, tells you
        far more about what that person actually does.
      </P>
      <P>
        Look for reviews that mention particular moments, particular problems
        solved, particular things that went wrong and were handled.
      </P>

      <H2>Be wary of the cheapest quote</H2>
      <P>
        Not because cheap means bad, but because it usually means something&apos;s
        been removed and you may not have noticed what. Fewer hours. One camera.
        A faster, more formulaic edit. Ask what&apos;s different rather than
        assuming it&apos;s the same product at a better price.
      </P>

      <FaqSchema items={faqs} />
    </Article>
  );
}
