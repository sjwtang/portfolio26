import type { ReactNode } from "react";

/** iPhone 14/15 Pro bezel matching Framer GoodMaps mockups */
export function PhoneFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`phone-frame${className ? ` ${className}` : ""}`}>
      <div className="phone-frame-shell" aria-hidden="true" />
      <div className="phone-frame-inner" aria-hidden="true" />
      <div className="phone-frame-btn phone-frame-btn--silent" aria-hidden="true" />
      <div className="phone-frame-btn phone-frame-btn--vol-up" aria-hidden="true" />
      <div className="phone-frame-btn phone-frame-btn--vol-down" aria-hidden="true" />
      <div className="phone-frame-btn phone-frame-btn--power" aria-hidden="true" />
      <div className="phone-frame-screen">{children}</div>
    </div>
  );
}
