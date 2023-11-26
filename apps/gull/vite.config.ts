/// <reference types="vavite/vite-config" />

import { angular } from '@nitedani/vite-plugin-angular/plugin';
import vavite from 'vavite';
import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
  },
  
  plugins: [
    angular(),
    vavite({
      serverEntry: '/src/server/main.ts',
      serveClientAssetsInDev: true,
    }),
    tsConfigPaths({
      root: '../../',
    }),
  ],
});
