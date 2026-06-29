import { OGImageRoute } from 'astro-og-canvas';

// Each key becomes a generated image at /og/<key>.png
const pages = {
  blog: {
    title: 'Blog — Christina Pardali',
    description: 'Articles on cloud, AI, and architecture.',
  },
  de: {
    title: 'Christina Pardali — Partner Solution Architect',
    description: 'Persönliche Website · Microsoft EMEA',
  },
  el: {
    title: 'Christina Pardali — Partner Solution Architect',
    description: 'Προσωπική ιστοσελίδα · Microsoft EMEA',
  },
};

export const { getStaticPaths, GET } = await OGImageRoute({
  param: 'route',
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    logo: undefined,
    bgGradient: [
      [12, 20, 16],
      [20, 46, 34],
    ],
    border: { color: [46, 125, 82], width: 16, side: 'inline-start' },
    padding: 70,
    font: {
      title: {
        color: [255, 255, 255],
        size: 64,
        weight: 'Bold',
        lineHeight: 1.2,
      },
      description: {
        color: [200, 214, 206],
        size: 30,
        lineHeight: 1.4,
      },
    },
    fonts: ['./src/og-fonts/Inter-Regular.ttf', './src/og-fonts/Inter-Bold.ttf'],
  }),
});
