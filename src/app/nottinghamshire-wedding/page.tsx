import type { Metadata } from "next";
import { BreadcrumbSchema, FaqSchema, ServiceAreaSchema } from "@/components/schema";
import { PageBanner } from "@/components/page-banner";
import { VideoEmbed } from "@/components/video-embed";
import { Faq } from "@/components/faq";
import { CtaButton, CtaBand } from "@/components/cta";
import Link from "next/link";
import { StyleExplainer } from "@/components/style-explainer";
import { Testimonials } from "@/components/testimonials";

export const metadata: Metadata = {
  title:
    "Nottinghamshire Wedding Videographer | Luxury Cinematic Wedding Films",
  description:
    "Luxury cinematic wedding videography across Nottinghamshire, including Hazel Gap Barn, The Pumping House and Cockliffe Country House. Core package £2,100, or £2,750 with a second videographer.",
};

type Venue = {
  name: string;
  body: string;
  videoId?: string;
  feature?: boolean;
  guide?: string;
};

const venues: Venue[] = [
  {
    name: "Hazel Gap Barn, Edwinstowe",
    feature: true,
    videoId: "cdff82d2",
    guide: "/blog/hazel-gap-barn-wedding-videographer-/",
    body: "I've filmed at Hazel Gap several times over the years, and I've even shot photography here back in the day. The dramatic red-brick barn with its crenellated entrance and pair of watchtowers curving around the courtyard gives you establishing shots most venues can't. Inside, the light-filled Oak Room has views over the gardens and woodland, and it flows straight into the bar and courtyard, so the day never feels like it's being broken into separate rooms. The courtyard is my favourite spot here: sheltered and peaceful by day, then completely transformed after dark with fairy lights, fire pits and lanterns. There's a late licence until 1am, which means the film can carry right through to the end of the night rather than stopping when the dancing gets going.",
  },
  {
    name: "The Pumping House, Ollerton",
    videoId: "bcd7089f",
    guide: "/blog/pumping-house-wedding-videographer/",
    body: "This one holds a special place for me: it's where I collected my Regional Winner award for the East Midlands. The diversity of filming locations inside one venue is genuinely unmatched around here. The double-height Engine Hall, with light flooding through full-length arched windows and a glass ceiling, is breathtaking by day and a completely different room by night. The Ollerton Room has parquet flooring and original paned windows looking out over Sherwood Forest. The mezzanine above the Conservatory gives you elevated shots looking down into the Engine Hall, and some of my favourite frames of all time have come from up there. Three acres of ancient Sherwood Forest woodland surround it.",
  },
  {
    name: "Cockliffe Country House",
    body: "A smaller, more intimate country house wedding, and one where the scale works in your favour on film. Fewer guests means cleaner audio on the vows and speeches, and every reaction in the room is worth capturing rather than lost in a crowd.",
  },
  {
    name: "Carriage Hall, Plumtree",
    body: "A characterful Nottinghamshire barn venue near Plumtree, and another where the flow between spaces does a lot of the work for a documentary-style film.",
  },
];

const faqs = [
  {
    q: "How much does a wedding videographer in Nottinghamshire cost?",
    a: "My Core package is £2,100 and the Complete Story package, which adds a second videographer plus your ceremony and speeches in full, is £2,750. My full package breakdown is on the Investment page.",
  },
  {
    q: "Which Nottinghamshire wedding venues have you filmed at?",
    a: "Hazel Gap Barn near Edwinstowe, The Pumping House in Ollerton, Cockliffe Country House and Carriage Hall. I'm always happy to film at a venue I haven't worked at before, and I'll visit beforehand if I haven't.",
  },
  {
    q: "Do you charge travel to Nottinghamshire?",
    a: "I'm based on the Staffordshire and Derbyshire border, so Nottinghamshire is comfortably within my normal working area. The first 50 miles are included in the price, with a small charge per mile beyond that, so travel is rarely an issue for a Nottinghamshire wedding.",
  },
  {
    q: "How far in advance should we book a Nottinghamshire wedding videographer?",
    a: "I'd recommend booking 12 to 24 months ahead, especially for a summer date. I take on a deliberately limited number of weddings each year, typically 15 to 20, so earlier is safer.",
  },
  {
    q: "What is your wedding filming style?",
    a: "Luxury and cinematic, but documentary in how it is shot. Natural light rather than staging, real audio from your vows and speeches rather than a music-only edit, a moody editorial colour grade, and an edit built around the story of your day rather than a chronological checklist.",
  },
  {
    q: "Do you film late into the evening?",
    a: "Yes. Several Nottinghamshire venues have late licences, Hazel Gap until 1am, and extended hours can be added so the film carries through to the end of the night.",
  },
];

export default function NottinghamshirePage() {
  return (
    <>
      <BreadcrumbSchema trail={[{ name: "Nottinghamshire Wedding Films", path: "/nottinghamshire-wedding/" }]} />
      <PageBanner
        title="Nottinghamshire Wedding Films"
        eyebrow="Nottinghamshire Wedding Videographer"
        image="/images/banner-blog.jpg"
      />

      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-lg leading-relaxed text-[var(--ink-muted)]">
          I create luxury, cinematic wedding films across Nottinghamshire, from
          the barns on the edge of Sherwood Forest to country house
          celebrations closer to the city. Based on the Staffordshire and
          Derbyshire border, Nottinghamshire has become one of the counties I
          film in most.
        </p>

        <p className="text-lg leading-relaxed text-[var(--ink-muted)]">
        House of Tattersall is a wedding videographer covering Nottinghamshire, based on the Staffordshire and Derbyshire border and filming cinematic wedding films at venues across the county, from Hazel Gap Barn on the edge of Sherwood Forest to The Pumping House in Ollerton.
      </p>

      <p className="mt-10 rounded-lg border border-[var(--rule)] bg-[var(--khaki-wash)] px-6 py-4 text-[var(--ink-muted)]">
          Luxury cinematic wedding films in Nottinghamshire from £2,100. The Complete Story package, which adds a second videographer, is £2,750. The full breakdown is on the{" "}
          <Link href="/investment/" className="underline underline-offset-4">
            Investment
          </Link>{" "}
          page.
        </p>

        <div className="mt-10 text-center">
          <CtaButton>Enquire</CtaButton>
        </div>


        <StyleExplainer county="Nottinghamshire" />

        <div className="mt-20 space-y-20">
          {venues.map((venue) => (
            <div
              key={venue.name}
              className={
                venue.feature
                  ? "rounded-sm border border-[var(--gold)]/40 bg-[var(--khaki-wash)] p-8 md:p-10"
                  : ""
              }
            >
              {venue.feature ? (
                <p className="mb-3 text-xs tracking-[0.3em] text-[var(--gold)] uppercase">
                  Featured venue
                </p>
              ) : null}
              <h2 className="font-serif text-2xl text-[var(--khaki)]">
                {venue.name}
              </h2>
              <p className="mt-4 leading-relaxed text-[var(--ink-muted)]">
                {venue.body}
              </p>
              {venue.videoId ? (
                <div className="mt-6">
                  <VideoEmbed id={venue.videoId} title={venue.name} />
                </div>
              ) : null}
              {venue.guide ? (
                <p className="mt-4 text-sm">
                  <Link
                    href={venue.guide}
                    className="text-[var(--khaki)] underline underline-offset-4"
                  >
                    Read my full guide to filming at {venue.name.split(",")[0]}
                  </Link>
                </p>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-[var(--rule)] pt-14">
          <h2 className="font-serif text-2xl text-[var(--khaki)]">
            Frequently asked questions, Nottinghamshire
          </h2>
          <div className="mt-8">
            <Faq items={faqs} />
          </div>
          <FaqSchema items={faqs} />
          <ServiceAreaSchema
            county="Nottinghamshire"
            url="https://www.houseoftattersall.com/nottinghamshire-wedding/"
            venues={[
              "Hazel Gap Barn",
              "The Pumping House, Ollerton",
              "Cockliffe Country House",
              "Carriage Hall",
            ]}
          />
        </div>
      </div>

      <Testimonials
        heading="What couples married in Nottinghamshire said"
        county="Nottinghamshire"
      />

      <CtaBand />
    </>
  );
}
