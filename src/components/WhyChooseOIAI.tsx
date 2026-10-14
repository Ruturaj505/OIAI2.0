"use client";

import React from "react";
import { INSTITUTIONAL_VALUES } from "@/data/institutionalValues";
import { 
  BrainCircuit,
  FolderGit2, 
  Users, 
  Briefcase, 
  TrendingUp,
  Layers,
  Award
} from "lucide-react";

const iconMap = {
  BrainCircuit,
  FolderGit2,
  Users,
  Briefcase,
  TrendingUp,
  Layers,
};

export default function WhyChooseOIAI() {

  return (
    <section 
      id="why-oiai"
      aria-label="Why Choose OIAI"
      className="w-full py-24 lg:py-32 bg-[#17153B] text-slate-50 border-b border-[#45416F]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Staggered Hierarchy */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#25234F] border border-[#45416F] text-[#A5B4FC] text-xs font-mono font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <Award className="w-3.5 h-3.5 text-[#A5B4FC]" aria-hidden="true" />
            <span>INSTITUTIONAL PRIORITIES • WHY OIAI</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F1F5F9] tracking-tight">
            Why Choose Odisha Institute of AI
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#CBD5E1] leading-relaxed">
            Six institutional commitments guiding our curriculum development, instructional design, and learner mentoring.
          </p>
        </div>

        {/* 6 Value Cards Grid with Staggered Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INSTITUTIONAL_VALUES.map((val, index) => {
            const IconComponent = iconMap[val.iconName];
            return (
              <div
                key={val.id}
                id={`value-card-${val.id}`}
                className="group relative rounded-2xl bg-[#25234F] border border-[#45416F] p-7 shadow-xs hover:border-[#A5B4FC] hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#17153B] border border-[#45416F] flex items-center justify-center text-[#A5B4FC] group-hover:border-[#A5B4FC] group-hover:bg-[#1E1B4B] transition-colors shadow-xs">
                      <IconComponent className="w-6 h-6 text-[#A5B4FC]" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#A5B4FC] bg-[#17153B] px-2.5 py-1 rounded-md border border-[#45416F]">
                      Standard {val.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F1F5F9] leading-snug group-hover:text-[#A5B4FC] transition-colors">
                    {val.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#CBD5E1] leading-relaxed">
                    {val.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#45416F] flex items-center justify-between text-xs font-mono text-slate-300">
                  <span>Policy Framework</span>
                  <span className="text-[#A5B4FC] font-semibold">Institutional Principle</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
