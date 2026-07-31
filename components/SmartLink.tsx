import Link from "next/link";
import type { ReactNode } from "react";

import { isExternal } from "@/lib/site";

/**
 * Renders a `next/link` for internal routes and in-page anchors, and a plain
 * anchor (new tab, `rel="noopener"`) for outbound URLs — giving, streaming,
 * and social destinations. Keeps every call site free of the same ternary.
 */
export default function SmartLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  if (isExternal(href)) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
