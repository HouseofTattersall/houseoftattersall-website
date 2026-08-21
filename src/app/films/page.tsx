import { PlaceholderMedia } from "@/components/placeholder-media";

const films = [
  { couple: "Rob & Jack", venue: "Wilderness, Canterbury | 2026" },
  { couple: "Laura & Dan", venue: "Hanbury Wedding Barns, Staffordshire | 2026" },
  { couple: "Laura & Dan", venue: "Lower Damgate Farm, Derbyshire | 2025" },
  { couple: "Faye & Daniel", venue: "Bourton Hall, Warwickshire | 2026" },
  { couple: "Mikki & Richard", venue: "Hazel Gap Barn, Nottinghamshire | 2025" },
  { couple: "Elisy & Sam", venue: "West Mill, Derbyshire | 2025" },
];

export default function FilmsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <p className="text-xs tracking-[0.3em] text-white/60 uppercase">Films</p>
      <h1 className="mt-4 max-w-2xl font-serif text-4xl">
        Films that feel like <em className="italic">YOUR</em> wedding day, not
        just a highlight of it.
      </h1>

      <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {films.map((film) => (
          <div key={`${film.couple}-${film.venue}`}>
            <PlaceholderMedia label={`${film.couple} film embed`} />
            <p className="mt-3 text-sm tracking-wide text-white uppercase">
              {film.couple}
            </p>
            <p className="text-sm text-white/50">{film.venue}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
