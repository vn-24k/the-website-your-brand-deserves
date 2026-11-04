"use client";

import React from "react";
import { Lock, Sparkles, Volume2, VolumeX } from "lucide-react";
import { soundFX } from "./sound-fx";

interface BrowserTopBarProps {
  url?: string;
  isAudioActive?: boolean;
  onToggleAudio?: () => void;
}

export function BrowserTopBar({
  url = "branddeserves.design",
  isAudioActive = false,
  onToggleAudio,
}: BrowserTopBarProps) {
  return (
    <div className="w-full bg-[#0a0a0c]/90 backdrop-blur-md border-b border-white/[0.08] px-4 py-2.5 flex items-center justify-between text-xs text-neutral-400 select-none z-50 sticky top-0">
      {/* Window Controls */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1.5 mr-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/90 border border-black/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/90 border border-black/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/90 border border-black/20" />
        </div>
        <div className="hidden sm:flex items-center gap-1 text-[11px] bg-white/[0.04] px-2.5 py-0.5 rounded-md border border-white/[0.05] text-neutral-300">
          <Sparkles className="w-3 h-3 text-teal-400" />
          <span>AETHER ARC ARCHITECTURE</span>
        </div>
      </div>

      {/* Centered URL Pill */}
      <div className="flex items-center gap-2 bg-[#121216] px-4 py-1 rounded-full border border-white/[0.08] shadow-inner text-neutral-300 font-mono text-[11px] max-w-sm w-full justify-center">
        <Lock className="w-3 h-3 text-teal-400/80" />
        <span className="text-neutral-500">https://</span>
        <span className="text-neutral-100 font-medium">{url}</span>
        <span className="ml-1 inline-flex items-center px-1.5 py-0.2 rounded text-[9px] bg-teal-500/10 text-teal-300 border border-teal-500/20">
          SECURE
        </span>
      </div>

      {/* Audio Ambient Pill */}
      <div className="flex items-center gap-3">
        {onToggleAudio && (
          <button
            onClick={() => {
              soundFX.playClick();
              onToggleAudio();
            }}
            data-cursor="pointer"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-neutral-300 text-[11px] border border-white/[0.06] transition-all"
            title="Toggle Ethereal Soundscape"
          >
            {isAudioActive ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-teal-400 animate-pulse" />
                <span className="hidden sm:inline text-teal-300">Soundscape On</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-neutral-400" />
                <span className="hidden sm:inline">Audio Muted</span>
              </>
            )}
          </button>
        )}
        <div className="hidden md:flex items-center gap-1.5 text-[11px] text-neutral-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>60 FPS</span>
        </div>
      </div>
    </div>
  );
}
