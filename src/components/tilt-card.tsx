"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glareEffect?: boolean;
}

/**
 * 21st.dev 3D Tilt Card Component.
 * Applies true 3D perspective rotation and glare tracking on mouse move.
 */
export function TiltCard({
  children,
  className = "",
  maxTilt = 15,
  glareEffect = true,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 250, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 250, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-maxTilt, maxTilt]);

  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: "1000px" }} className="w-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 p-6 backdrop-blur-xl shadow-2xl transition-all duration-200 ${className}`}
      >
        {glareEffect && (
          <motion.div
            style={{
              background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.15), transparent 60%)`,
            }}
            className="pointer-events-none absolute inset-0 z-20 rounded-2xl opacity-75"
            aria-hidden="true"
          />
        )}
        <div style={{ transform: "translateZ(30px)" }} className="relative z-10">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
