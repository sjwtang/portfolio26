"use client";

function UpArrowIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 5v14M5 12l7-7 7 7"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BackToTop() {
  return (
    <button
      type="button"
      className="btn-outline btn-back-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      Back to top
      <UpArrowIcon />
    </button>
  );
}
