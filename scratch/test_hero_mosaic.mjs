import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();

test("1. Image Directory Inspection: public/images/hero contains actual files", () => {
  const heroImagesDir = path.join(rootDir, "public", "images", "hero");
  assert.ok(fs.existsSync(heroImagesDir), "public/images/hero directory must exist");
  
  const files = fs.readdirSync(heroImagesDir);
  assert.ok(files.length > 0, "public/images/hero must contain images");
  
  // Verify user's actual local hero photos exist
  assert.ok(files.includes("AI.jpg"), "AI.jpg must exist in public/images/hero");
  assert.ok(files.includes("download.jpg"), "download.jpg must exist in public/images/hero");
  assert.ok(files.includes("download (1).jpg"), "download (1).jpg must exist in public/images/hero");
  assert.ok(files.includes("download (2).jpg"), "download (2).jpg must exist in public/images/hero");
  assert.ok(
    files.includes("Don't Teach AI Without These Essential Classroom Resources.jpg"),
    "Classroom resources image must exist in public/images/hero"
  );
});

test("2. Code Integrity: No ATRIUM museum photos or invented filenames referenced", () => {
  const heroFile = fs.readFileSync(path.join(rootDir, "src", "components", "Hero.tsx"), "utf8");
  const mosaicFile = fs.readFileSync(path.join(rootDir, "src", "components", "HeroMosaic.tsx"), "utf8");
  
  const combined = heroFile + "\n" + mosaicFile;
  
  // No ATRIUM or unsplash references
  assert.equal(/atrium/i.test(combined), false, "Must not reference ATRIUM museum photos");
  assert.equal(/unsplash/i.test(combined), false, "Must not reference Unsplash photos");
  
  // All images referenced in HeroMosaic must exist in public/images/hero
  const heroImagesDir = path.join(rootDir, "public", "images", "hero");
  const actualFiles = fs.readdirSync(heroImagesDir);
  
  // Match full src strings enclosed in double quotes
  const matchedSrcs = mosaicFile.match(/\/images\/hero\/[^"\r\n]+/g) || [];
  assert.ok(matchedSrcs.length > 0, "Must reference hero images");
  
  for (const src of matchedSrcs) {
    const filename = path.basename(src);
    assert.ok(actualFiles.includes(filename), `Referenced file ${filename} must exist on disk`);
  }
});

test("3. Mosaic Architecture: Alternating vertical scroll directions & varied crops", () => {
  const mosaicFile = fs.readFileSync(path.join(rootDir, "src", "components", "HeroMosaic.tsx"), "utf8");
  
  // Alternating directions
  assert.ok(mosaicFile.includes('direction: "up"'), "Must have upward scrolling column");
  assert.ok(mosaicFile.includes('direction: "down"'), "Must have downward scrolling column");
  assert.ok(mosaicFile.includes("animate-mosaic-up"), "Must apply animate-mosaic-up");
  assert.ok(mosaicFile.includes("animate-mosaic-down"), "Must apply animate-mosaic-down");
  
  // Varied crops & rounded corners
  assert.ok(mosaicFile.includes("aspect-"), "Must have aspect ratio crops");
  assert.ok(mosaicFile.includes("rounded-2xl"), "Must have rounded-2xl corners");
  assert.ok(mosaicFile.includes("rounded-3xl"), "Must have rounded-3xl corners");
  
  // Seamless loop check
  assert.ok(mosaicFile.includes("[...col.items, ...col.items]"), "Must duplicate items for infinite loop");
});

test("4. Liquid Glass Verification: Translucent background, blur(4px), and gradient border", () => {
  const globalsCss = fs.readFileSync(path.join(rootDir, "src", "app", "globals.css"), "utf8");
  const indexCss = fs.readFileSync(path.join(rootDir, "src", "index.css"), "utf8");
  
  for (const [name, css] of [["globals.css", globalsCss], ["index.css", indexCss]]) {
    assert.ok(css.includes(".liquid-glass {"), `${name} must define .liquid-glass class`);
    assert.ok(css.includes("backdrop-filter: blur(4px)"), `${name} must include blur(4px)`);
    assert.ok(css.includes(".liquid-glass::before {"), `${name} must define .liquid-glass::before`);
    assert.ok(css.includes("linear-gradient"), `${name} must define gradient border`);
  }
});

test("5. Navigation Bar & Secondary CTA Liquid Glass & Identity", () => {
  const navbarFile = fs.readFileSync(path.join(rootDir, "src", "components", "Navbar.tsx"), "utf8");
  const heroFile = fs.readFileSync(path.join(rootDir, "src", "components", "Hero.tsx"), "utf8");
  
  assert.ok(navbarFile.includes("liquid-glass"), "Navbar must include liquid-glass");
  assert.ok(navbarFile.includes('id="main-navbar"'), "Navbar must have id main-navbar");
  assert.ok(navbarFile.includes('id="nav-logo"'), "Navbar must have id nav-logo");
  assert.ok(navbarFile.includes('id="nav-explore-btn"'), "Navbar must have id nav-explore-btn");
  
  assert.ok(heroFile.includes('id="hero-secondary-cta"'), "Hero must have id hero-secondary-cta");
  assert.ok(heroFile.includes("liquid-glass"), "Hero secondary CTA must have liquid-glass");
  assert.ok(heroFile.includes("Download Course Brochure") || heroFile.includes("Discover OIAI"), "Hero secondary CTA label");
  assert.ok(heroFile.includes("Explore AI Programs") || heroFile.includes("Explore Programs"), "Hero primary CTA label");
  assert.ok(heroFile.includes("Learn Artificial Intelligence") || heroFile.includes("Build the Intelligence"), "Hero headline");
});
