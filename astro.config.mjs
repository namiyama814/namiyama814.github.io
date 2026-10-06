import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://namiyama814.github.io',
  integrations: [tailwind()],
});
