/**
 * Site content — all editable marketing copy lives here so the church can
 * update text without touching component code. Centralizing strings also
 * keeps JSX free of unescaped typographic characters.
 */
import type { StaticImageData } from "next/image";

import { site } from "@/lib/site";
import kevinBishop from "@/assets/kevin-bishop.jpg";
import sharonBishop from "@/assets/sharon-bishop.webp";
import jacobAnderson from "@/assets/jacob-anderson.jpg";
import amandaRoberson from "@/assets/amanda-roberson.jpg";
import erleneJackson from "@/assets/erlene-jackson.jpg";
import debraFiegen from "@/assets/debra-fiegen.webp";
import baptism from "@/assets/baptism.webp";
import fellowshipCookout from "@/assets/fellowship-cookout.webp";
import ladiesNight from "@/assets/ladies-night.webp";
import heartOfGodConference from "@/assets/heart-of-god-conference.webp";
import annualPicnicBaptism from "@/assets/annual-picnic-baptism.webp";

export type NavItem = { label: string; href: string };

/** Primary navigation. Within our 2-page scope, links resolve to the
 *  About page or to in-page anchors on the homepage. */
export const navItems: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/#team" },
  { label: "Messages", href: "/#message" },
  { label: "Events", href: "/#events" },
  { label: "Prayer", href: "/#visit" },
];

export const giveLink: NavItem = { label: "Give", href: site.links.give };

export const dailyVerse = {
  text:
    "There is a river whose streams make glad the city of God, the holy place where the Most High dwells.",
  reference: "Psalm 46:4",
};

export const hero = {
  eyebrow: "Welcome To The River Church",
  titleLine1: "Igniting Fire,",
  titleLine2: "Faith and Freedom!",
  body:
    "A welcoming church family in Wisconsin Rapids where people encounter God, grow in faith, and discover freedom in Christ.",
  primaryCta: { label: "Plan Your Visit", href: "#visit" },
  secondaryCta: { label: "Watch A Message", href: "#message" },
};

export const intro = {
  eyebrow: "You Belong Here",
  heading: "Join Us This Sunday",
  body:
    "Whether you are exploring faith, returning to church, or looking for a place to call home, there is room for you at The River Church.",
  cta: { label: "Plan Your Visit", href: "#visit" },
  cards: [
    {
      title: "Our Mission",
      body: "Discover what we hope to accomplish as a church family.",
      link: { label: "Learn More", href: "/about" },
      accent: "teal" as const,
    },
    {
      title: "Our Beliefs",
      body: "Learn about our faith, salvation, and the hope we have in Jesus.",
      link: { label: "Learn More", href: "/about#beliefs" },
      accent: "blue" as const,
    },
    {
      title: "Give & Serve",
      body: "Partner with the work of The River through generosity and service.",
      link: { label: "Give Online", href: site.links.give },
      accent: "gold" as const,
    },
  ],
};

export const latestMessage = {
  eyebrow: "Latest Message",
  titleLine1: "Faith That Moves",
  titleLine2: "Forward",
  meta: "Pastor Kevin Bishop · Sunday Message",
  body:
    "Be encouraged by the latest message from The River Church and discover how God is calling us to live with faith, purpose, and freedom.",
  primaryCta: { label: "Watch On YouTube", href: site.links.youtube },
  secondaryCta: { label: "Watch On Facebook", href: site.links.facebookVideos },
};

export type ChurchEvent = {
  image: StaticImageData;
  imageAlt: string;
  date: string;
  title: string;
  body: string;
  venue: string;
  address: string;
};

export const events: {
  eyebrow: string;
  heading: string;
  cta: NavItem;
  items: ChurchEvent[];
} = {
  eyebrow: "What's Happening",
  heading: "Upcoming Events",
  cta: { label: "See All Events", href: site.links.facebookEvents },
  items: [
    {
      image: heartOfGodConference,
      imageAlt:
        "Heart of God Conference 2026 — Saturday, August 22 at Robinson Park, Wisconsin Rapids",
      date: "Saturday, August 22, 2026 · 12:00 Noon – 5:00 PM",
      title: "Heart of God Conference 2026",
      body:
        "The River Church and Heart-Cry Prison Ministry present a day of building bridges with God's love — music, food, community, hope, and face painting for the children.",
      venue: "Robinson Park",
      address: "1150 17th St S, Wisconsin Rapids, WI 54494",
    },
    {
      image: annualPicnicBaptism,
      imageAlt:
        "Annual Picnic and Baptism — Sunday, August 23 at Nepco Park Shelter, Wisconsin Rapids",
      date: "Sunday, August 23, 2026 · 10:00 AM",
      title: "Annual Picnic & Baptism",
      body:
        "Join us out by the lake for a powerful Sunday worship service, picnic, and baptism — a day of food, fun, and fellowship for the whole church family.",
      venue: "Nepco Park Shelter",
      address: "1410 Griffith Avenue, Wisconsin Rapids, WI 54494",
    },
  ],
};

export type TeamMember = {
  name: string;
  role: string;
  image?: StaticImageData;
  initials?: string;
};

export const team = {
  eyebrow: "Meet The People Who Serve",
  heading: "Our Team",
  cta: { label: "Meet The Full Team", href: "/about" },
  members: [
    { name: "Pastor Kevin Bishop", role: "Senior Pastor", image: kevinBishop },
    { name: "Sharon Bishop", role: "Praise & Worship Leader", image: sharonBishop },
    { name: "Jacob Anderson", role: "Youth Leader", image: jacobAnderson },
    { name: "Amanda Roberson", role: "Outreach Coordinator", image: amandaRoberson },
    { name: "Erlene Jackson", role: "Church Secretary", image: erleneJackson },
    { name: "Debbie Winkler", role: "Children's Ministry", initials: "DW" },
    { name: "Debra Fiegen", role: "Ladies Ministry", image: debraFiegen },
  ] satisfies TeamMember[],
};

export const gallery = {
  eyebrow: "Life At The River",
  heading: "Faith, Family, Freedom",
  body:
    "From the waters of baptism to Sunday cookouts on the lawn, this is what life together looks like at The River.",
  // `focus` is the CSS object-position used to crop each photo into the
  // gallery's uniform tiles, keeping the subject centered.
  photos: [
    {
      image: baptism,
      alt: "A man being baptized during an outdoor baptism service at The River Church",
      caption: "New life in Christ",
      focus: "center 52%",
    },
    {
      image: fellowshipCookout,
      alt: "Church family gathering outside for a summer cookout at The River Church",
      caption: "Fellowship on the lawn",
      focus: "center 78%",
    },
    {
      image: ladiesNight,
      alt: "A speaker addressing the congregation during Ladies Night at The River Church",
      caption: "Ladies Night",
      focus: "center 38%",
    },
  ],
};

export const location = {
  eyebrow: "Location & Services",
  heading: "Come Worship With Us",
  body:
    "We would love to welcome you to The River Church. Join us for a Sunday service and experience a community where faith comes alive.",
  cta: { label: "Get Directions" },
};

export const planYourVisit = {
  eyebrow: "We Would Love To Meet You",
  heading: "Plan Your Visit",
  body:
    "Tell us a little about yourself and we will help you plan your first visit. Have a prayer request or a question? Send it along and someone from our team will be in touch.",
};

export const footer = {
  blurb: "Igniting Fire, Faith and Freedom in Wisconsin Rapids and beyond.",
  columns: [
    {
      title: "Connect",
      links: [
        { label: "Plan Your Visit", href: "/#visit" },
        { label: "Prayer Request", href: "/#visit" },
        { label: "Events", href: "/#events" },
        { label: "Our Team", href: "/#team" },
        { label: "Give Online", href: site.links.give },
      ],
    },
    {
      title: "Explore",
      links: [
        { label: "Our Mission", href: "/about" },
        { label: "Our Beliefs", href: "/about#beliefs" },
        { label: "Core Values", href: "/about#values" },
        { label: "Watch Messages", href: site.links.youtube },
      ],
    },
  ],
};

/* ──────────────────────────  About page  ────────────────────────── */

export const aboutHero = {
  eyebrow: "About The River Church",
  heading: "Who We Are",
  body:
    "The River Church is a Spirit-filled family in Wisconsin Rapids, Wisconsin, committed to igniting fire, faith, and freedom in the lives of everyday people. We exist to help you encounter God, grow in faith, and discover the freedom found in Jesus Christ.",
};

export type CoreValue = { title: string; lead: string; body: string };

export const coreValues: { eyebrow: string; heading: string; intro: string; values: CoreValue[] } = {
  eyebrow: "What Drives Us",
  heading: "Our Core Values",
  intro:
    "These values shape who we are as a church family and guide everything we do.",
  values: [
    {
      title: "Jesus",
      lead: "is our message",
      body: "Everything we say and do points to the person and finished work of Jesus Christ.",
    },
    {
      title: "People",
      lead: "are our priority",
      body: "Every person matters to God, so every person matters to us.",
    },
    {
      title: "Faith",
      lead: "is our perspective",
      body: "We choose to see our lives and our world through the lens of faith in God.",
    },
    {
      title: "Passion",
      lead: "is our response",
      body: "We worship and serve wholeheartedly in response to God's goodness.",
    },
    {
      title: "Excellence",
      lead: "is our standard",
      body: "We honor God by giving our best in all things, with humility and care.",
    },
    {
      title: "Generosity",
      lead: "is our privilege",
      body: "We give freely of our time, talents, and resources to advance God's kingdom.",
    },
    {
      title: "Serving",
      lead: "is our calling",
      body: "We follow the example of Jesus by serving one another and our community.",
    },
  ],
};

export type Belief = { title: string; body: string; refs: string };

export const statementOfFaith: {
  eyebrow: string;
  heading: string;
  intro: string;
  beliefs: Belief[];
} = {
  eyebrow: "What We Believe",
  heading: "Statement of Faith",
  intro:
    "We hold to the historic, foundational truths of the Christian faith. The following affirmations summarize what we believe the Bible teaches.",
  beliefs: [
    {
      title: "The Trinity",
      body: "There is only one true and living God who has eternally revealed Himself as Father, Son, and Holy Spirit — one God in three Persons.",
      refs: "Deuteronomy 6:4; Isaiah 43:10–11; Matthew 28:19; Luke 3:22",
    },
    {
      title: "Jesus Christ",
      body: "We believe in the virgin birth of Jesus Christ — that He is both the Son of God and the son of man — and that He came to save humanity from the condemnation of sin by offering His blood as atonement, making salvation available to all who place their faith in Him.",
      refs: "Matthew 1:23; Luke 1:31, 35; John 3:16; 1 Corinthians 15:3; 2 Corinthians 5:21",
    },
    {
      title: "Salvation",
      body: "All people are sinful by nature and in need of redemption. Salvation is the free gift of God, received by grace through faith in Jesus Christ and not by works, so that no one may boast.",
      refs: "Romans 5:12–21; Romans 10:13–15; Ephesians 2:8–9; Titus 2:11",
    },
    {
      title: "Regeneration",
      body: "For the salvation of lost and sinful people, regeneration — the new birth — by the Holy Spirit is absolutely essential.",
      refs: "John 3:3–7; Titus 3:5–7; 2 Corinthians 5:17",
    },
    {
      title: "The Holy Spirit",
      body: "The Holy Spirit is a divine Person who shares the attributes of God and carries out the works of God, including creation, inspiration of Scripture, the giving of life, conviction of sin, and sanctification.",
      refs: "Genesis 1:2; John 16:8, 13; 1 Corinthians 2:11; 2 Peter 1:21",
    },
    {
      title: "Sanctification",
      body: "Through the indwelling and sanctifying power of the Holy Spirit, the believer is enabled to grow in holiness and live a life that honors God.",
      refs: "Romans 8:5; 1 Thessalonians 4:3; 1 John 2:29",
    },
    {
      title: "Baptism in the Holy Spirit",
      body: "The baptism in the Holy Spirit is a gift promised by God and given to believers who ask, empowering them for life and service.",
      refs: "Joel 2:28; Acts 2:4; Luke 11:13",
    },
    {
      title: "The Resurrection",
      body: "We believe in the bodily resurrection of both the saved and the lost — the saved to everlasting life with God, and those without Christ to everlasting separation from Him.",
      refs: "Acts 24:15; John 5:28–29; Revelation 22:11–12",
    },
    {
      title: "The Return of Christ",
      body: "We believe in the personal, imminent return of our Lord and Savior Jesus Christ to gather His people to Himself.",
      refs: "Acts 1:11; 1 Thessalonians 4:13–18",
    },
    {
      title: "Healing Through Christ",
      body: "The redemptive work of Christ on the cross provides healing for the human body in answer to believing prayer.",
      refs: "Isaiah 53:4–5; James 5:14–15; 1 Peter 2:24",
    },
  ],
};
