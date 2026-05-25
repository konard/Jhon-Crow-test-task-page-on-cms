const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const contentPath = path.join(__dirname, '..', 'public', 'content', 'home.json');
const pagePath = path.join(__dirname, '..', 'public', 'index.php');
const cssPath = path.join(__dirname, '..', 'public', 'assets', 'styles.css');
const pagesWorkflowPath = path.join(__dirname, '..', '.github', 'workflows', 'pages.yml');

const content = JSON.parse(fs.readFileSync(contentPath, 'utf8'));
const page = fs.readFileSync(pagePath, 'utf8');
const css = fs.readFileSync(cssPath, 'utf8');
const pagesWorkflow = fs.readFileSync(pagesWorkflowPath, 'utf8');

assert.ok(content.meta.title.length > 0, 'meta title is required');
assert.ok(content.meta.description.length > 40, 'meta description should be useful for SEO');
assert.ok(content.hero.title.length > 0, 'hero title is required');
assert.equal(content.features.length, 3, 'expected three feature cards');
assert.equal(content.stats.length, 3, 'expected three stat blocks');
assert.ok(content.process.length >= 4, 'process should document implementation steps');

assert.match(page, /json_decode\(file_get_contents\(\$contentPath\)/, 'page must render CMS content from JSON');
assert.match(page, /htmlspecialchars/, 'dynamic content must be escaped');
assert.match(page, /<meta name="description"/, 'page must expose SEO description');
assert.match(page, /href="assets\/styles\.css"/, 'stylesheet path must work on project GitHub Pages');
assert.doesNotMatch(page, /href="\/assets\//, 'stylesheet path must not be root-relative');
assert.match(css, /@media \(max-width: 820px\)/, 'responsive breakpoint is required');
assert.match(css, /grid-template-columns: repeat\(3/, 'desktop grid layout is required');
assert.match(pagesWorkflow, /actions\/deploy-pages@v4/, 'workflow must deploy to GitHub Pages');
assert.match(pagesWorkflow, /php public\/index\.php > dist\/index\.html/, 'workflow must render PHP page into a static artifact');
assert.match(pagesWorkflow, /npm test/, 'workflow must run tests before deployment');
assert.match(pagesWorkflow, /actions\/configure-pages/, 'workflow must configure Pages source to use GitHub Actions deployment');

console.log('Content, template, SEO, responsive, and deployment checks passed.');
