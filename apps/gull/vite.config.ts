import { angular } from '@nitedani/vite-plugin-angular/plugin';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { vavite } from 'vavite';
import { defineConfig, splitVendorChunkPlugin } from 'vite';

export default defineConfig({
  publicDir: 'src/assets',
  plugins: [
    angular(),
    vavite({
      serverEntry: '/src/server/main.ts',
      serveClientAssetsInDev: true,
    }),
    nxViteTsPaths(),
    splitVendorChunkPlugin(),
  ],
});
