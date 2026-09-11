import type { Post } from "./post-types";
import { weddingPosts } from "./posts-weddings";
import { venuePostsA } from "./posts-venues-a";
import { venuePostsB } from "./posts-venues-b";
import { venuePostsC } from "./posts-venues-c";
import { tipsPosts } from "./posts-tips";

export type { Post };

export const posts: Post[] = [
  ...weddingPosts,
  ...venuePostsA,
  ...venuePostsB,
  ...venuePostsC,
  ...tipsPosts,
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

/** Grouped for the blog index. */
export const realWeddings = weddingPosts;
export const venueGuides = [...venuePostsA, ...venuePostsB, ...venuePostsC];
export const guides = tipsPosts;

const MONTHS = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

/** "23 August 2026" -> "2026-08-23", for schema and sitemaps. */
export function isoDate(date: string): string | undefined {
  const m = /^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/.exec(date.trim());
  if (m) {
    const month = MONTHS.indexOf(m[2].toLowerCase());
    if (month === -1) return undefined;
    return `${m[3]}-${String(month + 1).padStart(2, "0")}-${m[1].padStart(2, "0")}`;
  }
  // "October 2025" with no day. Year and month alone is still valid ISO 8601,
  // so the post keeps a datePublished rather than silently losing one.
  const ym = /^([A-Za-z]+)\s+(\d{4})$/.exec(date.trim());
  if (ym) {
    const month = MONTHS.indexOf(ym[1].toLowerCase());
    if (month === -1) return undefined;
    return `${ym[2]}-${String(month + 1).padStart(2, "0")}`;
  }
  return undefined;
}

/** Banner image per post category, so every post has artwork. */
export function bannerFor(post: Post): string {
  if (post.banner) return post.banner;
  const c = post.category.toLowerCase();
  if (c.includes("derbyshire")) return "/images/banner-derbyshire.jpg";
  if (c.includes("staffordshire")) return "/images/banner-staffordshire.jpg";
  if (c.includes("real weddings")) return "/images/banner-films.jpg";
  if (c.includes("updates")) return "/images/banner-investment.jpg";
  if (c.includes("guides")) return "/images/banner-enquire.jpg";
  return "/images/banner-blog.jpg";
}
