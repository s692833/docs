# VitePress GitHub Pages Notes Site

Use this skill when maintaining this repository: a Markdown-based VitePress notes site deployed to GitHub Pages.

## Goal

Help the user add, edit, preview, build, and deploy technical notes with the smallest reliable VitePress workflow.

## Repository Facts

- Site source: `docs/`
- VitePress config: `docs/.vitepress/config.js`
- Home page: `docs/index.md`
- Frontend notes folder: `docs/frontend/`
- Backend notes folder: `docs/backend/`
- Deploy workflow: `.github/workflows/deploy.yml`
- Build output: `docs/.vitepress/dist/`
- Package manager: npm

## Standard Workflow

1. Inspect the current file structure with `rg --files -g !node_modules -g !docs/.vitepress/cache -g !docs/.vitepress/dist`.
2. Read `package.json` and `docs/.vitepress/config.js` before changing commands, navigation, or sidebar.
3. Edit Markdown pages under `docs/`.
4. Update `themeConfig.sidebar` in `docs/.vitepress/config.js` when adding pages that should appear in the sidebar.
5. Run `npm run docs:build` to verify the site.
6. If the user wants to preview locally, run `npm run docs:dev` and give them the local URL.
7. For deployment issues, inspect `.github/workflows/deploy.yml` and remind the user that GitHub Pages source must be set to `GitHub Actions`.

## Adding A New Note

Choose a folder based on topic:

- Frontend note: `docs/frontend/<topic>.md`
- Backend note: `docs/backend/<topic>.md`
- New category: `docs/<category>/<topic>.md`

Use this Markdown shape:

```md
# Page Title

Short introduction.

## Section

Content with examples.

```js
console.log('example')
```

## Next Step

- One concrete follow-up
- Another concrete follow-up
```

Then update `docs/.vitepress/config.js`:

```js
sidebar: [
  {
    text: '前端筆記',
    items: [
      { text: 'JavaScript 基礎', link: '/frontend/javascript-basics' }
    ]
  }
]
```

VitePress links should omit `.md`.

## Local Preview

Use:

```sh
npm run docs:dev
```

Then open the URL shown by VitePress, usually:

```text
http://localhost:5173/
```

## Build Check

Use:

```sh
npm run docs:build
```

Build must pass before pushing changes that affect config, navigation, or page links.

## GitHub Pages Deployment

Deployment runs when changes are pushed to `main`.

If deployment fails with a Pages metadata or `Get Pages site failed` error, check:

```text
Settings -> Pages -> Build and deployment -> Source -> GitHub Actions
```

The workflow expects the built site at:

```text
docs/.vitepress/dist
```

## Content Style

- Write notes in Traditional Chinese unless the user asks otherwise.
- Keep explanations beginner-friendly.
- Prefer practical examples over long theory.
- Use clear Markdown headings.
- Use code fences with language identifiers.
- Avoid unrelated site redesigns when the user only asks for notes.

## Safety

- Do not delete existing notes unless the user asks.
- Do not commit `node_modules`, `.vitepress/cache`, or `.vitepress/dist`.
- Do not change the deployment branch away from `main` unless the user asks.
- Preserve the computed VitePress `base` setting unless there is a specific deployment reason to change it.
