"use client";

import React, { useState } from "react";
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
  BarChart3,
  Bot,
  Zap,
  GraduationCap
} from "lucide-react";

interface CorporateService {
  id: string;
  title: string;
  tagline: string;
  targetAudience: string;
  duration: string;
  outcomes: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const CORPORATE_SERVICES: CorporateService[] = [
  {
    id: "awareness",
    title: "AI Awareness Workshops",
    tagline: "Demystifying AI, foundational concepts, and corporate disruption landscape.",
    targetAudience: "Executive leadership & all-hands corporate teams",
    duration: "1–2 Day Immersive",
    outcomes: ["Understand frontier AI capabilities", "Identify department-level ROI opportunities", "Executive literacy"],
    icon: Sparkles,
  },
  {
    id: "genai",
    title: "Generative AI Training",
    tagline: "Hands-on foundation models, prompt architecture, and enterprise LLM tooling.",
    targetAudience: "Engineers, analysts & product squads",
    duration: "3–6 Weeks Cohort",
    outcomes: ["Internal RAG knowledge assistants", "Code generation acceleration", "Model fine-tuning principles"],
    icon: Bot,
  },
  {
    id: "productivity",
    title: "AI Productivity Training",
    tagline: "10x individual and team operational velocity with modern AI Copilots.",
    targetAudience: "Operations, knowledge workers & managers",
    duration: "2-Week Sprint",
    outcomes: ["Copilot workflow mastery", "Automated synthesis & drafting", "Task cycle time reduction by 40%"],
    icon: Zap,
  },
  {
    id: "automation",
    title: "AI Automation",
    tagline: "Autonomous workflows, multi-agent process loops, and system connectors.",
    targetAudience: "DevOps, IT & business process engineers",
    duration: "4-Week Practicum",
    outcomes: ["Automated invoice & document pipelines", "CRM/ERP syncing with AI agents", "Self-healing scripts"],
    icon: Cpu,
  },
  {
    id: "managers",
    title: "AI for Managers",
    tagline: "Strategic decision making, AI project scoping, and vendor evaluation.",
    targetAudience: "Engineering managers, VP Products & Directors",
    duration: "2-Week Executive Track",
    outcomes: ["AI project feasibility frameworks", "GPU compute budgeting & unit economics", "Squad structuring"],
    icon: Users,
  },
  {
    id: "marketing",
    title: "AI for Marketing",
    tagline: "Multimodal content generation, predictive audience modeling, and campaigns.",
    targetAudience: "Marketing heads, copywriters & growth squads",
    duration: "2-Week Intensive",
    outcomes: ["Dynamic ad copy generation", "Visual asset rendering pipelines", "Predictive churn & segment modeling"],
    icon: TrendingUp,
  },
  {
    id: "hr",
    title: "AI for HR",
    tagline: "Intelligent talent screening, skills mapping, and internal knowledge search.",
    targetAudience: "People ops, talent acquisition & HR leaders",
    duration: "1–2 Week Program",
    outcomes: ["Resume intelligence pipelines", "Policy FAQ conversational bots", "Employee sentiment analytics"],
    icon: Briefcase,
  },
  {
    id: "finance",
    title: "AI for Finance",
    tagline: "Automated financial reconciliation, fraud pattern spotting, and forecasting.",
    targetAudience: "CFOs, financial analysts & controllers",
    duration: "3-Week Program",
    outcomes: ["Balance sheet anomaly detection", "Automated variance reports", "Forecasting with statistical ML"],
    icon: BarChart3,
  },
  {
    id: "education",
    title: "AI for Education",
    tagline: "Personalized learning pathways, automated assessment, and curriculum drafting.",
    targetAudience: "EdTech companies, university professors & training depts",
    duration: "2-Week Program",
    outcomes: ["Adaptive learning loops", "Intelligent rubrics grading", "Curriculum alignment with industry"],
    icon: GraduationCap,
  },
  {
    id: "responsible-ai",
    title: "Responsible AI",
    tagline: "Security, compliance, hallucination guardrails, and governance protocols.",
    targetAudience: "Chief Risk Officers, compliance teams & architects",
    duration: "2-Week Audit Program",
    outcomes: ["Enterprise AI safety guardrails", "Data leakage defense protocols", "EU/India AI compliance frameworks"],
    icon: ShieldCheck,
  },
];

export default function CorporateTrainingPage() {
  const [selectedService, setSelectedService] = useState<string>("genai");
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [workPhone, setWorkPhone] = useState("");
  const [teamSize, setTeamSize] = useState("10–25 Engineers");
  const [deliveryMode, setDeliveryMode] = useState("On-Premises Workshop");
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
            <Building2 className="w-3.5 h-3.5 text-[#ef5d44]" />
            <span>OIAI Enterprise Academy • B2B AI Upskilling</span>
          </div>

          <h1 className="font-['Archivo',sans-serif] text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0f0f0e]">
            Corporate AI Training &amp; Workforce Transformation
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#62615d] max-w-3xl mx-auto leading-relaxed">
            Upskill your technical and operational workforce with bespoke AI training designed around real enterprise codebases, data pipelines, and security standards.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="#request-form"
              className="px-7 py-3 rounded-xl bg-[#0f0f0e] text-white font-['Archivo',sans-serif] font-bold text-sm hover:bg-[#252525] transition-colors shadow-md flex items-center gap-2"
            >
              <span>Request Corporate Training</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 10 Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-['Archivo',sans-serif] text-3xl font-extrabold uppercase text-[#0f0f0e]">
              10 Specialized Corporate AI Programs
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#62615d]">
              Custom-tailored for engineering squads, business leaders, marketing, HR, and risk teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORPORATE_SERVICES.map((srv) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.id}
                  className="p-6 rounded-3xl bg-white border border-black/[0.08] hover:border-black/25 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#f5f4ef] border border-black/[0.08] flex items-center justify-center text-[#4338ca]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/[0.04] text-[#62615d]">
                        {srv.duration}
                      </span>
                    </div>

                    <h3 className="font-['Archivo',sans-serif] font-bold text-lg text-[#0f0f0e]">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-[#62615d] mt-1 leading-relaxed">
                      {srv.tagline}
                    </p>

                    <div className="mt-4 pt-3 border-t border-black/[0.06]">
                      <p className="text-[11px] font-mono text-[#4338ca] font-semibold mb-2">
                        Target Audience: {srv.targetAudience}
                      </p>
                      <ul className="space-y-1.5">
                        {srv.outcomes.map((out, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-xs text-[#333331]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{out}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a
                    href="#request-form"
                    onClick={() => setSelectedService(srv.id)}
                    className="mt-6 w-full py-2.5 rounded-xl bg-[#f5f4ef] hover:bg-[#0f0f0e] text-[#0f0f0e] hover:text-white font-['Archivo',sans-serif] text-xs font-bold text-center transition-colors"
                  >
                    Request Custom Syllabus
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Request Form */}
        <div id="request-form" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-black/[0.08] p-6 sm:p-10 shadow-xl">
            <div className="text-center mb-8">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#4338ca]/10 text-[#4338ca] border border-[#4338ca]/20 uppercase">
                B2B Training Consultation
              </span>
              <h2 className="font-['Archivo',sans-serif] text-2xl sm:text-3xl font-extrabold uppercase text-[#0f0f0e] mt-2">
                Request Corporate Training
              </h2>
              <p className="text-xs sm:text-sm text-[#62615d] mt-1">
                Receive customized course outlines, corporate group pricing, and pilot workshop schedules.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 border border-emerald-500 flex items-center justify-center text-emerald-600 shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0f0f0e]">Corporate Request Received!</h3>
                <p className="text-xs sm:text-sm text-[#62615d] max-w-md mx-auto">
                  Thank you, <strong className="text-[#0f0f0e]">{contactName}</strong> from <strong className="text-[#4338ca]">{companyName}</strong>. Our Enterprise Solutions Director will reach out at <span className="font-mono">{workEmail}</span> with customized workshop proposals.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-[#0f0f0e] text-white text-xs font-bold font-mono"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0f0f0e] mb-1">Company / Organization *</label>
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. Infosys, TCS, Tech Startup"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#fbfaf7] border border-black/[0.1] text-sm focus:outline-none focus:border-[#0f0f0e]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0f0f0e] mb-1">Contact Person Name *</label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Rajesh Mohapatra"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#fbfaf7] border border-black/[0.1] text-sm focus:outline-none focus:border-[#0f0f0e]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0f0f0e] mb-1">Work Email Address *</label>
                    <input
                      type="email"
                      required
                      value={workEmail}
                      onChange={(e) => setWorkEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#fbfaf7] border border-black/[0.1] text-sm focus:outline-none focus:border-[#0f0f0e]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0f0f0e] mb-1">Work Phone / Mobile *</label>
                    <input
                      type="tel"
                      required
                      value={workPhone}
                      onChange={(e) => setWorkPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#fbfaf7] border border-black/[0.1] text-sm focus:outline-none focus:border-[#0f0f0e]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0f0f0e] mb-1">Training Track *</label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#fbfaf7] border border-black/[0.1] text-sm focus:outline-none focus:border-[#0f0f0e]"
                    >
                      {CORPORATE_SERVICES.map((s) => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0f0f0e] mb-1">Cohort Size *</label>
                    <select
                      value={teamSize}
                      onChange={(e) => setTeamSize(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#fbfaf7] border border-black/[0.1] text-sm focus:outline-none focus:border-[#0f0f0e]"
                    >
                      <option value="5–10 Engineers">5–10 Engineers</option>
                      <option value="10–25 Engineers">10–25 Engineers</option>
                      <option value="25–50 Engineers">25–50 Engineers</option>
                      <option value="50+ Enterprise Scale">50+ Enterprise Scale</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0f0f0e] mb-1">Delivery Mode *</label>
                    <select
                      value={deliveryMode}
                      onChange={(e) => setDeliveryMode(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#fbfaf7] border border-black/[0.1] text-sm focus:outline-none focus:border-[#0f0f0e]"
                    >
                      <option value="On-Premises Workshop">On-Premises Workshop</option>
                      <option value="OIAI Tech Hub Bhubaneswar">OIAI Campus Bhubaneswar</option>
                      <option value="100% Virtual Cohort">100% Virtual Cohort</option>
                      <option value="Blended Hybrid Format">Blended Hybrid Format</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full h-12 rounded-xl bg-[#0f0f0e] text-white font-['Archivo',sans-serif] font-bold text-sm hover:bg-[#252525] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-white" />
                    <span>Request Corporate Training</span>
                  </button>
                  <p className="text-[11px] text-center text-[#62615d] mt-2 font-mono">
                    NDA protected. We design training to match your company's proprietary toolchains.
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
