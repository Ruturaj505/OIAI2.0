import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareerRoadmapVisualizer from "@/components/CareerRoadmapVisualizer";
import { 
  Compass, 
  ArrowDown, 
  CheckCircle2, 
  BookOpen, 
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
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Your Roadmap to an AI Career | Step-by-Step AI Engineering Path 2026",
  description: "Comprehensive step-by-step roadmap to become an AI Engineer: Programming, Python, Data & SQL, ML, Deep Learning, GenAI, AI Agents, Projects, Internship, Portfolio, and Interview preparation.",
  keywords: [
    "AI Career Roadmap",
    "How to become an AI Engineer",
    "AI Learning Path",
    "Python to AI Engineer",
    "Generative AI Roadmap",
    "AI Engineer Roadmap 2026",
    "OIAI Roadmap"
  ],
};

const ROADMAP_STEPS = [
  { step: 1, name: "Programming", icon: Code2, desc: "Algorithmic thinking, control flows, data structures, and computational complexity." },
  { step: 2, name: "Python", icon: Code2, desc: "Vectorized computing, NumPy, Pandas, OOP architecture, and asynchronous I/O." },
  { step: 3, name: "Data & SQL", icon: Database, desc: "Relational schemas, SQL queries, vector stores, DuckDB, and data extraction pipelines." },
  { step: 4, name: "Machine Learning", icon: BrainCircuit, desc: "Supervised & unsupervised learning, gradient descent, loss functions, Scikit-Learn." },
  { step: 5, name: "Deep Learning", icon: Cpu, desc: "Neural networks, PyTorch, backpropagation, CNNs, RNNs, and custom tensor math." },
  { step: 6, name: "Generative AI", icon: BrainCircuit, desc: "Transformers, attention mechanisms, fine-tuning (LoRA), RAG systems, and token latency." },
  { step: 7, name: "AI Agents", icon: Bot, desc: "Multi-agent systems, tool calling, memory management with LangGraph and CrewAI." },
  { step: 8, name: "Projects", icon: Layers, desc: "End-to-end commercial grade applications deployed with low-latency APIs." },
  { step: 9, name: "Internship", icon: Briefcase, desc: "8–12 weeks of commercial startup immersion, daily standups, and live production code." },
  { step: 10, name: "Portfolio", icon: FolderGit2, desc: "Verifiable GitHub proof-of-work, live demo links, technical documentation, and video walkthroughs." },
  { step: 11, name: "Interview", icon: Award, desc: "1:1 mock interviews, AI system design rounds, live coding, and salary negotiations." },
  { step: 12, name: "AI Career", icon: Trophy, desc: "Launch high-impact role as AI Engineer, ML Engineer, or GenAI Developer (₹14L–₹42L)." },
];

export default function CareerRoadmapPage() {
  return (
    <div className="min-h-screen bg-[#f5f4ef] text-[#0f0f0e] flex flex-col antialiased">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-36 pb-20">
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.05] border border-black/[0.08] text-xs font-mono font-semibold uppercase tracking-wider text-[#0f0f0e] mb-4">
            <Compass className="w-3.5 h-3.5 text-[#ef5d44]" />
            <span>SEO &amp; AEO Curated Master Guide • 2026 Edition</span>
          </div>

          <h1 className="font-['Archivo',sans-serif] text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0f0f0e] leading-[1.05]">
            Your Roadmap to an AI Career
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#62615d] max-w-3xl mx-auto leading-relaxed">
            The canonical progression engineered by Odisha Institute of AI (OIAI). From programming fundamentals to enterprise AI systems, internships, and high-paying engineering offers.
          </p>
        </div>

        {/* Step-by-Step Vertical Flow Pipeline (Visual Specification) */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="bg-white rounded-3xl border border-black/[0.08] p-6 sm:p-10 shadow-lg relative">
            <h2 className="font-['Archivo',sans-serif] text-2xl sm:text-3xl font-extrabold uppercase text-[#0f0f0e] text-center mb-8">
              The 12-Step AI Career Trajectory
            </h2>

            <div className="space-y-3">
              {ROADMAP_STEPS.map((s, idx) => {
                const Icon = s.icon;
                const isLast = idx === ROADMAP_STEPS.length - 1;

                return (
                  <div key={s.step} className="flex flex-col items-center">
                    <div className="w-full flex items-center gap-4 p-4 rounded-2xl bg-[#fbfaf7] hover:bg-[#f5f4ef] border border-black/[0.06] hover:border-black/20 transition-all shadow-xs group">
                      <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.08] flex items-center justify-center shrink-0 font-mono font-bold text-xs text-[#0f0f0e] shadow-xs group-hover:scale-105 transition-transform">
                        {s.step < 10 ? `0${s.step}` : s.step}
                      </div>

                      <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200/60 flex items-center justify-center shrink-0 text-[#4338ca]">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="font-['Archivo',sans-serif] font-bold text-base sm:text-lg text-[#0f0f0e]">
                            {s.name}
                          </h3>
                          {isLast && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#14b8a6]/15 text-[#0d9488] border border-[#14b8a6]/30">
                              Goal Destination
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-[#62615d] mt-0.5 leading-snug">
                          {s.desc}
                        </p>
                      </div>

                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 hidden sm:block" />
                    </div>

                    {!isLast && (
                      <div className="my-1 text-[#4338ca] flex flex-col items-center animate-pulse">
                        <ArrowDown className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Interactive Detailed Roadmap Workbench */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-['Archivo',sans-serif] text-3xl sm:text-4xl font-extrabold uppercase text-[#0f0f0e]">
              Explore Detailed Curriculum Milestones
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#62615d]">
              Click on each phase to explore prerequisite skills, required tools, and industry benchmark deliverables.
            </p>
          </div>

          <CareerRoadmapVisualizer />
        </div>

        {/* Lead Capture Banner */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#0f0f0e] text-white p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#4338ca]/30 to-transparent blur-3xl pointer-events-none" />
            <h3 className="font-['Archivo',sans-serif] text-2xl sm:text-3xl font-extrabold uppercase">
              Ready to Accelerate Your AI Career?
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
              Book a free 1-on-1 personalized roadmap consultation with an OIAI mentor to assess your background and select your optimal learning speed.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="/#course-finder"
                className="px-7 py-3 rounded-xl bg-white text-[#0f0f0e] font-['Archivo',sans-serif] font-bold text-sm hover:bg-slate-100 transition-colors shadow-md flex items-center gap-2"
              >
                <span>Launch Interactive Course Finder</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
