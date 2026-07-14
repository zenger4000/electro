export default function CompleteDataBadge({
  size = 42,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
    >
      <defs>
        <linearGradient
          id="rainbow"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ff0000" />
          <stop offset="16%" stopColor="#ff8000" />
          <stop offset="33%" stopColor="#ffff00" />
          <stop offset="50%" stopColor="#00ff00" />
          <stop offset="66%" stopColor="#00ffff" />
          <stop offset="83%" stopColor="#0000ff" />
          <stop offset="100%" stopColor="#ff00ff" />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="blur" />

          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Gold Star */}

      <path
        d="
        M50 7
        L61 35
        L91 35
        L67 53
        L76 84
        L50 66
        L24 84
        L33 53
        L9 35
        L39 35
        Z
      "
        fill="#f8eb27"
        // fill="#FFD54A"
        stroke="#fff5"
        strokeWidth="1.5"
      />

      {/* Thin white outline */}

      <path
        d="
        M50 7
        L61 35
        L91 35
        L67 53
        L76 84
        L50 66
        L24 84
        L33 53
        L9 35
        L39 35
        Z
      "
        fill="none"
        stroke="rgba(255,255,255,.15)"
        strokeWidth="5"
      />

      {/* Animated Rainbow Energy */}

      <path
        className="star-energy"
        d="
        M50 7
        L61 35
        L91 35
        L67 53
        L76 84
        L50 66
        L24 84
        L33 53
        L9 35
        L39 35
        Z
      "
        fill="none"
        stroke="url(#rainbow)"
        strokeWidth="5"
        strokeLinecap="round"
        filter="url(#glow)"
      />
    </svg>
  );
}