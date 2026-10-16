"use client";

import React from "react";
import { PEDAGOGICAL_PILLARS } from "@/data/pedagogy";
import { 
  FolderGit2, 
  BrainCircuit, 
  Terminal, 
  ShieldCheck, 
  Users, 
  TrendingUp,
  Layers
} from "lucide-react";

const iconMap = {
  FolderGit2,
  BrainCircuit,
  Terminal,
  ShieldCheck,
  Users,
  TrendingUp,
};

export default function PedagogicalPillars() {
  return (
    <section 
      id="pillars"
      aria-label="Pedagogical Pillars"
      className="w-full py-24 lg:py-32 bg-[#F1F5F9] text-slate-900 border-b border-slate-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-[#4F46E5] text-xs font-mono font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <Layers className="w-3.5 h-3.5 text-[#4F46E5]" aria-hidden="true" />
            <span>PEDAGOGICAL PILLARS • HOW WE TEACH</span>
          </div>

          <h2 className="section-heading text-slate-900">
            The Six Pillars of OIAI Education
          </h2>

          <p className="mt-4 body-paragraph text-slate-700">
            A principled, engineering-first approach designed to build genuine conceptual mastery, practical coding proficiency, and long-term research resilience.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PEDAGOGICAL_PILLARS.map((pillar, index) => {
            const IconComponent = iconMap[pillar.iconName];
            return (
              <div
                key={pillar.id}
                className="group relative rounded-2xl bg-[#E9EAFE] border border-[#CBD5E1] p-7 shadow-xs hover:border-indigo-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 border border-[#CBD5E1] flex items-center justify-center text-[#4F46E5] group-hover:bg-indigo-50 group-hover:border-indigo-300 transition-colors">
                      <IconComponent className="w-6 h-6 text-[#4F46E5]" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#4F46E5] bg-indigo-50/80 px-2.5 py-1 rounded-md border border-indigo-200">
                      Pillar 0{index + 1}
                    </span>
                  </div>

                  <h3 className="card-heading text-slate-900 leading-snug group-hover:text-indigo-700 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-[15px] font-sans text-slate-700 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#CBD5E1] flex items-center justify-between text-xs font-mono text-slate-600">
                  <span>Curricular Priority</span>
                  <span className="text-[#4F46E5] font-semibold">Active Practice</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
