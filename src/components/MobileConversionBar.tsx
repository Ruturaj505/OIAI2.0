"use client";

import React, { useState, useEffect } from "react";
import { 
  Phone, 
  MessageSquare, 
  X, 
  ArrowRight,
  Bot
} from "lucide-react";

interface MobileConversionBarProps {
  onQuickEnquire?: () => void;
}

export default function MobileConversionBar({ onQuickEnquire }: MobileConversionBarProps) {
  const [showPopupChip, setShowPopupChip] = useState(true);
  const [dismissedChip, setDismissedChip] = useState(false);

  // Automatically show popup chip after 3 seconds on page
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissedChip) {
        setShowPopupChip(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [dismissedChip]);

  const handleDismissChip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowPopupChip(false);
    setDismissedChip(true);
  };

  const whatsappUrl =
    "https://wa.me/919876543210?text=Hello%20OIAI%20Team%2C%20I%20am%20interested%20in%20enquiring%20about%20your%20AI%20programs%20and%20admissions.";

  return (
    <>
      {/* 1. FLOATING WHATSAPP BUTTON WITH AUTOMATED POPUP CHIP */}
      <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end">
        {/* Automated Popup Chip */}
        {showPopupChip && !dismissedChip && (
          <div className="mb-2.5 max-w-[260px] animate-in fade-in slide-in-from-bottom-3 duration-300">
            <div className="relative p-3 rounded-2xl bg-slate-900 border border-slate-700 shadow-xl backdrop-blur-xl flex items-start gap-2.5">
              <div className="relative mt-0.5 shrink-0">
                <div className="w-8 h-8 rounded-full bg-emerald-950 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
                  <Bot className="w-4 h-4" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-slate-900" />
              </div>

              <div className="flex-1 min-w-0 pr-4">
                <p className="text-[11px] font-bold text-white flex items-center gap-1">
                  <span>OIAI Career Advisor</span>
                </p>
                <p className="text-[11px] text-slate-300 leading-tight mt-0.5">
                  Chat with an AI Career Advisor online now!
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 inline-flex items-center gap-1 text-[10px] font-mono font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  <span>Start WhatsApp Chat</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>

              <button
                onClick={handleDismissChip}
                aria-label="Close popup chip"
                className="absolute top-2 right-2 p-1 text-slate-400 hover:text-white rounded-md"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Floating WhatsApp Action Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-btn"
          aria-label="Chat on WhatsApp"
          className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:shadow-[0_0_35px_rgba(37,211,102,0.8)] transition-all duration-300 hover:scale-110 cursor-pointer"
        >
          {/* Subtle pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
          
          {/* Official WhatsApp SVG Vector */}
          <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current relative z-10" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.584 1.761.812 2.796.812 3.179 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.769-5.768-5.769zm3.364 8.163c-.144.405-.837.774-1.17.824-.312.045-.694.06-2.146-.541-1.854-.77-3.045-2.656-3.137-2.78-.093-.124-.748-.996-.748-1.9 0-.904.474-1.349.643-1.534.169-.185.37-.231.493-.231.124 0 .247.001.355.006.115.005.27-.043.421.323.155.372.529 1.29.576 1.383.046.093.077.201.015.324-.062.123-.093.2-.185.309-.093.107-.195.24-.278.323-.093.093-.19.194-.082.38.109.186.482.796 1.034 1.288.711.634 1.312.83 1.497.923.185.093.293.078.401-.047.108-.124.463-.541.587-.726.124-.185.247-.154.417-.093.169.062 1.077.509 1.262.602.185.093.308.139.355.216.046.077.046.45-.098.855z" />
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.981-1.396A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 1.636c4.619 0 8.364 3.745 8.364 8.364 0 4.62-3.745 8.364-8.364 8.364-1.558 0-3.007-.427-4.248-1.174l-.304-.184-2.833.794.764-2.792-.202-.321A8.324 8.324 0 013.636 12c0-4.619 3.745-8.364 8.364-8.364z" />
          </svg>
        </a>
      </div>

      {/* 2. STICKY BOTTOM DOCK FOR MOBILE VIEWPORTS */}
      <div
        id="mobile-conversion-dock"
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-slate-900/95 backdrop-blur-2xl border-t border-slate-800 px-3 py-2 shadow-2xl"
      >
        <div className="grid grid-cols-3 gap-2 items-center max-w-md mx-auto">
          {/* Call CTA */}
          <a
            href="tel:+919876543210"
            id="mobile-dock-call"
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 active:bg-slate-700 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#2563eb]" />
            <span className="text-[10px] font-semibold mt-0.5">Call Us</span>
          </a>

          {/* WhatsApp CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="mobile-dock-whatsapp"
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 active:bg-emerald-100 dark:active:bg-emerald-900/50 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-[10px] font-semibold mt-0.5">WhatsApp</span>
          </a>

          {/* Quick Enquire CTA */}
          <button
            onClick={onQuickEnquire}
            id="mobile-dock-enquire"
            className="glow-button flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-white font-bold active:scale-95 transition-transform cursor-pointer"
          >
            <ArrowRight className="w-4 h-4 text-white" />
            <span className="text-[10px] font-bold mt-0.5">Enquire</span>
          </button>
        </div>
      </div>
    </>
  );
}
