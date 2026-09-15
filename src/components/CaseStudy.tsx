import type { CSSProperties, ReactNode } from "react";
import { ExpandableImage } from "@/components/ExpandableImage";

type MetaPair = {
  label: string;
  value: string;
};

export function CaseHero({
  title,
  subtitle,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  framed = false,
  divider = true,
  titleGap = 28,
  framePadding = "40px 0",
  frameGap,
  heroFooter,
  metaLeft,
  metaRight,
  skills,
}: {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  framed?: boolean;
  divider?: boolean;
  titleGap?: number;
  framePadding?: string;
  frameGap?: number;
  heroFooter?: ReactNode;
  metaLeft: MetaPair[];
  metaRight: MetaPair[];
  skills?: string[];
}) {
  return (
    <div className="case-shell" style={{ paddingTop: 80 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: titleGap }}>
        <h1
          style={{
            fontSize: 40,
            fontWeight: 700,
            lineHeight: "48px",
            margin: 0,
            color: "#333333",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: 24,
            fontWeight: 400,
            lineHeight: "28.8px",
            margin: 0,
            color: "#333333",
          }}
        >
          {subtitle}
        </p>
      </div>

      <div
        style={
          framed
            ? {
                background: "#f5f5f5",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: framePadding,
                gap: frameGap,
                marginTop: 50,
              }
            : { marginTop: 50 }
        }
      >
        <ExpandableImage
          src={image}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          priority
          fillTrigger={!framed || Boolean(heroFooter)}
          style={{
            width: framed && !heroFooter ? "auto" : "100%",
            maxWidth: "100%",
            height: "auto",
          }}
        />
        {heroFooter}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          columnGap: 50,
          rowGap: 25,
          marginTop: 50,
        }}
        className="case-meta"
      >
        {metaLeft.map((item, i) => (
          <div key={item.label} style={{ gridColumn: 1, gridRow: i + 1 }}>
            <p className="meta-label">{item.label}</p>
            <p className="meta-value">{item.value}</p>
          </div>
        ))}
        {metaRight.map((item, i) => (
          <div key={item.label} style={{ gridColumn: 2, gridRow: i + 1 }}>
            <p className="meta-label">{item.label}</p>
            <p className="meta-value">{item.value}</p>
          </div>
        ))}
      </div>

      {skills && skills.length > 0 ? (
        <div style={{ marginTop: 25 }}>
          <p className="meta-label" style={{ width: "auto" }}>
            Skills
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginTop: 16,
            }}
          >
            {skills.map((skill) => (
              <span key={skill} className="skill-chip">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      {divider ? <hr className="case-divider" style={{ marginTop: 50 }} /> : null}

      <style>{`
        @media (max-width: 800px) {
          .case-meta {
            grid-template-columns: 1fr !important;
          }
          .case-meta > div {
            grid-column: 1 !important;
            grid-row: auto !important;
          }
        }
      `}</style>
    </div>
  );
}

export function CaseImage({
  src,
  alt,
  width,
  height,
  caption,
  framed = false,
  framePadding,
  frameStyle,
  frameClassName,
  imageStyle,
  objectFit,
  children,
}: {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  caption?: string;
  framed?: boolean;
  framePadding?: string;
  frameStyle?: CSSProperties;
  frameClassName?: string;
  imageStyle?: CSSProperties;
  objectFit?: CSSProperties["objectFit"];
  children?: ReactNode;
}) {
  const frameClass = framed
    ? `case-image-frame${frameClassName ? ` ${frameClassName}` : ""}`
    : frameClassName;
  const style: CSSProperties | undefined =
    framed || framePadding || frameStyle
      ? {
          ...(framePadding ? { padding: framePadding } : null),
          ...frameStyle,
        }
      : undefined;

  return (
    <figure className="case-figure">
      <div className={frameClass} style={style}>
        {children ? (
          children
        ) : src && alt != null && width != null && height != null ? (
          <ExpandableImage
            src={src}
            alt={alt}
            width={width}
            height={height}
            fillTrigger
            style={{
              width: "100%",
              height: objectFit ? "100%" : "auto",
              ...(objectFit
                ? {
                    aspectRatio: `${width} / ${height}`,
                    objectFit,
                  }
                : null),
              ...imageStyle,
            }}
          />
        ) : null}
      </div>
      {caption ? <figcaption className="case-caption">{caption}</figcaption> : null}
    </figure>
  );
}

/** Framer Frame 20 callout (e.g. problem statement) with caption */
export function CaseCallout({
  children,
  caption,
  framePadding,
}: {
  children: ReactNode;
  caption?: string;
  framePadding?: string;
}) {
  return (
    <figure className="case-figure">
      <div
        className="case-image-frame case-callout-frame"
        style={framePadding ? { padding: framePadding } : undefined}
      >
        {children}
      </div>
      {caption ? <figcaption className="case-caption">{caption}</figcaption> : null}
    </figure>
  );
}

export function CaseSectionLabel({ children }: { children: ReactNode }) {
  return <p className="case-section-label">{children}</p>;
}

export function CaseTextBlock({ children }: { children: ReactNode }) {
  return <div className="case-text-block">{children}</div>;
}
