import test from "node:test";
import assert from "node:assert/strict";

test("Live E2E HTML DOM Verification", async () => {
  const res = await fetch("http://localhost:3000");
  assert.equal(res.status, 200, "Dev server must return HTTP 200");
  const html = await res.text();

  // 1. Check Section Landmarks & Backgrounds
  const heroMatch = html.match(/id="hero"[^>]*class="[^"]*"/);
  assert.ok(heroMatch, "Hero section #hero must be present");
  assert.match(heroMatch[0], /bg-slate-50/, "Hero section must use bg-slate-50 (#F8FAFC)");

  const metricsMatch = html.match(/id="metrics"[^>]*class="[^"]*"/);
  assert.ok(metricsMatch, "Metrics section #metrics must be present");
  assert.match(metricsMatch[0], /bg-slate-200/, "Metrics section must use bg-slate-200 (#E2E8F0)");

  const pillarsMatch = html.match(/id="pillars"[^>]*class="[^"]*"/);
  assert.ok(pillarsMatch, "Pillars section #pillars must be present");
  assert.match(pillarsMatch[0], /bg-slate-100/, "Pillars section must use bg-slate-100 (#F1F5F9)");

  const curriculumMatch = html.match(/id="curriculum"[^>]*class="[^"]*"/);
  assert.ok(curriculumMatch, "Curriculum section #curriculum must be present");
  assert.match(curriculumMatch[0], /bg-indigo-900/, "Curriculum section must use bg-indigo-900 (#312E81)");

  const methodologyMatch = html.match(/id="methodology"[^>]*class="[^"]*"/);
  assert.ok(methodologyMatch, "Methodology section #methodology must be present");
  assert.match(methodologyMatch[0], /bg-indigo-950/, "Methodology section must use bg-indigo-950 (#1E1B4B)");

  const whyOiaiMatch = html.match(/id="why-oiai"[^>]*class="[^"]*"/);
  assert.ok(whyOiaiMatch, "Why Choose OIAI section #why-oiai must be present");
  assert.match(whyOiaiMatch[0], /bg-\[#17153B\]/, "Why Choose OIAI section must use bg-[#17153B]");

  const faqMatch = html.match(/id="faq"[^>]*class="[^"]*"/);
  assert.ok(faqMatch, "FAQ section #faq must be present");
  assert.match(faqMatch[0], /bg-\[#0B1026\]/, "FAQ section must use bg-[#0B1026]");

  const footerMatch = html.match(/<footer[^>]*class="[^"]*"/);
  assert.ok(footerMatch, "Footer must be present");
  assert.match(footerMatch[0], /bg-\[#0B1026\]/, "Footer must use bg-[#0B1026]");

  // 2. Relative Order Verification
  const posHero = html.indexOf('id="hero"');
  const posMetrics = html.indexOf('id="metrics"');
  const posPillars = html.indexOf('id="pillars"');
  const posCurriculum = html.indexOf('id="curriculum"');
  const posMethodology = html.indexOf('id="methodology"');
  const posWhyOiai = html.indexOf('id="why-oiai"');
  const posFaq = html.indexOf('id="faq"');
  const posFooter = html.indexOf('<footer');

  assert.ok(posHero < posMetrics, "Hero before Metrics");
  assert.ok(posMetrics < posPillars, "Metrics before Pillars");
  assert.ok(posPillars < posCurriculum, "Pillars before Curriculum");
  assert.ok(posCurriculum < posMethodology, "Curriculum before Methodology");
  assert.ok(posMethodology < posWhyOiai, "Methodology before Why OIAI");
  assert.ok(posWhyOiai < posFaq, "Why OIAI before FAQ");
  assert.ok(posFaq < posFooter, "FAQ before Footer");

  // 3. Absolute prohibition of pure white bg-white
  // Match any class="...bg-white..." attribute in HTML
  const bgWhiteMatches = html.match(/class="[^"]*\bbg-white\b[^"]*"/g) || [];
  assert.equal(bgWhiteMatches.length, 0, `Expected zero bg-white occurrences in live HTML, found: ${bgWhiteMatches.length}`);

  // 4. Accessibility and Semantic Structure
  assert.ok(html.includes('role="navigation"'), "Navbar has role navigation");
  assert.ok(html.includes('role="contentinfo"'), "Footer has role contentinfo");
  assert.ok(html.includes('role="region"'), "Sections have role region");
  assert.ok(html.includes('aria-expanded'), "Accordion or dropdown items contain aria-expanded");
  assert.ok(html.includes('aria-controls'), "Interactive elements contain aria-controls");
  assert.ok(html.includes('<h1'), "Page has h1 heading");
  assert.ok(html.includes('<h2'), "Page has h2 headings");
});
