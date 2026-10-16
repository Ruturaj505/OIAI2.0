import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FindYourAIPath from "@/components/FindYourAIPath";
import {
  Compass,
  TrendingUp,
  Briefcase,
  Award,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  DollarSign,
  FileText,
  UserCheck,
  ChevronRight,
  Code2,
  GraduationCap
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Careers, Roles & Salary Guide 2026 | OIAI",
  description:
    "Explore high-growth careers in Artificial Intelligence: AI Engineer, GenAI Developer, ML Specialist, Data Scientist, and Prompt Engineer with salary benchmarks and career roadmaps.",
  keywords: [
    "AI Careers",
    "AI Job Roles",
    "AI Engineer Salary India",
    "Generative AI Developer Jobs",
    "Machine Learning Career Path",
    "AI Career Guide 2026",
    "OIAI Careers"
  ],
  alternates: {
    canonical: "https://oiai.in/ai-careers"
  }
};

export default function AICareersPage() {
  return (
    <div className="min-h-screen bg-[#faf9f5] text-slate-900 flex flex-col antialiased selection:bg-indigo-500/20 selection:text-indigo-900">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-36 pb-24">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <nav aria-label="Breadcrumb" className="text-xs font-mono text-slate-500 flex items-center gap-2">
            <Link href="/" className="hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-indigo-700 font-semibold">AI Careers</span>
          </nav>
        </div>

        {/* Page Hero */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-4 shadow-sm">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
            <span>AI Talent Demand Index • 2026 Industry Report</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.08]">
            AI Careers, Job Roles &amp; Salary Guide
          </h1>

          <p className="mt-4 text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover the 10 highest-growth roles in artificial intelligence. Compare day-to-day responsibilities, required
            technical stacks, and verified compensation benchmarks across India and global remote markets.
          </p>

          {/* Quick Stats Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 text-xs font-mono text-slate-700">
            <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs">
              <Briefcase className="w-4 h-4 text-indigo-600" />
              <span><strong>10 High-Growth Roles</strong> Mapped</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span><strong>+140% YoY Surge</strong> in GenAI &amp; Agent Roles</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs">
              <Award className="w-4 h-4 text-cyan-600" />
              <span><strong>Avg. Starting CTC:</strong> ₹10L – ₹16 LPA</span>
            </div>
          </div>
        </section>

        {/* Signature Feature: Find Your AI Path (10 Interactive Roles) */}
        <section className="mb-20">
          <FindYourAIPath />
        </section>

        {/* Dedicated Callout to 12-Step Roadmap */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#1E1B4B] via-[#2A246B] to-[#1E1B4B] text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-300 block mb-2">
                Curriculum Progression Guide
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Want the exact step-by-step roadmap to get hired?
              </h2>
              <p className="mt-2 text-sm text-indigo-200 leading-relaxed">
                Explore our canonical 12-step engineering roadmap: Programming → Python → SQL → ML → Deep Learning →
                GenAI → AI Agents → Projects → Internship → Portfolio → Interview → Offer.
              </p>
            </div>

            <Link
              href="/career-roadmap"
              className="px-7 py-3 rounded-xl bg-white hover:bg-slate-100 text-indigo-950 font-bold text-sm transition-all shadow-md flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <span>Explore 12-Step AI Roadmap</span>
              <ArrowRight className="w-4 h-4 text-indigo-600" />
            </Link>
          </div>
        </section>

        {/* Career Support Services Breakdown */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              OIAI Comprehensive Career Support
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              We guide you beyond coding tutorials to verifiable portfolio defense, executive referrals, and salary negotiations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">AI ATS Resume &amp; GitHub Audit</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Transform your resume into a high-signal, recruiter-friendly profile optimized for modern AI hiring algorithms and verifiable GitHub contribution graphs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">1:1 Mock System Design Interviews</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Practice AI system design rounds, PyTorch live coding challenges, and research paper defenses before senior engineers from Silicon Valley and Bengaluru.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 mb-4">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Guaranteed Capstone Internship</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Every cohort includes a 2-month guaranteed industry internship with commercial startup teams to validate your real-world problem solving under SLAs.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
