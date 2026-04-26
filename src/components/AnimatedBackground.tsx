"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const gridRef = useRef<HTMLDivElement>(null);
  const sweepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(gridRef.current, {
        backgroundPosition: "64px 64px",
        duration: 18,
        ease: "none",
        repeat: -1,
      });
      gsap.to(sweepRef.current, {
        x: "120vw",
        duration: 7,
        ease: "none",
        repeat: -1,
        repeatDelay: 1.5,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[11] overflow-hidden">
      <div
        ref={gridRef}
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(#27272A 1px, transparent 1px), linear-gradient(90deg, #27272A 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="absolute inset-0 opacity-[0.05]">
        {Array.from({ length: 14 }).map((_, index) => (
          <div
            key={index}
            className="absolute left-0 right-0 border-t border-accent"
            style={{ top: `${8 + index * 7}%` }}
          />
        ))}
      </div>
      <div
        ref={sweepRef}
        className="absolute top-0 h-full w-px bg-accent opacity-20"
        style={{ left: "-10vw" }}
      />
    </div>
  );
}
