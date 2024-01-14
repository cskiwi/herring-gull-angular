import { angular } from '@nitedani/vite-plugin-angular/plugin';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { vavite } from 'vavite';
import { defineConfig, splitVendorChunkPlugin } from 'vite';

export default defineConfig({
  publicDir: 'src/public',
  build: {
    outDir: '../../dist/apps/gull',
  },
  ssr: {
    
  },
  plugins: [
    angular({
      swc: true,
    }),
    vavite({
      serverEntry: './src/server/main.ts',
      serveClientAssetsInDev: true,
    }),
    nxViteTsPaths(),
    splitVendorChunkPlugin(),
  ],
  server: {
    fs: {
      allow: [
        '../../node_modules/@fontsource/roboto/files/',
        '../../node_modules/material-icons/iconfont/',
      ],
    },
  },
});
