export default function BrandMark({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="40" height="40" rx="9" fill="white" />
      <path
        d="M3 24C9 15 15 15 20 20C25 25 31 25 37 16"
        stroke="#1B2733"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <path
        d="M3 28C9 19 15 19 20 24C25 29 31 29 37 20"
        stroke="url(#brandmark-gradient)"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="brandmark-gradient" x1="3" y1="24" x2="37" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0B1F3A" />
          <stop offset="1" stopColor="#38BDF8" />
        </linearGradient>
      </defs>
    </svg>
  );
}
