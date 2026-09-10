import Image from "next/image";

import { teamBios } from "@/lib/team-bios";
import styles from "./TeamBios.module.css";

export default function TeamBios() {
  return (
    <section
      className={styles.leadership}
      id="leadership"
      aria-labelledby="leadership-heading"
    >
      <p className={`eyebrow ${styles.eyebrow}`}>The People Who Serve</p>
      <h2 id="leadership-heading" className={styles.heading}>
        Meet Our Leaders
      </h2>
      <div className={styles.bios}>
        {teamBios.map((member) => (
          <article
            className={styles.bio}
            key={member.id}
            aria-labelledby={`${member.id}-heading`}
          >
            <Image
              className={styles.portrait}
              src={member.image}
              alt={`${member.name}, ${member.role}`}
              sizes="(max-width: 323px) calc(100vw - 44px), (max-width: 680px) 280px, 260px"
              placeholder="blur"
            />
            <div className={styles.copy}>
              <h3 id={`${member.id}-heading`}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
              {member.paragraphs.map((paragraph) => (
                <p className={styles.paragraph} key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
