import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { articles } from '../data/articles';

export function GET(context: APIContext) {
  return rss({
    title: 'Christina Pardali — Writing',
    description: 'Articles by Christina Pardali on cloud, AI, and architecture.',
    site: context.site ?? 'https://christinapa.github.io',
    items: articles.map((article) => ({
      title: article.title,
      description: `${article.description} (Published on ${article.source})`,
      link: article.url,
    })),
    customData: '<language>en-us</language>',
  });
}
