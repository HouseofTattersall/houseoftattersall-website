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
            "Pre-wedding consultation, 10 hours of full-day coverage, 7-9 minute cinematic feature film, landscape film trailer, drone footage, 6-12 week turnaround. Delivered through Vidflow with 10 years of access.",
          priceCurrency: "GBP",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: 2100,
            maxPrice: 2750,
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

/**
 * Client testimonials, marked up as reviews.
 *
 * Deliberately carries no star ratings: the testimonials are written quotes,
 * not scored reviews, and inventing a rating would be a fabrication. Note that
 * Google does not show rich-result stars for reviews a business hosts about
 * itself, so the value here is that AI assistants can identify and quote them.
 */
export function ReviewSchema({
  items,
}: {
  items: { names: string; venue: string; quote: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Client testimonials for House of Tattersall",
        numberOfItems: items.length,
        itemListElement: items.map((t, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Review",
            author: { "@type": "Person", name: t.names },
            reviewBody: t.quote,
            itemReviewed: {
              "@type": "LocalBusiness",
              "@id": `${SITE}/#business`,
              name: "House of Tattersall",
            },
            locationCreated: { "@type": "Place", name: t.venue },
          },
        })),
      }}
    />
  );
}

/** Site-level markup, rendered once in the root layout. */
export function WebSiteSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        url: `${SITE}/`,
        name: "House of Tattersall",
        description:
          "Luxury cinematic wedding videography across Derbyshire, Staffordshire and Nottinghamshire.",
        publisher: { "@id": `${SITE}/#business` },
        inLanguage: "en-GB",
      }}
    />
  );
}

/** Trail markup, so search engines show a path rather than a bare URL. */
export function BreadcrumbSchema({
  trail,
}: {
  /** Ordered, excluding Home, which is added automatically */
  trail: { name: string; path: string }[];
}) {
  const items = [{ name: "Home", path: "/" }, ...trail];
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: `${SITE}${item.path}`,
        })),
      }}
    />
  );
}

/** Andy himself, so he can be recognised as an entity rather than only the business. */
export function PersonSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${SITE}/#andy`,
        name: "Andy Tattersall",
        jobTitle: "Wedding Videographer",
        description:
          "Award-winning luxury wedding videographer, filming a deliberately limited number of weddings each year across Derbyshire, Staffordshire and Nottinghamshire. Professional filming since November 2014, weddings since 2022.",
        url: `${SITE}/about/`,
        image: `${SITE}/images/house-of-tattersall-andy.jpg`,
        worksFor: { "@id": `${SITE}/#business` },
        homeLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Denstone",
            addressRegion: "Staffordshire",
            addressCountry: "GB",
          },
        },
        knowsAbout: [
          "Wedding videography",
          "Cinematic wedding films",
          "Documentary filmmaking",
          "Wedding audio recording",
          "Drone cinematography",
        ],
        sameAs: ["https://www.instagram.com/houseoftattersallfilms"],
      }}
    />
  );
}

/** A portfolio of films, as a list search engines can read. */
export function FilmListSchema({
  films,
}: {
  films: { couple: string; venue: string; videoId: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Wedding films by House of Tattersall",
        numberOfItems: films.length,
        itemListElement: films.map((film, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "VideoObject",
            name: `${film.couple}, ${film.venue.split(" | ")[0]}`,
            description: `A cinematic wedding film by House of Tattersall for ${film.couple}, filmed at ${film.venue.split(" | ")[0]}.`,
            thumbnailUrl: `${SITE}/images/banner-films.jpg`,
            embedUrl: `https://galleries.vidflow.co/videos/${film.videoId}`,
            publisher: { "@id": `${SITE}/#business` },
          },
        })),
      }}
    />
  );
}

/** Packages and pricing, for the Investment page. */
export function PackagesSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Luxury cinematic wedding videography",
        provider: { "@id": `${SITE}/#business` },
        url: `${SITE}/investment/`,
        areaServed: [
          { "@type": "AdministrativeArea", name: "Derbyshire" },
          { "@type": "AdministrativeArea", name: "Staffordshire" },
          { "@type": "AdministrativeArea", name: "Nottinghamshire" },
          { "@type": "Country", name: "United Kingdom" },
        ],
        offers: {
          "@type": "Offer",
          name: "Wedding film core package",
          description:
            "Pre-wedding consultation, 10 hours of full-day coverage, a 7 to 9 minute cinematic feature film, a landscape film trailer, drone footage where permitted, and a 6 to 12 week turnaround. Delivered through Vidflow with 10 years of access.",
          priceCurrency: "GBP",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: 2100,
            maxPrice: 2750,
            priceCurrency: "GBP",
          },
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Packages and optional extras",
          itemListElement: [
            { name: "Core package", price: 2100 },
            {
              name: "The Complete Story package, including a second videographer",
              price: 2750,
            },
            { name: "Your ceremony in full, as a stand-alone film", price: 225 },
            { name: "Your speeches in full, as a stand-alone film", price: 225 },
            { name: "1 week anniversary short social teaser", price: 210 },
            { name: "Home movie, every usable clip in one film", price: 400 },
            {
              name: "Feature film extended to 16 to 18 minutes",
              price: 195,
            },
          ].map((o) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: o.name },
            price: o.price,
            priceCurrency: "GBP",
          })),
        },
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
            minPrice: 2100,
            maxPrice: 2750,
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
