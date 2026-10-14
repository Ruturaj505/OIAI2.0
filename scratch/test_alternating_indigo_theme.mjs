import test from "node:test";
import assert from "node:assert/strict";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();

async function fetchLiveHtml() {
  return new Promise((resolve, reject) => {
    http.get("http://localhost:3000", (res) => {
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => resolve(data));
    }).on("error", reject);
  });
}

test("Check absence of pure white backgrounds anywhere in active components", () => {
  const componentsDir = path.join(rootDir, "src", "components");
  const files = fs.readdirSync(componentsDir).filter(f => f.endsWith(".tsx"));

  const violations = [];
  const activeComponents = [
    "Hero.tsx",
    "InstituteInNumbers.tsx",
    "PedagogicalPillars.tsx",
    "CurriculumCatalog.tsx",
    "LabsMethodology.tsx",
    "WhyChooseOIAI.tsx",
    "FaqSection.tsx",
    "Footer.tsx",
    "Navbar.tsx",
    "EnrollModal.tsx",
    "ProgramDetailModal.tsx"
  ];

  for (const file of files) {
    if (!activeComponents.includes(file)) continue;

    const content = fs.readFileSync(path.join(componentsDir, file), "utf8");
    const lines = content.split("\n");
    lines.forEach((line, lineIdx) => {
      if (/\bbg-white\b/.test(line)) {
        violations.push(`${file}:${lineIdx + 1} contains bg-white: "${line.trim()}"`);
      }
      if (/background(-color)?\s*:\s*#(ffffff|fff)\b/i.test(line)) {
        violations.push(`${file}:${lineIdx + 1} contains #ffffff background: "${line.trim()}"`);
      }
      if (/bg-\[#(ffffff|fff)\]/i.test(line)) {
        violations.push(`${file}:${lineIdx + 1} contains bg-[#ffffff] background: "${line.trim()}"`);
      }
    });
  }

  assert.equal(
    violations.length,
    0,
    `Found pure white background violations in active components:\n${violations.join("\n")}`
  );
});

test("Verify Alternating Soft Light & Deep Indigo Seven-Section Sequence in HTML", async () => {
  const html = await fetchLiveHtml();

  const sections = [
    { id: 'id="hero"', expectedBg: "bg-slate-50", hex: "#F8FAFC", label: "Section 1 — Hero" },
    { id: 'id="metrics"', expectedBg: "bg-slate-200", hex: "#E2E8F0", label: "Section 2 — Institute in Numbers" },
    { id: 'id="pillars"', expectedBg: "bg-slate-100", hex: "#F1F5F9", label: "Section 3 — Pedagogical Pillars" },
    { id: 'id="curriculum"', expectedBg: "bg-indigo-900", hex: "#312E81", label: "Section 4 — Curriculum Tracks" },
    { id: 'id="methodology"', expectedBg: "bg-indigo-950", hex: "#1E1B4B", label: "Section 5 — Labs & Methodology" },
    { id: 'id="why-oiai"', expectedBg: "bg-[#17153B]", hex: "#17153B", label: "Section 6 — Why Choose OIAI" },
    { id: 'id="faq"', expectedBg: "bg-[#0B1026]", hex: "#0B1026", label: "Section 7 — FAQ" },
  ];

  let lastIndex = -1;
  for (const s of sections) {
    const idx = html.indexOf(s.id);
    assert.ok(idx !== -1, `${s.label} (${s.id}) must exist`);
    assert.ok(idx > lastIndex, `${s.label} must follow previous section in order`);
    lastIndex = idx;

    const sectionChunk = html.slice(Math.max(0, idx - 100), idx + 250);
    assert.ok(
      sectionChunk.includes(s.expectedBg),
      `${s.label} must have background ${s.expectedBg}. Got chunk: ${sectionChunk}`
    );
  }

  // Also verify footer background
  const footerIdx = html.indexOf('<footer');
  assert.ok(footerIdx !== -1, "Footer must exist");
  const footerChunk = html.slice(footerIdx, footerIdx + 300);
  assert.ok(
    footerChunk.includes("bg-[#0B1026]"),
    `Footer must have background bg-[#0B1026]. Got: ${footerChunk}`
  );
});
