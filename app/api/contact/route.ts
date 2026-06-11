import { NextResponse } from "next/server";

import { site } from "@/lib/site";

/** Force the Node.js runtime (Resend SDK uses Node APIs). */
export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX = { name: 120, email: 200, phone: 40, message: 4000 };

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  company?: string; // honeypot
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: a filled "company" field means a bot. Pretend success silently.
  if (body.company && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? "").trim().slice(0, MAX.name);
  const email = (body.email ?? "").trim().slice(0, MAX.email);
  const phone = (body.phone ?? "").trim().slice(0, MAX.phone);
  const message = (body.message ?? "").trim().slice(0, MAX.message);

  if (!name) return NextResponse.json({ error: "Please provide your name." }, { status: 400 });
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_FORM_TO;
  const from = process.env.CONTACT_FORM_FROM;

  // Without credentials we cannot send. Report a clear, non-leaking error and
  // log server-side so the submission is recoverable during setup.
  if (!apiKey || !to || !from) {
    console.error(
      "[contact] Missing email env vars — set RESEND_API_KEY, CONTACT_FORM_TO, CONTACT_FORM_FROM.",
      { name, email, phone, message },
    );
    return NextResponse.json(
      { error: "Our contact form is not fully configured yet. Please email or call us directly." },
      { status: 503 },
    );
  }

  const subject = `Plan Your Visit — ${name}`;
  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : "Phone: (not provided)",
    "",
    "Message:",
    message || "(no message)",
  ];
  const text = lines.join("\n");
  const html = `
    <h2 style="font-family:Arial,sans-serif;color:#071d35;">New "Plan Your Visit" submission</h2>
    <table style="font-family:Arial,sans-serif;font-size:14px;color:#10243a;border-collapse:collapse;">
      <tr><td style="padding:4px 12px 4px 0;"><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;"><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;"><strong>Phone</strong></td><td>${phone ? escapeHtml(phone) : "(not provided)"}</td></tr>
    </table>
    <p style="font-family:Arial,sans-serif;font-size:14px;color:#10243a;white-space:pre-wrap;">
      ${message ? escapeHtml(message) : "(no message)"}
    </p>
    <p style="font-family:Arial,sans-serif;font-size:12px;color:#6d7986;">Sent from ${site.name} website.</p>
  `;

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      text,
      html,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: "We couldn't send your message right now. Please try again shortly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "We couldn't send your message right now. Please try again shortly." },
      { status: 500 },
    );
  }
}
