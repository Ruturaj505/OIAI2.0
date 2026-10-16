"use client";

import React from "react";

interface WhatsAppLogoProps {
  className?: string;
  size?: number;
  showShadow?: boolean;
}

/**
 * Official OG WhatsApp Logo
 * Authentic WhatsApp Green #25D366 with pure white speech bubble and handset
 */
export default function WhatsAppLogo({
  className = "w-7 h-7",
  size,
  showShadow = true
}: WhatsAppLogoProps) {
  const dimensionStyle = size ? { width: `${size}px`, height: `${size}px` } : undefined;

  return (
    <div 
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`} 
      style={dimensionStyle}
      aria-label="WhatsApp Official Logo"
    >
      <svg 
        viewBox="0 0 48 48" 
        className="w-full h-full drop-shadow-sm"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waGrad" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#29E36C" />
            <stop offset="100%" stopColor="#1EBE5D" />
          </linearGradient>
          {showShadow && (
            <filter id="waShadow" x="-10%" y="-10%" width="120%" height="120%" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#075E54" floodOpacity="0.25" />
            </filter>
          )}
        </defs>

        {/* WhatsApp Official Green Circle Base */}
        <circle 
          cx="24" 
          cy="24" 
          r="23" 
          fill="url(#waGrad)" 
          filter={showShadow ? "url(#waShadow)" : undefined}
        />

        {/* Outer White Subtle Inner Ring Highlight */}
        <circle cx="24" cy="24" r="22.5" stroke="white" strokeOpacity="0.18" strokeWidth="1" />

        {/* Official Speech Bubble & Phone Receiver */}
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M24 9C15.716 9 9 15.716 9 24C9 26.837 9.789 29.493 11.162 31.761L9.5 38.5L16.438 36.907C18.636 38.214 21.229 39 24 39C32.284 39 39 32.284 39 24C39 15.716 32.284 9 24 9ZM24 36.35C21.621 36.35 19.418 35.656 17.568 34.462L17.128 34.198L12.802 35.167L13.996 30.947L13.702 30.488C12.391 28.54 11.65 26.34 11.65 24C11.65 17.18 17.18 11.65 24 11.65C30.82 11.65 36.35 17.18 36.35 24C36.35 30.82 30.82 36.35 24 36.35ZM31.53 28.361C31.119 28.156 29.102 27.167 28.73 27.03C28.358 26.893 28.084 26.825 27.81 27.235C27.536 27.646 26.753 28.566 26.518 28.84C26.283 29.113 26.048 29.143 25.637 28.938C25.226 28.733 23.905 28.303 22.339 26.906C21.118 25.82 20.297 24.47 20.062 24.06C19.827 23.65 20.033 23.425 20.238 23.22C20.424 23.035 20.649 22.741 20.854 22.507C21.059 22.272 21.128 22.106 21.265 21.832C21.402 21.558 21.333 21.324 21.226 21.118C21.118 20.913 20.297 18.897 19.954 18.075C19.622 17.273 19.279 17.381 19.025 17.371C18.79 17.361 18.516 17.361 18.242 17.361C17.968 17.361 17.528 17.459 17.156 17.869C16.785 18.28 15.728 19.268 15.728 21.284C15.728 23.3 17.196 25.247 17.401 25.521C17.606 25.795 20.287 29.925 24.377 31.696C25.346 32.116 26.109 32.37 26.696 32.556C27.665 32.86 28.545 32.82 29.24 32.713C30.022 32.595 31.637 31.734 31.979 30.775C32.321 29.816 32.321 28.995 32.214 28.819C32.106 28.643 31.94 28.565 31.53 28.361Z" 
          fill="white" 
        />
      </svg>
    </div>
  );
}
