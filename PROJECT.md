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

- **Pricing:** most couples invest **£2,300 to £2,700**. Never publish a different figure without asking.
- **Wedding videography since:** 2022. Professional filming (live music, events, brand work) since **November 2014**.
- **Volume:** a deliberately limited number each year, **typically 15 to 20**.
- **Coverage:** all of Staffordshire and Derbyshire with **no travel charge**.
- **Awards** (use exactly this list, from the About page):
  - 2026 The Wedding Industry Awards, Finalist & Highly Commended
  - 2026 I Do Wedding Awards, Finalist
  - 2025 The Wedding Industry Awards, Regional Winner / UK Top 10
  - 2024 The Wedding Industry Awards, Finalist
  - Guest on That Wedding Videographer Podcast, 2026
  - Previously Top 100 Music Photographers in the World, How To Become A Rockstar Photographer
- **Former trading name:** Andy Tatt Media. Where it appears, write "House of Tattersall (at the time 'Andy Tatt Media')".
- **Camera setup:** two or three angles on ceremony and speeches.
- **Backups:** Andy backs footage up himself and sends it to his editor the following day, so it sits in three places within 24 hours.
- **Editing:** films are edited by Bride & Groom to an extensive brief Andy writes. He shoots every wedding personally.
- **Delivery:** Vidflow. Plays on any smart device, downloadable, stores films for 10 years.
- **Enquiry form:** Wedola (also his CRM).

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
