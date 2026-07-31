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
  phone: "+1-715-423-3222",
  phoneDisplay: "715-423-3222",
  email: "office@theriverchurchinc.com",

  service: {
    day: "Sunday",
    time: "10:00 AM",
    label: "Sunday Service · 10:00 AM",
  },

  // External / utility links — all church-provided or verified destinations.
  links: {
    directions: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      `${street}, ${cityStateZip}`,
    )}`,
    map: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `The River Church, ${street}, ${cityStateZip}`,
    )}`,
    facebook: "https://www.facebook.com/theriverchurchinc",
    facebookVideos: "https://www.facebook.com/theriverchurchinc/videos",
    facebookEvents: "https://www.facebook.com/theriverchurchinc/events",
    instagram: "https://instagram.com/theriverinc/",
    youtube: "https://www.youtube.com/@theriverchurchinc5721",
    // Tithe.ly giving form.
    give: "https://give.tithe.ly/?formId=a61803f7-1250-4774-9ded-64472b349759",
  },
} as const;

export type Site = typeof site;

/** True for absolute URLs that leave the site — these render as plain
 *  anchors with `target="_blank"` instead of a client-side `next/link`. */
export function isExternal(href: string): boolean {
  return /^https?:\/\//i.test(href);
}
