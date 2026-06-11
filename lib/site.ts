/**
 * Central site configuration — the single source of truth for the church's
 * name, contact details (NAP), service times, and outbound links.
 * Edit values here; they flow into metadata, JSON-LD, the header and footer.
 */

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");
  // On Vercel this is provided automatically for production builds.
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

const street = "4811 Plover Road";
const cityStateZip = "Wisconsin Rapids, WI 54494";

export const site = {
  name: "The River Church",
  shortName: "The River",
  legalName: "The River Church Inc.",
  tagline: "Igniting Fire, Faith and Freedom!",
  description:
    "A welcoming church family in Wisconsin Rapids, WI where people encounter God, grow in faith, and discover freedom in Christ. Join us for worship every Sunday at 10:00 AM.",
  url: resolveSiteUrl(),
  locale: "en_US",

  // Name / Address / Phone (NAP) — keep consistent everywhere for local SEO.
  address: {
    street,
    locality: "Wisconsin Rapids",
    region: "WI",
    postalCode: "54494",
    country: "US",
    full: `${street}, ${cityStateZip}`,
  },
  phone: "+1-715-257-0261",
  phoneDisplay: "715-257-0261",
  email: "office@theriverchurchinc.com",

  service: {
    day: "Sunday",
    time: "10:00 AM",
    label: "Sunday Service · 10:00 AM",
  },

  // External / utility links. Placeholders point to in-page sections or maps
  // until the church supplies real giving / streaming / social URLs.
  links: {
    directions: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      `${street}, ${cityStateZip}`,
    )}`,
    map: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `The River Church, ${street}, ${cityStateZip}`,
    )}`,
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    youtube: "https://www.youtube.com/",
  },
} as const;

export type Site = typeof site;
