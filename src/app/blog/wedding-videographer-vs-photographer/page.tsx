import type { Metadata } from "next";
import { Article, H2, P, Lead } from "@/components/article";
import { FaqSchema } from "@/components/schema";

export const metadata: Metadata = {
  title: "Wedding videographer vs photographer: do you need both? | House of Tattersall",
  description:
    "The difference between a wedding videographer and a photographer, whether you need both, and which to prioritise if your budget only stretches to one.",
};

const faqs = [
  {
    q: "Do you need both a wedding videographer and a photographer?",
    a: "If your budget only stretches to one, book the photographer. Photographs are what go on the wall and in the album, so they are the everyday form your wedding takes afterwards. If you can stretch to both, the film is usually the one that surprises couples, because it holds the sound of the day rather than only the look of it.",
  },
  {
    q: "What is the difference between a wedding videographer and a photographer?",
    a: "A photographer gives you moments frozen and perfected. A videographer gives you moments as they actually happened, with sound. You will remember what your dad looked like during the speeches. You will forget what he sounded like, and that is the thing film holds onto.",
  },
  {
    q: "Will the videographer and photographer get in each other's way?",
    a: "Not if they are any good. A decent videographer knows where the photographer needs to be during the ceremony and stays out of the way, and a decent photographer does the same. If you are worried, ask both whether they are happy to have a quick call beforehand.",
  },
  {
    q: "Can a friend film our wedding instead?",
    a: "Filming a wedding is not the hard part. Editing one is, and so is having a backup when equipment fails. If someone is offering, let them film alongside a professional rather than instead of one, and treat their footage as a lovely extra.",
  },
];

export default function Page() {
  return (
    <Article
      title="Wedding videographer vs photographer: do you need both?"
      banner="/images/banner-films.jpg"
      intro="This is the question I get asked most, usually phrased as 'we've booked a photographer, do we really need a videographer too?' Here's my honest answer, including the part where I argue against myself."
    >
      <H2>What&apos;s the actual difference?</H2>
      <P>
        A photographer gives you moments frozen and perfected. A videographer
        gives you moments as they actually happened, with sound.
      </P>
      <P>
        That difference matters more than it sounds. A photograph of your dad
        during the speeches shows you his face. A film of your dad during the
        speeches gives you his voice, the pause before he got the words out, and
        the sound of the room reacting. You&apos;ll remember what he looked
        like. You&apos;ll forget what he sounded like, and that&apos;s the thing
        film holds onto.
      </P>

      <H2>Do we need both?</H2>
      <P>
        I&apos;m seeing more and more couples tell me that video has become the
        more important of the two to them. But if I&apos;m honest, and if it
        were me, I&apos;d still prioritise photography. That&apos;s what ends up
        on your wall, in the album, as your phone background. It&apos;s the
        everyday form your wedding takes afterwards.
      </P>
      <Lead>
        If your budget genuinely only stretches to one, book the photographer.
        I&apos;ll say that plainly, even though it costs me work.
      </Lead>
      <P>
        But if you can stretch to both, the film is the one that surprises
        people. Couples routinely tell me the photographs were what they
        expected and the film was what they didn&apos;t.
      </P>

      <H2>Will they get in each other&apos;s way?</H2>
      <P>
        Not if they&apos;re any good. I&apos;ve worked alongside a lot of
        photographers and the whole job is staying out of each other&apos;s
        frames. A decent videographer knows where the photographer needs to be
        during the ceremony and gets out of the way. A decent photographer does
        the same.
      </P>
      <P>
        If you&apos;re worried about it, ask both of us whether we&apos;ve
        worked together before, or whether we&apos;re happy to have a quick call
        beforehand. Anyone who bristles at that question is telling you
        something.
      </P>

      <H2>Should we book them separately or as a package?</H2>
      <P>
        Both work. Packages can be simpler and occasionally cheaper. Booking
        separately means you get the photographer whose style you love and the
        videographer whose style you love, rather than compromising on one to
        get the other.
      </P>
      <P>
        If you&apos;ve booked one and are looking for the other, ask them who
        they&apos;d recommend. I&apos;m always happy to suggest photographers I
        think would suit a particular couple, and most photographers will do the
        same in reverse.
      </P>

      <H2>What about a friend with a camera?</H2>
      <P>
        The honest answer: filming a wedding is not the hard part. Editing one
        is, and so is having a backup when something fails. A friend with a nice
        camera can capture lovely footage and then discover they have four hours
        of material, no plan for cutting it together, and no second camera when
        the first one overheats during the speeches.
      </P>
      <P>
        If someone&apos;s offering, let them film alongside rather than instead.
        Their footage will be a lovely extra.
      </P>

      <FaqSchema items={faqs} />
    </Article>
  );
}
