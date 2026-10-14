"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  BookOpen, 
  Search, 
  Tag, 
  Clock, 
  User, 
  ArrowRight, 
  Sparkles,
  TrendingUp,
  Cpu,
  Bot
} from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  featured?: boolean;
}

const BLOG_CATEGORIES = [
  "All",
  "Artificial Intelligence",
  "Generative AI",
  "AI Agents",
  "Machine Learning",
  "Data Science",
  "AI Careers",
  "AI Tools",
  "Prompt Engineering",
  "AI Automation",
  "AI Jobs",
  "AI News",
  "Student Resources",
] as const;

const BLOG_POSTS: BlogPost[] = [
  {
    id: "how-to-become-ai-engineer",
    title: "How to Become an AI Engineer in India: Complete 2026 Career Roadmap",
    excerpt: "Step-by-step technical guide covering math, Python, PyTorch, foundation models, capstone portfolios, and salary trajectories in Bhubaneswar and Bengaluru.",
    category: "AI Careers",
    readTime: "8 Min Read",
    author: "Dr. Ansuman Jena",
    date: "October 10, 2026",
    featured: true,
  },
  {
    id: "rag-vs-finetuning",
    title: "RAG vs. Fine-Tuning: When to Use Which for Enterprise GenAI Systems",
    excerpt: "An architectural deep-dive into latency, cost per token, domain adaptation, and vector retrieval accuracy benchmarks on Llama 3.",
    category: "Generative AI",
    readTime: "6 Min Read",
    author: "Swagatika Ray",
    date: "October 6, 2026",
    featured: true,
  },
  {
    id: "langgraph-agent-swarms",
    title: "Orchestrating Multi-Agent Swarms with LangGraph and State Machines",
    excerpt: "How to build autonomous task-routing loops, persistent memory caches with Redis, and human-in-the-loop validation pipelines.",
    category: "AI Agents",
    readTime: "7 Min Read",
    author: "Prateek Mohanty",
    date: "September 28, 2026",
  },
  {
    id: "prompt-engineering-protocols",
    title: "10 Structured Prompting Protocols Every AI Developer Must Master",
    excerpt: "Chain-of-Thought, ReAct, System Instructions, JSON Schema output enforcement, and defending against indirect prompt injection.",
    category: "Prompt Engineering",
    readTime: "5 Min Read",
    author: "Swagatika Ray",
    date: "September 22, 2026",
  },
  {
    id: "n8n-enterprise-automation",
    title: "Automating Enterprise Workflows: Combining n8n with Function-Calling LLMs",
    excerpt: "Connect external CRMs, invoice OCR engines, and automated email responses without writing hundreds of lines of fragile glue code.",
    category: "AI Automation",
    readTime: "6 Min Read",
    author: "Prateek Mohanty",
    date: "September 15, 2026",
  },
  {
    id: "ai-jobs-odisha-india",
    title: "AI Job Market Trends in Odisha & India: Required Skills and Packages",
    excerpt: "Analyzing 1,500+ recent hiring postings for AI Engineer, ML Specialist, and Prompt Ops roles across tier-1 and tier-2 Indian tech hubs.",
    category: "AI Jobs",
    readTime: "5 Min Read",
    author: "OIAI Career Placement Cell",
    date: "September 8, 2026",
  },
  {
    id: "pytorch-from-scratch-guide",
    title: "The B.Tech Student's Guide to Mastering PyTorch & Machine Learning",
    excerpt: "How to set up CUDA drivers, understand autograd tensor mechanics, and build clean neural network architectures without getting lost in math.",
    category: "Student Resources",
    readTime: "9 Min Read",
    author: "Dr. Manoj Patra",
    date: "September 1, 2026",
  },
  {
    id: "top-ai-tools-2026",
    title: "Top 12 Modern AI Developer Tools You Need in Your Terminal Today",
    excerpt: "From vLLM, TensorRT-LLM, and Ollama to LangSmith, Weights & Biases, and pgvector: the essential modern AI stack reviewed.",
    category: "AI Tools",
    readTime: "6 Min Read",
    author: "Prateek Mohanty",
    date: "August 24, 2026",
  },
  {
    id: "frontier-news-q3",
    title: "AI News Roundup: Open-Weights Frontiers, Small Language Models & Edge AI",
    excerpt: "Key industry breakthroughs from Q3 2026: Llama 3.3, multi-token prediction algorithms, and next-gen robotic perception hardware.",
    category: "AI News",
    readTime: "4 Min Read",
    author: "OIAI Editorial Squad",
    date: "August 18, 2026",
  },
];

export default function BlogHubPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCat = selectedCategory === "All" || post.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q ||
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.author.toLowerCase().includes(q);

    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f5f4ef] text-[#0f0f0e] flex flex-col antialiased">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-36 pb-20">
        
        {/* Header Hero */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.05] border border-black/[0.08] text-xs font-mono font-semibold uppercase tracking-wider text-[#0f0f0e] mb-4">
            <BookOpen className="w-3.5 h-3.5 text-[#ef5d44]" />
            <span>AI Knowledge Hub &amp; Publications • Item 23</span>
          </div>

          <h1 className="font-['Archivo',sans-serif] text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0f0f0e]">
            OIAI Knowledge Hub &amp; AI Blog
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#62615d] max-w-3xl mx-auto leading-relaxed">
            Curated technical guides, career strategies, algorithmic tutorials, and industry research authored by OIAI faculty and fellows across 12 disciplines.
          </p>
        </div>

        {/* Filter Strip with 12 Master Categories */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="bg-white rounded-2xl border border-black/[0.08] p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Pills (12 Categories) */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar w-full md:w-auto py-1">
              {BLOG_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#0f0f0e] text-white font-bold shadow-xs"
                      : "bg-[#f5f4ef] text-[#62615d] hover:text-[#0f0f0e] hover:bg-black/[0.05]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search className="w-4 h-4 text-[#62615d] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles or authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#f5f4ef] border border-black/[0.08] text-xs font-mono focus:outline-none focus:border-[#0f0f0e]"
              />
            </div>

          </div>

          <p className="text-xs font-mono text-[#62615d] mt-3 px-2">
            Showing <strong>{filteredPosts.length}</strong> of {BLOG_POSTS.length} Peer-Reviewed Articles in Category: <strong>{selectedCategory}</strong>
          </p>
        </div>

        {/* Articles Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="rounded-3xl bg-white border border-black/[0.08] p-6 sm:p-8 shadow-md hover:border-black/25 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#4338ca]/10 text-[#4338ca] border border-[#4338ca]/20">
                      {post.category}
                    </span>
                    <span className="text-xs font-mono text-[#62615d] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-['Archivo',sans-serif] text-xl font-bold text-[#0f0f0e] leading-snug hover:text-[#4338ca] transition-colors">
                    {post.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-[#62615d] leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center justify-between">
                  <div className="text-xs font-mono text-[#0f0f0e]">
                    <span className="block font-bold">{post.author}</span>
                    <span className="text-[#62615d] text-[11px]">{post.date}</span>
                  </div>

                  <a
                    href={`/career-roadmap`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#4338ca] hover:underline"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
