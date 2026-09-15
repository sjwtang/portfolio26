import Image from "next/image";
import Link from "next/link";

const connect = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shirleyjtang",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:sjwtang@gmail.com?subject=Shirley%20Tang%20portfolio%20inquiry",
    external: true,
  },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1kyyxN3mthFoLITRr6x6GE5hE4r0bOc3M/view?usp=sharing",
    external: true,
  },
];

const projects = [
  { label: "Oracle", href: "/oracle-hcm" },
  { label: "GoodMaps", href: "/goodmaps" },
  { label: "NaviPath", href: "/navipath" },
];

function ExtIcon() {
  return (
    <svg
      className="ext-icon"
      viewBox="0 0 24 25"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M17.9999 7.55C17.9999 7.28478 17.8946 7.03043 17.707 6.84289C17.5195 6.65536 17.2652 6.55 16.9999 6.55L8.99994 6.5C8.73472 6.5 8.48037 6.60536 8.29283 6.79289C8.1053 6.98043 7.99994 7.23478 7.99994 7.5C7.99994 7.76522 8.1053 8.01957 8.29283 8.20711C8.48037 8.39464 8.73472 8.5 8.99994 8.5H14.5599L6.28994 16.79C6.19621 16.883 6.12182 16.9936 6.07105 17.1154C6.02028 17.2373 5.99414 17.368 5.99414 17.5C5.99414 17.632 6.02028 17.7627 6.07105 17.8846C6.12182 18.0064 6.19621 18.117 6.28994 18.21C6.3839 18.3037 6.49454 18.3781 6.6164 18.4289C6.73826 18.4796 6.86894 18.5058 7.00094 18.5058C7.13294 18.5058 7.26362 18.4796 7.38548 18.4289C7.50734 18.3781 7.61798 18.3037 7.71194 18.21L15.9999 9.92V15.5C15.9999 15.7652 16.1053 16.0196 16.2928 16.2071C16.4804 16.3946 16.7347 16.5 16.9999 16.5C17.2652 16.5 17.5195 16.3946 17.707 16.2071C17.8946 16.0196 17.9999 15.7652 17.9999 15.5V7.55Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer
      className="page-shell"
      style={{ paddingTop: 80, paddingBottom: 64 }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 40,
          flexWrap: "wrap",
        }}
      >
        <Image
          src="/images/avatar.jpg"
          alt=""
          width={69}
          height={69}
          style={{ borderRadius: 0 }}
        />
        <div
          style={{
            display: "flex",
            gap: 96,
            marginLeft: "auto",
          }}
        >
          <div>
            <p
              style={{
                fontSize: 15,
                fontWeight: 600,
                letterSpacing: "-0.15px",
                lineHeight: "15px",
                margin: "0 0 10px",
              }}
            >
              Connect
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {connect.map((item) => (
                <li key={item.label} style={{ marginBottom: 10 }}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      fontSize: 15,
                      letterSpacing: "-0.15px",
                      lineHeight: "15px",
                    }}
                  >
                    {item.label}
                    <ExtIcon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p
              style={{
                fontSize: 15,
                fontWeight: 600,
                letterSpacing: "-0.15px",
                lineHeight: "15px",
                margin: "0 0 10px",
              }}
            >
              Projects
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {projects.map((item) => (
                <li key={item.label} style={{ marginBottom: 8 }}>
                  <Link
                    href={item.href}
                    style={{
                      fontSize: 15,
                      letterSpacing: "-0.15px",
                      lineHeight: "15px",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
