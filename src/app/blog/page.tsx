const posts = {
  "Real Weddings": [
    { title: "Laura and Daniel | Lower Damgate and Holy Cross Church, Peak District 2025", slug: "lowerdamgate-ilam" },
    { title: "Olivia and Charles Wedding Film | West Mill, Derby 2026", slug: "westmill-derby" },
    { title: "Faye and Daniel's Wedding Film | Bourton Hall, Rugby", slug: "bourton-hall-fd" },
    { title: "Laura & Daniel's Wedding Film | Hanbury Wedding Barns, Staffordshire", slug: "hanbury-dan-laura" },
    { title: "Rob & Jack's Wilderness Wedding Film | Preston Court, Kent | Summer 2026", slug: "wilderness" },
  ],
  "Updates & Guides": [
    { title: "Wedding Speeches: A Videographer's Guide to Great Audio, Great Footage", slug: "wedding-speeches" },
    { title: "5 Wedding Day Tips From a Wedding Videographer", slug: "5-wedding-day-tips-from-a-wedding-videographer" },
    { title: "Wedding Bands That Actually Get the Dancefloor Moving", slug: "wedding-bands-that-actually-get-the-dancefloor-moving" },
    { title: "Destination Wedding Videography in Europe", slug: "european-wedding-films" },
    { title: "Destination Wedding Films", slug: "destination-wedding-films" },
    { title: "UK Top 20 Wedding Videographers", slug: "uk-top-20-wedding-videographers" },
  ],
  "Venue Guides": [
    { title: "Davenport House, Wedding Videographer", slug: "davenport-house" },
    { title: "Palm House Sefton Park, Wedding Videographer", slug: "palm-house-sefton-park-videography" },
    { title: "Hanbury Barns, Wedding Videographer | Staffordshire", slug: "hanbury-barns" },
    { title: "Foxtail Barns, Wedding Videographer | Staffordshire", slug: "foxtail-barns-wedding-videographer" },
    { title: "Grangefields, Wedding Videographer | Derbyshire", slug: "grangefields-derbyshire" },
    { title: "The Ashes Barn Wedding Film | Staffordshire", slug: "the-ashes-wedding-videographer" },
    { title: "Rutland Wedding Videographer | Barnsdale & Normanton Church", slug: "rutland-wedding-videographer" },
    { title: "Hazel Gap Barn, Wedding Videographer | Nottinghamshire", slug: "hazel-gap-barn-wedding-videographer-" },
    { title: "Bridge House Barn, Wedding Videographer | Leicestershire", slug: "bridge-house-barn-wedding-videographer" },
    { title: "The Pumping House, Wedding Videographer | Newark", slug: "pumping-house-wedding-videographer" },
    { title: "Yeldersley Hall, Wedding Videographer | Derbyshire", slug: "yeldersley-hall-wedding-videographer-derbyshire" },
    { title: "The West Mill, Wedding Videographer | Derbyshire", slug: "the-west-mill-wedding-videographer-derbyshire" },
  ],
};

export default function BlogIndexPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-xs tracking-[0.3em] text-white/60 uppercase">
        Film Reviews
      </p>
      <h1 className="mt-4 font-serif text-4xl">The Blog</h1>
      <p className="mt-6 text-white/60">
        This is an index of your current live posts so nothing gets lost in
        the move. Individual post pages haven&apos;t been rebuilt yet — that&apos;s
        the next batch of work once you&apos;ve approved the core pages.
      </p>

      {Object.entries(posts).map(([category, items]) => (
        <div key={category} className="mt-14">
          <h2 className="font-serif text-2xl">{category}</h2>
          <ul className="mt-6 space-y-3 text-white/70">
            {items.map((post) => (
              <li key={post.slug}>{post.title}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
