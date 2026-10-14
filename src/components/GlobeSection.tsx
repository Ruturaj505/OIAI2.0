"use client";

import React from "react";
import dynamic from "next/dynamic";
import sampleArcs from "@/data/globe.json";
import type { GlobeConfig, Position } from "@/components/ui/globe";
import { Globe as GlobeIcon, Sparkles, Navigation, ShieldCheck } from "lucide-react";

// Dynamically import Globe/World with ssr: false for smooth WebGL hydration
const World = dynamic(
  () => import("@/components/ui/globe").then((m) => m.World),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent shadow-[0_0_15px_rgba(0,242,254,0.5)]" />
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400/80">
            Initializing 3D Neural Globe...
          </span>
        </div>
      </div>
    ),
  }
);

export function GlobeSection() {
  const globeConfig: GlobeConfig = {
    pointSize: 1.2,
    globeColor: "#080b11",
    showAtmosphere: true,
    atmosphereColor: "#00f2fe",
    atmosphereAltitude: 0.15,
    polygonColor: "rgba(0, 242, 254, 0.7)",
    emissive: "#051329",
    emissiveIntensity: 0.2,
    shininess: 0.9,
    arcTime: 1800,
    arcLength: 0.9,
    rings: 2,
    maxRings: 3,
    ambientLight: "#00f2fe",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#38bdf8",
    pointLight: "#00f2fe",
    autoRotate: true,
    autoRotateSpeed: 0.8,
  };

  const globalHubs = [
    { city: "Bhubaneswar", role: "HQ & AI Research Campus", lat: "20.3° N", lng: "85.8° E", active: true },
    { city: "Silicon Valley", role: "Frontier AI & Cloud Partners", lat: "37.7° N", lng: "122.4° W", active: true },
    { city: "London", role: "Deep Tech & Fintech Hub", lat: "51.5° N", lng: "0.1° W", active: true },
    { city: "Tokyo", role: "Robotics & Vision Research", lat: "35.6° N", lng: "139.6° E", active: true },
    { city: "Singapore", role: "Southeast Asia AI Gateway", lat: "1.3° N", lng: "103.8° E", active: true },
    { city: "Bengaluru", role: "Indian Deep Tech Ecosystem", lat: "12.9° N", lng: "77.5° E", active: true },
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-[#080b11] border-t border-white/5">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-950/40 text-cyan-300 text-xs font-semibold tracking-wide uppercase shadow-[0_0_15px_rgba(0,242,254,0.15)]">
            <GlobeIcon className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Global AI Network & Placements</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            From Bhubaneswar to the{" "}
            <span className="bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#38bdf8] bg-clip-text text-transparent">
              Global Frontier
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Our graduates and research fellows connect directly into top AI ecosystems across Silicon Valley, London, Tokyo, Singapore, and India's premier tech clusters.
          </p>
        </div>

        {/* 3D Globe Container */}
        <div className="relative mx-auto max-w-5xl h-[520px] sm:h-[600px] rounded-3xl border border-white/10 bg-slate-950/60 backdrop-blur-xl shadow-[0_0_50px_rgba(0,242,254,0.08)] overflow-hidden">
          {/* Subtle live indicator badge */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2 rounded-full border border-cyan-400/20 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-200 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            <span className="font-mono text-cyan-300">Live AI Telemetry Active</span>
          </div>

          <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-400 backdrop-blur-md">
            <Navigation className="w-3.5 h-3.5 text-cyan-400" />
            <span>Drag to rotate • Auto-orbit active</span>
          </div>

          {/* 3D Canvas */}
          <div className="absolute inset-0 flex items-center justify-center">
            <World globeConfig={globeConfig} data={sampleArcs as Position[]} />
          </div>

          {/* Overlay gradient at bottom for smooth fade */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#080b11] via-[#080b11]/80 to-transparent" />
        </div>

        {/* Global Hubs Grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {globalHubs.map((hub) => (
            <div
              key={hub.city}
              className="p-3.5 rounded-2xl border border-white/5 bg-slate-900/40 hover:bg-slate-900/80 hover:border-cyan-400/30 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {hub.city}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f2fe]" />
              </div>
              <p className="text-[11px] text-slate-400 line-clamp-1">{hub.role}</p>
              <span className="text-[10px] font-mono text-slate-500 mt-1 block">
                {hub.lat}, {hub.lng}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Metrics Pill Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-12 py-4 px-6 rounded-2xl border border-white/5 bg-slate-950/40 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span><strong className="text-white font-semibold">14+</strong> Real-Time Global Arcs</span>
          </div>
          <div className="h-4 w-px bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span><strong className="text-white font-semibold">100%</strong> Global Hiring & Placement Support</span>
          </div>
          <div className="h-4 w-px bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-2">
            <GlobeIcon className="w-4 h-4 text-cyan-400" />
            <span><strong className="text-white font-semibold">6</strong> Continents Reached</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GlobeSection;
