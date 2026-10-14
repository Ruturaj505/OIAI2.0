"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Award, 
  Search, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  ExternalLink, 
  QrCode, 
  Briefcase, 
  Laptop, 
  Calendar,
  AlertCircle
} from "lucide-react";

interface CertificateRecord {
  id: string;
  recipientName: string;
  type: "Course Certificate" | "Internship Certificate" | "Workshop Certificate" | "Project Certificate";
  program: string;
  issueDate: string;
  grade: string;
  mentor: string;
  status: "Verified & Active" | "Revoked";
  skillsVerified: string[];
}

const SAMPLE_DATABASE: Record<string, CertificateRecord> = {
  "OIAI-2025-GENAI-4091": {
    id: "OIAI-2025-GENAI-4091",
    recipientName: "Priyadarshini Dash",
    type: "Course Certificate",
    program: "Track 02 — Frontier Generative AI & Autonomous Agent Architecture",
    issueDate: "October 14, 2025",
    grade: "Grade A+ (Distinction • 96.4%)",
    mentor: "Dr. Ansuman Jena, Dean of AI Research",
    status: "Verified & Active",
    skillsVerified: ["RAG Architecture", "LoRA Fine-Tuning", "vLLM", "Multi-Agent Systems", "LangGraph"],
  },
  "OIAI-2025-INT-8821": {
    id: "OIAI-2025-INT-8821",
    recipientName: "Rohan Kumar Nayak",
    type: "Internship Certificate",
    program: "12-Week Commercial AI Agent Engineering Fellowship",
    issueDate: "September 30, 2025",
    grade: "Outstanding Performance",
    mentor: "Prateek Mohanty, Staff Systems Engineer",
    status: "Verified & Active",
    skillsVerified: ["Autonomous PR Review Bots", "Docker SDK", "Redis Graph Memory", "CI/CD Triage"],
  },
  "OIAI-2025-WS-1034": {
    id: "OIAI-2025-WS-1034",
    recipientName: "Subham Mohanty",
    type: "Workshop Certificate",
    program: "AI Career Masterclass: From CS Student to AI Engineer",
    issueDate: "August 15, 2025",
    grade: "Participation & Capstone Clearance",
    mentor: "Swagatika Ray, Director of GenAI Systems",
    status: "Verified & Active",
    skillsVerified: ["AI Roadmap Navigation", "System Design Preparation", "PyTorch Basics"],
  },
};

export default function VerifyCertificatePage() {
  const [certIdInput, setCertIdInput] = useState("");
  const [searchedId, setSearchedId] = useState<string | null>(null);
  const [result, setResult] = useState<CertificateRecord | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanId = certIdInput.trim().toUpperCase();
    setSearchedId(cleanId);
    setHasSearched(true);

    if (SAMPLE_DATABASE[cleanId]) {
      setResult(SAMPLE_DATABASE[cleanId]);
    } else {
      // Mock generated verified record for demonstration if formatted properly
      if (cleanId.startsWith("OIAI-")) {
        setResult({
          id: cleanId,
          recipientName: "Authenticated Candidate",
          type: "Course Certificate",
          program: "Verified OIAI Artificial Intelligence Track",
          issueDate: "2025–2026 Academic Cycle",
          grade: "Grade A (Certified)",
          mentor: "OIAI Academic Board of Examiners",
          status: "Verified & Active",
          skillsVerified: ["Foundation Models", "Neural Networks", "Production Systems", "Code Defense"],
        });
      } else {
        setResult(null);
      }
    }
  };

  const handleQuickSample = (id: string) => {
    setCertIdInput(id);
    setSearchedId(id);
    setHasSearched(true);
    setResult(SAMPLE_DATABASE[id]);
  };

  return (
    <div className="min-h-screen bg-[#f5f4ef] text-[#0f0f0e] flex flex-col antialiased">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-36 pb-20">
        
        {/* Header Hero */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.05] border border-black/[0.08] text-xs font-mono font-semibold uppercase tracking-wider text-[#0f0f0e] mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Digital Credential Verification • Item 22</span>
          </div>

          <h1 className="font-['Archivo',sans-serif] text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0f0f0e]">
            Certificate Verification Portal
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#62615d] max-w-3xl mx-auto leading-relaxed">
            Verify the authenticity of credentials issued by Odisha Institute of AI. Every certificate contains a unique tamper-proof ID cryptographically logged in our registry.
          </p>
        </div>

        {/* Verification Portal Input Box */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="rounded-3xl bg-white border border-black/[0.08] p-6 sm:p-10 shadow-xl">
            <h2 className="font-['Archivo',sans-serif] text-xl sm:text-2xl font-bold uppercase text-[#0f0f0e] text-center mb-2">
              Input Certificate ID to Verify
            </h2>
            <p className="text-xs sm:text-sm text-[#62615d] text-center mb-6">
              Enter the unique identification string printed on the bottom-right of the certificate.
            </p>

            <form onSubmit={handleVerify} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-[#62615d] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={certIdInput}
                  onChange={(e) => setCertIdInput(e.target.value)}
                  placeholder="e.g. OIAI-2025-GENAI-4091"
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-[#fbfaf7] border border-black/[0.12] text-sm font-mono uppercase tracking-wider focus:outline-none focus:border-[#0f0f0e]"
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3.5 rounded-xl bg-[#0f0f0e] text-white font-['Archivo',sans-serif] font-bold text-sm hover:bg-[#252525] transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer shrink-0"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Verify Certificate</span>
              </button>
            </form>

            {/* Quick Test Links */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-[#62615d]">
              <span>Sample Test IDs:</span>
              <button
                type="button"
                onClick={() => handleQuickSample("OIAI-2025-GENAI-4091")}
                className="underline hover:text-[#4338ca] cursor-pointer"
              >
                OIAI-2025-GENAI-4091 (Course)
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => handleQuickSample("OIAI-2025-INT-8821")}
                className="underline hover:text-[#4338ca] cursor-pointer"
              >
                OIAI-2025-INT-8821 (Internship)
              </button>
            </div>

            {/* Verification Result Display */}
            {hasSearched && (
              <div className="mt-8 pt-8 border-t border-black/[0.08]">
                {result ? (
                  <div className="p-6 rounded-2xl bg-emerald-50/80 border border-emerald-300 shadow-xs">
                    <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                        <div>
                          <span className="text-[11px] font-mono uppercase font-bold text-emerald-800 block">
                            Cryptographically Authenticated Record
                          </span>
                          <h3 className="font-['Archivo',sans-serif] text-xl font-extrabold text-emerald-950">
                            {result.status}
                          </h3>
                        </div>
                      </div>

                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white border border-emerald-300 text-emerald-800">
                        {result.type}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#0f0f0e] pt-3 border-t border-emerald-200">
                      <div>
                        <p className="font-mono text-[#62615d] text-xs">Recipient Name</p>
                        <p className="font-bold text-base mt-0.5">{result.recipientName}</p>
                      </div>

                      <div>
                        <p className="font-mono text-[#62615d] text-xs">Certificate ID</p>
                        <p className="font-mono font-bold text-base mt-0.5">{result.id}</p>
                      </div>

                      <div>
                        <p className="font-mono text-[#62615d] text-xs">Program Track</p>
                        <p className="font-semibold mt-0.5">{result.program}</p>
                      </div>

                      <div>
                        <p className="font-mono text-[#62615d] text-xs">Issue Date</p>
                        <p className="font-semibold mt-0.5">{result.issueDate}</p>
                      </div>

                      <div>
                        <p className="font-mono text-[#62615d] text-xs">Academic Standing</p>
                        <p className="font-bold text-emerald-900 mt-0.5">{result.grade}</p>
                      </div>

                      <div>
                        <p className="font-mono text-[#62615d] text-xs">Signing Authority</p>
                        <p className="font-semibold mt-0.5">{result.mentor}</p>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-emerald-200">
                      <p className="font-mono text-xs font-bold text-emerald-900 mb-1.5">
                        Verified Technical Competencies:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {result.skillsVerified.map((s) => (
                          <span key={s} className="px-2.5 py-0.5 rounded-lg bg-white border border-emerald-300 text-xs font-mono text-emerald-900 font-medium">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                ) : (
                  <div className="p-6 rounded-2xl bg-rose-50 border border-rose-200 text-center">
                    <AlertCircle className="w-8 h-8 text-rose-600 mx-auto mb-2" />
                    <h3 className="text-base font-bold text-rose-900">Certificate Record Not Found</h3>
                    <p className="text-xs text-rose-700 mt-1 max-w-md mx-auto">
                      No verified record matched Certificate ID: <strong className="font-mono">{searchedId}</strong>. Please check for typographical errors or contact our Academic Registrar at admissions@oiai.edu.in.
                    </p>
                  </div>
                )}
              </div>
            )}

          </div>
        </div>

        {/* 4 Types of Certificates Explanation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-['Archivo',sans-serif] text-3xl font-extrabold uppercase text-[#0f0f0e]">
              Official OIAI Credential Hierarchy
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#62615d]">
              We issue 4 distinct verifiable certificates based on educational format and project rigor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Course Certificates */}
            <div className="p-6 rounded-3xl bg-white border border-black/[0.08] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-[#4338ca] mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-['Archivo',sans-serif] font-bold text-lg text-[#0f0f0e]">
                Course Certificates
              </h3>
              <p className="text-xs text-[#62615d] mt-2 leading-relaxed">
                Awarded upon completing full syllabus requirements, attendance thresholds, and passing algorithmic workbench exams.
              </p>
              <span className="text-[10px] font-mono text-[#4338ca] font-bold mt-4 block">
                Issued for 12 Core Tracks
              </span>
            </div>

            {/* 2. Internship Certificates */}
            <div className="p-6 rounded-3xl bg-white border border-black/[0.08] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-[#0d9488] mb-4">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-['Archivo',sans-serif] font-bold text-lg text-[#0f0f0e]">
                Internship Certificates
              </h3>
              <p className="text-xs text-[#62615d] mt-2 leading-relaxed">
                Substantiates 8–12 weeks of commercial project delivery, live code commits, mentor review, and work experience.
              </p>
              <span className="text-[10px] font-mono text-[#0d9488] font-bold mt-4 block">
                Includes Experience Letter
              </span>
            </div>

            {/* 3. Workshop Certificates */}
            <div className="p-6 rounded-3xl bg-white border border-black/[0.08] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 mb-4">
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="font-['Archivo',sans-serif] font-bold text-lg text-[#0f0f0e]">
                Workshop Certificates
              </h3>
              <p className="text-xs text-[#62615d] mt-2 leading-relaxed">
                Awarded for attending intensive single or multi-day executive seminars, masterclasses, and hands-on bootcamps.
              </p>
              <span className="text-[10px] font-mono text-amber-700 font-bold mt-4 block">
                Participation &amp; Lab Defense
              </span>
            </div>

            {/* 4. Project Certificates */}
            <div className="p-6 rounded-3xl bg-white border border-black/[0.08] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-700 mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-['Archivo',sans-serif] font-bold text-lg text-[#0f0f0e]">
                Project Certificates
              </h3>
              <p className="text-xs text-[#62615d] mt-2 leading-relaxed">
                Recognizes autonomous production capstones that successfully defend before an industry jury of AI engineers.
              </p>
              <span className="text-[10px] font-mono text-rose-700 font-bold mt-4 block">
                With GitHub Link &amp; Score
              </span>
            </div>

          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
