import Image from "next/image";
import Link from "next/link";

import worshipGathering from "@/assets/worship-gathering.webp";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section className="hero" aria-label="Welcome">
      <Image
        className="hero-bg"
        src={worshipGathering}
        alt=""
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        style={{ objectFit: "cover", objectPosition: "center 40%" }}
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1>
          {hero.titleLine1}
          <br />
          {hero.titleLine2}
        </h1>
        <p>{hero.body}</p>
        <Link className="btn btn-white" href={hero.primaryCta.href}>
          {hero.primaryCta.label}
        </Link>
        <Link className="btn btn-outline" href={hero.secondaryCta.href}>
          {hero.secondaryCta.label}
        </Link>
      </div>
    </section>
  );
}
