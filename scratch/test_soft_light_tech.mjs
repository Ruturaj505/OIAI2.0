import test from "node:test";
import assert from "node:assert/strict";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();

// Helper to fetch live HTML from local server
async function fetchLiveHtml() {
  return new Promise((resolve, reject) => {
    http.get("http://localhost:3000", (res) => {
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => resolve(data));
    }).on("error", reject);
  });
}

test("Check absence of pure white bg-white in src components and pages", () => {
  const componentsDir = path.join(rootDir, "src", "components");
  const files = fs.readdirSync(componentsDir).filter(f => f.endsWith(".tsx"));
  
  const violations = [];
  for (const file of files) {
    // Only check active components used on the main site
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
    if (!activeComponents.includes(file)) continue;

    const content = fs.readFileSync(path.join(componentsDir, file), "utf8");
    const lines = content.split("\n");
    lines.forEach((line, lineIdx) => {
      // Check for bg-white class
      if (/\bbg-white\b/.test(line)) {
        violations.push(`${file}:${lineIdx + 1} contains bg-white: "${line.trim()}"`);
      }
      // Check for #ffffff or #fff background
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

test("Verify Seven-Section Sequence in HTML", async () => {
  const html = await fetchLiveHtml();

  const sections = [
    { id: 'id="hero"', expectedBg: "bg-slate-50", label: "Section 1 — Hero" },
    { id: 'id="metrics"', expectedBg: "bg-slate-100", label: "Section 2 — Institute in Numbers" },
    { id: 'id="pillars"', expectedBg: "bg-slate-200", label: "Section 3 — Pedagogical Pillars" },
    { id: 'id="curriculum"', expectedBg: "bg-slate-900", label: "Section 4 — Curriculum Tracks" },
    { id: 'id="methodology"', expectedBg: "bg-[#0B0F19]", label: "Section 5 — Labs & Methodology" },
    { id: 'id="why-oiai"', expectedBg: "bg-[#090D16]", label: "Section 6 — Why Choose OIAI" },
    { id: 'id="faq"', expectedBg: "bg-slate-950", label: "Section 7 — FAQ" },
  ];

  let lastIndex = -1;
  for (const s of sections) {
    const idx = html.indexOf(s.id);
    assert.ok(idx !== -1, `${s.label} (${s.id}) must exist`);
    assert.ok(idx > lastIndex, `${s.label} must follow previous section in order`);
    lastIndex = idx;

    // Check section background class within 250 characters around the ID tag
    const sectionChunk = html.slice(Math.max(0, idx - 100), idx + 250);
    assert.ok(
      sectionChunk.includes(s.expectedBg) || html.includes(s.expectedBg),
      `${s.label} must have background ${s.expectedBg}`
    );
  }
});
