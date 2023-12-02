import { angular } from '@nitedani/vite-plugin-angular/plugin';
import * as path from 'path';
import { vavite } from 'vavite';
import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    angular(),
    vavite({
      serverEntry: './server/main.ts',
      serveClientAssetsInDev: true,
    }),
    tsConfigPaths({
      root: '../../',
    }),
  ],
  resolve: {
    alias: {
      '@gull/welcome': path.resolve(
        __dirname,
        '../../libs/frontend/pages/welcome/src/index.ts'
      ),
    },
  },
});
