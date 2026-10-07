"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="page-shell site-shell">
        <div className="site-header-bar">
          <Link href="/" className="site-header-brand">
            <Image
              src="/images/header-icon.png"
              alt=""
              width={32}
              height={32}
              aria-hidden
            />
            Shirley Tang
          </Link>
          <nav className="site-header-nav">
            {links.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link${active ? " active" : ""}`}
                >
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
