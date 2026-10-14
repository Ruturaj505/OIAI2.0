"use client";

import React from "react";
import dynamic from "next/dynamic";
import sampleArcs from "@/data/globe.json";
import type { GlobeConfig, Position } from "@/components/ui/globe";

// Dynamically import World with ssr: false, providing an instant visual preview
const World = dynamic(
  () => import("@/components/ui/globe").then((m) => m.World),
  {
    ssr: false,
    loading: () => (
      <div className="relative flex h-full w-full items-center justify-center">
        {/* Instant aesthetic sphere silhouette so user never waits on blank space */}
        <div className="relative flex items-center justify-center w-[200px] h-[200px] xs:w-[240px] xs:h-[240px] sm:w-[320px] sm:h-[320px] rounded-full border border-cyan-400/30 bg-gradient-to-b from-cyan-950/40 via-slate-950 to-[#080b11] shadow-[0_0_50px_rgba(0,242,254,0.15)] animate-pulse">
          <div className="absolute inset-2 rounded-full border border-cyan-500/20" />
          <div className="absolute inset-8 rounded-full border border-cyan-500/10" />
          <div className="h-6 w-6 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
        </div>
      </div>
    ),
  }
);

export default function HeroGlobe() {
  const globeConfig: GlobeConfig = {
    pointSize: 1.2,
    globeColor: "#080b11",
    showAtmosphere: true,
    atmosphereColor: "#00f2fe",
    atmosphereAltitude: 0.16,
    polygonColor: "rgba(0, 242, 254, 0.75)",
    emissive: "#051329",
    emissiveIntensity: 0.25,
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
    autoRotateSpeed: 0.9,
  };

  return (
    <div className="relative w-full h-[280px] xs:h-[340px] sm:h-[440px] lg:h-[560px] flex items-center justify-center overflow-hidden">
      {/* Background ambient radial glow matching hero theme */}
      <div className="pointer-events-none absolute h-[240px] w-[240px] sm:h-[420px] sm:w-[420px] rounded-full bg-gradient-to-tr from-cyan-500/20 via-sky-500/15 to-transparent blur-[70px] sm:blur-[90px]" />

      {/* 3D WebGL Canvas Globe with Antigravity Floating Animation */}
      <div 
        style={{ touchAction: "pan-y" }}
        className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing floating-element"
      >
        <World globeConfig={globeConfig} data={sampleArcs as Position[]} />
      </div>
    </div>
  );
}
