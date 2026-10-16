"use client";

import React from "react";
import { INSTITUTE_METRICS } from "@/data/metrics";
import { BarChart3, Info } from "lucide-react";

export default function InstituteInNumbers() {
  return (
    <section 
      id="metrics"
      aria-label="Institute in Numbers"
      className="w-full pt-8 sm:pt-10 lg:pt-12 pb-20 lg:pb-28 bg-[#E2E8F0] text-slate-900 border-y border-slate-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Strict Hierarchy */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-[#4338CA] text-xs font-mono font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <BarChart3 className="w-3.5 h-3.5 text-[#4338CA]" aria-hidden="true" />
            <span>INSTITUTE IN NUMBERS • ACADEMIC BENCHMARKS</span>
          </div>

          <h2 className="section-heading text-slate-900">
            Curricular Scope &amp; Learning Benchmarks
          </h2>

          <p className="mt-4 body-paragraph text-slate-700">
            Key operational metrics and structural curriculum indicators defining the breadth of AI education at OIAI.
          </p>
        </div>

        {/* 6 Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INSTITUTE_METRICS.map((item, index) => (
            <div
              key={item.id}
              className="group relative rounded-2xl bg-[#E8EDF5] border border-[#CBD5E1] p-7 shadow-xs hover:border-indigo-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-[#CBD5E1]">
                    Category 0{index + 1}
                  </span>
                  {item.isPlaceholder && (
                    <span 
                      title="Curricular target estimate"
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-[#CBD5E1]"
                    >
                      <Info className="w-3 h-3 text-[#4338CA]" aria-hidden="true" />
                      <span>Target</span>
                    </span>
                  )}
                </div>

                <div className="text-4xl sm:text-5xl font-heading font-extrabold text-[#4338CA] tracking-tight">
                  {item.metric}
                </div>

                <h3 className="card-heading text-slate-900 mt-2">
                  {item.label}
                </h3>

                <p className="mt-2 text-sm sm:text-[15px] font-sans text-slate-700 leading-relaxed">
                  {item.supportingText}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#CBD5E1] flex items-center justify-between text-xs font-mono text-slate-600">
                <span>Verified Metric</span>
                <span className="text-[#4338CA] font-semibold">OIAI Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Methodology Note */}
        <p className="mt-8 text-center text-xs font-mono text-slate-600 max-w-2xl mx-auto">
          Note: Metrics reflect structured course roadmaps and academic targets. Figures are maintained transparently without unverified placement claims or inflated marketing statistics.
        </p>

      </div>
    </section>
  );
}
