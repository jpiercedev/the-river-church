import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import SmartLink from "@/components/SmartLink";
import { events, getEventBySlug } from "@/lib/content";
import { site } from "@/lib/site";

type EventPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return events.items.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) return {};

  return {
    title: event.title,
    description: `${event.date} at ${event.venue}. ${event.body}`,
    alternates: { canonical: `/events/${event.slug}` },
    openGraph: {
      title: `${event.title} | ${site.name}`,
      description: `${event.date} at ${event.venue}`,
      url: `/events/${event.slug}`,
      images: [{ url: event.image.src, alt: event.imageAlt }],
    },
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) notFound();

  return (
    <>
      <section className="event-page-hero">
        <div className="event-page-hero-media">
          <Image src={event.image} alt={event.imageAlt} fill priority sizes="(max-width: 860px) 100vw, 50vw" />
        </div>
        <div className="event-page-hero-copy">
          <p className="eyebrow">Upcoming Event</p>
          <p className="event-page-date">{event.date}</p>
          <h1>{event.title}</h1>
          <p>{event.body}</p>
          {event.registration && (
            <SmartLink className="btn btn-blue event-page-register" href={event.registration.href}>
              {event.registration.label}
              <span className="visually-hidden"> for {event.title} (opens in a new tab)</span>
            </SmartLink>
          )}
        </div>
      </section>

      <section className="event-page-details">
        <div className="event-page-main">
          {event.speakers && <p className="event-page-lede">{event.speakers}</p>}
          {event.bio && (
            <div className="event-page-section">
              <p className="eyebrow">Gather Together</p>
              <h2>{event.bio.heading}</h2>
              <p>{event.bio.body}</p>
            </div>
          )}

          {event.schedule && (
            <div className="event-page-section event-schedule">
              <p className="eyebrow">Conference Itinerary</p>
              <h2>Weekend Schedule</h2>
              <div className="schedule-days">
                {event.schedule.map((scheduleDay) => (
                  <section className="schedule-day" key={scheduleDay.day}>
                    <header>
                      <p>{scheduleDay.day}</p>
                      <h3>{scheduleDay.date}</h3>
                      {scheduleDay.note && <span>{scheduleDay.note}</span>}
                    </header>
                    <ol>
                      {scheduleDay.items.map((item) => (
                        <li key={`${scheduleDay.day}-${item.time}-${item.title}`}>
                          <time>{item.time}</time>
                          <div>
                            <strong>{item.title}</strong>
                            {item.detail && <span>{item.detail}</span>}
                          </div>
                        </li>
                      ))}
                    </ol>
                  </section>
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="event-page-aside">
          <p className="eyebrow">Join Us</p>
          <h2>Event Details</h2>
          <dl>
            <div><dt>When</dt><dd>{event.date}</dd></div>
            <div><dt>Where</dt><dd><strong>{event.venue}</strong><br />{event.address}</dd></div>
            {event.details && <div><dt>Good to Know</dt><dd>{event.details}</dd></div>}
          </dl>
          {event.registration && <SmartLink className="btn btn-blue" href={event.registration.href}>{event.registration.label}</SmartLink>}
        </aside>
      </section>
    </>
  );
}
