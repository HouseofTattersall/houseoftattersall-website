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

- **Pricing** (set 2 October 2026):
  - **Core, £2,100.** Consultation, 10 hours coverage, **6-8 minute** feature
    film, **60 second film trailer**, ceremony in full, speeches in full, drone,
    6-9 week expected turnaround.
  - **The Complete Story, £2,540.** Consultation, 10 hours coverage, a second
    videographer, **60 second film trailer**, **4-6 minute highlight film**,
    **14-18 minute feature film**, ceremony in full, speeches in full, drone,
    6-9 week expected turnaround. Do **not** describe it as "everything in
    Core": the two packages are listed separately now.
  - Extras: extended feature film (6-8 up to 14-18 minutes) **£250**, home movie
    **£400**.
  - **Vintage Camera Add-on** (added 18 October 2026): vintage camera style
    footage, **free on the day**. Couples may also borrow a camera in the months
    before the wedding for a **small charge**. Do **not** publish a figure for
    that charge without asking, the same as the per-mile travel rate.
  - The **1 week anniversary teaser is discontinued**. Do not reintroduce it.
  - Never publish a different figure without asking.
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
- **Booking fee:** **£200** secures the date. The **remaining balance is due
  six weeks before the wedding** (confirmed 19 October 2026).
- **Booking process (Andy's wording, 19 October 2026, seven steps):** enquiry;
  video call; then the client portal, contract, invoice, schedule and
  questionnaire together with the £200 booking fee and the balance due six weeks
  out; automatic reminders six weeks before; a second call if needed; arrival
  time confirmed; then delivery. Lives in `src/components/journey.tsx` and
  renders in two shapes, full on Investment and compact above the enquiry form.
- **Delivery timing:** the teaser is **expected within 6 to 9 weeks**,
  everything else within a week of that. Always word it as *expected*
  turnaround, never as a guarantee. Changed from 6-12 on 2 October 2026.

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
- `src/app/sitemap.ts` — generated at build. New posts self-register, but a new
  top-level page must be added to the `pages` array by hand.
- `public/robots.txt` — static, and points at both the sitemap and `llms.txt`.
  There is no longer a `robots.ts`; do not reintroduce one, the two conflict.
- `public/_redirects` — legacy blog URLs not yet rebuilt. Remove a line when its post is restored.

## Still outstanding

- Three legacy posts on redirects rather than real pages: wedding bands, and the two destination wedding posts.
- Andy's Google Business Profile. The pack is written and his review link is
  `https://g.page/r/CeI_BdVqvlUgEBM/review`.
- Netlify's primary domain is the apex `houseoftattersall.com`, while every
  canonical tag, schema id and sitemap entry says `www.`. Make the two agree.
- Images carry no width or height, so pages shift as photos load.
- `--gold` (#a98950) fails WCAG AA on cream at 12px. Darkening to about #8a6d39
  would clear it. Needs Andy's eye before changing a brand colour.

## Settled, do not undo

- The domain is live and switched. Netlify deploys from master on push.
- **No destination weddings abroad.** Every wedding to date has been in the UK.
  The European experience is commercial filming in France, Amsterdam, Germany
  and Switzerland. Word it as availability, never as past wedding work.
- **Photography is no longer recommended over film.** Andy's settled line is the
  grandparents question: would you rather have photographs of your grandparents'
  wedding, or a video of it? Do not reintroduce a ranking.
- Availability counts live in `src/lib/availability.ts`. Keep them honest.

## Pushing

Claude sessions have generally **not** been able to push to this repo (sandbox restriction). Andy pushes via GitHub Desktop. Tell him exactly which files changed and whether any need deleting. See `PUBLISHING.md`.
