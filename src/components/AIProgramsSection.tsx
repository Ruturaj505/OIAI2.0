"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Clock,
  Laptop,
  BarChart,
  Cpu,
  Layers,
  Award,
  Briefcase,
  TrendingUp,
  CreditCard,
  Calendar,
  ArrowRight,
  CheckCircle2,
  X,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Zap,
  Users,
  Code2,
  Bot,
  BrainCircuit,
  Eye,
  Database,
  Terminal,
  Workflow
} from "lucide-react";

export interface ProgramItem {
  id: string;
  name: string;
  category: "genai" | "ml" | "datascience" | "vision" | "automation" | "fullstack";
  badge: string;
  badgeColor: string;
  duration: string;
  learningMode: string;
  skillLevel: "Beginner" | "Intermediate" | "Advanced" | "Beginner to Advanced" | "All Levels";
  description: string;
  keyTechnologies: string[];
  projects: string[];
  certification: string;
  internship: string;
  careerOutcomes: {
    roles: string[];
    salaryRange: string;
  };
  fees: {
    total: string;
    emi: string;
    earlyBirdDiscount?: string;
  };
  nextBatch: {
    date: string;
    schedule: string;
    seatsLeft: number;
  };
  syllabusWeeks?: {
    week: string;
    title: string;
    description: string;
  }[];
}

const AI_PROGRAMS: ProgramItem[] = [
  {
    id: "genai-agents",
    name: "Generative AI & AI Agents",
    category: "genai",
    badge: "Most Popular • Flagship",
    badgeColor: "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-400/40 text-cyan-300",
    duration: "3 / 6 Months (Fast-Track / Deep Cohort)",
    learningMode: "Live Online + Bhubaneswar In-Campus Hybrid",
    skillLevel: "Intermediate",
    description:
      "Master modern foundation models from first principles to production orchestration. Build autonomous agent systems, multimodal RAG pipelines, fine-tuned open weights, and enterprise-grade LLM tooling.",
    keyTechnologies: [
      "LLMs (Llama 3.3, Mistral, GPT-4o)",
      "Prompt Engineering & CoT",
      "RAG (Vector DBs, Milvus, Hybrid Search)",
      "AI Agents (LangGraph, CrewAI, AutoGen)",
      "LangChain & LlamaIndex",
      "Workflow Automation (n8n, Make)",
      "Function Calling & Tool APIs",
      "Production AI Workflows & vLLM"
    ],
    projects: [
      "Autonomous Multi-Agent Enterprise Research & Executive Report System with Tool Calling",
      "Production Multimodal RAG with Milvus, Hybrid Dense-Sparse Retrieval & Guardrails",
      "Voice-to-Action Autonomous Real-Time Customer Operations Agent"
    ],
    certification: "OIAI Certified Generative AI & Autonomous Agent Architect (Verifiable Credential)",
    internship: "Guaranteed 2-Month Live Industry Internship with Bhubaneswar & Bengaluru partner startups",
    careerOutcomes: {
      roles: ["Generative AI Developer", "AI Agent Engineer", "Prompt Architect", "LLM Solutions Consultant"],
      salaryRange: "₹12 LPA – ₹26 LPA"
    },
    fees: {
      total: "₹34,999",
      emi: "From ₹2,916/month (No-Cost EMI available)",
      earlyBirdDiscount: "20% Off for next cohort"
    },
    nextBatch: {
      date: "November 24, 2025",
      schedule: "Weekend Cohort (Sat & Sun 10 AM – 1:30 PM)",
      seatsLeft: 5
    },
    syllabusWeeks: [
      {
        week: "Month 1",
        title: "Foundation Models, Prompt Engineering & API Architecture",
        description: "Transformer mechanics, tokenization, temperature, structured JSON output, few-shot prompts, and chain-of-thought paradigms."
      },
      {
        week: "Month 2",
        title: "Enterprise RAG & Hybrid Vector Search Systems",
        description: "Chunking strategies, dense/sparse embeddings, reranking, hybrid search, semantic caching, and hallucination guardrails."
      },
      {
        week: "Month 3",
        title: "Autonomous AI Agents & Multi-Agent Orchestration",
        description: "LangGraph, CrewAI, cyclic graphs, memory persistence, tool execution, human-in-the-loop validation, and API integrations."
      },
      {
        week: "Month 4-6",
        title: "Fine-Tuning, vLLM Deployment & 2-Month Industry Internship",
        description: "LoRA/QLoRA parameter-efficient fine-tuning, quantization, vLLM high-throughput serving, and guaranteed live internship placement."
      }
    ]
  },
  {
    id: "machine-learning-deep-learning",
    name: "Applied Machine Learning & Deep Learning",
    category: "ml",
    badge: "High Industry Demand",
    badgeColor: "bg-indigo-500/20 border-indigo-400/40 text-indigo-300",
    duration: "4 / 6 Months",
    learningMode: "Live Interactive Cohort + Cloud GPU Labs",
    skillLevel: "Beginner to Advanced",
    description:
      "A rigorous, mathematically grounded program taking you from core statistical learning to modern deep neural networks, transformer architectures, and scalable model optimization in PyTorch.",
    keyTechnologies: [
      "PyTorch & TensorFlow",
      "Supervised & Unsupervised ML",
      "Deep Neural Networks & Backprop",
      "Transformers & Self-Attention",
      "Scikit-Learn, NumPy & SciPy",
      "Feature Engineering & Pipelines",
      "LoRA / QLoRA Fine-Tuning",
      "Hyperparameter Tuning (Optuna)"
    ],
    projects: [
      "End-to-End Real-Time Predictive Health Diagnostics & Telemetry Pipeline",
      "Custom Transformer Encoder-Decoder Architecture built from scratch in PyTorch",
      "Large-Scale Credit Fraud Detection Engine with Anomaly Detection & Graph Features"
    ],
    certification: "OIAI Certified Deep Learning & Applied Machine Learning Practitioner",
    internship: "Guaranteed 2-Month Live Research & Development Internship with AI Research Labs",
    careerOutcomes: {
      roles: ["Machine Learning Engineer", "Applied AI Scientist", "Deep Learning Specialist", "Algorithm Developer"],
      salaryRange: "₹10 LPA – ₹24 LPA"
    },
    fees: {
      total: "₹32,999",
      emi: "From ₹2,749/month",
      earlyBirdDiscount: "Scholarships up to ₹6,000 available"
    },
    nextBatch: {
      date: "December 1, 2025",
      schedule: "Weekday Evening (Mon, Wed, Fri 7:30 PM – 9:30 PM)",
      seatsLeft: 7
    },
    syllabusWeeks: [
      {
        week: "Month 1",
        title: "Mathematics for ML & Classical Machine Learning",
        description: "Linear algebra, multivariable calculus, probability, regression, classification, regularized ensembles, and SVMs."
      },
      {
        week: "Month 2",
        title: "Deep Neural Networks from Scratch in PyTorch",
        description: "Tensors, autograd, forward-backward propagation, loss landscapes, optimizers (Adam, SGD, AdamW), and regularization."
      },
      {
        week: "Month 3",
        title: "Convolutional & Sequence Models to Transformers",
        description: "CNNs for image processing, RNN/LSTM sequences, self-attention mechanisms, and building miniature BERT architectures."
      },
      {
        week: "Month 4-6",
        title: "Production Deployment & Live R&D Capstone Internship",
        description: "ONNX runtime, model quantization, containerization with Docker, and 2-month dedicated capstone internship."
      }
    ]
  },
  {
    id: "data-science-ai-analytics",
    name: "Data Science & AI Analytics",
    category: "datascience",
    badge: "Career Switcher Favorite",
    badgeColor: "bg-emerald-500/20 border-emerald-400/40 text-emerald-300",
    duration: "3 / 6 Months",
    learningMode: "Hybrid (Classroom Labs + Online Sandboxes)",
    skillLevel: "Beginner",
    description:
      "Transform raw enterprise data into actionable predictive insights and intelligent automated dashboards. Combines statistical rigors, modern Python, SQL, and LLM-augmented data intelligence.",
    keyTechnologies: [
      "Advanced Python, SQL & Polars",
      "Statistical Inference & A/B Testing",
      "Pandas, NumPy, Matplotlib & Seaborn",
      "Tableau & PowerBI Dashboards",
      "Predictive Modeling & Scikit-Learn",
      "Big Data & DuckDB / Apache Arrow",
      "LLM-Driven Data Analysis (PandasAI)",
      "Automated Executive Reporting"
    ],
    projects: [
      "Multi-Market Algorithmic Sentiment & Macro-Economic Predictive Signal Engine",
      "Enterprise Customer Churn Forecaster with LTV Optimization & Causal Inference",
      "AI-Powered Interactive Financial Analytics Dashboard with Automated Anomaly Alerts"
    ],
    certification: "OIAI Certified Data Science & Business Intelligence Specialist",
    internship: "Guaranteed 2-Month Corporate Analytics Internship with Enterprise Datasets",
    careerOutcomes: {
      roles: ["Data Scientist", "AI Analytics Consultant", "Quantitative Data Analyst", "BI Solutions Engineer"],
      salaryRange: "₹8 LPA – ₹18 LPA"
    },
    fees: {
      total: "₹29,999",
      emi: "From ₹2,499/month",
      earlyBirdDiscount: "Special Student Discount: 15% off with ID"
    },
    nextBatch: {
      date: "November 30, 2025",
      schedule: "Weekend Cohort (Sat & Sun 2:00 PM – 5:30 PM)",
      seatsLeft: 8
    },
    syllabusWeeks: [
      {
        week: "Month 1",
        title: "Data Manipulation, Vectorized Python & Advanced SQL",
        description: "Complex window functions, CTEs, relational modeling, exploratory data analysis with Pandas & Polars."
      },
      {
        week: "Month 2",
        title: "Statistical Modeling, Hypothesis Testing & Experimentation",
        description: "Bayesian probability, confidence intervals, A/B testing methodologies, and feature selection."
      },
      {
        week: "Month 3",
        title: "Applied Machine Learning & Predictive Analytics",
        description: "Regression, random forests, XGBoost, clustering, time-series forecasting, and model explainability (SHAP)."
      },
      {
        week: "Month 4-6",
        title: "Business Intelligence Dashboards & Corporate Capstone Internship",
        description: "Interactive dashboard creation in PowerBI/Tableau and live corporate analytics project deployment."
      }
    ]
  },
  {
    id: "computer-vision-edge-ai",
    name: "Computer Vision & Edge AI",
    category: "vision",
    badge: "Hardware & Edge Labs",
    badgeColor: "bg-sky-500/20 border-sky-400/40 text-sky-300",
    duration: "3 / 5 Months",
    learningMode: "Live Online + Hardware Sandbox Labs",
    skillLevel: "Intermediate",
    description:
      "Build real-time perception systems for robotics, autonomous vehicles, industrial inspection, and edge hardware using Vision Transformers, YOLOv10, Segment Anything (SAM-2), and TensorRT.",
    keyTechnologies: [
      "OpenCV & PyTorch Vision",
      "YOLOv10 Real-Time Object Detection",
      "Vision Transformers (ViT & Swin)",
      "Segment Anything Model (SAM-2)",
      "TensorRT & NVIDIA Jetson Nano/Orin",
      "Multimodal Vision-Language (CLIP)",
      "Video Object Tracking (DeepSORT)",
      "Edge Quantization & INT8 Pruning"
    ],
    projects: [
      "Edge-Deployed Autonomous Manufacturing Defect Detection System with 60 FPS on Jetson",
      "Multimodal Vision-Language Medical Diagnosis Assistant with Visual Grounding",
      "Intelligent Traffic & Pedestrian Tracking System with Density Flow Analysis"
    ],
    certification: "OIAI Certified Computer Vision & Edge AI Systems Engineer",
    internship: "Guaranteed 2-Month Live Computer Vision Capstone Internship with Robotics & Smart City Partners",
    careerOutcomes: {
      roles: ["Computer Vision Engineer", "Edge AI Developer", "Perception Engineer", "Robotics AI Specialist"],
      salaryRange: "₹11 LPA – ₹25 LPA"
    },
    fees: {
      total: "₹34,999",
      emi: "From ₹2,916/month",
      earlyBirdDiscount: "Includes NVIDIA Jetson hardware simulation access"
    },
    nextBatch: {
      date: "December 8, 2025",
      schedule: "Weekend Cohort (Sat & Sun 11 AM – 2:30 PM)",
      seatsLeft: 6
    },
    syllabusWeeks: [
      {
        week: "Month 1",
        title: "Image Processing, Geometry & Convolutional Backbones",
        description: "Filtering, affine transforms, contours, feature descriptors, CNN architectures, and transfer learning in PyTorch."
      },
      {
        week: "Month 2",
        title: "Object Detection, Instance Segmentation & Keypoint Estimation",
        description: "Two-stage vs one-stage detectors, YOLOv10 training, Anchor-free detection, Mask R-CNN, and SAM-2 integration."
      },
      {
        week: "Month 3",
        title: "Vision Transformers, Multimodal CLIP & Video Tracking",
        description: "Self-attention in vision, patch embeddings, zero-shot classification with CLIP, and optical flow tracking."
      },
      {
        week: "Month 4-5",
        title: "TensorRT Edge Optimization & Guaranteed Vision Internship",
        description: "Graph optimization, FP16/INT8 calibration, NVIDIA Jetson deployment, and capstone project defense."
      }
    ]
  },
  {
    id: "ai-automation-workflows",
    name: "AI Automation & Enterprise Workflows",
    category: "automation",
    badge: "Rapid ROI • Zero-to-One",
    badgeColor: "bg-amber-500/20 border-amber-400/40 text-amber-300",
    duration: "2 / 4 Months",
    learningMode: "Live Cohort + Low-Code/Python Hybrid Labs",
    skillLevel: "All Levels",
    description:
      "Automate complex enterprise business operations using autonomous agents, API integrations, document intelligence, and no-code/low-code AI pipelines without requiring computer science degrees.",
    keyTechnologies: [
      "CrewAI & AutoGen Workflows",
      "Make.com, n8n & Zapier Enterprise",
      "OpenAI Assistants API & Claude 3.5",
      "Webhooks & RESTful Microservices",
      "Vector DBs (Chroma & Pinecone)",
      "Document OCR & Vision Extraction",
      "Robotic Process Automation (RPA)",
      "Voice AI (Vapi, ElevenLabs, Twilio)"
    ],
    projects: [
      "Autonomous Multi-Agent CRM Sales Lead Enrichment & Personalized Video Outreach Pipeline",
      "Automated Legal Contract Reviewer & Compliance Extractor with Discrepancy Alerts",
      "Autonomous Multi-Channel Customer Support Voice & Chat Agent with Human Escalation"
    ],
    certification: "OIAI Certified AI Automation & Enterprise Workflow Architect",
    internship: "Guaranteed 2-Month Enterprise AI Automation Internship with MSME & Startup clients",
    careerOutcomes: {
      roles: ["AI Automation Specialist", "Enterprise Workflow Consultant", "AI Solutions Engineer", "Fractional AI Officer"],
      salaryRange: "₹8 LPA – ₹19 LPA"
    },
    fees: {
      total: "₹24,999",
      emi: "From ₹2,083/month",
      earlyBirdDiscount: "Instant ₹3,000 Early Bird Credit"
    },
    nextBatch: {
      date: "November 26, 2025",
      schedule: "Evening Cohort (Tue, Thu, Sat 8:00 PM – 9:30 PM)",
      seatsLeft: 4
    },
    syllabusWeeks: [
      {
        week: "Weeks 1-2",
        title: "Foundation of Modern Enterprise AI Automation",
        description: "API tokens, webhooks, JSON schemas, prompt engineering for deterministic JSON extraction, and n8n/Make architecture."
      },
      {
        week: "Weeks 3-4",
        title: "Document Intelligence, OCR & Multimodal Parsing",
        description: "Parsing PDFs, invoices, and contracts using Vision LLMs, LangChain loaders, and automated structured databases."
      },
      {
        week: "Weeks 5-8",
        title: "Multi-Agent Automation & Voice Agents",
        description: "CrewAI autonomous workflows, memory states, tool calling, Twilio/Vapi voice bots, and automated database sync."
      },
      {
        week: "Weeks 9-16",
        title: "Client Deployment & Guaranteed 2-Month Internship",
        description: "Deploying client automations, security guardrails, rate limiting, and working on live client automation projects."
      }
    ]
  },
  {
    id: "fullstack-ai-mlops",
    name: "Full-Stack AI Engineering & MLOps",
    category: "fullstack",
    badge: "Highest Salary Potential",
    badgeColor: "bg-purple-500/20 border-purple-400/40 text-purple-300",
    duration: "4 / 6 Months",
    learningMode: "Live Production Systems Cohort",
    skillLevel: "Advanced",
    description:
      "Bridge the divide between experimental Jupyter notebooks and robust, fault-tolerant production infrastructure. Learn distributed training, high-throughput vLLM serving, Docker, Kubernetes, and automated CI/CD for AI.",
    keyTechnologies: [
      "FastAPI & Next.js AI SDK",
      "Docker & Kubernetes for AI",
      "vLLM & Triton Inference Server",
      "MLflow, DVC & Weights & Biases",
      "CI/CD for ML (GitHub Actions)",
      "Ray Distributed Computing",
      "AWS Bedrock & Cloud GPUs",
      "GPU Profiling & TensorRT-LLM"
    ],
    projects: [
      "High-Throughput Multi-Tenant LLM Inference Cluster with Autoscaling & Token Streaming",
      "Full-Stack AI SaaS Platform with Vector Search, Stripe Billing, and Rate Limiting",
      "Automated Continuous Training & Canary Deployment Pipeline for Foundation Models"
    ],
    certification: "OIAI Certified Full-Stack AI & MLOps Systems Architect",
    internship: "Guaranteed 2-Month Production AI Engineering Internship with Venture-Backed Startups",
    careerOutcomes: {
      roles: ["Full-Stack AI Engineer", "MLOps Engineer", "AI Infrastructure Architect", "Principal AI Platform Lead"],
      salaryRange: "₹14 LPA – ₹30 LPA"
    },
    fees: {
      total: "₹39,999",
      emi: "From ₹3,333/month",
      earlyBirdDiscount: "Access to High-Performance NVIDIA A100 GPU Cluster"
    },
    nextBatch: {
      date: "December 5, 2025",
      schedule: "Weekend Cohort (Sat & Sun 9:30 AM – 1:00 PM)",
      seatsLeft: 4
    },
    syllabusWeeks: [
      {
        week: "Month 1",
        title: "FastAPI, Modern Asynchronous Backend & Next.js AI SDK",
        description: "Server-Sent Events (SSE) token streaming, async Python, webhooks, auth, and stateful conversational backends."
      },
      {
        week: "Month 2",
        title: "Containerization, Cloud Infrastructure & GPU Virtualization",
        description: "Docker multi-stage builds for PyTorch, NVIDIA container toolkit, Kubernetes pods, and autoscaling GPU nodes."
      },
      {
        week: "Month 3",
        title: "vLLM, Triton Server & Distributed Model Serving",
        description: "PagedAttention mechanics, continuous batching, tensor parallelism with Ray, and low-latency inference benchmarking."
      },
      {
        week: "Month 4-6",
        title: "Automated MLOps Pipelines & Live Production Internship",
        description: "CI/CD pipelines, model registry with MLflow, data versioning with DVC, monitoring data drift, and live internship."
      }
    ]
  }
];

interface AIProgramsSectionProps {
  onOpenEnroll?: (programName: string) => void;
}

export default function AIProgramsSection({ onOpenEnroll }: AIProgramsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalProgram, setActiveModalProgram] = useState<ProgramItem | null>(null);

  // Prevent background scrolling when modal is open
  React.useEffect(() => {
    if (activeModalProgram) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModalProgram]);

  const categories = [
    { id: "all", label: "All Programs" },
    { id: "genai", label: "Generative AI & Agents" },
    { id: "ml", label: "Machine Learning" },
    { id: "datascience", label: "Data Science" },
    { id: "vision", label: "Computer Vision" },
    { id: "automation", label: "AI Automation" },
    { id: "fullstack", label: "Full-Stack AI & MLOps" }
  ];

  const filteredPrograms =
    selectedCategory === "all"
      ? AI_PROGRAMS
      : AI_PROGRAMS.filter((p) => p.category === selectedCategory);

  const handleEnrollClick = (progName: string) => {
    if (activeModalProgram) {
      setActiveModalProgram(null);
    }
    if (onOpenEnroll) {
      onOpenEnroll(progName);
    } else {
      const el = document.getElementById("enroll-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="ai-programs"
      className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-indigo-600/10 via-cyan-500/10 to-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-pulse" />
          <span>Industry-Engineered Cohorts • 2025 Edition</span>
        </div>

        <h2 className="section-heading text-slate-900">
          AI Programs & Specialized Tracks
        </h2>

        <p className="mt-4 body-paragraph text-slate-600">
          Production-grade engineering curricula with guaranteed live industry internships, high-compute GPU labs,
          and verifiable credentials designed for students, developers, and leaders.
        </p>

        {/* Category Filter Chips: smooth horizontal swipe on mobile, centered wrapped on desktop */}
        <div className="flex items-center gap-2 mt-6 sm:mt-8 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`shrink-0 px-3.5 py-2 sm:px-4 sm:py-2 rounded-xl button-typography text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#1E1B4B] text-white shadow-md shadow-indigo-900/20 ring-2 ring-indigo-500/30 scale-105 font-bold"
                    : "bg-[#E8EDF5] text-slate-700 border border-[#CBD5E1] hover:border-indigo-400 hover:bg-[#E2E8F0]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Course Finder Callout Bridge */}
        <div className="mt-6 sm:mt-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-indigo-50 via-cyan-50 to-purple-50 border border-indigo-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-indigo-900/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-900">
                Not sure which program fits your background?
              </div>
              <div className="text-xs sm:text-sm text-slate-600">
                Answer 3 quick questions in our interactive <span className="font-semibold text-indigo-950">AI Course Finder</span> to receive a custom syllabus match in 60 seconds.
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById("course-finder");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto px-5 py-3 sm:py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white button-typography text-xs sm:text-sm flex items-center justify-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Launch Course Finder</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Program Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
        {filteredPrograms.map((prog) => (
          <div
            key={prog.id}
            id={`program-card-${prog.id}`}
            className="group rounded-2xl sm:rounded-3xl bg-[#E8EDF5] border border-[#CBD5E1] hover:border-indigo-400 p-4.5 sm:p-6 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl relative overflow-hidden"
          >
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-600 opacity-80 group-hover:opacity-100 transition-opacity" />

            {/* Program Header Details */}
            <div>
              {/* Badge & Skill Level Row */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3 sm:mb-4">
                <span
                  className={`inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full border ${prog.badgeColor}`}
                >
                  <Sparkles className="w-3 h-3 shrink-0" />
                  {prog.badge}
                </span>

                <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-[#CBD5E1]">
                  <BarChart className="w-3 h-3 text-indigo-600" />
                  Skill Level: {prog.skillLevel}
                </span>
              </div>

              {/* 1. Program Name */}
              <h3 className="card-heading text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 group-hover:text-indigo-950 transition-colors tracking-tight">
                {prog.name}
              </h3>

              <p className="mt-2 body-paragraph text-xs sm:text-sm text-slate-600 line-clamp-2">
                {prog.description}
              </p>

              {/* 2 & 3. Duration & Learning Mode Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-4 sm:mt-5 p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-slate-150">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-slate-400">Duration</div>
                    <div className="text-xs sm:text-sm font-bold text-slate-800">{prog.duration}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                    <Laptop className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-slate-400">Learning Mode</div>
                    <div className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">{prog.learningMode}</div>
                  </div>
                </div>
              </div>

              {/* 5. Key Technologies (Learn: ...) */}
              <div className="mt-4 sm:mt-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-indigo-600" />
                    Learn (Key Technologies):
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono text-slate-400">
                    {prog.keyTechnologies.length} core stacks
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {prog.keyTechnologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] sm:text-xs font-mono px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200/80 hover:border-indigo-300 hover:bg-indigo-50/50 hover:text-indigo-900 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 6. Projects */}
              <div className="mt-4 sm:mt-5 p-3.5 sm:p-4 rounded-2xl bg-indigo-50/40 border border-indigo-100/80">
                <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-indigo-950 mb-2 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-indigo-600" />
                  Production Projects:
                </div>
                <ul className="space-y-1.5">
                  {prog.projects.map((proj, pIdx) => (
                    <li key={pIdx} className="text-xs text-slate-700 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{proj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 7 & 8. Certification & Internship Badges */}
              <div className="space-y-2 mt-4 sm:mt-5">
                {/* 8. Internship Availability */}
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50/80 border border-emerald-200/90 text-emerald-950">
                  <Briefcase className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-emerald-800 block">
                      Internship Availability:
                    </span>
                    <span className="text-xs font-medium text-emerald-900 leading-snug">
                      {prog.internship}
                    </span>
                  </div>
                </div>

                {/* 7. Certification */}
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800">
                  <Award className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 block">
                      Certification:
                    </span>
                    <span className="text-xs font-medium text-slate-800 leading-snug">
                      {prog.certification}
                    </span>
                  </div>
                </div>
              </div>

              {/* 9. Career Outcomes */}
              <div className="mt-4 sm:mt-5 p-3 sm:p-3.5 rounded-xl bg-slate-50/80 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
                <div>
                  <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-indigo-600" />
                    Career Outcomes
                  </div>
                  <div className="text-xs font-semibold text-slate-800 mt-0.5">
                    {prog.careerOutcomes.roles.slice(0, 2).join(" • ")}
                  </div>
                </div>
                <div className="sm:text-right shrink-0">
                  <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-slate-400">Compensation</div>
                  <div className="text-xs sm:text-sm font-extrabold text-emerald-700">
                    {prog.careerOutcomes.salaryRange}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card Section: 10. Fees, 11. Next Batch, 12. CTA */}
            <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-slate-150">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-4 sm:mb-5">
                {/* 10. Fees */}
                <div>
                  <div className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <CreditCard className="w-3.5 h-3.5 text-indigo-600" />
                    Program Tuition & Fees
                  </div>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      {prog.fees.total}
                    </span>
                    <span className="text-xs text-slate-500">
                      ({prog.fees.emi})
                    </span>
                  </div>
                  {prog.fees.earlyBirdDiscount && (
                    <div className="text-[11px] font-medium text-emerald-700 mt-0.5">
                      ★ {prog.fees.earlyBirdDiscount}
                    </div>
                  )}
                </div>

                {/* 11. Next Batch */}
                <div className="sm:text-right">
                  <div className="text-xs font-mono text-slate-400 flex items-center sm:justify-end gap-1">
                    <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                    Next Batch
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">
                    {prog.nextBatch.date}
                  </div>
                  <div className="text-[11px] font-mono text-amber-600 font-semibold mt-0.5">
                    ● Only {prog.nextBatch.seatsLeft} seats remaining
                  </div>
                </div>
              </div>

              {/* 12. CTAs: "View Program" & "Enroll Now" */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setActiveModalProgram(prog)}
                  className="w-full py-3 sm:py-2.5 px-4 rounded-xl border border-slate-300 hover:border-indigo-500 bg-white hover:bg-indigo-50/40 text-slate-800 hover:text-indigo-900 text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>View Program</span>
                  <ExternalLink className="w-3.5 h-3.5 text-indigo-600" />
                </button>

                <button
                  type="button"
                  onClick={() => handleEnrollClick(prog.name)}
                  className="w-full py-3 sm:py-2.5 px-4 rounded-xl bg-[#1E1B4B] hover:bg-[#2d2870] text-white text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-indigo-950/20 hover:shadow-indigo-900/30"
                >
                  <span>Enroll in Program</span>
                  <ArrowRight className="w-3.5 h-3.5 text-indigo-300" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Program Deep Dive Modal */}
      {activeModalProgram && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 overflow-y-auto"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
            onClick={() => setActiveModalProgram(null)}
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-3xl rounded-t-[28px] sm:rounded-3xl bg-white border border-slate-200 shadow-2xl p-5 sm:p-8 z-10 my-0 sm:my-8 max-h-[92vh] sm:max-h-[90vh] overflow-y-auto pr-12 sm:pr-8">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProgram(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700">
                {activeModalProgram.badge}
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                {activeModalProgram.skillLevel} Level
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
                {activeModalProgram.duration}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
              {activeModalProgram.name}
            </h3>

            <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
              {activeModalProgram.description}
            </p>

            {/* Key Specs Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5 sm:mt-6 p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div>
                <span className="text-[10px] sm:text-[11px] font-mono uppercase text-slate-400 block">Learning Format</span>
                <span className="text-xs sm:text-sm font-bold text-slate-800">{activeModalProgram.learningMode}</span>
              </div>
              <div>
                <span className="text-[10px] sm:text-[11px] font-mono uppercase text-slate-400 block">Next Cohort Start</span>
                <span className="text-xs sm:text-sm font-bold text-slate-800">{activeModalProgram.nextBatch.date} ({activeModalProgram.nextBatch.schedule})</span>
              </div>
              <div>
                <span className="text-[10px] sm:text-[11px] font-mono uppercase text-slate-400 block">Tuition & EMI</span>
                <span className="text-xs sm:text-sm font-bold text-slate-800">{activeModalProgram.fees.total} ({activeModalProgram.fees.emi})</span>
              </div>
              <div>
                <span className="text-[10px] sm:text-[11px] font-mono uppercase text-slate-400 block">Career Compensation</span>
                <span className="text-xs sm:text-sm font-bold text-emerald-700">{activeModalProgram.careerOutcomes.salaryRange}</span>
              </div>
            </div>

            {/* Syllabus Roadmap */}
            {activeModalProgram.syllabusWeeks && (
              <div className="mt-5 sm:mt-6">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-indigo-600" />
                  Curriculum Phase Roadmap
                </h4>
                <div className="space-y-2.5 sm:space-y-3">
                  {activeModalProgram.syllabusWeeks.map((s, idx) => (
                    <div key={idx} className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] sm:text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">
                          {s.week}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-slate-800">
                          {s.title}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed pl-1">
                        {s.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Internship & Project Highlights */}
            <div className="mt-5 sm:mt-6 space-y-3">
              <div className="p-3.5 sm:p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                  Guaranteed Capstone Internship
                </span>
                <p className="text-xs sm:text-sm text-emerald-950">
                  {activeModalProgram.internship}
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-indigo-50/50 border border-indigo-100">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-950 block mb-2">
                  Production Capstone Projects
                </span>
                <ul className="space-y-1.5">
                  {activeModalProgram.projects.map((pr, pI) => (
                    <li key={pI} className="text-xs text-slate-700 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pr}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="mt-6 sm:mt-8 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
              <div>
                <span className="text-xs text-slate-500 block">Total Program Tuition</span>
                <span className="text-xl font-black text-slate-900">{activeModalProgram.fees.total}</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setActiveModalProgram(null)}
                  className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => handleEnrollClick(activeModalProgram.name)}
                  className="flex-2 sm:flex-initial px-6 py-2.5 rounded-xl bg-[#1E1B4B] hover:bg-[#2d2870] text-white text-xs sm:text-sm font-bold transition-all shadow-md shadow-indigo-950/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Apply for Next Cohort</span>
                  <ArrowRight className="w-4 h-4 text-indigo-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
