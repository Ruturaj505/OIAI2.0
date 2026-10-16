"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Menu, 
  X, 
  Search, 
  Phone, 
  ArrowUpRight,
  ChevronDown,
  Sparkles,
  BookOpen,
  Compass,
  GraduationCap,
  Briefcase,
  Building2,
  FileText,
  ChevronRight,
  ExternalLink,
  ArrowRight
} from "lucide-react";

interface NavbarProps {
  onOpenEnroll?: () => void;
}

interface NavSubItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
}

interface NavSection {
  id: string;
  title: string;
  href?: string;
  items?: NavSubItem[];
  columns?: 1 | 2 | 3;
}

// 1. EXACT RECOMMENDED WEBSITE ARCHITECTURE
const ARCHITECTURE_SECTIONS: NavSection[] = [
  {
    id: "ai-programs",
    title: "AI Programs",
    href: "/ai-programs",
    columns: 3,
    items: [
      { title: "AI Fundamentals", href: "/#curriculum", description: "Search algorithms, probability & logic" },
      { title: "Generative AI", href: "/#curriculum", description: "LLMs, diffusion models & fine-tuning", badge: "Hot" },
      { title: "Machine Learning", href: "/#curriculum", description: "Supervised & unsupervised systems" },
      { title: "Data Science", href: "/#curriculum", description: "Feature engineering & predictive modeling" },
      { title: "AI Agents", href: "/#curriculum", description: "Multi-agent LangGraph & autonomous systems", badge: "2026" },
      { title: "Prompt Engineering", href: "/#curriculum", description: "LLM optimization & prompt security" },
      { title: "AI Automation", href: "/#curriculum", description: "Enterprise robotic & workflow pipelines" },
      { title: "Cloud AI", href: "/#curriculum", description: "Scalable inference on AWS, Azure & GCP" },
      { title: "Computer Vision", href: "/#curriculum", description: "YOLO, OpenCV & Edge neural vision" },
      { title: "NLP", href: "/#curriculum", description: "Tokenizers, transformers & audio ASR" },
      { title: "Python for AI", href: "/#curriculum", description: "Python 3.12, PyTorch, NumPy & vector math" },
      { title: "AI for Professionals", href: "/#curriculum", description: "Domain switchers & executive AI mastery" }
    ]
  },
  {
    id: "ai-careers",
    title: "AI Careers",
    href: "/ai-careers",
    columns: 2,
    items: [
      { title: "AI Career Roadmap", href: "/career-roadmap", description: "12-stage engineering progression guide", badge: "Roadmap" },
      { title: "AI Job Roles", href: "/#find-ai-path", description: "10 high-growth roles detailed" },
      { title: "Skills Required", href: "/career-roadmap#skills", description: "Prerequisites & technical matrix" },
      { title: "Career Paths", href: "/#find-ai-path", description: "Diagnostic career navigator" },
      { title: "Salary & Career Guide", href: "/career-roadmap#salaries", description: "Industry compensation benchmarks" },
      { title: "Resume Building", href: "/career-roadmap#resume", description: "AI ATS resume & GitHub audit standards" },
      { title: "Interview Preparation", href: "/career-roadmap#interview", description: "Technical screening & live coding defense" },
      { title: "Portfolio Development", href: "/projects", description: "Capstone code repositories & defense" }
    ]
  },
  {
    id: "courses",
    title: "Courses",
    href: "/courses",
    columns: 2,
    items: [
      { title: "Beginner Programs", href: "/#course-finder", description: "Zero prior coding ramp-up cohorts" },
      { title: "Professional Programs", href: "/#curriculum", description: "Industry-grade 3-month specializations" },
      { title: "Advanced Programs", href: "/#curriculum", description: "Deep-tech 6-month flagship masters" },
      { title: "Certification Programs", href: "/verify-certificate", description: "Accredited credentials with verification" },
      { title: "Online Courses", href: "/#curriculum", description: "Live interactive virtual cohorts" },
      { title: "Offline Courses", href: "/bhubaneswar", description: "In-person labs at Bhubaneswar campus" }
    ]
  },
  {
    id: "internships",
    title: "Internships",
    href: "/internships",
    columns: 2,
    items: [
      { title: "AI Internship", href: "/internships", description: "Flagship 8-16 week experiential program", badge: "Open" },
      { title: "Python Internship", href: "/internships", description: "Core computational programming" },
      { title: "Data Science Internship", href: "/internships", description: "Statistical modeling & analytics" },
      { title: "GenAI Internship", href: "/internships", description: "RAG, LLM fine-tuning & agents" },
      { title: "ML Internship", href: "/internships", description: "Model training & deployment" },
      { title: "Student Projects", href: "/projects", description: "Searchable portfolio & client assignments" }
    ]
  },
  {
    id: "for-business",
    title: "For Business",
    href: "/for-business",
    columns: 2,
    items: [
      { title: "Corporate AI Training", href: "/corporate-training", description: "Custom enterprise team upskilling" },
      { title: "AI Workshops", href: "/workshops", description: "Weekend bootcamps & executive hackathons" },
      { title: "AI Consulting", href: "/corporate-training", description: "Advisory on generative AI adoption" },
      { title: "AI Automation", href: "/corporate-training", description: "Autonomous workflow integration" },
      { title: "College Workshops", href: "/academic-partnerships", description: "Campus FDPs, bootcamps & clubs" }
    ]
  },
  {
    id: "resources",
    title: "Resources",
    href: "/resources",
    columns: 2,
    items: [
      { title: "AI Blog", href: "/blog", description: "In-depth articles & technical breakdowns" },
      { title: "AI News", href: "/blog", description: "Frontier AI developments & analysis" },
      { title: "AI Tutorials", href: "/blog", description: "Step-by-step code implementations" },
      { title: "AI FAQs", href: "/faq", description: "AEO search answers & admissions FAQ" },
      { title: "AI Career Guides", href: "/career-roadmap", description: "Salary & role navigation blueprints" },
      { title: "Case Studies", href: "/success-stories", description: "Graduate transformation stories" },
      { title: "Downloads", href: "/career-roadmap", description: "Curriculum brochures & syllabi PDFs" }
    ]
  }
];

export default function Navbar({ onOpenEnroll }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>("ai-programs");
  const navContainerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navContainerRef.current && !navContainerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    if (href.startsWith("/#") || href.startsWith("#")) {
      const id = href.replace("/#", "").replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        role="banner"
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-0 sm:px-4 lg:px-8 pointer-events-none"
        ref={navContainerRef}
      >
        {/* Floating White Card Header */}
        <div className="w-full max-w-[1440px] mx-auto bg-white rounded-none sm:rounded-b-[22px] border-b border-black/[0.08] shadow-[0_16px_36px_-24px_rgba(15,15,14,0.30)] pointer-events-auto transition-all duration-300">
          
          {/* 1. Utility Strip (Desktop/Tablet) */}
          <div className="hidden md:flex h-9 border-b border-black/[0.06] items-center justify-between px-6 lg:px-8 text-xs font-medium text-[#62615d]">
            
            {/* Phones Container */}
            <div className="flex items-center relative h-full">
              <a 
                href="tel:+916742913000" 
                className="inline-flex items-center gap-1.5 hover:text-[#0f0f0e] transition-colors leading-tight"
                aria-label="Admissions Desk Phone"
              >
                <Phone className="w-3.5 h-3.5 text-[#0f0f0e] shrink-0" />
                <span>
                  <strong>Admissions Desk:</strong> +91 674 291-3000
                </span>
              </a>

              <div className="mx-5 w-[1px] h-3.5 bg-black/15" aria-hidden="true" />

              <a 
                href="tel:+916742913001" 
                className="inline-flex items-center gap-1.5 hover:text-[#0f0f0e] transition-colors leading-tight"
                aria-label="Career Desk Phone"
              >
                <span>
                  <strong>Career Desk:</strong> +91 674 291-3001
                </span>
              </a>
            </div>

            {/* Right Quick Direct Links */}
            <div className="flex items-center gap-5 text-[11.5px]">
              <Link href="/bhubaneswar" className="hover:text-[#4338ca] transition-colors font-medium">
                Bhubaneswar Campus
              </Link>
              <Link href="/odisha" className="hover:text-[#4338ca] transition-colors font-medium">
                Odisha Cohorts
              </Link>
              <Link href="/verify-certificate" className="hover:text-[#0d9488] transition-colors font-semibold text-[#0d9488]">
                Verify Certificate ID →
              </Link>

              {/* Curriculum Search */}
              <button 
                type="button"
                aria-label="Search curriculum"
                onClick={() => {
                  const el = document.getElementById("curriculum");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-7 h-7 bg-[#f0eee6] hover:bg-[#e4e2d8] rounded-md flex items-center justify-center text-[#0f0f0e] transition-colors cursor-pointer"
              >
                <Search className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* 2. Main Navigation Row with Dropdowns */}
          <div className="h-16 sm:h-20 flex items-center justify-between px-4 sm:px-6 lg:px-8 relative">
            
            {/* Brand Logo */}
            <div className="flex items-center shrink-0">
              <Link
                href="/"
                className="group flex items-center gap-2 sm:gap-3 focus-visible:outline-2 focus-visible:outline-blue-500 rounded-xl py-1"
                aria-label="OIAI Home"
              >
                <Image
                  src="/images/oiai-logo.png"
                  alt="OIAI Logo"
                  width={80}
                  height={80}
                  priority
                  className="w-10 h-10 sm:w-14 sm:h-14 lg:w-[68px] lg:h-[68px] object-contain shrink-0 transition-transform duration-200 group-hover:scale-105"
                />
                <div className="flex flex-col">
                  <span className="font-heading text-xl sm:text-2xl lg:text-3xl font-black tracking-[-0.03em] uppercase text-[#0f0f0e] leading-none">
                    OIAI
                  </span>
                  <span className="text-[7px] sm:text-[8.5px] font-bold tracking-[0.06em] sm:tracking-[0.08em] uppercase text-[#62615d] mt-0.5">
                    ODISHA INSTITUTE OF AI
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links with Mega Dropdowns */}
            <nav className="hidden xl:flex items-center gap-1.5 lg:gap-2 nav-typography font-semibold text-[#0f0f0e]" aria-label="Main navigation">
              
              {/* Home */}
              <a
                href="/"
                className="px-2.5 py-1.5 rounded-lg hover:text-[#4338ca] hover:bg-black/5 transition-colors"
              >
                Home
              </a>

              {/* Dropdown Sections */}
              {ARCHITECTURE_SECTIONS.map((section) => {
                const isActive = activeDropdown === section.id;
                return (
                  <div
                    key={section.id}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(section.id)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <a
                      href={section.href || `/${section.id}`}
                      className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                        isActive ? "text-[#4338ca] bg-black/5" : "hover:text-[#4338ca] hover:bg-black/5"
                      }`}
                      aria-expanded={isActive}
                    >
                      <span>{section.title}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isActive ? "rotate-180 text-[#4338ca]" : "opacity-50"}`} />
                    </a>

                    {/* Mega Menu / Dropdown Card */}
                    {isActive && section.items && (
                      <div
                        onMouseEnter={() => setActiveDropdown(section.id)}
                        onMouseLeave={() => setActiveDropdown(null)}
                        className={`absolute top-full left-1/2 -translate-x-1/2 mt-1.5 bg-white border border-black/10 rounded-2xl shadow-[0_25px_60px_-15px_rgba(15,15,14,0.25)] p-4 animate-in fade-in slide-in-from-top-2 duration-150 z-50 ${
                          section.columns === 3
                            ? "w-[720px]"
                            : section.columns === 2
                            ? "w-[520px]"
                            : "w-[300px]"
                        }`}
                      >
                        {/* Section Header with Direct Landing Page Link */}
                        <div className="pb-2.5 mb-2.5 border-b border-black/[0.06] flex items-center justify-between">
                          <a
                            href={section.href || `/${section.id}`}
                            className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#4338ca] hover:underline flex items-center gap-1"
                          >
                            <span>{section.title} Landing Page</span>
                            <ArrowRight className="w-3 h-3" />
                          </a>
                          <span className="text-[11px] font-mono text-[#62615d]">
                            {section.items.length} Options
                          </span>
                        </div>

                        {/* Grid of Items */}
                        <div className={`grid gap-1.5 ${
                          section.columns === 3 ? "grid-cols-3" : "grid-cols-2"
                        }`}>
                          {section.items.map((sub, idx) => (
                            <a
                              key={idx}
                              href={sub.href}
                              className="p-2 rounded-xl hover:bg-black/[0.04] transition-colors group/item flex flex-col justify-between"
                            >
                              <div className="flex items-center justify-between gap-1">
                                <span className="font-heading font-semibold text-xs text-[#0f0f0e] group-hover/item:text-[#4338ca] transition-colors">
                                  {sub.title}
                                </span>
                                {sub.badge && (
                                  <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-[#4338ca]/10 text-[#4338ca]">
                                    {sub.badge}
                                  </span>
                                )}
                              </div>
                              {sub.description && (
                                <p className="text-[11px] font-sans text-[#62615d] line-clamp-1 mt-0.5 leading-tight">
                                  {sub.description}
                                </p>
                              )}
                            </a>
                          ))}
                        </div>

                      </div>
                    )}
                  </div>
                );
              })}

              {/* About OIAI */}
              <a
                href="/about"
                className="px-2.5 py-1.5 rounded-lg hover:text-[#4338ca] hover:bg-black/5 transition-colors"
              >
                About OIAI
              </a>

              {/* Contact */}
              <a
                href="/contact"
                className="px-2.5 py-1.5 rounded-lg hover:text-[#4338ca] hover:bg-black/5 transition-colors"
              >
                Contact
              </a>

            </nav>

            {/* Right: Persistent CTA Button & Menu trigger */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              
              {/* Persistent CTA Button: Enroll Now */}
              <div className="flex items-center gap-1 sm:gap-1.5">
                <button
                  type="button"
                  onClick={() => {
                    if (onOpenEnroll) onOpenEnroll();
                    else handleNavClick("#curriculum");
                  }}
                  id="navbar-persistent-enroll-btn"
                  className="h-9 sm:h-10 px-3 sm:px-5 rounded-[13px] sm:rounded-[16px] bg-[#0f0f0e] text-white button-typography text-xs sm:text-[15px] flex items-center justify-center hover:bg-[#252525] hover:-translate-y-0.5 transition-all cursor-pointer shadow-sm"
                  aria-label="Enroll in AI Programs"
                >
                  <span>Enroll Now</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (onOpenEnroll) onOpenEnroll();
                    else handleNavClick("#curriculum");
                  }}
                  aria-label="Quick Enroll Action"
                  className="hidden sm:flex w-10 h-10 rounded-full bg-[#0f0f0e] text-white items-center justify-center -rotate-45 hover:scale-105 transition-transform cursor-pointer shadow-sm shrink-0"
                >
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Mobile / Tablet Menu Button */}
              <div className="flex xl:hidden items-center">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-black/5 hover:bg-black/10 text-[#0f0f0e] text-xs sm:text-sm font-semibold cursor-pointer transition-colors"
                  aria-label="Toggle Full Architecture Menu"
                >
                  {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
                  <span className="hidden min-[380px]:inline">{mobileMenuOpen ? "Close" : "Menu"}</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </header>

      {/* FULL ARCHITECTURE MOBILE / TABLET DRAWER */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 bg-[#0f0f0e]/70 backdrop-blur-md flex justify-end animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-xl bg-[#f5f4ef] h-full overflow-y-auto p-5 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-4 border-b border-black/10">
                <div className="flex items-center gap-2.5">
                  <Image
                    src="/images/oiai-logo.png"
                    alt="OIAI Logo"
                    width={36}
                    height={36}
                    className="w-9 h-9 object-contain"
                  />
                  <div>
                    <span className="font-heading text-xl font-black text-[#0f0f0e] block leading-none">
                      OIAI DIRECTORY
                    </span>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-[#62615d]">
                      Recommended Architecture
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl bg-black/5 hover:bg-black/10 text-[#0f0f0e] transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Direct Home Link */}
              <div className="py-2.5 border-b border-black/5 flex items-center justify-between nav-typography font-semibold text-base text-[#0f0f0e]">
                <a href="/">
                  Home
                </a>
                <ArrowUpRight className="w-4 h-4 text-[#62615d]" />
              </div>

              {/* Accordion List for all Architecture Sections */}
              <div className="mt-3 space-y-2">
                {ARCHITECTURE_SECTIONS.map((sec) => {
                  const isExpanded = expandedMobileSection === sec.id;
                  return (
                    <div key={sec.id} className="border border-black/10 rounded-2xl bg-white overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setExpandedMobileSection(isExpanded ? null : sec.id)}
                        className="w-full p-3.5 flex items-center justify-between text-left font-heading text-sm font-bold text-[#0f0f0e] cursor-pointer"
                      >
                        <span className="flex items-center gap-2">
                          <span>{sec.title}</span>
                          <span className="text-[10px] font-mono font-normal text-[#62615d]">
                            ({sec.items?.length})
                          </span>
                        </span>
                        <ChevronDown className={`w-4 h-4 text-[#62615d] transition-transform ${isExpanded ? "rotate-180 text-[#4338ca]" : ""}`} />
                      </button>

                      {isExpanded && sec.items && (
                        <div className="px-3.5 pb-3.5 pt-1 border-t border-black/5 grid grid-cols-1 sm:grid-cols-2 gap-2 bg-[#fdfdfc]">
                          {/* Direct Full Landing Page Link */}
                          <a
                            href={sec.href || `/${sec.id}`}
                            className="col-span-full p-2.5 rounded-xl bg-indigo-50 border border-indigo-200/80 text-[#4338ca] text-xs font-bold flex items-center justify-between hover:bg-indigo-100 transition-colors"
                          >
                            <span>Open {sec.title} Full Landing Page</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>

                          {sec.items.map((sub, i) => (
                            <a
                              key={i}
                              href={sub.href}
                              className="p-2 rounded-xl bg-black/[0.02] hover:bg-[#4338ca]/10 transition-colors block"
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-heading font-semibold text-xs text-[#0f0f0e]">
                                  {sub.title}
                                </span>
                                {sub.badge && (
                                  <span className="text-[9px] font-mono font-bold text-[#4338ca]">
                                    {sub.badge}
                                  </span>
                                )}
                              </div>
                              {sub.description && (
                                <p className="text-[10.5px] font-sans text-[#62615d] mt-0.5 line-clamp-1">
                                  {sub.description}
                                </p>
                              )}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* About & Contact Links */}
              <div className="mt-4 pt-3 border-t border-black/10 flex flex-col gap-2 nav-typography font-semibold text-sm text-[#0f0f0e]">
                <a
                  href="/about"
                  className="py-1.5 flex items-center justify-between"
                >
                  <span>About OIAI</span>
                  <ChevronRight className="w-4 h-4 text-[#62615d]" />
                </a>
                <a
                  href="/contact"
                  className="py-1.5 flex items-center justify-between"
                >
                  <span>Contact Admissions Desk</span>
                  <ChevronRight className="w-4 h-4 text-[#62615d]" />
                </a>
                <a
                  href="/faq"
                  className="py-1.5 flex items-center justify-between"
                >
                  <span>Admissions FAQ &amp; AEO</span>
                  <ChevronRight className="w-4 h-4 text-[#62615d]" />
                </a>
                <a
                  href="tel:+916742913000"
                  className="py-1.5 flex items-center justify-between text-[#4338ca]"
                >
                  <span>Call Helpline: +91 674 291-3000</span>
                  <Phone className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

            {/* Persistent CTA at bottom of drawer */}
            <div className="mt-8 pt-4 border-t border-black/10 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenEnroll) onOpenEnroll();
                }}
                className="w-full py-4 rounded-2xl bg-[#0f0f0e] hover:bg-[#252525] text-white button-typography text-base flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <span>Enroll Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
