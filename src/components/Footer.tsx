"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Shield, FileText, ArrowUp, Compass } from "lucide-react";

export default function Footer() {
  const [currentYear, setCurrentYear] = React.useState<number>(2026);

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer 
      role="contentinfo"
      aria-label="OIAI Footer"
      className="relative bg-[#0B1026] border-t border-[#45416F] text-slate-400 py-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#45416F]">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#17153B] border border-[#45416F] p-1.5 flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/oiai-logo.png"
                  alt="OIAI Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-slate-50">
                OIAI <span className="text-slate-400 font-normal">| Odisha Institute of AI</span>
              </span>
            </div>

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              Odisha Institute of Artificial Intelligence is an educational and research-focused initiative dedicated to comprehensive training in modern foundation models, machine learning, and computational AI engineering.
            </p>

            <div className="pt-2 text-xs font-mono text-slate-400 space-y-2">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#14B8A6] shrink-0" aria-hidden="true" />
                <span>Academic Desk: <a href="mailto:admissions@oiai.edu.in" className="text-slate-200 hover:text-indigo-300 transition-colors">admissions@oiai.edu.in</a></span>
              </p>
              <p>Operational Focus: Bhubaneswar, Odisha &amp; Online Cohorts</p>
            </div>
          </div>

          {/* Column: Programs */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-50 mb-4">
              Academic Tracks
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/career-roadmap" className="hover:text-indigo-300 transition-colors focus-visible:outline-2 focus-visible:outline-indigo-300 rounded">
                  AI Career Roadmap
                </Link>
              </li>
              <li>
                <Link href="/#find-ai-path" className="hover:text-indigo-300 transition-colors focus-visible:outline-2 focus-visible:outline-indigo-300 rounded">
                  Find Your AI Path
                </Link>
              </li>
              <li>
                <Link href="/#curriculum" className="hover:text-indigo-300 transition-colors focus-visible:outline-2 focus-visible:outline-indigo-300 rounded">
                  AI Programs Curriculum
                </Link>
              </li>
              <li>
                <Link href="/#course-finder" className="hover:text-indigo-300 transition-colors focus-visible:outline-2 focus-visible:outline-indigo-300 rounded">
                  Course Finder Wizard
                </Link>
              </li>
              <li>
                <Link href="/#methodology" className="hover:text-indigo-300 transition-colors focus-visible:outline-2 focus-visible:outline-indigo-300 rounded">
                  7-Stage AI Methodology
                </Link>
              </li>
              <li>
                <Link href="/#why-oiai" className="hover:text-indigo-300 transition-colors focus-visible:outline-2 focus-visible:outline-indigo-300 rounded">
                  6 Institutional Pillars
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Portals & Research */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-50 mb-4">
              Portals &amp; Portfolios
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/internships" className="hover:text-indigo-300 transition-colors focus-visible:outline-2 focus-visible:outline-indigo-300 rounded">
                  AI Internship Portal
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-indigo-300 transition-colors focus-visible:outline-2 focus-visible:outline-indigo-300 rounded">
                  Student Projects Hub
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="hover:text-indigo-300 transition-colors focus-visible:outline-2 focus-visible:outline-indigo-300 rounded">
                  Success Testimonials
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="hover:text-indigo-300 transition-colors focus-visible:outline-2 focus-visible:outline-indigo-300 rounded">
                  Faculty &amp; Mentors
                </Link>
              </li>
              <li>
                <Link href="/verify-certificate" className="text-[#14B8A6] hover:text-teal-300 transition-colors focus-visible:outline-2 focus-visible:outline-[#14B8A6] rounded font-mono text-xs">
                  Verify Certificate ID →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Institutional & Regional SEO */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-50 mb-4">
              Enterprise &amp; Regional
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/corporate-training" className="hover:text-indigo-300 transition-colors focus-visible:outline-2 focus-visible:outline-indigo-300 rounded">
                  Corporate AI Training
                </Link>
              </li>
              <li>
                <Link href="/academic-partnerships" className="hover:text-indigo-300 transition-colors focus-visible:outline-2 focus-visible:outline-indigo-300 rounded">
                  Colleges &amp; Universities
                </Link>
              </li>
              <li>
                <Link href="/workshops" className="hover:text-indigo-300 transition-colors focus-visible:outline-2 focus-visible:outline-indigo-300 rounded">
                  AI Workshops &amp; Events
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-indigo-300 transition-colors focus-visible:outline-2 focus-visible:outline-indigo-300 rounded">
                  AI Knowledge Hub (Blog)
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-indigo-300 transition-colors focus-visible:outline-2 focus-visible:outline-indigo-300 rounded">
                  AEO / AI Search FAQ
                </Link>
              </li>
              <li>
                <Link href="/bhubaneswar" className="text-slate-300 hover:text-indigo-300 transition-colors font-medium">
                  AI Institute Bhubaneswar
                </Link>
              </li>
              <li>
                <Link href="/odisha" className="text-slate-300 hover:text-indigo-300 transition-colors font-medium">
                  AI Training in Odisha
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; {currentYear} Odisha Institute of Artificial Intelligence (OIAI). All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">
              Academic Integrity Policy
            </span>
            <span className="hover:text-slate-400 cursor-pointer">
              Privacy &amp; Data Ethics
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-[#C4B5FD] transition-colors cursor-pointer ml-2 focus-visible:outline-2 focus-visible:outline-[#C4B5FD] rounded"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
