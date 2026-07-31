import Image from "next/image";

import { gallery } from "@/lib/content";

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <p className="eyebrow" style={{ color: "#7fcbd4" }}>
        {gallery.eyebrow}
      </p>
      <h2>{gallery.heading}</h2>
      <p className="gallery-intro">{gallery.body}</p>

      <div className="gallery-grid">
        {gallery.photos.map((photo) => (
          <figure
            key={photo.caption}
            className={photo.image.width > photo.image.height ? "shot shot--wide" : "shot"}
          >
            <Image
              src={photo.image}
              alt={photo.alt}
              fill
              sizes="(max-width: 860px) 100vw, 33vw"
              placeholder="blur"
              style={{ objectFit: "cover", objectPosition: photo.focus }}
            />
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
