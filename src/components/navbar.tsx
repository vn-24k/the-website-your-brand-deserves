"use client";

import React, { useState } from "react";
import { ArrowUpRight, Menu, X, Sparkles, Volume2, VolumeX } from "lucide-react";
import { soundFX } from "./sound-fx";

interface NavbarProps {
  isAudioActive?: boolean;
  onToggleAudio?: () => void;
  onOpenConsultation?: () => void;
}

export function Navbar({
  isAudioActive = false,
  onToggleAudio,
  onOpenConsultation,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Capabilities", href: "#capabilities" },
    { label: "Showcase", href: "#showcase" },
    { label: "Arsenal 42", href: "#arsenal" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-5 pb-2 relative z-40">
      <div className="flex items-center justify-between bg-neutral-900/60 backdrop-blur-2xl border border-white/[0.08] rounded-full px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        {/* Brand Logo */}
        <a
          href="#"
          data-cursor="pointer"
          onMouseEnter={() => soundFX.playHover()}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-full bg-white/[0.08] border border-white/[0.15] flex items-center justify-center text-teal-300 group-hover:scale-105 group-hover:bg-teal-500/10 transition-all duration-300">
            <Sparkles className="w-4 h-4 text-teal-400 group-hover:rotate-12 transition-transform" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold tracking-wider text-sm text-neutral-100 flex items-center gap-1.5">
              AETHER
              <span className="text-[10px] font-mono font-normal uppercase tracking-widest px-1.5 py-0.5 rounded bg-white/[0.06] text-neutral-400 border border-white/[0.04]">
                STUDIO
              </span>
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7 text-[13px] text-neutral-300 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-cursor="pointer"
              onMouseEnter={() => soundFX.playHover()}
              className="hover:text-white transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-teal-400/80 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {onToggleAudio && (
            <button
              onClick={() => {
                soundFX.playClick();
                onToggleAudio();
              }}
              data-cursor="pointer"
              className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-neutral-300 border border-white/[0.06] transition-all"
              title="Toggle Ambient Audio"
            >
              {isAudioActive ? (
                <Volume2 className="w-4 h-4 text-teal-400" />
              ) : (
                <VolumeX className="w-4 h-4 text-neutral-400" />
              )}
            </button>
          )}

          <button
            onClick={() => {
              soundFX.playClick();
              if (onOpenConsultation) onOpenConsultation();
              else {
                const el = document.getElementById("pricing");
                el?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            data-cursor="pointer"
            onMouseEnter={() => soundFX.playHover()}
            className="relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-neutral-900 bg-white hover:bg-neutral-100 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_25px_rgba(255,255,255,0.45)] group active:scale-95"
          >
            <span>Get Started</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => {
              soundFX.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            data-cursor="pointer"
            className="md:hidden p-2 rounded-full bg-white/[0.05] text-neutral-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 bg-neutral-950/95 backdrop-blur-2xl border border-white/[0.1] rounded-2xl p-5 flex flex-col gap-4 text-sm shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-300 hover:text-white py-1 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              soundFX.playClick();
              setMobileMenuOpen(false);
              const el = document.getElementById("pricing");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full mt-2 py-2.5 rounded-full bg-white text-neutral-900 font-semibold text-xs text-center flex items-center justify-center gap-1"
          >
            <span>Launch Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </nav>
  );
}
