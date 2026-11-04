"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, Sparkles, Send, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { soundFX } from "./sound-fx";

export function ClimaxCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    soundFX.playSuccessChime();
    setSubmitted(true);
  };

  return (
    <section id="climax-cta" className="relative py-28 sm:py-36 bg-[#030303] text-neutral-100 overflow-hidden border-t border-white/[0.08]">
      {/* Aerodynamic Glowing Horizon Ribbon Backdrop */}
      <div className="absolute inset-x-0 top-0 h-48 pointer-events-none select-none opacity-80 overflow-hidden">
        <img
          src="/cta_horizon.jpg"
          alt="Aerodynamic Light Horizon"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/60 to-[#030303]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge 1:1 with Reference Image */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs text-neutral-300 font-mono tracking-wider uppercase mb-8 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-teal-400" />
          <span>How It Works</span>
        </div>

        {/* Monumental Headline 1:1 with Reference Image */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-tight">
          <span className="font-editorial italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-teal-100 via-white to-emerald-200">
            You dream it. We ship it.
          </span>
        </h2>

        {/* Subtitle 1:1 with Reference Image */}
        <p className="mt-6 text-sm sm:text-base md:text-lg text-neutral-300/90 max-w-2xl mx-auto leading-relaxed">
          Share your vision. Our AI handles the rest—wireframes, design tokens, interactive shaders, strict code, and edge deployment. All in under 48 hours.
        </p>

        {/* Launch Form or Success Message */}
        <div className="mt-10 max-w-md mx-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 rounded-2xl bg-[#0c0d12] border border-teal-500/40 text-center shadow-[0_0_40px_rgba(45,212,191,0.2)]"
            >
              <div className="w-12 h-12 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-white">Project Brief Received</h4>
              <p className="text-xs text-neutral-400 mt-1">
                Our principal designer is reviewing your request. We will reach out to <strong className="text-white">{email}</strong> within 2 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="relative flex items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email (e.g. founder@brand.com)"
                required
                className="w-full pl-5 pr-36 py-3.5 rounded-full bg-[#0d0e14] border border-white/[0.15] focus:border-teal-400 focus:outline-none text-xs sm:text-sm text-white placeholder-neutral-500 shadow-inner transition-colors"
              />
              <button
                type="submit"
                data-cursor="pointer"
                onMouseEnter={() => soundFX.playHover()}
                className="absolute right-1.5 top-1.5 bottom-1.5 px-5 rounded-full bg-white text-neutral-950 font-semibold text-xs flex items-center gap-1.5 hover:bg-neutral-100 shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all active:scale-95"
              >
                <span>Launch Now</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          <div className="flex items-center justify-center gap-6 text-[11px] text-neutral-500 font-mono mt-5">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>Full IP Transfer</span>
            </span>
            <span>•</span>
            <span>48h Turnaround</span>
            <span>•</span>
            <span>100% Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
}
