import Image from "next/image";

import SmartLink from "@/components/SmartLink";
import { events } from "@/lib/content";

export default function Events() {
  return (
    <section className="events" id="events">
      <p className="eyebrow" style={{ color: "var(--blue)" }}>
        {events.eyebrow}
      </p>
      <h2>{events.heading}</h2>

      <div className={`events-grid${events.items.length === 1 ? " events-grid-single" : ""}`}>
        {events.items.map((event) => (
          <article className="event-card" key={event.title}>
            <div className="event-media" style={{ aspectRatio: `${event.image.width} / ${event.image.height}` }}>
              <Image
                src={event.image}
                alt={event.imageAlt}
                fill
                sizes="(max-width: 860px) 100vw, 1080px"
                placeholder="blur"
              />
            </div>
            <div className="event-copy">
              <p className="event-date">{event.date}</p>
              <h3>{event.title}</h3>
              <p>{event.body}</p>
              {event.details && <p className="event-details">{event.details}</p>}
              {event.bio && (
                <div className="event-bio">
                  <h4>{event.bio.heading}</h4>
                  <p>{event.bio.body}</p>
                </div>
              )}
              <p className="event-venue">
                <b>{event.venue}</b>
                <br />
                {event.address}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="events-more">
        <SmartLink className="btn btn-blue" href={events.cta.href}>
          {events.cta.label}
        </SmartLink>
      </div>
    </section>
  );
}
