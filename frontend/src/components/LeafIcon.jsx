export default function LeafIcon({ size = 42, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="leafTop" x1="25" y1="5" x2="48" y2="38">
          <stop offset="0%" stopColor="#45494d" />
          <stop offset="45%" stopColor="#202326" />
          <stop offset="100%" stopColor="#08090a" />
        </linearGradient>

        <linearGradient id="leafSecond" x1="18" y1="30" x2="48" y2="55">
          <stop offset="0%" stopColor="#4a4e52" />
          <stop offset="50%" stopColor="#222527" />
          <stop offset="100%" stopColor="#0a0b0c" />
        </linearGradient>

        <linearGradient id="leafThird" x1="15" y1="50" x2="50" y2="72">
          <stop offset="0%" stopColor="#55595d" />
          <stop offset="48%" stopColor="#25282a" />
          <stop offset="100%" stopColor="#0b0c0d" />
        </linearGradient>

        <linearGradient id="leafBottom" x1="28" y1="65" x2="70" y2="78">
          <stop offset="0%" stopColor="#55595d" />
          <stop offset="48%" stopColor="#292c2f" />
          <stop offset="100%" stopColor="#101112" />
        </linearGradient>

        <filter id="leafShadow" x="-30%" y="-30%" width="160%" height="170%">
          <feDropShadow
            dx="1"
            dy="2"
            stdDeviation="2"
            floodColor="#000000"
            floodOpacity="0.28"
          />
        </filter>
      </defs>

      {/* Top leaf */}
      <path
        d="M39 5 C30 10 27 18 29 25 C31 31 36 36 40 39 C45 34 49 27 48 20 C47 13 43 8 39 5 Z"
        fill="url(#leafTop)"
        filter="url(#leafShadow)"
      />

      {/* Second leaf */}
      <path
        d="M29 29 C21 31 17 37 19 43 C21 50 28 54 36 57 C40 51 42 45 39 39 C37 34 33 31 29 29 Z"
        fill="url(#leafSecond)"
        filter="url(#leafShadow)"
      />

      {/* Third leaf */}
      <path
        d="M25 50 C17 51 13 57 15 64 C17 70 24 75 34 78 C39 72 40 66 37 60 C34 55 30 52 25 50 Z"
        fill="url(#leafThird)"
        filter="url(#leafShadow)"
      />

      {/* Bottom leaf */}
      <path
        d="M33 69 C42 65 52 64 61 68 C67 71 70 76 69 81 C62 86 52 87 44 84 C37 82 32 77 30 73 C30 72 31 70 33 69 Z"
        fill="url(#leafBottom)"
        filter="url(#leafShadow)"
      />

      {/* Curved stem */}
      <path
        d="M61 80 C68 82 71 86 69 92 C68 98 61 102 55 100 C51 99 49 96 50 94 C51 92 53 93 55 94 C59 96 64 94 65 91 C67 87 64 85 60 84"
        stroke="#252729"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* Stem highlight */}
      <path
        d="M62 84 C67 86 68 89 66 92"
        stroke="#55595c"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
    </svg>
  );
}
