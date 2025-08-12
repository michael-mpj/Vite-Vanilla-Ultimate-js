# Configuration

This guide covers the configuration options available in Vite Vanilla Ultimate.

## Vite Configuration

The main configuration is in `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  // Development server settings
  server: {
    port: 5173,
    open: true,
    cors: true,
  },

  // Build settings
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      // External dependencies
    },
  },

  // Plugins
  plugins: [
    VitePWA({
      // PWA configuration
    }),
  ],
})
```

## Environment Variables

Create a `.env` file in the project root for environment-specific settings:

```bash
# Development
VITE_API_URL=http://localhost:3000/api
VITE_APP_TITLE=Vite Vanilla Ultimate
VITE_DEBUG=true

# Production (use .env.production)
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=My App
VITE_DEBUG=false
```

Access environment variables in your code:

```javascript
const apiUrl = import.meta.env.VITE_API_URL
const isDebug = import.meta.env.VITE_DEBUG === 'true'
```

## Testing Configuration

Vitest is configured in `vitest.config.js`:

```javascript
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'html', 'lcov'],
      exclude: ['node_modules/', 'tests/'],
    },
  },
})
```

## ESLint Configuration

Code linting is configured in `eslint.config.js`:

```javascript
import js from '@eslint/js'

export default [
  js.configs.recommended,
  {
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'error',
      'prefer-const': 'error',
    },
  },
]
```

## Prettier Configuration

Code formatting in `.prettierrc`:

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80
}
```

## PWA Configuration

Progressive Web App settings in `vite.config.js`:

```javascript
VitePWA({
  registerType: 'autoUpdate',
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
  },
  manifest: {
    name: 'Vite Vanilla Ultimate',
    short_name: 'ViteVanilla',
    description: 'Modern Vanilla JavaScript application',
    theme_color: '#646cff',
    background_color: '#ffffff',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  },
})
```

## Deployment Configuration

### Vercel

Configure in `vercel.json`:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "buildCommand": "npm run build",
        "outputDirectory": "dist"
      }
    }
  ]
}
```

### Netlify

Configure in `netlify.toml`:

```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Git Hooks Configuration

Husky git hooks are configured to run quality checks:

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "lint-staged": {
    "src/**/*.{js,css,json,md}": ["prettier --write", "eslint --fix"]
  }
}
```

## Router Configuration

Client-side routing can be configured in `src/modules/router.js`:

```javascript
export const routes = {
  '/': () => import('../pages/index.js'),
  '/about': () => import('../pages/about.js'),
  '/contact': () => import('../pages/contact.js'),
}

export const routerConfig = {
  mode: 'hash', // or 'history'
  base: '/',
  scrollBehavior: 'smooth',
}
```

## API Configuration

API settings in `src/modules/api.js`:

```javascript
export const apiConfig = {
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
}
```

## Development Configuration

### Debug Mode

Enable debug utilities:

```javascript
// In main.js
if (import.meta.env.DEV) {
  import('./utils/debug.js').then(({ enableDebug }) => {
    enableDebug()
  })
}
```

### Hot Module Replacement

Vite HMR is enabled by default. Configure custom HMR handling:

```javascript
if (import.meta.hot) {
  import.meta.hot.accept('./components/Header.js', (newModule) => {
    // Handle component updates
  })
}
```

## Build Optimization

### Code Splitting

Configure code splitting in `vite.config.js`:

```javascript
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['lodash', 'axios'],
          components: ['./src/components/Header.js'],
        },
      },
    },
  },
})
```

### Asset Optimization

Configure asset handling:

```javascript
export default defineConfig({
  build: {
    assetsInlineLimit: 4096,
    assetsDir: 'assets',
    cssCodeSplit: true,
  },
})
```

## Custom Configuration

You can extend the configuration by creating custom config files:

```javascript
// config/app.config.js
export const appConfig = {
  name: 'Vite Vanilla Ultimate',
  version: '1.0.0',
  features: {
    pwa: true,
    analytics: false,
    darkMode: true,
  },
}
```

Then import and use in your application:

```javascript
import { appConfig } from '../config/app.config.js'

console.log(`Running ${appConfig.name} v${appConfig.version}`)
```
