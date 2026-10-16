import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseFinderWizard from "@/components/CourseFinderWizard";
import CurriculumCatalog from "@/components/CurriculumCatalog";
import {
  BookOpen,
  Sparkles,
  Award,
  Clock,
  Laptop,
  Building2,
  CheckCircle2,
  ArrowRight,
  Filter,
  Layers,
  GraduationCap
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Courses Catalog & Academic Programs | OIAI",
  description:
    "Explore all beginner, professional, and advanced AI courses at OIAI. Learn Python for AI, Prompt Engineering, Generative AI, Machine Learning, and Computer Vision in Bhubaneswar or live online.",
  keywords: [
    "AI Courses",
    "Best AI Courses India",
    "Generative AI Course",
    "Python AI Course",
    "Machine Learning Course Bhubaneswar",
    "AI Certification Online",
    "OIAI Courses"
  ],
  alternates: {
    canonical: "https://oiai.in/courses"
  }
};

export default function CoursesPage() {
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
            <span className="text-indigo-700 font-semibold">Courses</span>
          </nav>
        </div>

        {/* Page Hero */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-4 shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            <span>Structured Academic Offerings • 2026 Cohort Calendar</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.08]">
            All AI Courses &amp; Academic Programs
          </h1>

          <p className="mt-4 text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From foundational 4-week Python bridges to intensive 6-month Generative AI and MLOps master cohorts.
            Choose between live interactive online cohorts or in-person hardware labs at our Bhubaneswar campus.
          </p>

          {/* Quick Course Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <div className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-800 shadow-xs">
              🌱 <strong>Beginner Programs:</strong> Zero prior coding required
            </div>
            <div className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-800 shadow-xs">
              ⚡ <strong>Professional Programs:</strong> 3-Month Fast-Track Upgrades
            </div>
            <div className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-800 shadow-xs">
              🚀 <strong>Advanced Flagships:</strong> 6-Month Deep-Tech Masters
            </div>
          </div>
        </section>

        {/* Section 1: Interactive Course Finder Quiz */}
        <section className="mb-20">
          <CourseFinderWizard />
        </section>

        {/* Section 2: Complete 12-Track Curriculum Catalog with Filters */}
        <section className="mb-20">
          <CurriculumCatalog />
        </section>

        {/* Online vs Offline Campus Comparison */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Choose Your Preferred Learning Format
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                Both formats feature identical curriculum depth, industry mentorship, and guaranteed capstone internships.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Online Cohorts */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Laptop className="w-5 h-5 text-indigo-600" />
                    <h3 className="text-lg font-bold text-slate-900">Live Virtual Interactive Cohorts</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    Learn from anywhere with live interactive video lectures, remote GPU cloud sandboxes, and asynchronous Slack code support.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Weekend Live Sessions (Sat &amp; Sun 10 AM – 1:30 PM)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Dedicated NVIDIA A100 cloud compute hours</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Recorded sessions available with lifetime access</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200">
                  <Link
                    href="/#ai-programs"
                    className="text-xs font-bold text-indigo-700 hover:text-indigo-900 flex items-center gap-1.5"
                  >
                    <span>View Online Cohort Dates</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* In-Person Bhubaneswar Campus */}
              <div className="p-6 rounded-2xl bg-indigo-50/60 border border-indigo-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 className="w-5 h-5 text-indigo-700" />
                    <h3 className="text-lg font-bold text-indigo-950">Bhubaneswar In-Person Campus Labs</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    Immerse yourself in our dedicated computational AI laboratory at the Infocity Tech Corridor in Bhubaneswar, Odisha.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Hands-on hardware labs with NVIDIA Jetson &amp; workstations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Direct in-person code reviews with resident mentors</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Collaborative peer hackathons &amp; demo days</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-indigo-200">
                  <Link
                    href="/bhubaneswar"
                    className="text-xs font-bold text-indigo-900 hover:text-indigo-950 flex items-center gap-1.5"
                  >
                    <span>Explore Bhubaneswar Campus Facilities</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
