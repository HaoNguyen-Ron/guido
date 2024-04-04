import path from "node:path"
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Layouts from 'vite-plugin-vue-layouts'
import pages from 'vite-plugin-pages'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vite'


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    Layouts({
      layoutsDirs: './src/layouts',
      pagesDirs: './src/pages',
      defaultLayout: 'default',
    }),
    pages({
      dirs: './src/pages',
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
      ],
      resolvers: [
        ElementPlusResolver(),
      ],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
