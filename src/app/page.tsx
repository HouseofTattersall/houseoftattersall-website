import { Split } from "@/components/split";
import { Testimonials } from "@/components/testimonials";
import { FaqSchema } from "@/components/schema";
import { VideoEmbed } from "@/components/video-embed";
import { Faq } from "@/components/faq";
import { CtaButton, CtaBand } from "@/components/cta";
import { StyleExplainer } from "@/components/style-explainer";

const films = [
  {
    couple: "Faye & Daniel",
    venue: "Bourton Hall, Warwickshire | 2026",
    videoId: "rmvfmefr",
  },
  {
    couple: "Rob & Jack",
    venue: "The Wilderness, Canterbury | 2026",
    videoId: "prev8ow4",
  },
  {
    couple: "Elisy & Sam",
    venue: "West Mill, Derbyshire | 2025",
    videoId: "356a0a1b",
  },
];



const faqs = [
  {
    q: "How far in advance should we book our wedding videographer?",
    a: "Most couples book 12–24 months in advance, especially for peak summer dates. I only take on a limited number of weddings each year to keep every film personal and carefully crafted, so it's always worth enquiring as early as possible.",
  },
  {
    q: "What areas do you cover?",
    a: "I'm based on the border of Derbyshire and Staffordshire, regularly film weddings across the UK. The first 50 miles are including in the price, anything over that will be quoted for. I also film destination weddings across Europe.",
  },
  {
    q: "How do we book?",
    a: "The process is simple: send an enquiry, arrange a video call, secure your date with a booking fee. After that, we'll plan everything together leading up to the wedding. P.s. lots of the processes are automated so you know you will get emails reminding you at the key moments.",
  },
  {
    q: "How would you describe your filming style?",
    a: "My films are cinematic, emotional, and story-driven. In practice that means: natural light over artificial staging, real audio from your vows and speeches rather than music-only edits, a moody editorial colour grade rather than a bright social-media look, and an edit built around the story of your day rather than a chronological checklist. I don't direct or re-stage moments, if it happens, I capture it; if I miss it, I let it go. That's what gives the finished film its documentary, cinematic feel rather than a produced one.",
  },
  {
    q: "We're awkward in front of the camera, is that a problem?",
    a: "Not at all. Most couples say this before booking. My approach is calm and unobtrusive, so you can enjoy your wedding naturally without feeling like you're constantly performing for the camera.",
  },
  {
    q: "Do you use drones?",
    a: "Yes, whenever weather, venue permissions, and local flight regulations allow. Drone footage can add beautiful cinematic context to your wedding film.",
  },
  {
    q: "Do you work well with photographers?",
    a: "Definitely. I've worked alongside many incredible photographers across the UK, and collaboration is a huge part of making the day feel relaxed and seamless. My aim is always to complement the photography team, never compete with them. If you would like recommendations, please do let me know.",
  },
  {
    q: "Do you record vows and speeches?",
    a: "Yes, clear audio is a huge part of storytelling. I professionally record your vows, speeches, and key moments throughout the day so your film feels emotional and immersive.",
  },
  {
    q: "Is wedding videography really worth it?",
    a: "Photography freezes moments beautifully, but film lets you relive them, the voices, movement, laughter, speeches, and emotion. Many couples say their wedding film became one of the most valuable things they invested in after the day itself.",
  },
  {
    q: "How long does it take to receive our wedding film?",
    a: "Typically, teaser films are delivered within around 6 weeks, with full galleries delivered afterwards depending on the season and workload.",
  },
  {
    q: "How do we receive our films?",
    a: "Your films are delivered digitally through a premium online platform where you can stream, download, and share your films with family and friends.",
  },
  {
    q: "Do you offer shorter coverage options?",
    a: "I mainly focus on full-day storytelling coverage because it allows me to capture the complete atmosphere and narrative of the wedding day. However, feel free to enquire if you're planning something smaller or more intimate.",
  },
  {
    q: "Can we choose the music for our wedding film?",
    a: "I carefully select licensed music that matches the emotion and energy of your day, but I'm always happy to hear your preferences and inspiration beforehand.",
  },
  {
    q: "Do you film multicultural or religious weddings?",
    a: "Absolutely. I've filmed a wide variety of weddings and celebrations, and I always approach every culture, tradition, and ceremony with respect and care.",
  },
];

export default function Home() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-6 pt-8">
        <VideoEmbed id="xdn589wd" title="House of Tattersall showreel" priority />
      </div>

      <section className="px-6 pt-14 pb-4 text-center">
        <p className="text-xs tracking-[0.3em] text-[var(--gold)] uppercase">
          Cinematic Wedding Films
        </p>
        <h1 className="mx-auto mt-6 max-w-3xl font-serif text-4xl leading-tight text-[var(--khaki)] md:text-6xl">
          Films that feel like <em className="italic">YOUR</em> wedding day
        </h1>
        <p className="mt-4 font-serif text-2xl text-[var(--ink-muted)] md:text-3xl">
          NOT just a highlight of it
        </p>
        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-[var(--ink-muted)]">
          House of Tattersall is a wedding videographer based in Denstone,
          Staffordshire, filming cinematic wedding films across Staffordshire,
          Derbyshire and Nottinghamshire. Films start from £2,100.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <CtaButton>Enquire</CtaButton>
          <CtaButton href="/films/" variant="outline">
            Watch My Films
          </CtaButton>
        </div>
      </section>

      <Split image="/images/home-1.jpg">
        <p className="leading-relaxed text-[var(--ink-muted)]">
          House of Tattersall Films creates luxury, cinematic wedding films
          across Derbyshire, Staffordshire and Nottinghamshire. Based on the
          Staffordshire and Derbyshire border, filming weddings from intimate
          barn celebrations to grand country houses, as well as further afield
          across the UK.
        </p>
        <p className="mt-5 leading-relaxed text-[var(--ink-muted)]">
          Every film is built around a core package, covering the key moments
          of your day from getting ready through to the first dance, then
          tailored to suit each couple&apos;s story, venue and timeline. The
          result is a timeless, emotionally led film that feels like your
          wedding, not a template.
        </p>
        <p className="mt-6 rounded-lg border border-[var(--rule)] bg-[var(--khaki-wash)] px-5 py-4 text-[var(--ink-muted)]">
          Luxury cinematic wedding films from £2,100. The Complete Story package, which adds a second videographer, is £2,750.
        </p>
      </Split>

      <section className="bg-[var(--paper-alt)] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mx-auto max-w-2xl text-center font-serif text-xl text-[var(--ink)]">
            A small collection of recent films: each one different, each one
            shaped by the couple, the atmosphere, and the moments that made
            the day what it was.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {films.map((film) => (
              <div key={`${film.couple}-${film.venue}`}>
                <VideoEmbed id={film.videoId} title={`${film.couple}, ${film.venue}`} />
                <p className="mt-3 text-sm tracking-[0.12em] text-[var(--ink)] uppercase">
                  {film.couple}
                </p>
                <p className="text-sm text-[var(--ink-faint)]">{film.venue}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <CtaButton href="/films/">More films</CtaButton>
            <CtaButton href="/investment/" variant="outline">
              Investment
            </CtaButton>
          </div>
        </div>
      </section>

      <Split image="/images/home-2.jpg" reverse>
        <h2 className="font-serif text-3xl text-[var(--khaki)]">
          Films that feel as much as they show
        </h2>
        <p className="mt-5 font-serif text-xl text-[var(--ink-muted)] italic">
          Every wedding has its own rhythm.
        </p>
        <div className="mt-3 space-y-1 text-[var(--ink-muted)]">
          <p>The quiet moments in the morning.</p>
          <p>The anticipation before the ceremony.</p>
          <p>The energy once the day begins to unfold.</p>
        </div>
        <p className="mt-5 text-[var(--ink-muted)]">
          My films are built around moments, with very minimal staging,
          certainly no forced moments and never following a formula.
        </p>
        <p className="mt-2 text-[var(--ink-muted)]">
          Just honest, natural storytelling, crafted with intention.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <CtaButton href="/about/" variant="outline">
            About Me
          </CtaButton>
          <CtaButton>Enquire</CtaButton>
        </div>
      </Split>

      <div className="mx-auto max-w-3xl px-6 pb-8">
        <StyleExplainer />
      </div>

      <Testimonials />

      <section className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="text-center font-serif text-3xl text-[var(--khaki)]">
          Frequently asked questions
        </h2>
        <div className="mt-12">
          <Faq items={faqs} />
        </div>
        <FaqSchema items={faqs} />
      </section>

      <CtaBand />
    </div>
  );
}
