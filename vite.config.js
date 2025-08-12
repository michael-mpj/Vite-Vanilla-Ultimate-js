import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import compression from 'vite-plugin-compression'
import eslintPlugin from 'vite-plugin-eslint'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  root: 'src',
  plugins: [
    // Only run ESLint in production builds, not in development for smoother debugging
    ...(process.env.NODE_ENV === 'production' ? [eslintPlugin()] : []),
    compression({ algorithm: 'brotliCompress' }),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Vite Vanilla Ultimate JS',
        short_name: 'ViteVanillaJS',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0ea5e9',
        icons: [{ src: '/favicon.ico', sizes: '64x64', type: 'image/x-icon' }],
      },
    }),
    createHtmlPlugin({
      minify: true,
    }),
  ],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true, // Always generate source maps for debugging
  },
  server: {
    port: 3000,
    open: true,
    sourcemap: true, // Enable source maps in development
  },
  esbuild: {
    sourcemap: true, // Ensure esbuild generates source maps
  },
})
