"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  GraduationCap, 
  School, 
  BookOpen, 
  Code2, 
  Briefcase, 
  Trophy, 
  Users, 
  CheckCircle2, 
  Send, 
  ArrowRight,
  Sparkles,
  Award,
  Layers,
  Laptop
} from "lucide-react";

const COLLEGE_SERVICES = [
  {
    id: "workshops",
    title: "AI Workshops",
    desc: "Hands-on, single or multi-day intensive student seminars on Generative AI, PyTorch, and Computer Vision.",
    icon: Sparkles,
  },
  {
    id: "fdp",
    title: "Faculty Development Programs (FDP)",
    desc: "Comprehensive pedagogy upskilling for computer science & engineering professors on modern foundation models & research tools.",
    icon: School,
  },
  {
    id: "bootcamps",
    title: "Student Bootcamps",
    desc: "Semester-break intensive technical sprints taking engineering students from basic code to building real AI applications.",
    icon: Laptop,
  },
  {
    id: "certification",
    title: "AI Certification",
    desc: "OIAI co-branded, industry-recognized certificates with verifiable digital IDs and skill rubrics for college credits.",
    icon: Award,
  },
  {
    id: "internships",
    title: "Internship Programs",
    desc: "Guaranteed 8–12 week commercial startup internships for top-performing students in AI, ML, Data Science, and Agentic AI.",
    icon: Briefcase,
  },
  {
    id: "projects",
    title: "Industry Projects",
    desc: "Curated real-world project assignments replacing generic textbook capstones with actual enterprise codebases.",
    icon: Layers,
  },
  {
    id: "clubs",
    title: "AI Clubs & Chapters",
    desc: "Setting up and sponsoring student-led OIAI Student Chapters with compute allowances, study groups, and hackathon grants.",
    icon: Users,
  },
  {
    id: "hackathons",
    title: "Hackathons",
    desc: "Institution-wide AI buildathons with cash prizes, mentor juries, and direct internship fast-tracks for winning squads.",
    icon: Trophy,
  },
  {
    id: "placement",
    title: "Placement-Oriented Training",
    desc: "Specialized pre-placement drills: AI system design, live coding prep, GitHub review, and direct interview pipelines.",
    icon: CheckCircle2,
  },
];

export default function AcademicPartnershipsPage() {
  const [institutionName, setInstitutionName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [designation, setDesignation] = useState("Head of Department (CSE/IT)");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [studentCount, setStudentCount] = useState("100–300 Students");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f5f4ef] text-[#0f0f0e] flex flex-col antialiased">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-36 pb-20">
        
        {/* Header Hero */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.05] border border-black/[0.08] text-xs font-mono font-semibold uppercase tracking-wider text-[#0f0f0e] mb-4">
            <GraduationCap className="w-3.5 h-3.5 text-[#ef5d44]" />
            <span>Academic Collaboration Portal • Item 17</span>
          </div>

          <h1 className="font-['Archivo',sans-serif] text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0f0f0e]">
            AI Training for Colleges &amp; Universities
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#62615d] max-w-3xl mx-auto leading-relaxed">
            Bridge academic curricula with industry-standard AI engineering. We partner with universities, engineering colleges, and polytechnics across Odisha and Eastern India.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="#partner-form"
              className="px-7 py-3 rounded-xl bg-[#0f0f0e] text-white font-['Archivo',sans-serif] font-bold text-sm hover:bg-[#252525] transition-colors shadow-md flex items-center gap-2"
            >
              <span>Partner With OIAI</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 9 Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-['Archivo',sans-serif] text-3xl font-extrabold uppercase text-[#0f0f0e]">
              Comprehensive College Collaboration Services
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#62615d]">
              End-to-end enablement for academic institutions from faculty enablement to placement outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COLLEGE_SERVICES.map((srv) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.id}
                  className="p-6 rounded-3xl bg-white border border-black/[0.08] hover:border-black/25 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#f5f4ef] border border-black/[0.08] flex items-center justify-center text-[#4338ca] mb-4">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="font-['Archivo',sans-serif] font-bold text-lg text-[#0f0f0e]">
                      {srv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#62615d] mt-2 leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono text-[#0d9488] font-semibold">
                    <span>Campus Partnership</span>
                    <span>Ready for MoU</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Partnership Form */}
        <div id="partner-form" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-black/[0.08] p-6 sm:p-10 shadow-xl">
            <div className="text-center mb-8">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#0d9488]/10 text-[#0d9488] border border-[#0d9488]/20 uppercase">
                Institutional MoU &amp; Partnership
              </span>
              <h2 className="font-['Archivo',sans-serif] text-2xl sm:text-3xl font-extrabold uppercase text-[#0f0f0e] mt-2">
                Partner With OIAI
              </h2>
              <p className="text-xs sm:text-sm text-[#62615d] mt-1">
                Bring industry-standard AI labs, faculty workshops, and student internships to your campus.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 border border-emerald-500 flex items-center justify-center text-emerald-600 shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0f0f0e]">Partnership Request Logged!</h3>
                <p className="text-xs sm:text-sm text-[#62615d] max-w-md mx-auto">
                  Thank you, <strong className="text-[#0f0f0e]">{contactPerson}</strong> ({designation}) from <strong className="text-[#4338ca]">{institutionName}</strong>. Our Academic Dean of Partnerships will reach out at <span className="font-mono">{email}</span> within 24 hours to schedule an introductory MoU discussion.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-[#0f0f0e] text-white text-xs font-bold font-mono"
                >
                  Submit Another Proposal
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0f0f0e] mb-1">College / University Name *</label>
                    <input
                      type="text"
                      required
                      value={institutionName}
                      onChange={(e) => setInstitutionName(e.target.value)}
                      placeholder="e.g. OUTR, Silicon Institute, GIET, VSSUT"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#fbfaf7] border border-black/[0.1] text-sm focus:outline-none focus:border-[#0f0f0e]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0f0f0e] mb-1">Contact Person Name *</label>
                    <input
                      type="text"
                      required
                      value={contactPerson}
                      onChange={(e) => setContactPerson(e.target.value)}
                      placeholder="e.g. Dr. Ramesh Ch. Sahoo"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#fbfaf7] border border-black/[0.1] text-sm focus:outline-none focus:border-[#0f0f0e]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0f0f0e] mb-1">Designation *</label>
                    <select
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#fbfaf7] border border-black/[0.1] text-sm focus:outline-none focus:border-[#0f0f0e]"
                    >
                      <option value="Principal / Dean">Principal / Dean</option>
                      <option value="Head of Department (CSE/IT)">Head of Department (CSE/IT)</option>
                      <option value="Training & Placement Officer (TPO)">Training &amp; Placement Officer (TPO)</option>
                      <option value="Associate Professor / Faculty Lead">Associate Professor / Faculty Lead</option>
                      <option value="Student Council President">Student Council President</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0f0f0e] mb-1">Institutional Email *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="dean.academics@college.ac.in"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#fbfaf7] border border-black/[0.1] text-sm focus:outline-none focus:border-[#0f0f0e]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0f0f0e] mb-1">Contact Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#fbfaf7] border border-black/[0.1] text-sm focus:outline-none focus:border-[#0f0f0e]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0f0f0e] mb-1">Estimated Student Cohort *</label>
                    <select
                      value={studentCount}
                      onChange={(e) => setStudentCount(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#fbfaf7] border border-black/[0.1] text-sm focus:outline-none focus:border-[#0f0f0e]"
                    >
                      <option value="50–100 Students">50–100 Students</option>
                      <option value="100–300 Students">100–300 Students</option>
                      <option value="300–600 Students">300–600 Students</option>
                      <option value="600+ Institution-wide">600+ Institution-wide</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full h-12 rounded-xl bg-[#0f0f0e] text-white font-['Archivo',sans-serif] font-bold text-sm hover:bg-[#252525] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-white" />
                    <span>Partner With OIAI</span>
                  </button>
                  <p className="text-[11px] text-center text-[#62615d] mt-2 font-mono">
                    Official academic agreements include AI syllabus accreditation and verified certification credentials.
                  </p>
                </div>
              </form>
            )}

          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
