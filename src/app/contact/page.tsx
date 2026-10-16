"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  Building2,
  Calendar,
  MessageSquare
} from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [program, setProgram] = useState("Generative AI & AI Agents");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#faf9f5] text-slate-900 flex flex-col antialiased selection:bg-indigo-500/20 selection:text-indigo-900">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-36 pb-24">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <nav aria-label="Breadcrumb" className="text-xs font-mono text-slate-500 flex items-center gap-2">
            <Link href="/" className="hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-indigo-700 font-semibold">Contact</span>
          </nav>
        </div>

        {/* Page Hero */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-4 shadow-sm">
            <MessageSquare className="w-3.5 h-3.5 text-indigo-600" />
            <span>Admissions &amp; Academic Inquiries</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.08]">
            Get in Touch with OIAI Advisors
          </h1>

          <p className="mt-4 text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about program prerequisites, batch schedules, fees, or our campus facilities in Bhubaneswar?
            Our academic counselors are available to guide you.
          </p>
        </section>

        {/* Contact Grid: Details + Interactive Form */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 5 Cols: Contact Information */}
            <div className="lg:col-span-5 space-y-5">
              {/* Admissions Desk Card */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-slate-900">Direct Telephone Desks</h2>
                    <span className="text-xs text-slate-500">Mon – Sat, 9:00 AM – 7:00 PM IST</span>
                  </div>
                </div>

                <div className="space-y-3 pt-2 border-t border-slate-100">
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 block">Admissions Desk</span>
                    <a
                      href="tel:+916742913000"
                      className="text-sm sm:text-base font-bold text-indigo-700 hover:text-indigo-900 transition-colors"
                    >
                      +91 674 291-3000
                    </a>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 block">Career &amp; Placement Desk</span>
                    <a
                      href="tel:+916742913001"
                      className="text-sm sm:text-base font-bold text-indigo-700 hover:text-indigo-900 transition-colors"
                    >
                      +91 674 291-3001
                    </a>
                  </div>
                </div>
              </div>

              {/* Campus Location Card */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-slate-900">Bhubaneswar Campus</h2>
                    <span className="text-xs text-slate-500">Physical Hardware &amp; Compute Labs</span>
                  </div>
                </div>

                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-2 border-t border-slate-100">
                  <p className="font-semibold text-slate-900">Odisha Institute of Artificial Intelligence (OIAI)</p>
                  <p className="text-slate-600 mt-1">Infocity / Patia IT Tech Corridor,</p>
                  <p className="text-slate-600">Bhubaneswar, Odisha 751024, India</p>
                </div>
              </div>

              {/* Email Desks Card */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-slate-900">Official Email Contacts</h2>
                    <span className="text-xs text-slate-500">24-hour response SLA</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs sm:text-sm">
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 block">Admissions</span>
                    <a href="mailto:admissions@oiai.edu.in" className="font-semibold text-indigo-700 hover:underline">
                      admissions@oiai.edu.in
                    </a>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 block">Corporate Partnerships</span>
                    <a href="mailto:enterprise@oiai.edu.in" className="font-semibold text-indigo-700 hover:underline">
                      enterprise@oiai.edu.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Interactive Contact / Application Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm">
                <div className="mb-6">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Send an Inquiry or Schedule a Consultation
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Fill out the form below to receive a call from an academic advisor within 2 business hours.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-emerald-950">Inquiry Received Successfully!</h3>
                    <p className="text-xs sm:text-sm text-emerald-800 mt-1 max-w-md mx-auto">
                      Thank you for reaching out, {name || "there"}. An OIAI admissions counselor will contact you via WhatsApp and phone shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-5 px-5 py-2 rounded-xl bg-emerald-700 text-white text-xs font-semibold hover:bg-emerald-800 transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Subham Mohanty"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="subham@gmail.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Program of Interest *
                      </label>
                      <select
                        value={program}
                        onChange={(e) => setProgram(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition-all cursor-pointer"
                      >
                        <option>Generative AI &amp; AI Agents</option>
                        <option>Applied Machine Learning &amp; Deep Learning</option>
                        <option>Data Science &amp; AI Analytics</option>
                        <option>Computer Vision &amp; Edge AI</option>
                        <option>AI Automation &amp; Enterprise Workflows</option>
                        <option>Full-Stack AI Engineering &amp; MLOps</option>
                        <option>Corporate Training / Enterprise Consulting</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Message or Questions (Optional)
                      </label>
                      <textarea
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about your background, career goals, or any specific questions..."
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-6 rounded-xl bg-[#1E1B4B] hover:bg-[#2d2870] text-white text-sm font-bold transition-all shadow-md shadow-indigo-950/20 flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                      <Send className="w-4 h-4 text-indigo-300" />
                      <span>Submit Inquiry to Academic Desk</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
