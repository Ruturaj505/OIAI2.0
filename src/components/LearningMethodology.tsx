"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Wrench, 
  Rocket, 
  Briefcase, 
  Award, 
  CheckCircle2, 
  ChevronRight,
  TrendingUp,
  Cpu
} from "lucide-react";

interface PipelineStep {
  step: string;
  number: string;
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  deliverables: string[];
  duration: string;
  badge: string;
}

const pipelineSteps: PipelineStep[] = [
  {
    step: "01",
    number: "STAGE 1",
    phase: "LEARN",
    title: "Learn Fundamentals",
    subtitle: "Mathematical & Algorithmic Foundations",
    description: "Master foundational concepts: linear algebra, calculus, probability, Python 3.12, neural network math, and modern computer architecture.",
    icon: BookOpen,
    deliverables: ["Tensor Mechanics in PyTorch", "Matrix Calculus & Optimization", "Vectorized Python Architecture"],
    duration: "Weeks 1–3",
    badge: "Theory + Code",
  },
  {
    step: "02",
    number: "STAGE 2",
    phase: "PRACTICE",
    title: "Practice with AI Tools",
    subtitle: "Modern Toolchain & GPU Workbenches",
    description: "Hands-on labs using Hugging Face, PyTorch, vLLM, LangChain, Weights & Biases, and CUDA kernels on dedicated NVIDIA nodes.",
    icon: Wrench,
    deliverables: ["Hugging Face Transformers Hub", "vLLM Low-Latency Serving", "Distributed Training Sandboxes"],
    duration: "Weeks 4–7",
    badge: "100% Hands-On",
  },
  {
    step: "03",
    number: "STAGE 3",
    phase: "BUILD",
    title: "Build Projects",
    subtitle: "End-to-End Production Engineering",
    description: "Architect and fine-tune frontier models, implement GraphRAG pipelines, and build autonomous multi-agent systems with tool calling.",
    icon: Rocket,
    deliverables: ["Multi-Agent Swarm Orchestrator", "Enterprise RAG Knowledge Graph", "Custom LoRA Model Fine-Tune"],
    duration: "Weeks 8–11",
    badge: "Capstone Systems",
  },
  {
    step: "04",
    number: "STAGE 4",
    phase: "ASSIGNMENTS",
    title: "Work on Real-World Assignments",
    subtitle: "Production Problem Solving",
    description: "Tackle real enterprise challenge briefs, live telemetry debugging, schema optimization, and system latency profiling.",
    icon: Cpu,
    deliverables: ["Production PR Commits", "Benchmark Evaluation Reports", "Latency Optimization Benchmarks"],
    duration: "Weeks 12–14",
    badge: "Enterprise Grade",
  },
  {
    step: "05",
    number: "STAGE 5",
    phase: "INTERN",
    title: "Complete Internship",
    subtitle: "Live Startup & Incubator Immersion",
    description: "Work on live commercial codebases, solve real company tickets, and participate in daily standups with partner AI startups & labs.",
    icon: Briefcase,
    deliverables: ["Direct Startup/Lab Placement", "Production Code PRs Merged", "Live Product Telemetry & Metrics"],
    duration: "Weeks 15–20",
    badge: "Real Experience",
  },
  {
    step: "06",
    number: "STAGE 6",
    phase: "CERTIFY",
    title: "Build Portfolio & Certify",
    subtitle: "Verifiable Proof-of-Work",
    description: "Publish your open-source repositories, present capstone defenses to an industry jury, and earn verifiable OIAI Certification.",
    icon: Award,
    deliverables: ["Jury Capstone Defense", "Peer Code & Security Audit", "Verifiable OIAI Credential & ID"],
    duration: "Weeks 21–22",
    badge: "Industry Certified",
  },
  {
    step: "07",
    number: "STAGE 7",
    phase: "GET CAREER READY",
    title: "Prepare for Jobs",
    subtitle: "Career Placement & Interview Sprints",
    description: "1:1 mock technical interviews, system design drills, resume revamp, GitHub optimization, and exclusive hiring drives with premier AI firms.",
    icon: TrendingUp,
    deliverables: ["1:1 Technical Mock Interviews", "Direct Referrals to Hiring Partners", "Comprehensive Salary Negotiation"],
    duration: "Week 23+",
    badge: "Job Ready",
  },
];

export default function LearningMethodology() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section 
      id="methodology" 
      className="relative w-full py-24 lg:py-32 bg-[#1E1B4B] text-slate-50 border-b border-[#45416F] transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header: Clear Typographic Hierarchy */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#272451] border border-[#45416F] text-[#C4B5FD] text-xs font-mono mb-4 shadow-sm">
            <Cpu className="w-3.5 h-3.5 text-[#C4B5FD]" />
            <span className="font-semibold tracking-wider uppercase">LABS &amp; METHODOLOGY • 7-STAGE PROGRESSION</span>
          </div>

          <h2 className="section-heading text-[#F1F5F9]">
            AI Learning Methodology
          </h2>

          {/* Visual Progression Banner specified in Item 13 */}
          <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-4 py-2 rounded-xl bg-[#25234F] border border-[#45416F] text-xs sm:text-sm font-mono font-bold text-[#A5B4FC] shadow-xs">
            <span>LEARN</span>
            <span className="text-[#45416F]">→</span>
            <span>PRACTICE</span>
            <span className="text-[#45416F]">→</span>
            <span>BUILD</span>
            <span className="text-[#45416F]">→</span>
            <span>INTERN</span>
            <span className="text-[#45416F]">→</span>
            <span>CERTIFY</span>
            <span className="text-[#45416F]">→</span>
            <span className="text-teal-400">GET CAREER READY</span>
          </div>

          <p className="mt-4 body-paragraph text-[#CBD5E1] max-w-2xl mx-auto">
            From theoretical tensor calculus foundations to commercial deployment across 7 structured, outcome-driven stages.
          </p>
        </div>

        {/* 6-Step Horizontal Pipeline Container */}
        <div className="relative z-10">
          {/* Desktop Animated Connecting SVG Beam Line */}
          <div className="hidden lg:block relative w-full h-12 mb-8" aria-hidden="true">
            <svg className="w-full h-12 overflow-visible" viewBox="0 0 1200 48" fill="none">
              <path
                d="M 50 24 L 1150 24"
                stroke="rgba(148, 163, 184, 0.3)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <motion.path
                d="M 50 24 L 1150 24"
                stroke="url(#beamGradient)"
                strokeWidth="3.5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2563eb" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#7c3aed" stopOpacity="1" />
                  <stop offset="100%" stopColor="#14b8a6" stopOpacity="1" />
                </linearGradient>
              </defs>

              {[50, 233, 416, 600, 783, 966, 1150].map((cx, idx) => (
                <g key={idx}>
                  <circle
                    cx={cx}
                    cy="24"
                    r={activeStep === idx ? "7" : "5"}
                    fill={activeStep === idx ? "#7c3aed" : "#94a3b8"}
                    stroke={activeStep === idx ? "#7c3aed" : "rgba(255, 255, 255, 0.4)"}
                    strokeWidth="2"
                    className="transition-all duration-300"
                  />
                  {activeStep === idx && (
                    <circle
                      cx={cx}
                      cy="24"
                      r="12"
                      fill="none"
                      stroke="#7c3aed"
                      strokeWidth="1.5"
                      opacity="0.6"
                      className="animate-ping"
                    />
                  )}
                </g>
              ))}
            </svg>
          </div>

          {/* 7 Step Cards Grid (Card-Based Grouping) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3">
            {pipelineSteps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onClick={() => setActiveStep(idx)}
                  className={`relative group rounded-2xl p-5 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? "bg-[#272451] border-[#C4B5FD] shadow-[0_0_24px_rgba(196,181,253,0.22)] -translate-y-1.5"
                      : "bg-[#25234F] border-[#45416F] hover:border-[#A5B4FC]/50 hover:bg-[#272451] shadow-xs"
                  }`}
                >
                  {/* Step Header */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                          isActive
                            ? "bg-[#1E1B4B] text-[#C4B5FD] border-[#45416F]"
                            : "bg-[#1E1B4B] text-[#CBD5E1] border-[#45416F]"
                        }`}
                      >
                        {step.step}
                      </span>
                      <span className="text-[10px] font-mono text-[#A5B4FC] font-bold">
                        {step.phase}
                      </span>
                    </div>

                    {/* Icon */}
                    <div
                      className={`w-10 h-10 rounded-xl p-2.5 mb-3.5 flex items-center justify-center transition-all ${
                        isActive
                          ? "bg-[#1E1B4B] text-[#C4B5FD] shadow-xs"
                          : "bg-[#1E1B4B] text-[#CBD5E1] group-hover:text-[#C4B5FD]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Title & Subhead */}
                    <h3 className="card-heading text-sm sm:text-base font-bold text-[#F1F5F9] group-hover:text-[#A5B4FC] transition-colors leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-[11px] font-mono text-[#CBD5E1] mt-1 leading-snug">
                      {step.subtitle}
                    </p>
                  </div>

                  {/* Duration & Badge */}
                  <div className="mt-5 pt-3 border-t border-[#45416F] flex items-center justify-between text-[11px]">
                    <span className="font-mono text-[#CBD5E1]">{step.duration}</span>
                    <span className="font-mono text-teal-400 font-medium text-[10px]">{step.badge}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Deep Dive Panel for Active Step */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 rounded-2xl bg-[#25234F] border border-[#45416F] p-6 sm:p-8 relative overflow-hidden shadow-xs"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#7c3aed]/10 via-[#2563eb]/10 to-transparent blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#1E1B4B] text-[#C4B5FD] border border-[#45416F]">
                    {pipelineSteps[activeStep].number} • {pipelineSteps[activeStep].phase}
                  </span>
                  <span className="text-xs font-mono text-[#CBD5E1]">
                    {pipelineSteps[activeStep].duration}
                  </span>
                </div>

                <h3 className="card-heading text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#F1F5F9] tracking-tight">
                  {pipelineSteps[activeStep].title} — {pipelineSteps[activeStep].subtitle}
                </h3>

                <p className="body-paragraph text-sm sm:text-base text-[#CBD5E1] max-w-3xl">
                  {pipelineSteps[activeStep].description}
                </p>

                {/* Deliverables */}
                <div className="pt-2">
                  <p className="text-xs font-mono font-semibold uppercase text-[#A5B4FC] tracking-wider mb-2.5">
                    Milestone Deliverables &amp; Artifacts:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {pipelineSteps[activeStep].deliverables.map((d, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-[#1E1B4B] border border-[#45416F] flex items-start gap-2 text-xs text-[#CBD5E1] shadow-xs"
                      >
                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step Progress Visual Pill */}
              <div className="lg:col-span-4 p-5 rounded-2xl bg-[#1E1B4B] border border-[#45416F] space-y-3 shadow-xs">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#CBD5E1]">Stage Progression</span>
                  <span className="text-[#A5B4FC] font-bold">{Math.round(((activeStep + 1) / 7) * 100)}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#25234F] overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#2563eb] via-[#7c3aed] to-[#14b8a6] transition-all duration-500 rounded-full"
                    style={{ width: `${((activeStep + 1) / 7) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-[#CBD5E1] leading-relaxed pt-1 font-sans">
                  Each phase unlocks direct access to dedicated compute nodes and next-tier project reviews.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
