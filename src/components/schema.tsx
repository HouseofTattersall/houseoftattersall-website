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

export function LocalBusinessSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://www.houseoftattersall.com/#business",
        name: "House of Tattersall",
        description:
          "Cinematic wedding videographer based on the Staffordshire and Derbyshire border, filming weddings throughout Staffordshire, Derbyshire and Nottinghamshire, and UK-wide.",
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
            minPrice: 2300,
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
            minPrice: 2300,
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
