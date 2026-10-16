import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FileText,
  BookOpen,
  Compass,
  Download,
  HelpCircle,
  Trophy,
  Code2,
  FolderGit2,
  Sparkles,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Search,
  CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Resources, Guides, Blog & Research | OIAI",
  description:
    "Explore free artificial intelligence resources: deep-dive blog articles, 12-step AI career roadmaps, production code cheat sheets, salary guides, and graduate case studies.",
  keywords: [
    "AI Resources",
    "AI Blog India",
    "Machine Learning Tutorials",
    "AI Career Roadmap PDF",
    "Generative AI Cheat Sheets",
    "OIAI Resources"
  ],
  alternates: {
    canonical: "https://oiai.in/resources"
  }
};

const RESOURCE_CARDS = [
  {
    title: "AI Knowledge Hub & Blog",
    desc: "In-depth technical breakdowns of frontier research papers, LLM quantization, RAG benchmarks, and agent architectures.",
    href: "/blog",
    badge: "Updated Weekly",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    icon: FileText
  },
  {
    title: "12-Step AI Career Roadmap",
    desc: "The definitive sequential guide from Programming & Python to Generative AI, live internships, and engineering offers.",
    href: "/career-roadmap",
    badge: "Flagship Guide",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    icon: Compass
  },
  {
    title: "Student Projects & Proof-of-Work Hub",
    desc: "Explore production capstones built by OIAI cohort graduates: autonomous agents, vision defect detectors, and medical diagnostics.",
    href: "/projects",
    badge: "Open Repos",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    icon: FolderGit2
  },
  {
    title: "Graduate Success Stories & Case Studies",
    desc: "Real career transformation narratives: non-IT switchers, college graduates, and senior devs moving into frontier AI roles.",
    href: "/success-stories",
    badge: "Verified Placements",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    icon: Trophy
  },
  {
    title: "AEO & AI Search Frequently Asked Questions",
    desc: "Authoritative answers to the most common questions regarding AI curricula, compute prerequisites, fees, and career outcomes.",
    href: "/faq",
    badge: "AEO Optimized",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    icon: HelpCircle
  },
  {
    title: "AI Internship Portal",
    desc: "Explore guaranteed 8–16 week commercial capstone internships across Python, ML, GenAI, and Data Science.",
    href: "/internships",
    badge: "Active Cohorts",
    badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
    icon: Code2
  }
];

export default function ResourcesPage() {
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
            <span className="text-indigo-700 font-semibold">Resources</span>
          </nav>
        </div>

        {/* Page Hero */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Open Computational Knowledge &amp; Toolkits</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.08]">
            AI Learning Resources &amp; Guides
          </h1>

          <p className="mt-4 text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Free high-signal guides, code repositories, research breakdowns, and career navigation blueprints published
            by Odisha Institute of Artificial Intelligence mentors and researchers.
          </p>
        </section>

        {/* Resource Cards Grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESOURCE_CARDS.map((res, idx) => {
              const Icon = res.icon;
              return (
                <Link
                  key={idx}
                  href={res.href}
                  className="group p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-indigo-400 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${res.badgeColor}`}>
                        {res.badge}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold text-slate-900 group-hover:text-indigo-950 transition-colors">
                      {res.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {res.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-600 group-hover:text-indigo-800">
                    <span>Access Resource</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Downloadable Curriculum Brochure Banner */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#1E1B4B] text-white shadow-xl relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="max-w-md">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-300 block mb-1">
                Official Syllabus PDF
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                Download the Complete 2026 Academic Catalog
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-indigo-200 leading-relaxed">
                Includes week-by-week curriculum roadmaps, project blueprints, hardware specifications, and fee breakdown for all 12 tracks.
              </p>
            </div>

            <Link
              href="/#course-finder"
              className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-indigo-950 font-bold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <Download className="w-4 h-4 text-indigo-600" />
              <span>Get Curriculum Guide</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
