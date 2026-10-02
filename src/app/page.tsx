import Image from "next/image";
import Link from "next/link";

const projects: {
  href: string;
  image: string;
  badge: string;
  badgeWidth: number;
  badgeHeight: number;
  title: string;
  description: string;
  award?: string;
  tags?: string[];
}[] = [
  {
    href: "/oracle-hcm",
    image: "/images/oracle-card.png",
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
    badge: "/images/goodmaps-badge.png",
    badgeWidth: 41,
    badgeHeight: 40,
    title: "GoodMaps: Indoor Navigation",
    description:
      "Redesigning indoor navigation to help people with diverse accessibility needs confidently navigate unfamiliar spaces",
    tags: ["Accessibility", "B2C", "Navigation", "Mobile"],
    award: "+250% MAU Growth",
  },
  {
    href: "/acme",
    image: "/images/acme-card.png",
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
    badge: "/images/navipath-badge.png",
    badgeWidth: 99,
    badgeHeight: 40,
    title: "NaviPath: AI-Assisted Mitosis Search",
    award: "Honorable Mention @ ACM CHI '23",
    description:
      "Exploring how AI can help pathologists search for mitosis while keeping experts in control",
    tags: ["AI", "Healthcare", "Human-AI Interaction", "Web"],
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
          . With an M.S. in Human Factors &amp; Ergonomics (UX Concentration)
          from{" "}
          <a
            className="link-blue"
            href="https://www.sjsu.edu/hfe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SJSU
          </a>
          &apos;26, she brings a{" "}
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

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          columnGap: 50,
          rowGap: 80,
        }}
        className="project-grid"
      >
        {projects.map((project) => (
          <article
            key={project.href}
            style={{
              maxWidth: 678,
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <Link href={project.href} className="project-image-link">
              <Image
                src={project.image}
                alt=""
                width={1485}
                height={1329}
                className="project-image"
              />
            </Link>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <div className="project-badge">
                <Image
                  src={project.badge}
                  alt=""
                  width={project.badgeWidth}
                  height={project.badgeHeight}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <Link href={project.href} className="project-title">
                  {project.title}
                </Link>
                <div className="project-meta">
                  <p
                    style={{
                      fontSize: 18,
                      fontWeight: 400,
                      lineHeight: "27px",
                      margin: 0,
                      color: "#333333",
                    }}
                  >
                    {project.description}
                  </p>
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
                  {project.award ? (
                    <p className="project-award">{project.award}</p>
                  ) : null}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <style>{`
        @media (max-width: 900px) {
          .project-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
