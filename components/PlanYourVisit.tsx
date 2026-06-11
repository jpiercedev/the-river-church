import { planYourVisit } from "@/lib/content";
import ContactForm from "@/components/ContactForm";

export default function PlanYourVisit() {
  return (
    <section className="visit" id="visit" aria-labelledby="visit-heading">
      <p className="eyebrow">{planYourVisit.eyebrow}</p>
      <h2 id="visit-heading">{planYourVisit.heading}</h2>
      <p>{planYourVisit.body}</p>
      <ContactForm />
    </section>
  );
}
