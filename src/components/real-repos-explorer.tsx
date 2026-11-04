"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  Maximize2,
  RefreshCw,
  Folder,
  Layers,
  Sparkles,
  Play,
  Code2,
} from "lucide-react";

interface RealRepoItem {
  id: string;
  name: string;
  author: "Animmaster" | "Hank-D-Tank" | "Codrops" | "Outro";
  category: "scroll" | "3d" | "shader" | "menu" | "physics";
  description: string;
  path: string;
  url: string;
}

export const REAL_REPOS: RealRepoItem[] = [
  // 1. Coreografia de Scroll
  {
    id: "Nvg8-Scroll-Animation",
    name: "Nvg8 Scroll Animation",
    author: "Animmaster",
    category: "scroll",
    description: "Reconstrução do Navigate Agency (Awwwards SOTD). Scroll assimétrico com planos de profundidade.",
    path: "/root/Evolução Inteligente/arsenal/repos/Nvg8-Scroll-Animation",
    url: "/lab/Nvg8-Scroll-Animation/index.html",
  },
  {
    id: "WeroWallet-Scroll-Animation",
    name: "WeroWallet 3D Cards Scroll",
    author: "Animmaster",
    category: "scroll",
    description: "Cartões metálicos 3D desdobrando e flutuando no scroll estilo carteira de fintech de luxo.",
    path: "/root/Evolução Inteligente/arsenal/repos/WeroWallet-Scroll-Animation",
    url: "/lab/WeroWallet-Scroll-Animation/index.html",
  },
  {
    id: "TrevorNoah-Scroll-Animation",
    name: "Trevor Noah Editorial Scroll",
    author: "Animmaster",
    category: "scroll",
    description: "Recorte editorial com texto fixo e cards flutuando em camadas de profundidade.",
    path: "/root/Evolução Inteligente/arsenal/repos/TrevorNoah-Scroll-Animation",
    url: "/lab/TrevorNoah-Scroll-Animation/index.html",
  },
  {
    id: "LandoNorris-Effect",
    name: "Lando Norris F1 Parallax",
    author: "Animmaster",
    category: "scroll",
    description: "Estética esportiva de alta velocidade com tipografia cinética fragmentada e aceleração.",
    path: "/root/Evolução Inteligente/arsenal/repos/LandoNorris-Effect",
    url: "/lab/LandoNorris-Effect/index.html",
  },
  {
    id: "LeoParpeix-Scroll-Animation-",
    name: "Leo Parpeix Fashion Scroll",
    author: "Animmaster",
    category: "scroll",
    description: "Transições de fotos de alta moda com máscaras geométricas e tipografia de luxo.",
    path: "/root/Evolução Inteligente/arsenal/repos/LeoParpeix-Scroll-Animation-",
    url: "/lab/LeoParpeix-Scroll-Animation-/index.html",
  },
  {
    id: "Larevoltosa-Scroll-Animation",
    name: "Larevoltosa Scroll Animation",
    author: "Animmaster",
    category: "scroll",
    description: "Narrativa visual fluida com revelação sequencial e tipografia expressiva.",
    path: "/root/Evolução Inteligente/arsenal/repos/Larevoltosa-Scroll-Animation",
    url: "/lab/Larevoltosa-Scroll-Animation/index.html",
  },

  // 2. 3D & Efeitos de Papel
  {
    id: "x-book",
    name: "X-Book 3D Page-Flip",
    author: "Hank-D-Tank",
    category: "3d",
    description: "Livro tridimensional realista com GSAP: páginas que dobram com física de papel, curvatura e sombras.",
    path: "/root/Evolução Inteligente/arsenal/repos/x-book",
    url: "/lab/x-book/index.html",
  },
  {
    id: "cylinder-gallery",
    name: "3D Cylinder Gallery",
    author: "Hank-D-Tank",
    category: "3d",
    description: "Carrossel de fotos em cilindro 3D que gira no eixo Y ao arrastar o mouse.",
    path: "/root/Evolução Inteligente/arsenal/repos/cylinder-gallery",
    url: "/lab/cylinder-gallery/index.html",
  },
  {
    id: "3D-CARDS",
    name: "3D Interactive Cards",
    author: "Animmaster",
    category: "3d",
    description: "Cartões holográficos em camadas tridimensionais com rotação livre sob o ponteiro.",
    path: "/root/Evolução Inteligente/arsenal/repos/3D-CARDS",
    url: "/lab/3D-CARDS/index.html",
  },
  {
    id: "curve-gallary",
    name: "Curve Gallery 3D",
    author: "Animmaster",
    category: "3d",
    description: "Galeria de imagens convexa disposta em um arco tridimensional panorâmico.",
    path: "/root/Evolução Inteligente/arsenal/repos/curve-gallary",
    url: "/lab/curve-gallary/index.html",
  },
  {
    id: "cube-efffect",
    name: "Cube 3D Transition",
    author: "Animmaster",
    category: "3d",
    description: "Transição onde a tela inteira gira como as faces de um cubo tridimensional.",
    path: "/root/Evolução Inteligente/arsenal/repos/cube-efffect",
    url: "/lab/cube-efffect/index.html",
  },

  // 3. Shaders, ASCII & Canvas
  {
    id: "Interactive-ASCII",
    name: "Interactive ASCII Shader",
    author: "Animmaster",
    category: "shader",
    description: "Converte imagens e formas em caracteres ASCII que se dispersam dinamicamente com o cursor.",
    path: "/root/Evolução Inteligente/arsenal/repos/Interactive-ASCII",
    url: "/lab/Interactive-ASCII/index.html",
  },
  {
    id: "Starfield-Scroll-Animation",
    name: "Starfield 3D Warp Scroll",
    author: "Animmaster",
    category: "shader",
    description: "Túnel estelar com aceleração tridimensional e rastros cósmicos na rolagem.",
    path: "/root/Evolução Inteligente/arsenal/repos/Starfield-Scroll-Animation",
    url: "/lab/Starfield-Scroll-Animation/index.html",
  },
  {
    id: "pixel-canvas",
    name: "Pixel Canvas Interaction",
    author: "Hank-D-Tank",
    category: "shader",
    description: "Tela pixelada onde o rastro do cursor gera partículas e ondas luminosas.",
    path: "/root/Evolução Inteligente/arsenal/repos/pixel-canvas",
    url: "/lab/pixel-canvas/index.html",
  },
  {
    id: "ascii-reveal",
    name: "ASCII Matrix Reveal",
    author: "Hank-D-Tank",
    category: "shader",
    description: "Efeito terminal/Matrix onde palavras emergem de uma chuva de caracteres tipográficos.",
    path: "/root/Evolução Inteligente/arsenal/repos/ascii-reveal",
    url: "/lab/ascii-reveal/index.html",
  },
  {
    id: "canvas-gallery",
    name: "Infinite Canvas Gallery",
    author: "Hank-D-Tank",
    category: "shader",
    description: "Mural infinito bidirecional em Canvas 2D acelerado por GPU com pan fluido.",
    path: "/root/Evolução Inteligente/arsenal/repos/canvas-gallery",
    url: "/lab/canvas-gallery/index.html",
  },
  {
    id: "deformation-effect",
    name: "Liquid Mesh Deformation",
    author: "Animmaster",
    category: "shader",
    description: "Distorção gelatinosa de malha gráfica quando o mouse passa em velocidade sobre imagens.",
    path: "/root/Evolução Inteligente/arsenal/repos/deformation-effect",
    url: "/lab/deformation-effect/index.html",
  },

  // 4. Menus & Revelações
  {
    id: "DecathlonYestalgia-Menu",
    name: "Decathlon Yestalgia Menu",
    author: "Animmaster",
    category: "menu",
    description: "Menu retrô em tela cheia com colunas divididas e pré-visualização instantânea no hover.",
    path: "/root/Evolução Inteligente/arsenal/repos/DecathlonYestalgia-Menu",
    url: "/lab/DecathlonYestalgia-Menu/index.html",
  },
  {
    id: "portfolio-menu",
    name: "Fullscreen Overlay Menu",
    author: "Animmaster",
    category: "menu",
    description: "Menu de portfólio monumental com tipografia expandida e cortina de desfoque.",
    path: "/root/Evolução Inteligente/arsenal/repos/portfolio-menu",
    url: "/lab/portfolio-menu/index.html",
  },
  {
    id: "Landing-Page-Reveal-Animation-",
    name: "Landing Page Shutter Reveal",
    author: "Animmaster",
    category: "menu",
    description: "Cortina de entrada estilo obturador fotográfico abrindo em lâminas verticais.",
    path: "/root/Evolução Inteligente/arsenal/repos/Landing-Page-Reveal-Animation-",
    url: "/lab/Landing-Page-Reveal-Animation-/index.html",
  },
  {
    id: "Pixel-Page-Reveal",
    name: "Pixel Page Reveal",
    author: "Animmaster",
    category: "menu",
    description: "Transição retrô onde a tela se reconstrói através de uma malha de blocos pixelados.",
    path: "/root/Evolução Inteligente/arsenal/repos/Pixel-Page-Reveal",
    url: "/lab/Pixel-Page-Reveal/index.html",
  },
  {
    id: "sweaty-shop-loading",
    name: "Sweaty Shop Preloader",
    author: "Animmaster",
    category: "menu",
    description: "Preloader moderno para e-commerce de luxo com contador e barra de contorno SVG.",
    path: "/root/Evolução Inteligente/arsenal/repos/sweaty-shop-loading",
    url: "/lab/sweaty-shop-loading/index.html",
  },

  // 5. Física & Micro-Interações
  {
    id: "mineral-dial",
    name: "Tactile Mineral Dial",
    author: "Hank-D-Tank",
    category: "physics",
    description: "Seletor de precisão circular com acabamento metálico escovado e cliques táteis.",
    path: "/root/Evolução Inteligente/arsenal/repos/mineral-dial",
    url: "/lab/mineral-dial/index.html",
  },
  {
    id: "Creative-Clutter",
    name: "Creative Clutter Drag Board",
    author: "Animmaster",
    category: "physics",
    description: "Mesa orgânica onde fotos, selos e notas podem ser arrastados e empilhados livremente.",
    path: "/root/Evolução Inteligente/arsenal/repos/Creative-Clutter",
    url: "/lab/Creative-Clutter/index.html",
  },
  {
    id: "Image-Flock",
    name: "Image Flock Algorithm",
    author: "Animmaster",
    category: "physics",
    description: "Enxame de imagens que perseguem o cursor como um bando de pássaros com algoritmo Boids.",
    path: "/root/Evolução Inteligente/arsenal/repos/Image-Flock",
    url: "/lab/Image-Flock/index.html",
  },
  {
    id: "Dive-in-effect",
    name: "Infinite Dive-In Zoom",
    author: "Animmaster",
    category: "physics",
    description: "Ao clicar no card, a câmera mergulha na foto em zoom infinito até preencher a tela.",
    path: "/root/Evolução Inteligente/arsenal/repos/Dive-in-effect",
    url: "/lab/Dive-in-effect/index.html",
  },
  {
    id: "wobble-scroll",
    name: "Wobble Inertia Scroll",
    author: "Hank-D-Tank",
    category: "physics",
    description: "Inércia elástica que faz todo o layout balançar conforme a aceleração do scroll.",
    path: "/root/Evolução Inteligente/arsenal/repos/wobble-scroll",
    url: "/lab/wobble-scroll/index.html",
  },
  {
    id: "bounce-hover",
    name: "Elastic Bounce Hover",
    author: "Animmaster",
    category: "physics",
    description: "Micro-interação tátil onde elementos quicam com mola física natural ao passar o mouse.",
    path: "/root/Evolução Inteligente/arsenal/repos/bounce-hover",
    url: "/lab/bounce-hover/index.html",
  },
  {
    id: "magnetic-marquee",
    name: "Magnetic Kinetic Marquee",
    author: "Animmaster",
    category: "physics",
    description: "Faixa de texto infinita que acelera e se inclina dinamicamente na direção do mouse.",
    path: "/root/Evolução Inteligente/arsenal/repos/magnetic-marquee",
    url: "/lab/magnetic-marquee/index.html",
  },
];

export function RealReposExplorer() {
  const [selectedRepo, setSelectedRepo] = useState<RealRepoItem>(REAL_REPOS[6]); // default: x-book 3D
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [iframeKey, setIframeKey] = useState(0);

  const filteredRepos =
    activeFilter === "all"
      ? REAL_REPOS
      : REAL_REPOS.filter((r) => r.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#07070a] text-neutral-100 font-sans antialiased flex flex-col select-none">
      {/* 1. Header do Laboratório */}
      <header className="h-16 px-6 border-b border-white/10 bg-black/80 backdrop-blur-xl flex items-center justify-between shrink-0 z-30">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-400/50 flex items-center justify-center text-cyan-300 font-mono font-bold shadow-[0_0_15px_rgba(34,211,238,0.3)]">
            ⚡
          </div>
          <div>
            <h1 className="text-sm font-bold text-white tracking-wider flex items-center gap-2">
              ARSENAL LAB — OS REPOSITÓRIOS REAIS EM AÇÃO
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300">
                {REAL_REPOS.length} PROJETOS REAIS PRONTOS
              </span>
            </h1>
            <p className="text-[10px] text-neutral-400 font-mono">
              Código original clonado diretamente dos links enviados (Animmaster, Hank-D-Tank, Codrops)
            </p>
          </div>
        </div>

        {/* Action Controls for Current Repo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIframeKey((k) => k + 1)}
            title="Reiniciar Frame"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition cursor-pointer flex items-center gap-1.5 text-xs font-mono"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reiniciar</span>
          </button>

          <a
            href={selectedRepo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-mono font-bold text-xs tracking-wide transition flex items-center gap-1.5 shadow-[0_0_15px_#22d3ee]"
          >
            <span>ABRIR EM TELA CHEIA</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* 2. Main Workbench Layout (Sidebar de Projetos + Palco Interativo) */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Sidebar Esquerda: Lista dos 30 Repositórios Reais */}
        <aside className="w-full md:w-80 lg:w-96 border-r border-white/10 bg-[#0a0a0e] flex flex-col shrink-0 h-64 md:h-auto overflow-hidden">
          {/* Filtros por Categoria */}
          <div className="p-3 border-b border-white/10 flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono no-scrollbar">
            {[
              { id: "all", label: "Todos" },
              { id: "scroll", label: "Scroll" },
              { id: "3d", label: "3D & Papel" },
              { id: "shader", label: "Shaders" },
              { id: "menu", label: "Menus" },
              { id: "physics", label: "Física" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-2.5 py-1 rounded-md transition-all whitespace-nowrap cursor-pointer ${
                  activeFilter === tab.id
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold"
                    : "text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Lista com Scroll */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {filteredRepos.map((repo) => {
              const isSelected = selectedRepo.id === repo.id;
              return (
                <div
                  key={repo.id}
                  onClick={() => {
                    setSelectedRepo(repo);
                    setIframeKey((k) => k + 1);
                  }}
                  className={`p-3 rounded-xl border transition-all cursor-pointer text-left ${
                    isSelected
                      ? "bg-cyan-950/40 border-cyan-400/60 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                      : "bg-white/[0.03] border-white/5 hover:border-white/20 hover:bg-white/[0.06]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[10px] text-cyan-400 font-bold">
                      {repo.author}
                    </span>
                    <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-white/5 text-neutral-400">
                      {repo.category}
                    </span>
                  </div>
                  <h3 className="text-xs font-bold text-white tracking-wide">
                    {repo.name}
                  </h3>
                  <p className="text-[11px] text-neutral-400 leading-tight mt-1 line-clamp-2">
                    {repo.description}
                  </p>
                </div>
              );
            })}
          </div>
        </aside>

        {/* Palco Central: Visualizador Interativo ao Vivo */}
        <main className="flex-1 flex flex-col bg-black overflow-hidden relative">
          {/* Top Bar do Palco: Informações do Repositório Ativo */}
          <div className="px-6 py-2.5 bg-[#0e0e14] border-b border-white/10 flex flex-wrap items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-bold text-white">{selectedRepo.name}</span>
              <span className="text-neutral-500">|</span>
              <span className="text-neutral-400 flex items-center gap-1">
                <Folder className="w-3.5 h-3.5 text-cyan-400" />
                <code className="text-[10px] text-cyan-300">
                  .../arsenal/repos/{selectedRepo.id}
                </code>
              </span>
            </div>

            <div className="text-[11px] text-neutral-400">
              <span>Autor: <strong className="text-neutral-200">{selectedRepo.author}</strong></span>
            </div>
          </div>

          {/* O IFRAME EXECUTANDO O REPOSITÓRIO REAL */}
          <div className="flex-1 relative w-full h-full bg-[#050508]">
            <iframe
              key={iframeKey}
              src={selectedRepo.url}
              title={selectedRepo.name}
              className="w-full h-full border-0 absolute inset-0 bg-transparent"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        </main>
      </div>
    </div>
  );
}
