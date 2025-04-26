import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  return {
    base: process.env.BASE_URL || './',
    server: {
      host: 'localhost',
      port: 3000,
      fs: {
        allow: ['.'],
      },
    },
    build: {
      rollupOptions: {
        input: 'public/index.html',
      },
    },
  };
});
