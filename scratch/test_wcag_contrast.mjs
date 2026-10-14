import test from "node:test";
import assert from "node:assert/strict";

function srgbToLinear(c) {
  const norm = c / 255;
  return norm <= 0.04045 ? norm / 12.92 : Math.pow((norm + 0.055) / 1.055, 2.4);
}

function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  const num = parseInt(clean, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255
  };
}

function getLuminance(hex) {
  const { r, g, b } = hexToRgb(hex);
  return 0.2126 * srgbToLinear(r) + 0.7152 * srgbToLinear(g) + 0.0722 * srgbToLinear(b);
}

function getContrastRatio(hex1, hex2) {
  const lum1 = getLuminance(hex1);
  const lum2 = getLuminance(hex2);
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (lighter + 0.05) / (darker + 0.05);
}

test("WCAG Contrast: Section 1 - Hero (#F8FAFC)", () => {
  const bg = "#f8fafc";
  const heading = "#0f172a"; // slate-900
  const body = "#334155"; // slate-700
  const accent = "#4338ca"; // indigo-700
  const buttonBg = "#4338ca"; // indigo-700
  const buttonText = "#f8fafc"; // slate-50

  const ratioHeading = getContrastRatio(heading, bg);
  const ratioBody = getContrastRatio(body, bg);
  const ratioAccent = getContrastRatio(accent, bg);
  const ratioBtn = getContrastRatio(buttonText, buttonBg);

  assert.ok(ratioHeading >= 7.0, `Hero heading contrast ${ratioHeading.toFixed(2)} should meet AAA (>= 7:1)`);
  assert.ok(ratioBody >= 7.0, `Hero body contrast ${ratioBody.toFixed(2)} should meet AAA (>= 7:1)`);
  assert.ok(ratioAccent >= 4.5, `Hero accent contrast ${ratioAccent.toFixed(2)} should meet AA (>= 4.5:1)`);
  assert.ok(ratioBtn >= 7.0, `Hero button text contrast ${ratioBtn.toFixed(2)} should meet AAA (>= 7:1)`);
});

test("WCAG Contrast: Section 2 - Metrics (#F1F5F9)", () => {
  const bg = "#f1f5f9";
  const heading = "#0f172a"; // slate-900
  const body = "#334155"; // slate-700
  const metric = "#3730a3"; // indigo-800

  const ratioHeading = getContrastRatio(heading, bg);
  const ratioBody = getContrastRatio(body, bg);
  const ratioMetric = getContrastRatio(metric, bg);

  assert.ok(ratioHeading >= 7.0, `Metrics heading contrast ${ratioHeading.toFixed(2)} should meet AAA`);
  assert.ok(ratioBody >= 7.0, `Metrics body contrast ${ratioBody.toFixed(2)} should meet AAA`);
  assert.ok(ratioMetric >= 7.0, `Metrics numbers contrast ${ratioMetric.toFixed(2)} should meet AAA (>= 7:1)`);
});

test("WCAG Contrast: Section 3 - Pedagogical Pillars (#E2E8F0)", () => {
  const cardBg = "#f1f5f9"; // slate-100 card
  const heading = "#0f172a"; // slate-900
  const body = "#334155"; // slate-700
  const accent = "#3730a3"; // indigo-800

  const ratioHeading = getContrastRatio(heading, cardBg);
  const ratioBody = getContrastRatio(body, cardBg);
  const ratioAccent = getContrastRatio(accent, cardBg);

  assert.ok(ratioHeading >= 7.0, `Pillars heading contrast ${ratioHeading.toFixed(2)} should meet AAA`);
  assert.ok(ratioBody >= 7.0, `Pillars body contrast ${ratioBody.toFixed(2)} should meet AAA`);
  assert.ok(ratioAccent >= 7.0, `Pillars accent contrast ${ratioAccent.toFixed(2)} should meet AAA`);
});

test("WCAG Contrast: Section 4 - Curriculum Tracks (#0F172A)", () => {
  const cardBg = "#1e293b"; // slate-800 card
  const heading = "#f8fafc"; // slate-50
  const body = "#cbd5e1"; // slate-300
  const accent = "#a5b4fc"; // indigo-300
  const activeTabBg = "#a5b4fc"; // indigo-300
  const activeTabText = "#020617"; // slate-950

  const ratioHeading = getContrastRatio(heading, cardBg);
  const ratioBody = getContrastRatio(body, cardBg);
  const ratioAccent = getContrastRatio(accent, cardBg);
  const ratioActiveTab = getContrastRatio(activeTabText, activeTabBg);

  assert.ok(ratioHeading >= 7.0, `Curriculum heading contrast ${ratioHeading.toFixed(2)} should meet AAA`);
  assert.ok(ratioBody >= 7.0, `Curriculum body contrast ${ratioBody.toFixed(2)} should meet AAA`);
  assert.ok(ratioAccent >= 4.5, `Curriculum accent contrast ${ratioAccent.toFixed(2)} should meet AA (>= 4.5:1)`);
  assert.ok(ratioActiveTab >= 7.0, `Curriculum active filter tab contrast ${ratioActiveTab.toFixed(2)} should meet AAA`);
});

test("WCAG Contrast: Section 5 - Labs & Methodology (#0B0F19)", () => {
  const cardBg = "#151b2a";
  const heading = "#f8fafc"; // slate-50
  const body = "#cbd5e1"; // slate-300
  const accent = "#a5b4fc"; // indigo-300

  const ratioHeading = getContrastRatio(heading, cardBg);
  const ratioBody = getContrastRatio(body, cardBg);
  const ratioAccent = getContrastRatio(accent, cardBg);

  assert.ok(ratioHeading >= 7.0, `Labs heading contrast ${ratioHeading.toFixed(2)} should meet AAA`);
  assert.ok(ratioBody >= 7.0, `Labs body contrast ${ratioBody.toFixed(2)} should meet AAA`);
  assert.ok(ratioAccent >= 4.5, `Labs accent contrast ${ratioAccent.toFixed(2)} should meet AA`);
});

test("WCAG Contrast: Section 6 - Why Choose OIAI (#090D16)", () => {
  const cardBg = "#141b29";
  const heading = "#f8fafc"; // slate-50
  const body = "#cbd5e1"; // slate-300
  const accent = "#a5b4fc"; // indigo-300

  const ratioHeading = getContrastRatio(heading, cardBg);
  const ratioBody = getContrastRatio(body, cardBg);
  const ratioAccent = getContrastRatio(accent, cardBg);

  assert.ok(ratioHeading >= 7.0, `Why OIAI heading contrast ${ratioHeading.toFixed(2)} should meet AAA`);
  assert.ok(ratioBody >= 7.0, `Why OIAI body contrast ${ratioBody.toFixed(2)} should meet AAA`);
  assert.ok(ratioAccent >= 4.5, `Why OIAI accent contrast ${ratioAccent.toFixed(2)} should meet AA`);
});

test("WCAG Contrast: Section 7 - FAQ & Footer (#020617)", () => {
  const bg = "#020617";
  const cardBg = "#0f172a"; // slate-900 accordion
  const heading = "#f8fafc"; // slate-50
  const body = "#cbd5e1"; // slate-300
  const accent = "#a5b4fc"; // indigo-300
  const footerText = "#94a3b8"; // slate-400

  const ratioHeading = getContrastRatio(heading, cardBg);
  const ratioBody = getContrastRatio(body, cardBg);
  const ratioAccent = getContrastRatio(accent, cardBg);
  const ratioFooter = getContrastRatio(footerText, bg);

  assert.ok(ratioHeading >= 7.0, `FAQ heading contrast ${ratioHeading.toFixed(2)} should meet AAA`);
  assert.ok(ratioBody >= 7.0, `FAQ body contrast ${ratioBody.toFixed(2)} should meet AAA`);
  assert.ok(ratioAccent >= 4.5, `FAQ accent contrast ${ratioAccent.toFixed(2)} should meet AA`);
  assert.ok(ratioFooter >= 4.5, `Footer text contrast ${ratioFooter.toFixed(2)} should meet AA`);
});
