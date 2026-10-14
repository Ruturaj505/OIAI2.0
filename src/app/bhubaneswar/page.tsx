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
  Building2
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Institute in Bhubaneswar | Top AI Training & Machine Learning Course",
  description: "Odisha Institute of AI (OIAI) is the leading AI Institute in Bhubaneswar. Learn Generative AI, Machine Learning, Python, and Deep Learning with dedicated GPU labs in Infocity Bhubaneswar.",
  keywords: [
    "AI Institute in Bhubaneswar",
    "AI Training in Bhubaneswar",
    "Artificial Intelligence Course in Bhubaneswar",
    "AI Classes in Bhubaneswar",
    "Machine Learning Institute Bhubaneswar",
    "Generative AI Course Bhubaneswar",
    "Best AI Course Odisha"
  ],
};

const LOCAL_PILLARS = [
  {
    title: "AI Training in Bhubaneswar",
    desc: "Hands-on classroom sessions and evening cohorts designed for college students and working software engineers in Bhubaneswar IT corridor.",
    icon: Laptop,
  },
  {
    title: "Artificial Intelligence Course in Bhubaneswar",
    desc: "Comprehensive curriculum covering PyTorch, foundation models, RAG architectures, and agentic workflows with live code defenses.",
    icon: Terminal,
  },
  {
    title: "AI Classes in Bhubaneswar",
    desc: "Small-batch interactive cohorts (maximum 25 learners) with dedicated workstation labs and 1:1 mentor code reviews.",
    icon: Users,
  },
  {
    title: "Machine Learning Institute Bhubaneswar",
    desc: "Rigorous mathematical modeling, gradient optimization, feature engineering, and statistical inference taught by ex-IIT and AWS researchers.",
    icon: Award,
  },
  {
    title: "Generative AI Course Bhubaneswar",
    desc: "Odisha's first dedicated frontier LLM specialization: LoRA fine-tuning, LangGraph multi-agent systems, and production inference serving.",
    icon: Sparkles,
  },
];

export default function BhubaneswarLandingPage() {
  return (
    <div className="min-h-screen bg-[#f5f4ef] text-[#0f0f0e] flex flex-col antialiased">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-36 pb-20">
        
        {/* Header Hero */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.05] border border-black/[0.08] text-xs font-mono font-semibold uppercase tracking-wider text-[#0f0f0e] mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#ef5d44]" />
            <span>Infocity • Chandrasekharpur • Patia Tech Hub</span>
          </div>

          <h1 className="font-['Archivo',sans-serif] text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0f0f0e]">
            AI Institute in Bhubaneswar
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#62615d] max-w-3xl mx-auto leading-relaxed">
            Odisha Institute of Artificial Intelligence (OIAI) is the premier center of excellence for AI education, machine learning research, and high-impact career placement in Bhubaneswar.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="/#course-finder"
              className="px-8 py-3.5 rounded-xl bg-[#0f0f0e] text-white font-['Archivo',sans-serif] font-bold text-sm hover:bg-[#252525] transition-colors shadow-md flex items-center gap-2"
            >
              <span>Explore Programs &amp; Fees</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+916742913000"
              className="px-6 py-3.5 rounded-xl bg-white border border-black/[0.1] text-[#0f0f0e] font-['Archivo',sans-serif] font-bold text-sm hover:bg-[#fbfaf7] transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#ef5d44]" />
              <span>Call Admissions: +91 674 291-3000</span>
            </a>
          </div>
        </div>

        {/* Local Services & Keywords Pillars */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-['Archivo',sans-serif] text-3xl font-extrabold uppercase text-[#0f0f0e]">
              Specialized AI Programs in Bhubaneswar
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#62615d]">
              Designed specifically for engineering students from OUTR, KIIT, SOA, Silicon, and IT professionals working in Bhubaneswar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCAL_PILLARS.map((p, idx) => {
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
                    <span>Bhubaneswar Campus</span>
                    <span>100% Practical</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Campus Location Details */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="rounded-3xl bg-white border border-black/[0.08] p-8 sm:p-12 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#ef5d44]/10 text-[#ef5d44] border border-[#ef5d44]/20 uppercase">
                  State-of-the-Art Facility
                </span>
                <h3 className="font-['Archivo',sans-serif] text-2xl sm:text-3xl font-extrabold uppercase text-[#0f0f0e] mt-2">
                  Visit Our Bhubaneswar Innovation Center
                </h3>
                <p className="text-sm text-[#62615d] mt-3 leading-relaxed">
                  Located in the heart of Bhubaneswar's technology corridor, our center features dedicated GPU workstations, collaborative project huddle rooms, and a high-speed fiber computing network.
                </p>

                <div className="mt-5 space-y-2 text-xs font-mono text-[#333331]">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#ef5d44] shrink-0" />
                    <span>OIAI Innovation Center, Infocity Tech Park, Patia, Bhubaneswar, Odisha 751024</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#4338ca] shrink-0" />
                    <span>Operating Hours: Monday – Sunday (8:00 AM – 8:30 PM)</span>
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#fbfaf7] border border-black/[0.08] text-center space-y-4">
                <h4 className="font-['Archivo',sans-serif] font-bold text-lg text-[#0f0f0e]">
                  Schedule a Campus Visit &amp; Lab Tour
                </h4>
                <p className="text-xs text-[#62615d]">
                  Meet our AI faculty, test our GPU compute clusters, and inspect actual capstone project codebases built by our students.
                </p>
                <a
                  href="/#course-finder"
                  className="inline-block px-6 py-3 rounded-xl bg-[#0f0f0e] text-white font-['Archivo',sans-serif] font-bold text-xs hover:bg-[#252525] transition-colors shadow-md"
                >
                  Book Free 1:1 In-Person Consultation
                </a>
              </div>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
