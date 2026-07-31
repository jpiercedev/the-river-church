import Image from "next/image";

import welcomeSign from "@/assets/welcome-sign.webp";
import { planYourVisit } from "@/lib/content";
import ContactForm from "@/components/ContactForm";

export default function PlanYourVisit() {
  return (
    <section className="visit" id="visit" aria-labelledby="visit-heading">
      <div className="visit-grid">
        <div className="visit-photo">
          <Image
            src={welcomeSign}
            alt="A member of The River Church welcoming visitors outside the building"
            fill
            sizes="(max-width: 860px) 100vw, 40vw"
            placeholder="blur"
          />
        </div>

        <div className="visit-copy">
          <p className="eyebrow">{planYourVisit.eyebrow}</p>
          <h2 id="visit-heading">{planYourVisit.heading}</h2>
          <p>{planYourVisit.body}</p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
