import { PageBanner } from "@/components/page-banner";
import { VideoEmbed } from "@/components/video-embed";
import { CtaButton, CtaBand } from "@/components/cta";

const films = [
  {
    couple: "Emily & James",
    venue: "The Pumping House, Ollerton | 2025",
    videoId: "bcd7089f",
  },
  {
    couple: "Olivia & Charles",
    venue: "The West Mill, Derbyshire | 2026",
    videoId: "r6jgraj1",
  },
  {
    couple: "Hattie & Jack",
    venue: "Normanton Church | 2026",
    videoId: "xdn589wd",
  },
  {
    couple: "Rob & Jack",
    venue: "The Wilderness, Canterbury | 2026",
    videoId: "prev8ow4",
  },
  {
    couple: "Mira & Mitul",
    venue: "Leicestershire | 2026",
    videoId: "0bf128e7",
  },
  {
    couple: "Laura & Dan",
    venue: "Hanbury Wedding Barns, Staffordshire | 2026",
    videoId: "jqkfthxi",
  },
  {
    couple: "Laura & Dan",
    venue: "Lower Damgate Farm, Derbyshire | 2025",
    videoId: "31305438",
  },
  {
    couple: "Faye & Daniel",
    venue: "Bourton Hall, Warwickshire | 2026",
    videoId: "rmvfmefr",
  },
  {
    couple: "Mikki & Richard",
    venue: "Hazel Gap Barn, Nottinghamshire | 2025",
    videoId: "cdff82d2",
  },
  {
    couple: "Elisy & Sam",
    venue: "West Mill, Derbyshire | 2025",
    videoId: "356a0a1b",
  },
];

export default function FilmsPage() {
  return (
    <>
      <PageBanner
        title="Films"
        eyebrow="Recent wedding films"
        image="/images/banner-films.jpg"
      />

      <div className="mx-auto max-w-6xl px-6 py-24">
      <p className="text-xs tracking-[0.3em] text-[var(--gold)] uppercase">Films</p>

      <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {films.map((film) => (
          <div key={`${film.couple}-${film.venue}`}>
            <VideoEmbed id={film.videoId} title={`${film.couple}, ${film.venue}`} />
            <p className="mt-3 text-sm tracking-wide text-[var(--ink)] uppercase">
              {film.couple}
            </p>
            <p className="text-sm text-[var(--ink-faint)]">{film.venue}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <CtaButton>Enquire</CtaButton>
      </div>
      </div>

      <CtaBand />
    </>
  );
}
