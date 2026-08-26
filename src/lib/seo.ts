import type { Metadata } from "next";

/**
 * Builds a page's metadata: unique title and description, a canonical URL,
 * and matching Open Graph and Twitter cards.
 *
 * Every route should export one of these. A page without it silently
 * inherits the root layout's title, which is the homepage's.
 */
export function pageMeta({
  title,
  description,
  path,
  image = "/images/banner-films.jpg",
}: {
  /** Full <title>, including the brand suffix */
  title: string;
  description: string;
  /** Site-root-relative path with a trailing slash, e.g. "/investment/" */
  path: string;
  image?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      title,
      description,
      url: path,
      images: [image],
      siteName: "House of Tattersall",
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
