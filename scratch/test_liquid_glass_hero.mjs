import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();

test("Liquid Glass CSS Class Verification", () => {
  const globalsCss = fs.readFileSync(path.join(rootDir, "src", "app", "globals.css"), "utf8");
  const indexCss = fs.readFileSync(path.join(rootDir, "src", "index.css"), "utf8");

  for (const [name, content] of [["globals.css", globalsCss], ["index.css", indexCss]]) {
    assert.ok(content.includes(".liquid-glass {"), `${name} must define .liquid-glass`);
    assert.ok(content.includes("backdrop-filter: blur(4px)"), `${name} must include backdrop-filter: blur(4px)`);
    assert.ok(content.includes(".liquid-glass::before {"), `${name} must define .liquid-glass::before`);
    assert.ok(content.includes("pointer-events: none"), `${name} ::before must have pointer-events: none`);
    assert.ok(content.includes("mask-composite: exclude"), `${name} ::before must have mask-composite: exclude`);
  }
});

test("Hero Video Background & Layering Verification in live HTML", async () => {
  const res = await fetch("http://localhost:3000");
  assert.equal(res.status, 200, "Server must return 200");
  const html = await res.text();

  // 1. Video presence & attributes
  assert.ok(
    html.includes("https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_230229_7c9bc431-46cf-489a-948d-e8144d8eb5d4.mp4"),
    "Hero must load the exact video background URL"
  );
  assert.ok(/autoplay/i.test(html), "Video must have autoplay");
  assert.ok(html.includes("muted"), "Video must have muted");
  assert.ok(html.includes("loop"), "Video must have loop");
  assert.ok(/playsinline/i.test(html), "Video must have playsinline");
  assert.ok(html.includes("object-cover"), "Video must have object-cover");

  // 2. Liquid glass usage
  assert.ok(html.includes("liquid-glass"), "HTML must utilize .liquid-glass styling");

  // 3. OIAI Identity and Heading
  assert.ok(html.includes("Build the Intelligence"), "Hero headline must be preserved");
  assert.ok(html.includes("Behind Tomorrow."), "Hero headline continuation must be preserved");
  assert.ok(html.includes("Odisha Institute of Artificial Intelligence"), "OIAI brand must be preserved");
  assert.ok(html.includes("Explore Programs"), "Hero primary CTA must be preserved");
  assert.ok(html.includes("Discover OIAI"), "Hero secondary CTA must be preserved");

  // 4. Navbar Elements & Roles
  assert.ok(html.includes('id="main-navbar"'), "Navbar must have id main-navbar");
  assert.ok(html.includes('role="banner"'), "Navbar must have role banner");
  assert.ok(html.includes('id="nav-logo"'), "Logo must have id nav-logo");
  assert.ok(html.includes('id="nav-explore-btn"'), "Explore CTA must have id nav-explore-btn");
  assert.ok(html.includes('id="mobile-menu-toggle"'), "Mobile toggle must have id mobile-menu-toggle");
});
