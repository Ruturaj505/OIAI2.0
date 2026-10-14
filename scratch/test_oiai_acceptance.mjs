import test from "node:test";
import assert from "node:assert/strict";
import http from "node:http";

// 1. Data Integrity Tests
import { CURRICULUM_TRACKS } from "../src/data/curriculum.ts";
import { INSTITUTE_METRICS } from "../src/data/metrics.ts";
import { PEDAGOGICAL_PILLARS } from "../src/data/pedagogy.ts";
import { METHODOLOGY_STAGES } from "../src/data/methodology.ts";
import { INSTITUTIONAL_VALUES } from "../src/data/institutionalValues.ts";
import { FAQ_QUESTIONS } from "../src/data/faq.ts";

test("Section 4 Acceptance: Exactly 12 curriculum tracks exist", () => {
  assert.equal(CURRICULUM_TRACKS.length, 12, "Curriculum must have exactly 12 tracks");
  
  const expectedTitles = [
    "AI Foundations",
    "Generative AI",
    "Prompt Engineering",
    "Python for AI",
    "Machine Learning",
    "Deep Learning",
    "Data Science",
    "Computer Vision",
    "Natural Language Processing",
    "AI Agents and Automation",
    "Responsible AI and AI Safety",
    "AI for Business",
  ];

  expectedTitles.forEach((title, idx) => {
    assert.equal(CURRICULUM_TRACKS[idx].title, title, `Track ${idx + 1} title should be ${title}`);
    assert.ok(CURRICULUM_TRACKS[idx].description.length > 20, `Track ${title} has description`);
    assert.ok(CURRICULUM_TRACKS[idx].keyOutcome.length > 20, `Track ${title} has key outcome`);
    assert.ok(CURRICULUM_TRACKS[idx].duration.includes("Estimated") || CURRICULUM_TRACKS[idx].duration.includes("Weeks"), `Track ${title} duration is placeholder`);
  });
});

test("Section 4 Filtering Logic: Combined audience and level filtering", () => {
  // Test Students filter
  const studentTracks = CURRICULUM_TRACKS.filter(t => t.audiences.includes("Students"));
  assert.ok(studentTracks.length > 0 && studentTracks.length < 12, "Students filter subsets data");

  // Test Corporate filter
  const corporateTracks = CURRICULUM_TRACKS.filter(t => t.audiences.includes("Corporate"));
  assert.ok(corporateTracks.length > 0 && corporateTracks.length < 12, "Corporate filter subsets data");

  // Test Beginner filter
  const beginnerTracks = CURRICULUM_TRACKS.filter(t => t.level === "Beginner");
  assert.ok(beginnerTracks.length > 0, "Beginner level tracks exist");

  // Test Advanced filter
  const advancedTracks = CURRICULUM_TRACKS.filter(t => t.level === "Advanced");
  assert.ok(advancedTracks.length > 0, "Advanced level tracks exist");

  // Test Combined: Corporate + Advanced
  const corpAdvanced = CURRICULUM_TRACKS.filter(t => t.audiences.includes("Corporate") && t.level === "Advanced");
  assert.ok(corpAdvanced.length > 0, "Combined filter (Corporate + Advanced) works");
});

test("Section 2 Acceptance: Institute metrics are properly structured", () => {
  assert.ok(INSTITUTE_METRICS.length >= 4 && INSTITUTE_METRICS.length <= 6, "Must have 4-6 metrics");
  const placeholders = INSTITUTE_METRICS.filter(m => m.isPlaceholder);
  assert.ok(placeholders.length > 0, "Contains transparent placeholder markers");
});

test("Section 3 Acceptance: Pedagogical pillars contains 6 feature cards", () => {
  assert.equal(PEDAGOGICAL_PILLARS.length, 6, "Must have exactly 6 pedagogical pillars");
  const expectedPillars = [
    "Project-Based Learning",
    "AI-First Thinking",
    "Hands-On Experimentation",
    "Responsible AI",
    "Collaborative Learning",
    "Continuous Skill Development",
  ];
  PEDAGOGICAL_PILLARS.forEach((p, idx) => {
    assert.equal(p.title, expectedPillars[idx]);
  });
});

test("Section 5 Acceptance: Labs & Methodology contains 6 stages", () => {
  assert.equal(METHODOLOGY_STAGES.length, 6, "Must have exactly 6 methodology stages");
  const expectedStages = ["Discover", "Learn", "Experiment", "Build", "Evaluate", "Deploy"];
  METHODOLOGY_STAGES.forEach((s, idx) => {
    assert.equal(s.name, expectedStages[idx]);
  });
});

test("Section 6 Acceptance: Why Choose OIAI contains 6 institutional values", () => {
  assert.equal(INSTITUTIONAL_VALUES.length, 6, "Must have exactly 6 institutional values");
  const expectedValues = [
    "Industry-Relevant Learning",
    "Practical Projects",
    "Responsible AI",
    "Guided Learning",
    "Modern AI Tooling",
    "Career Development",
  ];
  INSTITUTIONAL_VALUES.forEach((v, idx) => {
    assert.equal(v.title, expectedValues[idx]);
  });
});

test("Section 7 Acceptance: FAQ contains the exact 6 questions", () => {
  assert.equal(FAQ_QUESTIONS.length, 6, "Must have exactly 6 FAQ items");
  const expectedQuestions = [
    "Who can enrol in OIAI programs?",
    "Do I need prior programming experience?",
    "Are there programs for corporate teams?",
    "How are projects and assessments conducted?",
    "What tools are used during training?",
    "How can I contact OIAI?",
  ];
  FAQ_QUESTIONS.forEach((q, idx) => {
    assert.equal(q.question, expectedQuestions[idx]);
  });
});

// 2. End-to-End Live HTTP Integration Test
test("Live Application Response & Seven Section Sequence Verification", async () => {
  const html = await new Promise((resolve, reject) => {
    http.get("http://localhost:3000", (res) => {
      assert.equal(res.statusCode, 200, "Server must return HTTP 200 OK");
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => resolve(data));
    }).on("error", reject);
  });

  assert.ok(html.length > 50000, "HTML page must be fully rendered");

  // Verify all 7 section landmarks exist
  const sections = [
    { id: 'id="hero"', label: "Section 1: Hero" },
    { id: 'id="metrics"', label: "Section 2: Institute in Numbers" },
    { id: 'id="pillars"', label: "Section 3: Pedagogical Pillars" },
    { id: 'id="curriculum"', label: "Section 4: Curriculum Tracks" },
    { id: 'id="methodology"', label: "Section 5: Labs & Methodology" },
    { id: 'id="why-oiai"', label: "Section 6: Why Choose OIAI" },
    { id: 'id="faq"', label: "Section 7: FAQ" },
  ];

  let lastIndex = -1;
  sections.forEach((s) => {
    const idx = html.indexOf(s.id);
    assert.ok(idx !== -1, `${s.label} (${s.id}) must exist in HTML`);
    assert.ok(idx > lastIndex, `${s.label} must appear in the correct sequence after previous section`);
    lastIndex = idx;
  });

  // Verify headline
  assert.ok(html.includes("Learn Artificial Intelligence") || html.includes("Build the Intelligence"), "Must contain headline");
  assert.ok(html.includes("Launch Your AI Career") || html.includes("Behind Tomorrow."), "Must contain headline suffix");

  // Verify Primary and Secondary CTAs
  assert.ok(html.includes("Explore AI Programs") || html.includes("Explore Programs"), "Must contain primary CTA");
  assert.ok(html.includes("Download Course Brochure") || html.includes("Discover OIAI"), "Must contain secondary CTA");
});
