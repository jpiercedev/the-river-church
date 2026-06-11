import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/river-church-logo.jpg";
import { navItems, giveLink } from "@/lib/content";
import { site } from "@/lib/site";

const socials = [
  { glyph: "f", label: "Facebook", href: site.links.facebook },
  { glyph: "◎", label: "Instagram", href: site.links.instagram },
  { glyph: "▶", label: "YouTube", href: site.links.youtube },
];

export default function Header() {
  return (
    <>
      <div className="topbar">
        SUNDAYS AT {site.service.time.toUpperCase()} · {site.address.street.toUpperCase()} ·{" "}
        {site.address.locality.toUpperCase()}, {site.address.region}
      </div>

      <header className="site-header">
        <Link href="/" className="brand" aria-label={`${site.name} home`}>
          <Image className="mark" src={logo} alt={`${site.name} logo`} width={52} height={52} priority />
          <span className="brand-copy">
            <b>THE RIVER</b>
            <small>CHURCH</small>
          </span>
        </Link>

        <div className="header-right">
          <nav className="primary-nav" aria-label="Primary">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label.toUpperCase()}
              </Link>
            ))}
            <Link className="give" href={giveLink.href}>
              {giveLink.label.toUpperCase()}
            </Link>
          </nav>

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

          <details className="nav-toggle">
            <summary aria-label="Open navigation menu">
              <span aria-hidden="true">☰</span>
            </summary>
            <nav className="nav-panel" aria-label="Mobile">
              {navItems.map((item) => (
                <Link key={item.label} href={item.href}>
                  {item.label}
                </Link>
              ))}
              <Link className="give" href={giveLink.href}>
                {giveLink.label}
              </Link>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}
