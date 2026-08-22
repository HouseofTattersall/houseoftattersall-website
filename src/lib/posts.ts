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
