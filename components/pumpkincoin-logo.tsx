export default function PumpkinCoinLogo({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="45" fill="#f97316" />
      <path
        d="M50 5 C60 25, 80 40, 80 50 C80 60, 60 75, 50 95 C40 75, 20 60, 20 50 C20 40, 40 25, 50 5"
        fill="#ea580c"
        stroke="#ea580c"
        strokeWidth="2"
      />
      <circle cx="50" cy="50" r="45" fill="none" stroke="#7c2d12" strokeWidth="5" />
      <path
        d="M35 45 L40 50 L35 55 M65 45 L60 50 L65 55"
        stroke="#7c2d12"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M40 70 Q50 80, 60 70"
        fill="none"
        stroke="#7c2d12"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M50 5 Q55 0, 60 5"
        fill="none"
        stroke="#365314"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}
