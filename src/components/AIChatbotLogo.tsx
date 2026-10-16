"use client";

import React from "react";

interface AIChatbotLogoProps {
  className?: string;
  size?: number;
  animated?: boolean;
}

/**
 * Official OG OIAI AI Chatbot Logo
 * High-tech neural assistant emblem with glowing cyber visor, antenna beacon, and generative AI sparkles.
 */
export default function AIChatbotLogo({
  className = "w-8 h-8",
  size,
  animated = false
}: AIChatbotLogoProps) {
  const dimensionStyle = size ? { width: `${size}px`, height: `${size}px` } : undefined;

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 select-none ${className}`}
      style={dimensionStyle}
      aria-label="OIAI AI Assistant Official Logo"
    >
      <svg
        viewBox="0 0 64 64"
        className={`w-full h-full drop-shadow-md ${animated ? "animate-pulse" : ""}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Main Cosmic Violet Gradient */}
          <linearGradient id="aiBgGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4338CA" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>

          {/* Visor Cyan Gradient */}
          <linearGradient id="aiVisorGrad" x1="16" y1="22" x2="48" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0B132B" />
            <stop offset="100%" stopColor="#1C2541" />
          </linearGradient>

          {/* Glowing Eyes Gradient */}
          <linearGradient id="aiEyeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#67E8F9" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>

          {/* Antenna Glow */}
          <radialGradient id="antennaGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F43F5E" />
            <stop offset="100%" stopColor="#E11D48" />
          </radialGradient>

          {/* Shadow Filter */}
          <filter id="aiGlow" x="-20%" y="-20%" width="140%" height="140%" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Hex-Squircle Head Base */}
        <rect
          x="4"
          y="6"
          width="56"
          height="52"
          rx="18"
          fill="url(#aiBgGrad)"
          stroke="white"
          strokeOpacity="0.25"
          strokeWidth="1.5"
        />

        {/* Head Light Accent (Gloss) */}
        <path
          d="M12 12C20 8 44 8 52 12"
          stroke="white"
          strokeOpacity="0.45"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Top Antenna Stem & Glowing Beacon */}
        <path d="M32 6V0" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="32" cy="1" r="3.5" fill="url(#antennaGlow)" />
        <circle cx="32" cy="1" r="1.5" fill="#FFE4E6" />

        {/* Left & Right Acoustic Headset Nodes */}
        <rect x="0" y="24" width="4" height="16" rx="2" fill="#312E81" />
        <rect x="60" y="24" width="4" height="16" rx="2" fill="#312E81" />
        <path d="M2 28V36" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M62 28V36" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" />

        {/* Central Dark Visor */}
        <rect
          x="12"
          y="18"
          width="40"
          height="28"
          rx="12"
          fill="url(#aiVisorGrad)"
          stroke="#475569"
          strokeWidth="1.2"
        />

        {/* Glowing Cybernetic Eyes (Curved Pill/Oval Style) */}
        {/* Left Eye */}
        <rect x="18" y="26" width="9" height="11" rx="4.5" fill="url(#aiEyeGrad)" />
        <circle cx="21" cy="28.5" r="1.5" fill="white" />
        
        {/* Right Eye */}
        <rect x="37" y="26" width="9" height="11" rx="4.5" fill="url(#aiEyeGrad)" />
        <circle cx="40" cy="28.5" r="1.5" fill="white" />

        {/* Cheerful AI Smile Curve */}
        <path
          d="M26 39C28 41 36 41 38 39"
          stroke="#38BDF8"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Generative AI Sparkle Accents (Top Right & Bottom Left) */}
        {/* Top Right Sparkle */}
        <path
          d="M50 8L51.2 11.8L55 13L51.2 14.2L50 18L48.8 14.2L45 13L48.8 11.8L50 8Z"
          fill="#FDE047"
        />
        {/* Small White Starlet */}
        <circle cx="12" cy="46" r="1.5" fill="#E0E7FF" opacity="0.8" />
      </svg>
    </div>
  );
}
