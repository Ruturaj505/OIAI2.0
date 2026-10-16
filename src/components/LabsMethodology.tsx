"use client";

import React, { useState } from "react";
import { METHODOLOGY_STAGES } from "@/data/methodology";
import { Terminal } from "lucide-react";

export default function LabsMethodology() {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const activeStage = METHODOLOGY_STAGES[activeStageIndex];

  return (
    <section 
      id="methodology"
      aria-label="Labs and Learning Methodology"
      className="w-full py-24 lg:py-32 bg-[#1E1B4B] text-slate-50 border-y border-[#45416F] relative overflow-hidden"
    >
      {/* Subtle Purple Research Radial Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 left-10 w-96 h-96 bg-gradient-to-tr from-purple-600/10 via-indigo-500/5 to-transparent blur-[130px] rounded-full pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-indigo-700/8 via-purple-600/5 to-transparent blur-[130px] rounded-full pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with Staggered Reveal */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#272451] border border-[#45416F] text-[#C4B5FD] text-xs font-mono font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <Terminal className="w-3.5 h-3.5 text-[#C4B5FD]" aria-hidden="true" />
            <span>LABS &amp; METHODOLOGY • 6-STAGE PROGRESSION</span>
          </div>

          <h2 className="section-heading text-[#F1F5F9]">
            The Six-Stage Learning Lifecycle
          </h2>

          <p className="mt-4 body-paragraph text-[#CBD5E1]">
            Every technical concept progresses through six structured developmental phases — taking ideas from mathematical formulation to measurable, deployed software.
          </p>
        </div>

        {/* Desktop Connected Stage Progress Bar */}
        <div className="hidden lg:block mb-12">
          <div className="grid grid-cols-6 gap-3 relative">
            {/* Horizontal Connecting Guide Line */}
            <div 
              aria-hidden="true" 
              className="absolute top-6 left-8 right-8 h-0.5 bg-[#45416F] z-0" 
            />

            {METHODOLOGY_STAGES.map((stage, idx) => {
              const isActive = activeStageIndex === idx;
              return (
                <button
                  key={stage.step}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`relative z-10 text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-purple-300 ${
                    isActive 
                      ? "bg-[#272451] border-[#C4B5FD] shadow-[0_0_24px_rgba(196,181,253,0.18)]" 
                      : "bg-[#272451]/60 border-[#45416F] hover:bg-[#272451]/80 hover:border-[#6366F1]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                      isActive ? "bg-[#C4B5FD] text-[#1E1B4B]" : "bg-[#1E1B4B] text-slate-300"
                    }`}>
                      0{stage.number}
                    </span>
                    <span className="text-[10px] font-mono text-purple-300 uppercase">
                      {stage.step}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-[#F1F5F9] truncate">
                    {stage.name}
                  </h3>
                  <p className="text-[11px] font-mono text-slate-300 truncate mt-0.5">
                    {stage.tagline}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="reveal-card stagger-1 lg:hidden space-y-3 mb-10">
          {METHODOLOGY_STAGES.map((stage, idx) => {
            const isActive = activeStageIndex === idx;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStageIndex(idx)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between gap-3 focus-visible:outline-2 focus-visible:outline-purple-300 ${
                  isActive
                    ? "bg-[#272451] border-[#C4B5FD] shadow-[0_0_24px_rgba(196,181,253,0.18)]"
                    : "bg-[#272451]/60 border-[#45416F]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold shrink-0 ${
                    isActive ? "bg-[#C4B5FD] text-[#1E1B4B] font-extrabold" : "bg-[#1E1B4B] text-slate-300"
                  }`}>
                    0{stage.number}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-[#F1F5F9]">{stage.name}</h3>
                    <p className="text-xs font-mono text-slate-300">{stage.tagline}</p>
                  </div>
                </div>

                <span className="text-xs font-mono text-[#C4B5FD]">
                  {isActive ? "Viewing" : "Select"}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Breakdown Panel */}
        <div className="reveal-card stagger-2 rounded-2xl bg-[#272451] border border-[#45416F] p-6 sm:p-10 shadow-[0_0_24px_rgba(196,181,253,0.16)] relative overflow-hidden transition-all duration-300">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs font-mono font-semibold px-3 py-1 rounded-md bg-[#1E1B4B] text-[#C4B5FD] border border-[#45416F]">
              Stage 0{activeStage.number} of 06
            </span>
            <span className="text-xs font-mono text-[#C4B5FD]">
              {activeStage.tagline}
            </span>
          </div>

          <h3 className="card-heading text-2xl sm:text-3xl font-extrabold text-[#F1F5F9] tracking-tight">
            {activeStage.name} — {activeStage.tagline}
          </h3>

          <p className="mt-4 body-paragraph text-[#CBD5E1] max-w-4xl">
            {activeStage.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#45416F]">
            <div className="p-4 rounded-xl bg-[#1E1B4B] border border-[#45416F]">
              <p className="text-xs font-mono text-[#C4B5FD] uppercase tracking-wider font-semibold">Primary Engineering Action:</p>
              <p className="text-sm text-slate-200 mt-1 font-medium">{activeStage.keyAction}</p>
            </div>
            
            <div className="p-4 rounded-xl bg-[#1E1B4B] border border-[#45416F]">
              <p className="text-xs font-mono text-teal-400 uppercase tracking-wider font-semibold">Stage Milestone Deliverable:</p>
              <p className="text-sm text-slate-200 mt-1 font-medium">{activeStage.deliverable}</p>
            </div>
          </div>
        </div>

        {/* Computational Sandbox Clarification */}
        <p className="mt-8 text-center text-xs font-mono text-slate-300 max-w-2xl mx-auto">
          Training takes place in cloud-hosted JupyterLab environments and virtual software sandboxes. Physical laboratory access is not implied.
        </p>

      </div>

    </section>
  );
}
