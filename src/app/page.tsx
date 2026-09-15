import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    href: "/oracle-hcm",
    image: "/images/oracle-card.png",
    badge: "/images/oracle-badge.png",
    badgeWidth: 77,
    badgeHeight: 49,
    title: "Oracle HCM: Nurse Self-Scheduling",
    description: "Self-scheduling tool that helps nurses sign up for shifts",
  },
  {
    href: "/goodmaps",
    image: "/images/goodmaps-card.png",
    badge: "/images/goodmaps-badge.png",
    badgeWidth: 50,
    badgeHeight: 49,
    title: "GoodMaps: Indoor Navigation",
    description:
      "Indoor turn-by-turn navigation for users of various accessibility needs",
  },
  {
    href: "/navipath",
    image: "/images/navipath-card.png",
    badge: "/images/navipath-badge.png",
    badgeWidth: 121,
    badgeHeight: 49,
    title: "NaviPath: AI-Assisted Mitosis Search",
    award: "Honorable Mention @ ACM CHI '23",
    description:
      "AI-enabled navigation system that helps pathologists search for mitosis",
  },
];

export default function HomePage() {
  return (
    <div className="page-shell" style={{ paddingTop: 48 }}>
      <section style={{ maxWidth: 1405 }}>
        <p
          style={{
            fontSize: 24,
            lineHeight: "28.8px",
            margin: "0 0 18px",
            color: "#333333",
          }}
        >
          Shirley is a <strong style={{ fontWeight: 700 }}>user experience designer</strong>{" "}
          who strives to craft empowering experiences. Her work is driven by
          curiosity and a desire to keep learning.
        </p>
        <p
          style={{
            fontSize: 24,
            lineHeight: "28.8px",
            margin: 0,
            color: "#333333",
          }}
        >
          Most recently, she designed agentic applications{" "}
          <a
            className="link-blue"
            href="https://www.oracle.com/applications/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Oracle
          </a>{" "}
          and graduated from{" "}
          <a
            className="link-blue"
            href="https://www.sjsu.edu/hfe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @SJSU
          </a>
          &apos;26 with an M.S. Human Factors &amp; Ergonomics (UX conc).
        </p>
      </section>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 72,
          marginBottom: 72,
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
                width={678}
                height={615}
                className="project-image"
                style={{ width: "100%", height: "auto" }}
              />
            </Link>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <Image
                src={project.badge}
                alt=""
                width={project.badgeWidth}
                height={project.badgeHeight}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                {project.award ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                    }}
                  >
                    <Link href={project.href} className="project-title">
                      {project.title}
                    </Link>
                    <p
                      style={{
                        display: "inline-block",
                        width: "fit-content",
                        margin: 0,
                        padding: "4px 12px",
                        borderRadius: 15,
                        background: "#fcefc7",
                        fontSize: 18,
                        fontWeight: 400,
                        lineHeight: "21.6px",
                        color: "#333333",
                      }}
                    >
                      {project.award}
                    </p>
                  </div>
                ) : (
                  <Link href={project.href} className="project-title">
                    {project.title}
                  </Link>
                )}
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
