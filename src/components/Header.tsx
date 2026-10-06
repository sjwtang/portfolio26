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
      <div
        className="page-shell site-shell"
        style={{ paddingTop: 22, paddingBottom: 22 }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontSize: 32,
              fontWeight: 500,
              letterSpacing: "-0.32px",
              lineHeight: "64px",
              color: "#111111",
            }}
          >
            <Image
              src="/images/header-icon.png"
              alt=""
              width={32}
              height={32}
              style={{
                width: "1em",
                height: "1em",
                objectFit: "contain",
                flexShrink: 0,
              }}
              aria-hidden
            />
            Shirley Tang
          </Link>
          <nav style={{ display: "flex", gap: 51, alignItems: "center" }}>
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
