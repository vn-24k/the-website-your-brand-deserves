"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Sparkles,
  Layers,
  Terminal,
  Zap,
  CreditCard,
  HelpCircle,
  FolderGit2,
} from "lucide-react";
import { soundFX } from "./sound-fx";

interface DockItemProps {
  mouseX: any;
  icon: React.ReactNode;
  label: string;
  href: string;
}

function DockIcon({ mouseX, icon, label, href }: DockItemProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-140, 0, 140], [42, 64, 42]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 180, damping: 14 });

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={() => soundFX.playClick()}
      onMouseEnter={() => soundFX.playHover()}
      data-cursor="pointer"
      style={{ width, height: width }}
      className="group relative flex aspect-square cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-neutral-900/85 text-white backdrop-blur-md shadow-lg transition-colors hover:border-teal-400/60 hover:bg-neutral-800"
    >
      <div className="flex h-5 w-5 items-center justify-center text-neutral-300 group-hover:text-teal-300 transition-colors">
        {icon}
      </div>

      {/* Tooltip */}
      <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-neutral-950 border border-white/10 px-2.5 py-0.5 text-[11px] font-medium text-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
        {label}
      </span>
    </motion.a>
  );
}

export function InteractiveDock({ className = "" }: { className?: string }) {
  const mouseX = useMotionValue(Infinity);

  const ITEMS = [
    { icon: <Sparkles className="h-4 w-4" />, label: "Hero", href: "#" },
    { icon: <Layers className="h-4 w-4" />, label: "Capabilities", href: "#capabilities" },
    { icon: <Zap className="h-4 w-4" />, label: "Uiverse Galaxy", href: "#uiverse" },
    { icon: <FolderGit2 className="h-4 w-4" />, label: "42 Repositories", href: "#arsenal" },
    { icon: <CreditCard className="h-4 w-4" />, label: "Pricing", href: "#pricing" },
    { icon: <HelpCircle className="h-4 w-4" />, label: "FAQ", href: "#faq" },
  ];

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden sm:flex h-16 items-end gap-3 rounded-3xl border border-white/10 bg-neutral-950/85 px-4 pb-3 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] ring-1 ring-white/5 ${className}`}
    >
      {ITEMS.map((item, idx) => (
        <DockIcon
          key={idx}
          mouseX={mouseX}
          icon={item.icon}
          label={item.label}
          href={item.href}
        />
      ))}
    </motion.div>
  );
}
