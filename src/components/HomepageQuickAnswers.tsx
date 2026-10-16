"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  HelpCircle,
  Users,
  BookOpen,
  Award,
  TrendingUp,
  UserCheck,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Building2,
  GraduationCap,
  Code2,
  ShieldCheck,
  ChevronRight
} from "lucide-react";

interface QuickAnswerItem {
  id: string;
  number: string;
  question: string;
  badge: string;
  headline: string;
  summary: string;
  keyPoints: string[];
  ctaText: string;
  ctaAction: "enroll" | "curriculum" | "roadmap" | "why" | "finder" | "path";
  highlightColor: string;
  icon: React.ReactNode;
}

const QUICK_ANSWERS: QuickAnswerItem[] = [
  {
    id: "what-is-oiai",
    number: "01",
    question: "What is OIAI?",
    badge: "The Institute",
    headline: "Odisha's Premier Computational AI Institute",
    summary: "OIAI (Odisha Institute of Artificial Intelligence) is an advanced educational and research institution in Bhubaneswar dedicated to deep-tech training in modern foundation models, generative AI, machine learning, and autonomous agents.",
    keyPoints: [
      "State-of-the-art computational AI labs in Bhubaneswar & live online cohorts",
      "Production-focused engineering over passive theoretical slides",
      "Rigorous industry-backed curriculum updated weekly with frontier AI advances"
    ],
    ctaText: "Discover Why OIAI",
    ctaAction: "why",
    highlightColor: "border-[#4338ca] text-[#4338ca] bg-indigo-50/60",
    icon: <Building2 className="w-5 h-5 text-[#4338ca]" />
  },
  {
    id: "who-is-it-for",
    number: "02",
    question: "Who is it for?",
    badge: "Target Audience",
    headline: "Students, Engineers, & Career Switchers",
    summary: "OIAI programs are specifically designed with structured entry points for different backgrounds—ensuring you build production competence regardless of your starting level.",
    keyPoints: [
      "College & University Students (B.Tech, BCA, MCA, B.Sc) seeking live internships",
      "Software Engineers transitioning into AI Engineering & LLM Architecture",
      "Non-programmers supported by our dedicated 4-week Python & Math Bridge",
      "Entrepreneurs & Leaders wanting to build and integrate autonomous AI agents"
    ],
    ctaText: "Take 60-Sec Course Finder",
    ctaAction: "finder",
    highlightColor: "border-emerald-600 text-emerald-700 bg-emerald-50/60",
    icon: <Users className="w-5 h-5 text-emerald-600" />
  },
  {
    id: "what-can-i-learn",
    number: "03",
    question: "What can I learn?",
    badge: "12 Industry Tracks",
    headline: "Generative AI, LLMs, Agents, ML & Computer Vision",
    summary: "Master the exact tools, architectures, and libraries deployed by leading AI research labs and tech giants worldwide.",
    keyPoints: [
      "Generative AI & LLMs: Transformers, RAG, Vector DBs, LangChain, Mistral & Llama",
      "Autonomous AI Agents: LangGraph, multi-agent coordination, autonomous tool calling",
      "Machine Learning & PyTorch: Deep neural networks, MLOps, model deployment",
      "Computer Vision & NLP: YOLO, OpenCV, Tokenization, Audio Whisper ASR"
    ],
    ctaText: "Explore All 12 Programs",
    ctaAction: "curriculum",
    highlightColor: "border-teal-600 text-teal-700 bg-teal-50/60",
    icon: <BookOpen className="w-5 h-5 text-teal-600" />
  },
  {
    id: "why-oiai",
    number: "04",
    question: "Why OIAI?",
    badge: "6 Core Pillars",
    headline: "Hands-On Engineering & Guaranteed Internships",
    summary: "We reject outdated slide-reading. At OIAI, every learner writes production code, submits GitHub pull requests, and defends live capstone projects before industry juries.",
    keyPoints: [
      "AI-First Curriculum: No legacy syllabus; built on 2026 foundation models",
      "Senior Mentors: Learn directly from Ex-IISc, IIT, and AWS AI practitioners",
      "Guaranteed Internship Track: 8 to 16 weeks working on real client assignments",
      "100% Transparent Fees: 0% interest EMI options starting at ₹4,999/month"
    ],
    ctaText: "View 6 Institutional Pillars",
    ctaAction: "why",
    highlightColor: "border-amber-600 text-amber-700 bg-amber-50/60",
    icon: <Award className="w-5 h-5 text-amber-600" />
  },
  {
    id: "what-career",
    number: "05",
    question: "What career can I build?",
    badge: "10 High-Growth Roles",
    headline: "Launch as an AI Engineer, ML Specialist or GenAI Dev",
    summary: "Prepare for high-demand roles in India's booming artificial intelligence sector through our proven 7-stage learning journey: LEARN → PRACTICE → BUILD → INTERN → CERTIFY → GET CAREER READY.",
    keyPoints: [
      "AI Engineer & Generative AI Developer (LLM Applications & Agents)",
      "Machine Learning Engineer & MLOps Infrastructure Architect",
      "Data Scientist & AI Automation Specialist for enterprise pipelines",
      "GitHub portfolio defense, ATS resume review & mock technical screenings"
    ],
    ctaText: "Open 12-Step Career Roadmap",
    ctaAction: "roadmap",
    highlightColor: "border-rose-600 text-rose-700 bg-rose-50/60",
    icon: <TrendingUp className="w-5 h-5 text-rose-600" />
  },
  {
    id: "how-to-enroll",
    number: "06",
    question: "How do I enroll?",
    badge: "Simple 3 Steps",
    headline: "Online Application & 1-on-1 Academic Evaluation",
    summary: "Joining OIAI is straightforward and transparent. We assess your background to recommend the exact track and cohort timing for your goals.",
    keyPoints: [
      "Step 1: Submit your online application or take the course finder quiz",
      "Step 2: Free 1-on-1 diagnostic evaluation with a Senior AI Academic Advisor",
      "Step 3: Confirm your seat & batch timing (Weekday / Weekend / Hybrid formats)",
      "Scholarships up to 40% evaluated during your diagnostic consultation"
    ],
    ctaText: "Enroll Now (Admissions Open)",
    ctaAction: "enroll",
    highlightColor: "border-[#0f0f0e] text-[#0f0f0e] bg-slate-100",
    icon: <UserCheck className="w-5 h-5 text-[#0f0f0e]" />
  }
];

interface HomepageQuickAnswersProps {
  onOpenEnroll?: (trackTitle?: string) => void;
}

export default function HomepageQuickAnswers({ onOpenEnroll }: HomepageQuickAnswersProps) {
  const [selectedId, setSelectedId] = useState<string>("what-is-oiai");

  const activeItem = QUICK_ANSWERS.find((item) => item.id === selectedId) || QUICK_ANSWERS[0];

  const handleCtaClick = (action: QuickAnswerItem["ctaAction"]) => {
    switch (action) {
      case "enroll":
        if (onOpenEnroll) onOpenEnroll("Admissions Application");
        else {
          const el = document.getElementById("curriculum");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "curriculum": {
        const el = document.getElementById("curriculum");
        if (el) el.scrollIntoView({ behavior: "smooth" });
        break;
      }
      case "finder": {
        const el = document.getElementById("course-finder");
        if (el) el.scrollIntoView({ behavior: "smooth" });
        break;
      }
      case "path": {
        const el = document.getElementById("find-ai-path");
        if (el) el.scrollIntoView({ behavior: "smooth" });
        break;
      }
      case "why": {
        const el = document.getElementById("why-oiai");
        if (el) el.scrollIntoView({ behavior: "smooth" });
        break;
      }
      case "roadmap":
        window.location.href = "/career-roadmap";
        break;
    }
  };

  return (
    <section 
      id="homepage-answers"
      aria-label="Essential Homepage Clarity: 6 Key Questions Answered"
      className="relative w-full bg-[#F8FAFC] text-[#0f172a] py-16 sm:py-20 lg:py-24 border-b border-[#CBD5E1] overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.08] text-xs font-mono font-bold tracking-wider uppercase text-[#0f172a] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#4338ca]" />
            <span>Essential Institute Clarity</span>
          </div>

          <h2 className="section-heading uppercase text-[#0f172a]">
            Everything You Need to Know <br className="hidden sm:inline" />
            <span className="text-[#4338ca]">In 6 Clear Questions.</span>
          </h2>

          <p className="mt-4 body-paragraph text-[#334155] max-w-2xl">
            Before diving into our full curricula and laboratories, here are the direct answers to the most important questions about OIAI.
          </p>
        </div>

        {/* 6 Questions Interactive Tabs Bar */}
        <div className="mt-6 sm:mt-12 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth">
          {QUICK_ANSWERS.map((item) => {
            const isSelected = item.id === selectedId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedId(item.id)}
                className={`group shrink-0 inline-flex items-center gap-2 px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#0f0f0e] text-white border-[#0f0f0e] shadow-lg shadow-black/15 scale-[1.02]"
                    : "bg-[#E8EDF5] text-[#334155] hover:text-[#0f172a] border-[#CBD5E1] hover:border-indigo-300"
                }`}
              >
                <span className={`font-mono text-[10px] sm:text-[11px] px-1.5 py-0.5 rounded ${
                  isSelected ? "bg-white/20 text-white" : "bg-black/5 text-[#334155]"
                }`}>
                  {item.number}
                </span>
                <span>{item.question}</span>
              </button>
            );
          })}
        </div>

        {/* Active Question Deep-Dive Spotlight Card */}
        <div className="mt-6 p-4.5 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl bg-[#E8EDF5] border border-[#CBD5E1] shadow-[0_20px_50px_-20px_rgba(15,15,14,0.15)] relative overflow-hidden transition-all duration-300">
          
          {/* Subtle Ambient Background Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#4338ca]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center relative z-10">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-7">
              
              <div className="flex items-center gap-2.5 mb-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4338ca] px-2.5 py-1 rounded-md bg-[#4338ca]/10">
                  Question {activeItem.number}
                </span>
                <span className="font-mono text-xs text-[#62615d] font-semibold">
                  • {activeItem.badge}
                </span>
              </div>

              <h3 className="card-heading text-xl sm:text-3xl md:text-4xl text-[#0f172a] tracking-tight uppercase leading-tight">
                {activeItem.headline}
              </h3>

              <p className="mt-3 sm:mt-4 body-paragraph text-xs sm:text-base text-[#334155]">
                {activeItem.summary}
              </p>

              {/* Action Button */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleCtaClick(activeItem.ctaAction)}
                  className="h-11 sm:h-12 px-5 sm:px-6 rounded-xl sm:rounded-2xl bg-[#0f0f0e] hover:bg-[#252525] text-white button-typography text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md hover:-translate-y-0.5"
                >
                  <span>{activeItem.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (onOpenEnroll) onOpenEnroll(activeItem.headline);
                  }}
                  className="h-11 sm:h-12 px-5 rounded-xl sm:rounded-2xl bg-black/[0.04] hover:bg-black/[0.08] text-[#0f172a] button-typography text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Talk to Counsellor</span>
                </button>
              </div>

            </div>

            {/* Right Key Highlights Checklist Card */}
            <div className="lg:col-span-5 bg-[#F1F5F9] border border-[#CBD5E1] rounded-2xl p-6 sm:p-7">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-xl bg-[#E8EDF5] border border-[#CBD5E1] flex items-center justify-center">
                  {activeItem.icon}
                </div>
                <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-[#0f172a]">
                  Key Takeaways
                </h4>
              </div>

              <ul className="space-y-3.5">
                {activeItem.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-sans text-[#334155] leading-snug">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-[#CBD5E1] flex items-center justify-between text-[11px] font-mono text-[#62615d]">
                <span>OIAI Academic Benchmark 2026</span>
                <span className="text-[#0d9488] font-bold">Verified Factsheet ✓</span>
              </div>
            </div>

          </div>

        </div>

        {/* 6 Executive Cards Grid: Read All at Once */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <h3 className="card-heading text-xl sm:text-2xl uppercase tracking-tight text-[#0f172a]">
              All 6 Questions Overview
            </h3>
            <span className="text-xs font-mono text-[#62615d]">
              Click any question to spotlight
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {QUICK_ANSWERS.map((item) => {
              const isSelected = item.id === selectedId;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`p-6 rounded-3xl border transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                    isSelected
                      ? "bg-[#E8EDF5] border-[#4338ca] shadow-md ring-2 ring-[#4338ca]/20"
                      : "bg-[#E8EDF5] hover:bg-[#E2E8F0] border-[#CBD5E1] hover:border-indigo-400 shadow-xs"
                  }`}
                >
                  <div>
                    {/* Top Row */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold text-[#62615d]">
                        Q{item.number}
                      </span>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full font-bold bg-black/[0.04] text-[#62615d]">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="card-heading text-lg text-[#0f172a] uppercase tracking-tight group-hover:text-[#4338ca] transition-colors leading-snug">
                      {item.question}
                    </h4>

                    <p className="mt-2 text-xs font-semibold text-[#4338ca] font-sans">
                      {item.headline}
                    </p>

                    <p className="mt-2 text-xs font-sans text-slate-700 line-clamp-3 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  {/* Bottom Action Hint */}
                  <div className="mt-5 pt-3 border-t border-[#CBD5E1] flex items-center justify-between text-xs font-bold text-[#0f172a]">
                    <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-sans">
                      <span>Explore Answer</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#4338ca]" />
                    </span>
                    <div className="w-6 h-6 rounded-full bg-black/[0.04] flex items-center justify-center group-hover:bg-[#4338ca] group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
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
