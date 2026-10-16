import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIProgramsSection from "@/components/AIProgramsSection";
import {
  Cpu,
  Sparkles,
  Award,
  Laptop,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  CreditCard,
  Building2,
  Layers,
  GraduationCap
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Programs & Specialized Tracks | OIAI Bhubaneswar",
  description:
    "Explore all 12 specialized computational AI programs: Generative AI, Machine Learning, Deep Learning, Computer Vision, Prompt Engineering, AI Agents, and MLOps with guaranteed internships.",
  keywords: [
    "AI Programs",
    "Generative AI Course",
    "Machine Learning Training Bhubaneswar",
    "AI Agents Cohort",
    "Deep Learning PyTorch",
    "OIAI AI Programs",
    "Artificial Intelligence Certification Odisha"
  ],
  alternates: {
    canonical: "https://oiai.in/ai-programs"
  }
};

export default function AIProgramsPage() {
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
            <span className="text-indigo-700 font-semibold">AI Programs</span>
          </nav>
        </div>

        {/* Page Hero */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-4 shadow-sm">
            <Cpu className="w-3.5 h-3.5 text-indigo-600" />
            <span>Curricula Validated by AI Industry Leaders • 2026 Edition</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.08]">
            AI Programs &amp; Specialized Tracks
          </h1>

          <p className="mt-4 text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Rigorous computational curricula designed to build production engineers, not passive slide-watchers.
            Every program includes guaranteed 2-month live industry internships, high-compute GPU access, and verifiable credentials.
          </p>

          {/* Quick Metrics */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 text-xs font-mono text-slate-700">
            <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span><strong>12 Specialized Tracks</strong> (Foundations to MLOps)</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs">
              <Laptop className="w-4 h-4 text-emerald-600" />
              <span><strong>A100 Cloud GPU</strong> Sandbox Quota Included</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs">
              <Award className="w-4 h-4 text-amber-600" />
              <span><strong>Guaranteed</strong> 2-Month Capstone Internship</span>
            </div>
          </div>
        </section>

        {/* Core AI Programs Section Component */}
        <AIProgramsSection />

        {/* Institutional Quality Guarantee */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                The OIAI Engineering Standard
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600">
                How our curricula outperform traditional university courses and superficial coding bootcamps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Zero Toy Projects</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  We ban toy Iris or MNIST datasets. You build enterprise multimodal RAG systems, autonomous agent graphs, and high-throughput vLLM clusters.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Code Defense Audits</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Every capstone must be defended live in front of senior industry practitioners, mirroring real Silicon Valley and Bengaluru engineering design reviews.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-4">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Transparent Pricing</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  No hidden platform charges or inflated ISA agreements. Transparent tuition starting from ₹24,999 with flexible no-cost EMIs from ₹2,083/month.
                </p>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-sm font-bold text-slate-900 block">Not sure which track matches your background?</span>
                <span className="text-xs text-slate-600">Take our 60-second diagnostic quiz to match your prerequisites and pace.</span>
              </div>
              <Link
                href="/#course-finder"
                className="px-6 py-2.5 rounded-xl bg-[#1E1B4B] hover:bg-[#2d2870] text-white text-xs sm:text-sm font-bold transition-all shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <span>Take 60-Sec Course Finder</span>
                <ArrowRight className="w-4 h-4 text-indigo-300" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
