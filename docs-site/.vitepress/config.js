import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Vite Vanilla Ultimate',
  description: 'Modern Vanilla JavaScript framework with Vite - Production-ready starter template',
  base: '/vite-vanilla-ultimate/',

  // Ignore dead links temporarily while building docs
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en' }],
    ['meta', { name: 'og:site_name', content: 'Vite Vanilla Ultimate' }],
  ],

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Components', link: '/components/' },
      { text: 'API', link: '/api/' },
      {
        text: 'Demo',
        link: 'https://vite-vanilla-ultimate-at1a3g8yu-michaels-projects-6a11f466.vercel.app',
        target: '_blank',
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/guide/getting-started' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Project Structure', link: '/guide/project-structure' },
            { text: 'Configuration', link: '/guide/configuration' },
          ],
        },
        {
          text: 'Development',
          items: [
            { text: 'Development Workflow', link: '/guide/development' },
            { text: 'Testing', link: '/guide/testing' },
            { text: 'Debugging', link: '/guide/debugging' },
            { text: 'Performance', link: '/guide/performance' },
          ],
        },
        {
          text: 'Deployment',
          items: [
            { text: 'Building for Production', link: '/guide/building' },
            { text: 'Deployment Guide', link: '/guide/deployment' },
            { text: 'PWA Features', link: '/guide/pwa' },
          ],
        },
      ],
      '/components/': [
        {
          text: 'Components',
          items: [
            { text: 'Overview', link: '/components/' },
            { text: 'Header', link: '/components/header' },
            { text: 'Footer', link: '/components/footer' },
            { text: 'Navbar', link: '/components/navbar' },
          ],
        },
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Overview', link: '/api/' },
            { text: 'Router', link: '/api/router' },
            { text: 'Debug Utils', link: '/api/debug' },
            { text: 'DOM Utils', link: '/api/dom' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/michael-mpj/Vite-Vanilla-Ultimate-js' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 Vite Vanilla Ultimate',
    },

    editLink: {
      pattern: 'https://github.com/michael-mpj/Vite-Vanilla-Ultimate-js/edit/main/docs-site/:path',
      text: 'Edit this page on GitHub',
    },

    search: {
      provider: 'local',
    },
  },

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
    lineNumbers: true,
  },
})
