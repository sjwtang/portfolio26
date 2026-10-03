import Image from "next/image";
import Link from "next/link";

const projects: {
  href: string;
  image: string;
  imageAlt: string;
  badge: string;
  badgeWidth: number;
  badgeHeight: number;
  title: string;
  description: string;
  imageBadge?: {
    label: string;
    wide?: boolean;
  };
  tags?: string[];
}[] = [
  {
    href: "/oracle-hcm",
    image: "/images/oracle-card.png",
    imageAlt: "Mobile calendar where nurses select shifts",
    badge: "/images/oracle-badge.png",
    badgeWidth: 63,
    badgeHeight: 40,
    title: "Oracle HCM: Nurse Self-Scheduling",
    description:
      "Designing an AI-assisted scheduling experience for nurses navigating complex staffing constraints",
    tags: ["AI", "Enterprise", "Healthcare", "Mobile"],
  },
  {
    href: "/goodmaps",
    image: "/images/goodmaps-card.png",
    imageAlt: "Mobile indoor navigation route",
    badge: "/images/goodmaps-badge.png",
    badgeWidth: 41,
    badgeHeight: 40,
    title: "GoodMaps: Indoor Navigation",
    description:
      "Redesigning indoor navigation to help people with diverse accessibility needs confidently navigate unfamiliar spaces",
    tags: ["Accessibility", "B2C", "Navigation", "Mobile"],
    imageBadge: {
      label: "+250% MAU after redesign",
    },
  },
  {
    href: "/acme",
    image: "/images/acme-card.png",
    imageAlt: "Desktop fraud investigation dashboard with charts and case table",
    badge: "/images/acme-badge.png",
    badgeWidth: 95,
    badgeHeight: 40,
    title: "ACME: Credit Card Fraud Dashboard",
    description:
      "Designing a workflow that helps fraud investigators review and resolve suspicious transactions",
    tags: ["AI", "Enterprise", "Data Visualization", "Web"],
  },
  {
    href: "/navipath",
    image: "/images/navipath-card.png",
    imageAlt: "Laptop showing AI-assisted mitosis search on a tissue scan",
    badge: "/images/navipath-badge.png",
    badgeWidth: 99,
    badgeHeight: 40,
    title: "NaviPath: AI-Assisted Mitosis Search",
    description:
      "Exploring how AI can help pathologists search for mitosis while keeping experts in control",
    tags: ["AI", "Healthcare", "Human-AI Interaction", "Web"],
    imageBadge: {
      label: "Honorable Mention @ ACM CHI '23",
      wide: true,
    },
  },
];

export default function HomePage() {
  return (
    <div className="page-shell site-shell" style={{ paddingTop: 80, paddingBottom: 300 }}>
      <section style={{ maxWidth: 1405 }}>
        <p
          style={{
            fontSize: 24,
            lineHeight: "28.8px",
            margin: "0 0 18px",
            color: "#333333",
          }}
        >
          Shirley Tang is a UX designer who makes complex, AI-enabled products
          clear and usable.
        </p>
        <p
          style={{
            fontSize: 24,
            lineHeight: "28.8px",
            margin: 0,
            color: "#333333",
          }}
        >
          Most recently, she designed{" "}
          <span className="intro-highlight">AI-assisted workflows</span> at{" "}
          <a
            className="link-blue"
            href="https://www.oracle.com/human-capital-management/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Oracle
          </a>
          . With an M.S. in Human Factors &amp; Ergonomics (UX Concentration),
          she brings a{" "}
          <span className="intro-highlight">human factors perspective</span> to
          enterprise, healthcare, and accessibility-focused work.
        </p>
      </section>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 72,
          marginBottom: 120,
        }}
      >
        <Image
          src="/images/avatar.jpg"
          alt=""
          width={175}
          height={175}
          priority
        />
      </div>

      <ul className="project-grid">
        {projects.map((project) => (
          <li key={project.href} className="project-item">
            <div className="project-item-media">
              <Image
                src={project.image}
                alt={project.imageAlt}
                width={1485}
                height={1329}
                className="project-item-image"
              />
              {project.imageBadge ? (
                <span
                  className={
                    project.imageBadge.wide
                      ? "project-item-badge project-item-badge--wide"
                      : "project-item-badge"
                  }
                >
                  {project.imageBadge.label}
                </span>
              ) : null}
            </div>
            <div className="project-copy">
              <div className="project-logo">
                <Image
                  src={project.badge}
                  alt=""
                  width={project.badgeWidth}
                  height={project.badgeHeight}
                />
              </div>
              <div className="project-text">
                <h2 className="project-item-title">
                  <Link href={project.href} className="project-item-link">
                    {project.title}
                  </Link>
                </h2>
                <div className="project-meta">
                  <p className="project-description">{project.description}</p>
                  {project.tags ? (
                    <p className="project-tags">
                      {project.tags.map((tag, index) => (
                        <span key={tag}>
                          {index > 0 ? (
                            <span
                              className="project-tags-sep"
                              aria-hidden="true"
                            >
                              {" "}
                              ·{" "}
                            </span>
                          ) : null}
                          <span>{tag}</span>
                        </span>
                      ))}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
