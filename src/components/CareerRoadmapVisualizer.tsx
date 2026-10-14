"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Database, 
  BrainCircuit, 
  Bot, 
  Briefcase, 
  Trophy, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Clock, 
  Layers, 
  Wrench, 
  Check, 
  ArrowRight,
  TrendingUp,
  FolderGit2
} from "lucide-react";

interface RoadmapNode {
  id: string;
  level: string;
  title: string;
  subtitle: string;
  duration: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  badge: string;
  prerequisites: string[];
  keyDeliverables: string[];
  tools: string[];
  outcome: string;
}

const roadmapNodes: RoadmapNode[] = [
  {
    id: "programming-python",
    level: "LEVEL 01",
    title: "Programming (Python)",
    subtitle: "Core Syntax, Data Structures & High-Performance Vector Math",
    duration: "3 Weeks",
    icon: Code2,
    accentColor: "#00f2fe",
    badge: "Foundation",
    prerequisites: ["Logical problem solving", "Basic computing literacy", "Curiosity for algorithmic thinking"],
    keyDeliverables: [
      "Custom NumPy-like Vector Math Tensor Engine",
      "Asynchronous Multithreaded Web Data Pipeline",
      "Object-Oriented CLI Architecture for AI Tools"
    ],
    tools: ["Python 3.12", "Poetry", "NumPy", "AsyncIO", "PyTest", "Git"],
    outcome: "Master clean, performant, production-grade Python code tailored for machine learning workloads.",
  },
  {
    id: "data-sql",
    level: "LEVEL 02",
    title: "Data & SQL",
    subtitle: "Relational Modeling, Vector Databases & Scalable ETL",
    duration: "3 Weeks",
    icon: Database,
    accentColor: "#38bdf8",
    badge: "Data Mastery",
    prerequisites: ["Level 01: Python Foundations", "Understanding tabular schemas", "Basic mathematical sets"],
    keyDeliverables: [
      "Production PostgreSQL Database with pgvector indexing",
      "Automated Feature Store Pipeline with DuckDB & Polars",
      "High-throughput Streaming Data Cleaner & Normalizer"
    ],
    tools: ["PostgreSQL", "pgvector", "DuckDB", "Pandas", "Polars", "ChromaDB"],
    outcome: "Seamlessly architect databases and vector storage engines that feed multi-gigabyte training pipelines.",
  },
  {
    id: "machine-learning",
    level: "LEVEL 03",
    title: "Machine Learning",
    subtitle: "Statistical Algorithms, Loss Functions & Deep Learning Architectures",
    duration: "4 Weeks",
    icon: BrainCircuit,
    accentColor: "#4facfe",
    badge: "Core AI",
    prerequisites: ["Level 02: Data & SQL", "Matrix calculus & gradient descent", "Probability & statistics"],
    keyDeliverables: [
      "Deep Neural Network Built from Scratch in PyTorch",
      "Gradient-Boosted Production Prediction Model with Explainability",
      "Convolutional Vision Classifier with Data Augmentation"
    ],
    tools: ["PyTorch", "Scikit-Learn", "XGBoost", "Weights & Biases", "Optuna", "MLflow"],
    outcome: "Formulate mathematical loss objectives and train neural models that generalize reliably on unseen data.",
  },
  {
    id: "generative-ai",
    level: "LEVEL 04",
    title: "Generative AI",
    subtitle: "Transformers, Open-Weights Models, Quantization & RAG",
    duration: "4 Weeks",
    icon: BrainCircuit,
    accentColor: "#00f2fe",
    badge: "Frontier GenAI",
    prerequisites: ["Level 03: Machine Learning & PyTorch", "Familiarity with attention mechanisms", "API fundamentals"],
    keyDeliverables: [
      "Enterprise Hybrid GraphRAG Engine with Hybrid Search",
      "Fine-Tuned 8B Parameter Llama 3 Model with LoRA & QLoRA",
      "Sub-100ms Inference Service with vLLM & TensorRT-LLM"
    ],
    tools: ["Hugging Face", "vLLM", "TensorRT-LLM", "LoRA/QLoRA", "Pinecone", "DSPy"],
    outcome: "Fine-tune and deploy production LLM solutions with low token latency and verifiable hallucination guardrails.",
  },
  {
    id: "ai-agents",
    level: "LEVEL 05",
    title: "AI Agents",
    subtitle: "Multi-Agent Swarms, Tool Calling, Memory & Autonomous Reasoning",
    duration: "4 Weeks",
    icon: Bot,
    accentColor: "#38bdf8",
    badge: "Autonomous Systems",
    prerequisites: ["Level 04: Generative AI", "Async microservices & webhooks", "State machine concepts"],
    keyDeliverables: [
      "Autonomous Multi-Agent DevOps & Code Review Swarm",
      "Complex Financial Analysis Agent with Tool-Calling & Human-in-the-Loop",
      "Long-Term Memory Persistent Customer Concierge Agent"
    ],
    tools: ["LangGraph", "CrewAI", "LlamaIndex", "FastAPI", "Redis Memory", "Tool Use APIs"],
    outcome: "Build autonomous multi-agent networks that independently solve multi-step problems across external APIs.",
  },
  {
    id: "industry-internship",
    level: "LEVEL 06",
    title: "Industry Internship",
    subtitle: "Live Startup & Enterprise Deployment Exposure",
    duration: "8–12 Weeks",
    icon: Briefcase,
    accentColor: "#4facfe",
    badge: "Guaranteed Placement",
    prerequisites: ["Level 05: AI Agents Capstones", "Pass OIAI Code Defense Audit", "Git collaboration fluency"],
    keyDeliverables: [
      "Production Pull Requests Merged to Commercial Codebase",
      "SLA-Compliant Model Monitoring & Drift Detection",
      "Enterprise Capstone Showcase Presentation"
    ],
    tools: ["Kubernetes", "Ray Core", "Docker", "GitHub Actions", "AWS / GCP", "Datadog"],
    outcome: "Gain authentic commercial work experience, professional references, and direct conversion opportunities.",
  },
  {
    id: "placement",
    level: "LEVEL 07",
    title: "Placement",
    subtitle: "Career Launch into High-Impact AI Engineering Roles",
    duration: "Ongoing Launch",
    icon: Trophy,
    accentColor: "#00f2fe",
    badge: "Career Success",
    prerequisites: ["Completed Internship Milestones", "Polished GitHub Portfolio", "System Design Defense Clear"],
    keyDeliverables: [
      "1:1 Mock Interview Clearances with Silicon Valley & Bengaluru Mentors",
      "Verified OIAI AI Engineer Credential & Portfolio Website",
      "Direct Priority Interviews with Hiring Partner Network"
    ],
    tools: ["System Design Drills", "Live LeetCode & Architecture Prep", "Executive Salary Negotiation"],
    outcome: "Secure top-tier offers as an AI Engineer, ML Engineer, or GenAI Developer with an average package of ₹18–₹38 LPA.",
  },
];

interface CareerRoadmapVisualizerProps {
  onEnroll?: (programId?: string) => void;
}

export default function CareerRoadmapVisualizer({ onEnroll }: CareerRoadmapVisualizerProps) {
  // Store expanded nodes IDs (start with Level 04 Generative AI expanded by default)
  const [expandedNodes, setExpandedNodes] = useState<string[]>(["generative-ai"]);

  const toggleNode = (id: string) => {
    setExpandedNodes((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setExpandedNodes(roadmapNodes.map((n) => n.id));
  };

  const collapseAll = () => {
    setExpandedNodes([]);
  };

  return (
    <section 
      id="career-roadmap" 
      className="relative w-full py-24 lg:py-32 bg-white dark:bg-[#080b11] border-b border-slate-200/80 dark:border-white/10 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Clear Typographic Hierarchy */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100/70 dark:bg-violet-950/60 border border-violet-300/60 dark:border-violet-500/30 text-[#7c3aed] dark:text-violet-300 text-xs font-mono mb-4 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-[#7c3aed]" />
            <span className="font-semibold tracking-wider uppercase">VERTICAL CAREER TREE • SKILL PROGRESSION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0f172a] dark:text-white tracking-tight">
            AI Career Roadmap Visualizer
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Click any milestone node to explore prerequisite skills, technologies, and production deliverables built at each stage.
          </p>

          {/* Global Controls */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={expandAll}
              className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 hover:border-[#7c3aed]/50 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer shadow-sm"
            >
              Expand All Stages
            </button>
            <button
              onClick={collapseAll}
              className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 hover:border-[#7c3aed]/50 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer shadow-sm"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Vertical Interactive Tree Container */}
        <div className="relative z-10">
          {/* Continuous Vertical Glowing Stem Line */}
          <div className="absolute left-5 sm:left-8 md:left-10 top-8 bottom-12 w-0.5 bg-gradient-to-b from-[#2563eb] via-[#7c3aed] to-[#14b8a6]/40 pointer-events-none shadow-[0_0_12px_rgba(124,58,237,0.4)]" />

          {/* Vertical Nodes List */}
          <div className="space-y-6">
            {roadmapNodes.map((node) => {
              const Icon = node.icon;
              const isExpanded = expandedNodes.includes(node.id);

              return (
                <div key={node.id} className="relative pl-12 sm:pl-20 md:pl-24">
                  {/* Node Milestone Circle Icon along the stem */}
                  <div
                    onClick={() => toggleNode(node.id)}
                    className={`absolute left-5 sm:left-8 md:left-10 top-5 -translate-x-1/2 w-8 h-8 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center border transition-all duration-300 cursor-pointer z-20 ${
                      isExpanded
                        ? "bg-white dark:bg-[#0e131f] border-[#7c3aed] text-[#7c3aed] shadow-md dark:shadow-[0_0_20px_rgba(124,58,237,0.4)] scale-110"
                        : "bg-slate-100 dark:bg-[#0c101b] border-slate-300 dark:border-white/20 text-slate-500 dark:text-slate-400 hover:border-[#7c3aed]/50 hover:text-[#7c3aed]"
                    }`}
                    title="Click to toggle details"
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    {isExpanded && (
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#14b8a6] animate-pulse" />
                    )}
                  </div>

                  {/* Collapsible Card Container (Card-Based Grouping) */}
                  <div
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isExpanded
                        ? "bg-white dark:bg-[#0c101b] border-slate-300 dark:border-[#7c3aed]/50 shadow-md"
                        : "bg-white dark:bg-[#0c101b]/70 border-slate-200 dark:border-white/10 hover:border-slate-300 hover:shadow-xs"
                    }`}
                  >
                    {/* Card Header (Always Visible & Clickable) */}
                    <div
                      onClick={() => toggleNode(node.id)}
                      className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 cursor-pointer select-none"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2.5">
                          <span className="text-[11px] font-mono font-bold text-[#7c3aed] dark:text-violet-300 px-2.5 py-0.5 rounded-md bg-violet-50 dark:bg-violet-950/90 border border-violet-200 dark:border-violet-800/40">
                            {node.level}
                          </span>
                          <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#2563eb]" />
                            {node.duration}
                          </span>
                          <span className="text-[11px] font-mono text-[#14b8a6] hidden md:inline font-semibold">
                            • {node.badge}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-extrabold text-[#0f172a] dark:text-white flex items-center gap-2">
                          <span>{node.title}</span>
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                          {node.subtitle}
                        </p>
                      </div>

                      {/* Right Toggle Indicator */}
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-xs font-mono text-[#2563eb] dark:text-blue-400 font-medium hidden sm:inline">
                          {isExpanded ? "Hide Details" : "View Details"}
                        </span>
                        <div className="p-2 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 shadow-sm">
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-[#7c3aed]" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Collapsible Details Content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="border-t border-slate-200/70 dark:border-white/10 bg-white/50 dark:bg-white/[0.01]"
                        >
                          <div className="p-5 sm:p-7 space-y-6">
                            {/* Outcome summary */}
                            <div className="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-500/20 text-xs sm:text-sm text-slate-800 dark:text-slate-200 flex items-start gap-2.5 shadow-sm">
                              <CheckCircle2 className="w-4 h-4 text-[#14b8a6] shrink-0 mt-0.5" />
                              <span>
                                <strong className="text-[#2563eb] dark:text-blue-300 font-bold">Stage Milestone Outcome: </strong>
                                {node.outcome}
                              </span>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                              {/* Prerequisites */}
                              <div>
                                <p className="text-xs font-mono font-semibold uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-2.5 flex items-center gap-1.5">
                                  <Layers className="w-3.5 h-3.5 text-[#2563eb]" />
                                  Prerequisite Skills &amp; Knowledge:
                                </p>
                                <ul className="space-y-2">
                                  {node.prerequisites.map((req, i) => (
                                    <li key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                                      <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] shrink-0" />
                                      <span>{req}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Key Deliverables */}
                              <div>
                                <p className="text-xs font-mono font-semibold uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-2.5 flex items-center gap-1.5">
                                  <FolderGit2 className="w-3.5 h-3.5 text-[#7c3aed]" />
                                  Key Deliverables &amp; Code Artifacts:
                                </p>
                                <ul className="space-y-2">
                                  {node.keyDeliverables.map((deliv, i) => (
                                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200">
                                      <CheckCircle2 className="w-4 h-4 text-[#14b8a6] shrink-0 mt-0.5" />
                                      <span>{deliv}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* Tech Stack & Action */}
                            <div className="pt-4 border-t border-slate-200/70 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1 mr-1">
                                  <Wrench className="w-3.5 h-3.5 text-[#7c3aed]" />
                                  Toolchain:
                                </span>
                                {node.tools.map((tool) => (
                                  <span
                                    key={tool}
                                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 shadow-sm"
                                  >
                                    {tool}
                                  </span>
                                ))}
                              </div>

                              <button
                                onClick={() => onEnroll?.("genai-agents")}
                                className="w-full sm:w-auto px-5 py-2.5 rounded-xl glow-button text-xs font-bold text-white transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-sm"
                              >
                                <span>Start from this Stage</span>
                                <ArrowRight className="w-3.5 h-3.5 text-white" />
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
