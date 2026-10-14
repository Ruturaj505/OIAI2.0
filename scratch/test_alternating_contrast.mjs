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

test("Alternating Palette: Section 1 - Hero (#F8FAFC)", () => {
  const bg = "#f8fafc";
  const heading = "#0f172a";
  const body = "#334155";
  const accent = "#4f46e5";
  const buttonBg = "#4338ca";
  const buttonText = "#f8fafc";

  const rHead = getContrastRatio(heading, bg);
  const rBody = getContrastRatio(body, bg);
  const rAcc = getContrastRatio(accent, bg);
  const rBtn = getContrastRatio(buttonText, buttonBg);

  assert.ok(rHead >= 7.0, `Hero heading contrast ${rHead.toFixed(2)} meets AAA`);
  assert.ok(rBody >= 7.0, `Hero body contrast ${rBody.toFixed(2)} meets AAA`);
  assert.ok(rAcc >= 4.5, `Hero accent contrast ${rAcc.toFixed(2)} meets AA`);
  assert.ok(rBtn >= 7.0, `Hero button text contrast ${rBtn.toFixed(2)} meets AAA`);
});

test("Alternating Palette: Section 2 - Metrics (#E2E8F0)", () => {
  const bg = "#e2e8f0";
  const cardBg = "#e8edf5";
  const heading = "#0f172a";
  const body = "#334155";
  const metric = "#4338ca";

  const rHead = getContrastRatio(heading, cardBg);
  const rBody = getContrastRatio(body, cardBg);
  const rMet = getContrastRatio(metric, cardBg);

  assert.ok(rHead >= 7.0, `Metrics heading contrast ${rHead.toFixed(2)} meets AAA`);
  assert.ok(rBody >= 7.0, `Metrics body contrast ${rBody.toFixed(2)} meets AAA`);
  assert.ok(rMet >= 4.5, `Metrics number contrast ${rMet.toFixed(2)} meets AA/AAA large (>= 4.5:1)`);
});

test("Alternating Palette: Section 3 - Pedagogical Pillars (#F1F5F9)", () => {
  const cardBg = "#e9eafe";
  const heading = "#0f172a";
  const body = "#334155";
  const accent = "#4f46e5";

  const rHead = getContrastRatio(heading, cardBg);
  const rBody = getContrastRatio(body, cardBg);
  const rAcc = getContrastRatio(accent, cardBg);

  assert.ok(rHead >= 7.0, `Pillars heading contrast ${rHead.toFixed(2)} meets AAA`);
  assert.ok(rBody >= 7.0, `Pillars body contrast ${rBody.toFixed(2)} meets AAA`);
  assert.ok(rAcc >= 4.5, `Pillars accent contrast ${rAcc.toFixed(2)} meets AA`);
});

test("Alternating Palette: Section 4 - Curriculum Tracks (#312E81)", () => {
  const bg = "#312e81";
  const cardBg = "#25234f";
  const heading = "#f1f5f9";
  const body = "#cbd5e1";
  const accent = "#a5b4fc";
  const activeTabBg = "#a5b4fc";
  const activeTabText = "#1e1b4b";

  const rHead = getContrastRatio(heading, cardBg);
  const rBody = getContrastRatio(body, cardBg);
  const rAcc = getContrastRatio(accent, cardBg);
  const rTab = getContrastRatio(activeTabText, activeTabBg);

  assert.ok(rHead >= 7.0, `Curriculum heading contrast ${rHead.toFixed(2)} meets AAA`);
  assert.ok(rBody >= 7.0, `Curriculum body contrast ${rBody.toFixed(2)} meets AAA`);
  assert.ok(rAcc >= 4.5, `Curriculum accent contrast ${rAcc.toFixed(2)} meets AA`);
  assert.ok(rTab >= 7.0, `Curriculum active tab contrast ${rTab.toFixed(2)} meets AAA`);
});

test("Alternating Palette: Section 5 - Labs & Methodology (#1E1B4B)", () => {
  const cardBg = "#272451";
  const heading = "#f1f5f9";
  const body = "#cbd5e1";
  const accent = "#c4b5fd";

  const rHead = getContrastRatio(heading, cardBg);
  const rBody = getContrastRatio(body, cardBg);
  const rAcc = getContrastRatio(accent, cardBg);

  assert.ok(rHead >= 7.0, `Labs heading contrast ${rHead.toFixed(2)} meets AAA`);
  assert.ok(rBody >= 7.0, `Labs body contrast ${rBody.toFixed(2)} meets AAA`);
  assert.ok(rAcc >= 7.0, `Labs accent contrast ${rAcc.toFixed(2)} meets AAA`);
});

test("Alternating Palette: Section 6 - Why Choose OIAI (#17153B)", () => {
  const cardBg = "#25234f";
  const heading = "#f1f5f9";
  const body = "#cbd5e1";
  const accent = "#a5b4fc";

  const rHead = getContrastRatio(heading, cardBg);
  const rBody = getContrastRatio(body, cardBg);
  const rAcc = getContrastRatio(accent, cardBg);

  assert.ok(rHead >= 7.0, `Why OIAI heading contrast ${rHead.toFixed(2)} meets AAA`);
  assert.ok(rBody >= 7.0, `Why OIAI body contrast ${rBody.toFixed(2)} meets AAA`);
  assert.ok(rAcc >= 4.5, `Why OIAI accent contrast ${rAcc.toFixed(2)} meets AA`);
});

test("Alternating Palette: Section 7 - FAQ & Footer (#0B1026)", () => {
  const bg = "#0b1026";
  const cardBg = "#17153b";
  const heading = "#e2e8f0";
  const body = "#cbd5e1";
  const accent = "#c4b5fd";

  const rHead = getContrastRatio(heading, cardBg);
  const rBody = getContrastRatio(body, cardBg);
  const rAcc = getContrastRatio(accent, cardBg);
  const rFooter = getContrastRatio(body, bg);

  assert.ok(rHead >= 7.0, `FAQ heading contrast ${rHead.toFixed(2)} meets AAA`);
  assert.ok(rBody >= 7.0, `FAQ body contrast ${rBody.toFixed(2)} meets AAA`);
  assert.ok(rAcc >= 7.0, `FAQ accent contrast ${rAcc.toFixed(2)} meets AAA`);
  assert.ok(rFooter >= 7.0, `Footer text contrast ${rFooter.toFixed(2)} meets AAA`);
});
