import type { ReactNode } from "react";

export function ExtArrowIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size + 1}
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

/** Framer outline chip button (See publication, LinkedIn, Email, Resume) */
export function OutlineButton({
  href,
  children,
  external = true,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      className="btn-outline"
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : null)}
    >
      {children}
      <ExtArrowIcon />
    </a>
  );
}
