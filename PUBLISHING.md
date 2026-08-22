# How to publish a change

Keep this open when you're publishing. It lives in the repo, so it's always to hand.

---

## The five steps

**1. Get the new files.** Claude sends `houseoftattersall-repo-with-history.zip`. Download and unzip it.

**2. Find your local repo folder.** GitHub Desktop → **Repository** → **Show in Explorer** (Windows) or **Show in Finder** (Mac).

**3. Copy the changed files in.** Claude will tell you exactly which files changed and whether any need deleting. Copy those from the unzipped folder into the same place in your local folder, overwriting when asked.

**4. Commit and push.** In GitHub Desktop:
- Click **Pull origin** first
- Check the changed files listed on the left look right
- Write a short summary in the box at the bottom
- Click **Commit to master**
- Click **Push origin**

**5. Watch it go live.** app.netlify.com → your site → **Deploys**. A build starts within seconds and takes 1 to 2 minutes. Wait for **Published**, then check the page.

---

## If something goes wrong

**Netlify build fails.** Click the failed deploy to see the log, copy the error, send it to Claude. The live site stays up in the meantime, so a failed build never breaks anything.

**GitHub Desktop shows far more changed files than expected.** You've probably copied the whole folder rather than the named files. Not harmful, but harder to check. Either review carefully or use **Discard all changes** and start again.

**GitHub Desktop shows no changes.** The files didn't land in the right place. Check you copied into the folder GitHub Desktop is watching, not a duplicate.

---

## Asking for a change

Just describe it. Useful things to include:

- Which page or post
- The exact wording if it matters, and say **"keep my words exactly as written"** if you don't want it touched
- Video embed code, pasted whole
- Any images, attached at full size (they get resized automatically)

---

## Adding a blog post

Say the title, category, date, video embed code and the copy. Categories in use:

- **Real Weddings** (add the county, e.g. "Real Weddings, Derbyshire")
- **Venue guide** (add the county)
- **Guides**
- **Updates**

Adding a post automatically handles the page, the blog index listing, the sitemap, the banner image and the Enquire call to action. You don't have to ask for any of that.

---

## Going live on the real domain

Not done yet. When you're ready:

1. Netlify → **Domain management** → **Add a custom domain** → `houseoftattersall.com`
2. Follow the DNS instructions Netlify gives you
3. **Leave Pixieset running** until the DNS has fully propagated. Usually a few hours, occasionally up to 48.
4. Check the live domain properly, then cancel Pixieset.

Don't cancel Pixieset the same day you switch.
