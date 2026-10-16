"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Laptop, 
  Target, 
  TrendingUp, 
  Globe, 
  BrainCircuit, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Send, 
  RotateCcw,
  UserCheck,
  Cpu,
  Flame,
  Award
} from "lucide-react";

// Types aligned with Master Specification Item 11
type UserLevel = "School" | "College" | "Graduate" | "Working Professional" | "Developer" | "Entrepreneur";
type UserGoal = "Job" | "Career switch" | "Freelancing" | "Business automation" | "Research" | "Upskilling";
type UserCommitment = "1–2 months" | "3–6 months" | "6–12 months";

interface Recommendation {
  trackName: string;
  tagline: string;
  duration: string;
  badge: string;
  matchScore: string;
  expectedSalary: string;
  highlights: string[];
  compute: string;
  suitableFor: string;
}

export default function CourseFinderWizard() {
  const [step, setStep] = useState<number>(1);
  const [level, setLevel] = useState<UserLevel | null>(null);
  const [goal, setGoal] = useState<UserGoal | null>(null);
  const [commitment, setCommitment] = useState<UserCommitment | null>(null);

  // Form State aligned with Item 29 Lead Form
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("Bhubaneswar");
  const [learningMode, setLearningMode] = useState("Hybrid (Classroom + Online Labs)");
  const [submitted, setSubmitted] = useState(false);

  // Determine dynamic recommendation based on user answers
  const getRecommendation = (): Recommendation => {
    if (goal === "Research") {
      return {
        trackName: "Frontier AI Research & Mathematical Deep Learning",
        tagline: "Rigorous algorithmic experimentation, novel architecture design & paper publication.",
        duration: "6 Months • Research Immersion",
        badge: "Research Track",
        matchScore: "99% Match",
        expectedSalary: "₹22 - ₹48 LPA",
        highlights: [
          "State space models (Mamba) & transformer attention mechanisms",
          "Custom CUDA kernel optimization & memory profiling",
          "Publication-grade capstone with peer review"
        ],
        compute: "NVIDIA H100 GPU Cluster Access",
        suitableFor: "Researchers, PhD aspirants & algorithmic builders",
      };
    }

    if (goal === "Business automation" || level === "Entrepreneur") {
      return {
        trackName: "AI Automation Specialist & Enterprise Agent Workflows",
        tagline: "Build commercial autonomous agentic workflows that replace manual enterprise tasks.",
        duration: "3–6 Months • Venture & Systems Track",
        badge: "Venture Automation",
        matchScore: "98% Match",
        expectedSalary: "₹16 - ₹32 LPA (or Enterprise ROI)",
        highlights: [
          "Connect LangGraph & CrewAI with client CRMs & databases",
          "Multi-agent reasoning loops and autonomous process bots",
          "Deploy self-healing client automation workflows"
        ],
        compute: "Cloud Automation Sandboxes Included",
        suitableFor: "Entrepreneurs, business builders & automation specialists",
      };
    }

    if (goal === "Freelancing" || commitment === "1–2 months") {
      return {
        trackName: "Generative AI & Rapid Agent Development",
        tagline: "Master prompt engineering, rapid prototyping, and commercial AI client solutions.",
        duration: "2 Months • Rapid Sprint",
        badge: "Fast-Track Commercial",
        matchScore: "97% Match",
        expectedSalary: "₹12 - ₹24 LPA (or $40–$90/hr Freelance)",
        highlights: [
          "Structured prompt pipelines and JSON Schema guardrails",
          "No-code / Low-code AI integration with n8n & FastAPI",
          "Deploy client-ready chatbots and document intelligence"
        ],
        compute: "Cloud GPU Notebooks Included",
        suitableFor: "Freelancers, agency founders & rapid upskillers",
      };
    }

    if (level === "School" || level === "College") {
      return {
        trackName: "AI Foundations & Applied Python Engineering",
        tagline: "Build foundational mathematical intuition, Python algorithms, and introductory machine learning.",
        duration: "3–6 Months • Academic Mentorship",
        badge: "Student Excellence Track",
        matchScore: "98% Match",
        expectedSalary: "₹10 - ₹22 LPA First Job",
        highlights: [
          "Python 3.12, NumPy, and PyTorch from scratch",
          "4 Student Capstones with GitHub proof-of-work",
          "Guaranteed 8-week summer AI internship"
        ],
        compute: "Dedicated Student GPU Sandbox",
        suitableFor: "College and high school students aspiring for top AI careers",
      };
    }

    // Default: Professional / Graduate Career Switch or Job
    return {
      trackName: "Generative AI & Autonomous Agent Architecture",
      tagline: "The industry standard for engineering production LLMs, RAG pipelines, and multi-agent systems.",
      duration: "6 Months • Live Interactive + Production Labs",
      badge: "Flagship Career Accelerator",
      matchScore: "99% Match",
      expectedSalary: "₹18 - ₹42 LPA",
      highlights: [
        "Production GraphRAG & vector DB architectures",
        "Sub-100ms low-latency serving with vLLM & TensorRT",
        "Enterprise system design drills with Silicon Valley & Bengaluru mentors"
      ],
      compute: "Dedicated NVIDIA A100 Quota Included",
      suitableFor: "Graduates, developers, and working professionals targeting high-impact AI roles",
    };
  };

  const recommendation = getRecommendation();

  const handleNext = () => {
    if (step === 1 && level) setStep(2);
    else if (step === 2 && goal) setStep(3);
    else if (step === 3 && commitment) setStep(4);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleReset = () => {
    setStep(1);
    setLevel(null);
    setGoal(null);
    setCommitment(null);
    setSubmitted(false);
  };

  const handleSubmitCounselling = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section 
      id="course-finder" 
      className="w-full py-24 lg:py-32 bg-[#F8FAFC] dark:bg-[#080b11] border-b border-[#CBD5E1] dark:border-white/10 relative transition-colors duration-300"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-gradient-to-r from-[#2563eb]/10 via-[#7c3aed]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100 dark:bg-violet-950/60 border border-violet-300 dark:border-violet-500/30 text-[#7c3aed] dark:text-violet-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Target className="w-3.5 h-3.5 text-[#7c3aed]" />
            <span>Interactive AI Course Finder • 60-Second Match</span>
          </div>

          <h2 className="section-heading text-[#0f172a] dark:text-white">
            Find Your Custom AI Match
          </h2>

          <p className="mt-3 body-paragraph text-slate-600 dark:text-slate-400">
            Answer 3 quick questions to discover your personalized OIAI curriculum, salary projections, and eligibility in 60 seconds.
          </p>

          {/* Step Progress Pills */}
          <div className="mt-8 flex items-center justify-center gap-2 max-w-xs mx-auto">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                  step >= s ? "bg-gradient-to-r from-[#2563eb] to-[#7c3aed]" : "bg-slate-200 dark:bg-white/10"
                }`}
              />
            ))}
          </div>
          <p className="text-xs font-mono text-[#2563eb] dark:text-blue-400 mt-2 font-medium">
            {step <= 3 ? `Step ${step} of 3: ${step === 1 ? "Your Background" : step === 2 ? "Primary Goal" : "Time Commitment"}` : "Step 4 of 4: Your Custom AI Recommendation"}
          </p>
        </div>

        {/* Wizard Main Card */}
        <div className="rounded-2xl bg-[#E8EDF5] dark:bg-[#0c101b]/95 border border-[#CBD5E1] dark:border-white/10 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-xs">
          
          <AnimatePresence mode="wait">
            {/* STEP 1: USER LEVEL */}
            {step === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="text-center sm:text-left">
                  <h3 className="card-heading text-xl sm:text-2xl font-bold text-[#0f172a] dark:text-white">
                    1. What is your current level?
                  </h3>
                  <p className="text-xs sm:text-sm body-paragraph text-slate-600 dark:text-slate-400 mt-1">
                    Select your current academic or professional standing to match prerequisites and ramp-up pace.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
                  {[
                    {
                      id: "School" as UserLevel,
                      title: "School",
                      subtitle: "High school / pre-university student exploring AI",
                      icon: GraduationCap,
                    },
                    {
                      id: "College" as UserLevel,
                      title: "College",
                      subtitle: "B.Tech, BCA, MCA, B.Sc or Polytechnic student",
                      icon: GraduationCap,
                    },
                    {
                      id: "Graduate" as UserLevel,
                      title: "Graduate",
                      subtitle: "Recent graduate looking to launch an AI career",
                      icon: Award,
                    },
                    {
                      id: "Working Professional" as UserLevel,
                      title: "Working Professional",
                      subtitle: "Non-IT or IT engineer seeking transition to AI",
                      icon: Briefcase,
                    },
                    {
                      id: "Developer" as UserLevel,
                      title: "Developer",
                      subtitle: "Software or data engineer seeking deep AI expertise",
                      icon: Code2,
                    },
                    {
                      id: "Entrepreneur" as UserLevel,
                      title: "Entrepreneur",
                      subtitle: "Founder, executive, or business innovator",
                      icon: Target,
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    const isSelected = level === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setLevel(item.id)}
                        className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer flex items-start gap-3.5 ${
                          isSelected
                            ? "bg-violet-50 dark:bg-violet-950/40 border-[#7c3aed] shadow-md ring-1 ring-[#7c3aed]/40"
                            : "bg-white dark:bg-white/[0.02] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:bg-slate-50 dark:hover:bg-white/[0.04]"
                        }`}
                      >
                        <div
                          className={`p-2.5 rounded-xl shrink-0 ${
                            isSelected 
                              ? "bg-violet-100 dark:bg-[#7c3aed]/20 text-[#7c3aed] dark:text-violet-300" 
                              : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <p className="text-sm font-bold text-[#0f172a] dark:text-white">{item.title}</p>
                            {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#14b8a6]" />}
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-snug">
                            {item.subtitle}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    disabled={!level}
                    onClick={handleNext}
                    className={`w-full sm:w-auto justify-center glow-button px-7 py-3 rounded-xl text-sm font-bold text-white flex items-center gap-2 ${
                      !level ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                    }`}
                  >
                    <span>Continue to Step 2</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: PRIMARY GOAL */}
            {step === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] dark:text-white">
                    2. What do you want to achieve?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Select your primary learning objective to align projects, portfolio reviews, and mentorship.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
                  {[
                    {
                      id: "Job" as UserGoal,
                      title: "Job",
                      subtitle: "Crack high-paying AI, ML or Data roles",
                      icon: Target,
                    },
                    {
                      id: "Career switch" as UserGoal,
                      title: "Career switch",
                      subtitle: "Transition from non-AI/tech background into AI",
                      icon: TrendingUp,
                    },
                    {
                      id: "Freelancing" as UserGoal,
                      title: "Freelancing",
                      subtitle: "Consult and build custom AI solutions for clients",
                      icon: Globe,
                    },
                    {
                      id: "Business automation" as UserGoal,
                      title: "Business automation",
                      subtitle: "Deploy AI workflows & agents in company operations",
                      icon: Cpu,
                    },
                    {
                      id: "Research" as UserGoal,
                      title: "Research",
                      subtitle: "Publish papers and explore algorithmic frontiers",
                      icon: BrainCircuit,
                    },
                    {
                      id: "Upskilling" as UserGoal,
                      title: "Upskilling",
                      subtitle: "Add LLMs, RAG & agents to current tech stack",
                      icon: Code2,
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    const isSelected = goal === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setGoal(item.id)}
                        className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer flex items-start gap-3.5 ${
                          isSelected
                            ? "bg-violet-50 dark:bg-violet-950/40 border-[#7c3aed] shadow-md ring-1 ring-[#7c3aed]/40"
                            : "bg-white dark:bg-white/[0.02] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:bg-slate-50 dark:hover:bg-white/[0.04]"
                        }`}
                      >
                        <div
                          className={`p-2.5 rounded-xl shrink-0 ${
                            isSelected 
                              ? "bg-violet-100 dark:bg-[#7c3aed]/20 text-[#7c3aed] dark:text-violet-300" 
                              : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <p className="text-sm font-bold text-[#0f172a] dark:text-white">{item.title}</p>
                            {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#14b8a6]" />}
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-snug">
                            {item.subtitle}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-4 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-0">
                  <button
                    onClick={handleBack}
                    className="w-full sm:w-auto justify-center px-5 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center gap-2 cursor-pointer shadow-sm"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    disabled={!goal}
                    onClick={handleNext}
                    className={`w-full sm:w-auto justify-center glow-button px-7 py-3 rounded-xl text-sm font-bold text-white flex items-center gap-2 ${
                      !goal ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                    }`}
                  >
                    <span>Continue to Step 3</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: COMMITMENT */}
            {step === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] dark:text-white">
                    3. How much time can you invest?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Select your available learning investment to match program length and cohort frequency.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  {[
                    {
                      id: "1–2 months" as UserCommitment,
                      title: "1–2 months",
                      subtitle: "Intensive 6–8 hours/week",
                      badge: "Fast-Track",
                      desc: "Quick foundational sprints, prompt engineering & practical tools",
                    },
                    {
                      id: "3–6 months" as UserCommitment,
                      title: "3–6 months",
                      subtitle: "Balanced 10–12 hours/week",
                      badge: "Recommended",
                      desc: "Complete end-to-end ML, Generative AI & agentic systems with projects",
                    },
                    {
                      id: "6–12 months" as UserCommitment,
                      title: "6–12 months",
                      subtitle: "Comprehensive 12–16 hours/week",
                      badge: "Deep Immersion",
                      desc: "Flagship full-stack AI engineering, guaranteed internship & career placement",
                    },
                  ].map((item) => {
                    const isSelected = commitment === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setCommitment(item.id)}
                        className={`p-5 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? "bg-violet-50 dark:bg-violet-950/40 border-[#7c3aed] shadow-md ring-1 ring-[#7c3aed]/40"
                            : "bg-white dark:bg-white/[0.02] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:bg-slate-50 dark:hover:bg-white/[0.04]"
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-[#2563eb] dark:text-blue-300 border border-blue-200 dark:border-blue-800 font-semibold">
                              {item.badge}
                            </span>
                            {isSelected && <CheckCircle2 className="w-4 h-4 text-[#14b8a6]" />}
                          </div>
                          <p className="text-lg font-bold text-[#0f172a] dark:text-white">{item.title}</p>
                          <p className="text-xs font-mono text-[#14b8a6] mt-0.5 font-medium">{item.subtitle}</p>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-4 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-0">
                  <button
                    onClick={handleBack}
                    className="w-full sm:w-auto justify-center px-5 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center gap-2 cursor-pointer shadow-sm"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    disabled={!commitment}
                    onClick={handleNext}
                    className={`w-full sm:w-auto justify-center glow-button px-7 py-3 rounded-xl text-sm font-bold text-white flex items-center gap-2 ${
                      !commitment ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                    }`}
                  >
                    <span>View Recommended OIAI Program</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 4: DYNAMIC RESULT CARD + EMBEDDED COUNSELLING FORM */}
            {step === 4 && (
              <motion.div
                key="step-4"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Recommendation Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 dark:border-white/10 gap-4">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className="p-1 rounded-md bg-violet-100 dark:bg-violet-950 border border-violet-300 dark:border-violet-500/40 text-[#7c3aed] dark:text-violet-300">
                        <Award className="w-4 h-4" />
                      </span>
                      <span className="text-xs font-mono font-bold text-[#7c3aed] dark:text-violet-300 uppercase tracking-wider">
                        Recommended OIAI Program
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] dark:text-white mt-1">
                      {recommendation.trackName}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                      {recommendation.tagline}
                    </p>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between gap-1 shrink-0">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-teal-50 dark:bg-teal-950/80 text-[#14b8a6] dark:text-[#14b8a6] border border-teal-200 dark:border-teal-500/40">
                      {recommendation.matchScore}
                    </span>
                    <span className="text-xs font-mono text-[#2563eb] dark:text-blue-400 font-semibold">
                      {recommendation.badge}
                    </span>
                  </div>
                </div>

                {/* Recommendation Overview Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-1 shadow-sm">
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold">Program Duration</span>
                    <p className="text-sm font-bold text-[#0f172a] dark:text-white flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#2563eb]" />
                      {recommendation.duration}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-1 shadow-sm">
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold">Salary Potential</span>
                    <p className="text-sm font-bold text-[#14b8a6] font-mono">
                      {recommendation.expectedSalary}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-1 shadow-sm">
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold">Compute Resources</span>
                    <p className="text-sm font-bold text-[#2563eb] dark:text-blue-400 font-mono flex items-center gap-1.5">
                      <Cpu className="w-4 h-4 text-[#2563eb]" />
                      {recommendation.compute}
                    </p>
                  </div>
                </div>

                {/* Core Learnings */}
                <div className="p-5 rounded-xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 space-y-3 shadow-sm">
                  <p className="text-xs font-mono font-semibold uppercase text-slate-600 dark:text-slate-400 tracking-wider">
                    Key Curriculum Pillars for your profile ({level} • {goal}):
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {recommendation.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-[#14b8a6] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Embedded "Book Free Counselling" Form */}
                <div className="rounded-2xl p-6 sm:p-7 bg-[#080b11] text-white border border-[#7c3aed]/30 relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#7c3aed]/10 rounded-full blur-3xl pointer-events-none" />

                  {submitted ? (
                    <div className="text-center py-6 space-y-3">
                      <div className="w-14 h-14 mx-auto rounded-full bg-violet-950 border border-[#7c3aed] flex items-center justify-center text-violet-300 shadow-[0_0_25px_rgba(124,58,237,0.35)]">
                        <UserCheck className="w-7 h-7" />
                      </div>
                      <h4 className="text-xl font-bold text-white">Free Counselling Session Booked!</h4>
                      <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                        Thank you, <span className="text-white font-semibold">{name}</span>! Our Senior Academic Advisor will reach out via WhatsApp / phone at <span className="text-[#14b8a6] font-mono">{mobile}</span> with your personalized syllabus PDF and scholarship details.
                      </p>
                      <div className="pt-3">
                        <button
                          onClick={handleReset}
                          className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#7c3aed]/40 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-2 mx-auto cursor-pointer"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Retake Course Finder Wizard</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="p-1 rounded-md bg-violet-950 border border-violet-700/50 text-[#7c3aed]">
                          <UserCheck className="w-4 h-4" />
                        </span>
                        <h4 className="text-lg sm:text-xl font-bold text-white">
                          Book Free 1:1 AI Career Counselling
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300">
                        Reserve a 20-minute strategy call with an OIAI mentor to inspect project repos and clarify scholarship criteria.
                      </p>

                      <form onSubmit={handleSubmitCounselling} className="mt-5 space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                          <div>
                            <label htmlFor="wizard-name" className="block text-xs font-medium text-slate-300 mb-1">
                              Your Name *
                            </label>
                            <input
                              id="wizard-name"
                              type="text"
                              required
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="e.g. Priyadarshini Das"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-all"
                            />
                          </div>

                          <div>
                            <label htmlFor="wizard-mobile" className="block text-xs font-medium text-slate-300 mb-1">
                              Mobile / WhatsApp *
                            </label>
                            <input
                              id="wizard-mobile"
                              type="tel"
                              required
                              value={mobile}
                              onChange={(e) => setMobile(e.target.value)}
                              placeholder="+91 98765 43210"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-all"
                            />
                          </div>

                          <div>
                            <label htmlFor="wizard-email" className="block text-xs font-medium text-slate-300 mb-1">
                              Email Address *
                            </label>
                            <input
                              id="wizard-email"
                              type="email"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="name@gmail.com"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-all"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          <div>
                            <label htmlFor="wizard-city" className="block text-xs font-medium text-slate-300 mb-1">
                              City / Location *
                            </label>
                            <input
                              id="wizard-city"
                              type="text"
                              required
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                              placeholder="e.g. Bhubaneswar, Cuttack, Remote"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-all"
                            />
                          </div>

                          <div>
                            <label htmlFor="wizard-mode" className="block text-xs font-medium text-slate-300 mb-1">
                              Preferred Learning Mode *
                            </label>
                            <select
                              id="wizard-mode"
                              value={learningMode}
                              onChange={(e) => setLearningMode(e.target.value)}
                              className="w-full px-3.5 py-2.5 rounded-xl bg-[#0c101b] border border-white/15 text-white text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-all"
                            >
                              <option value="Hybrid (Classroom + Online Labs)">Hybrid (Classroom + Online Labs)</option>
                              <option value="In-Person Classroom (Bhubaneswar)">In-Person Classroom (Bhubaneswar)</option>
                              <option value="100% Online Live Cohort">100% Online Live Cohort</option>
                              <option value="Weekend Executive Batch">Weekend Executive Batch</option>
                            </select>
                          </div>
                        </div>

                        <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between pt-2 gap-3">
                          <button
                            type="button"
                            onClick={handleReset}
                            className="w-full sm:w-auto justify-center px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5 cursor-pointer"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span>Start Over</span>
                          </button>

                          <button
                            type="submit"
                            id="submit-counselling-btn"
                            className="w-full sm:w-auto glow-button px-6 sm:px-8 py-3 rounded-xl text-xs sm:text-sm font-bold text-white flex items-center justify-center gap-2 cursor-pointer"
                          >
                            <Send className="w-4 h-4 text-white" />
                            <span>Confirm Counselling &amp; Download Syllabus</span>
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
