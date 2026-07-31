import Image from "next/image";

import SmartLink from "@/components/SmartLink";
import worshipLeader from "@/assets/worship-leader.webp";
import { latestMessage } from "@/lib/content";

export default function LatestMessage() {
  return (
    <section className="message" id="message" aria-label="Latest message">
      <div className="message-image">
        <Image
          src={worshipLeader}
          alt="Worship leader singing during a service at The River Church"
          fill
          sizes="(max-width: 860px) 100vw, 55vw"
          placeholder="blur"
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
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
          <SmartLink className="btn btn-blue" href={latestMessage.primaryCta.href}>
            {latestMessage.primaryCta.label}
          </SmartLink>
          <SmartLink className="btn btn-outline" href={latestMessage.secondaryCta.href}>
            {latestMessage.secondaryCta.label}
          </SmartLink>
        </div>
      </div>
    </section>
  );
}
