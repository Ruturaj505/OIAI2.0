"use client";

import React, { useEffect, useRef } from "react";
import { ProgramTrack } from "@/data/curriculum";
import { X, CheckCircle2, Clock, Users, ArrowRight, Layers, BookOpen } from "lucide-react";

interface ProgramDetailModalProps {
  program: ProgramTrack | null;
  onClose: () => void;
  onInquire: (program: ProgramTrack) => void;
}

export default function ProgramDetailModal({
  program,
  onClose,
  onInquire,
}: ProgramDetailModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (program) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [program, onClose]);

  if (!program) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-program-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl rounded-2xl bg-[#25234F] border border-[#45416F] shadow-2xl p-6 sm:p-8 z-10 my-8 overflow-hidden max-h-[90vh] overflow-y-auto text-slate-100"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close program details"
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#1E1B4B] hover:bg-[#272451] text-slate-300 hover:text-white transition-colors cursor-pointer border border-[#45416F] focus-visible:outline-2 focus-visible:outline-indigo-400"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-[#1E1B4B] text-[#A5B4FC] border border-[#45416F]">
            Track {program.number < 10 ? `0${program.number}` : program.number}
          </span>
          <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-[#1E1B4B] text-slate-300 border border-[#45416F]">
            {program.level} Level
          </span>
          <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#1E1B4B] text-[#A5B4FC] border border-[#45416F]">
            Audience: {program.audiences.join(" & ")}
          </span>
        </div>

        <h2 id="modal-program-title" className="text-2xl sm:text-3xl font-extrabold text-[#F1F5F9] tracking-tight">
          {program.title}
        </h2>

        <p className="mt-3 text-base text-[#CBD5E1] leading-relaxed">
          {program.description}
        </p>

        {/* Program Metadata */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 p-4 rounded-xl bg-[#1E1B4B] border border-[#45416F]">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-[#A5B4FC] shrink-0" aria-hidden="true" />
            <div>
              <p className="text-xs font-mono text-slate-400">Proposed Duration</p>
              <p className="text-sm font-bold text-slate-100">{program.duration}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-[#A5B4FC] shrink-0" aria-hidden="true" />
            <div>
              <p className="text-xs font-mono text-slate-400">Target Format</p>
              <p className="text-sm font-bold text-slate-100">Interactive Cohort Labs</p>
            </div>
          </div>
        </div>

        {/* Primary Outcome */}
        <div className="mt-6">
          <h3 className="text-sm font-mono font-bold text-slate-200 uppercase tracking-wider mb-2 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-teal-400" aria-hidden="true" />
            Primary Learning Outcome:
          </h3>
          <p className="text-sm text-[#CBD5E1] p-3.5 rounded-xl bg-[#1E1B4B] border border-[#45416F] leading-relaxed">
            {program.keyOutcome}
          </p>
        </div>

        {/* Syllabus Highlights */}
        <div className="mt-6">
          <h3 className="text-sm font-mono font-bold text-slate-200 uppercase tracking-wider mb-3 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#A5B4FC]" aria-hidden="true" />
            Core Curricular Modules:
          </h3>
          <ul className="space-y-2">
            {program.syllabusHighlights.map((mod, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-[#CBD5E1]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A5B4FC] mt-2 shrink-0" aria-hidden="true" />
                <span>{mod}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies / Focus Tags */}
        <div className="mt-6 pt-4 border-t border-[#45416F]">
          <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Technologies &amp; Concept Tags:</p>
          <div className="flex flex-wrap gap-2">
            {program.techTags.map((tag) => (
              <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#1E1B4B] text-slate-300 border border-[#45416F]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 pt-4 border-t border-[#45416F] flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#1E1B4B] hover:bg-[#272451] text-slate-300 hover:text-white text-sm font-semibold transition-colors cursor-pointer border border-[#45416F]"
          >
            Close
          </button>
          <button
            onClick={() => onInquire(program)}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#4338CA] hover:bg-indigo-700 text-slate-50 text-sm font-bold flex items-center justify-center gap-2 shadow-md cursor-pointer focus-visible:outline-2 focus-visible:outline-indigo-400"
          >
            <span>Inquire About This Track</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

      </div>
    </div>
  );
}
