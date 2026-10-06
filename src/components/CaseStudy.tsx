import type { CSSProperties, ReactNode } from "react";
import {
  ExpandableCaptionProvider,
  ExpandableImage,
} from "@/components/ExpandableImage";

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
  imageQuality,
  imageUnoptimized = false,
  framed = false,
  divider = true,
  titleGap = 28,
  framePadding = "40px 0",
  frameGap,
  frameClassName,
  imageStyle,
  beforeImage,
  tldr,
  layout = "default",
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
  imageQuality?: number;
  imageUnoptimized?: boolean;
  framed?: boolean;
  divider?: boolean;
  titleGap?: number;
  framePadding?: string;
  frameGap?: number;
  frameClassName?: string;
  imageStyle?: CSSProperties;
  beforeImage?: ReactNode;
  tldr?: ReactNode;
  layout?: "default" | "split";
  heroFooter?: ReactNode;
  metaLeft: MetaPair[];
  metaRight: MetaPair[];
  skills?: string[];
}) {
  const isSplit = layout === "split";
  const imageFrame = (
    <div
      className={`case-hero-media${frameClassName ? ` ${frameClassName}` : ""}${framed ? " case-hero-media--framed" : ""}${isSplit ? " case-hero-media--split" : ""}`}
      style={
        framed
          ? {
              padding: framePadding,
              gap: frameGap,
            }
          : undefined
      }
    >
      <ExpandableImage
        src={image}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        priority
        quality={imageQuality}
        unoptimized={imageUnoptimized}
        fillTrigger={!framed || Boolean(heroFooter) || isSplit}
        style={{
          width: framed && !heroFooter && !isSplit ? "auto" : isSplit ? "auto" : "100%",
          maxWidth: "100%",
          height: "auto",
          ...imageStyle,
        }}
      />
      {heroFooter}
    </div>
  );

  const titleBlock = (
    <div
      className="case-hero-copy"
      style={{ display: "flex", flexDirection: "column", gap: titleGap }}
    >
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
  );

  return (
    <div
      className={`case-shell${isSplit ? " case-hero--split" : ""}`}
      style={{ paddingTop: isSplit ? 40 : 80 }}
    >
      {isSplit ? (
        <>
          {titleBlock}
          <div className="case-hero-stage">
            <div className="case-hero-stage-image">{imageFrame}</div>
          </div>
        </>
      ) : (
        <>
          {titleBlock}
          {beforeImage ? (
            <div style={{ marginTop: 50 }}>{beforeImage}</div>
          ) : null}
          {imageFrame}
        </>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          columnGap: 50,
          rowGap: 25,
          marginTop: isSplit ? 32 : 50,
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

      {tldr ? <div style={{ marginTop: 50 }}>{tldr}</div> : null}

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
      <ExpandableCaptionProvider caption={caption}>
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
              caption={caption}
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
      </ExpandableCaptionProvider>
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
