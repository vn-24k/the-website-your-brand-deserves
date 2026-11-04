"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

interface ShimmerButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
}

/**
 * Magic UI & 21st.dev Shimmer Button.
 * Features an infinite glowing rotating border gradient with frosted glass backdrop.
 */
export function ShimmerButton({
  children,
  shimmerColor = "#a855f7",
  shimmerSize = "0.1em",
  borderRadius = "9999px",
  shimmerDuration = "3s",
  background = "rgba(10, 10, 12, 0.9)",
  className = "",
  ...props
}: ShimmerButtonProps) {
  return (
    <motion.button
      style={
        {
          "--spread": "90deg",
          "--shimmer-color": shimmerColor,
          "--radius": borderRadius,
          "--speed": shimmerDuration,
          "--cut": shimmerSize,
          "--bg": background,
        } as React.CSSProperties
      }
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/15 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] shadow-[0_0_20px_rgba(168,85,247,0.25)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] ${className}`}
      {...props}
    >
      {/* Rotating conic gradient light */}
      <div className="absolute -inset-full animate-[spin_3s_linear_infinite] [background:conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,var(--shimmer-color)_360deg)]" />

      {/* Inner background cut */}
      <div className="absolute inset-[1px] rounded-[inherit] [background:var(--bg)] backdrop-blur-xl" />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2 text-sm font-medium tracking-tight">
        {children}
      </span>
    </motion.button>
  );
}
