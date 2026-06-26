// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
//
// IMPORTANT (GitHub Pages):
//   - If your repo is named <username>.github.io, keep `base` as '/'.
//   - If your repo has any other name (e.g. "portfolio"), set:
//       base: '/portfolio'
//   - Always update `site` to match your GitHub Pages URL.
export default defineConfig({
  site: 'https://ChristinaPa.github.io',
  base: '/',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'el', 'de'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap()],
});