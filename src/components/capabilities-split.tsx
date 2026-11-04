"use client";

import React, { useState } from "react";
import { ArrowUpRight, Check, Sparkles, TrendingUp, Cpu, ShieldCheck, Layers, Play, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { soundFX } from "./sound-fx";

export function CapabilitiesSplit() {
  // Interactive state for Mockup 1 (Taskora Workflow)
  const [tasks, setTasks] = useState([
    { id: 1, title: "Autonomous Design Token Sync", completed: true },
    { id: 2, title: "Edge Performance Hydration (<18ms)", completed: true },
    { id: 3, title: "Multivariate A/B Headline Adaptation", completed: false },
    { id: 4, title: "Automatic Lighthouse 100/100 Audit", completed: true },
  ]);

  // Interactive state for Mockup 2 (Wealth Roadmap)
  const [activeStep, setActiveStep] = useState(2);

  const toggleTask = (id: number) => {
    soundFX.playToggle(true);
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <section id="capabilities" className="relative py-28 bg-[#030303] text-neutral-100 overflow-hidden">
      {/* Subtle radial ambient glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-28">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-neutral-400 font-mono uppercase tracking-wider mb-5">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-[1.12]">
            <span className="font-sans font-semibold">Pro features. </span>
            <span className="font-editorial italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-neutral-100 to-emerald-200">
              Zero complexity.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 max-w-xl mx-auto">
            Everything your high-growth company needs: mathematical layout precision,
            kinetic motion, and autonomous intelligence without developer overhead.
          </p>
        </div>

        {/* Feature Split 1: Designed to convert. Built to perform. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-28 lg:mb-36">
          {/* Left Text Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-[11px] font-mono tracking-widest text-teal-400 uppercase px-2.5 py-1 rounded bg-teal-500/10 border border-teal-500/20 mb-4">
              Conversion Engine
            </span>

            <h3 className="text-2xl sm:text-4xl font-normal tracking-tight text-white leading-tight">
              <span className="font-sans font-semibold block">Designed to convert.</span>
              <span className="font-editorial italic font-normal text-neutral-300 block mt-1">
                Built to perform.
              </span>
            </h3>

            <p className="mt-5 text-sm sm:text-base text-neutral-400 leading-relaxed">
              Every pixel is intentional. Our AI engine studies behavioral patterns across
              thousands of top-tier venture-backed websites—then constructs yours to outperform them all in conversions, load time, and visual authority.
            </p>

            {/* Performance Metrics Badges */}
            <div className="grid grid-cols-3 gap-3 w-full my-7 py-5 border-y border-white/[0.08]">
              <div>
                <span className="block text-xl sm:text-2xl font-bold font-mono text-white tracking-tight">
                  +340%
                </span>
                <span className="text-[11px] text-neutral-400 leading-none">
                  Conversion Lift
                </span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-bold font-mono text-teal-400 tracking-tight">
                  &lt;18ms
                </span>
                <span className="text-[11px] text-neutral-400 leading-none">
                  Edge Latency
                </span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-bold font-mono text-emerald-400 tracking-tight">
                  100/100
                </span>
                <span className="text-[11px] text-neutral-400 leading-none">
                  Lighthouse Score
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                soundFX.playClick();
                document.getElementById("showcase")?.scrollIntoView({ behavior: "smooth" });
              }}
              data-cursor="pointer"
              onMouseEnter={() => soundFX.playHover()}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 transition-all duration-200 group"
            >
              <span>Explore Architecture</span>
              <ArrowUpRight className="w-4 h-4 text-teal-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Right Live Interactive Mockup: Taskora Browser */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl sm:rounded-3xl border border-white/[0.15] bg-[#0c0d12] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden group">
              {/* Browser Window Header Bar */}
              <div className="px-4 py-3 bg-[#13141a] border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 mr-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="font-semibold text-xs tracking-wide text-neutral-200">
                    Taskora.io
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-neutral-400">
                  <span className="hidden sm:inline">Home</span>
                  <span className="hidden sm:inline text-white">Features</span>
                  <span className="hidden sm:inline">Pricing</span>
                  <span className="px-2 py-0.5 rounded-full bg-white text-neutral-950 font-medium text-[10px]">
                    Sign In
                  </span>
                </div>
              </div>

              {/* Inner Mockup Body with 3D Glossy Graphic Backdrop */}
              <div className="relative p-6 sm:p-9 min-h-[360px] flex flex-col justify-between overflow-hidden">
                {/* 3D Liquid Ribbon Graphic */}
                <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen">
                  <img
                    src="/mockup-workflow.jpg"
                    alt="Liquid 3D Ribbon Background"
                    className="w-full h-full object-cover scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12] via-transparent to-transparent" />
                </div>

                <div className="relative z-10">
                  {/* Team badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-[11px] text-blue-300 font-medium mb-4 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    <span>Over 50,000 teams use our platform</span>
                  </div>

                  <h4 className="text-2xl sm:text-3xl md:text-4xl font-normal text-white tracking-tight leading-tight max-w-md">
                    <span className="font-sans font-semibold">Simplify Your </span>
                    <span className="font-editorial italic font-normal text-blue-200">
                      Workflow.
                    </span>
                    <span className="block font-sans font-semibold">Stay Focused.</span>
                  </h4>

                  <p className="mt-3 text-xs sm:text-sm text-neutral-300 max-w-sm leading-relaxed">
                    Taskora helps teams manage projects, autonomous tasks, and sprint deadlines with crystalline clarity.
                  </p>
                </div>

                {/* Interactive Task Switches Overlay */}
                <div className="relative z-10 mt-6 pt-4 border-t border-white/[0.08] bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/[0.05]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-2.5">
                    Live Micro-Interactions (Click to Toggle)
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {tasks.map(t => (
                      <button
                        key={t.id}
                        onClick={() => toggleTask(t.id)}
                        data-cursor="pointer"
                        className={`flex items-center justify-between p-2 rounded-lg text-left text-xs transition-all ${
                          t.completed
                            ? "bg-teal-500/10 border border-teal-500/30 text-teal-200"
                            : "bg-white/[0.03] border border-white/[0.06] text-neutral-400 hover:bg-white/[0.06]"
                        }`}
                      >
                        <span className="truncate pr-2">{t.title}</span>
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ${
                            t.completed ? "bg-teal-400 text-neutral-950" : "border border-neutral-600"
                          }`}
                        >
                          {t.completed && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Split 2 (Reverse): It gets smarter. Automatically. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Live Interactive Mockup: Vanguard Wealth Card */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative rounded-2xl sm:rounded-3xl border border-white/[0.15] bg-[#0c0d12] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden group">
              {/* Browser Header Bar */}
              <div className="px-4 py-3 bg-[#13141a] border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 mr-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="font-semibold text-xs tracking-wide text-neutral-200">
                    Vanguard.wealth
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-neutral-400">
                  <span className="hidden sm:inline">Portfolio</span>
                  <span className="hidden sm:inline">Advisors</span>
                  <span className="px-2.5 py-1 rounded-full bg-teal-400 text-neutral-950 font-semibold text-[10px]">
                    Get Started
                  </span>
                </div>
              </div>

              {/* Inner Body with Glowing Laser Arc Backdrop */}
              <div className="relative p-6 sm:p-9 min-h-[360px] flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-45 mix-blend-screen">
                  <img
                    src="/mockup-wealth.jpg"
                    alt="Chromatic Laser Arc"
                    className="w-full h-full object-cover scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12] via-transparent to-transparent" />
                </div>

                <div className="relative z-10">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block mb-2">
                    Next-Gen Budget Tracking
                  </span>

                  <h4 className="text-2xl sm:text-3xl md:text-4xl font-normal text-white tracking-tight leading-tight max-w-md">
                    <span className="font-sans font-semibold">Build Wealth That </span>
                    <span className="block font-sans font-semibold">Lasts Generations</span>
                  </h4>

                  <p className="mt-3 text-xs sm:text-sm text-neutral-300 max-w-sm leading-relaxed">
                    Transform today's earnings into tomorrow's family fortune with proven wealth-building strategies.
                  </p>

                  <div className="mt-5">
                    <button
                      onClick={() => soundFX.playClick()}
                      data-cursor="pointer"
                      className="px-4 py-2 rounded-full bg-white text-neutral-950 font-semibold text-xs shadow-lg hover:bg-neutral-100 transition-colors"
                    >
                      Start Building Wealth
                    </button>
                  </div>
                </div>

                {/* Interactive 4-Step Roadmap */}
                <div className="relative z-10 mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-white/[0.08]">
                  {[
                    { step: 1, title: "Create Account", subtitle: "Instant 2-minute setup" },
                    { step: 2, title: "Connect Vault", subtitle: "Zero-knowledge encryption" },
                    { step: 3, title: "Set Targets", subtitle: "Tailored risk profiles" },
                    { step: 4, title: "Compound", subtitle: "Automated real-time yield" },
                  ].map(s => (
                    <button
                      key={s.step}
                      onClick={() => {
                        soundFX.playClick();
                        setActiveStep(s.step);
                      }}
                      data-cursor="pointer"
                      className={`p-2.5 rounded-xl text-left transition-all ${
                        activeStep === s.step
                          ? "bg-white/[0.12] border border-white/20 shadow-md"
                          : "bg-white/[0.02] border border-white/[0.04] opacity-70 hover:opacity-100"
                      }`}
                    >
                      <span className="text-[10px] font-mono text-teal-400 block font-semibold">
                        0{s.step}.
                      </span>
                      <strong className="text-xs text-white block mt-0.5 truncate">
                        {s.title}
                      </strong>
                      <span className="text-[10px] text-neutral-400 block leading-tight mt-0.5 truncate">
                        {s.subtitle}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-5 flex flex-col items-start order-1 lg:order-2">
            <span className="text-[11px] font-mono tracking-widest text-emerald-400 uppercase px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 mb-4">
              Realtime Intelligence
            </span>

            <h3 className="text-2xl sm:text-4xl font-normal tracking-tight text-white leading-tight">
              <span className="font-sans font-semibold block">It gets smarter.</span>
              <span className="font-editorial italic font-normal text-emerald-200 block mt-1">
                Automatically.
              </span>
            </h3>

            <p className="mt-5 text-sm sm:text-base text-neutral-400 leading-relaxed">
              Your site evolves on its own. Our neural models monitor every click, scroll trajectory,
              and conversion micro-drop—then automatically refine headlines, layout density, and CTA placements in real time.
            </p>

            <ul className="mt-6 space-y-3 text-xs sm:text-sm text-neutral-300">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Zero manual updates, maintenance, or technical debt</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Dynamic responsive squircle geometry matching Apple guidelines</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Autonomous edge cache invalidation across 300+ global nodes</span>
              </li>
            </ul>

            <div className="mt-8">
              <button
                onClick={() => {
                  soundFX.playClick();
                  document.getElementById("arsenal")?.scrollIntoView({ behavior: "smooth" });
                }}
                data-cursor="pointer"
                onMouseEnter={() => soundFX.playHover()}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 transition-all duration-200 group"
              >
                <span>See how it works</span>
                <ArrowUpRight className="w-4 h-4 text-teal-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
