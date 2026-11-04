"use client";

import React, { useState } from "react";
import { BrowserTopBar } from "./components/browser-top-bar";
import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { TrustedMarquee } from "./components/trusted-marquee";
import { CapabilitiesSplit } from "./components/capabilities-split";
import { UiverseShowcase } from "./components/uiverse-showcase";
import { ArsenalShowcase } from "./components/arsenal-showcase";
import { PricingSection } from "./components/pricing-section";
import { FAQAccordion } from "./components/faq-accordion";
import { ClimaxCTA } from "./components/climax-cta";
import { MinimalFooter } from "./components/minimal-footer";
import { SmoothCursor } from "./components/smooth-cursor";
import { InteractiveDock } from "./components/interactive-dock";
import { soundFX } from "./components/sound-fx";

export default function App() {
  const [isAudioActive, setIsAudioActive] = useState(false);

  const handleToggleAudio = () => {
    const active = soundFX.toggleAmbient();
    setIsAudioActive(active);
  };

  return (
    <div className="min-h-screen bg-[#030303] text-neutral-100 font-sans antialiased selection:bg-teal-500/20 selection:text-teal-200 relative pb-16">
      {/* 21st.dev Physics-Based Custom Cursor */}
      <SmoothCursor color="#ffffff" glowColor="rgba(45, 212, 191, 0.4)" />

      {/* Safari / Arc Top Frame */}
      <BrowserTopBar
        url="branddeserves.design"
        isAudioActive={isAudioActive}
        onToggleAudio={handleToggleAudio}
      />

      {/* Sticky Floating Navbar */}
      <Navbar
        isAudioActive={isAudioActive}
        onToggleAudio={handleToggleAudio}
      />

      <main>
        {/* Hero Section 1:1 with Reference Image + 21st Magnetic & Shimmer Buttons */}
        <HeroSection />

        {/* Monochrome Infinite Marquee */}
        <TrustedMarquee />

        {/* Capabilities Matrix with Interactive Live Mockups (Taskora & Vanguard) wrapped in 21st TiltCard */}
        <div id="showcase">
          <CapabilitiesSplit />
        </div>

        {/* Real Authentic Uiverse Components Showcase */}
        <div id="uiverse">
          <UiverseShowcase />
        </div>

        {/* 42 Curated Repositories Laboratory */}
        <ArsenalShowcase />

        {/* Transparent Investment / Pricing with 21st TiltCard and ShimmerButton */}
        <PricingSection />

        {/* Interactive FAQ Accordion */}
        <FAQAccordion />

        {/* Monumental Climax CTA: "You dream it. We ship it." */}
        <ClimaxCTA />
      </main>

      {/* 21st.dev Interactive macOS Floating Dock */}
      <InteractiveDock />

      {/* Minimal Editorial Footer */}
      <MinimalFooter />
    </div>
  );
}
