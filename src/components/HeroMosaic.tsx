"use client";

import React from "react";
import Image from "next/image";

// Solid color definitions matching the tokens
const SOLID_GRAIN = "url(https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/40b7fef3-410d-4ef3-bd67-0a2fc7ee5a1d.svg)";

interface TileProps {
  type: "photo" | "solid";
  src?: string;
  alt?: string;
  color?: "red" | "yellow" | "blue" | "cream" | "dark";
}

// 5 initial cells per column (matching editorial Brutalist composition)
const C1_CELLS: TileProps[] = [
  { type: "solid", color: "red" },
  { type: "photo", src: "/images/hero/AI.jpg", alt: "Neural Computing & Deep Learning" },
  { type: "photo", src: "/images/hero/download (2).jpg", alt: "Generative AI Systems" },
  { type: "solid", color: "blue" },
  { type: "photo", src: "/images/hero/Don't Teach AI Without These Essential Classroom Resources.jpg", alt: "Classroom AI Labs" },
];

const C2_CELLS: TileProps[] = [
  { type: "solid", color: "yellow" },
  { type: "photo", src: "/images/hero/download (1).jpg", alt: "Computer Vision Systems" },
  { type: "solid", color: "dark" },
  { type: "photo", src: "/images/hero/download.jpg", alt: "Machine Learning Foundations" },
  { type: "solid", color: "red" },
];

const C3_CELLS: TileProps[] = [
  { type: "solid", color: "blue" },
  { type: "solid", color: "cream" },
  { type: "photo", src: "/images/hero/AI.jpg", alt: "Autonomous AI Agents" },
  { type: "solid", color: "yellow" },
  { type: "photo", src: "/images/hero/download (2).jpg", alt: "Applied AI Research" },
];

function CardTile({ tile }: { tile: TileProps }) {
  if (tile.type === "photo" && tile.src) {
    return (
      <div 
        className="relative w-full rounded-[16px] sm:rounded-[22px] overflow-hidden shrink-0 bg-[#f9f6f1] mb-[10px] sm:mb-[13px] shadow-sm h-[185px] xs:h-[220px] sm:h-[269px]"
      >
        <Image
          src={tile.src}
          alt={tile.alt || "AI Research"}
          fill
          sizes="(max-width: 640px) 130px, (max-width: 1024px) 190px, 205px"
          className="object-cover"
        />
      </div>
    );
  }

  // Solid Colored Card with Subtle Grain Texture Overlay
  const colorMap = {
    red: "bg-[#ef5d44]",
    yellow: "bg-[#fcdd71]",
    blue: "bg-[#9fd5f7]",
    cream: "bg-[#f9f6f1] shadow-[inset_0_0_0_1px_#e9e6df]",
    dark: "bg-[#151515] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14)]",
  };

  const bgClass = colorMap[tile.color || "cream"];
  const isDark = tile.color === "dark";

  return (
    <div 
      className={`relative w-full rounded-[16px] sm:rounded-[22px] overflow-hidden shrink-0 mb-[10px] sm:mb-[13px] h-[185px] xs:h-[220px] sm:h-[269px] ${bgClass}`}
    >
      {/* Grain overlay */}
      <div 
        aria-hidden="true"
        className={`absolute inset-0 pointer-events-none ${
          isDark 
            ? "opacity-[0.035] mix-blend-screen" 
            : "opacity-[0.13] mix-blend-multiply"
        }`}
        style={{
          backgroundImage: SOLID_GRAIN,
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  );
}

export default function HeroMosaic() {
  // Seamless loop requires duplicating the 5 cells to 10
  const c1Tiles = [...C1_CELLS, ...C1_CELLS];
  const c2Tiles = [...C2_CELLS, ...C2_CELLS];
  const c3Tiles = [...C3_CELLS, ...C3_CELLS];

  return (
    <div 
      aria-hidden="true" 
      className="relative w-full max-w-[660px] h-[380px] sm:h-[540px] lg:h-[780px] overflow-hidden flex gap-[8px] sm:gap-[13px] pointer-events-none select-none justify-center lg:justify-end"
    >
      {/* Column 1: Downward Scrolling (0 -> -50%) */}
      <div 
        className="w-[102px] xs:w-[130px] sm:w-[170px] lg:w-[205px] flex flex-col shrink-0 atrium-col-down relative"
        style={{ top: "20px" }}
      >
        {c1Tiles.map((tile, i) => (
          <CardTile key={`c1-${i}`} tile={tile} />
        ))}
      </div>

      {/* Column 2: Upward Scrolling (-50% -> 0) */}
      <div 
        className="w-[102px] xs:w-[130px] sm:w-[170px] lg:w-[205px] flex flex-col shrink-0 atrium-col-up relative"
        style={{ top: "-11.5px" }}
      >
        {c2Tiles.map((tile, i) => (
          <CardTile key={`c2-${i}`} tile={tile} />
        ))}
      </div>

      {/* Column 3: Downward Scrolling (0 -> -50%) - Visible on >= 370px, smoothly scales */}
      <div 
        className="hidden min-[370px]:flex w-[102px] xs:w-[130px] sm:w-[170px] lg:w-[205px] flex-col shrink-0 atrium-col-down relative"
        style={{ top: "30px" }}
      >
        {c3Tiles.map((tile, i) => (
          <CardTile key={`c3-${i}`} tile={tile} />
        ))}
      </div>
    </div>
  );
}
