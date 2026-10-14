import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  MapPin, 
  CheckCircle2, 
  Award, 
  Briefcase, 
  ArrowRight, 
  Laptop, 
  Terminal, 
  Users, 
  Sparkles,
  Phone,
  GraduationCap
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Institute in Odisha | Premier AI Training & Certification Center",
  description: "Odisha Institute of AI (OIAI) is Odisha's premier artificial intelligence institution. Offering AI Courses, AI Certification, AI Internships, and hands-on Generative AI training across Odisha.",
  keywords: [
    "AI Institute in Odisha",
    "AI Training in Odisha",
    "AI Courses in Odisha",
    "AI Certification in Odisha",
    "AI Internship in Odisha",
    "Artificial Intelligence Odisha"
  ],
};

const ODISHA_PILLARS = [
  {
    title: "AI Institute in Odisha",
    desc: "Odisha's flagship computational artificial intelligence institute committed to elevating the technical caliber of local engineers to Silicon Valley benchmarks.",
    icon: GraduationCap,
  },
  {
    title: "AI Training in Odisha",
    desc: "Rigorous live instruction, practical lab tasks, and personalized mentoring available in Bhubaneswar classroom labs and live hybrid virtual cohorts state-wide.",
    icon: Laptop,
  },
  {
    title: "AI Courses in Odisha",
    desc: "12 structured curriculum tracks covering Python, Machine Learning, Deep Learning, Generative AI, Computer Vision, and Autonomous Multi-Agent Swarms.",
    icon: Terminal,
  },
  {
    title: "AI Certification in Odisha",
    desc: "Verifiable industry credentials endorsed by tech leaders with unique cryptographic IDs and transparent competence rubrics.",
    icon: Award,
  },
  {
    title: "AI Internship in Odisha",
    desc: "Guaranteed 8–12 week commercial fellowships connecting Odisha's brightest minds directly with fast-growing AI startups and enterprise labs.",
    icon: Briefcase,
  },
];

const ODISHA_CITIES = [
  { city: "Bhubaneswar", desc: "Headquarters & physical GPU Innovation Center in Infocity Patia." },
  { city: "Cuttack", desc: "Direct shuttle access & hybrid weekend cohorts for Ravenshaw & engineering students." },
  { city: "Rourkela", desc: "Specialized weekend executive cohorts for NIT Rourkela and regional manufacturing engineers." },
  { city: "Berhampur", desc: "Virtual live cohorts and summer AI internship bootcamps for southern Odisha colleges." },
  { city: "Sambalpur & Burla", desc: "Collaborative research chapters for VSSUT Burla and western Odisha learners." },
  { city: "Balasore", desc: "Hybrid weekend sessions and academic partnerships with regional polytechnics." },
];

export default function OdishaLandingPage() {
  return (
    <div className="min-h-screen bg-[#f5f4ef] text-[#0f0f0e] flex flex-col antialiased">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-36 pb-20">
        
        {/* Header Hero */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.05] border border-black/[0.08] text-xs font-mono font-semibold uppercase tracking-wider text-[#0f0f0e] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#ef5d44]" />
            <span>State-Wide Artificial Intelligence Mission • Item 25</span>
          </div>

          <h1 className="font-['Archivo',sans-serif] text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0f0f0e]">
            AI Institute in Odisha
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#62615d] max-w-3xl mx-auto leading-relaxed">
            Empowering students, graduates, and engineering professionals across all 30 districts of Odisha with world-class, production-grade Artificial Intelligence education.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="/#course-finder"
              className="px-8 py-3.5 rounded-xl bg-[#0f0f0e] text-white font-['Archivo',sans-serif] font-bold text-sm hover:bg-[#252525] transition-colors shadow-md flex items-center gap-2"
            >
              <span>Find My AI Course</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/internships"
              className="px-6 py-3.5 rounded-xl bg-white border border-black/[0.1] text-[#0f0f0e] font-['Archivo',sans-serif] font-bold text-sm hover:bg-[#fbfaf7] transition-colors flex items-center gap-2"
            >
              <span>Explore AI Internships</span>
            </a>
          </div>
        </div>

        {/* 5 Core Odisha Pillars Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-['Archivo',sans-serif] text-3xl font-extrabold uppercase text-[#0f0f0e]">
              5 Core Differentiators for Odisha
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#62615d]">
              Bridging the gap between tier-1 tech hub opportunities and talented engineers in Odisha.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ODISHA_PILLARS.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.08] hover:border-black/25 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#f5f4ef] border border-black/[0.08] flex items-center justify-center text-[#4338ca] mb-4">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="font-['Archivo',sans-serif] font-bold text-lg text-[#0f0f0e]">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#62615d] mt-2 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono text-[#0d9488] font-semibold">
                    <span>Odisha State Standard</span>
                    <span>Industry Aligned</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* District Reach */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="rounded-3xl bg-white border border-black/[0.08] p-8 sm:p-12 shadow-lg">
            <h3 className="font-['Archivo',sans-serif] text-2xl sm:text-3xl font-extrabold uppercase text-[#0f0f0e] text-center mb-2">
              Serving Learners Across Odisha
            </h3>
            <p className="text-sm text-[#62615d] text-center max-w-2xl mx-auto mb-8">
              Whether you are attending physical labs in Bhubaneswar or joining virtual interactive cohorts from across the state.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ODISHA_CITIES.map((c) => (
                <div key={c.city} className="p-4 rounded-2xl bg-[#fbfaf7] border border-black/[0.06]">
                  <h4 className="font-['Archivo',sans-serif] font-bold text-base text-[#0f0f0e] flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#ef5d44]" />
                    <span>{c.city}</span>
                  </h4>
                  <p className="text-xs text-[#62615d] mt-1 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
