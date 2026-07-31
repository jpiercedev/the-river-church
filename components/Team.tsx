import Image from "next/image";
import Link from "next/link";

import { team } from "@/lib/content";

export default function Team() {
  return (
    <section className="team" id="team">
      <p className="eyebrow" style={{ color: "var(--blue)" }}>
        {team.eyebrow}
      </p>
      <h2>{team.heading}</h2>
      <div className="team-grid">
        {team.members.map((member) => (
          <div className="person" key={member.name}>
            {member.image ? (
              <div className="person-media">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  fill
                  sizes="(max-width: 364px) calc(100vw - 44px), (max-width: 520px) 320px, (max-width: 860px) 50vw, 220px"
                  placeholder="blur"
                  // Without this the blur placeholder paints at 50% 50% while
                  // the loaded photo is anchored top, so faces jump on load.
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
            ) : (
              <div className="person-placeholder" aria-hidden="true">
                {member.initials}
              </div>
            )}
            <div className="person-copy">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="team-more">
        <Link className="btn btn-blue" href={team.cta.href}>
          {team.cta.label}
        </Link>
      </div>
    </section>
  );
}
