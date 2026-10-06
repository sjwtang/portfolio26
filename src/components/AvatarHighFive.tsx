"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

function Sparkle({ className }: { className: string }) {
  return (
    <svg
      className={`avatar-highfive-sparkle ${className}`}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="#E8B923"
      aria-hidden="true"
    >
      <path d="M12 0l2.4 9.6L24 12l-9.6 2.4L12 24l-2.4-9.6L0 12l9.6-2.4L12 0z" />
    </svg>
  );
}

export function AvatarHighFive() {
  const [active, setActive] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const trigger = useCallback(() => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    setActive(false);
    requestAnimationFrame(() => {
      setActive(true);
      timeoutRef.current = window.setTimeout(() => {
        setActive(false);
        timeoutRef.current = null;
      }, 1150);
    });
  }, []);

  return (
    <div className="avatar-highfive">
      <button
        type="button"
        className={`avatar-highfive-trigger${active ? " is-active" : ""}`}
        onClick={trigger}
        aria-label="Say hi to Shirley"
      >
        <Image
          src="/images/avatar.jpg"
          alt=""
          width={175}
          height={175}
          priority
          className="avatar-highfive-image"
        />
        <span className="avatar-highfive-fx" aria-hidden="true">
          <Sparkle className="avatar-highfive-sparkle--a" />
          <Sparkle className="avatar-highfive-sparkle--b" />
          <Sparkle className="avatar-highfive-sparkle--c" />
        </span>
      </button>
    </div>
  );
}
