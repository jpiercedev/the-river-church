"use client";

import { useId, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";
type Errors = Partial<Record<"name" | "email" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [serverMessage, setServerMessage] = useState<string>("");
  const baseId = useId();

  function validate(form: HTMLFormElement): Errors {
    const next: Errors = {};
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value.trim();
    if (!name) next.name = "Please enter your name.";
    if (!email) next.email = "Please enter your email address.";
    else if (!EMAIL_RE.test(email)) next.email = "Please enter a valid email address.";
    return next;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");
    setServerMessage("");

    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      message: String(data.get("message") ?? ""),
      company: String(data.get("company") ?? ""), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        return;
      }

      const body = (await res.json().catch(() => null)) as { error?: string } | null;
      setServerMessage(
        body?.error ?? "Something went wrong sending your message. Please try again.",
      );
      setStatus("error");
    } catch {
      setServerMessage(
        "We could not reach the server. Please check your connection and try again.",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-status" data-tone="success" role="status">
        <strong>Thank you!</strong> Your message has been sent. Someone from The River
        Church will be in touch with you soon.
      </div>
    );
  }

  const nameErrId = `${baseId}-name-err`;
  const emailErrId = `${baseId}-email-err`;

  return (
    <form className="visit-form" onSubmit={handleSubmit} noValidate>
      {status === "error" && (
        <p className="form-status" data-tone="error" role="alert">
          {serverMessage}
        </p>
      )}

      {/* Honeypot: hidden from humans, tempting to bots. */}
      <div className="hp-field" aria-hidden="true">
        <label htmlFor={`${baseId}-company`}>Company</label>
        <input
          id={`${baseId}-company`}
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor={`${baseId}-name`}>Name *</label>
          <input
            id={`${baseId}-name`}
            type="text"
            name="name"
            autoComplete="name"
            required
            aria-required="true"
            aria-invalid={errors.name ? "true" : undefined}
            aria-describedby={errors.name ? nameErrId : undefined}
          />
          {errors.name && (
            <span className="field-error" id={nameErrId}>
              {errors.name}
            </span>
          )}
        </div>
        <div className="field">
          <label htmlFor={`${baseId}-email`}>Email *</label>
          <input
            id={`${baseId}-email`}
            type="email"
            name="email"
            autoComplete="email"
            required
            aria-required="true"
            aria-invalid={errors.email ? "true" : undefined}
            aria-describedby={errors.email ? emailErrId : undefined}
          />
          {errors.email && (
            <span className="field-error" id={emailErrId}>
              {errors.email}
            </span>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor={`${baseId}-phone`}>Phone (optional)</label>
        <input
          id={`${baseId}-phone`}
          type="tel"
          name="phone"
          autoComplete="tel"
          inputMode="tel"
        />
      </div>

      <div className="field">
        <label htmlFor={`${baseId}-message`}>Message (optional)</label>
        <textarea
          id={`${baseId}-message`}
          name="message"
          rows={5}
          placeholder="Let us know how we can help, or share a prayer request."
        />
      </div>

      <div className="form-actions">
        <button className="btn btn-blue" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send Message"}
        </button>
      </div>
    </form>
  );
}
