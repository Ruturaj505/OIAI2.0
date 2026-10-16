"use client";

import React, { useState } from "react";
import {
  Code2,
  Database,
  BrainCircuit,
  Cpu,
  Bot,
  Layers,
  Briefcase,
  FolderGit2,
  Award,
  Trophy,
  ArrowDown,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Clock,
  Wrench,
  Check,
  ArrowRight,
  ExternalLink,
  Target
} from "lucide-react";

export interface RoadmapStepData {
  step: number;
  name: string;
  category: "Foundations" | "Core AI" | "Frontier AI" | "Career Launch";
  timeline: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  badgeBg: string;
  summary: string;
  coreSkills: string[];
  toolsAndLibraries: string[];
  handsOnMilestone: string;
  deliverableRepo: string;
  selfAssessmentChecklist: string[];
}

export const ROADMAP_12_STEPS: RoadmapStepData[] = [
  {
    step: 1,
    name: "Programming",
    category: "Foundations",
    timeline: "Weeks 1–2",
    tagline: "Algorithmic Logic, Control Flow & Computer Science Intuition",
    icon: Code2,
    accentColor: "from-blue-500 to-indigo-600",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    summary:
      "Every serious AI engineer begins with rock-solid computational thinking. Understand how computers execute instructions, allocate memory, and manage control structures before touching machine learning packages.",
    coreSkills: [
      "Algorithmic problem-solving & pseudocode formulation",
      "Time & space complexity analysis (Big-O notation)",
      "Primitive data types, dynamic arrays, hashes, and trees",
      "Git branch workflows, PR etiquette, and commit hygiene"
    ],
    toolsAndLibraries: ["Git", "GitHub CLI", "VS Code", "Linux Bash / PowerShell", "Debuggers"],
    handsOnMilestone:
      "Implement fundamental searching and sorting algorithms from first principles and publish a clean, automated CI/CD-tested repository.",
    deliverableRepo: "cs-fundamentals-algorithms",
    selfAssessmentChecklist: [
      "Can trace recursion and iterative trees without errors",
      "Understand Big-O space and time tradeoffs",
      "Can resolve merge conflicts and publish clean Git commits"
    ]
  },
  {
    step: 2,
    name: "Python",
    category: "Foundations",
    timeline: "Weeks 3–4",
    tagline: "Vectorized Computing, OOP Architecture & Asynchronous I/O",
    icon: Code2,
    accentColor: "from-indigo-500 to-purple-600",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
    summary:
      "Python is the lingua franca of artificial intelligence. Move beyond basic syntax to master vectorized tensor operations, memory profiling, asynchronous networking, and idiomatic Object-Oriented Design.",
    coreSkills: [
      "Vectorized broadcasting & array manipulation with NumPy",
      "Object-Oriented Programming (classes, dunder methods, inheritance)",
      "Asynchronous I/O (async/await) for high-concurrency API calls",
      "Type hinting, mypy static analysis, and packaging with Poetry/uv"
    ],
    toolsAndLibraries: ["Python 3.12+", "NumPy", "Poetry / uv", "PyTest", "Mypy", "AsyncIO"],
    handsOnMilestone:
      "Build a custom NumPy-like multi-dimensional vector math engine supporting broadcasting, matrix multiplication, and automated unit testing.",
    deliverableRepo: "vector-math-tensor-engine",
    selfAssessmentChecklist: [
      "Write vectorized operations without slow Python for-loops",
      "Understand memory views, copies vs slices in NumPy",
      "Structure modular, typed packages installable via pip"
    ]
  },
  {
    step: 3,
    name: "Data & SQL",
    category: "Foundations",
    timeline: "Weeks 5–6",
    tagline: "Relational Modeling, Vector Databases & High-Throughput ETL",
    icon: Database,
    accentColor: "from-cyan-500 to-blue-600",
    badgeBg: "bg-cyan-50 text-cyan-700 border-cyan-200",
    summary:
      "Modern AI pipelines process terabytes of unstructured and tabular data. Learn schema design, SQL window queries, vector embeddings storage, and high-performance dataframe engines.",
    coreSkills: [
      "Relational schema normalization, indexes, and ACID transactions",
      "Complex analytical SQL (Window functions, CTEs, aggregation)",
      "High-speed dataframes using Polars and DuckDB",
      "Vector embeddings storage with pgvector, Chroma, and Pinecone"
    ],
    toolsAndLibraries: ["PostgreSQL", "pgvector", "DuckDB", "Polars", "Pandas", "ChromaDB"],
    handsOnMilestone:
      "Architect a PostgreSQL database with pgvector indexing capable of performing cosine similarity searches over 100,000+ vector chunks in <20ms.",
    deliverableRepo: "scalable-vector-sql-pipeline",
    selfAssessmentChecklist: [
      "Can write multi-table joins with analytical window functions",
      "Understand Euclidean vs Cosine distance for embeddings",
      "Know how to benchmark query latency and apply HNSW indexes"
    ]
  },
  {
    step: 4,
    name: "Machine Learning",
    category: "Core AI",
    timeline: "Weeks 7–9",
    tagline: "Statistical Modeling, Loss Objectives & Gradient Optimization",
    icon: BrainCircuit,
    accentColor: "from-emerald-500 to-teal-600",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    summary:
      "Understand how machines learn from data. Master the mathematical loss surfaces, gradient descent optimization, regularized ensembles, and rigorous cross-validation methodology.",
    coreSkills: [
      "Supervised learning: Linear/Logistic regression, SVMs, Decision Trees",
      "Ensemble learning: Random Forests, XGBoost, LightGBM",
      "Unsupervised clustering (K-Means, PCA, t-SNE dimensional reduction)",
      "Model evaluation: ROC-AUC, F1-Score, PR curves, and SHAP explainability"
    ],
    toolsAndLibraries: ["Scikit-Learn", "XGBoost", "LightGBM", "Optuna", "MLflow", "SHAP"],
    handsOnMilestone:
      "Train an enterprise customer churn prediction system with automated Optuna hyperparameter sweeps and SHAP feature importance explainability.",
    deliverableRepo: "enterprise-churn-mlops",
    selfAssessmentChecklist: [
      "Can mathematically derive gradient descent updates",
      "Prevent data leakage across train/validation/test splits",
      "Explain model predictions to business stakeholders using SHAP"
    ]
  },
  {
    step: 5,
    name: "Deep Learning",
    category: "Core AI",
    timeline: "Weeks 10–12",
    tagline: "Neural Architectures, Backpropagation Calculus & PyTorch",
    icon: Cpu,
    accentColor: "from-teal-500 to-indigo-600",
    badgeBg: "bg-teal-50 text-teal-700 border-teal-200",
    summary:
      "Deep neural networks are the computational backbone of modern intelligence. Learn autograd backpropagation, custom PyTorch modules, convolutional layers, and self-attention foundations.",
    coreSkills: [
      "Neural network mechanics: weights, biases, activations, backpropagation",
      "PyTorch tensor mechanics, custom Dataset & DataLoader pipelines",
      "Convolutional Neural Networks (CNNs) for spatial image perception",
      "Optimization: AdamW, Learning Rate Schedulers, and GPU acceleration"
    ],
    toolsAndLibraries: ["PyTorch", "TorchVision", "CUDA", "TensorBoard", "Weights & Biases"],
    handsOnMilestone:
      "Code an end-to-end Deep Residual Network from scratch in pure PyTorch and train it on multi-GPU compute with mixed-precision training.",
    deliverableRepo: "pytorch-deep-residual-network",
    selfAssessmentChecklist: [
      "Understand forward and backward autograd computational graphs",
      "Diagnose exploding/vanishing gradients and apply normalization",
      "Utilize NVIDIA CUDA streams for high-speed GPU training"
    ]
  },
  {
    step: 6,
    name: "Generative AI",
    category: "Frontier AI",
    timeline: "Weeks 13–15",
    tagline: "Transformers, Open-Weights Models, LoRA & Production RAG",
    icon: BrainCircuit,
    accentColor: "from-cyan-500 to-indigo-600",
    badgeBg: "bg-cyan-50 text-cyan-800 border-cyan-300",
    summary:
      "The defining frontier of our era. Master Large Language Models, self-attention multi-head projection, parameter-efficient fine-tuning (LoRA/QLoRA), and low-latency Retrieval-Augmented Generation.",
    coreSkills: [
      "Transformer architecture (Self-Attention, QKV projections, RoPE)",
      "Parameter-Efficient Fine-Tuning (PEFT, LoRA, QLoRA) on custom datasets",
      "Production RAG: chunking, hybrid sparse/dense retrieval, reranking",
      "High-throughput inference optimization using vLLM & TensorRT-LLM"
    ],
    toolsAndLibraries: ["Hugging Face", "vLLM", "LlamaIndex", "LangChain", "Milvus", "LoRA"],
    handsOnMilestone:
      "Deploy an enterprise RAG system that ingests thousands of complex financial PDFs with hybrid search, hallucination checks, and sub-120ms token streaming.",
    deliverableRepo: "enterprise-multimodal-rag",
    selfAssessmentChecklist: [
      "Can explain scaled dot-product attention mathematically",
      "Know how to fine-tune an 8B model on a single 24GB GPU using QLoRA",
      "Implement semantic caching and token-level rate limiting"
    ]
  },
  {
    step: 7,
    name: "AI Agents",
    category: "Frontier AI",
    timeline: "Weeks 16–18",
    tagline: "Multi-Agent Swarms, Tool Calling & Autonomous Reasoning Loops",
    icon: Bot,
    accentColor: "from-purple-500 to-pink-600",
    badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
    summary:
      "Move beyond static chat completions to autonomous agentic architectures. Build multi-agent networks that reason iteratively, use external tools, maintain long-term memory, and self-correct.",
    coreSkills: [
      "Cyclic graph state machines for agents with LangGraph & CrewAI",
      "Dynamic tool calling, OpenAPI schema binding, and external API execution",
      "Reasoning patterns: ReAct, Plan-and-Solve, Reflection, and Tree-of-Thoughts",
      "Persistent memory (short-term state, semantic long-term episodic memory)"
    ],
    toolsAndLibraries: ["LangGraph", "CrewAI", "AutoGen", "FastAPI", "Redis Memory", "Tool APIs"],
    handsOnMilestone:
      "Build an autonomous multi-agent dev team (Architect, Coder, Reviewer, Tester) that collaboratively builds and tests microservices from natural language prompts.",
    deliverableRepo: "autonomous-multiagent-devswarm",
    selfAssessmentChecklist: [
      "Can prevent infinite loops in agent reasoning graphs",
      "Implement human-in-the-loop review checkpoints for sensitive actions",
      "Persist agent memory across asynchronous user sessions"
    ]
  },
  {
    step: 8,
    name: "Projects",
    category: "Career Launch",
    timeline: "Weeks 19–20",
    tagline: "Production Systems, Low-Latency APIs & Cloud Architecture",
    icon: Layers,
    accentColor: "from-amber-500 to-orange-600",
    badgeBg: "bg-amber-50 text-amber-700 border-amber-200",
    summary:
      "A portfolio of toy Jupyter notebooks will not get you hired. Build production-hardened repositories with Docker containers, automated tests, low-latency APIs, and live cloud URLs.",
    coreSkills: [
      "FastAPI asynchronous REST & WebSocket Server-Sent Events (SSE)",
      "Docker multi-stage builds optimized for PyTorch & CUDA",
      "CI/CD deployment automation with GitHub Actions",
      "Production telemetry, Prometheus metrics, and latency benchmarking"
    ],
    toolsAndLibraries: ["Docker", "FastAPI", "Next.js AI SDK", "Kubernetes", "GitHub Actions"],
    handsOnMilestone:
      "Ship 3 end-to-end commercial AI applications with live public URLs, comprehensive API documentation, and benchmark stress-test reports.",
    deliverableRepo: "production-ai-capstones",
    selfAssessmentChecklist: [
      "All projects have live working demo links and automated Dockerfiles",
      "Code is covered by unit tests with >80% code coverage",
      "Clear README with architectural diagrams and performance stats"
    ]
  },
  {
    step: 9,
    name: "Internship",
    category: "Career Launch",
    timeline: "Weeks 21–28 (2 Months)",
    tagline: "Guaranteed Live Industry Immersion with Real Production SLAs",
    icon: Briefcase,
    accentColor: "from-emerald-600 to-green-700",
    badgeBg: "bg-emerald-50 text-emerald-800 border-emerald-300",
    summary:
      "The critical bridge between classroom knowledge and commercial capability. Work directly on production codebases under senior AI mentors with daily standups, Jira tickets, and live user feedback.",
    coreSkills: [
      "Working on enterprise mono-repos and multi-tenant architectures",
      "Participating in daily engineering standups and sprint planning",
      "Reviewing and defending code pull requests before senior leads",
      "Monitoring production AI model drift, latency, and token billing"
    ],
    toolsAndLibraries: ["Enterprise Jira", "GitHub Teams", "Datadog", "AWS / GCP", "NVIDIA A100"],
    handsOnMilestone:
      "Submit 15+ merged pull requests into production codebases, deliver an enterprise capstone feature, and earn an authentic industry recommendation.",
    deliverableRepo: "verified-industry-internship-proof",
    selfAssessmentChecklist: [
      "Have merged code running in production environments",
      "Understand enterprise security, SOC2, and data compliance standards",
      "Received written letter of recommendation from an AI Engineering Lead"
    ]
  },
  {
    step: 10,
    name: "Portfolio",
    category: "Career Launch",
    timeline: "Weeks 29–30",
    tagline: "Verifiable Proof-of-Work, Interactive Demos & GitHub Signals",
    icon: FolderGit2,
    accentColor: "from-blue-600 to-indigo-700",
    badgeBg: "bg-blue-50 text-blue-800 border-blue-200",
    summary:
      "Recruiters and hiring managers spend under 30 seconds scanning applicants. Build an irresistible technical portfolio with architecture diagrams, live interactive demos, and technical write-ups.",
    coreSkills: [
      "High-converting personal AI engineering portfolio website",
      "System architecture diagrams with Mermaid.js and Excalidraw",
      "Concise 2-minute video walkthroughs explaining engineering trade-offs",
      "Technical deep-dive blog posts deconstructing AI research papers"
    ],
    toolsAndLibraries: ["GitHub Pages / Vercel", "Loom", "Excalidraw", "Mermaid.js", "LinkedIn"],
    handsOnMilestone:
      "Launch a custom portfolio domain featuring 4 verified capstones, live demo sandboxes, benchmark metrics, and your downloadable verified OIAI credential.",
    deliverableRepo: "ai-engineer-portfolio-showcase",
    selfAssessmentChecklist: [
      "Portfolio is mobile responsive and loads in <1.5 seconds",
      "Every project has a live demo button that works without login",
      "GitHub profile shows green continuous contribution activity"
    ]
  },
  {
    step: 11,
    name: "Interview",
    category: "Career Launch",
    timeline: "Weeks 31–32",
    tagline: "AI System Design, Research Defense & 1-on-1 Mock Panels",
    icon: Award,
    accentColor: "from-purple-600 to-indigo-800",
    badgeBg: "bg-purple-50 text-purple-800 border-purple-200",
    summary:
      "Crack top-tier AI interviews through structured preparation. Master AI system design questions, live PyTorch whiteboard coding, LLM evaluation defense, and salary negotiation tactics.",
    coreSkills: [
      "AI System Design (Designing Netflix recommendations, ChatGPT at scale)",
      "Live whiteboard coding: PyTorch tensor operations, attention loops",
      "Explaining algorithmic tradeoffs (latency vs accuracy, quantization)",
      "Executive salary negotiation and multiple offer evaluation"
    ],
    toolsAndLibraries: ["AI System Design Mocks", "LeetCode Algorithmic Drills", "Excalidraw", "1:1 Mentor Panels"],
    handsOnMilestone:
      "Complete 3 rigorous simulated 1-on-1 mock interviews with senior engineers from top AI startups and achieve passing evaluation scorecards.",
    deliverableRepo: "ai-interview-prep-handbook",
    selfAssessmentChecklist: [
      "Can design a vector search system scaling to 10M embeddings in 30 mins",
      "Can defend model evaluation metrics and error analysis confidently",
      "Mastered behavioral storytelling using the STAR methodology"
    ]
  },
  {
    step: 12,
    name: "AI Career",
    category: "Career Launch",
    timeline: "Placement & Beyond",
    tagline: "High-Impact Roles: AI Engineer, GenAI Developer & ML Architect",
    icon: Trophy,
    accentColor: "from-amber-500 via-yellow-500 to-amber-600",
    badgeBg: "bg-amber-50 text-amber-900 border-amber-300",
    summary:
      "The ultimate destination. Transition into India's and the global technology market as a high-earning, high-impact AI professional with direct hiring referrals and continuous community mentorship.",
    coreSkills: [
      "Driving business value through autonomous AI integration",
      "Leading technical architecture and model evaluation in production",
      "Mentoring junior engineers and staying ahead of frontier research",
      "Negotiating top compensation packages (₹12 LPA – ₹35+ LPA)"
    ],
    toolsAndLibraries: ["OIAI Alumni Network", "Silicon Valley Referrals", "Continuing Research Labs"],
    handsOnMilestone:
      "Accept a high-impact AI role with a verified compensation increase and enter the OIAI Senior Alumni Network for lifelong mentorship.",
    deliverableRepo: "career-success-alumni-badge",
    selfAssessmentChecklist: [
      "Signed full-time offer as AI Engineer, GenAI Developer, or ML Specialist",
      "Connected with OIAI Alumni Network across India & abroad",
      "Established personal career progression roadmap for the next 3 years"
    ]
  }
];

export default function CareerRoadmapFlow() {
  const [expandedStep, setExpandedStep] = useState<number | null>(6); // Default Generative AI expanded
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Foundations", "Core AI", "Frontier AI", "Career Launch"];

  const filteredSteps =
    activeFilter === "All"
      ? ROADMAP_12_STEPS
      : ROADMAP_12_STEPS.filter((s) => s.category === activeFilter);

  const toggleStep = (stepNumber: number) => {
    setExpandedStep((prev) => (prev === stepNumber ? null : stepNumber));
  };

  return (
    <div className="w-full">
      {/* Category Filter Chips */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => {
          const isActive = activeFilter === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === cat
                  ? "bg-[#1E1B4B] text-white shadow-md shadow-indigo-950/20 ring-2 ring-indigo-500/30"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-indigo-300 hover:bg-slate-50"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Vertical Pipeline Cards with ↓ Downward Connectors */}
      <div className="max-w-4xl mx-auto space-y-4">
        {filteredSteps.map((item, idx) => {
          const Icon = item.icon;
          const isExpanded = expandedStep === item.step;
          const isLast = idx === filteredSteps.length - 1;

          return (
            <div key={item.step} className="flex flex-col items-center">
              {/* Step Card Container */}
              <div
                className={`w-full rounded-2xl bg-white border transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md ${
                  isExpanded
                    ? "border-indigo-400 ring-2 ring-indigo-500/20 shadow-indigo-500/10"
                    : "border-slate-200/90 hover:border-indigo-300"
                }`}
              >
                {/* Clickable Header Bar */}
                <button
                  type="button"
                  onClick={() => toggleStep(item.step)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-slate-50/70 transition-colors"
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                    {/* Step Number Badge */}
                    <div className="w-11 h-11 rounded-xl bg-slate-900 text-white font-mono font-black text-sm flex items-center justify-center shrink-0 shadow-sm">
                      {item.step < 10 ? `0${item.step}` : item.step}
                    </div>

                    {/* Step Icon */}
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.accentColor} text-white flex items-center justify-center shrink-0 shadow-sm`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Title & Tagline */}
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                          {item.name}
                        </h3>
                        <span
                          className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${item.badgeBg}`}
                        >
                          {item.timeline}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 hidden sm:inline-block">
                          • {item.category}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 truncate mt-0.5">
                        {item.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Toggle Arrow */}
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs font-semibold text-indigo-600 hidden md:block">
                      {isExpanded ? "Hide Details" : "View Syllabus"}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {/* Expanded Details Drawer */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50">
                    <p className="text-sm text-slate-700 leading-relaxed mt-2">
                      {item.summary}
                    </p>

                    {/* Core Skills & Tools Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                      {/* Core Skills */}
                      <div className="p-4 rounded-xl bg-white border border-slate-200">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-1.5">
                          <Target className="w-3.5 h-3.5 text-indigo-600" />
                          Core Competencies:
                        </div>
                        <ul className="space-y-1.5">
                          {item.coreSkills.map((sk, sIdx) => (
                            <li key={sIdx} className="text-xs text-slate-700 flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="leading-snug">{sk}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Must-Learn Tools & Deliverables */}
                      <div className="p-4 rounded-xl bg-white border border-slate-200 flex flex-col justify-between">
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-1.5">
                            <Wrench className="w-3.5 h-3.5 text-indigo-600" />
                            Tools &amp; Frameworks:
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {item.toolsAndLibraries.map((tool, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 border border-slate-200"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Hands-on Milestone */}
                        <div className="mt-4 pt-3 border-t border-slate-150">
                          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                            Proof-of-Work Milestone:
                          </span>
                          <p className="text-xs font-medium text-indigo-950 leading-snug">
                            ★ {item.handsOnMilestone}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Self-Assessment Checklist */}
                    <div className="mt-4 p-3.5 rounded-xl bg-indigo-50/70 border border-indigo-100">
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-950 block mb-1.5">
                        Readiness Checklist for Step {item.step + 1}:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {item.selfAssessmentChecklist.map((chk, cIdx) => (
                          <div key={cIdx} className="text-[11px] text-slate-700 flex items-start gap-1.5">
                            <Check className="w-3 h-3 text-indigo-600 shrink-0 mt-0.5" />
                            <span>{chk}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Downward Connector Arrow between steps */}
              {!isLast && (
                <div className="my-2.5 flex flex-col items-center">
                  <div className="w-0.5 h-3 bg-gradient-to-b from-indigo-500 to-indigo-300" />
                  <div className="w-6 h-6 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 shadow-xs">
                    <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
                  </div>
                  <div className="w-0.5 h-3 bg-gradient-to-b from-indigo-300 to-indigo-500" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
