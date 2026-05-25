# Issue 1 Case Study

## Request

The issue asks to build a responsive page from a provided design, integrate it with a free CMS, document which parts were automated with AI, optimize the result, and compile supporting research in `docs/case-studies/issue-1`.

The Google Drive mockup could not be inspected directly from the repository, so the implementation focuses on the verifiable requirements: CMS-editable content, adaptive layout, semantic markup, interactive navigation anchors, and documented performance choices.

## CMS Choice

This solution uses a flat-file CMS structure: content lives in `public/content/home.json`, while `public/index.php` renders the template. It can run as-is on inexpensive PHP hosting and maps cleanly to free CMS tools.

Researched options:

- Pico CMS: free MIT-licensed flat-file CMS; its documentation describes the separation between Markdown content and Twig templates, which matches the architecture used here.
- GetSimple CMS: free PHP flat-file CMS backed by XML content.
- WordPress: free open-source CMS with broader plugin support, but heavier operational setup.
- Bitrix: suitable for a Russian-market production CMS integration, but less appropriate for a lightweight repository task because it requires a larger runtime and license-oriented ecosystem.

## Online Research Notes

Sources checked on May 25, 2026:

- Pico CMS official docs: https://picocms.org/docs/
- Pico CMS official site: https://picocms.org/
- Bitrix landing template API overview: https://apidocs.bitrix24.com/api-reference/landing/template/index.html
- Core Web Vitals checklist reference: https://www.corewebvitals.io/core-web-vitals/ultimate-checklist

Useful components and libraries for future expansion:

- Pico CMS with Twig templates for a production flat-file CMS version.
- WordPress Advanced Custom Fields for editor-managed content blocks.
- Bitrix landing templates or custom components when the deployment target is Bitrix.
- Lighthouse CI for automated performance checks.
- Playwright for visual regression tests across viewport sizes.

## AI-Assisted Work

AI was used to:

- Convert the broad task description into a structured implementation plan.
- Generate the initial semantic PHP template and responsive CSS.
- Draft the case-study analysis and optimization notes.
- Create automated checks that validate content shape, SEO metadata, escaping, and responsive CSS presence.

Human review should focus on matching the unavailable visual mockup once the design file is accessible.

## Optimization Decisions

- System font stack avoids external font requests.
- CSS is local and small, with no framework payload.
- The hero visual is inline SVG data instead of a network image request.
- Dynamic content is escaped with `htmlspecialchars`.
- Layout dimensions use grid, stable min heights, and responsive breakpoints to reduce layout shift.
- The page includes title, meta description, landmarks, headings, and accessible navigation labels.

## Implemented Files

- `public/index.php`: CMS-rendered landing page template.
- `public/content/home.json`: editable content source.
- `public/assets/styles.css`: responsive page styles.
- `tests/content.test.js`: lightweight regression checks.
- `package.json`: local test and PHP server scripts.
