"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  pulseSpeed: number;
  pulsePhase: number;
}

export default function HeroBackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number | null; y: number | null; radius: number }>({
    x: null,
    y: null,
    radius: 140,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.parentElement.getBoundingClientRect();
      width = Math.max(Math.floor(rect.width), 320);
      height = Math.max(Math.floor(rect.height), 400);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Generate particles
    const particleCount = Math.floor(Math.min(Math.max((width * height) / 14000, 45), 90));
    const particles: Particle[] = [];
    const colors = [
      "rgba(0, 242, 254, 0.8)",   // Electric Cyan
      "rgba(79, 172, 254, 0.75)",  // Teal Blue
      "rgba(56, 189, 248, 0.7)",   // Sky Blue
      "rgba(147, 197, 253, 0.6)",  // Soft Blue
    ];

    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 2 + 1.2;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius,
        baseRadius: radius,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulseSpeed: 0.02 + Math.random() * 0.03,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove);
      parent.addEventListener("mouseleave", handleMouseLeave);
    }

    // Render loop
    const maxDistance = 135;
    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Draw particle connections & nodes
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move particle
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Bounce on boundaries
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Subtle pulsing
        p1.pulsePhase += p1.pulseSpeed;
        p1.radius = p1.baseRadius + Math.sin(p1.pulsePhase) * 0.5;

        // Mouse interaction attraction & repulsion
        if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
          const dxMouse = mouseRef.current.x - p1.x;
          const dyMouse = mouseRef.current.y - p1.y;
          const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

          if (distMouse < mouseRef.current.radius) {
            const angle = Math.atan2(dyMouse, dxMouse);
            const force = (mouseRef.current.radius - distMouse) / mouseRef.current.radius;
            // Gentle magnetic pull toward mouse
            p1.x += Math.cos(angle) * force * 0.8;
            p1.y += Math.sin(angle) * force * 0.8;

            // Draw line to mouse
            const mouseAlpha = (1 - distMouse / mouseRef.current.radius) * 0.5;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 242, 254, ${mouseAlpha})`;
            ctx.lineWidth = 1.2;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.stroke();
          }
        }

        // Draw connections between particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.28;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(79, 172, 254, ${alpha})`;
            ctx.lineWidth = 0.85;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, Math.max(0.5, p1.radius), 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.shadowColor = "#00f2fe";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove);
        parent.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="hero-neural-canvas"
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none -z-10 opacity-70"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
