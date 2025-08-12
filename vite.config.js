import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import compression from 'vite-plugin-compression'
import eslintPlugin from 'vite-plugin-eslint'
import html from 'vite-plugin-html'

export default defineConfig({
  root: 'src',
  plugins: [
    eslintPlugin(),
    compression({ algorithm: 'brotliCompress' }),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Vite Vanilla Ultimate JS',
        short_name: 'ViteVanillaJS',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        icons: [{ src: '/favicon.ico', sizes: '64x64', type: 'image/x-icon' }]
      }
    }),
    html({
      minify: true
    })
  ],
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  server: {
    port: 3000,
    open: true
  }
})
