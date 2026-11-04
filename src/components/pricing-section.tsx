"use client";

import React, { useState } from "react";
import { Check, Sparkles, ArrowUpRight, Zap, Shield } from "lucide-react";
import { soundFX } from "./sound-fx";

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: "starter",
      name: "Founder",
      badge: "Fast Launch",
      priceMonthly: 2400,
      priceAnnual: 1920,
      desc: "For stealth startups and founders launching an iconic flagship presence.",
      features: [
        "Single-page Awwwards-tier landing page",
        "1:1 Reference visual fidelity & bespoke typography",
        "Bioluminescent canvas & custom particle physics",
        "42 Repos kinetic motion & smooth cursor",
        "Vercel Edge 100/100 Lighthouse deployment",
        "48-hour delivery guarantee",
      ],
      popular: false,
      cta: "Launch Starter",
    },
    {
      id: "flagship",
      name: "Flagship Studio",
      badge: "Most Requested",
      priceMonthly: 4800,
      priceAnnual: 3840,
      desc: "Our full autonomous design & code engine with continuous real-time neural optimization.",
      features: [
        "Complete multi-page web architecture",
        "Interactive 3D WebGL shaders & procedural Web Audio",
        "Uiverse tactile micro-interactions & haptic feedback",
        "Real-time multivariate A/B headline engine",
        "Full GitHub repository ownership & clean TypeScript",
        "Priority VIP engineer on Slack / WhatsApp Bridge",
        "24-hour turnaround on revisions",
      ],
      popular: true,
      cta: "Claim Studio Spot",
    },
    {
      id: "enterprise",
      name: "Venture Scale",
      badge: "Custom Systems",
      priceMonthly: 9600,
      priceAnnual: 7680,
      desc: "For Series A+ ventures needing comprehensive brand design systems and custom 3D web apps.",
      features: [
        "Bespoke 3D Three.js interactive product visualizer",
        "Custom design tokens & Figma-to-Code automated sync",
        "Dedicated infrastructure on private Vercel Enterprise",
        "Quarterly brand evolution & new visual experiments",
        "24/7 dedicated engineering SLA",
        "Full IP transfer & NDA",
      ],
      popular: false,
      cta: "Contact Architecture Team",
    },
  ];

  return (
    <section id="pricing" className="relative py-28 bg-[#030303] text-neutral-100 overflow-hidden border-t border-white/[0.08]">
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-teal-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-neutral-400 font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>Transparent Investment</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
            Uncompromising Excellence. Predictable Pricing.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400">
            No endless agency retainers or hidden surprise fees. Fixed pricing, rapid turnaround, and full intellectual property ownership.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 p-1 rounded-full bg-neutral-900 border border-white/[0.08] text-xs">
            <button
              onClick={() => {
                soundFX.playToggle(false);
                setIsAnnual(false);
              }}
              data-cursor="pointer"
              className={`px-4 py-1.5 rounded-full transition-all ${
                !isAnnual ? "bg-white text-neutral-950 font-semibold shadow-sm" : "text-neutral-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => {
                soundFX.playToggle(true);
                setIsAnnual(true);
              }}
              data-cursor="pointer"
              className={`px-4 py-1.5 rounded-full flex items-center gap-1.5 transition-all ${
                isAnnual ? "bg-white text-neutral-950 font-semibold shadow-sm" : "text-neutral-400 hover:text-white"
              }`}
            >
              <span>Annual</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-teal-500/20 text-teal-300 font-bold">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map(plan => {
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                onMouseEnter={() => soundFX.playHover()}
                className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? "bg-[#0b0c10] border-2 border-teal-400/60 shadow-[0_0_50px_rgba(45,212,191,0.2)] md:-translate-y-3"
                    : "bg-[#08080b] border border-white/[0.08] hover:border-white/20 hover:bg-[#0c0d12]"
                }`}
              >
                {/* Border Beam light indicator for popular card */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-teal-400 text-neutral-950 text-[10px] font-bold font-mono uppercase tracking-widest shadow-[0_0_15px_rgba(45,212,191,0.6)]">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-white tracking-tight">
                      {plan.name}
                    </span>
                    {!plan.popular && (
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/[0.04] text-neutral-400 border border-white/[0.04]">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-neutral-400 min-h-[36px] leading-relaxed">
                    {plan.desc}
                  </p>

                  {/* Price */}
                  <div className="my-6 pb-6 border-b border-white/[0.08] flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-5xl font-bold font-mono text-white tracking-tight">
                      ${price}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">
                      /month {isAnnual && "(billed annually)"}
                    </span>
                  </div>

                  {/* Feature Checkmarks */}
                  <ul className="space-y-3 mb-8 text-xs text-neutral-300">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-teal-500/15 text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Button */}
                <button
                  onClick={() => {
                    soundFX.playClick();
                    soundFX.playSuccessChime();
                    setSelectedPlan(plan.name);
                    const el = document.getElementById("climax-cta");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  data-cursor="pointer"
                  className={`w-full py-3 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-300 active:scale-95 ${
                    plan.popular
                      ? "bg-white hover:bg-neutral-100 text-neutral-950 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                      : "bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10"
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {selectedPlan && (
          <div className="mt-8 text-center text-xs font-mono text-teal-400 animate-pulse">
            ✓ Selected Tier: {selectedPlan} — Scroll down to confirm launch parameters.
          </div>
        )}
      </div>
    </section>
  );
}
