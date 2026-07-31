import Image from "next/image";

import SmartLink from "@/components/SmartLink";
import fathersDay from "@/assets/fathers-day.png";
import { featuredEvent } from "@/lib/content";

export default function Events() {
  return (
    <section className="events" id="events">
      <p className="eyebrow" style={{ color: "var(--blue)" }}>
        {featuredEvent.eyebrow}
      </p>
      <h2>{featuredEvent.heading}</h2>
      <div className="event-feature">
        <div className="event-media">
          <Image
            src={fathersDay}
            alt={featuredEvent.imageAlt}
            fill
            sizes="(max-width: 860px) 100vw, 60vw"
            placeholder="blur"
          />
        </div>
        <div className="event-copy">
          <p className="event-date">{featuredEvent.date}</p>
          <h3>{featuredEvent.title}</h3>
          <p>{featuredEvent.body}</p>
          <div>
            <SmartLink className="btn btn-blue" href={featuredEvent.cta.href}>
              {featuredEvent.cta.label}
            </SmartLink>
          </div>
        </div>
      </div>
    </section>
  );
}
