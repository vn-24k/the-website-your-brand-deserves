"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { soundFX } from "./sound-fx";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How fast can we launch our new flagship website?",
      a: "Our autonomous engineering pipeline allows us to deliver full production-ready codebases in 48 hours for Founder tier and under 5 business days for full custom Studio builds—complete with 1:1 design fidelity, interactive shaders, and Vercel Edge configuration.",
    },
    {
      q: "Do we get full intellectual property and GitHub repository ownership?",
      a: "Yes, 100%. Upon completion, the entire GitHub repository—including all React 19 source code, TypeScript types, Tailwind v4 styles, custom shaders, and assets—is permanently transferred to your company account under the MIT or proprietary license of your choice.",
    },
    {
      q: "What tech stack do you build with?",
      a: "We develop exclusively with the modern frontier: React 19, Next.js / Vite 6, Tailwind CSS v4, Framer Motion 12, Three.js / WebGL shaders, Lucide Icons, and Web Audio API procedural soundscapes, validated against strict TypeScript standards.",
    },
    {
      q: "Can you recreate any reference from Pinterest or Awwwards 1:1?",
      a: "Yes. Our computer vision and layout engine analyzes proportions, typography kerning, and negative space to ensure mathematical 1:1 visual fidelity, rejecting generic AI templates in favor of bespoke craftsmanship.",
    },
    {
      q: "What if our team needs revisions after launch?",
      a: "Every tier includes revision rounds with 24-hour turnaround. Our engineers iterate directly via GitHub PRs and Vercel preview URLs so your team can test every interaction seamlessly before merging to production.",
    },
  ];

  const handleToggle = (index: number) => {
    soundFX.playToggle(openIndex !== index);
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-28 bg-[#040406] text-neutral-100 border-t border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-neutral-400 font-mono uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-teal-400" />
            <span>Clarity & Questions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            Everything you need to know about our autonomous pipeline, code delivery, and guarantees.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.q}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#0c0d12] border-teal-400/40 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                    : "bg-[#07070a] border-white/[0.06] hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => handleToggle(index)}
                  data-cursor="pointer"
                  onMouseEnter={() => soundFX.playHover()}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-medium text-sm sm:text-base text-neutral-200">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white/[0.05] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-teal-500/20 text-teal-300" : "text-neutral-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-neutral-400 leading-relaxed border-t border-white/[0.04] pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
