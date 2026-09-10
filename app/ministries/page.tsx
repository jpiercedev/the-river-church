import type { Metadata } from "next";
import Link from "next/link";

import { ministries } from "@/lib/ministries";
import { site } from "@/lib/site";
import styles from "./ministries.module.css";

const description =
  "Explore men’s, women’s, youth, children’s, outreach, and worship ministries at The River Church in Wisconsin Rapids, WI.";

export const metadata: Metadata = {
  title: "Ministries",
  description,
  alternates: { canonical: "/ministries" },
  openGraph: {
    title: `Ministries | ${site.name}`,
    description,
    url: `${site.url}/ministries`,
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Ministries | ${site.name}`,
    description,
    images: ["/og.jpg"],
  },
};

export default function MinistriesPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="ministries-heading">
        <div className="inner">
          <p className="eyebrow">Life at The River</p>
          <h1 id="ministries-heading">Our Ministries</h1>
          <p>
            Explore the ministries of The River Church and discover opportunities
            to grow in Christ, build relationships, and serve others.
          </p>
        </div>
      </section>

      <nav className={styles.directory} aria-label="Explore our ministries">
        <ul>
          {ministries.map((ministry) => (
            <li key={ministry.id}>
              <a href={`#${ministry.id}`}>
                {ministry.shortTitle}
                <span aria-hidden="true">↓</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        {ministries.map((ministry) => (
          <section
            className={styles.ministry}
            key={ministry.id}
            id={ministry.id}
            aria-labelledby={`${ministry.id}-heading`}
          >
            <div className={styles.inner}>
              <div className={styles.heading}>
                <h2 id={`${ministry.id}-heading`}>{ministry.title}</h2>
              </div>
              <div className={styles.content}>
                <figure className={styles.scripture}>
                  <blockquote>
                    <p>“{ministry.scripture.quote}”</p>
                  </blockquote>
                  <figcaption>— {ministry.scripture.reference}</figcaption>
                </figure>
                {ministry.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className={styles.connect} aria-labelledby="connect-heading">
        <p className="eyebrow">Take Your Next Step</p>
        <h2 id="connect-heading">Get Connected</h2>
        <p className={styles.connectCopy}>
          To learn more about a ministry or how to get involved, contact The River
          Church. We would love to hear from you.
        </p>
        <div className={styles.actions}>
          <a className="btn btn-blue" href={`mailto:${site.email}`}>
            Contact Us
          </a>
          <Link className={`btn btn-outline ${styles.visitLink}`} href="/#visit">
            Plan Your Visit
          </Link>
        </div>
      </section>
    </>
  );
}
