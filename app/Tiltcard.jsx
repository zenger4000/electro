"use client";

import { useEffect, useRef } from "react";

export default function TiltCard({ children }) {
  const cardRef = useRef(null);

  const target = useRef({ x: 160, y: 100 });
  const current = useRef({ x: 160, y: 100 });

  const rect = useRef({
    width: 320,
    height: 200,
  });

  const hovered = useRef(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const updateRect = () => {
      const r = card.getBoundingClientRect();

      rect.current = {
        width: r.width,
        height: r.height,
      };
    };

    updateRect();

    const lerpSpeed = 0.12;
    const maxRotate = 35;

    let frame;

    const animate = () => {
      current.current.x +=
        (target.current.x - current.current.x) * lerpSpeed;

      current.current.y +=
        (target.current.y - current.current.y) * lerpSpeed;

      const centerX = rect.current.width / 2;
      const centerY = rect.current.height / 2;

      const dx = (current.current.x - centerX) / centerX;
      const dy = (current.current.y - centerY) / centerY;

      const rotateY = dx * maxRotate;
      const rotateX = -dy * maxRotate;

      const scale = hovered.current ? 1.06 : 1;

      card.style.transform = `
        scale(${scale})
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `;

      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(frame);
  }, []);

  const handleMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const r = card.getBoundingClientRect();

    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    target.current = { x, y };

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  return (
    <div className="[perspective:800px]">
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseEnter={() => (hovered.current = true)}
        onMouseLeave={() => {
          hovered.current = false;

          target.current = {
            x: rect.current.width / 2,
            y: rect.current.height / 2,
          };
        }}
        style={{
          "--x": "50%",
          "--y": "50%",
        }}
        className="
          group
          relative
          w-[320px]
          h-[200px]
          rounded-2xl
          overflow-hidden
          bg-zinc-900
          text-white
          [transform-style:preserve-3d]
          will-change-transform
        "
      >
        <div
          className="
            absolute inset-0
            opacity-0
            scale-0
            transition-all
            duration-500
            group-hover:opacity-100
            group-hover:scale-[3.5]
          "
          style={{
            background:
              "radial-gradient(circle at var(--x) var(--y), #0f172a, transparent 60%)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at var(--x) var(--y), rgba(255,255,255,.25), transparent 45%)",
            mixBlendMode: "overlay",
          }}
        />

        <div
          className="relative z-10 h-full w-full"
          style={{
            transform: "translateZ(70px)",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );}
