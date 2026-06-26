# Christina Pardali — Personal Site

🌐 **Live site: [christinapa.github.io](https://christinapa.github.io/)**

A fast, accessible personal branding site built with [Astro](https://astro.build) and deployed for free on **GitHub Pages**. This website was built with the help of **GitHub Copilot**.

> [!TIP]
> Want your own version? This repo is designed to be reused. Jump to [Reuse this site as your own](#reuse-this-site-as-your-own) for a step-by-step guide and ready-to-use Copilot prompts.

## Sections

- Hero / intro
- About
- Topics & focus areas
- Experience
- Education
- Certifications
- Skills
- Blog (curated links to your articles)
- Community & inclusion
- Contact / social links

## Reuse this site as your own

You can turn this into your own personal site without writing code from scratch. The fastest path is to fork it and then let **GitHub Copilot** customize the content for you.

### 1. Get your own copy

1. Click **Fork** at the top of this repository (or use **Use this template** if available).
2. Rename your fork:
   - For a site at `https://<username>.github.io`, name the repo **`<username>.github.io`**.
   - For a project site at `https://<username>.github.io/<repo>`, use any name (e.g. `portfolio`).
3. Clone your fork locally and open it in VS Code.

### 2. Run it locally

Requires [Node.js](https://nodejs.org) 18.20+ or 20.3+.

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:4321
npm run build    # production build into ./dist
npm run preview  # preview the production build locally
```

### 3. Make it yours with GitHub Copilot

Open Copilot Chat in VS Code and try the prompts below. Replace the example details with your own. Copilot can edit the data objects and styles directly for you.

> [!TIP]
> I used my own LinkedIn profile and CV as inspiration when writing these prompts — pasting in sections of them gave Copilot the context to fill in accurate roles, dates, and wording. Doing the same with your LinkedIn and CV is the quickest way to personalize the content.

#### Update your profile

```text
In src/pages/index.astro, update the `profile` object with my details:
name "Your Name", role "Your Role", a one-sentence tagline about what I do,
my email, LinkedIn, and GitHub URLs, and my city. Then push the change.
```

#### Replace experience, education, and certifications

```text
Replace the `experienceMicrosoft`, `experienceEngineering`, `education`,
`certificationsAssociate`, and `certificationsFundamentals` arrays in
src/pages/index.astro with my own roles and qualifications. I'll paste my
CV next — match the existing structure (role, org, period, summary).
```

#### Swap the skills

```text
In src/pages/index.astro, rewrite the `skillGroups` array to reflect my
stack: group them into 3–4 categories with the tools I actually use.
```

#### Update topics and "what I do"

```text
Update the `topics` and `whatIDo` arrays in src/pages/index.astro to
describe my focus areas and day-to-day work. Keep the same tone and length.
```

#### Curate your blog links

```text
In src/data/articles.ts, replace the entries with links to articles I've
published. Each needs a title, description, source (e.g. "LinkedIn"), and url.
```

#### Rebrand the colors

```text
In src/styles/global.css, change the CSS color variables to a palette
based on <your brand color, e.g. deep teal>. Keep good contrast for accessibility.
```

#### Personalize the hobbies and community sections

```text
Update the `interests` and `community` arrays in src/pages/index.astro with
my own hobbies and the causes I support. Keep the card structure the same.
```

> [!NOTE]
> Always review Copilot's edits before publishing. Run `npm run dev` to preview locally, then commit and push when you're happy.

## Where the content lives

- **Profile, topics, experience, education, certifications, skills, interests, community** — edit the data objects near the top of [`src/pages/index.astro`](src/pages/index.astro).
- **Blog links** — edit the `articles` array in [`src/data/articles.ts`](src/data/articles.ts).
- **Colors and styles** — tweak the CSS variables in [`src/styles/global.css`](src/styles/global.css).
- **Page shell, meta tags, fonts** — see [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro).

## Deploying to GitHub Pages

1. Push your project to a GitHub repository.
2. In the repo, go to **Settings → Pages** and set **Source = GitHub Actions**.
3. Every push to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds and publishes the site.

### Repo name and `astro.config.mjs`

Update [`astro.config.mjs`](astro.config.mjs) to match where your site is served:

- If the repo is named **`<username>.github.io`**, the site is served at `https://<username>.github.io` — keep `base: '/'` and set `site` to that URL.
- If the repo has any other name (e.g. `portfolio`), set:

  ```js
  site: 'https://<username>.github.io',
  base: '/portfolio',
  ```

## License

Personal project. Feel free to reuse the structure for your own site; please replace all personal content with your own.
