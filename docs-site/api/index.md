# API Reference

This section provides detailed API documentation for all modules and utilities in the Vite Vanilla Ultimate starter template.

## Core Modules

### Router Module

- **File**: [`src/modules/router.js`](../src/modules/router.js)
- **Purpose**: Client-side routing for SPA navigation
- **Documentation**: [Router API](/api/router)

### API Module

- **File**: [`src/modules/api.js`](../src/modules/api.js)
- **Purpose**: HTTP client utilities and API helpers
- **Documentation**: [API Utilities](/api/api)

## Utilities

### Debug Utilities

- **File**: [`src/utils/debug.js`](../src/utils/debug.js)
- **Purpose**: Enhanced debugging and development tools
- **Documentation**: [Debug API](/api/debug)

### DOM Utilities

- **File**: [`src/utils/dom.js`](../src/utils/dom.js)
- **Purpose**: DOM manipulation and query helpers
- **Documentation**: [DOM API](/api/dom)

### Logger

- **File**: [`src/utils/logger.js`](../src/utils/logger.js)
- **Purpose**: Application logging functionality
- **Documentation**: [Logger API](/api/logger)

## Components

### Header Component

- **File**: [`src/components/Header.js`](../src/components/Header.js)
- **Documentation**: [Header Component](/components/header)

### Footer Component

- **File**: [`src/components/Footer.js`](../src/components/Footer.js)
- **Documentation**: [Footer Component](/components/footer)

### Navbar Component

- **File**: [`src/components/Navbar.js`](../src/components/Navbar.js)
- **Documentation**: [Navbar Component](/components/navbar)

## Pages

### Home Page

- **File**: [`src/pages/index.js`](../src/pages/index.js)
- **Purpose**: Main landing page component

### About Page

- **File**: [`src/pages/about.js`](../src/pages/about.js)
- **Purpose**: About page with project information

### Contact Page

- **File**: [`src/pages/contact.js`](../src/pages/contact.js)
- **Purpose**: Contact form and information

## Configuration Files

### Vite Configuration

- **File**: [`vite.config.js`](../vite.config.js)
- **Purpose**: Vite build tool configuration

### Vitest Configuration

- **File**: [`vitest.config.js`](../vitest.config.js)
- **Purpose**: Testing framework configuration

### ESLint Configuration

- **File**: [`eslint.config.js`](../eslint.config.js)
- **Purpose**: Code linting rules and settings

## Global Objects (Development Mode)

When running in development mode, several global objects are available for debugging:

```javascript
// Debug utilities
window.DEBUG_UTILS // Complete debug object
window.dbg // Shortcut to debug utilities
window.bp // Quick breakpoint function

// Performance monitoring
window.perf // Performance utilities
window.mem // Memory monitoring

// Network debugging
window.net // Network request logging

// Storage debugging
window.store // localStorage/sessionStorage helpers

// DOM debugging
window.dom // DOM manipulation helpers
```

## Environment Variables

The following environment variables are available:

```bash
# Development
VITE_DEBUG=true              # Enable debug mode
VITE_DEBUG_LEVEL=4           # Set debug verbosity level
VITE_APP_TITLE="Your App"    # Application title

# Production
VITE_API_URL="https://api.example.com"  # Production API URL
```

## Build Output

The production build generates the following optimized assets:

- **HTML**: Minified with meta tags
- **CSS**: Minified and vendor-prefixed
- **JavaScript**: Minified with tree-shaking
- **Service Worker**: PWA offline functionality
- **Manifest**: Web app manifest for installation
- **Compressed Assets**: Brotli and Gzip compression

For detailed API documentation of each module, please refer to the individual API pages.
