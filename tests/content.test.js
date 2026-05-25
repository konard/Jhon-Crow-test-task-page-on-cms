const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const contentPath = path.join(__dirname, '..', 'public', 'content', 'home.json');
const pagePath = path.join(__dirname, '..', 'public', 'index.php');
const cssPath = path.join(__dirname, '..', 'public', 'assets', 'styles.css');

const content = JSON.parse(fs.readFileSync(contentPath, 'utf8'));
const page = fs.readFileSync(pagePath, 'utf8');
const css = fs.readFileSync(cssPath, 'utf8');

assert.ok(content.meta.title.length > 0, 'meta title is required');
assert.ok(content.meta.description.length > 40, 'meta description should be useful for SEO');
assert.ok(content.hero.title.length > 0, 'hero title is required');
assert.equal(content.features.length, 3, 'expected three feature cards');
assert.equal(content.stats.length, 3, 'expected three stat blocks');
assert.ok(content.process.length >= 4, 'process should document implementation steps');

assert.match(page, /json_decode\(file_get_contents\(\$contentPath\)/, 'page must render CMS content from JSON');
assert.match(page, /htmlspecialchars/, 'dynamic content must be escaped');
assert.match(page, /<meta name="description"/, 'page must expose SEO description');
assert.match(css, /@media \(max-width: 820px\)/, 'responsive breakpoint is required');
assert.match(css, /grid-template-columns: repeat\(3/, 'desktop grid layout is required');

console.log('Content, template, SEO, and responsive checks passed.');
