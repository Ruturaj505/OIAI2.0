"use client";

import React from "react";
import { ArrowUpRight, ArrowRight, Download } from "lucide-react";
import HeroMosaic from "./HeroMosaic";

interface HeroProps {
  onExplorePrograms?: () => void;
  onDiscoverOiai?: () => void;
  onTalkToAdvisor?: () => void;
  onDownloadBrochure?: () => void;
}

export default function Hero({ 
  onExplorePrograms, 
  onDiscoverOiai,
  onTalkToAdvisor,
  onDownloadBrochure
}: HeroProps) {
  const handleExplore = () => {
    if (onExplorePrograms) {
      onExplorePrograms();
    } else {
      const el = document.getElementById("curriculum");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAdvisor = () => {
    if (onTalkToAdvisor) {
      onTalkToAdvisor();
    } else if (onDiscoverOiai) {
      onDiscoverOiai();
    } else {
      const el = document.getElementById("why-oiai");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBrochure = () => {
    if (onDownloadBrochure) {
      onDownloadBrochure();
    } else if (onDiscoverOiai) {
      onDiscoverOiai();
    } else {
      const el = document.getElementById("curriculum");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero"
      aria-label="OIAI Hero Section"
      className="relative w-full overflow-hidden bg-[#f5f4ef] text-[#0f0f0e] pt-24 sm:pt-28 lg:pt-32 pb-0 border-b border-black/[0.08]"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
        
        {/* Left Editorial Text & Actions Column */}
        <div className="w-full lg:w-[48%] xl:w-[46%] flex flex-col z-10 shrink-0 pb-12 sm:pb-16 lg:pb-20 -mt-2 sm:-mt-4 lg:-mt-8">
          
          {/* Headline - Proportional Editorial Sizing */}
          <h1 className="font-['Archivo',sans-serif] font-black text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[50px] leading-[1.08] tracking-[-0.03em] uppercase text-[#0f0f0e] m-0">
            <span className="block">Learn Artificial Intelligence.</span>
            <span className="block text-[#0f0f0e]">Build Real Skills.</span>
            <span className="block text-[#62615d]">Launch Your AI Career.</span>
          </h1>

          {/* Subheading Body Text */}
          <p className="mt-5 sm:mt-6 max-w-xl text-sm sm:text-[15px] lg:text-[16px] leading-[1.58] text-[#333331] font-normal">
            Industry-focused AI education for students, graduates and professionals—with practical projects, expert mentorship, internships and career guidance at an <strong>Academic Excellence Benchmark</strong>, 2026.
          </p>

          {/* Action CTAs Cluster */}
          <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
            
            {/* Primary Pill Button + Rotated Circle Button */}
            <div className="inline-flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleExplore}
                className="h-11 sm:h-12 px-6 rounded-[18px] bg-[#0f0f0e] text-white font-['Archivo',sans-serif] text-sm sm:text-[15px] font-bold flex items-center justify-center hover:bg-[#252525] hover:-translate-y-0.5 transition-all cursor-pointer shadow-md"
              >
                Explore AI Programs
              </button>

              <button
                type="button"
                onClick={handleExplore}
                aria-label="Explore AI Programs quick link"
                className="w-11 sm:h-12 h-11 sm:w-12 rounded-full bg-[#0f0f0e] text-white flex items-center justify-center -rotate-45 hover:scale-105 transition-transform cursor-pointer shadow-md"
              >
                <ArrowUpRight className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Talk to an AI Career Advisor */}
            <button
              type="button"
              onClick={handleAdvisor}
              className="inline-flex items-center gap-2.5 text-sm font-bold text-[#0f0f0e] hover:opacity-75 transition-opacity cursor-pointer group py-2"
            >
              <span>Talk to an AI Advisor</span>
              <span className="w-7 h-7 rounded-full bg-[#0f0f0e] flex items-center justify-center shrink-0 group-hover:translate-x-0.5 transition-transform">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </span>
            </button>

            {/* Secondary Brochure Pill */}
            <button
              type="button"
              onClick={handleBrochure}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black/[0.05] hover:bg-black/[0.08] text-xs sm:text-sm font-semibold text-[#0f0f0e] transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#0f0f0e]" />
              <span>Course Brochure</span>
            </button>

          </div>

        </div>

        {/* Right 3-Column Marquee Mosaic */}
        <div className="w-full lg:w-[52%] xl:w-[54%] flex justify-center lg:justify-end shrink-0 self-end -mb-[1px]">
          <HeroMosaic />
        </div>

      </div>
    </section>
  );
}
