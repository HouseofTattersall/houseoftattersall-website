import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { BreadcrumbSchema, FaqSchema, ServiceAreaSchema } from "@/components/schema";
import { Photo } from "@/components/photo";
import { PageBanner } from "@/components/page-banner";
import { VideoEmbed } from "@/components/video-embed";
import { Faq } from "@/components/faq";
import { CtaButton, CtaBand } from "@/components/cta";
import { StyleExplainer } from "@/components/style-explainer";
import { Testimonials } from "@/components/testimonials";
import { AwardsStrip } from "@/components/awards-strip";

export const metadata: Metadata = pageMeta({
  title:
    "Derbyshire Wedding Videographer | Luxury Cinematic Wedding Films",
  description:
    "Documentary-shot, cinematic wedding videography across Derbyshire and the Peak District, including The West Mill, Grangefields and Yeldersley Hall. From £2,100, with the first 50 miles of travel included.",
  path: "/derbyshire-wedding-film/",
  image: "/images/banner-derbyshire.jpg",
});


type Venue = {
  name: string;
  body: string;
  videoId?: string;
  photo?: string;
  feature?: boolean;
};

const venues: Venue[] = [
  {
    name: "The West Mill, Derby",
    feature: true,
    photo: "/images/venue-west-mill.jpg",
    body: "Natural light floods through the industrial-style windows here, giving that soft, romantic glow that makes a wedding film feel properly cinematic. The exposed brick and high ceilings do a lot of the work for me before I've even picked up the camera. The West Mill is set over multiple floors, so your day naturally moves through different spaces rather than staying in one room all day, giving your film distinct chapters instead of everything looking the same. It works beautifully year-round: spring and summer bring an outdoor ceremony option and long daylight, while autumn and winter lean into that warm, intimate glow indoors.",
    videoId: "r6jgraj1",
  },
  {
    name: "Grangefields by Cripps & Co",
    body: "The ceremony room here has a red-brick, vaulted-ceiling feel with natural light flooding through the windows, perfect for the moment you're exchanging vows. The Funktion-One sound system in the barn means I get genuinely clean audio off the desk for speeches and toasts, which is rarer than you'd think at barn venues. The Tuscan-inspired courtyard is where I'd point you for golden hour portraits, with the countryside behind you, and the open show kitchen in the dining barn means the atmosphere during the wedding breakfast and speeches is something else. You can feel it in the footage. The private drive up to the venue sets the tone before the day's even started.",
  },
  {
    name: "Yeldersley Hall",
    body: "Capped at 80 guests, which sounds like a small detail but it isn't. It means cleaner audio on your vows, speeches and the laughter in between, without a room full of side conversation to fight against. The bridal suite has genuinely great light and views for getting-ready footage, and because the venue includes accommodation for 14, I can capture your morning without anyone watching the clock. The function room does double duty as ceremony space and evening reception, so your film gets a real shift in mood between the two. Across the 12 acres of grounds I can get drone footage over the Derbyshire countryside without restriction, and the marquee (available April to December) fills with the same soft, natural light as the rest of the venue.",
  },
];

const faqs = [
  {
    q: "What is your wedding filming style?",
    a: "Documentary and cinematic. Documentary describes how I shoot: I capture your Derbyshire wedding as it actually happens, without directing or re-staging moments. Cinematic describes the result: two or three angles on the ceremony and speeches, professionally recorded audio from your vows, natural light, a moody editorial colour grade, and an edit built around the story of your day rather than a chronological checklist.",
  },
  {
    q: "Do you film documentary style weddings in Derbyshire?",
    a: "Yes, documentary is how every film I make is shot. Nothing is posed or run again for the camera. The only exception is your couple portraits, which are less about posing and more a quiet half hour away from the day, filmed as you walk and talk rather than staged.",
  },
  {
    q: "How much does a wedding videographer in Derbyshire cost?",
    a: "My Core package is £2,100 and the Complete Story package, which adds a second videographer plus your ceremony and speeches in full, is £2,750. My full package breakdown is on the Investment page.",
  },
  {
    q: "Do you film weddings at [specific venue] in Derbyshire?",
    a: "I've filmed regularly at venues including The West Mill, Grangefields and Yeldersley Hall. The first 50 miles are included in the price, which covers all of Derbyshire, with a small charge per mile beyond that. I'm always happy to visit a venue I haven't filmed at before.",
  },
  {
    q: "How far in advance should we book a Derbyshire wedding videographer?",
    a: "I'd recommend booking 12 to 24 months ahead, especially for a summer date. I only take on a limited number of weddings each year, so earlier is safer.",
  },
  {
    q: "Do you film both the ceremony and the whole day, or just highlights?",
    a: "The whole day. My approach is built around a full, story-driven film rather than a short highlight reel, so nothing that mattered to you gets left out. Optional extras like a stand-alone ceremony or speeches film are available if you want those in full as well.",
  },
  {
    q: "Will you work alongside our photographer?",
    a: "Yes, I'm used to working alongside photographers throughout the day, staying out of their shots and theirs out of mine. It's second nature at this point.",
  },
  {
    q: "Do you use a drone?",
    a: "Yes, where the venue allows it and conditions are safe. Several Derbyshire venues I work at, including Yeldersley Hall, have grounds that lend themselves particularly well to aerial footage.",
  },
];

export default function DerbyshirePage() {
  return (
    <>
      <BreadcrumbSchema trail={[{ name: "Derbyshire Wedding Films", path: "/derbyshire-wedding-film/" }]} />
      <PageBanner
        title="Derbyshire Wedding Films"
        eyebrow="Derbyshire Wedding Videographer"
        image="/images/banner-derbyshire.jpg"
      />

      <div className="mx-auto max-w-3xl px-6 py-24">

      <p className="text-lg leading-relaxed text-[var(--ink-muted)]">
        House of Tattersall is a wedding videographer in Derbyshire, based on the Staffordshire and Derbyshire border and filming cinematic wedding films right across the county and the Peak District. The first 50 miles of travel are included in the price, which covers the whole of Derbyshire, whether you are marrying at The West Mill in Derby, Yeldersley Hall, Grangefields or Lower Damgate Farm. I take a maximum of 15 weddings a year.
      </p>

      <p className="mt-10 rounded-lg border border-[var(--rule)] bg-[var(--khaki-wash)] px-6 py-4 text-[var(--ink-muted)]">
        Luxury cinematic wedding films in Derbyshire from £2,100. The Complete Story package, which adds a second videographer, is £2,750. The full breakdown is on the Investment page.
      </p>

      <div className="mt-10 text-center">
        <CtaButton>Enquire</CtaButton>
      </div>


      <StyleExplainer county="Derbyshire" />

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
            <h2 className="font-serif text-2xl text-[var(--khaki)]">{venue.name}</h2>
            {venue.photo ? (
              <div className="mt-6">
                <Photo src={venue.photo} alt={venue.name} />
              </div>
            ) : null}
            <p className="mt-6 leading-relaxed text-[var(--ink-muted)]">{venue.body}</p>
            {venue.videoId ? (
              <div className="mt-6">
                <VideoEmbed id={venue.videoId} title={venue.name} />
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <div className="mt-20 border-t border-[var(--rule)] pt-14">
        <h2 className="font-serif text-2xl text-[var(--khaki)]">
          Frequently asked questions, Derbyshire
        </h2>
        <div className="mt-8">
          <Faq items={faqs} />
        </div>
        <FaqSchema items={faqs} />
        <ServiceAreaSchema
          county="Derbyshire"
          url="https://www.houseoftattersall.com/derbyshire-wedding-film/"
          venues={["The West Mill, Derby", "Grangefields by Cripps & Co", "Yeldersley Hall"]}
        />
      </div>
      </div>

      <AwardsStrip heading="Award-winning wedding films" />

      <Testimonials
        heading="What couples married in Derbyshire said"
        county="Derbyshire"
      />

      <CtaBand />
    </>
  );
}
