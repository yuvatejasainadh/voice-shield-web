import React from 'react';

export function VoiceShieldLogo({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="VOICE SHIELD - AI for a Safer Tomorrow"
      role="img"
    >
      <path
        d="M32 4L10 13V30C10 44.5 19.4 56.8 32 60C44.6 56.8 54 44.5 54 30V13L32 4Z"
        fill="#1F3B64"
      />
      <path
        d="M32 9L14 16.4V30C14 42.1 21.7 52.5 32 55.4C42.3 52.5 50 42.1 50 30V16.4L32 9Z"
        fill="#13233A"
      />
      <path
        d="M22 32V28M27 37V23M32 41V19M37 37V23M42 32V28"
        stroke="#159570"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
