"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function TerminalMotion() {
  const scanRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(scanRef.current, {
        y: 230,
        duration: 2.8,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: 0.45,
        ease: "steps(1)",
        repeat: -1,
        yoyo: true,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={scanRef} className="pointer-events-none absolute left-0 right-0 top-20 h-px bg-accent opacity-40" />
      <span ref={cursorRef} className="ml-1 text-accent">
        ▌
      </span>
    </>
  );
}
