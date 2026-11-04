"use client";

import React, { useState } from "react";
import { BrowserTopBar } from "./components/browser-top-bar";
import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { TrustedMarquee } from "./components/trusted-marquee";
import { CapabilitiesSplit } from "./components/capabilities-split";
import { ArsenalShowcase } from "./components/arsenal-showcase";
import { PricingSection } from "./components/pricing-section";
import { FAQAccordion } from "./components/faq-accordion";
import { ClimaxCTA } from "./components/climax-cta";
import { MinimalFooter } from "./components/minimal-footer";
import { SmoothCursor } from "./components/smooth-cursor";
import { soundFX } from "./components/sound-fx";

export default function App() {
  const [isAudioActive, setIsAudioActive] = useState(false);

  const handleToggleAudio = () => {
    const active = soundFX.toggleAmbient();
    setIsAudioActive(active);
  };

  return (
    <div className="min-h-screen bg-[#030303] text-neutral-100 font-sans antialiased selection:bg-teal-500/20 selection:text-teal-200">
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
        {/* Hero Section 1:1 with Reference Image */}
        <HeroSection />

        {/* Monochrome Infinite Marquee */}
        <TrustedMarquee />

        {/* Capabilities Matrix with Interactive Live Mockups (Taskora & Vanguard) */}
        <div id="showcase">
          <CapabilitiesSplit />
        </div>

        {/* 42 Repositories & Uiverse Interactive Laboratory */}
        <ArsenalShowcase />

        {/* Transparent Investment / Pricing */}
        <PricingSection />

        {/* Interactive FAQ Accordion */}
        <FAQAccordion />

        {/* Monumental Climax CTA: "You dream it. We ship it." */}
        <ClimaxCTA />
      </main>

      {/* Minimal Editorial Footer */}
      <MinimalFooter />
    </div>
  );
}
