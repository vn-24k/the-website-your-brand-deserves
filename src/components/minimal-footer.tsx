"use client";

import React, { useEffect, useState } from "react";
import { Sparkles, ArrowUpRight, Github } from "lucide-react";
import { soundFX } from "./sound-fx";

export function MinimalFooter() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "UTC",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }) + " UTC"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-[#020203] border-t border-white/[0.06] text-neutral-400 py-16 text-xs select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand info */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-white/[0.08] border border-white/[0.12] flex items-center justify-center text-teal-300">
                  <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                </div>
                <span className="font-semibold tracking-wider text-sm text-neutral-100">
                  AETHER STUDIO
                </span>
              </div>
              <p className="text-neutral-500 max-w-sm leading-relaxed text-xs">
                Autonomous web design & creative engineering engine. Bringing mathematical 1:1 fidelity,
                120 FPS kinetic motion, and Awwwards-tier craftsmanship to ambitious brands.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-[11px] font-mono text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational • {time || "00:00:00 UTC"}</span>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block mb-3 font-semibold">
                Architecture
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#capabilities" className="hover:text-white transition-colors">
                    Capabilities
                  </a>
                </li>
                <li>
                  <a href="#showcase" className="hover:text-white transition-colors">
                    Taskora Workflow
                  </a>
                </li>
                <li>
                  <a href="#showcase" className="hover:text-white transition-colors">
                    Vanguard Wealth
                  </a>
                </li>
                <li>
                  <a href="#arsenal" className="hover:text-white transition-colors">
                    42 GitHub Repos
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block mb-3 font-semibold">
                Ecosystem
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="https://github.com/vn-24k" target="_blank" rel="noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                    <span>GitHub vn-24k</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="https://21st.dev" target="_blank" rel="noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                    <span>21st.dev Kit</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="https://uiverse.io" target="_blank" rel="noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                    <span>Uiverse Galaxy</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="https://vercel.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                    <span>Vercel Edge</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block mb-3 font-semibold">
                Legal & Security
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security Architecture
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Zero-Knowledge IP
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400 font-mono">
          <div>
            © {new Date().getFullYear()} AETHER STUDIO • Inspired by "The Website Your Brand Deserves".
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-neutral-400">Crafted with React 19 • Vite 6 • Tailwind v4</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
