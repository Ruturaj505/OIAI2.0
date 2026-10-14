"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Menu, 
  X, 
  Search,
  Phone,
  ArrowUpRight
} from "lucide-react";

interface NavbarProps {
  onOpenEnroll?: () => void;
}

export default function Navbar({ onOpenEnroll }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        role="banner"
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-0 sm:px-6 lg:px-10 pointer-events-none"
      >
        {/* Floating White Card Header */}
        <div className="w-full max-w-[1400px] mx-auto bg-white rounded-none sm:rounded-b-[22px] border-b border-black/[0.08] shadow-[0_16px_36px_-24px_rgba(15,15,14,0.30)] pointer-events-auto transition-all duration-300">
          
          {/* 1. Utility Strip (Desktop/Tablet) */}
          <div className="hidden md:flex h-10 border-b border-black/[0.08] items-center justify-between px-6 lg:px-8 text-xs font-medium text-[#62615d]">
            
            {/* Phones Container */}
            <div className="flex items-center relative h-full">
              <a 
                href="tel:+916742913000" 
                className="inline-flex items-center gap-2 hover:text-[#0f0f0e] transition-colors leading-tight"
                aria-label="Admissions Desk Phone"
              >
                <Phone className="w-3.5 h-3.5 text-[#0f0f0e] shrink-0" />
                <span>
                  <strong>Admissions Desk:</strong> +91 674 291-3000
                </span>
              </a>

              {/* Vertical Rule at ~313px equivalent position */}
              <div className="mx-6 w-[1px] h-4 bg-black/15" aria-hidden="true" />

              <a 
                href="tel:+916742913001" 
                className="inline-flex items-center gap-2 hover:text-[#0f0f0e] transition-colors leading-tight"
                aria-label="Career Desk Phone"
              >
                <span>
                  <strong>Career Desk:</strong> +91 674 291-3001
                </span>
              </a>
            </div>

            {/* Right Useful Links & Search */}
            <div className="flex items-center gap-6">
              <nav aria-label="Useful links" className="flex items-center gap-4 text-[12px] text-[#0f0f0e]">
                <Link href="/career-roadmap" className="hover:text-[#4338ca] transition-colors font-medium">
                  Roadmap
                </Link>
                <Link href="/internships" className="hover:text-[#4338ca] transition-colors font-medium">
                  Internships
                </Link>
                <Link href="/workshops" className="hover:text-[#4338ca] transition-colors font-medium">
                  Workshops
                </Link>
                <Link href="/projects" className="hover:text-[#4338ca] transition-colors font-medium">
                  Projects
                </Link>
                <Link href="/faculty" className="hover:text-[#4338ca] transition-colors font-medium">
                  Faculty
                </Link>
                <Link href="/blog" className="hover:text-[#4338ca] transition-colors font-medium">
                  Knowledge Hub
                </Link>
                <Link href="/verify-certificate" className="hover:text-[#4338ca] transition-colors font-semibold text-[#0d9488]">
                  Verify Cert
                </Link>
              </nav>

              {/* Search Button */}
              <button 
                type="button"
                aria-label="Search curriculum"
                onClick={() => {
                  const el = document.getElementById("curriculum");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-[39px] h-[39px] bg-[#e8e7e2] hover:bg-[#deddd7] rounded-[5px_0_0_5px] flex items-center justify-center text-[#0f0f0e] transition-colors cursor-pointer"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 2. Main Navigation Row */}
          <div className="h-16 sm:h-20 lg:h-24 flex items-center justify-between px-4 sm:px-6 lg:px-8">
            
            {/* Brand Logo */}
            <div className="flex items-center shrink-0">
              <Link
                href="/"
                className="group flex items-center gap-3.5 focus-visible:outline-2 focus-visible:outline-blue-500 rounded-xl py-1"
                aria-label="OIAI Home"
              >
                <Image
                  src="/images/oiai-logo.png"
                  alt="OIAI Logo"
                  width={88}
                  height={88}
                  priority
                  className="w-14 h-14 sm:w-16 sm:h-16 lg:w-[78px] lg:h-[78px] object-contain shrink-0 transition-transform duration-200 group-hover:scale-105"
                />
                <div className="flex flex-col">
                  <span className="font-['Archivo',sans-serif] text-2xl sm:text-3xl lg:text-[34px] font-black tracking-[-0.03em] uppercase text-[#0f0f0e] leading-none">
                    OIAI
                  </span>
                  <span className="text-[8px] sm:text-[9.5px] font-bold tracking-[0.08em] uppercase text-[#62615d] mt-1">
                    ODISHA INSTITUTE OF ARTIFICIAL INTELLIGENCE
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
              
              <Link
                href="/#curriculum"
                className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#0f0f0e] hover:opacity-75 transition-opacity"
              >
                <span>Programs</span>
                <span className="w-6 h-6 rounded-full bg-[#0f0f0e] flex items-center justify-center shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                </span>
              </Link>

              <Link
                href="/career-roadmap"
                className="text-[15px] font-semibold text-[#0f0f0e] hover:opacity-75 transition-opacity"
              >
                Career Roadmap
              </Link>

              <Link
                href="/internships"
                className="text-[15px] font-semibold text-[#0f0f0e] hover:opacity-75 transition-opacity"
              >
                Internships
              </Link>

              <Link
                href="/corporate-training"
                className="text-[15px] font-semibold text-[#0f0f0e] hover:opacity-75 transition-opacity"
              >
                Corporate B2B
              </Link>

              {/* Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-[14px] font-semibold text-[#0f0f0e] bg-black/5 hover:bg-black/10 transition-colors cursor-pointer"
              >
                <Menu className="w-4 h-4" />
                <span>All Sections</span>
              </button>

              {/* Header CTA */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => {
                    if (onOpenEnroll) onOpenEnroll();
                    else handleNavClick("#curriculum");
                  }}
                  className="h-9 sm:h-10 px-4 sm:px-5 rounded-[16px] bg-[#0f0f0e] text-white font-['Archivo',sans-serif] text-xs sm:text-sm font-bold flex items-center justify-center hover:bg-[#252525] hover:-translate-y-0.5 transition-all cursor-pointer shadow-sm"
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
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0f0f0e] text-white flex items-center justify-center -rotate-45 hover:scale-105 transition-transform cursor-pointer shadow-sm"
                  aria-label="Quick Enroll"
                >
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </button>
              </div>

            </nav>

            {/* Mobile / Tablet Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-black/5 text-[#0f0f0e] text-sm font-semibold cursor-pointer"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                <span>{mobileMenuOpen ? "Close" : "Menu"}</span>
              </button>
            </div>

          </div>

        </div>
      </header>

      {/* Comprehensive Navigation Modal / Drawer */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 bg-[#0f0f0e]/60 backdrop-blur-md flex justify-end animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-2xl bg-[#f5f4ef] h-full overflow-y-auto p-6 sm:p-10 flex flex-col justify-between shadow-2xl">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-black/10">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/oiai-logo.png"
                    alt="OIAI Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                  />
                  <div>
                    <span className="font-['Archivo',sans-serif] text-2xl font-black text-[#0f0f0e] block leading-none">
                      OIAI DIRECTORY
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#62615d]">
                      Master Navigation Hub
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 rounded-xl bg-black/5 hover:bg-black/10 text-sm font-semibold text-[#0f0f0e] flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                  <span>Close</span>
                </button>
              </div>

              {/* Grid of Navigation Sections */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
                
                {/* Column 1: Academic & Pathways */}
                <div>
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#4338ca] mb-3">
                    01 // Academic Tracks
                  </h3>
                  <div className="flex flex-col gap-2.5 text-base font-semibold text-[#0f0f0e]">
                    <Link 
                      href="/#find-ai-path" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="hover:text-[#4338ca] transition-colors flex items-center justify-between py-1 border-b border-black/5"
                    >
                      <span>Find Your AI Path</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#62615d]" />
                    </Link>
                    <Link 
                      href="/career-roadmap" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="hover:text-[#4338ca] transition-colors flex items-center justify-between py-1 border-b border-black/5"
                    >
                      <span>AI Career Roadmap</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#62615d]" />
                    </Link>
                    <Link 
                      href="/#curriculum" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="hover:text-[#4338ca] transition-colors flex items-center justify-between py-1 border-b border-black/5"
                    >
                      <span>AI Programs Curriculum</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#62615d]" />
                    </Link>
                    <Link 
                      href="/#course-finder" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="hover:text-[#4338ca] transition-colors flex items-center justify-between py-1 border-b border-black/5"
                    >
                      <span>AI Course Finder</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#62615d]" />
                    </Link>
                    <Link 
                      href="/#methodology" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="hover:text-[#4338ca] transition-colors flex items-center justify-between py-1 border-b border-black/5"
                    >
                      <span>7-Stage Methodology</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#62615d]" />
                    </Link>
                  </div>
                </div>

                {/* Column 2: Experiential & Portals */}
                <div>
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#0d9488] mb-3">
                    02 // Experiential & Portals
                  </h3>
                  <div className="flex flex-col gap-2.5 text-base font-semibold text-[#0f0f0e]">
                    <Link 
                      href="/internships" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="hover:text-[#0d9488] transition-colors flex items-center justify-between py-1 border-b border-black/5"
                    >
                      <span>AI Internship Portal</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#62615d]" />
                    </Link>
                    <Link 
                      href="/projects" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="hover:text-[#0d9488] transition-colors flex items-center justify-between py-1 border-b border-black/5"
                    >
                      <span>Student Projects Hub</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#62615d]" />
                    </Link>
                    <Link 
                      href="/success-stories" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="hover:text-[#0d9488] transition-colors flex items-center justify-between py-1 border-b border-black/5"
                    >
                      <span>Success Stories</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#62615d]" />
                    </Link>
                    <Link 
                      href="/faculty" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="hover:text-[#0d9488] transition-colors flex items-center justify-between py-1 border-b border-black/5"
                    >
                      <span>Faculty &amp; Mentors</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#62615d]" />
                    </Link>
                    <Link 
                      href="/verify-certificate" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="hover:text-[#0d9488] transition-colors flex items-center justify-between py-1 border-b border-black/5 font-mono text-sm text-[#0d9488]"
                    >
                      <span>Verify Certificate ID</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Column 3: Corporate & Institutions */}
                <div>
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#b45309] mb-3">
                    03 // B2B & Partnerships
                  </h3>
                  <div className="flex flex-col gap-2.5 text-base font-semibold text-[#0f0f0e]">
                    <Link 
                      href="/corporate-training" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="hover:text-[#b45309] transition-colors flex items-center justify-between py-1 border-b border-black/5"
                    >
                      <span>Corporate AI Training</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#62615d]" />
                    </Link>
                    <Link 
                      href="/academic-partnerships" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="hover:text-[#b45309] transition-colors flex items-center justify-between py-1 border-b border-black/5"
                    >
                      <span>College Partnerships</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#62615d]" />
                    </Link>
                    <Link 
                      href="/workshops" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="hover:text-[#b45309] transition-colors flex items-center justify-between py-1 border-b border-black/5"
                    >
                      <span>AI Workshops &amp; Events</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#62615d]" />
                    </Link>
                    <Link 
                      href="/#why-oiai" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="hover:text-[#b45309] transition-colors flex items-center justify-between py-1 border-b border-black/5"
                    >
                      <span>Why Choose OIAI (6 Pillars)</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#62615d]" />
                    </Link>
                  </div>
                </div>

                {/* Column 4: Content & Regional Centers */}
                <div>
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#0f0f0e] mb-3">
                    04 // Knowledge & Regional
                  </h3>
                  <div className="flex flex-col gap-2.5 text-base font-semibold text-[#0f0f0e]">
                    <Link 
                      href="/blog" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="hover:text-[#4338ca] transition-colors flex items-center justify-between py-1 border-b border-black/5"
                    >
                      <span>AI Knowledge Hub (Blog)</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#62615d]" />
                    </Link>
                    <Link 
                      href="/faq" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="hover:text-[#4338ca] transition-colors flex items-center justify-between py-1 border-b border-black/5"
                    >
                      <span>AEO Admissions FAQ</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#62615d]" />
                    </Link>
                    <Link 
                      href="/bhubaneswar" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="hover:text-[#4338ca] transition-colors flex items-center justify-between py-1 border-b border-black/5"
                    >
                      <span>AI Institute in Bhubaneswar</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#62615d]" />
                    </Link>
                    <Link 
                      href="/odisha" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="hover:text-[#4338ca] transition-colors flex items-center justify-between py-1 border-b border-black/5"
                    >
                      <span>AI Center in Odisha</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#62615d]" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Drawer Actions */}
            <div className="mt-10 pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-mono text-[#62615d]">
                <p>Helpline: +91 674 291-3000</p>
                <p>Email: admissions@oiai.edu.in</p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenEnroll) onOpenEnroll();
                }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-[#0f0f0e] text-white font-['Archivo',sans-serif] text-sm font-bold hover:bg-[#252525] transition-colors cursor-pointer"
              >
                Open Admissions Application
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
