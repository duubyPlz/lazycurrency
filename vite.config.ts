import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          // Compiled
          [
            '@babel/plugin-transform-react-jsx',
            { runtime: 'automatic' },
          ],
          '@compiled/babel-plugin',
        ],
      },
    }),
  ],
  server: {
    host: true,
  },
  base: 'https://duubyplz.github.io/lazycurrency/',
});
