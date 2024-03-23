import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// Docs: https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Compiled
      babel: {
        plugins: [
          [
            '@babel/plugin-transform-react-jsx',
            { runtime: 'automatic' },
          ],
          '@compiled/babel-plugin',
        ],
      },
    }),
    // PWA
    VitePWA(),
  ],
  // Compiled
  server: {
    host: true,
  },
  base: 'https://duubyplz.github.io/lazycurrency/',
});
