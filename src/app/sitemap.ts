import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";

const SITE = "https://www.houseoftattersall.com";

/** Buyer guides live as their own routes rather than in the posts data. */
const buyerGuideSlugs = [
  "how-much-does-a-wedding-videographer-cost",
  "wedding-videographer-vs-photographer",
  "how-to-choose-a-wedding-videographer",
  "is-a-wedding-videographer-worth-it",
];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/about",
    "/films",
    "/investment",
    "/enquire",
    "/derbyshire-wedding-film",
    "/staffordshire-wedding",
    "/nottinghamshire-wedding",
    "/blog",
  ];

  const postUrls = [
    ...buyerGuideSlugs.map((s) => `/blog/${s}`),
    ...posts.map((p) => `/blog/${p.slug}`),
  ];

  return [...pages, ...postUrls].map((path) => ({
    url: `${SITE}${path}/`.replace(/\/\/$/, "/"),
  }));
}
