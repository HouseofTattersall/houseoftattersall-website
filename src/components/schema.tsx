import type { FaqItem } from "@/components/faq";

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Question-and-answer markup so AI systems can lift the answers directly. */
export function FaqSchema({ items }: { items: FaqItem[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((i) => ({
          "@type": "Question",
          name: i.q,
          acceptedAnswer: { "@type": "Answer", text: i.a },
        })),
      }}
    />
  );
}

const SITE = "https://www.houseoftattersall.com";

/** Article markup so search and AI systems can attribute and date each post. */
export function ArticleSchema({
  title,
  description,
  slug,
  image,
  datePublished,
}: {
  title: string;
  description: string;
  slug: string;
  image: string;
  datePublished?: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: title,
        description,
        image: `${SITE}${image}`,
        mainEntityOfPage: `${SITE}/blog/${slug}/`,
        url: `${SITE}/blog/${slug}/`,
        ...(datePublished ? { datePublished, dateModified: datePublished } : {}),
        author: { "@type": "Person", name: "Andy Tattersall" },
        publisher: { "@id": `${SITE}/#business` },
        inLanguage: "en-GB",
      }}
    />
  );
}

/** VideoObject markup for a film embedded in a post. */
export function VideoSchema({
  name,
  description,
  videoId,
  thumbnail,
  uploadDate,
}: {
  name: string;
  description: string;
  videoId: string;
  thumbnail: string;
  uploadDate?: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name,
        description,
        thumbnailUrl: `${SITE}${thumbnail}`,
        embedUrl: `https://galleries.vidflow.co/videos/${videoId}`,
        ...(uploadDate ? { uploadDate } : {}),
        publisher: { "@id": `${SITE}/#business` },
      }}
    />
  );
}

export function LocalBusinessSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://www.houseoftattersall.com/#business",
        name: "House of Tattersall",
        description:
          "Luxury cinematic wedding videographer based on the Staffordshire and Derbyshire border, filming weddings throughout Derbyshire, Staffordshire and Nottinghamshire, and UK-wide.",
        url: "https://www.houseoftattersall.com/",
        email: "info@houseoftattersall.com",
        image: "https://www.houseoftattersall.com/images/banner-films.jpg",
        founder: { "@type": "Person", name: "Andy Tattersall" },
        foundingDate: "2022",
        priceRange: "££££",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Denstone",
          addressRegion: "Staffordshire",
          addressCountry: "GB",
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Staffordshire" },
          { "@type": "AdministrativeArea", name: "Derbyshire" },
          { "@type": "AdministrativeArea", name: "Nottinghamshire" },
          { "@type": "AdministrativeArea", name: "Leicestershire" },
          { "@type": "AdministrativeArea", name: "Peak District" },
          { "@type": "Country", name: "United Kingdom" },
        ],
        knowsAbout: [
          "Luxury wedding videography",
          "Cinematic wedding videography",
          "Documentary wedding films",
          "Barn wedding videography",
          "Multicultural wedding films",
          "Destination wedding videography",
        ],
        sameAs: ["https://www.instagram.com/houseoftattersallfilms"],
        makesOffer: {
          "@type": "Offer",
          name: "Wedding film core package",
          description:
            "Pre-wedding consultation, 10 hours of full-day coverage, 7-9 minute cinematic feature film, landscape film trailer, drone footage, 6-12 week turnaround.",
          priceCurrency: "GBP",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: 2000,
            maxPrice: 2700,
            priceCurrency: "GBP",
          },
        },
        award: [
          "The Wedding Industry Awards 2026 Finalist & Highly Commended",
          "I Do Wedding Awards 2026 Finalist",
          "The Wedding Industry Awards 2025 Regional Winner / UK Top 10",
          "The Wedding Industry Awards 2024 Finalist",
        ],
      }}
    />
  );
}

/** Service page markup for the county landing pages. */
export function ServiceAreaSchema({
  county,
  url,
  venues,
}: {
  county: string;
  url: string;
  venues: string[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: `Wedding videography in ${county}`,
        provider: { "@id": "https://www.houseoftattersall.com/#business" },
        areaServed: { "@type": "AdministrativeArea", name: county },
        url,
        offers: {
          "@type": "Offer",
          priceCurrency: "GBP",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: 2000,
            maxPrice: 2700,
            priceCurrency: "GBP",
          },
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${county} wedding venues filmed at`,
          itemListElement: venues.map((v) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Place", name: v },
          })),
        },
      }}
    />
  );
}
