import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/river-church-logo.jpg";
import { footer } from "@/lib/content";
import { site } from "@/lib/site";

const socials = [
  { glyph: "f", label: "Facebook", href: site.links.facebook },
  { glyph: "◎", label: "Instagram", href: site.links.instagram },
  { glyph: "▶", label: "YouTube", href: site.links.youtube },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Link href="/" className="brand footer-brand" aria-label={`${site.name} home`}>
            <Image className="mark" src={logo} alt={`${site.name} logo`} width={52} height={52} />
            <span className="brand-copy">
              <b>THE RIVER</b>
              <small>CHURCH</small>
            </span>
          </Link>
          <p className="footer-blurb">{footer.blurb}</p>
          <div className="socials">
            {socials.map((s) => (
              <a
                key={s.label}
                className="social"
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span aria-hidden="true">{s.glyph}</span>
              </a>
            ))}
          </div>
        </div>

        {footer.columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h4>Contact</h4>
          <p>
            {site.address.street}
            <br />
            {site.address.locality}, {site.address.region} {site.address.postalCode}
            <br />
            <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
          </p>
        </div>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} {site.legalName.toUpperCase()} · IGNITING FIRE, FAITH AND
        FREEDOM
      </div>
    </footer>
  );
}
