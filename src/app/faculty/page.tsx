"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  UserCheck, 
  Award, 
  GraduationCap, 
  Briefcase, 
  BookOpen,
  FileText, 
  CheckCircle2, 
  Layers,
  Sparkles,
  ExternalLink
} from "lucide-react";

interface FacultyProfile {
  id: string;
  name: string;
  designation: string;
  avatarColor: string;
  initials: string;
  expertise: string[];
  experience: string;
  education: string;
  certifications: string[];
  industryExperience: string;
  coursesTaught: string[];
  linkedin: string;
  publications: string[];
}

const FACULTY_MEMBERS: FacultyProfile[] = [
  {
    id: "dr-ansuman-jena",
    name: "Dr. Ansuman Jena",
    designation: "Dean of AI Research & Chief Academic Officer",
    avatarColor: "bg-indigo-700 text-white",
    initials: "AJ",
    expertise: ["Transformer Mechanics", "Distributed Deep Learning", "CUDA Kernel Optimization", "Mathematical AI"],
    experience: "14+ Years in AI Research & Industrial R&D",
    education: "Ph.D. in Computer Science & Machine Learning (IIT Kharagpur) • M.Tech (NIT Rourkela)",
    certifications: ["NVIDIA Certified Deep Learning Institute (DLI) Instructor", "AWS Certified Machine Learning Specialist"],
    industryExperience: "Ex-Principal Applied Scientist at Amazon AWS • Research Staff Member at IBM India Research Labs",
    coursesTaught: ["Frontier Generative AI & Autonomous Agents", "Mathematical Foundations of Machine Learning"],
    linkedin: "https://linkedin.com/in/dr-ansuman-jena-oiai",
    publications: [
      "Low-Latency Quantization for Multi-Head Attention Mechanisms (IEEE Transactions on Neural Networks, 2024)",
      "Adaptive Learning Rate Scheduling in Extreme Scale Distributed Transformers (NeurIPS Workshop, 2023)"
    ],
  },
  {
    id: "swagatika-ray",
    name: "Swagatika Ray",
    designation: "Director of Generative AI & LLM Systems",
    avatarColor: "bg-teal-700 text-white",
    initials: "SR",
    expertise: ["Retrieval-Augmented Generation (RAG)", "LangChain / LangGraph", "Vector Databases", "Prompt Ops"],
    experience: "9+ Years in Enterprise Software & LLM Production",
    education: "M.S. in Software Systems (BITS Pilani) • B.Tech Computer Science (OUTR Bhubaneswar)",
    certifications: ["LangChain Certified Agent Developer", "Pinecone Certified Vector Master", "Google Cloud Professional ML Engineer"],
    industryExperience: "Lead AI Engineer at Silicon Valley HealthAI • Senior ML Consultant at Microsoft Partner Practice",
    coursesTaught: ["Enterprise RAG Architecture & Vector Retrieval", "Prompt Engineering & Evaluation Workflows"],
    linkedin: "https://linkedin.com/in/swagatika-ray-oiai",
    publications: [
      "Hallucination Auditing in Industrial Multi-Hop Knowledge Retrieval Pipelines (ACL 2024 Findings)",
      "Benchmarking Dense vs. Sparse Hybrid Embeddings for Clinical Schemas (EMNLP 2023)"
    ],
  },
  {
    id: "prateek-mohanty",
    name: "Prateek Mohanty",
    designation: "Head of Autonomous Agents & Systems Engineering",
    avatarColor: "bg-amber-600 text-white",
    initials: "PM",
    expertise: ["Autonomous Multi-Agent Loops", "MLOps & CI/CD", "Docker / Kubernetes for AI", "vLLM Serving"],
    experience: "11+ Years in Infrastructure & Machine Learning Operations",
    education: "B.Tech Computer Science (IIT Bhubaneswar) • Executive Business Analytics (IIM Calcutta)",
    certifications: ["Kubernetes Certified Administrator (CKA)", "NVIDIA TensorRT LLM Performance Specialist"],
    industryExperience: "Staff Infrastructure Engineer at FinTech Unicorn • Co-founder at Autonomous Agentic Studio",
    coursesTaught: ["Applied AI & Neural Infrastructure", "Production MLOps & High-Throughput Model Serving"],
    linkedin: "https://linkedin.com/in/prateek-mohanty-oiai",
    publications: [
      "Sub-100ms Inference Serving on Speculative Decoding Nodes (SysML 2024)",
      "Multi-Agent Memory Synchronization via Redis Graph Structures (ICLR Workshop 2024)"
    ],
  },
  {
    id: "dr-manoj-patra",
    name: "Dr. Manoj Patra",
    designation: "Head of Computer Vision & Edge AI",
    avatarColor: "bg-rose-700 text-white",
    initials: "MP",
    expertise: ["Vision Transformers", "YOLOv10 / Object Detection", "Jetson Edge Computing", "3D Gaussian Splatting"],
    experience: "12+ Years in Computer Vision & Robotics Perception",
    education: "Ph.D. in Computer Vision & Robotics (IIT Delhi) • B.Tech (VSSUT Burla)",
    certifications: ["NVIDIA Jetson Edge AI Specialist", "Intel OpenVINO Certified Developer"],
    industryExperience: "Computer Vision Lead at Autonomous Drone Lab • Senior Consultant at Tata Motors R&D",
    coursesTaught: ["Applied Computer Vision & Multimodal Perception", "Edge AI & Real-Time Embedded Systems"],
    linkedin: "https://linkedin.com/in/dr-manoj-patra-oiai",
    publications: [
      "Real-Time Defect Segmentation on Sub-Watt Neural Accelerators (CVPR Workshop 2024)",
      "Zero-Shot Spatial Object Detection in Harsh Industrial Environments (ECCV 2022)"
    ],
  },
];

export default function FacultyPage() {
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyProfile>(FACULTY_MEMBERS[0]);

  return (
    <div className="min-h-screen bg-[#f5f4ef] text-[#0f0f0e] flex flex-col antialiased">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-36 pb-20">
        
        {/* Header Hero */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.05] border border-black/[0.08] text-xs font-mono font-semibold uppercase tracking-wider text-[#0f0f0e] mb-4">
            <UserCheck className="w-3.5 h-3.5 text-[#ef5d44]" />
            <span>Academic Excellence &amp; E-E-A-T Verified Authority • Item 19</span>
          </div>

          <h1 className="font-['Archivo',sans-serif] text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0f0f0e]">
            Distinguished Faculty &amp; Industry Mentors
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#62615d] max-w-3xl mx-auto leading-relaxed">
            Learn directly from doctoral researchers from IITs and seasoned engineering leaders from Amazon AWS, IBM, and top AI labs.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FACULTY_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="rounded-3xl bg-white border border-black/[0.08] p-6 sm:p-8 shadow-md hover:border-black/25 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Card Header */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`w-16 h-16 rounded-2xl ${member.avatarColor} flex items-center justify-center font-['Archivo',sans-serif] font-black text-xl shrink-0 shadow-md`}>
                      {member.initials}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-['Archivo',sans-serif] font-extrabold text-xl text-[#0f0f0e] truncate">
                          {member.name}
                        </h3>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-lg bg-black/[0.05] hover:bg-[#0077b5] hover:text-white transition-colors text-[#62615d]"
                          aria-label={`${member.name} LinkedIn Profile`}
                        >
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                      </div>

                      <p className="text-xs font-mono font-semibold text-[#4338ca] mt-0.5">
                        {member.designation}
                      </p>

                      <p className="text-xs text-[#62615d] mt-1 font-mono">
                        {member.experience}
                      </p>
                    </div>
                  </div>

                  {/* Expertise Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {member.expertise.map((exp) => (
                      <span key={exp} className="px-2.5 py-1 rounded-lg bg-[#f5f4ef] text-[11px] font-mono text-[#0f0f0e] border border-black/[0.06]">
                        {exp}
                      </span>
                    ))}
                  </div>

                  {/* E-E-A-T Detailed Specification Rows */}
                  <div className="space-y-3 pt-4 border-t border-black/[0.06] text-xs text-[#333331]">
                    <div>
                      <p className="font-mono font-bold text-[#62615d] uppercase tracking-wider mb-0.5 flex items-center gap-1.5">
                        <GraduationCap className="w-3.5 h-3.5 text-[#4338ca]" />
                        <span>Education &amp; Credentials</span>
                      </p>
                      <p className="leading-relaxed">{member.education}</p>
                    </div>

                    <div>
                      <p className="font-mono font-bold text-[#62615d] uppercase tracking-wider mb-0.5 flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-[#0d9488]" />
                        <span>Industry Experience</span>
                      </p>
                      <p className="leading-relaxed">{member.industryExperience}</p>
                    </div>

                    <div>
                      <p className="font-mono font-bold text-[#62615d] uppercase tracking-wider mb-0.5 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-[#ef5d44]" />
                        <span>Professional Certifications</span>
                      </p>
                      <p className="leading-relaxed">{member.certifications.join(" • ")}</p>
                    </div>

                    <div>
                      <p className="font-mono font-bold text-[#62615d] uppercase tracking-wider mb-0.5 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-[#4338ca]" />
                        <span>Courses Taught at OIAI</span>
                      </p>
                      <p className="leading-relaxed font-semibold text-[#0f0f0e]">{member.coursesTaught.join(" • ")}</p>
                    </div>

                    <div>
                      <p className="font-mono font-bold text-[#62615d] uppercase tracking-wider mb-0.5 flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-indigo-600" />
                        <span>Notable Publications &amp; Projects</span>
                      </p>
                      <ul className="space-y-1 mt-1">
                        {member.publications.map((pub, i) => (
                          <li key={i} className="text-[11px] text-[#62615d] italic flex items-start gap-1.5">
                            <span className="text-[#0f0f0e] font-mono shrink-0">[{i + 1}]</span>
                            <span>{pub}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>

                <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono text-[#0d9488] font-bold">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Verified OIAI Mentor</span>
                  </span>
                  <a href="/#curriculum" className="text-[#4338ca] hover:underline flex items-center gap-1">
                    <span>View Courses</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
