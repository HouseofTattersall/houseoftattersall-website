/**
 * Prints /guide/honest-truths/ to public/the-honest-guide.pdf.
 *
 * The PDF is generated from the live page, so the two cannot drift apart.
 * Run it whenever src/lib/guide.ts changes, then rebuild:
 *
 *   npm run build && node scripts/build-guide-pdf.mjs && npm run build
 *
 * The first build produces the page to print, the second copies the new PDF
 * out of public/ into out/.
 */
import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = resolve(root, "out");
const PORT = 8731;

if (!existsSync(OUT)) {
  console.error("No out/ directory. Run `npm run build` first.");
  process.exit(1);
}

const server = spawn("python3", ["-m", "http.server", String(PORT)], {
  cwd: OUT,
  stdio: "ignore",
});
const stop = () => server.kill();
process.on("exit", stop);
process.on("SIGINT", () => {
  stop();
  process.exit(1);
});

await new Promise((r) => setTimeout(r, 1500));

const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || "/opt/pw-browsers/chromium",
});
const page = await browser.newPage();
await page.goto(`http://localhost:${PORT}/guide/honest-truths.html`, {
  waitUntil: "load",
});
await page.emulateMedia({ media: "print" });
await page.waitForTimeout(500);

await page.pdf({
  path: resolve(root, "public/the-honest-guide.pdf"),
  format: "A4",
  printBackground: true,
  displayHeaderFooter: true,
  headerTemplate: "<div></div>",
  footerTemplate:
    '<div style="width:100%;font-size:7pt;color:#736f68;font-family:Georgia,serif;padding:0 18mm;display:flex;justify-content:space-between;"><span>House of Tattersall</span><span class="pageNumber"></span></div>',
  margin: { top: "18mm", bottom: "16mm", left: "18mm", right: "18mm" },
});

await browser.close();
stop();
console.log("Wrote public/the-honest-guide.pdf");
