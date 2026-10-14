"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Briefcase, 
  Clock, 
  GraduationCap, 
  Code2, 
  Layers, 
  UserCheck, 
  Award, 
  CheckCircle2, 
  Send, 
  Search, 
  Filter, 
  ArrowRight,
  Sparkles,
  Building2,
  Terminal
} from "lucide-react";

interface InternshipCategory {
  id: string;
  name: string;
  duration: string;
  eligibility: string;
  skillsRequired: string[];
  projects: string[];
  mentor: string;
  certificate: string;
  stipend: string;
  seats: string;
}

const INTERNSHIP_CATEGORIES: InternshipCategory[] = [
  {
    id: "python",
    name: "Python",
    duration: "8–12 Weeks (Full/Part-Time)",
    eligibility: "College students, B.Tech/BCA/MCA, basic programming aptitude",
    skillsRequired: ["Python 3.12", "Data Structures", "OOP", "AsyncIO", "Git & GitHub"],
    projects: ["High-Throughput Web Scraping & ETL Engine", "Custom CLI System Monitor Tool"],
    mentor: "Principal Python Architect • Ex-TCS Innovation Labs",
    certificate: "Verified OIAI Python Engineering Internship Credential",
    stipend: "Performance-Based / Merit Sponsored",
    seats: "15 Seats per Cohort",
  },
  {
    id: "ai",
    name: "Artificial Intelligence",
    duration: "12 Weeks (Intensive)",
    eligibility: "Pre-final/final year students & graduates with coding background",
    skillsRequired: ["Search Algorithms", "Logic Programming", "NumPy", "Foundations of AI"],
    projects: ["Automated Heuristic Planning Engine", "Adversarial Game-Playing Agent"],
    mentor: "Senior AI Researcher • Ph.D. IIT Bhubaneswar",
    certificate: "OIAI Certificate of Applied AI Engineering",
    stipend: "Merit-Based Stipend Available",
    seats: "12 Seats per Cohort",
  },
  {
    id: "ml",
    name: "Machine Learning",
    duration: "12 Weeks (Lab Immersion)",
    eligibility: "Engineering, Mathematics, Statistics or CS background",
    skillsRequired: ["Scikit-Learn", "PyTorch", "Regression & Classification", "Feature Engineering"],
    projects: ["Enterprise Credit Risk Prediction Engine", "Customer Churn Predictive Pipeline"],
    mentor: "Staff ML Engineer • Ex-Amazon AWS",
    certificate: "OIAI Machine Learning Practicum Certificate",
    stipend: "₹8,000 – ₹15,000 / month based on evaluation",
    seats: "15 Seats per Cohort",
  },
  {
    id: "data-science",
    name: "Data Science",
    duration: "10–12 Weeks",
    eligibility: "B.Tech, B.Sc Statistics, MCA, BCA or analytical degree",
    skillsRequired: ["Pandas", "SQL (PostgreSQL)", "Statistical Inference", "Matplotlib/Seaborn"],
    projects: ["E-Commerce Customer Lifetime Value Modeling", "Healthcare Diagnostics Data Analysis"],
    mentor: "Lead Data Scientist • Healthcare Analytics Firm",
    certificate: "OIAI Data Science Practicum Credential",
    stipend: "Performance-Linked Stipend",
    seats: "15 Seats per Cohort",
  },
  {
    id: "genai",
    name: "Generative AI",
    duration: "12–16 Weeks (Production Focus)",
    eligibility: "Working developers & students with strong Python & API experience",
    skillsRequired: ["LangChain", "LlamaIndex", "Hugging Face", "Vector DBs (Pinecone/pgvector)", "vLLM"],
    projects: ["Enterprise Multimodal RAG with Hallucination Defense", "Fine-Tuned Specialized LLM"],
    mentor: "Principal GenAI Architect • Silicon Valley Incubator Mentor",
    certificate: "OIAI Frontier Generative AI Specialist Credential",
    stipend: "₹12,000 – ₹20,000 / month for qualified fellows",
    seats: "10 Seats per Cohort",
  },
  {
    id: "ai-agents",
    name: "AI Agents",
    duration: "12 Weeks",
    eligibility: "Engineers familiar with async microservices and LLM APIs",
    skillsRequired: ["LangGraph", "CrewAI", "Function Calling", "State Machines", "Redis Memory"],
    projects: ["Autonomous DevOps & PR Review Bot Swarm", "Multi-Agent Financial Due Diligence System"],
    mentor: "Autonomous Systems Lead • AI Startup Founder",
    certificate: "OIAI Agentic AI Engineering Certificate",
    stipend: "Sponsored by Partner AI Startups",
    seats: "10 Seats per Cohort",
  },
  {
    id: "data-analytics",
    name: "Data Analytics",
    duration: "8–10 Weeks",
    eligibility: "Graduates, business students & aspiring data professionals",
    skillsRequired: ["Advanced SQL", "Power BI / Tableau", "Excel Modeling", "Python for Analytics"],
    projects: ["Executive Retail Sales Dashboard with Automated Refresh", "SaaS KPI Cohort Analysis"],
    mentor: "Analytics Director • Global Fintech",
    certificate: "OIAI Business Intelligence Practicum Certificate",
    stipend: "Merit Assistance Provided",
    seats: "18 Seats per Cohort",
  },
  {
    id: "ai-automation",
    name: "AI Automation",
    duration: "8–12 Weeks",
    eligibility: "Anyone with logical reasoning & interest in business workflows",
    skillsRequired: ["n8n", "Zapier AI", "Webhook APIs", "Prompt Templating", "Process Mining"],
    projects: ["End-to-End Invoice Processing & ERP Sync Bot", "Automated Lead Qualification Agent"],
    mentor: "Automation Consultant • Enterprise RPA Practice",
    certificate: "OIAI AI Workflow Automation Certificate",
    stipend: "Client-Project Linked Incentives",
    seats: "15 Seats per Cohort",
  },
  {
    id: "computer-vision",
    name: "Computer Vision",
    duration: "12 Weeks",
    eligibility: "CS / Electronics / Math background with PyTorch foundations",
    skillsRequired: ["OpenCV", "YOLOv10", "Vision Transformers (ViT)", "TensorRT", "Edge Inference"],
    projects: ["Real-time Industrial Defect Segmentation on Jetson Edge", "Video Surveillance Threat Detection"],
    mentor: "Senior Computer Vision Engineer • Robotics Startup",
    certificate: "OIAI Visual AI Systems Internship Certificate",
    stipend: "₹10,000 – ₹18,000 / month based on milestone defense",
    seats: "10 Seats per Cohort",
  },
  {
    id: "nlp",
    name: "NLP",
    duration: "12 Weeks",
    eligibility: "Engineers interested in linguistics, semantics & text modeling",
    skillsRequired: ["spaCy", "Transformers", "BERT/RoBERTa", "Tokenization", "Token Embeddings"],
    projects: ["Multi-Lingual Sentiment & Intent Classifier", "Clinical Medical Record NER Extractor"],
    mentor: "NLP Research Fellow • Computational Linguistics Lab",
    certificate: "OIAI Natural Language Processing Specialist Credential",
    stipend: "Merit-Based Fellowship",
    seats: "12 Seats per Cohort",
  },
];

const INTERNSHIP_PROCESS = [
  { step: "01", title: "Online Application", desc: "Submit resume, GitHub profile and choose up to 2 domain categories." },
  { step: "02", title: "Aptitude & Coding Diagnostic", desc: "Short 45-minute technical workbench assessment based on chosen category." },
  { step: "03", title: "Mentor Interaction", desc: "15-minute 1:1 conversation with industry mentor to align project expectations." },
  { step: "04", title: "Offer & Onboarding", desc: "Receive official OIAI Internship Offer Letter with assigned repository and compute quota." },
  { step: "05", title: "Live Sprint Delivery", desc: "Work in 2-week agile sprints, attend standups, and merge code reviews to production." },
  { step: "06", title: "Capstone Defense & Certificate", desc: "Present final demonstration to jury, receive experience letter and verifiable certificate." },
];

export default function InternshipsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("genai");
  const [searchFilter, setSearchFilter] = useState<string>("");
  
  // Application Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [github, setGithub] = useState("");
  const [appliedCategory, setAppliedCategory] = useState("Generative AI");
  const [submitted, setSubmitted] = useState(false);

  const activeCategory = INTERNSHIP_CATEGORIES.find((c) => c.id === selectedCategory) || INTERNSHIP_CATEGORIES[0];

  const filteredCategories = INTERNSHIP_CATEGORIES.filter((c) => 
    c.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
    c.skillsRequired.some(s => s.toLowerCase().includes(searchFilter.toLowerCase()))
  );

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f5f4ef] text-[#0f0f0e] flex flex-col antialiased">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-36 pb-20">
        
        {/* Header Hero */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.05] border border-black/[0.08] text-xs font-mono font-semibold uppercase tracking-wider text-[#0f0f0e] mb-4">
            <Briefcase className="w-3.5 h-3.5 text-[#ef5d44]" />
            <span>OIAI Official Internship Portal • Industry Immersions</span>
          </div>

          <h1 className="font-['Archivo',sans-serif] text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0f0f0e]">
            AI &amp; Data Engineering Internships
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#62615d] max-w-3xl mx-auto leading-relaxed">
            Gain verified commercial experience across 10 specialized AI disciplines. Work on live codebases, receive 1:1 expert mentorship, compute allowances, and official internship certificates.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="#apply-form"
              className="px-7 py-3 rounded-xl bg-[#0f0f0e] text-white font-['Archivo',sans-serif] font-bold text-sm hover:bg-[#252525] transition-colors shadow-md flex items-center gap-2"
            >
              <span>Apply for Internship</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#categories"
              className="px-7 py-3 rounded-xl bg-white border border-black/[0.1] text-[#0f0f0e] font-['Archivo',sans-serif] font-bold text-sm hover:bg-[#fbfaf7] transition-colors"
            >
              <span>Browse 10 Tracks</span>
            </a>
          </div>
        </div>

        {/* 10 Categories Filter Strip */}
        <div id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
            <h2 className="font-['Archivo',sans-serif] text-2xl font-bold uppercase text-[#0f0f0e]">
              10 Specialized Internship Disciplines
            </h2>
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-[#62615d] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filter by skill or category..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border border-black/[0.1] text-xs font-mono focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Category Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-10">
            {filteredCategories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#0f0f0e] text-white shadow-lg border-[#0f0f0e] -translate-y-0.5"
                      : "bg-white text-[#0f0f0e] border-black/[0.08] hover:border-black/25 hover:shadow-xs"
                  }`}
                >
                  <span className={`text-[11px] font-mono font-semibold ${isSelected ? "text-teal-300" : "text-[#4338ca]"}`}>
                    Track #{cat.id.toUpperCase()}
                  </span>
                  <span className="font-['Archivo',sans-serif] font-bold text-sm mt-1 truncate">
                    {cat.name}
                  </span>
                  <span className="text-[10px] font-mono text-[#62615d] mt-2 block truncate">
                    {cat.duration.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Category Deep Dive Card */}
          <div className="bg-white rounded-3xl border border-black/[0.08] p-6 sm:p-10 shadow-lg">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-black/[0.08]">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#4338ca]/10 text-[#4338ca] border border-[#4338ca]/20">
                  Selected Internship Program
                </span>
                <h3 className="font-['Archivo',sans-serif] text-3xl font-extrabold text-[#0f0f0e] mt-2">
                  {activeCategory.name} Internship
                </h3>
                <p className="text-sm font-mono text-emerald-700 mt-1">
                  {activeCategory.stipend} • {activeCategory.seats}
                </p>
              </div>

              <a
                href="#apply-form"
                onClick={() => setAppliedCategory(activeCategory.name)}
                className="px-6 py-3 rounded-xl bg-[#0f0f0e] text-white font-['Archivo',sans-serif] text-sm font-bold hover:bg-[#252525] transition-colors self-start lg:self-auto shrink-0 shadow-md"
              >
                Apply for {activeCategory.name}
              </a>
            </div>

            {/* Specifications Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6 border-b border-black/[0.08]">
              <div>
                <p className="text-xs font-mono font-bold text-[#62615d] uppercase tracking-wider">Duration</p>
                <p className="text-sm font-bold text-[#0f0f0e] mt-1 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#4338ca]" />
                  <span>{activeCategory.duration}</span>
                </p>
              </div>

              <div>
                <p className="text-xs font-mono font-bold text-[#62615d] uppercase tracking-wider">Eligibility</p>
                <p className="text-sm font-bold text-[#0f0f0e] mt-1 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#4338ca]" />
                  <span>{activeCategory.eligibility}</span>
                </p>
              </div>

              <div>
                <p className="text-xs font-mono font-bold text-[#62615d] uppercase tracking-wider">Assigned Mentor</p>
                <p className="text-sm font-bold text-[#0f0f0e] mt-1 flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-[#0d9488]" />
                  <span>{activeCategory.mentor}</span>
                </p>
              </div>

              <div>
                <p className="text-xs font-mono font-bold text-[#62615d] uppercase tracking-wider">Certificate Awarded</p>
                <p className="text-sm font-bold text-[#0f0f0e] mt-1 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#ef5d44]" />
                  <span className="truncate">{activeCategory.certificate}</span>
                </p>
              </div>
            </div>

            {/* Required Skills & Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              <div>
                <h4 className="text-sm font-mono font-bold text-[#0f0f0e] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#4338ca]" />
                  <span>Prerequisite Skills &amp; Stack</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeCategory.skillsRequired.map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-xl bg-[#f5f4ef] border border-black/[0.06] text-xs font-mono font-semibold text-[#0f0f0e]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-mono font-bold text-[#0f0f0e] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#0d9488]" />
                  <span>Representative Production Capstones</span>
                </h4>
                <ul className="space-y-2">
                  {activeCategory.projects.map((proj) => (
                    <li key={proj} className="flex items-start gap-2 text-xs sm:text-sm text-[#333331]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{proj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* 6-Step Internship Process Timeline */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-['Archivo',sans-serif] text-3xl font-extrabold uppercase text-[#0f0f0e]">
              Internship Selection &amp; Delivery Process
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#62615d]">
              Transparent 6-stage lifecycle ensuring quality code delivery and verifiable student outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {INTERNSHIP_PROCESS.map((p) => (
              <div key={p.step} className="p-6 rounded-2xl bg-white border border-black/[0.08] shadow-xs">
                <span className="w-8 h-8 rounded-lg bg-black/[0.05] flex items-center justify-center font-mono font-bold text-xs text-[#0f0f0e] mb-3">
                  {p.step}
                </span>
                <h3 className="font-['Archivo',sans-serif] font-bold text-base text-[#0f0f0e]">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#62615d] mt-1.5 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div id="apply-form" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-black/[0.08] p-6 sm:p-10 shadow-xl">
            <div className="text-center mb-8">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#ef5d44]/10 text-[#ef5d44] border border-[#ef5d44]/20 uppercase">
                Official Application Form
              </span>
              <h2 className="font-['Archivo',sans-serif] text-2xl sm:text-3xl font-extrabold uppercase text-[#0f0f0e] mt-2">
                Apply for OIAI Internship
              </h2>
              <p className="text-xs sm:text-sm text-[#62615d] mt-1">
                Seats are allocated on competitive merit and technical evaluation.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 border border-emerald-500 flex items-center justify-center text-emerald-600 shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0f0f0e]">Internship Application Received!</h3>
                <p className="text-xs sm:text-sm text-[#62615d] max-w-md mx-auto">
                  Thank you, <strong className="text-[#0f0f0e]">{fullName}</strong>. We have received your application for the <strong className="text-[#4338ca]">{appliedCategory} Internship</strong>. Our technical coordination desk will email your screening diagnostic workbench to <span className="font-mono">{email}</span> within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-[#0f0f0e] text-white text-xs font-bold font-mono"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0f0f0e] mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Subham Mohanty"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#fbfaf7] border border-black/[0.1] text-sm focus:outline-none focus:border-[#0f0f0e]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0f0f0e] mb-1">Mobile / WhatsApp *</label>
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
                    <label className="block text-xs font-bold text-[#0f0f0e] mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="subham@college.edu"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#fbfaf7] border border-black/[0.1] text-sm focus:outline-none focus:border-[#0f0f0e]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0f0f0e] mb-1">College / Institution *</label>
                    <input
                      type="text"
                      required
                      value={college}
                      onChange={(e) => setCollege(e.target.value)}
                      placeholder="e.g. OUTR, KIIT, SOA, NIT Rourkela"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#fbfaf7] border border-black/[0.1] text-sm focus:outline-none focus:border-[#0f0f0e]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0f0f0e] mb-1">Target Internship Category *</label>
                    <select
                      value={appliedCategory}
                      onChange={(e) => setAppliedCategory(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#fbfaf7] border border-black/[0.1] text-sm focus:outline-none focus:border-[#0f0f0e]"
                    >
                      {INTERNSHIP_CATEGORIES.map((c) => (
                        <option key={c.id} value={c.name}>{c.name} Internship ({c.duration.split(" ")[0]})</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0f0f0e] mb-1">GitHub / Portfolio URL</label>
                    <input
                      type="url"
                      value={github}
                      onChange={(e) => setGithub(e.target.value)}
                      placeholder="https://github.com/yourhandle"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#fbfaf7] border border-black/[0.1] text-sm focus:outline-none focus:border-[#0f0f0e]"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full h-12 rounded-xl bg-[#0f0f0e] text-white font-['Archivo',sans-serif] font-bold text-sm hover:bg-[#252525] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-white" />
                    <span>Apply for Internship</span>
                  </button>
                  <p className="text-[11px] text-center text-[#62615d] mt-2 font-mono">
                    Zero application fees. Shortlisted candidates receive technical workbench links via email.
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
