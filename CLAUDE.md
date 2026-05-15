# CLAUDE.md

This repository is a small VitePress documentation site for personal technical notes.

## Project Overview

- Content format: Markdown
- Site framework: VitePress
- Package manager: npm
- Version control: Git + GitHub
- Deployment: GitHub Pages through GitHub Actions
- Source directory: `docs/`
- Generated output: `docs/.vitepress/dist/`

The first version contains three pages:

- Home: `docs/index.md`
- Frontend notes: `docs/frontend/javascript-basics.md`
- Backend notes: `docs/backend/nodejs-basics.md`

## Common Commands

Install dependencies:

```sh
npm install
```

Start local development server:

```sh
npm run docs:dev
```

Build the static site:

```sh
npm run docs:build
```

Preview the built site:

```sh
npm run docs:preview
```

## Project Structure

```text
.
├── .github/workflows/deploy.yml
├── docs
│   ├── .vitepress/config.js
│   ├── backend/nodejs-basics.md
│   ├── frontend/javascript-basics.md
│   └── index.md
├── package-lock.json
└── package.json
```

## VitePress Notes

Main configuration lives in `docs/.vitepress/config.js`.

When adding a new note:

1. Create a Markdown file under `docs/frontend/`, `docs/backend/`, or another suitable folder.
2. Add the page to `themeConfig.sidebar` if it should appear in the sidebar.
3. Add the page to `themeConfig.nav` only if it is a top-level navigation item.
4. Run `npm run docs:build` before pushing.

The `base` value is computed from `GITHUB_REPOSITORY` during GitHub Actions builds. This allows the same config to work for both:

- User or organization Pages repos, such as `username.github.io`
- Project Pages repos, such as `username.github.io/repo-name/`

## Deployment

Deployment is configured in `.github/workflows/deploy.yml`.

The workflow runs on pushes to `main` and can also be started manually with `workflow_dispatch`.

GitHub repository settings must use:

```text
Settings -> Pages -> Build and deployment -> Source -> GitHub Actions
```

The workflow:

1. Checks out the repository.
2. Sets up Node.js 24.
3. Installs dependencies with `npm ci`.
4. Builds the site with `npm run docs:build`.
5. Uploads `docs/.vitepress/dist`.
6. Deploys the artifact to GitHub Pages.

## Editing Guidelines

- Keep notes in Markdown.
- Prefer short sections with clear headings.
- Use fenced code blocks with language labels, for example ` ```js ` or ` ```sh `.
- Keep examples beginner-friendly unless the page is explicitly advanced.
- Do not commit `node_modules`, VitePress cache, or build output.
- Run `npm run docs:build` after changing navigation, sidebar, config, or multiple pages.

## Git Workflow

Typical first push:

```sh
git add .
git commit -m "Initial VitePress notes site"
git push -u origin main
```

Typical later update:

```sh
git add .
git commit -m "Update notes"
git push
```
