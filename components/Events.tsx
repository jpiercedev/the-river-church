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

      <div className="events-grid">
        {events.items.map((event) => (
          <article className="event-card" key={event.title}>
            <div className="event-media" style={{ aspectRatio: `${event.image.width} / ${event.image.height}` }}>
              <Image
                src={event.image}
                alt={event.imageAlt}
                fill
                sizes="(max-width: 860px) 100vw, (max-width: 1220px) 50vw, 527px"
                placeholder="blur"
              />
            </div>
            <div className="event-copy">
              <p className="event-date">{event.date}</p>
              <h3>{event.title}</h3>
              <p>{event.body}</p>
              {event.speakers && <p>{event.speakers}</p>}
              {event.details && <p className="event-details">{event.details}</p>}
              {event.bio && (
                <div className="event-bio">
                  <h4>{event.bio.heading}</h4>
                  <p>{event.bio.body}</p>
                </div>
              )}
              {event.expectations && (
                <div className="event-expectations">
                  <h4>What Men Can Expect</h4>
                  <dl>
                    {event.expectations.map((expectation) => (
                      <div key={expectation.title}>
                        <dt>{expectation.title}</dt>
                        <dd>{expectation.body}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
              <p className="event-venue">
                <b>{event.venue}</b>
                <br />
                {event.address}
              </p>
              {event.registration && (
                <SmartLink className="btn btn-blue event-register" href={event.registration.href}>
                  {event.registration.label}
                  <span className="visually-hidden"> for {event.title} (opens in a new tab)</span>
                </SmartLink>
              )}
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
