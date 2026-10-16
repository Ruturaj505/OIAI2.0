import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Building2,
  Users,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Briefcase,
  Sparkles,
  CheckCircle2,
  Send,
  ArrowRight,
  Bot,
  Zap,
  GraduationCap,
  FileCheck,
  PhoneCall
} from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise AI Training, Consulting & Automation | OIAI For Business",
  description:
    "Accelerate enterprise AI adoption with custom corporate training, generative AI workshops, autonomous workflow automation, and academic university partnerships.",
  keywords: [
    "Corporate AI Training",
    "Enterprise AI Consulting",
    "AI Workshops for Companies",
    "Generative AI Corporate Upskilling",
    "College AI Partnerships",
    "AI Automation for Business",
    "OIAI For Business"
  ],
  alternates: {
    canonical: "https://oiai.in/for-business"
  }
};

export default function ForBusinessPage() {
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
            <span className="text-indigo-700 font-semibold">For Business</span>
          </nav>
        </div>

        {/* Page Hero */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold mb-4 shadow-sm">
            <Building2 className="w-3.5 h-3.5 text-purple-600" />
            <span>Enterprise Workforce Transformation &amp; AI Integration</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.08]">
            AI Solutions for Business &amp; Higher Education
          </h1>

          <p className="mt-4 text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Equip your enterprise engineering teams and executive leadership with production-grade AI skills.
            From custom corporate cohort upskilling to autonomous workflow automation and college center-of-excellence partnerships.
          </p>

          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 text-xs font-mono text-slate-700">
            <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs">
              <Zap className="w-4 h-4 text-amber-500" />
              <span><strong>40% Average Boost</strong> in Developer Velocity</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span><strong>100% Private</strong> On-Premise &amp; VPC Deployments</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs">
              <GraduationCap className="w-4 h-4 text-indigo-600" />
              <span><strong>25+ College &amp; Corporate</strong> Partners in Eastern India</span>
            </div>
          </div>
        </section>

        {/* 5 Enterprise Offerings Grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Enterprise &amp; Institutional Service Pillars
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Select an institutional service track tailored to your team size, technical maturity, and operational timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Corporate AI Training */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-indigo-400 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 mb-5">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Corporate AI Training</h3>
                <p className="text-xs text-indigo-600 font-mono font-semibold mt-0.5">Custom Cohort Engineering</p>
                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  Tailored 4–8 week upskilling tracks for software engineering, QA, and data science squads in LLMs, RAG, and PyTorch.
                </p>
                <ul className="space-y-2 mt-4 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Curriculum aligned to your company tech stack</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Hands-on labs on internal repositories &amp; mock data</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-150">
                <Link
                  href="/corporate-training"
                  className="text-xs font-bold text-indigo-700 hover:text-indigo-900 flex items-center gap-1.5"
                >
                  <span>Explore Corporate Training</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 2. Executive AI Workshops */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-indigo-400 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 mb-5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Executive AI Workshops</h3>
                <p className="text-xs text-purple-600 font-mono font-semibold mt-0.5">Strategy &amp; ROI Discovery</p>
                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  Intensive 1–2 day executive masterclasses for CXOs, VPs, and product leaders to demystify generative AI and identify immediate business ROI.
                </p>
                <ul className="space-y-2 mt-4 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>AI opportunity mapping across business units</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Security, data compliance &amp; governance standards</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-150">
                <Link
                  href="/workshops"
                  className="text-xs font-bold text-purple-700 hover:text-purple-900 flex items-center gap-1.5"
                >
                  <span>Explore AI Workshops</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 3. AI Consulting & Architecture */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-indigo-400 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-5">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">AI Consulting &amp; Audits</h3>
                <p className="text-xs text-blue-600 font-mono font-semibold mt-0.5">Feasibility &amp; System Design</p>
                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  Direct architectural advisory on foundation model selection, latency optimization, vector search indexing, and open-weights vs proprietary APIs.
                </p>
                <ul className="space-y-2 mt-4 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Model latency &amp; token billing optimization audits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Hybrid on-premise &amp; cloud deployment blueprints</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-150">
                <Link
                  href="/corporate-training"
                  className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1.5"
                >
                  <span>Consult with AI Advisors</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 4. Enterprise Workflow Automation */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-indigo-400 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-5">
                  <Bot className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">AI Workflow Automation</h3>
                <p className="text-xs text-amber-600 font-mono font-semibold mt-0.5">Autonomous Agentic Integration</p>
                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  Design and deploy autonomous multi-agent pipelines (LangGraph, CrewAI, n8n) that eliminate manual operational bottlenecks across sales, finance, and legal.
                </p>
                <ul className="space-y-2 mt-4 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Autonomous document OCR &amp; legal contract review</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>CRM lead enrichment &amp; automated customer concierges</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-150">
                <Link
                  href="/corporate-training"
                  className="text-xs font-bold text-amber-700 hover:text-amber-900 flex items-center gap-1.5"
                >
                  <span>Request Automation Audit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 5. College & Academic Partnerships */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-indigo-400 hover:shadow-md transition-all flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-5">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">College &amp; University AI Centers of Excellence</h3>
                <p className="text-xs text-emerald-700 font-mono font-semibold mt-0.5">Institutional Academic Collaboration</p>
                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  Partner with OIAI to establish state-of-the-art computational AI labs on your campus. We provide accredited semester curricula, faculty development programs (FDPs), dedicated GPU compute sandboxes, and guaranteed student capstone internships.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Faculty Development Programs (FDPs)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Campus Hackathons &amp; Student AI Clubs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Industry Mentorship for Final-Year Capstones</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Guaranteed 8-Week Summer Internship Slots</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-150">
                <Link
                  href="/academic-partnerships"
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1.5"
                >
                  <span>Explore College &amp; University Partnerships</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Consultation CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#1E1B4B] text-white p-8 sm:p-12 text-center shadow-xl relative overflow-hidden">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-300 block mb-2">
              Custom Corporate Proposal
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to Upgrade Your Team's AI Capabilities?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-indigo-200 max-w-xl mx-auto leading-relaxed">
              Schedule a 30-minute discovery call with our Director of Enterprise Solutions to review sample corporate curricula and pilot cohort schedules.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/corporate-training"
                className="px-7 py-3 rounded-xl bg-white hover:bg-slate-100 text-indigo-950 font-bold text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Request Custom Corporate Proposal</span>
                <ArrowRight className="w-4 h-4 text-indigo-600" />
              </Link>
              <a
                href="tel:+916742913000"
                className="px-6 py-3 rounded-xl bg-indigo-900/70 hover:bg-indigo-900 text-white border border-indigo-700 text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-indigo-300" />
                <span>Call Enterprise Desk: +91 674 291-3000</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
