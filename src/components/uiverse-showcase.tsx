"use client";

import React, { useState } from "react";
import { Sparkles, Terminal, Code2, Zap, Layers, Cpu, Check, Play } from "lucide-react";
import { soundFX } from "./sound-fx";
import { TiltCard } from "./tilt-card";
import { MagneticButton } from "./magnetic-button";

export function UiverseShowcase() {
  const [switchChecked, setSwitchChecked] = useState(true);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [cardMarked, setCardMarked] = useState(false);

  return (
    <section className="relative py-28 bg-[#040407] border-t border-white/[0.08] text-neutral-100 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-teal-400 font-mono uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5 text-teal-400" />
            <span>Uiverse.io × Tactical Components</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
            Raw Physical Micro-Interactions from Uiverse
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400">
            Real, pure CSS and HTML widgets imported directly from the local <code className="text-teal-300 font-mono text-xs">/arsenal/uiverse-galaxy</code> directory:
            tactile brutalist buttons, mechanical toggle switches, and sensory feedback.
          </p>
        </div>

        {/* Real Uiverse Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* 1. Uiverse Brutalist Button from 0xnihilism */}
          <TiltCard maxTilt={10} className="h-full">
            <div className="rounded-3xl border border-white/[0.1] bg-[#090a0f] p-6 h-full flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-teal-400 uppercase tracking-widest bg-teal-500/10 px-2.5 py-0.5 rounded border border-teal-500/20">
                    Uiverse // Buttons
                  </span>
                  <span className="text-xs font-mono text-neutral-500">by 0xnihilism</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Tactile Brutalist Button</h3>
                <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                  Heavy border stroke, offset cyan shadow (6px 6px #00a4ef), and physical mouse depression.
                </p>
              </div>

              {/* Live Rendered Component */}
              <div className="py-6 flex flex-col items-center justify-center bg-black/40 rounded-2xl border border-white/[0.04] min-h-[160px]">
                <button
                  onClick={() => {
                    soundFX.playClick();
                    setButtonPressed(!buttonPressed);
                  }}
                  data-cursor="pointer"
                  className="brutalist-button-uiverse group"
                >
                  <div className="ms-logo-uiverse">
                    <div className="ms-sq" style={{ backgroundColor: "#f25022" }} />
                    <div className="ms-sq" style={{ backgroundColor: "#7fba00" }} />
                    <div className="ms-sq" style={{ backgroundColor: "#00a4ef" }} />
                    <div className="ms-sq" style={{ backgroundColor: "#ffb900" }} />
                  </div>
                  <div className="btn-text-uiverse">
                    <span className="text-[10px] text-neutral-400 uppercase block font-mono">Verified Token</span>
                    <span className="text-xs font-bold text-white block">Uiverse Master</span>
                  </div>
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] font-mono text-neutral-500 flex justify-between">
                <span>Offset: 6px solid #00a4ef</span>
                <span className="text-teal-400">ACTIVE</span>
              </div>
            </div>
          </TiltCard>

          {/* 2. Uiverse Haptic Toggle Switch from AIVIIID */}
          <TiltCard maxTilt={10} className="h-full">
            <div className="rounded-3xl border border-white/[0.1] bg-[#090a0f] p-6 h-full flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/20">
                    Uiverse // Switches
                  </span>
                  <span className="text-xs font-mono text-neutral-500">by AIVIIID</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Mechanical Haptic Switch</h3>
                <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                  Smooth dual-disc morphing with physical inertia and tactile Web Audio chime.
                </p>
              </div>

              {/* Live Rendered Component */}
              <div className="py-6 flex flex-col items-center justify-center bg-black/40 rounded-2xl border border-white/[0.04] min-h-[160px]">
                <div className="flex items-center gap-4">
                  <div
                    onClick={() => {
                      const next = !switchChecked;
                      soundFX.playToggle(next);
                      setSwitchChecked(next);
                    }}
                    data-cursor="pointer"
                    className={`w-[84px] h-[34px] rounded-full transition-all duration-300 relative cursor-pointer border ${
                      switchChecked
                        ? "bg-teal-500/90 border-teal-300 shadow-[0_0_20px_rgba(45,212,191,0.5)]"
                        : "bg-neutral-800 border-neutral-700"
                    }`}
                  >
                    <div
                      className={`w-[26px] h-[26px] rounded-full bg-white shadow-md absolute top-[3px] transition-transform duration-300 ${
                        switchChecked ? "translate-x-[52px]" : "translate-x-[4px]"
                      }`}
                    />
                  </div>
                  <span className="text-xs font-mono text-neutral-300">
                    {switchChecked ? "HYPER-DRIVE" : "STANDBY"}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] font-mono text-neutral-500 flex justify-between">
                <span>Radius: 34px continuous</span>
                <span className="text-teal-400">STATE: {switchChecked ? "1" : "0"}</span>
              </div>
            </div>
          </TiltCard>

          {/* 3. Uiverse Card from 0xnihilism */}
          <TiltCard maxTilt={10} className="h-full">
            <div className="rounded-3xl border border-white/[0.1] bg-[#090a0f] p-6 h-full flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                    Uiverse // Cards
                  </span>
                  <span className="text-xs font-mono text-neutral-500">by 0xnihilism</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Tactile Brutalist Card</h3>
                <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                  Monochrome high-contrast card with scanning light gleam and hard tactile shadows.
                </p>
              </div>

              {/* Live Rendered Component */}
              <div className="p-4 bg-black/40 rounded-2xl border border-white/[0.04] min-h-[160px] flex flex-col justify-between">
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                  <span className="text-xs font-black uppercase text-teal-300 font-mono">
                    AUTONOMOUS SYSTEM
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                </div>
                <p className="text-[11px] text-neutral-300 my-3 leading-relaxed">
                  Realtime edge validation: zero hydration mismatch and 120 FPS continuous motion.
                </p>
                <button
                  onClick={() => {
                    soundFX.playSuccessChime();
                    setCardMarked(!cardMarked);
                  }}
                  data-cursor="pointer"
                  className={`w-full py-2 rounded-lg text-xs font-bold uppercase transition-all duration-200 border ${
                    cardMarked
                      ? "bg-teal-400 text-neutral-950 border-teal-300 shadow-[0_0_15px_rgba(45,212,191,0.5)]"
                      : "bg-white text-neutral-950 border-white hover:bg-neutral-200"
                  }`}
                >
                  {cardMarked ? "✓ Component Verified" : "Execute Test"}
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] font-mono text-neutral-500 flex justify-between">
                <span>Scanline: CSS Linear Gradient</span>
                <span className="text-teal-400">100% NATIVE</span>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>

      <style>{`
        .brutalist-button-uiverse {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 190px;
          height: 54px;
          background-color: #0c0d12;
          color: #fff;
          border: 2px solid rgba(255, 255, 255, 0.4);
          outline: 2px solid #000;
          box-shadow: 5px 5px 0 #00a4ef;
          transition: all 0.15s ease-out;
          padding: 0 14px;
          border-radius: 8px;
          position: relative;
          overflow: hidden;
        }
        .brutalist-button-uiverse:hover {
          transform: translate(-2px, -2px);
          box-shadow: 7px 7px 0 #00a4ef;
          border-color: #fff;
        }
        .brutalist-button-uiverse:active {
          transform: translate(3px, 3px);
          box-shadow: 1px 1px 0 #00a4ef;
        }
        .ms-logo-uiverse {
          display: grid;
          grid-template-columns: repeat(2, 8px);
          gap: 3px;
        }
        .ms-sq {
          width: 8px;
          height: 8px;
        }
      `}</style>
    </section>
  );
}
