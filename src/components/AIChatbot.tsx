"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import AIChatbotLogo from "@/components/AIChatbotLogo";
import {
  Bot,
  X,
  Send,
  Sparkles,
  RotateCcw,
  BookOpen,
  Compass,
  CreditCard,
  Briefcase,
  Calendar,
  PhoneCall,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  MessageSquare,
  HelpCircle,
  Building,
  GraduationCap,
  Users
} from "lucide-react";

interface ActionChip {
  label: string;
  action: () => void;
  icon?: React.ReactNode;
  primary?: boolean;
}

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  chips?: ActionChip[];
}

interface AIChatbotProps {
  onOpenEnroll?: (trackTitle?: string) => void;
}

const INITIAL_BUTTONS = [
  { id: "find-course", label: "Find a Course", icon: <BookOpen className="w-3.5 h-3.5 text-indigo-500" /> },
  { id: "career-guidance", label: "AI Career Guidance", icon: <Compass className="w-3.5 h-3.5 text-emerald-500" /> },
  { id: "fees", label: "Fees", icon: <CreditCard className="w-3.5 h-3.5 text-amber-500" /> },
  { id: "internship", label: "Internship", icon: <Briefcase className="w-3.5 h-3.5 text-teal-500" /> },
  { id: "workshops", label: "Upcoming Workshops", icon: <Calendar className="w-3.5 h-3.5 text-rose-500" /> },
  { id: "counsellor", label: "Talk to Counsellor", icon: <PhoneCall className="w-3.5 h-3.5 text-blue-500" /> }
];

export default function AIChatbot({ onOpenEnroll }: AIChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputQuery, setInputQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  // Initialize initial greeting
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: "welcome-1",
          sender: "bot",
          text: "Hi! I'm the OIAI AI Assistant. What would you like to explore?",
          timestamp: getCurrentTime()
        }
      ]);
    }
  }, [messages.length]);

  // Scroll to bottom of chat
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  const handleResetChat = () => {
    setMessages([
      {
        id: "welcome-" + Date.now(),
        sender: "bot",
        text: "Hi! I'm the OIAI AI Assistant. What would you like to explore?",
        timestamp: getCurrentTime()
      }
    ]);
  };

  const handleActionClick = (buttonId: string, buttonLabel: string) => {
    // 1. Append user message
    const userMsg: ChatMessage = {
      id: "user-" + Date.now(),
      sender: "user",
      text: buttonLabel,
      timestamp: getCurrentTime()
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // 2. Generate bot response with simulated typing latency
    setTimeout(() => {
      let botResponse: ChatMessage;

      switch (buttonId) {
        case "find-course":
          botResponse = {
            id: "bot-" + Date.now(),
            sender: "bot",
            text: "OIAI offers 6 specialized academic AI tracks structured around hands-on engineering:\n\n• **Generative AI & AI Agents** (3/6 mos) — LLMs, RAG, LangChain, Multi-Agent Systems\n• **Machine Learning & Deep Learning** (12-16 wks) — PyTorch, Transformers, MLOps\n• **AI Foundations & Python** (8-10 wks) — Problem spaces, search algorithms, logic & math\n• **Data Science & Advanced Analytics** (12 wks) — Predictive models, feature engineering, SQL\n• **Computer Vision & Edge AI** (12 wks) — YOLO, OpenCV, embedded AI deployment\n• **Executive AI Strategy** (Weekend format) — Enterprise GenAI roadmaps & ROI evaluation",
            timestamp: getCurrentTime(),
            chips: [
              {
                label: "View All Programs",
                action: () => {
                  setIsOpen(false);
                  const el = document.getElementById("curriculum");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                },
                icon: <BookOpen className="w-3.5 h-3.5" />,
                primary: true
              },
              {
                label: "Course Finder Quiz",
                action: () => {
                  setIsOpen(false);
                  const el = document.getElementById("course-finder");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                },
                icon: <Sparkles className="w-3.5 h-3.5" />
              },
              {
                label: "Enroll Now",
                action: () => {
                  setIsOpen(false);
                  if (onOpenEnroll) onOpenEnroll("Generative AI & AI Agents");
                },
                icon: <ArrowRight className="w-3.5 h-3.5" />
              }
            ]
          };
          break;

        case "career-guidance":
          botResponse = {
            id: "bot-" + Date.now(),
            sender: "bot",
            text: "We guide students and working professionals across 10 high-demand AI roles:\n\n1. AI Engineer\n2. Machine Learning Engineer\n3. Generative AI Developer\n4. Data Scientist\n5. AI Automation Specialist\n6. Prompt Engineer\n7. Data Analyst\n8. AI Product Manager\n9. AI Researcher\n10. AI Entrepreneur\n\nOur curriculum follows a strict 7-stage learning journey: **LEARN → PRACTICE → BUILD → INTERN → CERTIFY → GET CAREER READY** with GitHub portfolio defenses and mock interviews.",
            timestamp: getCurrentTime(),
            chips: [
              {
                label: "Open 12-Step Roadmap",
                action: () => {
                  window.location.href = "/career-roadmap";
                },
                icon: <Compass className="w-3.5 h-3.5" />,
                primary: true
              },
              {
                label: "Find My AI Path",
                action: () => {
                  setIsOpen(false);
                  const el = document.getElementById("find-ai-path");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                },
                icon: <Sparkles className="w-3.5 h-3.5" />
              },
              {
                label: "Talk to AI Mentor",
                action: () => {
                  setIsOpen(false);
                  if (onOpenEnroll) onOpenEnroll("AI Career Guidance Consultation");
                },
                icon: <PhoneCall className="w-3.5 h-3.5" />
              }
            ]
          };
          break;

        case "fees":
          botResponse = {
            id: "bot-" + Date.now(),
            sender: "bot",
            text: "OIAI maintains transparent, value-oriented fees with flexible payment options:\n\n• **Foundational Programs (2-3 Months)**: ₹24,000 – ₹38,000\n• **Core Deep-Tech Tracks (3-4 Months)**: ₹42,000 – ₹48,000\n• **Comprehensive 6-Month Flagship Tracks**: ₹65,000 – ₹78,000 (Includes guaranteed capstones & internship track)\n\n**Financial Support:**\n✓ 0% Interest EMI options starting at ₹4,999/month\n✓ Up to 40% Merit Scholarships based on diagnostic test scores\n✓ Special concessions for women in tech & college group enrollments.",
            timestamp: getCurrentTime(),
            chips: [
              {
                label: "Apply for Scholarship",
                action: () => {
                  setIsOpen(false);
                  if (onOpenEnroll) onOpenEnroll("Scholarship Assessment");
                },
                icon: <CreditCard className="w-3.5 h-3.5" />,
                primary: true
              },
              {
                label: "Get Detailed Fee PDF",
                action: () => {
                  window.open("https://wa.me/916742913000?text=Hello%20OIAI%2C%20please%20share%20the%20detailed%20Fee%20Structure%20and%20EMI%20options.", "_blank");
                },
                icon: <ExternalLink className="w-3.5 h-3.5" />
              }
            ]
          };
          break;

        case "internship":
          botResponse = {
            id: "bot-" + Date.now(),
            sender: "bot",
            text: "The OIAI Internship Portal offers practical exposure across 10 specialized domains:\n\n• **Available Tracks**: Python, Artificial Intelligence, Machine Learning, Data Science, Generative AI, AI Agents, Data Analytics, AI Automation, Computer Vision, and NLP.\n• **Duration**: 8 to 16 weeks (Hybrid / In-Person Labs / Live Online).\n• **Deliverables**: Live client projects, code reviews on GitHub, 1-on-1 industry mentor guidance, and verified OIAI Internship Certificate upon jury defense.\n• **Eligibility**: College students (B.Tech/BCA/MCA/B.Sc), graduates, and junior engineers.",
            timestamp: getCurrentTime(),
            chips: [
              {
                label: "Explore Internship Portal",
                action: () => {
                  window.location.href = "/internships";
                },
                icon: <Briefcase className="w-3.5 h-3.5" />,
                primary: true
              },
              {
                label: "Apply for Internship",
                action: () => {
                  window.location.href = "/internships#apply";
                },
                icon: <ArrowRight className="w-3.5 h-3.5" />
              }
            ]
          };
          break;

        case "workshops":
          botResponse = {
            id: "bot-" + Date.now(),
            sender: "bot",
            text: "Upcoming Hands-On Workshop Series:\n\n🔥 **Flagship Event**: *“From Computer Science Student to AI Engineer”*\n• **When**: Saturday & Sunday • 10:00 AM – 4:00 PM IST\n• **Venue**: OIAI Campus, Infocity Tech Park, Patia, Bhubaneswar & Live Stream\n• **Format**: 100% hands-on coding, model fine-tuning & agent deployment\n• **Certification**: Verified workshop certificate included\n• **Seats**: Limited to 45 participants per cohort.",
            timestamp: getCurrentTime(),
            chips: [
              {
                label: "View Workshop Details",
                action: () => {
                  window.location.href = "/workshops";
                },
                icon: <Calendar className="w-3.5 h-3.5" />,
                primary: true
              },
              {
                label: "Register for Workshop",
                action: () => {
                  window.location.href = "/workshops#register";
                },
                icon: <ArrowRight className="w-3.5 h-3.5" />
              }
            ]
          };
          break;

        case "counsellor":
          botResponse = {
            id: "bot-" + Date.now(),
            sender: "bot",
            text: "Connect directly with our Senior Academic Advisory Desk:\n\n📞 **Admissions Desk**: +91 674 291-3000\n💼 **Career Guidance**: +91 674 291-3001\n✉️ **Academic Email**: admissions@oiai.edu.in\n📍 **Campus Address**: Infocity Tech Park, Patia, Bhubaneswar, Odisha 751024\n⏰ **Walk-in Hours**: Mon–Sat, 9:00 AM – 7:00 PM\n\nOur counselors can review your background and recommend the optimal learning track.",
            timestamp: getCurrentTime(),
            chips: [
              {
                label: "Book Free Counselling Call",
                action: () => {
                  setIsOpen(false);
                  if (onOpenEnroll) onOpenEnroll("1-on-1 Academic Counselling");
                },
                icon: <PhoneCall className="w-3.5 h-3.5" />,
                primary: true
              },
              {
                label: "Chat on WhatsApp Desk",
                action: () => {
                  window.open("https://wa.me/916742913000?text=Hello%20OIAI%2C%20I%20would%20like%20to%20speak%20with%20an%20Academic%20Counsellor.", "_blank");
                },
                icon: <MessageSquare className="w-3.5 h-3.5" />
              }
            ]
          };
          break;

        default:
          botResponse = {
            id: "bot-" + Date.now(),
            sender: "bot",
            text: "How else can I help your AI learning journey? You can choose one of the options below or ask any question.",
            timestamp: getCurrentTime()
          };
      }

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 450);
  };

  // Natural Language Matching Engine across the 10 Knowledge Bases
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputQuery.trim()) return;

    const userText = inputQuery.trim();
    const q = userText.toLowerCase();

    // 1. Append user message
    const userMsg: ChatMessage = {
      id: "user-" + Date.now(),
      sender: "user",
      text: userText,
      timestamp: getCurrentTime()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery("");
    setIsTyping(true);

    // 2. Synthesize Answer from Knowledge Base
    setTimeout(() => {
      let replyText = "";
      let replyChips: ActionChip[] | undefined = undefined;

      // Knowledge Base 1: Courses & Syllabus
      if (q.includes("course") || q.includes("program") || q.includes("track") || q.includes("syllabus") || q.includes("curriculum") || q.includes("genai") || q.includes("llm") || q.includes("generative") || q.includes("agent") || q.includes("python")) {
        replyText = "OIAI offers comprehensive AI engineering tracks:\n\n1. **Generative AI & AI Agents** — LLMs, Prompt Engineering, RAG, LangChain, Multi-Agent Workflows\n2. **Machine Learning & Deep Learning** — Supervised/Unsupervised models, Neural Networks, PyTorch, Model Deployment\n3. **AI Foundations** — Algorithms, State Spaces, Cognitive Computing\n4. **Data Science & Analytics** — Pandas, SQL, Predictive Analytics\n5. **Computer Vision** — Object Detection, Segmentation, Edge AI\n\nAll courses emphasize building live production applications rather than passive theoretical lectures.";
        replyChips = [
          {
            label: "View All Programs",
            action: () => {
              setIsOpen(false);
              const el = document.getElementById("curriculum");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            },
            primary: true
          },
          {
            label: "Course Finder Quiz",
            action: () => {
              setIsOpen(false);
              const el = document.getElementById("course-finder");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }
          }
        ];
      }
      // Knowledge Base 2: Duration & Timeline
      else if (q.includes("duration") || q.includes("how long") || q.includes("months") || q.includes("weeks") || q.includes("time") || q.includes("schedule")) {
        replyText = "Program durations at OIAI are tailored to learning depth:\n\n• **Foundations & Fast-Track**: 8–10 Weeks\n• **Core Specializations**: 12–14 Weeks (3 Months)\n• **Comprehensive Flagship Masters**: 6 Months (Includes 2 capstone projects + live internship)\n• **Weekend Workshops & Executive Briefings**: 2–4 intensive weekend days.";
        replyChips = [
          {
            label: "Explore 7-Stage Methodology",
            action: () => {
              setIsOpen(false);
              const el = document.getElementById("methodology");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            },
            primary: true
          }
        ];
      }
      // Knowledge Base 3: Eligibility & Prerequisites
      else if (q.includes("eligibility") || q.includes("eligible") || q.includes("prerequisite") || q.includes("beginner") || q.includes("non-programmer") || q.includes("background") || q.includes("degree") || q.includes("btech") || q.includes("bca") || q.includes("who can")) {
        replyText = "OIAI programs welcome:\n\n✓ **Students & Graduates**: B.Tech, B.E., BCA, MCA, B.Sc (Computer Science / IT / Math)\n✓ **Software Engineers & Developers**: Transitioning into AI/ML engineering\n✓ **Non-Programmers & Domain Professionals**: We provide an accelerated 4-week Python & Math Bridge module\n✓ **Entrepreneurs & Business Leaders**: Executive AI strategy and no-code/low-code AI automation tracks.\n\nNo prior advanced AI experience is required for beginner tracks.";
        replyChips = [
          {
            label: "Take Diagnostic Evaluation",
            action: () => {
              setIsOpen(false);
              if (onOpenEnroll) onOpenEnroll("Eligibility & Diagnostic Check");
            },
            primary: true
          }
        ];
      }
      // Knowledge Base 4: Fees, EMI & Scholarships
      else if (q.includes("fee") || q.includes("cost") || q.includes("price") || q.includes("how much") || q.includes("emi") || q.includes("scholarship") || q.includes("installment") || q.includes("discount")) {
        replyText = "OIAI program fees:\n\n• **Foundational Programs**: ₹24,000 – ₹38,000\n• **Core Tracks (3 Months)**: ₹42,000 – ₹48,000\n• **6-Month Flagship Track**: ₹65,000 – ₹78,000\n\n**Financial Options**:\n• 0% interest monthly EMIs (from ₹4,999/mo)\n• Merit-based scholarships up to 40% for students and women engineers\n• Early-bird discounts for upcoming cohort registrations.";
        replyChips = [
          {
            label: "Enquire for Fee Discount",
            action: () => {
              setIsOpen(false);
              if (onOpenEnroll) onOpenEnroll("Fee & Scholarship Inquiry");
            },
            primary: true
          }
        ];
      }
      // Knowledge Base 5: Faculty & Mentors
      else if (q.includes("faculty") || q.includes("teacher") || q.includes("mentor") || q.includes("instructor") || q.includes("professor") || q.includes("who teaches") || q.includes("arindam") || q.includes("sneha") || q.includes("tushar")) {
        replyText = "Our faculty comprises active AI researchers and industry architects:\n\n• **Dr. Arindam Mishra** — Director of AI Research (Ex-IISc, 14+ yrs in Deep Learning)\n• **Prof. Sneha Mohapatra** — Head of Computer Vision (IIT Kharagpur Alumna, Edge AI Specialist)\n• **Er. Tushar Kanta Ray** — Lead AI Architect (Ex-AWS, 12+ yrs Cloud AI & LLM Systems)\n• **Dr. Pritish Das** — Senior NLP Scientist (Stanford AI Fellow, Generative Agents)\n\nAll mentors conduct live code defenses and weekly 1-on-1 office hours.";
        replyChips = [
          {
            label: "View Faculty Profiles",
            action: () => {
              window.location.href = "/faculty";
            },
            primary: true
          }
        ];
      }
      // Knowledge Base 6: Internship Information
      else if (q.includes("internship") || q.includes("intern") || q.includes("stipend") || q.includes("capstone") || q.includes("live project")) {
        replyText = "The OIAI Internship Portal offers structured practical training across 10 categories:\n\n• Python, Generative AI, AI Agents, Machine Learning, Data Science, Data Analytics, AI Automation, Computer Vision, and NLP.\n• Duration: 8 to 16 weeks\n• Mode: Bhubaneswar Campus & Remote / Hybrid\n• You will build real-world assignments, commit code to GitHub, and receive a verified internship certificate and placement endorsement upon jury review.";
        replyChips = [
          {
            label: "Go to Internship Portal",
            action: () => {
              window.location.href = "/internships";
            },
            primary: true
          }
        ];
      }
      // Knowledge Base 7: Workshops & Events
      else if (q.includes("workshop") || q.includes("event") || q.includes("bootcamp") || q.includes("hackathon") || q.includes("webinar")) {
        replyText = "Upcoming workshop highlight:\n\n🔥 **“From Computer Science Student to AI Engineer”**\n• Complete hands-on walkthrough: Python → LangChain → RAG → Vector Databases → Agent Deployment.\n• Delivered by Senior AI Mentors at Bhubaneswar Campus & Live Stream.\n• Verified Certificate of Completion provided to all registered participants.";
        replyChips = [
          {
            label: "Register for Workshop",
            action: () => {
              window.location.href = "/workshops";
            },
            primary: true
          }
        ];
      }
      // Knowledge Base 8: Location, Bhubaneswar & Odisha (Local SEO)
      else if (q.includes("bhubaneswar") || q.includes("odisha") || q.includes("location") || q.includes("where") || q.includes("campus") || q.includes("offline") || q.includes("classroom")) {
        replyText = "OIAI is headquartered in Bhubaneswar, Odisha:\n\n📍 **Campus Address**: Infocity Tech Park, Patia, Bhubaneswar, Odisha 751024\n\nWe provide both in-person state-of-the-art computational AI labs in Bhubaneswar, as well as live interactive cohorts for learners across Odisha and India.";
        replyChips = [
          {
            label: "AI Institute in Bhubaneswar",
            action: () => {
              window.location.href = "/bhubaneswar";
            },
            primary: true
          },
          {
            label: "AI Center in Odisha",
            action: () => {
              window.location.href = "/odisha";
            }
          }
        ];
      }
      // Knowledge Base 9: Admissions & Next Batch
      else if (q.includes("admission") || q.includes("apply") || q.includes("enroll") || q.includes("next batch") || q.includes("batch") || q.includes("deadline") || q.includes("register")) {
        replyText = "Admissions for the upcoming 2026 cohort are currently open!\n\n**Simple 3-Step Process**:\n1. Submit your online application or counselling request.\n2. 1-on-1 diagnostic evaluation with an AI counsellor to finalize your track.\n3. Complete verification and confirm batch timing (Weekday / Weekend available).";
        replyChips = [
          {
            label: "Start Application Now",
            action: () => {
              setIsOpen(false);
              if (onOpenEnroll) onOpenEnroll("Admissions Application");
            },
            primary: true
          }
        ];
      }
      // Knowledge Base 10: Contact Information
      else if (q.includes("contact") || q.includes("phone") || q.includes("email") || q.includes("number") || q.includes("helpline") || q.includes("call") || q.includes("talk to")) {
        replyText = "Contact the OIAI Helpdesk:\n\n📞 **Admissions Desk**: +91 674 291-3000\n💼 **Career Guidance**: +91 674 291-3001\n✉️ **Email**: admissions@oiai.edu.in\n🏢 **Campus**: Infocity Tech Park, Patia, Bhubaneswar, Odisha 751024\n\nWalk-in hours: Monday – Saturday, 9:00 AM – 7:00 PM.";
        replyChips = [
          {
            label: "Chat on WhatsApp",
            action: () => {
              window.open("https://wa.me/916742913000?text=Hello%20OIAI%2C%20I%20have%20an%20inquiry%20regarding%20your%20AI%20programs.", "_blank");
            },
            primary: true
          }
        ];
      }
      // Fallback Answer with AI Assistance & Guidance
      else {
        replyText = "I understand you're inquiring about '" + userText + "'.\n\nAt OIAI (Odisha Institute of AI), we specialize in comprehensive AI education, hands-on capstone engineering, guaranteed internships, and career readiness in Bhubaneswar and online cohorts.\n\nWould you like to explore any of the specific areas below?";
        replyChips = [
          {
            label: "Find a Course",
            action: () => handleActionClick("find-course", "Find a Course"),
            primary: true
          },
          {
            label: "Fees & Scholarships",
            action: () => handleActionClick("fees", "Fees")
          },
          {
            label: "Talk to Human Counsellor",
            action: () => handleActionClick("counsellor", "Talk to Counsellor")
          }
        ];
      }

      const botReply: ChatMessage = {
        id: "bot-" + Date.now(),
        sender: "bot",
        text: replyText,
        timestamp: getCurrentTime(),
        chips: replyChips
      };

      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <>
      {/* 1. FLOATING AI ASSISTANT TRIGGER BUTTON (ROUND & VERTICAL TO WHATSAPP) */}
      <div className="fixed bottom-[74px] sm:bottom-[92px] right-3 sm:right-6 z-50 font-sans">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          id="floating-ai-assistant-btn"
          aria-label="Toggle OIAI AI Assistant"
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#312e81] via-[#4338ca] to-[#6366f1] hover:from-[#3730a3] hover:to-[#4f46e5] active:scale-95 text-white flex items-center justify-center border border-indigo-400/30 shadow-[0_8px_25px_rgba(67,56,202,0.5)] hover:shadow-[0_12px_32px_rgba(67,56,202,0.75)] transition-all duration-300 hover:scale-105 cursor-pointer shrink-0"
        >
          {/* Subtle pulse ring */}
          <span className="absolute inset-0 rounded-full bg-indigo-500 animate-ping opacity-25 pointer-events-none" />

          {isOpen ? (
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          ) : (
            <AIChatbotLogo className="w-7 h-7 sm:w-9 sm:h-9" animated={false} />
          )}
        </button>
      </div>

      {/* 2. CHATBOT WINDOW DIALOG */}
      {isOpen && (
        <div
          className="fixed bottom-3 sm:bottom-6 right-3 sm:right-6 left-3 sm:left-auto z-50 w-auto sm:w-[420px] max-h-[82vh] sm:max-h-[85vh] h-[580px] sm:h-[640px] bg-[#fbfbfa] border border-black/15 rounded-3xl shadow-[0_30px_70px_-15px_rgba(15,15,14,0.45)] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200 font-sans"
          role="dialog"
          aria-labelledby="ai-assistant-heading"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#17153B] via-[#2E236C] to-[#0f0f0e] text-white p-4 flex items-center justify-between border-b border-white/10 shrink-0 relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-3 relative z-10">
              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 p-1 flex items-center justify-center overflow-hidden">
                  <AIChatbotLogo className="w-8 h-8" animated={true} />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#17153B]" />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h3 id="ai-assistant-heading" className="font-['Archivo',sans-serif] text-sm sm:text-base font-black tracking-tight leading-none text-white">
                    OIAI AI Assistant
                  </h3>
                  <span className="px-1.5 py-0.2 rounded bg-indigo-500/40 text-[9px] font-mono uppercase text-indigo-200 font-bold">
                    Official
                  </span>
                </div>
                <p className="text-[11px] font-mono text-indigo-200 mt-1 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Online • OIAI Knowledge Base</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 relative z-10">
              <button
                type="button"
                onClick={handleResetChat}
                title="Restart Conversation"
                className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-indigo-200 hover:text-white transition-colors cursor-pointer"
                aria-label="Restart chat"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close Assistant"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Conversation Feed */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-[#f5f4ef] to-[#fbfbfa] text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                {/* Message Bubble */}
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 shadow-sm leading-relaxed whitespace-pre-line text-left ${
                    msg.sender === "user"
                      ? "bg-[#0f0f0e] text-white rounded-br-xs"
                      : "bg-white text-[#0f0f0e] border border-black/10 rounded-bl-xs"
                  }`}
                >
                  {msg.sender === "bot" && (
                    <div className="flex items-center gap-1.5 mb-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#4338ca]">
                      <AIChatbotLogo className="w-4 h-4" />
                      <span>OIAI AI Assistant</span>
                    </div>
                  )}
                  <p className="text-[12.5px]">{msg.text}</p>
                </div>

                {/* Timestamp */}
                <span className="text-[10px] font-mono text-[#62615d] mt-1 px-1">
                  {msg.timestamp}
                </span>

                {/* Interactive Action Chips (if any) */}
                {msg.chips && msg.chips.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2 max-w-[90%]">
                    {msg.chips.map((chip, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={chip.action}
                        className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all cursor-pointer ${
                          chip.primary
                            ? "bg-[#4338ca] hover:bg-[#3730a3] text-white shadow-sm"
                            : "bg-white hover:bg-black/5 text-[#0f0f0e] border border-black/10"
                        }`}
                      >
                        {chip.icon}
                        <span>{chip.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Simulated Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 bg-white border border-black/10 rounded-2xl px-3.5 py-2.5 max-w-[80px] shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4338ca] animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#4338ca] animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#4338ca] animate-bounce [animation-delay:0.4s]" />
              </div>
            )}

            {/* Quick Initial Option Buttons (when greeting is present) */}
            {messages.length === 1 && !isTyping && (
              <div className="pt-2 animate-in fade-in duration-300">
                <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#62615d] mb-2 px-1">
                  Quick Topics to Explore:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {INITIAL_BUTTONS.map((btn) => (
                    <button
                      key={btn.id}
                      type="button"
                      onClick={() => handleActionClick(btn.id, btn.label)}
                      className="p-2.5 rounded-2xl bg-white hover:bg-indigo-50/70 border border-black/10 hover:border-indigo-300 text-left transition-all flex items-center gap-2 group cursor-pointer shadow-xs"
                    >
                      <div className="w-6 h-6 rounded-lg bg-black/5 group-hover:bg-indigo-100 flex items-center justify-center shrink-0">
                        {btn.icon}
                      </div>
                      <span className="text-[11.5px] font-bold text-[#0f0f0e] group-hover:text-[#4338ca] truncate">
                        {btn.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Shortcuts Bar */}
          <div className="px-3 py-1.5 bg-white border-t border-black/5 flex items-center gap-2 overflow-x-auto text-[10.5px] font-mono text-[#62615d] shrink-0">
            <span className="shrink-0 text-[10px] uppercase font-bold text-black/40">Try:</span>
            <button
              type="button"
              onClick={() => handleActionClick("fees", "Fees & Scholarships")}
              className="shrink-0 hover:text-[#4338ca] underline decoration-dotted cursor-pointer"
            >
              Fees
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => handleActionClick("internship", "Internships")}
              className="shrink-0 hover:text-[#4338ca] underline decoration-dotted cursor-pointer"
            >
              Internships
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => handleActionClick("workshops", "Workshops")}
              className="shrink-0 hover:text-[#4338ca] underline decoration-dotted cursor-pointer"
            >
              Workshops
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => handleActionClick("counsellor", "Counsellor Contact")}
              className="shrink-0 hover:text-[#4338ca] underline decoration-dotted cursor-pointer"
            >
              Admissions
            </button>
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSendMessage}
            className="p-3 bg-white border-t border-black/10 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="Ask about courses, fees, mentors, eligibility..."
              className="flex-1 px-3.5 py-2.5 rounded-2xl bg-[#f5f4ef] text-xs text-[#0f0f0e] border border-black/10 focus:outline-none focus:ring-1 focus:ring-[#4338ca] focus:bg-white transition-all placeholder:text-slate-400"
            />
            <button
              type="submit"
              disabled={!inputQuery.trim() || isTyping}
              aria-label="Send query"
              className="w-10 h-10 rounded-2xl bg-[#0f0f0e] hover:bg-[#4338ca] disabled:opacity-40 text-white flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-sm"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
}
