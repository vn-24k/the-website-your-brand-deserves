"use client";

import React, { useState } from "react";
import { Sparkles, Terminal, Code2, Layers, Cpu, ExternalLink, Play, Check, Eye } from "lucide-react";
import { soundFX } from "./sound-fx";

export function ArsenalShowcase() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedDemo, setSelectedDemo] = useState<string | null>("wobble");

  // Interactive state for micro-components
  const [switchActive, setSwitchActive] = useState(true);
  const [sliderVal, setSliderVal] = useState(72);
  const [asciiText, setAsciiText] = useState("AETHER");

  const categories = [
    { id: "all", label: "All 42 Repos" },
    { id: "3d", label: "🌀 3D Shaders & WebGL" },
    { id: "scroll", label: "🎬 Inertia & Physics" },
    { id: "uiverse", label: "⚡ Uiverse & Micro-Interactions" },
    { id: "typography", label: "🔤 Kinetic Typography" },
    { id: "primitives", label: "💎 21st.dev Primitives" },
  ];

  const repos = [
    {
      id: "wobble",
      name: "wobble-scroll",
      cat: "3d",
      stars: "1.2k",
      desc: "Helical 3D Three.js mesh with GLSL sine-wave deformation reactive to inertia velocity.",
      badge: "WebGL / Three.js",
      tags: ["GLSL Shader", "GSAP ScrollTrigger", "Physics"],
    },
    {
      id: "shader-trans",
      name: "Shader-Transition",
      cat: "3d",
      stars: "890",
      desc: "Perlin noise mask with chromatic aberration liquid dissolution between frame states.",
      badge: "Vite / GLSL",
      tags: ["Noise Mask", "Displacement", "Post-Processing"],
    },
    {
      id: "uiverse-tactile",
      name: "Uiverse Galaxy Elements",
      cat: "uiverse",
      stars: "4.8k",
      desc: "Curated collection of 1,200+ raw CSS/HTML industrial buttons, tactile switches and neon toggles.",
      badge: "Uiverse.io Native",
      tags: ["Tactile Glass", "Haptic Click", "Neumorphic"],
    },
    {
      id: "werowallet",
      name: "WeroWallet-Scroll",
      cat: "scroll",
      stars: "740",
      desc: "Card stacking physics with vertical inertia depth and dynamic squircle corner morphing.",
      badge: "Framer Motion 12",
      tags: ["Card Stacking", "Inertia", "Squircle"],
    },
    {
      id: "smooth-cursor",
      name: "21st SmoothCursor",
      cat: "primitives",
      stars: "2.1k",
      desc: "Spring-physics trailing cursor with magnetic attraction to buttons and zero React render lag.",
      badge: "21st-landing-kit",
      tags: ["useSpring", "Pointer Physics", "Magnetic"],
    },
    {
      id: "ascii-reveal",
      name: "ascii-reveal",
      cat: "typography",
      stars: "610",
      desc: "Matrix-style decrypted character cascade revealing bold editorial headlines on view.",
      badge: "Cyber Kinetic",
      tags: ["Canvas ASCII", "Decryption", "Monospace"],
    },
    {
      id: "cylinder-gallery",
      name: "cylinder-gallery",
      cat: "3d",
      stars: "940",
      desc: "360-degree cylindrical projection carousel rotating synchronously with pointer trajectory.",
      badge: "WebGL 3D",
      tags: ["Cylinder Projection", "Raycaster", "Interactive"],
    },
    {
      id: "dive-in",
      name: "Dive-in-effect",
      cat: "scroll",
      stars: "1.5k",
      desc: "Infinite z-axis zoom camera tunnel through layered typography and nested UI cards.",
      badge: "Camera Tunnel",
      tags: ["Z-Depth", "Zoom Tunnel", "Lenis Smooth"],
    },
  ];

  const filteredRepos =
    activeCategory === "all"
      ? repos
      : repos.filter(r => r.cat === activeCategory);

  return (
    <section id="arsenal" className="relative py-28 bg-[#050508] border-t border-white/[0.08] text-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-teal-400 font-mono uppercase tracking-wider mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>The Local Arsenal • 42 Production Repositories</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
              Powered by 42 Curated Engines
            </h2>
            <p className="mt-3 text-neutral-400 text-sm sm:text-base max-w-xl">
              We disassembled the world's most sophisticated open-source creative repositories,
              refactoring their core algorithms into this zero-latency production architecture.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-neutral-300">
              <span className="text-teal-400 font-bold">42</span> Repositories Synced
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-neutral-300">
              <span className="text-emerald-400 font-bold">1,200+</span> Uiverse Snippets
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map(c => (
            <button
              key={c.id}
              onClick={() => {
                soundFX.playClick();
                setActiveCategory(c.id);
              }}
              data-cursor="pointer"
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                activeCategory === c.id
                  ? "bg-white text-neutral-950 font-semibold shadow-md"
                  : "bg-white/[0.03] text-neutral-400 hover:text-white border border-white/[0.06] hover:bg-white/[0.06]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Interactive Lab Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Repos List */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredRepos.map(repo => (
              <div
                key={repo.id}
                onClick={() => {
                  soundFX.playClick();
                  setSelectedDemo(repo.id);
                }}
                data-cursor="pointer"
                onMouseEnter={() => soundFX.playHover()}
                className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer text-left relative group ${
                  selectedDemo === repo.id
                    ? "bg-white/[0.08] border-teal-400/60 shadow-[0_0_25px_rgba(45,212,191,0.15)]"
                    : "bg-white/[0.02] border-white/[0.06] hover:border-white/20 hover:bg-white/[0.05]"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20">
                    {repo.badge}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    ★ {repo.stars}
                  </span>
                </div>

                <h4 className="font-semibold text-base text-white tracking-tight group-hover:text-teal-300 transition-colors">
                  {repo.name}
                </h4>

                <p className="mt-2 text-xs text-neutral-400 leading-relaxed line-clamp-2">
                  {repo.desc}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {repo.tags.map(t => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-neutral-400 border border-white/[0.04]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Live Interactive Sandbox Preview */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-3xl border border-white/[0.12] bg-[#0c0d12] p-6 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
                  <span className="text-xs font-mono font-medium text-neutral-200 uppercase tracking-wider">
                    Interactive Sandbox
                  </span>
                </div>
                <span className="text-[10px] font-mono text-neutral-400">
                  Target: {selectedDemo || "Engine"}
                </span>
              </div>

              {/* Sandbox Canvas / Controls Area */}
              <div className="min-h-[280px] rounded-2xl bg-black/60 border border-white/[0.06] p-5 flex flex-col justify-between relative overflow-hidden">
                {/* Uiverse / Haptic Interactive Switch Demo */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <strong className="text-xs text-white block">Teenage Eng. Haptic Switch</strong>
                      <span className="text-[10px] text-neutral-400">Tactile Micro-Switch from Uiverse</span>
                    </div>
                    <button
                      onClick={() => {
                        const next = !switchActive;
                        soundFX.playToggle(next);
                        setSwitchActive(next);
                      }}
                      data-cursor="pointer"
                      className={`w-12 h-6 rounded-full transition-colors p-0.5 duration-300 relative border ${
                        switchActive
                          ? "bg-teal-500 border-teal-400"
                          : "bg-neutral-800 border-neutral-700"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300 ${
                          switchActive ? "translate-x-6" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Precision slider from Kokonut UI */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-neutral-400 text-[11px]">Dynamic GLSL Amplitude</span>
                      <span className="text-teal-400 font-mono text-[11px] font-bold">{sliderVal}%</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={sliderVal}
                      onChange={(e) => {
                        soundFX.playHover();
                        setSliderVal(Number(e.target.value));
                      }}
                      data-cursor="pointer"
                      className="w-full accent-teal-400 cursor-pointer bg-neutral-800 rounded-lg h-1.5"
                    />
                  </div>

                  {/* ASCII Text Input simulation */}
                  <div className="pt-2">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-1.5">
                      ASCII Kinetic Stream
                    </span>
                    <div className="p-2.5 rounded-lg bg-black border border-white/[0.08] font-mono text-xs text-emerald-400 flex items-center justify-between">
                      <span>&gt; {asciiText}_</span>
                      <span className="text-[10px] text-neutral-400">120 FPS</span>
                    </div>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                  <span>Engine: ACTIVE</span>
                  <button
                    onClick={() => {
                      soundFX.playSuccessChime();
                      setAsciiText(prev => prev === "AETHER" ? "QUANTUM" : "AETHER");
                    }}
                    data-cursor="pointer"
                    className="text-teal-400 hover:underline flex items-center gap-1"
                  >
                    <span>Run Mutation</span>
                    <Play className="w-3 h-3 fill-current" />
                  </button>
                </div>
              </div>

              {/* Architecture Blueprint Note */}
              <div className="mt-4 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-[11px] text-neutral-400 leading-relaxed">
                <span className="text-white font-medium block mb-0.5">Automated Asset Optimization</span>
                Every shader and particle canvas is tree-shaken and runs on dedicated OffscreenCanvas threads when supported.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
