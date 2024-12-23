import Inspect from "vite-plugin-inspect";
import eslint from 'vite-plugin-eslint';
import path, { resolve } from 'path';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);




export default defineConfig({
  esbuild: {
    jsxFactory: "create",
  },

  build: {
    rollupOptions:{
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'src/pages/about/index.html')
      }
    }
  },

  plugins: [Inspect(),
    eslint({
      overrideConfigFile: './eslint.config.js', 
    })],

    resolve: {
      alias: {
        '@': path.resolve(__dirname,'src/assets')
      }
    },
});
