import Link from "next/link";

import { intro } from "@/lib/content";

const accentClass = {
  teal: "",
  blue: "accent-blue",
  gold: "accent-gold",
} as const;

export default function MissionIntro() {
  return (
    <section className="intro" id="mission">
      <p className="eyebrow" style={{ color: "var(--blue)" }}>
        {intro.eyebrow}
      </p>
      <h2>{intro.heading}</h2>
      <p>{intro.body}</p>
      <Link className="btn btn-blue" href={intro.cta.href}>
        {intro.cta.label}
      </Link>

      <div className="cards">
        {intro.cards.map((card) => (
          <div key={card.title} className={`card ${accentClass[card.accent]}`.trim()}>
            <h3>{card.title.toUpperCase()}</h3>
            <p>{card.body}</p>
            <Link className="text-link" href={card.link.href}>
              {card.link.label} &rarr;
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
