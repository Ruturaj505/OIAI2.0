"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import WhatsAppLogo from "@/components/WhatsAppLogo";
import { 
  X, 
  Send, 
  Sparkles, 
  BookOpen, 
  Briefcase, 
  Calendar, 
  CreditCard, 
  Compass, 
  Building2, 
  GraduationCap, 
  CheckCircle2, 
  ChevronRight,
  MessageCircle
} from "lucide-react";

interface WhatsAppOption {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  prefilledText: string;
  badge?: string;
}

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "916742913000";

const ADVISOR_OPTIONS: WhatsAppOption[] = [
  {
    id: 1,
    title: "1. Course Enquiry",
    subtitle: "Curriculum tracks, syllabus & upcoming batches",
    icon: <BookOpen className="w-4 h-4 text-emerald-500" />,
    prefilledText: "Hello OIAI! I would like to enquire about your AI & Generative AI courses, curriculum tracks, and upcoming batch dates.",
    badge: "Popular"
  },
  {
    id: 2,
    title: "2. Internship",
    subtitle: "Live industry projects & research internships",
    icon: <Briefcase className="w-4 h-4 text-indigo-500" />,
    prefilledText: "Hello OIAI! I am interested in applying for the OIAI AI / Machine Learning Internship program.",
    badge: "Open"
  },
  {
    id: 3,
    title: "3. Workshop",
    subtitle: "Hands-on weekend bootcamps & certification",
    icon: <Calendar className="w-4 h-4 text-amber-500" />,
    prefilledText: "Hello OIAI! Please share details and registration link for the upcoming AI workshops."
  },
  {
    id: 4,
    title: "4. Fees",
    subtitle: "Fee structure, installment plans & scholarships",
    icon: <CreditCard className="w-4 h-4 text-teal-500" />,
    prefilledText: "Hello OIAI! Please share the fee structure, flexible payment options, and scholarship criteria for your AI programs."
  },
  {
    id: 5,
    title: "5. Career Guidance",
    subtitle: "1-on-1 roadmap counselling with senior AI mentors",
    icon: <Compass className="w-4 h-4 text-rose-500" />,
    prefilledText: "Hello OIAI! I would like to schedule a 1-on-1 career guidance session to plan my transition into an AI career."
  },
  {
    id: 6,
    title: "6. Corporate Training",
    subtitle: "Custom enterprise upskilling & executive sessions",
    icon: <Building2 className="w-4 h-4 text-blue-500" />,
    prefilledText: "Hello OIAI! We are looking for customized Corporate AI Training solutions for our organization's engineering/business teams."
  },
  {
    id: 7,
    title: "7. College Partnership",
    subtitle: "Campus AI clubs, FDPs, hackathons & MOUs",
    icon: <GraduationCap className="w-4 h-4 text-purple-500" />,
    prefilledText: "Hello OIAI! We would like to explore institutional AI partnerships, faculty development, and student bootcamps for our college/university."
  }
];

export default function WhatsAppAdvisor() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<WhatsAppOption | null>(null);
  const [customText, setCustomText] = useState("");
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showHintBubble, setShowHintBubble] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Show a gentle preview hint bubble after 4 seconds if not opened yet
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowHintBubble(true);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [hasInteracted]);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelectOption = (option: WhatsAppOption) => {
    setSelectedOption(option);
    setCustomText(option.prefilledText);
  };

  const handleOpenWhatsApp = (textToSend?: string) => {
    const message = textToSend || customText || "Hello OIAI! I would like to speak with an AI Career Advisor.";
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setHasInteracted(true);
    setShowHintBubble(false);
    if (!selectedOption && ADVISOR_OPTIONS.length > 0) {
      setSelectedOption(ADVISOR_OPTIONS[0]);
      setCustomText(ADVISOR_OPTIONS[0].prefilledText);
    }
  };

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-3 sm:right-6 z-50 font-sans" ref={panelRef}>
      
      {/* 1. GENTLE PREVIEW BUBBLE (WHEN CLOSED) */}
      {!isOpen && showHintBubble && (
        <div className="mb-3 max-w-[calc(100vw-32px)] sm:max-w-[280px] bg-white border border-black/10 rounded-2xl p-3.5 shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-300 relative text-left">
          <button 
            type="button"
            onClick={() => setShowHintBubble(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-700 p-0.5 rounded-full"
            aria-label="Dismiss hint"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0f0f0e]">
              Advisory Desk Online
            </span>
          </div>
          
          <p className="text-xs text-[#62615d] leading-snug">
            Need guidance on AI careers, courses, or internships? Chat with our team now.
          </p>

          <button
            type="button"
            onClick={toggleOpen}
            className="mt-2 text-xs font-bold text-[#0d9488] hover:text-emerald-700 flex items-center gap-1 cursor-pointer"
          >
            <span>View 7 Quick Options</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* 2. EXPANDED WHATSAPP CHAT ADVISOR WINDOW */}
      {isOpen && (
        <div 
          className="mb-3 w-[calc(100vw-24px)] sm:w-[410px] max-h-[82vh] sm:max-h-[85vh] bg-[#fdfdfc] border border-black/15 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
          role="dialog"
          aria-labelledby="whatsapp-advisor-heading"
        >
          {/* Header */}
          <div className="bg-[#0f0f0e] text-white p-4 sm:p-5 flex items-center justify-between relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#25D366]/15 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-3 relative z-10">
              <div className="relative">
                <WhatsAppLogo className="w-11 h-11" />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#25D366] border-2 border-[#0f0f0e]" />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h3 id="whatsapp-advisor-heading" className="font-heading text-base font-bold tracking-tight leading-none text-white">
                    AI Career Advisor
                  </h3>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                </div>
                <p className="text-[11px] font-mono text-emerald-400 mt-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  <span>Online • OIAI Admissions &amp; Mentorship</span>
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close Advisor Window"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body / Automated Dialogue */}
          <div className="p-4 sm:p-5 overflow-y-auto flex-1 space-y-4 text-left bg-gradient-to-b from-[#f5f4ef] to-[#fcfcfb]">
            
            {/* System Greeting Bubble */}
            <div className="bg-white border border-black/10 rounded-2xl p-3.5 shadow-sm text-xs text-[#0f0f0e] leading-relaxed relative">
              <p className="font-semibold text-[#0f0f0e] mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Odisha Institute of AI (OIAI)</span>
              </p>
              <p className="text-[#62615d]">
                Welcome! How can our senior career advisors assist you today? Select one of the <strong>7 automated options</strong> below to instantly start your WhatsApp consultation:
              </p>
            </div>

            {/* Automated 7 Options List */}
            <div className="space-y-2">
              <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#62615d] px-1">
                Select Your Inquiry Option:
              </p>

              {ADVISOR_OPTIONS.map((opt) => {
                const isSelected = selectedOption?.id === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleSelectOption(opt)}
                    className={`w-full text-left p-2.5 sm:p-3 rounded-2xl border transition-all duration-150 flex items-center justify-between group cursor-pointer ${
                      isSelected
                        ? "bg-white border-[#25D366] shadow-md ring-1 ring-[#25D366]"
                        : "bg-white/80 hover:bg-white border-black/5 hover:border-black/15 shadow-sm"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0 pr-2">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected ? "bg-emerald-50 text-emerald-600" : "bg-black/5 text-slate-700"
                      }`}>
                        {opt.icon}
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[#0f0f0e] truncate block">
                            {opt.title}
                          </span>
                          {opt.badge && (
                            <span className="text-[9px] font-mono uppercase px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 font-bold shrink-0">
                              {opt.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-[#62615d] truncate">
                          {opt.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenWhatsApp(opt.prefilledText);
                        }}
                        title="Direct send to WhatsApp"
                        className="w-7 h-7 rounded-full bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white flex items-center justify-center transition-colors"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Option Message Preview & Edit */}
            {selectedOption && (
              <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-3 text-xs">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-900">
                    Pre-filled Message Preview:
                  </span>
                  <span className="text-[10px] font-mono text-emerald-700">
                    Editable
                  </span>
                </div>
                <textarea
                  rows={3}
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  className="w-full text-xs text-[#0f0f0e] bg-white border border-emerald-200 rounded-xl p-2.5 focus:outline-none focus:ring-1 focus:ring-emerald-500 resize-none leading-relaxed"
                  placeholder="Type or customize your query..."
                />
              </div>
            )}

          </div>

          {/* Footer Action Button */}
          <div className="p-3.5 sm:p-4 bg-white border-t border-black/10 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => handleOpenWhatsApp()}
              className="w-full py-3.5 px-5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.99] text-white button-typography text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-[#25D366]/25 transition-all cursor-pointer"
            >
              <WhatsAppLogo className="w-5 h-5" showShadow={false} />
              <span>Chat on WhatsApp</span>
              <Send className="w-4 h-4 ml-1" />
            </button>

            <p className="text-[10px] font-mono text-center text-[#62615d]">
              Direct Helpline: +91 674 291-3000 • Verified Official Desk
            </p>
          </div>
        </div>
      )}

      {/* 3. FLOATING WHATSAPP CTA TRIGGER BUTTON (ROUND) */}
      <div className="flex justify-end">
        {/* Primary Round WhatsApp Floating Button (Mobile & Desktop) */}
        <button
          type="button"
          onClick={toggleOpen}
          id="floating-whatsapp-icon-btn"
          aria-label="Toggle WhatsApp Chat Advisor"
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.55)] hover:shadow-[0_12px_36px_rgba(37,211,102,0.8)] transition-all duration-300 hover:scale-105 cursor-pointer shrink-0"
        >
          {/* Subtle pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />

          {isOpen ? (
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          ) : (
            <WhatsAppLogo className="w-8 h-8 sm:w-10 sm:h-10" showShadow={false} />
          )}
        </button>
      </div>

    </div>
  );
}
