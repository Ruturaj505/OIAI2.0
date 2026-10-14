"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  UserCheck, 
  Award, 
  CheckCircle2, 
  Send, 
  ArrowRight, 
  Sparkles, 
  Users, 
  Tag, 
  Laptop 
} from "lucide-react";

interface WorkshopEvent {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  venue: string;
  speaker: string;
  speakerRole: string;
  topic: string;
  eligibility: string;
  seats: string;
  certificateInfo: string;
  badge: string;
}

const WORKSHOP_EVENTS: WorkshopEvent[] = [
  {
    id: "cs-to-ai-engineer",
    title: "AI Career Workshop",
    subtitle: "From Computer Science Student to AI Engineer",
    date: "Saturday, November 29, 2026",
    time: "10:30 AM – 1:30 PM IST",
    venue: "OIAI Innovation Center, Infocity Bhubaneswar & Virtual Live Stream",
    speaker: "Dr. Ansuman Jena",
    speakerRole: "Principal AI Scientist & Ex-Amazon AWS Machine Learning",
    topic: "Career trajectory, essential PyTorch & GenAI skills, portfolio repos, and cracking modern AI engineering interviews.",
    eligibility: "B.Tech, BCA, MCA, B.Sc students, fresh graduates, and self-taught developers",
    seats: "45 Physical Seats Left • 200 Virtual Seats",
    certificateInfo: "Official OIAI Workshop Participation Certificate with Verifiable ID",
    badge: "Flagship Career Event",
  },
  {
    id: "hands-on-rag",
    title: "Hands-on Technical Bootcamp",
    subtitle: "Building Enterprise Multimodal RAG with LangChain & Pinecone",
    date: "Sunday, December 7, 2026",
    time: "2:00 PM – 6:00 PM IST",
    venue: "OIAI GPU Lab, Chandrasekharpur Bhubaneswar",
    speaker: "Swagatika Ray",
    speakerRole: "Staff AI Engineer • GenAI Startup Architect",
    topic: "Practical live coding: document chunking, hybrid search, vector embeddings, reranking, and hallucination evaluation.",
    eligibility: "Basic Python knowledge required. Bring your laptop.",
    seats: "30 Lab Workstations Only",
    certificateInfo: "OIAI Hands-On RAG Implementation Masterclass Certificate",
    badge: "Live Coding Masterclass",
  },
  {
    id: "autonomous-agents",
    title: "AI Systems Seminar",
    subtitle: "Orchestrating Autonomous Multi-Agent Swarms with LangGraph & CrewAI",
    date: "Saturday, December 20, 2026",
    time: "11:00 AM – 2:30 PM IST",
    venue: "Virtual Live Webinar & Interactive Discord Lab",
    speaker: "Prateek Mohanty",
    speakerRole: "AI Automation Specialist & Silicon Valley Fellow",
    topic: "Autonomous agentic decision loops, tool calling, state machines, and building self-healing enterprise bots.",
    eligibility: "Developers, technical leads, and engineering students",
    seats: "150 Virtual Seats",
    certificateInfo: "OIAI Agentic AI Engineering Workshop Credential",
    badge: "Emerging Tech Seminar",
  },
];

export default function WorkshopsPage() {
  const [selectedWorkshop, setSelectedWorkshop] = useState<WorkshopEvent>(WORKSHOP_EVENTS[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [mode, setMode] = useState("In-Person (Bhubaneswar)");
  const [collegeOrCompany, setCollegeOrCompany] = useState("");
  const [registered, setRegistered] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
  };

  return (
    <div className="min-h-screen bg-[#f5f4ef] text-[#0f0f0e] flex flex-col antialiased">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-36 pb-20">
        
        {/* Header Hero */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.05] border border-black/[0.08] text-xs font-mono font-semibold uppercase tracking-wider text-[#0f0f0e] mb-4">
            <Calendar className="w-3.5 h-3.5 text-[#ef5d44]" />
            <span>OIAI Events &amp; Masterclasses • Item 18</span>
          </div>

          <h1 className="font-['Archivo',sans-serif] text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0f0f0e]">
            Upcoming AI Workshops &amp; Masterclasses
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#62615d] max-w-3xl mx-auto leading-relaxed">
            Attend live interactive masterclasses hosted by practicing research scientists and AI engineering leaders in Bhubaneswar and online.
          </p>
        </div>

        {/* Featured Workshops Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {WORKSHOP_EVENTS.map((event) => {
              const isSelected = selectedWorkshop.id === event.id;

              return (
                <div
                  key={event.id}
                  className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
                    isSelected
                      ? "bg-white border-2 border-[#0f0f0e] shadow-xl ring-4 ring-black/5"
                      : "bg-white border border-black/[0.08] hover:border-black/25 shadow-xs"
                  }`}
                >
                  <div>
                    {/* Badge */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-[#4338ca]/10 text-[#4338ca] border border-[#4338ca]/20">
                        {event.badge}
                      </span>
                      <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        {event.seats.split("•")[0].trim()}
                      </span>
                    </div>

                    <p className="text-xs font-mono font-semibold text-[#ef5d44] uppercase tracking-wider">
                      {event.title}
                    </p>
                    <h3 className="font-['Archivo',sans-serif] text-xl sm:text-2xl font-black text-[#0f0f0e] mt-1 leading-snug">
                      “{event.subtitle}”
                    </h3>

                    {/* Meta Info */}
                    <div className="mt-5 space-y-2.5 text-xs text-[#333331] pt-4 border-t border-black/[0.06]">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#4338ca] shrink-0" />
                        <span className="font-bold">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#4338ca] shrink-0" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#4338ca] shrink-0" />
                        <span className="truncate">{event.venue}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <UserCheck className="w-4 h-4 text-[#0d9488] shrink-0" />
                        <span><strong>Speaker:</strong> {event.speaker} ({event.speakerRole.split("•")[0].trim()})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-[#ef5d44] shrink-0" />
                        <span className="truncate">{event.certificateInfo}</span>
                      </div>
                    </div>

                    <div className="mt-5 p-3 rounded-xl bg-[#f5f4ef] text-xs text-[#62615d]">
                      <p className="font-mono font-bold text-[#0f0f0e] mb-1">Topic Outline:</p>
                      <p className="leading-relaxed">{event.topic}</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-black/[0.06]">
                    <a
                      href="#register-section"
                      onClick={() => setSelectedWorkshop(event)}
                      className={`w-full py-3 rounded-xl font-['Archivo',sans-serif] text-xs font-bold text-center flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#0f0f0e] text-white shadow-md hover:bg-[#252525]"
                          : "bg-black/[0.05] hover:bg-[#0f0f0e] text-[#0f0f0e] hover:text-white"
                      }`}
                    >
                      <span>Register Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Registration Section */}
        <div id="register-section" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-black/[0.08] p-6 sm:p-10 shadow-xl">
            <div className="text-center mb-8">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#4338ca]/10 text-[#4338ca] border border-[#4338ca]/20 uppercase">
                Fast Registration
              </span>
              <h2 className="font-['Archivo',sans-serif] text-2xl sm:text-3xl font-extrabold uppercase text-[#0f0f0e] mt-2">
                Register for Workshop
              </h2>
              <p className="text-xs sm:text-sm text-[#62615d] mt-1">
                Selected: <strong>{selectedWorkshop.title} — “{selectedWorkshop.subtitle}”</strong>
              </p>
            </div>

            {registered ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 border border-emerald-500 flex items-center justify-center text-emerald-600 shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0f0f0e]">Registration Confirmed!</h3>
                <p className="text-xs sm:text-sm text-[#62615d] max-w-md mx-auto">
                  Thank you, <strong className="text-[#0f0f0e]">{name}</strong>. Your seat is confirmed for <strong>{selectedWorkshop.subtitle}</strong>. We have sent the calendar invite, venue directions, and live stream link to <span className="font-mono">{email}</span>.
                </p>
                <button
                  onClick={() => setRegistered(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-[#0f0f0e] text-white text-xs font-bold font-mono"
                >
                  Register Someone Else
                </button>
              </div>
            ) : (
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0f0f0e] mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Priyanshu Mohanty"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#fbfaf7] border border-black/[0.1] text-sm focus:outline-none focus:border-[#0f0f0e]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0f0f0e] mb-1">Mobile / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#fbfaf7] border border-black/[0.1] text-sm focus:outline-none focus:border-[#0f0f0e]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0f0f0e] mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@gmail.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#fbfaf7] border border-black/[0.1] text-sm focus:outline-none focus:border-[#0f0f0e]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0f0f0e] mb-1">College or Organization *</label>
                    <input
                      type="text"
                      required
                      value={collegeOrCompany}
                      onChange={(e) => setCollegeOrCompany(e.target.value)}
                      placeholder="e.g. OUTR, KIIT, SOA, Infosys"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#fbfaf7] border border-black/[0.1] text-sm focus:outline-none focus:border-[#0f0f0e]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0f0f0e] mb-1">Attendance Mode *</label>
                  <select
                    value={mode}
                    onChange={(e) => setMode(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#fbfaf7] border border-black/[0.1] text-sm focus:outline-none focus:border-[#0f0f0e]"
                  >
                    <option value="In-Person (Bhubaneswar)">In-Person at OIAI Innovation Center (Bhubaneswar)</option>
                    <option value="Virtual Live Stream">Virtual Live Stream (Interactive Zoom / YouTube)</option>
                  </select>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full h-12 rounded-xl bg-[#0f0f0e] text-white font-['Archivo',sans-serif] font-bold text-sm hover:bg-[#252525] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-white" />
                    <span>Register Now</span>
                  </button>
                  <p className="text-[11px] text-center text-[#62615d] mt-2 font-mono">
                    Free workshop registration. Certificates are dispatched post-session attendance.
                  </p>
                </div>
              </form>
            )}

          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
