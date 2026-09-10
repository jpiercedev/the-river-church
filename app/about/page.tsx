import type { Metadata } from "next";
import Link from "next/link";

import TeamBios from "@/components/TeamBios";
import { aboutHero, coreValues, statementOfFaith } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the leaders of The River Church in Wisconsin Rapids, WI, and explore our core values and statement of faith. Discover what we believe about Jesus, salvation, and the Holy Spirit.",
  alternates: { canonical: "/about" },
  twitter: {
    card: "summary_large_image",
    title: `About Us | ${site.name}`,
    description: "Meet our leaders and explore the core values and statement of faith of The River Church in Wisconsin Rapids, WI.",
    images: ["/og.jpg"],
  },
  openGraph: {
    title: `About Us | ${site.name}`,
    description:
      "Meet our leaders and explore our core values and statement of faith at The River Church in Wisconsin Rapids, WI.",
    url: `${site.url}/about`,
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: `${site.name}` }],
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="about-heading">
        <div className="inner">
          <p className="eyebrow">{aboutHero.eyebrow}</p>
          <h1 id="about-heading">{aboutHero.heading}</h1>
          <p>{aboutHero.body}</p>
        </div>
      </section>

      <TeamBios />

      <section className="values" id="values" aria-labelledby="values-heading">
        <p className="eyebrow" style={{ color: "var(--blue)" }}>
          {coreValues.eyebrow}
        </p>
        <h2 id="values-heading">{coreValues.heading}</h2>
        <p className="section-intro">{coreValues.intro}</p>
        <div className="values-grid">
          {coreValues.values.map((value) => (
            <article className="value-card" key={value.title}>
              <h3>
                {value.title} <span>{value.lead}</span>
              </h3>
              <p>{value.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="beliefs" id="beliefs" aria-labelledby="beliefs-heading">
        <p className="eyebrow" style={{ color: "var(--blue)" }}>
          {statementOfFaith.eyebrow}
        </p>
        <h2 id="beliefs-heading">{statementOfFaith.heading}</h2>
        <p className="section-intro">{statementOfFaith.intro}</p>
        <div className="beliefs-grid">
          {statementOfFaith.beliefs.map((belief) => (
            <article className="belief" key={belief.title}>
              <h3>{belief.title}</h3>
              <p>{belief.body}</p>
              <p className="refs">{belief.refs}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <p className="eyebrow" style={{ color: "var(--blue)" }}>
          You Belong Here
        </p>
        <h2 style={{ color: "var(--navy)", margin: "13px 0 24px" }}>Come Visit Us This Sunday</h2>
        <Link className="btn btn-blue" href="/#visit">
          Plan Your Visit
        </Link>
        <Link className="btn btn-outline" href="/#team" style={{ color: "var(--navy)", borderColor: "var(--navy)" }}>
          Meet Our Team
        </Link>
      </section>
    </>
  );
}
