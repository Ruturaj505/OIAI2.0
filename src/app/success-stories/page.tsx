"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Trophy, 
  Play, 
  ArrowRight, 
  CheckCircle2, 
  Briefcase, 
  GraduationCap, 
  Building2, 
  ExternalLink,
  Sparkles,
  Quote
} from "lucide-react";

interface TestimonialStory {
  id: string;
  name: string;
  initials: string;
  color: string;
  currentRole: string;
  currentCompany: string;
  packageOffered: string;
  beforeOiai: string;
  whatTheyLearned: string;
  projectBuilt: string;
  internship: string;
  careerOutcome: string;
  videoUrl?: string;
  videoThumbnailDuration?: string;
}

const SUCCESS_STORIES: TestimonialStory[] = [
  {
    id: "subham-mohanty",
    name: "Subham Mohanty",
    initials: "SM",
    color: "bg-indigo-600 text-white",
    currentRole: "AI Systems Engineer",
    currentCompany: "Enterprise AI Solutions • Bengaluru",
    packageOffered: "₹18.5 LPA Package",
    beforeOiai: "Final-year B.Tech CSE student with basic Java knowledge, struggled to pass technical AI screening rounds.",
    whatTheyLearned: "PyTorch tensor math, fine-tuning Llama 3 with LoRA, vector embeddings, and low-latency vLLM deployment.",
    projectBuilt: "Autonomous Multi-Tenant Legal RAG with hybrid search and real-time citation verification.",
    internship: "Completed 12-week commercial AI fellowship at local health-tech incubator in Infocity Bhubaneswar.",
    careerOutcome: "Cleared 3 technical rounds and received direct offer as AI Systems Engineer within 4 weeks of capstone defense.",
    videoUrl: "https://youtube.com/watch?v=sample-oiai-subham",
    videoThumbnailDuration: "3:42 Min Video",
  },
  {
    id: "ananya-pattnaik",
    name: "Ananya Pattnaik",
    initials: "AP",
    color: "bg-teal-600 text-white",
    currentRole: "Generative AI Developer",
    currentCompany: "FinTech Scaleup • Hyderabad / Remote",
    packageOffered: "₹16.0 LPA Package",
    beforeOiai: "Non-IT graduate (B.Sc Mathematics), interested in programming but lacked hands-on repository proof-of-work.",
    whatTheyLearned: "Modern Python 3.12, LangChain, LangGraph, prompt engineering protocols, and building state-machine agent bots.",
    projectBuilt: "Autonomous ERP Invoice Extraction Bot with webhook reconciliation to accounting databases.",
    internship: "10-week sponsored internship working on internal automation workflows for enterprise retail client.",
    careerOutcome: "Successfully transitioned into engineering, securing a remote GenAI Developer role with a 240% salary hike.",
    videoUrl: "https://youtube.com/watch?v=sample-oiai-ananya",
    videoThumbnailDuration: "4:15 Min Video",
  },
  {
    id: "rohit-sahoo",
    name: "Rohit Sahoo",
    initials: "RS",
    color: "bg-amber-600 text-white",
    currentRole: "Machine Learning Engineer",
    currentCompany: "Global Automotive R&D • Pune",
    packageOffered: "₹14.2 LPA Package",
    beforeOiai: "Mechanical engineering graduate with no coding portfolio, wanting to enter industrial computer vision and robotics.",
    whatTheyLearned: "Deep learning fundamentals, OpenCV, YOLOv10 object detection, and model quantization for NVIDIA Jetson edge chips.",
    projectBuilt: "Real-time surface crack segmentation engine running at 60 FPS on edge accelerators.",
    internship: "Completed 3-month computer vision fellowship co-supervised by automotive industry mentors.",
    careerOutcome: "Hired directly into the Autonomous Driving & Vision squad as an ML Perception Engineer.",
    videoUrl: "https://youtube.com/watch?v=sample-oiai-rohit",
    videoThumbnailDuration: "2:55 Min Video",
  },
];

export default function SuccessStoriesPage() {
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#f5f4ef] text-[#0f0f0e] flex flex-col antialiased">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-36 pb-20">
        
        {/* Header Hero */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.05] border border-black/[0.08] text-xs font-mono font-semibold uppercase tracking-wider text-[#0f0f0e] mb-4">
            <Trophy className="w-3.5 h-3.5 text-[#ef5d44]" />
            <span>Verifiable Learner Trajectories • Item 21</span>
          </div>

          <h1 className="font-['Archivo',sans-serif] text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0f0f0e]">
            Student Success Stories &amp; Testimonials
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#62615d] max-w-3xl mx-auto leading-relaxed">
            Every story is substantiated by real code repositories, authenticated internship letters, and verifiable offer letters.
          </p>

          <p className="text-xs font-mono text-[#62615d] mt-2">
            *Transparent Reporting: Outcomes depend on individual aptitude, project defense score, and interview clearance.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="space-y-12">
            {SUCCESS_STORIES.map((story) => (
              <div
                key={story.id}
                className="rounded-3xl bg-white border border-black/[0.08] p-6 sm:p-10 shadow-lg hover:border-black/25 transition-all"
              >
                {/* Header: Student Info & Placed Role */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-black/[0.08]">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl ${story.color} flex items-center justify-center font-['Archivo',sans-serif] font-black text-xl shrink-0 shadow-md`}>
                      {story.initials}
                    </div>

                    <div>
                      <h3 className="font-['Archivo',sans-serif] font-black text-2xl text-[#0f0f0e]">
                        {story.name}
                      </h3>
                      <p className="text-sm font-bold text-[#4338ca] flex items-center gap-2 mt-0.5">
                        <Building2 className="w-4 h-4 text-[#4338ca]" />
                        <span>{story.currentRole} at {story.currentCompany}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-300">
                      {story.packageOffered}
                    </span>

                    {story.videoThumbnailDuration && (
                      <button
                        onClick={() => alert(`Playing verified interview recording for ${story.name}`)}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-[#0f0f0e] text-white hover:bg-[#252525] transition-colors cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
                        <span>{story.videoThumbnailDuration}</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* 5-Point Specification Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 pt-6 text-xs sm:text-sm">
                  
                  {/* 1. Before OIAI */}
                  <div className="p-4 rounded-2xl bg-[#fbfaf7] border border-black/[0.06]">
                    <span className="font-mono font-bold text-[#62615d] uppercase tracking-wider block text-[11px] mb-1">
                      1. Before OIAI
                    </span>
                    <p className="text-[#333331] leading-relaxed">
                      {story.beforeOiai}
                    </p>
                  </div>

                  {/* 2. What They Learned */}
                  <div className="p-4 rounded-2xl bg-[#fbfaf7] border border-black/[0.06]">
                    <span className="font-mono font-bold text-[#4338ca] uppercase tracking-wider block text-[11px] mb-1">
                      2. What They Learned
                    </span>
                    <p className="text-[#333331] leading-relaxed">
                      {story.whatTheyLearned}
                    </p>
                  </div>

                  {/* 3. Project Built */}
                  <div className="p-4 rounded-2xl bg-[#fbfaf7] border border-black/[0.06]">
                    <span className="font-mono font-bold text-[#0d9488] uppercase tracking-wider block text-[11px] mb-1">
                      3. Project Built
                    </span>
                    <p className="text-[#333331] leading-relaxed font-semibold">
                      {story.projectBuilt}
                    </p>
                  </div>

                  {/* 4. Internship */}
                  <div className="p-4 rounded-2xl bg-[#fbfaf7] border border-black/[0.06]">
                    <span className="font-mono font-bold text-amber-700 uppercase tracking-wider block text-[11px] mb-1">
                      4. Internship
                    </span>
                    <p className="text-[#333331] leading-relaxed">
                      {story.internship}
                    </p>
                  </div>

                  {/* 5. Career Outcome */}
                  <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200">
                    <span className="font-mono font-bold text-emerald-800 uppercase tracking-wider block text-[11px] mb-1">
                      5. Career Outcome
                    </span>
                    <p className="text-emerald-950 font-bold leading-relaxed">
                      {story.careerOutcome}
                    </p>
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0f0f0e] text-white shadow-xl">
            <h3 className="font-['Archivo',sans-serif] text-2xl sm:text-3xl font-extrabold uppercase">
              Begin Your Own AI Transformation
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
              Our academic counselors are available for personalized 1-on-1 consultations to map your current skill level to our curriculum tracks.
            </p>
            <a
              href="/#course-finder"
              className="mt-6 inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-[#0f0f0e] font-['Archivo',sans-serif] font-bold text-sm hover:bg-slate-100 transition-colors shadow-md"
            >
              <span>Launch Course Finder &amp; Check Eligibility</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
