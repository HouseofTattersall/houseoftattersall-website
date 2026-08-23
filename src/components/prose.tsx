import React from "react";
import Link from "next/link";
import { VideoEmbed } from "./video-embed";

/** Inline **bold** and [text](url) */
function inline(text: string, keyBase: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;

  while ((m = pattern.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const tok = m[0];
    if (tok.startsWith("**")) {
      nodes.push(
        <strong key={`${keyBase}-b${i}`} className="text-[var(--ink)]">
          {tok.slice(2, -2)}
        </strong>,
      );
    } else {
      const label = tok.slice(1, tok.indexOf("]"));
      const href = tok.slice(tok.indexOf("(") + 1, -1);
      nodes.push(
        <a
          key={`${keyBase}-a${i}`}
          href={href}
          className="text-[var(--khaki)] underline underline-offset-4 hover:text-[var(--khaki-deep)]"
        >
          {label}
        </a>,
      );
    }
    last = m.index + tok.length;
    i += 1;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

/**
 * Minimal renderer for the blog copy.
 * ## heading | ### subheading | - list item | blank line separates paragraphs
 */
export function Prose({ body }: { body: string }) {
  const lines = body.trim().split("\n");
  const out: React.ReactNode[] = [];
  let list: string[] = [];
  let para: string[] = [];
  let k = 0;

  const flushList = () => {
    if (!list.length) return;
    out.push(
      <ul
        key={`ul${k++}`}
        className="mt-4 list-disc space-y-2 pl-5 text-[var(--ink-muted)]"
      >
        {list.map((li, n) => (
          <li key={n}>{inline(li, `li${k}-${n}`)}</li>
        ))}
      </ul>,
    );
    list = [];
  };

  const flushPara = () => {
    if (!para.length) return;
    const text = para.join(" ");
    out.push(
      <p key={`p${k++}`} className="mt-4 leading-relaxed text-[var(--ink-muted)]">
        {inline(text, `p${k}`)}
      </p>,
    );
    para = [];
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      flushPara();
      flushList();
      continue;
    }
    if (line.startsWith("![")) {
      // ![alt](/images/file.jpg "optional caption")
      flushPara();
      flushList();
      const alt = line.slice(2, line.indexOf("]("));
      const rest = line.slice(line.indexOf("](") + 2, line.lastIndexOf(")"));
      const q = rest.indexOf(' "');
      const src = q === -1 ? rest : rest.slice(0, q);
      const caption = q === -1 ? "" : rest.slice(q + 2, -1);
      out.push(
        <figure key={`fig${k++}`} className="mt-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="w-full rounded-sm"
          />
          {caption ? (
            <figcaption className="mt-3 text-sm text-[var(--ink-faint)]">
              {caption}
            </figcaption>
          ) : null}
        </figure>,
      );
    } else if (line.startsWith("!video[")) {
      // !video[Title](videoid)
      flushPara();
      flushList();
      const title = line.slice(7, line.indexOf("]("));
      const id = line.slice(line.indexOf("](") + 2, line.lastIndexOf(")"));
      out.push(
        <div key={`vid${k++}`} className="mt-10">
          <VideoEmbed id={id} title={title} />
        </div>,
      );
    } else if (line.startsWith("!cta[")) {
      // !cta[Label](/enquire/)
      flushPara();
      flushList();
      const label = line.slice(5, line.indexOf("]("));
      const href = line.slice(line.indexOf("](") + 2, line.lastIndexOf(")"));
      out.push(
        <div key={`cta${k++}`} className="mt-10 text-center">
          <Link
            href={href}
            className="inline-block rounded-full bg-[var(--khaki)] px-8 py-3 text-sm tracking-[0.15em] text-[var(--paper)] uppercase transition-colors hover:bg-[var(--khaki-deep)]"
          >
            {label}
          </Link>
        </div>,
      );
    } else if (line.startsWith("### ")) {
      flushPara();
      flushList();
      out.push(
        <h3
          key={`h3${k++}`}
          className="mt-8 font-serif text-xl text-[var(--khaki)]"
        >
          {inline(line.slice(4), `h3${k}`)}
        </h3>,
      );
    } else if (line.startsWith("## ")) {
      flushPara();
      flushList();
      out.push(
        <h2
          key={`h2${k++}`}
          className="mt-12 font-serif text-2xl text-[var(--khaki)]"
        >
          {inline(line.slice(3), `h2${k}`)}
        </h2>,
      );
    } else if (line.startsWith("- ")) {
      flushPara();
      list.push(line.slice(2));
    } else {
      flushList();
      para.push(line);
    }
  }
  flushPara();
  flushList();

  return <div>{out}</div>;
}
