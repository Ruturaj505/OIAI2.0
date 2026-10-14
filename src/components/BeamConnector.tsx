"use client";

import React from "react";

export default function BeamConnector() {
  return (
    <div className="relative h-1 w-full overflow-hidden bg-slate-800/80 rounded-full my-4">
      {/* Moving Energy Pulse */}
      <div className="absolute inset-y-0 h-full w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[1px] animate-[pulseBeam_2.5s_infinite_linear]" />
      <style jsx>{`
        @keyframes pulseBeam {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(600%);
          }
        }
      `}</style>
    </div>
  );
}
