"use client";

import React, { useState } from "react";
import { FAQ_QUESTIONS } from "@/data/faq";
import { HelpCircle, ChevronDown, CheckCircle2 } from "lucide-react";

export default function FaqSection() {
  const [openFaqId, setOpenFaqId] = useState<string | null>("who-can-enrol");

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFaq(id);
    }
  };

  return (
    <section 
      id="faq"
      aria-label="Frequently Asked Questions"
      className="w-full py-24 lg:py-32 bg-[#0B1026] text-slate-50 border-t border-[#45416F] relative overflow-hidden"
    >
      {/* Background ambient radial glow */}
      <div 
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[400px] bg-gradient-to-tr from-purple-950/20 via-indigo-950/15 to-transparent blur-[140px] rounded-full pointer-events-none" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17153B] border border-[#45416F] text-[#C4B5FD] text-xs font-mono font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#C4B5FD]" aria-hidden="true" />
            <span>FREQUENTLY ASKED QUESTIONS • ADMISSIONS &amp; LOGISTICS</span>
          </div>

          <h2 className="section-heading text-[#E2E8F0]">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 body-paragraph text-[#CBD5E1]">
            Essential answers regarding prerequisites, admissions criteria, learning formats, tools, and technical assessments.
          </p>
        </div>

        {/* 6 FAQ Items Accordion */}
        <div className="space-y-4" role="region" aria-label="FAQ Accordion">
          {FAQ_QUESTIONS.map((item, index) => {
            const isOpen = openFaqId === item.id;
            const contentId = `faq-content-${item.id}`;
            const buttonId = `faq-trigger-${item.id}`;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#17153B] border-[#C4B5FD] shadow-lg shadow-black/40"
                    : "bg-[#17153B]/70 border-[#45416F] hover:border-purple-400 hover:bg-[#17153B]"
                }`}
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleFaq(item.id)}
                  onKeyDown={(e) => handleKeyDown(e, item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C4B5FD]"
                >
                  <div className="flex items-center gap-3.5">
                    <span className={`text-xs font-mono font-semibold px-2 py-0.5 rounded ${
                      isOpen ? "bg-[#0B1026] text-[#C4B5FD] border border-[#45416F]" : "bg-[#0B1026] text-slate-300 border border-[#45416F]"
                    }`}>
                      0{index + 1}
                    </span>
                    <h3 className="card-heading text-base sm:text-lg lg:text-xl font-semibold text-[#E2E8F0] leading-snug">
                      {item.question}
                    </h3>
                  </div>

                  <div className={`p-1.5 rounded-lg bg-[#0B1026] border border-[#45416F] text-slate-300 transition-transform duration-200 shrink-0 ${
                    isOpen ? "rotate-180 text-[#C4B5FD] border-[#C4B5FD]" : ""
                  }`}>
                    <ChevronDown className="w-4 h-4" aria-hidden="true" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 pb-6 sm:px-6 pt-1 body-paragraph text-sm sm:text-base text-[#CBD5E1] border-t border-[#45416F] bg-[#17153B]/40"
                  >
                    <p>{item.answer}</p>
                    <div className="mt-4 pt-3 border-t border-[#45416F] flex items-center gap-2 text-xs font-mono text-[#C4B5FD]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" aria-hidden="true" />
                      <span>Official OIAI Academic Policy</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Structured Schema for Search Engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQ_QUESTIONS.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />

      </div>
    </section>
  );
}
