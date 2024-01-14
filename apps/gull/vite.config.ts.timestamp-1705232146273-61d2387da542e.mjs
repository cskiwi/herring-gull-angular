// apps/gull/vite.config.ts
import { angular } from "file:///C:/Users/glenn/Documents/Code/cskiwi/herring-gull-angular/node_modules/@nitedani/vite-plugin-angular/lib/plugin/index.js";
import { nxViteTsPaths } from "file:///C:/Users/glenn/Documents/Code/cskiwi/herring-gull-angular/node_modules/@nx/vite/plugins/nx-tsconfig-paths.plugin.js";
import { vavite } from "file:///C:/Users/glenn/Documents/Code/cskiwi/herring-gull-angular/node_modules/vavite/dist/index.js";
import { defineConfig, splitVendorChunkPlugin } from "file:///C:/Users/glenn/Documents/Code/cskiwi/herring-gull-angular/node_modules/vite/dist/node/index.js";
var vite_config_default = defineConfig({
  publicDir: "src/public",
  build: {
    outDir: "../../dist/apps/gull"
  },
  plugins: [
    angular(),
    vavite({
      serverEntry: "./src/server/main.ts",
      serveClientAssetsInDev: true
    }),
    nxViteTsPaths(),
    splitVendorChunkPlugin()
  ],
  server: {
    fs: {
      allow: [
        "../../node_modules/@fontsource/roboto/files/",
        "../../node_modules/material-icons/iconfont/"
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiYXBwcy9ndWxsL3ZpdGUuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcZ2xlbm5cXFxcRG9jdW1lbnRzXFxcXENvZGVcXFxcY3NraXdpXFxcXGhlcnJpbmctZ3VsbC1hbmd1bGFyXFxcXGFwcHNcXFxcZ3VsbFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcZ2xlbm5cXFxcRG9jdW1lbnRzXFxcXENvZGVcXFxcY3NraXdpXFxcXGhlcnJpbmctZ3VsbC1hbmd1bGFyXFxcXGFwcHNcXFxcZ3VsbFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvZ2xlbm4vRG9jdW1lbnRzL0NvZGUvY3NraXdpL2hlcnJpbmctZ3VsbC1hbmd1bGFyL2FwcHMvZ3VsbC92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGFuZ3VsYXIgfSBmcm9tICdAbml0ZWRhbmkvdml0ZS1wbHVnaW4tYW5ndWxhci9wbHVnaW4nO1xyXG5pbXBvcnQgeyBueFZpdGVUc1BhdGhzIH0gZnJvbSAnQG54L3ZpdGUvcGx1Z2lucy9ueC10c2NvbmZpZy1wYXRocy5wbHVnaW4nO1xyXG5pbXBvcnQgeyB2YXZpdGUgfSBmcm9tICd2YXZpdGUnO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIHNwbGl0VmVuZG9yQ2h1bmtQbHVnaW4gfSBmcm9tICd2aXRlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcHVibGljRGlyOiAnc3JjL3B1YmxpYycsXHJcbiAgYnVpbGQ6IHtcclxuICAgIG91dERpcjogJy4uLy4uL2Rpc3QvYXBwcy9ndWxsJyxcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIGFuZ3VsYXIoKSxcclxuICAgIHZhdml0ZSh7XHJcbiAgICAgIHNlcnZlckVudHJ5OiAnLi9zcmMvc2VydmVyL21haW4udHMnLFxyXG4gICAgICBzZXJ2ZUNsaWVudEFzc2V0c0luRGV2OiB0cnVlLFxyXG4gICAgfSksXHJcbiAgICBueFZpdGVUc1BhdGhzKCksXHJcbiAgICBzcGxpdFZlbmRvckNodW5rUGx1Z2luKCksXHJcbiAgXSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIGZzOiB7XHJcbiAgICAgIGFsbG93OiBbXHJcbiAgICAgICAgJy4uLy4uL25vZGVfbW9kdWxlcy9AZm9udHNvdXJjZS9yb2JvdG8vZmlsZXMvJyxcclxuICAgICAgICAnLi4vLi4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLWljb25zL2ljb25mb250LycsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZZLFNBQVMsZUFBZTtBQUNyYSxTQUFTLHFCQUFxQjtBQUM5QixTQUFTLGNBQWM7QUFDdkIsU0FBUyxjQUFjLDhCQUE4QjtBQUVyRCxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixXQUFXO0FBQUEsRUFDWCxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsRUFDVjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLE1BQ0wsYUFBYTtBQUFBLE1BQ2Isd0JBQXdCO0FBQUEsSUFDMUIsQ0FBQztBQUFBLElBQ0QsY0FBYztBQUFBLElBQ2QsdUJBQXVCO0FBQUEsRUFDekI7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLElBQUk7QUFBQSxNQUNGLE9BQU87QUFBQSxRQUNMO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
