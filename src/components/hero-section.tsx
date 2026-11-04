"use client";

import React, { useState } from "react";
import { ArrowUpRight, Play, Sparkles, X, CheckCircle, Zap, Shield, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { soundFX } from "./sound-fx";
import { FireflyCanvas } from "./firefly-canvas";

interface HeroSectionProps {
  onGetStarted?: () => void;
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  const [showFilmModal, setShowFilmModal] = useState(false);

  const handleOpenFilm = () => {
    soundFX.playClick();
    soundFX.playSuccessChime();
    setShowFilmModal(true);
  };

  const handleCloseFilm = () => {
    soundFX.playClick();
    setShowFilmModal(false);
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-12 pb-16 overflow-hidden bg-[#030303]">
      {/* Bioluminescent Botanical Image Backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src="/hero-botanical-bg.jpg"
          alt="Bioluminescent Botanical Garden"
          className="w-full h-full object-cover object-bottom opacity-85 scale-105 transform motion-safe:transition-transform duration-1000"
        />
        {/* Cinematic gradient vignette to seamlessly dissolve into pure black #030303 */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-transparent to-[#030303]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030303] to-transparent" />
      </div>

      {/* Floating Fireflies and Dandelion Embers */}
      <FireflyCanvas particleCount={45} />

      {/* Central Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center my-auto">
        {/* Top Feature Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.12] backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.6)] mb-8 hover:border-teal-400/40 transition-colors group cursor-default"
        >
          <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-white text-neutral-950 shadow-sm">
            New
          </span>
          <span className="text-xs text-neutral-300 font-medium tracking-wide flex items-center gap-1.5">
            Introducing AI-powered web design
            <Sparkles className="w-3 h-3 text-teal-400 group-hover:rotate-12 transition-transform" />
          </span>
        </motion.div>

        {/* Monumental Headline 1:1 with Reference Image */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-neutral-100 max-w-4xl mx-auto leading-[1.08]"
        >
          <span className="block font-sans font-semibold text-white drop-shadow-sm">
            The Website Your Brand
          </span>
          <span className="block font-editorial italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-teal-100 via-white to-emerald-200 mt-1 md:mt-2 pb-2">
            Deserves
          </span>
        </motion.h1>

        {/* Subtitle 1:1 with Reference Image */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-sm sm:text-base md:text-lg text-neutral-300/90 max-w-2xl mx-auto leading-relaxed font-normal tracking-wide"
        >
          Stunning design. Blazing performance. Built by AI, refined by experts.
          This is web design, wildly reimagined.
        </motion.p>

        {/* Dual Call-To-Action Buttons 1:1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          {/* Primary CTA */}
          <button
            onClick={() => {
              soundFX.playClick();
              if (onGetStarted) onGetStarted();
              else {
                document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            data-cursor="pointer"
            onMouseEnter={() => soundFX.playHover()}
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-neutral-900/80 backdrop-blur-md border border-white/20 hover:border-teal-400/80 shadow-[0_0_25px_rgba(45,212,191,0.15)] hover:shadow-[0_0_35px_rgba(45,212,191,0.35)] transition-all duration-300 active:scale-95"
          >
            {/* Shimmer light sweep */}
            <span className="absolute inset-0 rounded-full overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            </span>
            <span>Get Started</span>
            <ArrowUpRight className="w-4 h-4 text-teal-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Secondary CTA: Watch the Film */}
          <button
            onClick={handleOpenFilm}
            data-cursor="pointer"
            onMouseEnter={() => soundFX.playHover()}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-medium text-neutral-300 hover:text-white bg-transparent hover:bg-white/[0.05] transition-colors duration-200"
          >
            <span>Watch the Film</span>
            <div className="w-5 h-5 rounded-full bg-white/[0.1] flex items-center justify-center">
              <Play className="w-2.5 h-2.5 fill-current text-white translate-x-[1px]" />
            </div>
          </button>
        </motion.div>
      </div>

      {/* Cinematic Film Modal */}
      <AnimatePresence>
        {showFilmModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-[#0d0d11] border border-white/[0.12] rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseFilm}
                data-cursor="pointer"
                className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-neutral-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-teal-400 text-xs font-mono uppercase tracking-widest mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Visionary Web Documentary • 4K</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-3">
                How We Build The Future of Web Architecture
              </h3>

              <p className="text-sm text-neutral-300 mb-6 leading-relaxed">
                Witness our autonomous multi-model pipeline: combining 42 GitHub state-of-the-art visual engines,
                procedural Web Audio soundscapes, and mathematical 1:1 design fidelity.
              </p>

              {/* Mockup Video Frame */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-950 border border-white/[0.08] flex flex-col items-center justify-center group">
                <img
                  src="/hero-botanical-bg.jpg"
                  alt="Showreel Preview"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-teal-500/20 border border-teal-400/50 flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(45,212,191,0.5)] group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 text-white fill-white translate-x-0.5" />
                  </div>
                  <span className="text-xs font-mono text-neutral-300 bg-black/60 px-3 py-1 rounded-full border border-white/10">
                    Duration: 02:40 • Dolby Audio Active
                  </span>
                </div>
              </div>

              {/* Three Pillars in Modal */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-5 border-t border-white/[0.08]">
                <div className="flex items-start gap-2.5 text-xs text-neutral-300">
                  <Zap className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-medium">120 FPS Motion</strong>
                    <span>Zero layout jank via hardware-accelerated transforms</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-neutral-300">
                  <Cpu className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-medium">Autonomous Intelligence</strong>
                    <span>Trained on 42 award-winning repositories</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-neutral-300">
                  <Shield className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-medium">Production Hardened</strong>
                    <span>TypeScript Strict, Zod schema validation & Vercel Edge</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
