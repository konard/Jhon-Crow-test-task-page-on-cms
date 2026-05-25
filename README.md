# test-task-page-on-cms

Responsive CMS-backed landing page for issue #1.

## Run locally

Requirements:

- PHP 8+
- Node.js 18+

```bash
npm test
npm run serve
```

Then open http://127.0.0.1:8080.

## Structure

- `public/index.php` renders the page.
- `public/content/home.json` stores editable CMS content.
- `public/assets/styles.css` contains the responsive layout.
- `docs/case-studies/issue-1` documents research, decisions, and optimization notes.
