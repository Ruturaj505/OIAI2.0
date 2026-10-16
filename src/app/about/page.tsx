import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PedagogicalPillars from "@/components/PedagogicalPillars";
import InstituteInNumbers from "@/components/InstituteInNumbers";
import WhyChooseOIAI from "@/components/WhyChooseOIAI";
import {
  Building2,
  Sparkles,
  ShieldCheck,
  Award,
  Users,
  Compass,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Laptop,
  GraduationCap
} from "lucide-react";

export const metadata: Metadata = {
  title: "About OIAI | Odisha Institute of Artificial Intelligence",
  description:
    "Learn about OIAI's mission to establish Odisha as India's premier computational AI hub through hands-on engineering, foundation models, and industry mentorship in Bhubaneswar.",
  keywords: [
    "About OIAI",
    "Odisha Institute of Artificial Intelligence",
    "AI Institute Bhubaneswar",
    "Best AI Institute Odisha",
    "OIAI Faculty",
    "OIAI Campus"
  ],
  alternates: {
    canonical: "https://oiai.in/about"
  }
};

export default function AboutPage() {
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
            <span className="text-indigo-700 font-semibold">About OIAI</span>
          </nav>
        </div>

        {/* Page Hero */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-4 shadow-sm">
            <Building2 className="w-3.5 h-3.5 text-indigo-600" />
            <span>Odisha's Premier Deep-Tech Institution • Established in Bhubaneswar</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.08]">
            Building India's Next Generation of AI Engineers
          </h1>

          <p className="mt-4 text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Odisha Institute of Artificial Intelligence (OIAI) was founded on a singular conviction: genuine AI mastery is
            forged through production code, mathematical intuition, and real GPU computing—not passive slide presentations.
          </p>

          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-mono text-slate-700 shadow-xs">
            <MapPin className="w-4 h-4 text-rose-500" />
            <span>Campus: <strong>Infocity Tech Corridor, Bhubaneswar, Odisha</strong></span>
          </div>
        </section>

        {/* Section 1: The Genesis & Mission */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 block mb-2">
                Our Genesis &amp; Vision
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Why Eastern India Needs a Dedicated Computational AI Hub
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                While India produces hundreds of thousands of engineering graduates each year, less than 3% possess the practical competencies required by modern frontier AI labs. Most curricula are stalled in legacy algorithms and surface-level syntax.
              </p>
              <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                OIAI bridges this chasm. Located in Bhubaneswar's thriving IT corridor, we provide direct access to state-of-the-art foundation model training, dedicated NVIDIA GPU clusters, and senior mentors from Silicon Valley and Bengaluru.
              </p>
            </div>

            <div className="space-y-3.5">
              <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-indigo-950">100% Verifiable Proof-of-Work</h3>
                  <p className="text-xs text-slate-600 mt-0.5">We reject unverified placement claims. Our graduates prove competence through live GitHub repositories and deployed models.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 flex items-start gap-3">
                <Laptop className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-emerald-950">Hardware &amp; Cloud GPU Labs</h3>
                  <p className="text-xs text-slate-600 mt-0.5">Every learner is provisioned cloud GPU hours on NVIDIA A100s and physical access to NVIDIA Jetson hardware sandboxes.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-100 flex items-start gap-3">
                <Award className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-amber-950">Guaranteed Industry Internships</h3>
                  <p className="text-xs text-slate-600 mt-0.5">Every cohort includes an authentic 2-month capstone internship with commercial startup teams under real SLAs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Institute in Numbers */}
        <section className="mb-20">
          <InstituteInNumbers />
        </section>

        {/* Section 3: The 6 Pedagogical Pillars */}
        <section className="mb-20">
          <PedagogicalPillars />
        </section>

        {/* Section 4: Why Choose OIAI */}
        <section className="mb-20">
          <WhyChooseOIAI />
        </section>

        {/* Campus Tour CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#1E1B4B] text-white shadow-xl relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="max-w-md">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-300 block mb-1">
                Visit Our Campus
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                Schedule a Visit to OIAI Bhubaneswar Labs
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-indigo-200 leading-relaxed">
                Meet our resident researchers, inspect our hardware sandboxes, and discuss your career goals in person.
              </p>
            </div>

            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-indigo-950 font-bold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <span>Schedule Campus Visit</span>
              <ArrowRight className="w-4 h-4 text-indigo-600" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
