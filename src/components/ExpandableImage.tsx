"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useId,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type MouseEvent,
} from "react";
import { createPortal } from "react-dom";

type ExpandableImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  fillTrigger?: boolean;
  className?: string;
  style?: CSSProperties;
};

export function ExpandableImage({
  src,
  alt,
  width,
  height,
  priority = false,
  fillTrigger = false,
  className,
  style,
}: ExpandableImageProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const titleId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  const openModal = () => setOpen(true);

  const onTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModal();
    }
  };

  const onBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) close();
  };

  return (
    <>
      <button
        type="button"
        className={`expandable-image-trigger${fillTrigger ? " expandable-image-trigger--fill" : ""}`}
        onClick={openModal}
        onKeyDown={onTriggerKeyDown}
        aria-label={`Expand image: ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className={className}
          style={style}
        />
      </button>

      {mounted && open
        ? createPortal(
            <div
              className="image-lightbox"
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              onClick={onBackdropClick}
            >
              <p id={titleId} className="sr-only">
                {alt}
              </p>
              <button
                type="button"
                className="image-lightbox-close"
                onClick={close}
                aria-label="Close image"
              >
                ×
              </button>
              <div className="image-lightbox-content">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={alt} className="image-lightbox-img" />
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
