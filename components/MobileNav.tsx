"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import SmartLink from "@/components/SmartLink";
import { navItems, giveLink } from "@/lib/content";

/**
 * The phone menu, split out of the server-rendered header because it needs a
 * sliver of client state.
 *
 * A <details> disclosure keeps `open` across a client-side route change, so
 * tapping a link used to navigate the page underneath while leaving the panel
 * sitting on top of it. Closing on tap handles same-page anchors (where the
 * pathname never changes); the pathname effect is the backstop for everything
 * else, including the browser back button.
 */
export default function MobileNav() {
  const pathname = usePathname();
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.open = false;
  }, [pathname]);

  const close = () => {
    if (ref.current) ref.current.open = false;
  };

  return (
    <details className="nav-toggle" ref={ref}>
      <summary aria-label="Navigation menu">
        <span aria-hidden="true">☰</span>
      </summary>
      <nav
        className="nav-panel"
        aria-label="Mobile"
        // Delegated rather than per-link: SmartLink forwards no onClick, so a
        // handler on each child would miss the Give button.
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("a")) close();
        }}
      >
        {navItems.map((item) => (
          <Link key={item.label} href={item.href}>
            {item.label}
          </Link>
        ))}
        <SmartLink className="give" href={giveLink.href}>
          {giveLink.label}
        </SmartLink>
      </nav>
    </details>
  );
}
