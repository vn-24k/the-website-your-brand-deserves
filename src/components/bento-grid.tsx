"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { TiltCard } from "./tilt-card";
import {
  Brain,
  MessageSquare,
  Shield,
  Layers,
  Terminal,
  Zap,
  HardDrive,
  GitGraph,
} from "lucide-react";

interface BentoCardProps {
  title: string;
  description: string;
  tag: string;
  icon: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

export function BentoCard({
  title,
  description,
  tag,
  icon,
  className = "",
  children,
}: BentoCardProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/40 p-7 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40 group ${className}`}
    >
      {/* Spotlight Hover Glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: mousePos.opacity,
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(168, 85, 247, 0.18), transparent 40%)`,
        }}
        aria-hidden="true"
      />

      {/* Card Header & Content */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-violet-500/10 border border-violet-500/20 px-3 py-1 text-xs font-mono text-violet-300">
              {tag}
            </span>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-violet-400 group-hover:text-white group-hover:bg-violet-600 transition-colors">
              {icon}
            </div>
          </div>

          <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-violet-300 transition-colors">
            {title}
          </h3>
          <p className="mt-2.5 text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
            {description}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-white/5">{children}</div>
      </div>
    </div>
  );
}

export function BentoGridSection() {
  return (
    <section id="agentes" className="py-28 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono text-violet-400 uppercase tracking-widest">
          Arquitetura Central
        </span>
        <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Quatro pilares de um ecossistema{" "}
          <span className="font-editorial italic font-normal text-violet-400">
            inabalável
          </span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
          Projetado para operar em hardware local com velocidade nativa, integrando modelos de raciocínio profundo com memória viva e canais de comunicação direta.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Multiagentes (Span 2) with 3D Tilt Card wrapper */}
        <div className="md:col-span-2">
          <TiltCard maxTilt={10} className="h-full bg-neutral-900/40 p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-violet-500/10 border border-violet-500/20 px-3 py-1 text-xs font-mono text-violet-300">
                Orquestrador Cognitivo
              </span>
              <Layers className="h-5 w-5 text-violet-400" />
            </div>

            <h3 className="text-2xl font-bold text-white tracking-tight">
              Orquestração Multiagente Especializada
            </h3>
            <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
              Diferentes IAs trabalhando em simbiose. O <strong>Arquiteto Sistêmico</strong> desenha as soluções em visão macro, o <strong>Pesquisador</strong> investiga novidades em repositórios e modelos, e o <strong>Auditor Crítico</strong> testa e isola riscos antes de qualquer alteração de sistema.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3 rounded-xl bg-black/60 border border-white/5 p-4 text-xs font-mono">
              <div className="flex flex-col">
                <span className="text-neutral-500">Planejamento</span>
                <span className="text-violet-300 font-semibold">Gemini 3.8 Flash</span>
              </div>
              <div className="flex flex-col">
                <span className="text-neutral-500">Auditoria</span>
                <span className="text-indigo-300 font-semibold">Claude Sonnet 4.6</span>
              </div>
              <div className="flex flex-col">
                <span className="text-neutral-500">Lógica Profunda</span>
                <span className="text-fuchsia-300 font-semibold">DeepSeek R1</span>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Card 2: Segundo Cérebro Obsidian */}
        <BentoCard
          title="Segundo Cérebro Obsidian"
          description="Grafo vivo de conhecimento em Markdown. O agente lê, atualiza e cruza suas anotações com memórias vetoriais permanentes."
          tag="Memória Viva"
          icon={<GitGraph className="h-4 w-4" />}
        >
          <div className="rounded-lg bg-black/60 border border-white/5 p-3.5 flex flex-col gap-1 text-xs font-mono">
            <div className="flex items-center justify-between text-neutral-400">
              <span>Notas Vinculadas</span>
              <span className="text-violet-400 font-bold">2.450+</span>
            </div>
            <div className="w-full bg-white/5 rounded-full h-1.5 mt-1 overflow-hidden">
              <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-full w-[85%]" />
            </div>
          </div>
        </BentoCard>

        {/* Card 3: WhatsApp Bridge */}
        <BentoCard
          title="WhatsApp Gateway 24/7"
          description="Controle e comandos em linguagem natural diretamente pelo mensageiro mais popular do mundo, sem fricção."
          tag="Interação Real"
          icon={<MessageSquare className="h-4 w-4" />}
        >
          <div className="rounded-lg bg-black/60 border border-white/5 p-3.5 space-y-1 text-xs font-mono">
            <p className="text-neutral-400">
              <span className="text-emerald-400">● </span>"Relatório matinal pronto no Obsidian."
            </p>
            <p className="text-neutral-500 text-[10px]">Gateway Fastify • Latência &lt; 80ms</p>
          </div>
        </BentoCard>

        {/* Card 4: Soberania Local em Borda (Span 2) */}
        <BentoCard
          title="Soberania de Dados & Execução Local"
          description="Seu ambiente roda localmente em Linux sob arquitetura ARM64 (Termux Debian). Suas chaves de API, notas confidenciais e códigos nunca saem do seu controle."
          tag="Segurança Máxima"
          icon={<Shield className="h-4 w-4" />}
          className="md:col-span-2"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-black/60 border border-white/5 p-4 text-xs font-mono text-neutral-400">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Isolamento Total de Arquivos
            </span>
            <span className="text-violet-400 font-semibold">Zero Telemetria Externa</span>
            <span className="text-neutral-500">Root / Termux ARM64</span>
          </div>
        </BentoCard>
      </div>
    </section>
  );
}
