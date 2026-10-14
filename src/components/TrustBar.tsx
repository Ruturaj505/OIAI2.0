"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Cpu, 
  Users, 
  Briefcase, 
  Rocket, 
  ArrowUpRight, 
  CheckCircle2,
  ShieldCheck,
  Award,
  Zap,
  TrendingUp,
  Terminal
} from "lucide-react";

interface TrustBadge {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  metric: string;
}

const trustBadges: TrustBadge[] = [
  {
    id: "practical-learning",
    title: "Practical Learning",
    tagline: "100% Code-First",
    description: "Build directly in JupyterLab & cloud GPUs. Zero passive slide decks; only production repos and verifiable code commits.",
    icon: Code2,
    accentColor: "#2563EB",
    metric: "120+ Coding Labs",
  },
  {
    id: "live-projects",
    title: "Live Projects",
    tagline: "Frontier Capstones",
    description: "Train & deploy enterprise LLM agents, RAG engines, multimodal pipelines, and autonomous workflows.",
    icon: Cpu,
    accentColor: "#7C3AED",
    metric: "4+ Flagship Projects",
  },
  {
    id: "expert-mentorship",
    title: "Expert Mentorship",
    tagline: "1:1 AI Scientists",
    description: "Learn directly from researchers and senior AI architects with weekly 1-on-1 code reviews and direct feedback.",
    icon: Users,
    accentColor: "#14B8A6",
    metric: "1:1 Weekly Reviews",
  },
  {
    id: "internship-opportunities",
    title: "Internship Opportunities",
    tagline: "Direct Placement",
    description: "Guaranteed interview pathways and funded research internships across partner deep-tech companies.",
    icon: Briefcase,
    accentColor: "#2563EB",
    metric: "94% Placement Rate",
  },
  {
    id: "career-support",
    title: "Career Support",
    tagline: "End-to-End Coaching",
    description: "Technical mock interviews, GitHub portfolio polishing, resume revamp, and lifetime access to alumni network.",
    icon: Rocket,
    accentColor: "#7C3AED",
    metric: "Dedicated AI Coach",
  },
];

const instituteNumbers = [
  { label: "Hands-on GPU Labs", value: "120+", highlight: "NVIDIA A100 & Cloud", icon: Terminal },
  { label: "Production Capstones", value: "4+", highlight: "Enterprise Agents & RAG", icon: Cpu },
  { label: "Weekly Mentor Reviews", value: "1-on-1", highlight: "Staff AI Researchers", icon: Users },
  { label: "Placement Success Rate", value: "94%", highlight: "Top Indian AI Labs", icon: TrendingUp },
];

export default function TrustBar() {
  const [activeBadge, setActiveBadge] = useState<string | null>(null);

  return (
    <section 
      id="trust-indicators" 
      className="relative w-full py-24 lg:py-32 bg-[#f8fafc] dark:bg-[#0c101d] border-y border-slate-200/80 dark:border-white/10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Clear Typographic Hierarchy */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100/70 dark:bg-violet-950/60 border border-violet-300/60 dark:border-violet-500/30 text-[#7c3aed] dark:text-violet-300 text-xs font-mono mb-4 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-[#7c3aed]" />
            <span className="font-semibold tracking-wider uppercase">INSTITUTE IN NUMBERS • ENGINEERING ADVANTAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0f172a] dark:text-white tracking-tight">
            The OIAI Engineering Advantage
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Verifiable institutional metrics, dedicated GPU compute clusters, and 1:1 mentorship benchmarks powering our frontier AI ecosystem.
          </p>
        </div>

        {/* 1. Institute In Numbers: Elevated Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {instituteNumbers.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-slate-100 dark:bg-[#0e1322] border border-slate-200/80 dark:border-white/10 p-5 sm:p-6 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 dark:hover:shadow-[0_0_25px_rgba(124,58,237,0.18)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-[#2563eb] dark:text-blue-400 border border-blue-200/60 dark:border-blue-900/50 group-hover:border-[#7c3aed]/40 transition-colors">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-white/5">
                    Metric 0{idx + 1}
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-[#2563eb] to-[#7c3aed] bg-clip-text text-transparent dark:from-blue-400 dark:to-violet-400 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] font-mono text-[#14b8a6] mt-1 font-medium">
                  {stat.highlight}
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. Card-Based Grouping: 5 Trust Pillars in Elevated Container */}
        <div className="rounded-2xl bg-slate-100 dark:bg-[#0e1322]/90 border border-slate-200/80 dark:border-white/10 p-6 sm:p-8 shadow-sm">
          
          {/* Subtle top indicator bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-6 border-b border-slate-200/70 dark:border-white/10 gap-2">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-md bg-violet-50 dark:bg-violet-950/40 text-[#7c3aed] dark:text-violet-400 border border-violet-200 dark:border-violet-800/40">
                <Award className="w-3.5 h-3.5" />
              </span>
              <span className="text-xs font-mono font-bold tracking-wider text-slate-800 dark:text-slate-200 uppercase">
                Frontier Pedagogical Pillars
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#14b8a6]" />
                Odisha&apos;s Premier AI Hub
              </span>
              <span className="hidden md:inline-block text-slate-300 dark:text-slate-700">|</span>
              <span className="hidden md:flex items-center gap-1.5 text-[#2563eb] dark:text-blue-400 font-semibold">
                Govt &amp; Industry Aligned
              </span>
            </div>
          </div>

          {/* 5 Trust Badges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {trustBadges.map((badge) => {
              const Icon = badge.icon;
              const isHovered = activeBadge === badge.id;

              return (
                <motion.div
                  key={badge.id}
                  id={`trust-badge-${badge.id}`}
                  onMouseEnter={() => setActiveBadge(badge.id)}
                  onMouseLeave={() => setActiveBadge(null)}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className={`group relative rounded-2xl p-4 sm:p-5 transition-all duration-300 cursor-default ${
                    isHovered
                      ? "bg-slate-50/90 dark:bg-white/[0.06] border-[#7c3aed]/40 dark:border-[#7c3aed]/50 shadow-md dark:shadow-[0_0_25px_rgba(124,58,237,0.18)]"
                      : "bg-slate-50/50 dark:bg-white/[0.02] border-slate-200/60 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
                  } border`}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`p-2.5 rounded-xl transition-all duration-300 ${
                        isHovered
                          ? "bg-violet-100 text-[#7c3aed] dark:bg-[#7c3aed]/20 dark:text-violet-300 border-violet-300 dark:border-[#7c3aed]/40 shadow-sm"
                          : "bg-slate-100 text-slate-600 dark:bg-white/5 dark:text-slate-300 border-slate-200/80 dark:border-white/10"
                      } border`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-white/5 group-hover:text-[#7c3aed] dark:group-hover:text-violet-300 group-hover:border-violet-300 dark:group-hover:border-violet-500/40 transition-colors">
                      {badge.metric}
                    </span>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-sm font-bold text-[#0f172a] dark:text-white group-hover:text-[#2563eb] dark:group-hover:text-blue-400 transition-colors flex items-center gap-1">
                      <span>{badge.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#7c3aed] transition-opacity" />
                    </h3>
                    <p className="text-[11px] font-mono font-medium text-[#14b8a6] mt-0.5">
                      {badge.tagline}
                    </p>
                  </div>

                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                    {badge.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Trust Ticker / Partners */}
          <div className="mt-8 pt-4 border-t border-slate-200/70 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] shrink-0" />
              <span className="font-semibold text-slate-700 dark:text-slate-300">Stack &amp; Frameworks:</span>
              <span className="font-mono text-slate-500 dark:text-slate-400 break-words">PyTorch • Hugging Face • LangChain • CUDA • DeepSeek • vLLM</span>
            </div>
            <div className="font-mono text-[11px] text-[#2563eb] dark:text-blue-400 font-medium shrink-0">
              OIAI • Bhubaneswar, India
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
