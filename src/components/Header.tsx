"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links: {
  href: string;
  label: string;
  external?: boolean;
  button?: boolean;
}[] = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/ShirleyTang_Resume.pdf", label: "Resume", external: true },
  {
    href: "mailto:sjwtang@gmail.com?subject=Shirley%20Tang%20portfolio%20inquiry",
    label: "Contact",
    external: true,
    button: true,
  },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="page-shell site-shell">
        <div className="site-header-bar">
          <Link href="/" className="site-header-brand" aria-label="Shirley Tang">
            <Image
              src="/images/site-name.png"
              alt="Shirley Tang"
              width={1024}
              height={454}
              unoptimized
              className="site-header-name"
            />
          </Link>
          <nav className="site-header-nav">
            {links.map((link) => {
              const active =
                !link.external &&
                (link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href));
              const className = link.button
                ? "btn btn-tertiary"
                : `nav-link${active ? " active" : ""}`;

              if (link.external) {
                const isMail = link.href.startsWith("mailto:");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={className}
                    {...(!isMail
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : null)}
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <Link key={link.href} href={link.href} className={className}>
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
