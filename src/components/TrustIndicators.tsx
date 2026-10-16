"use client";

import React from "react";
import { 
  Laptop, 
  Terminal, 
  UserCheck, 
  Briefcase, 
  TrendingUp,
  BadgeCheck
} from "lucide-react";

interface TrustBadge {
  id: string;
  label: string;
  detail: string;
  tag: string;
  icon: React.ReactNode;
  iconBg: string;
  badgeAccent: string;
}

const TRUST_BADGES: TrustBadge[] = [
  {
    id: "practical-learning",
    label: "Practical Learning",
    detail: "100% Hands-On Labs",
    tag: "Applied",
    icon: <Laptop className="w-4 h-4 text-[#ef5d44]" />,
    iconBg: "bg-[#ef5d44]/10 border-[#ef5d44]/20",
    badgeAccent: "text-[#ef5d44]",
  },
  {
    id: "live-projects",
    label: "Live Projects",
    detail: "Production AI Systems",
    tag: "Real-world",
    icon: <Terminal className="w-4 h-4 text-[#4338ca]" />,
    iconBg: "bg-[#4338ca]/10 border-[#4338ca]/20",
    badgeAccent: "text-[#4338ca]",
  },
  {
    id: "industry-mentorship",
    label: "Industry Mentorship",
    detail: "1-on-1 Active AI Leaders",
    tag: "1-on-1",
    icon: <UserCheck className="w-4 h-4 text-[#0d9488]" />,
    iconBg: "bg-[#0d9488]/10 border-[#0d9488]/20",
    badgeAccent: "text-[#0d9488]",
  },
  {
    id: "internship-opps",
    label: "Internship Opportunities",
    detail: "Real Industry Experience",
    tag: "Sponsored",
    icon: <Briefcase className="w-4 h-4 text-[#d97706]" />,
    iconBg: "bg-[#d97706]/10 border-[#d97706]/20",
    badgeAccent: "text-[#d97706]",
  },
  {
    id: "career-support",
    label: "Career Support",
    detail: "Dedicated Placement Desk",
    tag: "Guaranteed",
    icon: <TrendingUp className="w-4 h-4 text-[#4f46e5]" />,
    iconBg: "bg-[#4f46e5]/10 border-[#4f46e5]/20",
    badgeAccent: "text-[#4f46e5]",
  },
];

export default function TrustIndicators() {
  return (
    <section 
      aria-label="Hero Trust Indicators"
      className="w-full bg-[#F8FAFC] border-b border-[#CBD5E1] py-3.5 sm:py-4 px-4 sm:px-6 lg:px-10 relative z-20 shadow-xs"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Badges Container: Responsive Grid on Desktop / Smooth Scroll on Small Devices */}
        <div className="flex lg:grid lg:grid-cols-5 items-center justify-between gap-3 sm:gap-3.5 overflow-x-auto no-scrollbar scroll-smooth py-1 -my-1">
          {TRUST_BADGES.map((badge) => (
            <div
              key={badge.id}
              className="group relative flex items-center gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-2xl bg-[#E8EDF5] hover:bg-[#E2E8F0] border border-[#CBD5E1] hover:border-indigo-400 shadow-xs hover:shadow-md transition-all duration-200 shrink-0 lg:shrink cursor-default w-auto lg:w-full min-w-[210px] lg:min-w-0"
            >
              {/* Icon Container with subtle color tint */}
              <div 
                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-200 group-hover:scale-105 shadow-xs ${badge.iconBg}`}
              >
                {badge.icon}
              </div>

              {/* Label, Verified Check, and Subtitle */}
              <div className="flex flex-col min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-semibold text-xs sm:text-[13px] text-[#0f172a] tracking-tight truncate whitespace-nowrap">
                    {badge.label}
                  </span>
                  <BadgeCheck 
                    className="w-3.5 h-3.5 text-[#0d9488] shrink-0" 
                    aria-label="Verified Trust Standard" 
                  />
                </div>
                <span className="text-[10px] sm:text-[11px] font-sans text-slate-600 truncate whitespace-nowrap">
                  {badge.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

