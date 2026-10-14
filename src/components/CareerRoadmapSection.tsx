"use client";

import React, { useState } from "react";
import { 
  Bot, 
  Eye, 
  Server, 
  BrainCircuit, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  Compass,
  DollarSign
} from "lucide-react";

interface CareerPath {
  id: string;
  title: string;
  role: string;
  salary: string;
  demand: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: string[];
  keyProjects: string[];
  description: string;
}

const careerPaths: CareerPath[] = [
  {
    id: "genai",
    title: "AI Engineer (LLMs & Agents)",
    role: "Frontier Generative AI",
    salary: "₹18 - ₹38 LPA",
    demand: "Extremely High (98% Growth)",
    icon: Bot,
    skills: ["LangChain / LlamaIndex", "Fine-Tuning (LoRA / QLoRA)", "vLLM / TensorRT-LLM", "Vector Databases & GraphRAG"],
    keyProjects: [
      "Autonomous Multi-Agent DevOps Copilot",
      "Enterprise Multi-Tenant RAG Knowledge Base",
      "Local LLM Quantization & Hardware Optimization"
    ],
    description: "Architect and deploy autonomous agentic systems that orchestrate complex workflows and reason across multimodal knowledge graphs.",
  },
  {
    id: "vision",
    title: "Computer Vision Specialist",
    role: "Visual Intelligence & Edge AI",
    salary: "₹16 - ₹34 LPA",
    demand: "High (Surveillance, Robotics & Health)",
    icon: Eye,
    skills: ["Vision Transformers (ViT)", "YOLOv10 / SAM-2", "TensorRT / ONNX Runtime", "NeRF & 3D Generative AI"],
    keyProjects: [
      "Real-time Industrial Defect Detection on Edge",
      "Multimodal Medical Imaging Segmentation",
      "Autonomous Mobile Robot Navigation Mesh"
    ],
    description: "Design state-of-the-art visual models capable of sub-millisecond edge inferences for drones, industrial robotics, and medical diagnostics.",
  },
  {
    id: "mlops",
    title: "MLOps & AI Platform Engineer",
    role: "Distributed AI Infrastructure",
    salary: "₹20 - ₹42 LPA",
    demand: "Critical Enterprise Need",
    icon: Server,
    skills: ["Kubernetes & Ray Core", "CUDA Kernel Optimization", "Triton Inference Server", "MLflow & DVC Pipelines"],
    keyProjects: [
      "Distributed 70B Parameter Fine-Tuning Cluster",
      "High-throughput Low-latency Model Serving API",
      "Automated Drift Detection & Continuous Training Loop"
    ],
    description: "Build robust infrastructure to train at scale on multi-GPU clusters and reliably serve AI models with 99.99% uptime.",
  },
  {
    id: "research",
    title: "AI Research Scientist",
    role: "Algorithmic Innovation",
    salary: "₹22 - ₹48 LPA",
    demand: "Research Labs & Deep Tech Startups",
    icon: BrainCircuit,
    skills: ["Novel Architecture Design", "Mathematical Foundations", "PyTorch Custom C++ Ops", "NeurIPS / CVPR Paper Implementation"],
    keyProjects: [
      "Novel State Space Model (Mamba) Optimization",
      "Self-Supervised Representation Learning Suite",
      "Theoretical Convergence Analysis on Sparse Models"
    ],
    description: "Push the boundaries of artificial intelligence through original algorithmic experiments and foundational model research.",
  },
];

interface CareerRoadmapSectionProps {
  onSelectPath?: (pathId: string) => void;
}

export default function CareerRoadmapSection({ onSelectPath }: CareerRoadmapSectionProps) {
  const [selectedPath, setSelectedPath] = useState<string>("genai");

  const currentPath = careerPaths.find((p) => p.id === selectedPath) || careerPaths[0];
  const Icon = currentPath.icon;

  return (
    <section id="career-paths" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
          <Compass className="w-3.5 h-3.5" />
          <span>Tailored AI Engineering Trajectories</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Find Your AI Career Path
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-400">
          Whether you aspire to build autonomous AI agents, train vision models, or orchestrate high-throughput GPU clusters, OIAI has a battle-tested roadmap for you.
        </p>
      </div>

      {/* Path Selector Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {careerPaths.map((path) => {
          const PathIcon = path.icon;
          const isSelected = selectedPath === path.id;

          return (
            <button
              key={path.id}
              onClick={() => setSelectedPath(path.id)}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? "bg-white/[0.08] border-[#00f2fe] shadow-[0_0_25px_rgba(0,242,254,0.2)]"
                  : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <div className={`p-2 rounded-lg ${isSelected ? "bg-cyan-500/20 text-[#00f2fe]" : "bg-white/5 text-slate-400"}`}>
                  <PathIcon className="w-5 h-5" />
                </div>
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-[#00f2fe] shadow-[0_0_8px_#00f2fe]" />
                )}
              </div>
              <div className="mt-4">
                <p className="text-xs font-mono text-cyan-400">{path.role}</p>
                <p className="text-sm font-bold text-white mt-0.5">{path.title}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Career Path Deep Dive Card */}
      <div className="rounded-2xl bg-[#0c101b] border border-white/10 backdrop-blur-xl p-6 sm:p-9 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#00f2fe]/10 via-[#4facfe]/5 to-transparent blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-950 text-cyan-300 border border-cyan-800">
                {currentPath.role}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>{currentPath.demand}</span>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {currentPath.title}
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {currentPath.description}
            </p>

            {/* Core Competencies */}
            <div>
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
                Target Technologies &amp; Skill Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {currentPath.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Capstone Projects Built */}
            <div>
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
                Signature Portfolio Projects Built in OIAI
              </p>
              <ul className="space-y-2">
                {currentPath.keyProjects.map((proj) => (
                  <li key={proj} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#00f2fe] shrink-0" />
                    <span>{proj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Highlights & CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full p-6 rounded-xl bg-white/[0.02] border border-white/10">
            <div>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Average Market Compensation
              </p>
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-[#00f2fe] mt-1 font-mono">
                {currentPath.salary}
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Based on current tech hub offers in Bengaluru, Hyderabad, Pune &amp; Remote
              </p>

              <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Preparation Time</span>
                  <span className="font-semibold text-white">3 to 4 Months Intensive</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Campus &amp; Format</span>
                  <span className="font-semibold text-white">Bhubaneswar / Live Virtual</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Mentorship Ratio</span>
                  <span className="font-semibold text-cyan-400 font-mono">1:1 Dedicated Mentor</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <button
                onClick={() => onSelectPath?.(currentPath.id)}
                className="w-full glow-button py-3.5 rounded-xl text-sm font-bold text-[#080b11] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Enroll in {currentPath.title} Track</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
