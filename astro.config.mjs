import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    imageService: true,
    imagesConfig: {
      sizes: [640, 750, 828, 1080, 1200, 1920],
      domains: [],
      minimumCacheTTL: 60,
    },
  }),
  integrations: [tailwind()]
});