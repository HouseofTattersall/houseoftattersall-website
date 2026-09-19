# House of Tattersall — project context

Read this before working on this repo. It is the site for a real business and there are rules.

## What this is

The website for **House of Tattersall**, a cinematic wedding videographer run by **Andy Tattersall** from Denstone, Staffordshire. Rebuilt from a Pixieset site into a static Next.js site hosted on Netlify.

## Non-negotiable

**Never rewrite Andy's copy without being asked.** He has explicitly instructed: retain existing copy word for word; do not rewrite, shorten or "improve" it. If you think something is weak, say what and why, and wait for approval. This applies to everything carried over from the original site and everything he writes himself.

**No em dashes.** Andy asked for these removed. Use commas, colons or full stops.

**British English** throughout.

## Facts that must stay consistent

Getting these wrong across pages was a real problem once already. Check against this list.

- **Pricing:** Core package **£2,100** (7-9 minute feature film, ceremony and
  speeches in full). Complete Story package **£2,750** (adds a second
  videographer, a **16-18 minute** feature film as standard, and the 1 week
  anniversary teaser). Extras: extended feature film £195, 1 week anniversary
  £210, home movie £400. Never publish a different figure without asking.
- **Wedding videography since:** 2022. Professional filming (live music, events, brand work) since **November 2014**.
- **Volume:** a **hard cap of 15 weddings a year**. Not "15 to 20": Andy
  confirmed 15 is the ceiling. Every one filmed by him personally.
- **Travel:** the **first 50 miles are included** in the price, which covers all
  of Staffordshire and Derbyshire. Beyond 50 miles there is a **small charge per
  mile**. Do not publish a per-mile rate without asking.
- **Awards** (use exactly this list, from the About page):
  - 2026 The Wedding Industry Awards, Finalist & Highly Commended
  - 2026 I Do Wedding Awards, Finalist
  - 2025 The Wedding Industry Awards, National Finalist
  - 2025 The Wedding Industry Awards, East Midlands Winner, Videographer of the
    Year (TWIA's own badge wording for a regional win)
  - 2024 The Wedding Industry Awards, Finalist
  - Guest on That Wedding Videographer Podcast, 2026
  - Previously Top 100 Music Photographers in the World, How To Become A Rockstar Photographer
- **Former trading name:** Andy Tatt Media. Where it appears, write "House of Tattersall (at the time 'Andy Tatt Media')".
- **Camera setup:** two or three angles on ceremony and speeches.
- **Backups:** Andy backs footage up himself and sends it to his editor the following day, so it sits in three places within 24 hours.
- **Editing:** films are edited by **Bride & Groom** to an extensive brief Andy
  writes. **Vlad** is the editor there who cuts his films, around 18 months as of
  September 2026; **Serge** owns the company. The editor is booked before the
  wedding, and the first draft returns about four weeks after the day. Andy
  shoots every wedding personally.
- **Delivery:** Vidflow. Plays on any smart device, downloadable, stores films for 10 years.
- **Enquiry form:** Wedola (also his CRM).
- **Booking fee:** **£200** secures the date.
- **Booking process:** enquiry, video call, £200 to secure, client portal
  (contract, invoice, schedule, questionnaire), automatic reminders six weeks
  out, a second call if needed, arrival time confirmed, then delivery.
- **Delivery timing:** the teaser arrives within **6 to 12 weeks**, everything
  else within a week of that. Andy's **aim is 6 to 9 weeks** even in busy
  season. Publish 6-12 as the commitment and 6-9 only as an aim, never a
  promise.

## Palette

Six CSS variables at the top of `src/app/globals.css` drive everything:

- `--paper` off-white background, `--paper-alt` alternating sections
- `--khaki` headings, nav, buttons, boxes. `--khaki-deep` hover, `--khaki-wash` pale fill
- `--gold` small uppercase labels, rules, accents. `--gold-wash` pale fill
- `--ink` off-black body text, `--ink-muted`, `--ink-faint`
- `--rule` hairlines

Change these and the whole site follows. Do not hard-code colours.

## Structure

- `src/lib/posts-*.ts` — blog content. Real weddings, venue guides (a/b/c), tips.
- `src/lib/post-types.ts` — the `Post` shape.
- `src/app/blog/[slug]/page.tsx` — renders every post from that data.
- `src/app/blog/<slug>/page.tsx` — the four buyer guides, which are their own routes.
- `src/components/prose.tsx` — light markdown renderer. Supports `##`, `###`, `-` lists, `**bold**`, `[links](url)`. **Does not support bold-wrapped links** (`**[text](url)**`) — they render as raw text.
- `src/components/schema.tsx` — FAQPage, LocalBusiness, Service JSON-LD.
- `src/app/sitemap.ts` / `robots.ts` — generated at build. New posts self-register.
- `public/_redirects` — legacy blog URLs not yet rebuilt. Remove a line when its post is restored.

## Still outstanding

- Three legacy posts on redirects rather than real pages: wedding bands, and the two destination wedding posts.
- Domain not yet switched. Site is on a Netlify preview URL; Pixieset is still live.
- Andy's Google Business Profile should be checked for consistency against the facts above.

## Pushing

Claude sessions have generally **not** been able to push to this repo (sandbox restriction). Andy pushes via GitHub Desktop. Tell him exactly which files changed and whether any need deleting. See `PUBLISHING.md`.
