import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import {
  BreadcrumbSchema,
  FaqSchema,
  VenuePageSchema,
  VideoSchema,
} from "@/components/schema";
import { PageBanner } from "@/components/page-banner";
import { VideoEmbed } from "@/components/video-embed";
import { Prose } from "@/components/prose";
import { Faq } from "@/components/faq";
import { CtaButton, CtaBand } from "@/components/cta";
import { StyleExplainer } from "@/components/style-explainer";
import { Testimonials } from "@/components/testimonials";
import { AwardsStrip } from "@/components/awards-strip";

export const metadata: Metadata = pageMeta({
  title: "The West Mill Wedding Videographer | Cinematic Films in Derby",
  description:
    "Cinematic wedding videographer at The West Mill, Derby. Films from multiple weddings at the venue, from £2,100 with travel to Derby included. Documentary-shot by Andy Tattersall, a maximum of 15 weddings a year.",
  path: "/west-mill-wedding-videographer/",
  image: "/images/venue-west-mill.jpg",
});

const films = [
  {
    couple: "Olivia & Charles",
    year: "2026",
    videoId: "r6jgraj1",
  },
  {
    couple: "Elisy & Sam",
    year: "2025",
    videoId: "356a0a1b",
  },
];

/**
 * Andy's venue guide, moved here word for word from the blog post at
 * /blog/the-west-mill-wedding-videographer-derbyshire/, which now 301s to
 * this page. Do not edit this copy.
 */
const guide = `
## Why The West Mill Derby is Perfect for Your Wedding Film

When couples ask me about the best wedding venues in Derbyshire for cinematic wedding videography, The West Mill in Derby is always at the top of my list. I've had the privilege of filming multiple weddings here, and every single time, this venue delivers something extraordinary for both wedding films and wedding photography.

### Natural Light That Transforms Your Wedding Video

The light at The West Mill is honestly a videographer's dream. Throughout the day, natural light floods through the industrial-style windows, creating that soft, romantic glow that makes wedding films feel truly cinematic. Whether I'm capturing your ceremony, couple portraits, or those candid reception moments, the lighting here works beautifully for both video and photography without needing excessive artificial lighting setups.

For winter weddings and autumn celebrations, the venue's interior lighting creates a warm, intimate atmosphere that translates gorgeously on film. Summer and spring weddings benefit from the abundant daylight that highlights the venue's stunning architectural features.

### A Multi-Level Venue That Keeps Your Wedding Film Dynamic

What I absolutely love about The West Mill for wedding videography is how the venue is structured across multiple floors, like layers of a wedding cake. This layout naturally keeps your wedding day feeling fresh and dynamic, which translates directly into a more engaging wedding film.

This multi-level structure means your wedding film never feels static or repetitive. Each part of your day has its own distinct look and feel, creating a cinematic narrative that flows beautifully from ceremony to celebration.

### Cinematic Features for Wedding Videography

The West Mill's industrial heritage provides incredible cinematic elements:

- **Exposed brick walls** - Adds texture and character to every frame
- **High ceilings** - Perfect for drone-style interior shots and dramatic wide angles
- **Original architectural features** - Creates that sought-after rustic-meets-elegant aesthetic
- **Versatile spaces** - Allows for creative videography and photography compositions

### Why Photographers Love It Too

If you're booking both a wedding videographer and wedding photographer (which I always recommend), The West Mill works brilliantly for both. The spaces are generous enough that we can work alongside each other without getting in each other's shots. I've collaborated with countless wedding photographers here, and the venue provides endless opportunities for stunning couple portraits, detail shots, and group photography.

### Perfect for All-Year-Round Wedding Films

I've filmed at The West Mill across all seasons, and it genuinely works beautifully year-round:

- **Spring weddings** - Fresh light and the venue's gardens coming to life
- **Summer celebrations** - Maximum natural light and outdoor ceremony options
- **Autumn weddings** - Warm tones and cosy interior atmosphere
- **Winter weddings** - Intimate, romantic lighting that creates magical film moments

### Derby's Premier Wedding Venue for Cinematic Films

Located in the heart of Derby, The West Mill combines convenience with character. For couples across Derbyshire, Nottinghamshire, and Staffordshire looking for a wedding venue that will look absolutely stunning on film, this is it.

The venue's industrial elegance, combined with its thoughtful layout and exceptional natural light, means I can create a wedding film that's truly cinematic, the kind of film you'll want to watch again and again.

## Ready to Create Your Wedding Film at The West Mill?

If you're planning your wedding at The West Mill Derby and want a cinematic wedding videographer who knows this venue inside and out, I'd love to hear from you. I understand exactly how to capture the best angles, utilise the natural light, and tell your story across the venue's beautiful multi-level spaces.

From ceremony coverage to drone footage, speeches to first dance, I'll create a wedding film that showcases both your love story and the stunning backdrop of The West Mill.
`;

const faqs = [
  {
    q: "Who is the best wedding videographer for The West Mill, Derby?",
    a: "House of Tattersall has filmed multiple weddings at The West Mill across several seasons, which means arriving already knowing where the light falls, how the floors connect and where the quiet moments tend to happen. Films start at £2,100, travel to Derby is included in the price, and only 15 weddings are taken a year, every one filmed personally by Andy Tattersall.",
  },
  {
    q: "How much does a wedding videographer cost at The West Mill?",
    a: "The Core package is £2,100 and includes a 6 to 8 minute cinematic feature film, a 60 second film trailer, and your ceremony and speeches in full as standalone films. The Complete Story package is £2,540 and adds a second videographer, a 4 to 6 minute highlight film and a 14 to 18 minute feature film. The West Mill is well inside the first 50 miles, so there is no travel charge.",
  },
  {
    q: "Is there a travel charge to The West Mill?",
    a: "No. The first 50 miles of travel are included in the package price, and The West Mill in Derby sits comfortably inside that from Denstone on the Staffordshire and Derbyshire border.",
  },
  {
    q: "Can you film an outdoor ceremony at The West Mill?",
    a: "Yes. Spring and summer weddings at The West Mill can make use of the outdoor ceremony option and the long daylight that comes with them, and the venue works just as well indoors when the weather turns. Having filmed there across all four seasons, the plan adapts on the day rather than depending on it.",
  },
  {
    q: "Do you use a drone at The West Mill?",
    a: "Drone footage is included in both packages wherever venue permissions, the weather and flight regulations allow. The West Mill sits in the heart of Derby, so aerial work there depends on the conditions and permissions on the day rather than being guaranteed. The venue's high ceilings and multi-level layout give plenty of scope for sweeping interior movement either way.",
  },
  {
    q: "How soon will we get our West Mill wedding film?",
    a: "Expect your teaser within 6 to 9 weeks of the wedding, with everything else following within a week of that. That is the expected turnaround rather than a guarantee. The editor is booked before the wedding rather than after it, which is what keeps it to weeks rather than months.",
  },
  {
    q: "Will you work alongside our photographer at The West Mill?",
    a: "Yes, routinely. The spaces at The West Mill are generous enough that a videographer and photographer can work alongside each other without ending up in each other's shots, and many of the photographers who shoot there regularly are familiar faces by now.",
  },
  {
    q: "How far in advance should we book for a West Mill wedding?",
    a: "12 to 24 months ahead, especially for a peak summer Saturday. With a hard cap of 15 weddings a year, popular West Mill dates tend to go early.",
  },
];

export default function WestMillPage() {
  return (
    <>
      <BreadcrumbSchema
        trail={[
          { name: "Derbyshire Wedding Films", path: "/derbyshire-wedding-film/" },
          {
            name: "The West Mill",
            path: "/west-mill-wedding-videographer/",
          },
        ]}
      />
      <VenuePageSchema
        venue="The West Mill"
        locality="Derby"
        region="Derbyshire"
        url="https://www.houseoftattersall.com/west-mill-wedding-videographer/"
        description="Cinematic, documentary-shot wedding videography at The West Mill in Derby by House of Tattersall. Multiple weddings filmed at the venue across all four seasons. Packages from £2,100, with travel to Derby included."
      />
      {films.map((film) => (
        <VideoSchema
          key={film.videoId}
          name={`${film.couple}, The West Mill, Derby`}
          description={`A cinematic wedding film by House of Tattersall for ${film.couple}, filmed at The West Mill in Derby, Derbyshire.`}
          videoId={film.videoId}
          thumbnail="/images/venue-west-mill.jpg"
        />
      ))}

      <PageBanner
        title="The West Mill"
        eyebrow="Wedding Videographer, Derby"
        image="/images/venue-west-mill.jpg"
      />

      <div className="mx-auto max-w-3xl px-6 py-24">
        <p className="text-lg leading-relaxed text-[var(--ink-muted)]">
          House of Tattersall is a wedding videographer at The West Mill in
          Derby, having filmed multiple weddings at the venue across all four
          seasons. Films are documentary-shot and cinematically edited, start at
          £2,100, and include travel to Derby. A maximum of 15 weddings are
          taken each year, every one filmed personally by Andy Tattersall from
          Denstone on the Staffordshire and Derbyshire border.
        </p>

        <p className="mt-10 rounded-lg border border-[var(--rule)] bg-[var(--khaki-wash)] px-6 py-4 text-[var(--ink-muted)]">
          Cinematic wedding films at The West Mill from £2,100, with your
          ceremony and speeches in full. The Complete Story package, which adds
          a second videographer and five films, is £2,540. The full breakdown is
          on the{" "}
          <Link
            href="/investment/"
            className="text-[var(--khaki)] underline underline-offset-4"
          >
            Investment page
          </Link>
          .
        </p>

        <div className="mt-10 text-center">
          <CtaButton>Enquire about your West Mill date</CtaButton>
        </div>

        <div className="mt-20 border-t border-[var(--rule)] pt-14">
          <h2 className="font-serif text-2xl text-[var(--khaki)]">
            Wedding films made at The West Mill
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--ink-muted)]">
            Two weddings at the same venue, a year apart, that look nothing like
            each other. That is the point of filming a place more than once.
          </p>
          <div className="mt-10 space-y-12">
            {films.map((film) => (
              <div key={film.videoId}>
                <VideoEmbed
                  id={film.videoId}
                  title={`${film.couple}, The West Mill, Derby`}
                />
                <p className="mt-3 text-sm tracking-[0.12em] text-[var(--ink)] uppercase">
                  {film.couple}
                </p>
                <p className="text-sm text-[var(--ink-faint)]">
                  The West Mill, Derby | {film.year}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-[var(--rule)] pt-14">
          <Prose body={guide} />
        </div>

        <StyleExplainer county="Derbyshire" />

        <div className="mt-20 border-t border-[var(--rule)] pt-14">
          <h2 className="font-serif text-2xl text-[var(--khaki)]">
            Frequently asked questions, The West Mill
          </h2>
          <div className="mt-8">
            <Faq items={faqs} />
          </div>
          <FaqSchema items={faqs} />
        </div>

        <p className="mt-16 text-sm leading-relaxed text-[var(--ink-faint)]">
          Marrying elsewhere in the county? There is more on{" "}
          <Link
            href="/derbyshire-wedding-film/"
            className="text-[var(--khaki)] underline underline-offset-4"
          >
            Derbyshire wedding films
          </Link>
          , including Grangefields, Yeldersley Hall and Lower Damgate Farm.
        </p>
      </div>

      <AwardsStrip heading="Award-winning wedding films" />

      <Testimonials
        heading="What couples married at The West Mill said"
        venue="West Mill"
      />

      <CtaBand />
    </>
  );
}
