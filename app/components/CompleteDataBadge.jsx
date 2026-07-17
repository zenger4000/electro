export default function CompleteDataBadge({
  size = 42,
  className = "spin-ccw inline-block mx-2",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
    >
      <defs>
        {/* <linearGradient
          id="rainbow"
          x1="100%"
          y1="100%"
          x2="0%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#ff0000" />
          <stop offset="16%" stopColor="#ff8000" />
          <stop offset="33%" stopColor="#ffff00" />
          <stop offset="50%" stopColor="#00ff00" />
          <stop offset="66%" stopColor="#00ffff" />
          <stop offset="83%" stopColor="#0000ff" />
          <stop offset="100%" stopColor="#ff00ff" />
        </linearGradient> */}
        <linearGradient
          id="rainbow"
          x1="78%"
          y1="24%"
          x2="35%"
          y2="90%"
        >
          <stop offset="0%" stopColor="#6ae75e" />
          <stop offset="33%" stopColor="#9d51cd" />
          <stop offset="66%" stopColor="#e6cac6" />
          <stop offset="100%" stopColor="#e22c37" />
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

      <svg viewBox="0 0 100 100" xmlns="http://w3.org">
  <defs>
  
    <linearGradient id="starGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="100%" stopColor="#ffffff" />
    </linearGradient>
  </defs>

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
    fill="url(#starGradient)"
    stroke="#fff5"
    strokeWidth="1.5"
  />
</svg>


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