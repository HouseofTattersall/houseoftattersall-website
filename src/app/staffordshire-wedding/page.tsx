import { PlaceholderMedia } from "@/components/placeholder-media";
import { Faq } from "@/components/faq";

const venues = [
  {
    name: "Hanbury Wedding Barns",
    body: "The ceremony barn has exposed timber frames and vaulted ceilings that genuinely help the audio. The acoustics in there are some of the best I work with. Natural light pours through the windows even on an overcast Staffordshire day, so I rarely need artificial lighting at all. What I like most as a filmmaker is the flow: there are no awkward room changes breaking up the story of your day, which keeps a documentary-style film feeling continuous rather than stitched together. Outdoor ceremonies here capture beautifully too: the countryside audio, the breeze, the atmosphere, and the pavilion and lake give good options for drone footage. In summer, the golden hour runs long, which means more time for the couple portraits that end up being everyone's favourite part of the film. Like Foxtail and The Ashes Barns, Hanbury blends an old barn foundation with a modern interior, and that contrast is something I love filming across all three venues.",
    embedLabel: "Laura & Daniel film embed",
  },
  {
    name: "Foxtail Barns",
    body: "The ceremony conservatory is a videographer's dream for light, and the acoustics mean I can capture your vows and readings cleanly without intrusive kit. Even on a grey Staffordshire day the ceremony barn seems to glow, and the walled garden gives soft, diffused light for the quieter, more intimate shots. The iconic bridge on the grounds is where golden hour portraits really come alive. I've filmed here often enough now that I know every corner and where the light falls at different times of day, which means less time working out the venue on your wedding day and more time actually capturing it.",
  },
  {
    name: "The Ashes Barns",
    body: "Such a beautiful little spot, with different sections for different parts of the day so your film naturally moves through distinct scenes: the Dressing Room, the Ceremony Barn, the Wedding Breakfast Barn, and the Party Barn each have their own look and feel. What I love filming here, and it's true of the other Ensarb venues too like Foxtail and Hanbury, is the way the old barn foundations sit alongside genuinely modern interiors. That contrast between rustic and contemporary gives a wedding film here real texture, and the surrounding countryside gives plenty of options for portraits beyond the barns themselves.",
  },
];

const faqs = [
  {
    q: "How much does a wedding videographer in Staffordshire cost?",
    a: "Most of my couples invest between £2,300 and £2,700 for their wedding film, depending on hours of coverage and any extras like a ceremony-in-full or speeches-in-full add-on. My full package breakdown is on the Investment page.",
  },
  {
    q: "Do you film weddings at [specific venue] in Staffordshire?",
    a: "I've filmed regularly at venues including Hanbury Wedding Barns, Foxtail Barns and The Ashes Barns. I cover all of Staffordshire as standard with no travel charge, and I'm always happy to visit a venue I haven't filmed at before.",
  },
  {
    q: "How far in advance should we book a Staffordshire wedding videographer?",
    a: "I'd recommend booking 12 to 24 months ahead, especially for a summer date. I only take on a limited number of weddings each year, so earlier is safer.",
  },
  {
    q: "What's your filming style?",
    a: "Documentary and unscripted. I focus on capturing the day as it actually happens rather than staging or interrupting moments, with natural light and real audio from your vows and speeches rather than a generic music overlay.",
  },
  {
    q: "Do you offer drone footage?",
    a: "Yes, where the venue allows it and conditions are safe. Several Staffordshire venues I work at, including Hanbury Wedding Barns, have grounds that suit aerial footage particularly well.",
  },
  {
    q: "Can you cover a wedding outside Staffordshire too?",
    a: "Yes, I'm based on the Staffordshire/Derbyshire border and cover the Midlands, the North, and UK-wide, with destination weddings in Europe also available.",
  },
];

export default function StaffordshirePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-xs tracking-[0.3em] text-white/60 uppercase">
        Staffordshire Wedding Videographer
      </p>
      <h1 className="mt-4 max-w-2xl font-serif text-4xl">
        Films that feel like your wedding day. Not just a highlight of it.
      </h1>

      <p className="mt-10 rounded-lg border border-white/15 bg-white/5 px-6 py-4 text-white/80">
        Most of my couples investing in a Staffordshire wedding film spend
        between £2,300 and £2,700, depending on hours of coverage and any
        extras you add on. The full breakdown is on the Investment page.
      </p>

      <div className="mt-20 space-y-20">
        {venues.map((venue) => (
          <div key={venue.name}>
            <h2 className="font-serif text-2xl">{venue.name}</h2>
            <p className="mt-4 leading-relaxed text-white/70">{venue.body}</p>
            {venue.embedLabel ? (
              <div className="mt-6">
                <PlaceholderMedia label={venue.embedLabel} />
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <div className="mt-20 border-t border-white/10 pt-14">
        <h2 className="font-serif text-2xl">
          Frequently asked questions — Staffordshire
        </h2>
        <div className="mt-8">
          <Faq items={faqs} />
        </div>
      </div>
    </div>
  );
}
