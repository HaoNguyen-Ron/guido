import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import pages from "vite-plugin-pages";
import AutoImport from 'unplugin-auto-import/vite'
import Layouts from 'vite-plugin-vue-layouts';
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    vueJsx(), 
    Layouts({
      layoutsDirs: './src/layouts',
      pagesDirs: './src/pages',
      defaultLayout:'default'
    }),
    pages({
      dirs: './src/pages'
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router'
      ],
      resolvers:[
        ElementPlusResolver()
      ]
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
