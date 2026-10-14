"use client";

import React, { useEffect, useRef } from "react";

interface NeuronNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  pulsePhase: number;
  pulseSpeed: number;
}

interface SynapticPulse {
  sourceIndex: number;
  targetIndex: number;
  progress: number;
  speed: number;
}

export default function GlobalNeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number | null; y: number | null; radius: number }>({
    x: null,
    y: null,
    radius: 160,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Initialize nodes
    const isMobile = width < 768;
    const nodeCount = isMobile ? 32 : 58;
    const nodes: NeuronNode[] = [];
    const colors = [
      "rgba(37, 99, 235, 0.8)",    // #2563EB Primary Blue
      "rgba(124, 58, 237, 0.85)",  // #7C3AED AI Violet
      "rgba(20, 184, 166, 0.8)",   // #14B8A6 Accent Teal
      "rgba(96, 165, 250, 0.65)",  // Soft Blue
    ];

    for (let i = 0; i < nodeCount; i++) {
      const radius = Math.random() * 2 + 1.2;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.025,
      });
    }

    // Synaptic pulses
    const pulses: SynapticPulse[] = [];
    const maxPulses = isMobile ? 6 : 14;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    const maxDistance = isMobile ? 120 : 160;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw interconnected synaptic edges
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];

        // Move nodes
        a.x += a.vx;
        a.y += a.vy;

        // Bounce gently at screen boundaries
        if (a.x < 0 || a.x > width) a.vx *= -1;
        if (a.y < 0 || a.y > height) a.vy *= -1;

        // Subtle mouse pull
        if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
          const dx = mouseRef.current.x - a.x;
          const dy = mouseRef.current.y - a.y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouseRef.current.radius && dist > 1) {
            const force = (1 - dist / mouseRef.current.radius) * 0.4;
            a.x += (dx / dist) * force;
            a.y += (dy / dist) * force;
          }
        }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(124, 58, 237, ${alpha * 0.9})`; // Violet synaptic edge
            ctx.lineWidth = 0.85;
            ctx.stroke();

            // Random chance to create a traveling synaptic pulse
            if (pulses.length < maxPulses && Math.random() < 0.003) {
              pulses.push({
                sourceIndex: i,
                targetIndex: j,
                progress: 0,
                speed: 0.015 + Math.random() * 0.02,
              });
            }
          }
        }
      }

      // 2. Animate and draw synaptic signal pulses traveling between neurons
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          pulses.splice(p, 1);
          continue;
        }

        const src = nodes[pulse.sourceIndex];
        const tgt = nodes[pulse.targetIndex];
        if (!src || !tgt) continue;

        const px = src.x + (tgt.x - src.x) * pulse.progress;
        const py = src.y + (tgt.y - src.y) * pulse.progress;

        ctx.beginPath();
        ctx.arc(px, py, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(20, 184, 166, 0.95)"; // Accent Teal pulse
        ctx.shadowColor = "rgba(20, 184, 166, 0.9)";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // 3. Draw neuron nodes with pulsing glow
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.pulsePhase += n.pulseSpeed;
        const currentRadius = n.radius + Math.sin(n.pulsePhase) * 0.5;

        // Outer faint glow
        ctx.beginPath();
        ctx.arc(n.x, n.y, currentRadius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(124, 58, 237, 0.08)";
        ctx.fill();

        // Core neuron
        ctx.beginPath();
        ctx.arc(n.x, n.y, Math.max(currentRadius, 1), 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.shadowColor = n.color;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-20 overflow-hidden"
      aria-hidden="true"
    >
      {/* Subtle modern neural network canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-25 dark:opacity-75 transition-opacity duration-300"
        style={{ pointerEvents: "none" }}
      />

      {/* Layered neural ambient glows (Blue #2563EB & Violet #7C3AED) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-[#2563eb]/15 via-[#7c3aed]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10 opacity-40 dark:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-1/3 right-10 w-[600px] h-[500px] bg-gradient-to-br from-[#7c3aed]/12 via-[#14b8a6]/8 to-transparent rounded-full blur-3xl pointer-events-none -z-10 opacity-30 dark:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
