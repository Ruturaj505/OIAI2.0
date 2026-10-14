"use client";

import React from "react";
import { 
  ArrowRight, 
  Clock, 
  Calendar, 
  Cpu, 
  Layers, 
  Terminal, 
  CheckCircle2, 
  Flame,
  Award
} from "lucide-react";

interface ProgramsSectionProps {
  onSelectProgram?: (programId: string) => void;
}

const programs = [
  {
    id: "genai-flagship",
    badge: "Flagship Program",
    badgeColor: "text-[#00f2fe] border-cyan-500/40 bg-cyan-950/60",
    title: "Frontier Generative AI & Autonomous Agent Architecture",
    description: "Master modern Large Language Models, instruction fine-tuning, complex agent orchestration (LangGraph / CrewAI), multimodal reasoning, and production RAG.",
    duration: "16 Weeks • 240+ Hours",
    schedule: "Weekend Live + Midweek GPU Labs",
    nextBatch: "Starts November 15, 2025",
    tags: ["LLMs", "LangChain", "LoRA", "vLLM", "Agentic Workflows"],
    highlights: [
      "Fine-tune open-weights models (Llama 3.3, Mistral) on custom datasets",
      "Build multi-agent decision systems with memory and tool calling",
      "Deploy low-latency inference endpoints with vLLM & TensorRT",
      "Dedicated compute quota on NVIDIA A100 GPU clusters"
    ],
  },
  {
    id: "cv-multimodal",
    badge: "High Industry Demand",
    badgeColor: "text-sky-300 border-sky-500/40 bg-sky-950/60",
    title: "Applied Computer Vision & Multimodal Perception",
    description: "Deep dive into Vision Transformers, real-time edge detection (YOLOv10), 3D Gaussian splatting, and vision-language integration for autonomous systems.",
    duration: "14 Weeks • 200+ Hours",
    schedule: "Live Interactive + Lab Projects",
    nextBatch: "Starts November 22, 2025",
    tags: ["Vision Transformers", "YOLOv10", "TensorRT", "Edge AI", "PyTorch"],
    highlights: [
      "Train state-of-the-art vision models from scratch & transfer learning",
      "Optimize models for Jetson Orin and edge compute devices",
      "Implement Segment Anything (SAM-2) and video object tracking",
      "Publishable capstone project with industry partner co-review"
    ],
  },
  {
    id: "mlops-infra",
    badge: "Platform Engineering",
    badgeColor: "text-teal-300 border-teal-500/40 bg-teal-950/60",
    title: "Production MLOps, CUDA & Distributed AI Infrastructure",
    description: "Learn how elite AI companies serve billions of tokens daily. Master distributed training with Ray and PyTorch FSDP, Triton inference server, and automated CI/CD.",
    duration: "12 Weeks • 180+ Hours",
    schedule: "Live Cohort + Sandbox DevOps",
    nextBatch: "Starts December 1, 2025",
    tags: ["CUDA", "Kubernetes", "Ray", "Triton Server", "MLflow"],
    highlights: [
      "Set up distributed data parallel (DDP) and model parallel clusters",
      "Profile and eliminate GPU memory bottlenecks with torch.profiler",
      "Automate continuous model validation and canary rollouts",
      "Direct placement pipelines for AI Systems & DevOps roles"
    ],
  },
];

export default function ProgramsSection({ onSelectProgram }: ProgramsSectionProps) {
  return (
    <section id="programs" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Rigorous Engineering Curricula</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Flagship AI Programs
          </h2>
          <p className="mt-3 text-slate-400 text-base max-w-2xl">
            Designed in collaboration with AI researchers from top tech universities and Silicon Valley &amp; Bengaluru startups.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-slate-300 font-mono">
            <span className="text-cyan-400 font-bold">100%</span> Hands-on Coding
          </div>
          <div className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-slate-300 font-mono">
            <span className="text-cyan-400 font-bold">A100/H100</span> GPU Compute
          </div>
        </div>
      </div>

      {/* Program Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {programs.map((prog) => (
          <div
            key={prog.id}
            id={`program-card-${prog.id}`}
            className="group rounded-2xl bg-[#0c101b] border border-white/10 hover:border-cyan-400/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_35px_rgba(0,242,254,0.15)] relative overflow-hidden"
          >
            {/* Corner accent glow */}
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all" />

            <div>
              {/* Badge & Schedule */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${prog.badgeColor}`}>
                  {prog.badge}
                </span>
                <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  {prog.duration.split("•")[0]}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-extrabold text-white group-hover:text-cyan-200 transition-colors leading-snug">
                {prog.title}
              </h3>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                {prog.description}
              </p>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {prog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/5 text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <div className="mt-6 pt-5 border-t border-white/10 space-y-2.5">
                <p className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
                  Key Learnings:
                </p>
                {prog.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00f2fe] shrink-0 mt-0.5" />
                    <span className="leading-tight">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Cohort & CTA */}
            <div className="mt-8 pt-5 border-t border-white/10">
              <div className="flex items-center justify-between mb-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-cyan-300">
                  <Calendar className="w-3.5 h-3.5 text-[#00f2fe]" />
                  {prog.nextBatch}
                </span>
              </div>

              <button
                onClick={() => onSelectProgram?.(prog.id)}
                className="w-full py-3 rounded-xl bg-white/[0.04] hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/50 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(0,242,254,0.2)] cursor-pointer"
              >
                <span>Enroll in Program</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
