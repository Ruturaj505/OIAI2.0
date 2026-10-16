"use client";

import React, { useState } from "react";
import { 
  Cpu, 
  Binary, 
  BarChart3, 
  Wand2, 
  Workflow, 
  Terminal, 
  LineChart, 
  Compass, 
  Microscope, 
  Rocket, 
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Clock,
  ArrowUpRight
} from "lucide-react";

export interface AICareerRole {
  id: string;
  title: string;
  category: string;
  badge: string;
  icon: React.ReactNode;
  summary: string;
  demand: "High Demand" | "Rapid Growth" | "Leadership" | "Emerging";
  salaryRange: string;
  mappedTrack: string;
  duration: string;
  skills: string[];
}

const CAREER_ROLES: AICareerRole[] = [
  {
    id: "ai-engineer",
    title: "AI Engineer",
    category: "Systems & Production",
    badge: "Most Popular",
    icon: <Cpu className="w-5 h-5 text-[#ef5d44]" />,
    summary: "Architect, deploy, and scale production AI systems, inference engines, and neural microservices.",
    demand: "High Demand",
    salaryRange: "₹14L – ₹35L / yr",
    mappedTrack: "Track 02 — Applied AI & Neural Infrastructure",
    duration: "16 Weeks • 6 Production Capstones",
    skills: ["Model Serving", "MLOps", "Docker & Kubernetes", "PyTorch", "FastAPI", "Vector Indexes"],
  },
  {
    id: "machine-learning-engineer",
    title: "Machine Learning Engineer",
    category: "Algorithms & Modeling",
    badge: "Core Role",
    icon: <Binary className="w-5 h-5 text-[#4338ca]" />,
    summary: "Design deep neural architectures, optimize mathematical loss formulations, and train robust models.",
    demand: "High Demand",
    salaryRange: "₹12L – ₹32L / yr",
    mappedTrack: "Track 01 — Deep Learning & Foundations",
    duration: "16 Weeks • Algorithmic Workbenches",
    skills: ["Deep Architectures", "Gradient Optimization", "Feature Engineering", "TensorFlow", "Scikit-Learn"],
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    category: "Analytics & Signals",
    badge: "Essential",
    icon: <BarChart3 className="w-5 h-5 text-[#14b8a6]" />,
    summary: "Extract deep statistical signals, predictive patterns, and mathematical models from massive datasets.",
    demand: "High Demand",
    salaryRange: "₹10L – ₹28L / yr",
    mappedTrack: "Track 03 — Predictive Modeling & Statistical Science",
    duration: "14 Weeks • Empirical Case Studies",
    skills: ["Statistical Inference", "Hypothesis Testing", "Pandas & NumPy", "Exploratory Analytics", "SQL"],
  },
  {
    id: "generative-ai-developer",
    title: "Generative AI Developer",
    category: "LLMs & Agentic AI",
    badge: "Rapid Growth",
    icon: <Wand2 className="w-5 h-5 text-[#8b5cf6]" />,
    summary: "Build state-of-the-art LLM applications, multimodal RAG pipelines, fine-tuned models, and autonomous agents.",
    demand: "Rapid Growth",
    salaryRange: "₹15L – ₹40L / yr",
    mappedTrack: "Track 01 — Generative AI & Foundation Models",
    duration: "16 Weeks • End-to-End Autonomous Systems",
    skills: ["LangChain & LlamaIndex", "RAG Architecture", "LoRA Fine-tuning", "Vector Databases", "Prompt Ops"],
  },
  {
    id: "ai-automation-specialist",
    title: "AI Automation Specialist",
    category: "Workflows & Tool Use",
    badge: "Enterprise",
    icon: <Workflow className="w-5 h-5 text-[#f59e0b]" />,
    summary: "Automate complex enterprise workflows, multi-agent reasoning chains, and intelligent process bots.",
    demand: "Rapid Growth",
    salaryRange: "₹9L – ₹24L / yr",
    mappedTrack: "Track 04 — Autonomous Agent Workflows",
    duration: "12 Weeks • Enterprise Integration Labs",
    skills: ["Multi-Agent Loops", "API Webhooks", "Function Calling", "n8n & Zapier AI", "Process Mining"],
  },
  {
    id: "prompt-engineer",
    title: "Prompt Engineer",
    category: "Cognitive Context",
    badge: "Emerging",
    icon: <Terminal className="w-5 h-5 text-[#06b6d4]" />,
    summary: "Master systematic prompting protocols, context window engineering, few-shot conditioning, and evaluation.",
    demand: "Emerging",
    salaryRange: "₹8L – ₹20L / yr",
    mappedTrack: "Track 02 — Applied Prompt Ops & Evaluation",
    duration: "10 Weeks • Benchmark Evaluation",
    skills: ["Chain-of-Thought", "Constitutional AI", "Context Optimization", "Prompt Injection Defense"],
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    category: "BI & Intelligence",
    badge: "Entry Friendly",
    icon: <LineChart className="w-5 h-5 text-[#10b981]" />,
    summary: "Translate complex business numbers into interactive executive dashboards and strategic data narratives.",
    demand: "High Demand",
    salaryRange: "₹7L – ₹18L / yr",
    mappedTrack: "Track 04 — Modern BI & Data Analytics",
    duration: "12 Weeks • Dashboard Portfolio",
    skills: ["Advanced SQL", "Power BI / Tableau", "Python for Analytics", "Data Storytelling", "KPI Metrics"],
  },
  {
    id: "ai-product-manager",
    title: "AI Product Manager",
    category: "Strategy & Governance",
    badge: "Leadership",
    icon: <Compass className="w-5 h-5 text-[#6366f1]" />,
    summary: "Bridge technical engineering squads with product roadmap strategy, AI unit economics, and governance.",
    demand: "Leadership",
    salaryRange: "₹18L – ₹45L / yr",
    mappedTrack: "Track 05 — AI Product Strategy & Leadership",
    duration: "14 Weeks • Product Case Portfolios",
    skills: ["AI Roadmap Strategy", "Unit Economics & GPU Cost", "AI Ethics & Risk", "User-Centric AI UX"],
  },
  {
    id: "ai-researcher",
    title: "AI Researcher",
    category: "Theoretical Frontiers",
    badge: "Research Frontier",
    icon: <Microscope className="w-5 h-5 text-[#ec4899]" />,
    summary: "Advance the frontier of cognitive architectures, alignment algorithms, and novel model architectures.",
    demand: "Emerging",
    salaryRange: "₹16L – ₹42L / yr",
    mappedTrack: "Track 05 — Advanced Research Workbenches",
    duration: "20 Weeks • Publication-Ready Papers",
    skills: ["Mathematical Theory", "Paper Implementation", "Attention Variants", "Alignment & RLHF", "CUDA"],
  },
  {
    id: "ai-entrepreneur",
    title: "AI Entrepreneur",
    category: "Ventures & Startups",
    badge: "Founder Track",
    icon: <Rocket className="w-5 h-5 text-[#f43f5e]" />,
    summary: "Found and build venture-scale AI startups powered by proprietary workflows, custom datasets, and speed.",
    demand: "Leadership",
    salaryRange: "Venture Scale Equity",
    mappedTrack: "Track 06 — AI Startup Incubator & Studio",
    duration: "16 Weeks • MVP Demo Day Launch",
    skills: ["AI Product-Market Fit", "Rapid Prototyping", "GPU Cloud Budgeting", "Fundraising & Pitching"],
  },
];

interface FindYourAIPathProps {
  onSelectCareer?: (career: AICareerRole) => void;
}

export default function FindYourAIPath({ onSelectCareer }: FindYourAIPathProps) {
  const [selectedRole, setSelectedRole] = useState<AICareerRole>(CAREER_ROLES[3]); // Default: Generative AI Developer

  const handleCardClick = (role: AICareerRole) => {
    setSelectedRole(role);
  };

  const handleCtaClick = () => {
    if (onSelectCareer) {
      onSelectCareer(selectedRole);
    } else {
      const el = document.getElementById("curriculum");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="find-ai-path"
      aria-label="Find Your AI Path"
      className="w-full bg-[#F8FAFC] text-[#0f172a] py-20 sm:py-24 lg:py-28 border-b border-[#CBD5E1] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.05] border border-black/[0.08] text-xs font-mono font-semibold uppercase tracking-wider text-[#0f172a] mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#ef5d44]" aria-hidden="true" />
            <span>OIAI Signature Career Navigator</span>
          </div>

          <h2 className="section-heading uppercase text-[#0f172a] leading-[1.05]">
            Find Your AI Path
          </h2>

          <p className="mt-3 text-lg sm:text-xl font-heading font-bold text-[#4338ca]">
            What do you want to become?
          </p>

          <p className="mt-2 body-paragraph text-[#334155] max-w-xl mx-auto">
            Select your target career destination to preview the required skills, industry curriculum track, and launch timeline.
          </p>
        </div>

        {/* 10 Interactive Role Cards Grid (5x2 on desktop, 3 on tablet, 2 on mobile) */}
        <div 
          role="radiogroup" 
          aria-label="Target AI Career Roles"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-4 lg:gap-5"
        >
          {CAREER_ROLES.map((role) => {
            const isSelected = selectedRole.id === role.id;

            return (
              <button
                key={role.id}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => handleCardClick(role)}
                className={`relative flex flex-col justify-between p-3 sm:p-5 rounded-xl sm:rounded-2xl text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#0f0f0e] text-white shadow-xl shadow-black/20 ring-2 ring-[#0f0f0e] -translate-y-1"
                    : "bg-[#E8EDF5] text-[#0f172a] border border-[#CBD5E1] hover:border-indigo-400 hover:shadow-md hover:-translate-y-0.5"
                }`}
              >
                {/* Top Row: Icon + Badge */}
                <div className="flex items-start justify-between w-full mb-2.5 sm:mb-3">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isSelected ? "bg-white/10 text-white" : "bg-slate-100 text-[#0f172a]"
                  }`}>
                    {role.icon}
                  </div>

                  {isSelected ? (
                    <span className="w-5 h-5 rounded-full bg-[#14b8a6] text-white flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </span>
                  ) : (
                    <span className="text-[9px] sm:text-[10px] font-mono font-medium px-1.5 sm:px-2 py-0.5 rounded-full bg-black/[0.04] text-[#62615d]">
                      {role.badge}
                    </span>
                  )}
                </div>

                {/* Role Title & Category */}
                <div>
                  <h3 className={`card-heading text-xs sm:text-base font-bold tracking-tight leading-snug ${
                    isSelected ? "text-white" : "text-[#0f172a]"
                  }`}>
                    {role.title}
                  </h3>
                  <p className={`text-[10px] sm:text-[11px] font-sans mt-0.5 sm:mt-1 ${
                    isSelected ? "text-white/70" : "text-slate-600"
                  }`}>
                    {role.category}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Career Blueprint Detail Panel */}
        <div className="mt-6 sm:mt-10 bg-[#E8EDF5] rounded-2xl sm:rounded-3xl border border-[#CBD5E1] p-4.5 sm:p-8 lg:p-10 shadow-lg shadow-black/5 transition-all">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            
            {/* Left: Role Info & Skills */}
            <div className="flex-1 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#4338ca]/10 text-[#4338ca] border border-[#4338ca]/20">
                  {selectedRole.demand}
                </span>
                <span className="text-xs font-mono text-[#62615d] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {selectedRole.duration}
                </span>
                <span className="text-xs font-mono font-semibold text-[#0f172a]">
                  Avg CTC: {selectedRole.salaryRange}
                </span>
              </div>

              <div>
                <h3 className="card-heading text-2xl sm:text-3xl font-black text-[#0f172a] tracking-tight">
                  {selectedRole.title} Path Blueprint
                </h3>
                <p className="mt-2 body-paragraph text-[#334155] max-w-2xl">
                  {selectedRole.summary}
                </p>
              </div>

              {/* Core Skill Stack Tags */}
              <div className="pt-2">
                <span className="text-xs font-mono text-[#62615d] uppercase tracking-wider block mb-2 font-semibold">
                  Core Skills You Master:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedRole.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 text-[#0f172a] border border-[#CBD5E1]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-1 flex items-center gap-2 text-xs font-mono text-[#4338ca] font-semibold">
                <Layers className="w-4 h-4 shrink-0" />
                <span>{selectedRole.mappedTrack}</span>
              </div>
            </div>

            {/* Right: Signature CTA Box */}
            <div className="w-full lg:w-auto shrink-0 flex flex-col items-stretch sm:items-center gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#CBD5E1]">
              <button
                type="button"
                onClick={handleCtaClick}
                className="h-12 sm:h-16 px-5 sm:px-8 rounded-xl sm:rounded-2xl bg-[#0f0f0e] text-white button-typography text-sm sm:text-lg flex items-center justify-center gap-2.5 sm:gap-3 hover:bg-[#252525] hover:-translate-y-0.5 transition-all cursor-pointer shadow-lg shadow-black/15 group w-full sm:w-auto"
              >
                <span>Find My AI Career Path</span>
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </span>
              </button>

              <span className="text-[11px] font-mono text-center text-[#62615d]">
                Tailored 1-on-1 Academic Advisory &amp; Curriculum Match
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
