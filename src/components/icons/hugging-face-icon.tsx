import type { SVGProps } from "react";

export function HuggingFaceIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="9.5" fill="currentColor" opacity="0.18" />
      <circle cx="8.7" cy="10.2" r="1.15" fill="currentColor" />
      <circle cx="15.3" cy="10.2" r="1.15" fill="currentColor" />
      <path
        d="M8 14.2c1.1 1.45 2.35 2.2 4 2.2s2.9-.75 4-2.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M5.7 14.25c-1.35.35-2.05 1.2-1.82 2.1.24.95 1.36 1.22 2.78.62M18.3 14.25c1.35.35 2.05 1.2 1.82 2.1-.24.95-1.36 1.22-2.78.62"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
      />
    </svg>
  );
}
