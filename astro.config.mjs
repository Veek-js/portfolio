import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://veekshith177-bot.github.io',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
