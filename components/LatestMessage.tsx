import Image from "next/image";
import Link from "next/link";

import worshipCenter from "@/assets/worship-center.jpg";
import { latestMessage } from "@/lib/content";

export default function LatestMessage() {
  return (
    <section className="message" id="message" aria-label="Latest message">
      <div className="message-image">
        <Image
          src={worshipCenter}
          alt="The River Church worship gathering"
          fill
          sizes="(max-width: 860px) 100vw, 55vw"
          placeholder="blur"
          style={{ objectFit: "cover", objectPosition: "center 44%" }}
        />
      </div>
      <div className="message-copy">
        <p className="eyebrow" style={{ color: "#7fcbd4" }}>
          {latestMessage.eyebrow}
        </p>
        <h2>
          {latestMessage.titleLine1}
          <br />
          {latestMessage.titleLine2}
        </h2>
        <p className="message-meta">{latestMessage.meta}</p>
        <p>{latestMessage.body}</p>
        <div>
          <Link className="btn btn-blue" href={latestMessage.primaryCta.href}>
            {latestMessage.primaryCta.label}
          </Link>
          <Link className="btn btn-outline" href={latestMessage.secondaryCta.href}>
            {latestMessage.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
