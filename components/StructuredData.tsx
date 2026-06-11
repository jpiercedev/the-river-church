import { site } from "@/lib/site";

/**
 * Site-wide JSON-LD: a Church (a LocalBusiness / PlaceOfWorship subtype) and a
 * WebSite node, linked via @id. Rendered once in the root layout.
 */
export default function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Church",
        "@id": `${site.url}/#church`,
        name: site.name,
        legalName: site.legalName,
        description: site.description,
        url: site.url,
        telephone: site.phone,
        email: site.email,
        logo: `${site.url}/logo.jpg`,
        image: `${site.url}/og.jpg`,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.locality,
          addressRegion: site.address.region,
          postalCode: site.address.postalCode,
          addressCountry: site.address.country,
        },
        hasMap: site.links.map,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "https://schema.org/Sunday",
            opens: "10:00",
            closes: "12:00",
          },
        ],
        event: {
          "@type": "Event",
          name: "Sunday Worship Service",
          eventSchedule: {
            "@type": "Schedule",
            byDay: "https://schema.org/Sunday",
            startTime: "10:00",
            repeatFrequency: "P1W",
          },
          location: {
            "@type": "Place",
            name: site.name,
            address: {
              "@type": "PostalAddress",
              streetAddress: site.address.street,
              addressLocality: site.address.locality,
              addressRegion: site.address.region,
              postalCode: site.address.postalCode,
              addressCountry: site.address.country,
            },
          },
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        name: site.name,
        url: site.url,
        inLanguage: "en-US",
        publisher: { "@id": `${site.url}/#church` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD is trusted, server-generated data — safe to inline.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
