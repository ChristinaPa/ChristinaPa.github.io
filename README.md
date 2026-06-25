# Christina Pardali — Personal Site

A fast, accessible personal branding site built with [Astro](https://astro.build) and deployed for free on **GitHub Pages**.

## Sections

- Hero / intro
- About
- Projects / portfolio
- Experience
- Education
- Certifications
- Skills
- Blog (Markdown posts)
- Contact / social links

## Local development

Requires [Node.js](https://nodejs.org) 18.20+ or 20.3+.

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:4321
npm run build    # production build into ./dist
npm run preview  # preview the production build locally
```

## Editing content

- **Profile, projects, experience, skills, certifications** — edit the data objects at the top of [`src/pages/index.astro`](src/pages/index.astro).
- **Blog posts** — add a Markdown file in [`src/content/blog/`](src/content/blog). Each needs frontmatter:

  ```markdown
  ---
  title: My post title
  description: Short summary.
  pubDate: 2026-06-25
  tags: ["tag1", "tag2"]
  ---
  ```

- **Colors / styles** — tweak the CSS variables in [`src/styles/global.css`](src/styles/global.css).

## Deploying to GitHub Pages

1. Push this project to a GitHub repository.
2. In the repo, go to **Settings → Pages** and set **Source = GitHub Actions**.
3. Every push to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds and publishes the site.

### Repo name & `astro.config.mjs`

- If the repo is named **`<username>.github.io`** (e.g. `ChristinaPa.github.io`), the site is served at `https://<username>.github.io` — keep `base: '/'`.
- If the repo has any other name (e.g. `portfolio`), set in [`astro.config.mjs`](astro.config.mjs):

  ```js
  site: 'https://ChristinaPa.github.io',
  base: '/portfolio',
  ```

## License

Personal project — all rights reserved.
