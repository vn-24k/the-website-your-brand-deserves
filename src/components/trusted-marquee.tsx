"use client";

import React from "react";

export function TrustedMarquee() {
  const brands = [
    { name: "Stripe", style: "font-serif italic font-bold tracking-tight text-xl" },
    { name: "Vercel", style: "font-sans font-black tracking-widest uppercase text-base" },
    { name: "Linear", style: "font-sans font-medium tracking-tight text-lg" },
    { name: "Notion", style: "font-serif font-semibold tracking-normal text-xl" },
    { name: "Figma", style: "font-sans font-bold tracking-tight text-xl" },
    { name: "OpenAI", style: "font-mono font-bold tracking-wider text-base" },
    { name: "Supabase", style: "font-sans font-bold tracking-tighter text-lg" },
    { name: "Raycast", style: "font-mono font-medium tracking-tight text-base" },
  ];

  return (
    <section className="relative py-12 border-y border-white/[0.05] bg-[#030303]/90 overflow-hidden select-none">
      <div className="max-w-6xl mx-auto px-4 mb-6 text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-mono">
          Trusted by the teams behind
        </span>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <div className="flex shrink-0 items-center justify-around gap-12 sm:gap-20 animate-marquee py-2">
          {brands.concat(brands).map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300 cursor-default group"
            >
              <span className={`${brand.style} text-neutral-400 group-hover:text-neutral-100 transition-colors`}>
                {brand.name}
              </span>
            </div>
          ))}
        </div>
        <div
          aria-hidden="true"
          className="flex shrink-0 items-center justify-around gap-12 sm:gap-20 animate-marquee py-2"
        >
          {brands.concat(brands).map((brand, i) => (
            <div
              key={`dupe-${brand.name}-${i}`}
              className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300 cursor-default group"
            >
              <span className={`${brand.style} text-neutral-400 group-hover:text-neutral-100 transition-colors`}>
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
