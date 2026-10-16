import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareerRoadmapFlow from "@/components/CareerRoadmapFlow";
import CareerRoadmapVisualizer from "@/components/CareerRoadmapVisualizer";
import {
  Compass,
  ArrowDown,
  CheckCircle2,
  BookOpen,
  Code2,
  Database,
  BrainCircuit,
  Cpu,
  Bot,
  Layers,
  Briefcase,
  FolderGit2,
  Award,
  Trophy,
  ArrowRight,
  Sparkles,
  TrendingUp,
  HelpCircle,
  FileText,
  Calendar,
  Check
} from "lucide-react";

export const metadata: Metadata = {
  title: "Your Roadmap to an AI Career | Step-by-Step AI Engineering Path (2026)",
  description:
    "The definitive step-by-step roadmap to become an AI Engineer: Programming → Python → Data & SQL → Machine Learning → Deep Learning → Generative AI → AI Agents → Projects → Internship → Portfolio → Interview → AI Career.",
  keywords: [
    "Your Roadmap to an AI Career",
    "AI Career Roadmap",
    "How to become an AI Engineer",
    "AI Learning Path 2026",
    "Python to AI Roadmap",
    "Generative AI Roadmap",
    "AI Agents Learning Path",
    "AI Engineer Salary in India",
    "OIAI AI Roadmap",
    "Odisha Institute of Artificial Intelligence"
  ],
  alternates: {
    canonical: "https://oiai.in/career-roadmap"
  },
  openGraph: {
    title: "Your Roadmap to an AI Career | Step-by-Step AI Engineering Path",
    description:
      "A complete 12-step engineering roadmap to transition into high-paying AI, Machine Learning, and Generative AI roles with live internships and real projects.",
    url: "https://oiai.in/career-roadmap",
    siteName: "Odisha Institute of Artificial Intelligence (OIAI)",
    type: "article",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Roadmap to an AI Career (2026 Edition)",
    description:
      "Master Programming, Python, SQL, ML, Deep Learning, GenAI, and AI Agents to land high-impact AI careers."
  }
};

// JSON-LD Structured Data Schema for Search Engines & Answer Engines (AEO)
const JSON_LD_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      "name": "Your Roadmap to an AI Career: 12-Step Progression",
      "description":
        "A structured, sequential engineering curriculum to transition from basic programming to a high-earning artificial intelligence engineering career.",
      "totalTime": "P6M",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": "34999"
      },
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Programming Fundamentals",
          "text": "Master algorithmic problem-solving, Big-O complexity, data structures, and Git version control."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Python for AI",
          "text": "Learn vectorized computing with NumPy, OOP architecture, async I/O, and modular packaging."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Data & SQL",
          "text": "Architect relational schemas, write analytical SQL, and store high-dimensional embeddings with pgvector."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Machine Learning",
          "text": "Implement classical algorithms (regression, random forests, XGBoost) and loss optimization in Scikit-Learn."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Deep Learning",
          "text": "Code neural networks from scratch in PyTorch, calculate backpropagation, and build CNN and transformer foundations."
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Generative AI",
          "text": "Master Large Language Models, self-attention mechanics, LoRA/QLoRA fine-tuning, and enterprise RAG pipelines."
        },
        {
          "@type": "HowToStep",
          "position": 7,
          "name": "AI Agents",
          "text": "Build autonomous multi-agent networks with LangGraph, CrewAI, cyclic state graphs, and external API tool calling."
        },
        {
          "@type": "HowToStep",
          "position": 8,
          "name": "Production Projects",
          "text": "Ship 3 commercial-grade AI applications containerized with Docker, FastAPI, and Next.js AI SDK."
        },
        {
          "@type": "HowToStep",
          "position": 9,
          "name": "Live Industry Internship",
          "text": "Complete a 2-month verified commercial internship with real customer SLAs and daily engineering standups."
        },
        {
          "@type": "HowToStep",
          "position": 10,
          "name": "Portfolio Development",
          "text": "Build a recruiter-friendly digital presence with live public demos, architecture diagrams, and GitHub code proof-of-work."
        },
        {
          "@type": "HowToStep",
          "position": 11,
          "name": "Technical Interview Preparation",
          "text": "Prepare for AI system design rounds, PyTorch live coding challenges, and mock mentor panels."
        },
        {
          "@type": "HowToStep",
          "position": 12,
          "name": "AI Career Launch",
          "text": "Secure high-impact roles as AI Engineer, Generative AI Developer, or ML Specialist (₹12 LPA – ₹35+ LPA)."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the recommended roadmap to become an AI Engineer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The canonical 12-step roadmap is: Programming → Python → Data & SQL → Machine Learning → Deep Learning → Generative AI → AI Agents → Projects → Internship → Portfolio → Interview → AI Career."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to complete the AI career roadmap?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A focused learner spending 15–20 hours per week can complete the entire 12-step roadmap in 4 to 6 months, including a 2-month guaranteed industry internship."
          }
        },
        {
          "@type": "Question",
          "name": "Can I transition to an AI career without a Computer Science degree?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Modern AI recruiters prioritize verifiable GitHub code, deployed applications, and internship experience over academic pedigree. Non-CS graduates can start with the 4-week Python and math bridge before moving to Machine Learning."
          }
        },
        {
          "@type": "Question",
          "name": "What is the average starting salary for an AI Engineer in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Entry-level AI and Generative AI Engineers in India typically earn between ₹8 LPA to ₹16 LPA, while engineers with 2–4 years of production LLM experience command ₹18 LPA to ₹38+ LPA."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://oiai.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "AI Career Roadmap",
          "item": "https://oiai.in/career-roadmap"
        }
      ]
    }
  ]
};

export default function CareerRoadmapPage() {
  return (
    <div className="min-h-screen bg-[#faf9f5] text-slate-900 flex flex-col antialiased selection:bg-indigo-500/20 selection:text-indigo-900">
      {/* Inject Structured Data for Google SGE, Perplexity, and AI Answer Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_DATA) }}
      />

      <Navbar />

      <main className="flex-1 pt-28 sm:pt-36 pb-24">
        {/* Breadcrumb Navigation (SEO) */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <nav aria-label="Breadcrumb" className="text-xs font-mono text-slate-500 flex items-center gap-2">
            <Link href="/" className="hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-indigo-700 font-semibold">AI Career Roadmap</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-4 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-indigo-600" />
            <span>Master AI Engineering Curriculum • 2026 Edition</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.08]">
            Your Roadmap to an AI Career
          </h1>

          <p className="mt-4 text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            The definitive 12-step engineering journey from foundational code to autonomous AI agents, live production
            internships, and high-growth engineering careers.
          </p>

          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-8 text-xs font-mono text-slate-600">
            <div className="flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-xs">
              <Calendar className="w-4 h-4 text-indigo-600" />
              <span>Timeline: <strong>4–6 Months</strong></span>
            </div>
            <div className="flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-xs">
              <Briefcase className="w-4 h-4 text-emerald-600" />
              <span>Internship: <strong>2-Month Guaranteed</strong></span>
            </div>
            <div className="flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-xs">
              <TrendingUp className="w-4 h-4 text-cyan-600" />
              <span>Outcome: <strong>₹12L – ₹35+ LPA</strong></span>
            </div>
          </div>
        </section>

        {/* AEO Featured Snippet Direct Answer Box (Crucial for Perplexity & Google SGE) */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-indigo-200 shadow-md shadow-indigo-950/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500" />
            
            <div className="flex items-center gap-2.5 mb-3">
              <Sparkles className="w-4 h-4 text-indigo-600 shrink-0" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-900">
                TL;DR: The Canonical 12-Step AI Career Sequence
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              To build a durable career in Artificial Intelligence in 2026, follow this exact linear progression:
            </p>

            {/* Quick Linear Badge Sequence */}
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-mono">
              {[
                "Programming",
                "Python",
                "Data & SQL",
                "Machine Learning",
                "Deep Learning",
                "Generative AI",
                "AI Agents",
                "Projects",
                "Internship",
                "Portfolio",
                "Interview",
                "AI Career"
              ].map((stepName, sIdx, arr) => (
                <React.Fragment key={stepName}>
                  <span
                    className={`px-2.5 py-1 rounded-lg font-bold border ${
                      sIdx === arr.length - 1
                        ? "bg-amber-100 text-amber-900 border-amber-300"
                        : sIdx >= 5 && sIdx <= 6
                        ? "bg-indigo-100 text-indigo-900 border-indigo-200"
                        : "bg-slate-100 text-slate-800 border-slate-200"
                    }`}
                  >
                    {sIdx + 1}. {stepName}
                  </span>
                  {sIdx < arr.length - 1 && (
                    <span className="text-indigo-400 font-bold">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: Interactive 12-Step Visual Flow Pipeline */}
        <section id="step-by-step-flow" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Detailed Step-by-Step AI Progression
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
              Click on each milestone to inspect core competencies, recommended tools, and proof-of-work repositories.
            </p>
          </div>

          {/* Render 12-Step Interactive Component */}
          <CareerRoadmapFlow />
        </section>

        {/* SECTION: Career Workbench & Milestone Visualizer */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-3">
              <Cpu className="w-3.5 h-3.5 text-indigo-600" />
              <span>Interactive Architecture Workbench</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Explore Prerequisite Tools &amp; Deliverables
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Select any level to inspect required libraries, compute clusters, and industry verification deliverables.
            </p>
          </div>

          <CareerRoadmapVisualizer />
        </section>

        {/* SECTION: Role Outcomes & Salary Benchmarks */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Where Does the Roadmap Take You?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Verified compensation and hiring demand across India and international remote markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                role: "Generative AI Developer",
                desc: "RAG pipelines, custom LLM fine-tuning & vector DB search",
                fresher: "₹10L – ₹16L",
                experienced: "₹18L – ₹35L+",
                demand: "🔥 Highest Growth (+140% YoY)"
              },
              {
                role: "AI Agent Architect",
                desc: "Multi-agent workflows, tool execution & autonomous systems",
                fresher: "₹12L – ₹18L",
                experienced: "₹22L – ₹40L+",
                demand: "⚡ Frontier Emerging Role"
              },
              {
                role: "Machine Learning Engineer",
                desc: "Predictive modeling, PyTorch training & cloud MLOps",
                fresher: "₹8L – ₹14L",
                experienced: "₹16L – ₹30L",
                demand: "📈 Steady High Demand"
              },
              {
                role: "Data Scientist & AI Analyst",
                desc: "Statistical inference, big data & LLM data analytics",
                fresher: "₹7L – ₹12L",
                experienced: "₹14L – ₹24L",
                demand: "🌐 Enterprise Core"
              }
            ].map((card, cI) => (
              <div
                key={cI}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono text-indigo-600 font-semibold mb-1">
                    {card.demand}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{card.role}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-snug">{card.desc}</p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500 font-mono">0–2 Years:</span>
                    <span className="font-bold text-slate-800 font-mono">{card.fresher}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500 font-mono">3–5+ Years:</span>
                    <span className="font-extrabold text-emerald-700 font-mono">{card.experienced}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: AEO Voice & Search Engine FAQs */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              AI Career Roadmap FAQs
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Clear answers to the most common questions about breaking into artificial intelligence.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Can I follow this AI Career Roadmap without a Computer Science degree?",
                a: "Absolutely. Over 45% of engineers succeeding in AI transition from non-CS backgrounds including mechanical, electrical, commerce, and pure mathematics. What recruiters look for is verifiable GitHub repositories, deployed model APIs, and hands-on internship experience rather than degree titles. Steps 1 and 2 (Programming & Python) provide the necessary ramp-up bridge."
              },
              {
                q: "Why is Generative AI and AI Agents placed after Deep Learning?",
                a: "While it is tempting to jump directly to building ChatGPT wrappers, developers who do so hit a ceiling when debugging hallucination, high inference latency, or model drift. Understanding neural networks and self-attention in Step 5 (Deep Learning) gives you the mathematical intuition needed to fine-tune open-weights models and orchestrate multi-agent state machines effectively in Steps 6 and 7."
              },
              {
                q: "How many hours per week do I need to commit to this roadmap?",
                a: "For the fast-track 4-month path, we recommend committing 18–20 hours per week (combination of live weekend cohorts and midweek lab sessions). For working professionals pacing across 6 months, 10–12 hours per week is sufficient."
              },
              {
                q: "Why is an industry internship mandatory in Step 9?",
                a: "Recruiters discount candidates whose only experience is generic tutorial projects. A live 2-month internship proves that you can manage code reviews, work in agile sprints, resolve production edge cases, and work under commercial SLAs. OIAI guarantees this capstone internship for all cohort students."
              },
              {
                q: "How does OIAI support my progression through these 12 steps?",
                a: "Every step in this roadmap directly maps to OIAI's modular curricula, dedicated compute on NVIDIA A100 GPU clusters, weekly code reviews by Silicon Valley and Bengaluru mentors, and direct placement partnerships across 40+ AI startups and tech firms."
              }
            ].map((faq, fIdx) => (
              <div
                key={fIdx}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs"
              >
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-start gap-2.5">
                  <span className="text-indigo-600 font-mono font-bold">Q:</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: Bottom Conversion & Diagnostic CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#1E1B4B] text-white p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-indigo-500/20 via-cyan-500/10 to-transparent blur-3xl pointer-events-none" />

            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/80 border border-indigo-700/60 text-indigo-300 text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Personalized Diagnostic</span>
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Find Out Where You Stand on the AI Roadmap
            </h2>

            <p className="mt-3 text-sm sm:text-base text-indigo-200 max-w-xl mx-auto leading-relaxed">
              Take our 60-second interactive AI Course Finder quiz to identify your current step, recommended starting
              track, and personalized syllabus roadmap.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#course-finder"
                className="px-7 py-3 rounded-xl bg-white hover:bg-slate-100 text-indigo-950 font-bold text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Launch AI Course Finder</span>
                <ArrowRight className="w-4 h-4 text-indigo-600" />
              </Link>

              <Link
                href="/#ai-programs"
                className="px-6 py-3 rounded-xl bg-indigo-900/60 hover:bg-indigo-900 text-white border border-indigo-700 text-sm font-semibold transition-all cursor-pointer"
              >
                <span>Explore AI Programs</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
