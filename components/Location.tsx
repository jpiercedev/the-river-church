import { location } from "@/lib/content";
import { site } from "@/lib/site";

export default function Location() {
  return (
    <section className="location" id="location">
      <a
        className="map"
        href={site.links.map}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${site.name} on Google Maps`}
      >
        <span className="pin" aria-hidden="true" />
      </a>
      <div className="location-copy">
        <p className="eyebrow" style={{ color: "var(--blue)" }}>
          {location.eyebrow}
        </p>
        <h2>{location.heading}</h2>
        <p>{location.body}</p>
        <p className="address">
          {site.address.street}
          <br />
          {site.address.locality}, {site.address.region} {site.address.postalCode}
          <br />
          <br />
          {site.service.label}
        </p>
        <a
          className="btn btn-blue"
          href={site.links.directions}
          target="_blank"
          rel="noopener noreferrer"
        >
          {location.cta.label}
        </a>
      </div>
    </section>
  );
}
