"use client";

import React, { useState, useEffect } from "react";
import { CURRICULUM_TRACKS } from "@/data/curriculum";
import { 
  X, 
  CheckCircle2, 
  Send, 
  Clock, 
  BookOpen
} from "lucide-react";

interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgram?: string;
}

export default function EnrollModal({ isOpen, onClose, defaultProgram }: EnrollModalProps) {
  const [selectedProgramId, setSelectedProgramId] = useState<string>("generative-ai");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Bhubaneswar");
  const [qualification, setQualification] = useState("B.Tech / MCA / BE");
  const [occupation, setOccupation] = useState("College Student");
  const [learningMode, setLearningMode] = useState("Hybrid (Classroom + Online Labs)");
  const [preferredTiming, setPreferredTiming] = useState("Weekend Cohort (Sat-Sun)");
  const [careerObjective, setCareerObjective] = useState("Job Placement in AI Engineering");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultProgram) {
      const match = CURRICULUM_TRACKS.find(
        (t) => t.title.toLowerCase() === defaultProgram.toLowerCase() || t.id === defaultProgram
      );
      if (match) {
        setSelectedProgramId(match.id);
      }
    }
  }, [defaultProgram]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const selectedTrack = CURRICULUM_TRACKS.find((t) => t.id === selectedProgramId) || CURRICULUM_TRACKS[0];

  return (
    <div
      id="enroll-modal"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#020617]/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-2xl rounded-t-[28px] sm:rounded-2xl bg-[#25234F] border border-[#45416F] shadow-2xl p-4.5 sm:p-8 z-10 my-0 sm:my-8 overflow-hidden max-h-[92vh] sm:max-h-[90vh] overflow-y-auto text-slate-100 pr-12 sm:pr-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-enroll-modal"
          aria-label="Close inquiry dialog"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-xl bg-[#1E1B4B] hover:bg-[#272451] text-slate-300 hover:text-white transition-all cursor-pointer border border-[#45416F] focus-visible:outline-2 focus-visible:outline-indigo-400"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-teal-950/80 border border-teal-500 flex items-center justify-center text-teal-400 shadow-xs">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-[#F1F5F9]">Inquiry Successfully Received</h2>
            <p className="text-sm text-[#CBD5E1] max-w-md mx-auto">
              Thank you, <strong className="text-slate-100">{fullName || "Learner"}</strong>. We have logged your application for <strong className="text-[#A5B4FC]">{selectedTrack.title}</strong> ({learningMode}). Our academic counselor will reach out via WhatsApp/Phone at <span className="font-mono text-teal-300">{phone}</span> and email <span className="font-mono text-slate-200">{email}</span> within 24 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-[#4338CA] hover:bg-indigo-700 text-slate-50 text-sm font-semibold cursor-pointer shadow-xs focus-visible:outline-2 focus-visible:outline-indigo-400"
              >
                Return to OIAI Portal
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1 rounded-md bg-[#1E1B4B] border border-[#45416F] text-[#A5B4FC]">
                <BookOpen className="w-4 h-4" />
              </span>
              <span className="text-xs font-mono font-semibold uppercase text-[#A5B4FC] tracking-wider">
                Official Lead Application • Item 28/29 System
              </span>
            </div>

            <h2 id="inquiry-modal-title" className="text-2xl sm:text-3xl font-extrabold text-[#F1F5F9] tracking-tight">
              Apply for OIAI Program &amp; Consultation
            </h2>
            <p className="text-sm text-[#CBD5E1] mt-1">
              Complete this quick application to reserve your cohort seat, access scholarship evaluation, and receive curriculum syllabi.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Program Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2">
                  Program Interested In *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-40 overflow-y-auto pr-1">
                  {CURRICULUM_TRACKS.map((prog) => {
                    const isSelected = selectedProgramId === prog.id;
                    return (
                      <button
                        type="button"
                        key={prog.id}
                        onClick={() => setSelectedProgramId(prog.id)}
                        className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#1E1B4B] border-[#A5B4FC] shadow-xs ring-1 ring-[#A5B4FC]/40"
                            : "bg-[#1E1B4B]/60 border-[#45416F] hover:border-purple-400 text-slate-300"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-[#A5B4FC] px-1.5 py-0.5 rounded bg-[#17153B] border border-[#45416F] font-semibold">
                            Track 0{prog.number}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">{prog.level}</span>
                        </div>
                        <p className="text-xs font-bold text-slate-100 mt-1 truncate">
                          {prog.title}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Recommended Fields from Item 29 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div>
                  <label htmlFor="fullname" className="block text-xs font-medium text-slate-200 mb-1">
                    Full Name *
                  </label>
                  <input
                    id="fullname"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Priyadarshi Dash"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1E1B4B] border border-[#45416F] text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:border-[#A5B4FC] focus:ring-1 focus:ring-[#A5B4FC] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-slate-200 mb-1">
                    Mobile / WhatsApp *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1E1B4B] border border-[#45416F] text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:border-[#A5B4FC] focus:ring-1 focus:ring-[#A5B4FC] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-slate-200 mb-1">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@gmail.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1E1B4B] border border-[#45416F] text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:border-[#A5B4FC] focus:ring-1 focus:ring-[#A5B4FC] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-xs font-medium text-slate-200 mb-1">
                    City / Location *
                  </label>
                  <input
                    id="city"
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Bhubaneswar, Cuttack, Rourkela"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1E1B4B] border border-[#45416F] text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:border-[#A5B4FC] focus:ring-1 focus:ring-[#A5B4FC] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="qualification" className="block text-xs font-medium text-slate-200 mb-1">
                    Highest Qualification *
                  </label>
                  <select
                    id="qualification"
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1E1B4B] border border-[#45416F] text-slate-100 text-sm focus:outline-none focus:border-[#A5B4FC] focus:ring-1 focus:ring-[#A5B4FC] transition-all"
                  >
                    <option value="High School / +2">High School / +2 Science</option>
                    <option value="B.Tech / BE (CS / IT)">B.Tech / BE (CS / IT)</option>
                    <option value="B.Tech / BE (Non-CS)">B.Tech / BE (Non-CS Branch)</option>
                    <option value="BCA / MCA / B.Sc">BCA / MCA / B.Sc IT</option>
                    <option value="Postgraduate / Masters">Postgraduate / Masters</option>
                    <option value="Working Professional">Working Professional / Others</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="occupation" className="block text-xs font-medium text-slate-200 mb-1">
                    Current Occupation *
                  </label>
                  <select
                    id="occupation"
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1E1B4B] border border-[#45416F] text-slate-100 text-sm focus:outline-none focus:border-[#A5B4FC] focus:ring-1 focus:ring-[#A5B4FC] transition-all"
                  >
                    <option value="College Student">College Student (Final / Pre-Final Year)</option>
                    <option value="Recent Graduate">Recent Graduate (Seeking First Job)</option>
                    <option value="Software Engineer">Software Engineer / IT Professional</option>
                    <option value="Non-IT Professional">Non-IT Working Professional</option>
                    <option value="Freelancer / Consultant">Freelancer / Consultant</option>
                    <option value="Entrepreneur / Founder">Entrepreneur / Founder</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="learning-mode" className="block text-xs font-medium text-slate-200 mb-1">
                    Preferred Learning Mode *
                  </label>
                  <select
                    id="learning-mode"
                    value={learningMode}
                    onChange={(e) => setLearningMode(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1E1B4B] border border-[#45416F] text-slate-100 text-sm focus:outline-none focus:border-[#A5B4FC] focus:ring-1 focus:ring-[#A5B4FC] transition-all"
                  >
                    <option value="Hybrid (Classroom + Online Labs)">Hybrid (Classroom + Online Labs)</option>
                    <option value="In-Person Classroom (Bhubaneswar)">In-Person Classroom (Bhubaneswar)</option>
                    <option value="100% Online Live Cohort">100% Online Live Cohort</option>
                    <option value="Weekend Executive Batch">Weekend Executive Batch</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="preferred-timing" className="block text-xs font-medium text-slate-200 mb-1">
                    Preferred Timing *
                  </label>
                  <select
                    id="preferred-timing"
                    value={preferredTiming}
                    onChange={(e) => setPreferredTiming(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1E1B4B] border border-[#45416F] text-slate-100 text-sm focus:outline-none focus:border-[#A5B4FC] focus:ring-1 focus:ring-[#A5B4FC] transition-all"
                  >
                    <option value="Weekend Cohort (Sat-Sun)">Weekend Cohort (Sat–Sun)</option>
                    <option value="Weekday Evening (7:30 PM - 9:30 PM)">Weekday Evening (7:30 PM – 9:30 PM)</option>
                    <option value="Morning Bootcamp (8:00 AM - 11:00 AM)">Morning Bootcamp (8:00 AM – 11:00 AM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="career-objective" className="block text-xs font-medium text-slate-200 mb-1">
                  Primary Career Objective *
                </label>
                <input
                  id="career-objective"
                  type="text"
                  required
                  value={careerObjective}
                  onChange={(e) => setCareerObjective(e.target.value)}
                  placeholder="e.g. AI Engineer Job, Career Switch, Building AI Startup"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#1E1B4B] border border-[#45416F] text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:border-[#A5B4FC] focus:ring-1 focus:ring-[#A5B4FC] transition-all"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  id="submit-inquiry-button"
                  className="w-full bg-[#4338CA] hover:bg-indigo-700 text-slate-50 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all focus-visible:outline-2 focus-visible:outline-indigo-400"
                >
                  <Send className="w-4 h-4 text-slate-50" />
                  <span>Submit Program Inquiry</span>
                </button>
                <p className="text-[11px] text-center text-slate-400 mt-2 font-mono">
                  Your information is used solely to respond to your educational inquiry.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
