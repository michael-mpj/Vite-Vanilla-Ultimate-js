# 🚀 Vite Vanilla Ultimate JS

A modern, fully-featured vanilla JavaScript project template built with Vite, featuring comprehensive tooling, testing, documentation, and automation.

[![CI/CD](https://github.com/yourusername/Vite-Vanilla-Ultimate-js/workflows/CI%2FCD/badge.svg)](https://github.com/yourusername/Vite-Vanilla-Ultimate-js/actions)
[![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)](./coverage/index.html)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![ESLint](https://img.shields.io/badge/ESLint-9.9.0-4B32C3?style=flat&logo=eslint&logoColor=white)](https://eslint.org/)
[![Vitest](https://img.shields.io/badge/Vitest-3.2.4-6E9F18?style=flat&logo=vitest&logoColor=white)](https://vitest.dev/)
[![VitePress](https://img.shields.io/badge/VitePress-1.6.4-1E3B8B?style=flat&logo=vitepress&logoColor=white)](https://vitepress.dev/)
[![PWA](https://img.shields.io/badge/PWA-Ready-purple?style=flat&logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://vite-vanilla-ultimate-at1a3g8yu-michaels-projects-6a11f466.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org/)

> **Enterprise-Grade Vanilla JS Template** - Complete automation, advanced debugging, comprehensive documentation

## 🌐 Live Demo & Documentation

**🚀 [Live Application](https://vite-vanilla-ultimate-at1a3g8yu-michaels-projects-6a11f466.vercel.app)** | **📚 [Documentation Site](docs-site/)**

## ✨ Features

- 🏎️ **Lightning Fast**: Powered by Vite for instant dev server and optimized builds
- 🧪 **Testing Ready**: Vitest setup with coverage reports and DOM testing
- 📱 **PWA Support**: Service worker registration and manifest configuration
- 🎨 **Code Quality**: ESLint, Prettier, and automated formatting
- 📚 **Documentation**: VitePress-powered documentation site
- 🔄 **CI/CD**: GitHub Actions with automated testing and deployment
- 🐛 **Debug Tools**: Advanced debugging utilities with performance monitoring
- 📦 **Dependency Management**: Automated updates and security checks
- 🏷️ **Semantic Versioning**: Conventional commits and automated releases
- 🤖 **Full Automation**: Hands-off development with auto-fixing and releases

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git for version control

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/Vite-Vanilla-Ultimate-js.git
cd Vite-Vanilla-Ultimate-js

# Run the setup script (installs dependencies, sets up hooks, runs tests)
./setup.sh

# Or install manually
npm install
```

### Development

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Start documentation site
npm run docs:dev
```

## ✨ Features

### 🔧 **Core Technologies**

- **Vite 7.1.2** - Lightning-fast build tool and dev server
- **Vanilla JavaScript (ES2022+)** - Modern JavaScript without frameworks
- **ESM modules** - Native ES module support with `"type": "module"`

### 🛠️ **Development Tools**

- **ESLint 9.9.0** - Latest ESLint with flat config format (`eslint.config.js`)
- **Prettier 3.3.3** - Code formatting and style enforcement
- **Husky 9.1.4** - Modern Git hooks for quality control
- **lint-staged 15.2.8** - Run linters only on staged files
- **Commitizen + Commitlint** - Conventional commit messages and validation

### 🧪 **Testing**

- **Vitest 3.2.4** - Ultra-fast unit testing with native ES module support
- **jsdom 25.0.0** - Browser environment simulation for DOM testing
- **@vitest/coverage-v8** - Built-in code coverage reports with V8 engine
- **Global test utilities** - Describe, it, expect available globally

### 🌐 **Production Features**

- **PWA Support v1.0.2** - Progressive Web App with auto-update
- **Service Worker** - Automatic caching and offline functionality
- **Brotli Compression** - Superior asset compression for faster loading
- **HTML Minification** - Optimized HTML output for production
- **Web App Manifest** - Native app-like installation experience

### 📁 **Project Structure**

```
src/
├── components/     # Reusable UI components
├── modules/        # Core application modules (router, API)
├── pages/          # Page-specific code
├── styles/         # CSS stylesheets
├── utils/          # Utility functions
└── main.js         # Application entry point

tests/              # Test files
public/             # Static assets
```

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** (Recommended: Node.js 20 LTS)
- **npm 8+** (or yarn/pnpm equivalent)

### Installation

```bash
# Clone the repository
git clone https://github.com/michael-mpj/Vite-Vanilla-Ultimate-js.git
cd vite-vanilla-ultimate-js

# Install dependencies
npm install

# Start development server (auto-opens browser)
npm run dev
# ➜ Development server: http://localhost:3000 (or next available port)
```

### Available Scripts

```bash
# 🚀 Development
npm run dev          # Start dev server (auto-opens browser)
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build locally

# 🔍 Code Quality
npm run lint         # Run ESLint with auto-fix
npm run format       # Format all files with Prettier

# 🧪 Testing
npm test             # Run tests in watch mode
npm run test:coverage # Run tests with coverage report (HTML + terminal)

# ⚙️ Setup (automatic)
npm run prepare      # Setup Husky git hooks (runs on install)
```

> **Note**: Development server auto-detects available ports (3000, 3001, etc.)

## � Documentation

Comprehensive project documentation is available in the [`docs/`](docs/) directory:

- **[📋 API Documentation](docs/API.md)** - Complete API reference and module documentation
- **[🏗️ Architecture Guide](docs/ARCHITECTURE.md)** - Project structure and design principles
- **[📝 Changelog](docs/CHANGELOG.md)** - Version history and release notes
- **[🤝 Code of Conduct](docs/CODE_OF_CONDUCT.md)** - Community guidelines and standards
- **[👥 Contributing Guide](docs/CONTRIBUTING.md)** - How to contribute to the project
- **[🚀 Deployment Guide](docs/DEPLOYMENT.md)** - Production deployment instructions
- **[⚙️ Environment Setup](docs/ENVIRONMENT.md)** - Development environment configuration
- **[⚡ Performance Guide](docs/Performance.md)** - Optimization tips and best practices
- **[🔒 Security Policy](docs/SECURITY.md)** - Security guidelines and vulnerability reporting

## �🔧 Configuration

### ESLint (v9.9.0)

Uses the modern **flat config format** (`eslint.config.js`):

- ✅ JavaScript ES2022+ recommended rules
- ✅ Prettier integration (no conflicts)
- ✅ Browser globals (document, window, fetch, etc.)
- ✅ Node.js compatibility for build scripts

### Vitest (v3.2.4)

Advanced testing configuration (`vitest.config.js`):

- ✅ **jsdom environment** for DOM testing
- ✅ **Global test utilities** (no imports needed)
- ✅ **Fast watch mode** with instant feedback
- ✅ **V8 coverage reports** (HTML + terminal output)

### PWA (Progressive Web App)

Complete PWA implementation:

- ✅ **Auto-updating service worker** (workbox-based)
- ✅ **Web app manifest** with proper icons and theme
- ✅ **Install prompts** for native app experience
- ✅ **Offline functionality** with intelligent caching

### Git Hooks (Husky v9.1.4)

Automated quality gates:

- **pre-commit**: Runs `lint-staged` → ESLint + Prettier on staged files
- **commit-msg**: Validates commit messages using Commitlint
- **Conventional commits**: Enforces semantic commit format

## 📦 Build Output

Production build (`npm run build`) generates:

- **📁 dist/** - Optimized static files ready for deployment
- **🗜️ Brotli compression** - `.br` files for superior compression
- **⚡ Code splitting** - Automatic chunking for optimal loading
- **🔧 Minification** - HTML, CSS, and JS optimization
- **📱 PWA assets** - Service worker, manifest, and icons
- **📊 Build analysis** - File sizes and compression ratios

**Example build output:**

```
dist/
├── index.html                 (0.57 kB → 0.33 kB gzipped)
├── assets/
│   ├── index-[hash].css      (0.45 kB → 0.31 kB gzipped)
│   ├── index-[hash].js       (2.51 kB → 1.09 kB gzipped)
│   └── index-[hash].js.br    (0.85 kB brotli compressed)
├── manifest.webmanifest
├── registerSW.js
└── sw.js                     (service worker)
```

## 🐛 Debugging & Development

### Always-Attached Debugger Setup

This project includes comprehensive debugging capabilities that are **always available** during development:

#### 🔧 **VS Code Debugging**

- **Launch configurations** for Chrome debugging with auto-open DevTools
- **Attach configurations** for existing browser sessions
- **Source maps** enabled for all environments
- **Breakpoint support** in VS Code editor

#### 🎯 **Debug Utility System**

```javascript
// Available globally in development
window.dbg.log('Debug message') // Enhanced console.log
window.dbg.breakpoint(condition, 'msg') // Conditional breakpoints
window.dbg.trace('Function called') // Stack traces
window.dbg.time('operation') // Performance timing
window.dbg.table(data) // Tabular data display

// Quick breakpoint anywhere
window.bp(true, 'Debug checkpoint') // Immediate debugger pause
```

#### 🚀 **Quick Start Debugging**

```bash
# Start with debugger attached
npm run dev
# Then press F5 in VS Code or use "🚀 Launch Chrome with Debugger"

# Start with enhanced debug mode
npm run dev:debug

# Debug tests
npm run test:debug
```

#### 🎮 **Browser DevTools**

- **Auto-opens** with development server
- **Source maps** for original file debugging
- **Console logging** with emoji indicators
- **Network monitoring** for API calls
- **Performance profiling** available

#### 📍 **Breakpoint Locations**

- **Application startup** - `main.js` initialization
- **Route navigation** - Every page change
- **Component rendering** - Page/component load
- **Event handling** - Click events, navigation
- **API calls** - Network requests (when added)

#### 🔍 **Debug Information Available**

```javascript
// Global debug objects (development only)
window.app // Main application modules
window.router // Router functions and routes
window.currentPage // Current page info
window.DEBUG_UTILS // All debug utilities
```

### Debug Features

#### 🔴 **Automatic Breakpoints**

- Debugger pauses on application start
- Route navigation breakpoints
- Error boundary breakpoints
- Critical function entry points

#### 📊 **Performance Monitoring**

- Route render timing
- Component load times
- Bundle size analysis
- Memory usage tracking

#### 🎨 **Visual Debug Indicators**

- Console logging with emojis for easy identification
- Grouped debug output for better organization
- Color-coded log levels (info, warn, error)
- Time-stamped performance metrics

### Debugging Workflow

1. **Start Development**: `npm run dev`
2. **Open VS Code**: Press `F5` or use debug panel
3. **Browser Opens**: DevTools auto-open with breakpoints active
4. **Navigate App**: Each route change triggers debug info
5. **Use Console**: `window.dbg` utilities available globally

## 🌍 Deployment

### Vercel (Recommended)

- Push to GitHub
- Connect to Vercel
- Automatic deployments

### Other Platforms

The `dist/` folder contains all static assets for deployment to:

- Netlify
- GitHub Pages
- AWS S3
- Any static hosting service

## 🔄 Updates & Maintenance

### Recent Updates (August 2025)

- ✅ **Vite 7.1.2** - Latest Vite with improved performance
- ✅ **Vitest 3.2.4** - Enhanced testing capabilities
- ✅ **ESLint 9.9.0** - Migrated to flat config format
- ✅ **All dependencies** - Updated to latest stable versions
- ✅ **Husky v9** - Modern git hooks implementation
- ✅ **ES Modules** - Full ESM support with `"type": "module"`

### Updating Dependencies

```bash
npm update              # Update to latest compatible versions
npm audit               # Check for security vulnerabilities
npm audit fix           # Fix auto-fixable vulnerabilities
npm outdated            # Check for newer package versions
```

### Adding New Dependencies

```bash
npm install <package>           # Runtime dependency
npm install -D <package>        # Development dependency
npm install -E <package>        # Exact version (recommended for tools)
```

## 💡 Development Tips

### VS Code Integration

- Install recommended extensions for optimal experience
- ESLint and Prettier will work automatically
- Integrated terminal for running commands

### Code Organization

- Keep components small and focused
- Use ES modules for better tree-shaking
- Follow conventional commit format for git messages

### Performance

- Vite provides instant HMR in development
- Production builds are optimized automatically
- Use dynamic imports for code splitting when needed

## 🌍 Deployment

### Live Production Deployment

This project is deployed and running on Vercel:

**🚀 [https://vite-vanilla-ultimate-at1a3g8yu-michaels-projects-6a11f466.vercel.app](https://vite-vanilla-ultimate-at1a3g8yu-michaels-projects-6a11f466.vercel.app)**

#### Deployment Features

- ✅ **Automatic deployments** from GitHub main branch
- ✅ **Global CDN** with edge caching
- ✅ **HTTPS by default** with automatic SSL
- ✅ **PWA capabilities** with service worker
- ✅ **Brotli compression** (1.43 kB optimized bundle)
- ✅ **Performance monitoring** via Vercel Analytics

### Deploy Your Own

#### Vercel (Recommended)

1. Fork this repository
2. Connect to Vercel dashboard
3. Import your fork
4. Deploy automatically

#### Other Platforms

The `dist/` folder contains all static assets for deployment to:

- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

#### Manual Deployment

```bash
npm run build      # Generate dist/ folder
# Upload dist/ contents to your hosting provider
```

## 🐛 Troubleshooting

### Common Issues & Solutions

#### **Port Already in Use**

```bash
# Vite auto-detects available ports (3000, 3001, 3002...)
# To specify a custom port:
npm run dev -- --port 4000
```

#### **ESLint Errors**

```bash
npm run lint          # See all issues
npm run lint --fix    # Auto-fix what's possible
# Check eslint.config.js for rule modifications
```

#### **Build Failures**

```bash
# Clear cache and rebuild
rm -rf node_modules dist .vite
npm install
npm run build
```

#### **Test Issues**

```bash
# Run tests with verbose output
npm test -- --reporter=verbose
# Check vitest.config.js for environment settings
```

#### **Git Hooks Not Working**

```bash
# Reinstall Husky hooks
npm run prepare
# Check .husky/ directory exists with executable files
```

### Performance Tips

- **HMR**: Vite provides instant Hot Module Replacement
- **Code Splitting**: Use dynamic imports for large modules
- **Bundle Analysis**: Use `npm run build` to see chunk sizes
- **Caching**: Service worker handles automatic caching in production

### Getting Help

- 📖 [Vite Documentation](https://vitejs.dev/)
- 🔧 [ESLint Rules](https://eslint.org/docs/rules/)
- 🧪 [Vitest Guide](https://vitest.dev/guide/)
- 📱 [PWA Best Practices](https://web.dev/progressive-web-apps/)
- 💬 [GitHub Issues](https://github.com/michael-mpj/Vite-Vanilla-Ultimate-js/issues)

## 🚀 Suggested Enhancements

### 🎯 Next Steps for Your Project

#### **Core Functionality**

- [ ] **API Integration** - Add REST API client with fetch utilities
- [ ] **State Management** - Implement lightweight state management (Zustand/Valtio)
- [ ] **Form Handling** - Add form validation and submission utilities
- [ ] **Authentication** - Implement JWT-based auth with local storage
- [ ] **Routing** - Enhance router with nested routes and guards

#### **UI/UX Improvements**

- [ ] **Component Library** - Build reusable UI components (buttons, modals, cards)
- [ ] **CSS Framework** - Integrate Tailwind CSS or create design system
- [ ] **Animations** - Add CSS transitions and micro-interactions
- [ ] **Theme System** - Implement dark/light mode toggle
- [ ] **Responsive Design** - Enhance mobile-first responsive layouts

#### **Performance & SEO**

- [ ] **Meta Tags** - Dynamic meta tags for better SEO
- [ ] **Image Optimization** - Lazy loading and WebP conversion
- [ ] **Code Splitting** - Route-based and component-based splitting
- [ ] **Caching Strategy** - Enhanced service worker caching
- [ ] **Analytics** - Google Analytics or privacy-focused alternatives

#### **Developer Experience**

- [ ] **TypeScript** - Migrate to TypeScript for better type safety
- [ ] **Storybook** - Component development and documentation
- [ ] **E2E Testing** - Playwright or Cypress integration
- [ ] **CI/CD Pipeline** - GitHub Actions for testing and deployment
- [ ] **Bundle Analysis** - Webpack Bundle Analyzer integration

#### **Advanced Features**

- [ ] **Internationalization** - Multi-language support (i18n)
- [ ] **Database Integration** - Local storage, IndexedDB, or Supabase
- [ ] **Real-time Features** - WebSocket integration
- [ ] **File Upload** - Drag & drop file handling
- [ ] **Data Visualization** - Charts and graphs (Chart.js/D3.js)

### 📦 Recommended Packages

```bash
# State Management
npm install zustand                    # Lightweight state management

# UI Enhancements
npm install tailwindcss               # Utility-first CSS framework
npm install lucide                    # Beautiful icons

# Utilities
npm install date-fns                  # Date manipulation
npm install zod                       # Schema validation
npm install axios                     # HTTP client

# Development
npm install -D storybook              # Component development
npm install -D @playwright/test       # E2E testing
npm install -D typescript             # Type safety
```

### 🎨 UI Component Ideas

Consider implementing these common components:

- **Layout**: Header, Footer, Sidebar, Grid system
- **Navigation**: Breadcrumbs, Pagination, Tabs
- **Forms**: Input fields, Select, Checkbox, Radio
- **Feedback**: Toast notifications, Loading spinners, Progress bars
- **Data Display**: Tables, Cards, Lists, Badges
- **Overlays**: Modals, Tooltips, Dropdowns

### 🔧 Architecture Suggestions

1. **Feature-based Structure**:

   ```
   src/
   ├── features/
   │   ├── auth/
   │   ├── dashboard/
   │   └── profile/
   ├── shared/
   │   ├── components/
   │   ├── utils/
   │   └── api/
   ```

2. **Design Patterns**:
   - Repository pattern for data access
   - Observer pattern for event handling
   - Factory pattern for component creation

3. **Code Quality**:
   - Implement JSDoc for better documentation
   - Add integration tests with realistic scenarios
   - Use semantic versioning for releases

---

**Happy coding!** 🎉
