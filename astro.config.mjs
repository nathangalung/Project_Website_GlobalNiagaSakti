import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: vercel({
    analytics: true,
  }),
  integrations: [tailwind()]
});