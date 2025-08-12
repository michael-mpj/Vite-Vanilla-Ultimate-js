# Project Structure

This guide explains the organization and structure of the Vite Vanilla Ultimate project.

## Directory Overview

```
vite-vanilla-ultimate-js/
├── src/                    # Application source code
│   ├── components/         # Reusable UI components
│   ├── modules/           # Core application modules
│   ├── pages/             # Page components
│   ├── styles/            # CSS stylesheets
│   ├── utils/             # Utility functions
│   ├── index.html         # Main HTML template
│   └── main.js           # Application entry point
├── public/                # Static assets
├── tests/                 # Test files
├── docs/                  # Documentation
├── docs-site/             # VitePress documentation site
├── scripts/               # Build and utility scripts
└── .github/               # GitHub Actions workflows
```

## Source Code (`src/`)

### Main Entry Point

- **`src/main.js`** - Application bootstrap and initialization
- **`src/index.html`** - HTML template with app container

### Components (`src/components/`)

Reusable UI components that can be used across different pages:

- **`Header.js`** - Application header component
- **`Footer.js`** - Application footer component
- **`Navbar.js`** - Navigation component

### Modules (`src/modules/`)

Core application functionality organized by feature:

- **`api.js`** - API communication and data fetching
- **`router.js`** - Client-side routing implementation

### Pages (`src/pages/`)

Individual page components:

- **`index.js`** - Home page component
- **`about.js`** - About page component
- **`contact.js`** - Contact page component

### Utilities (`src/utils/`)

Helper functions and utilities:

- **`debug.js`** - Development debugging utilities
- **`dom.js`** - DOM manipulation helpers
- **`logger.js`** - Logging functionality

### Styles (`src/styles/`)

CSS organization:

- **`main.css`** - Main application styles
- **`reset.css`** - CSS reset and normalization

## Configuration Files

### Core Configuration

- **`vite.config.js`** - Vite build tool configuration
- **`vitest.config.js`** - Vitest testing configuration
- **`package.json`** - Project dependencies and scripts

### Code Quality

- **`eslint.config.js`** - ESLint linting rules
- **`.prettierrc`** - Prettier formatting configuration
- **`commitlint.config.cjs`** - Conventional commit linting

### Git Hooks

- **`.husky/`** - Git hooks for pre-commit checks
- **`lint-staged`** configuration in `package.json`

## Testing (`tests/`)

Test files organization:

```
tests/
├── components.test.js     # Component tests
└── example.test.js        # Example test patterns
```

## Documentation

### Project Documentation (`docs/`)

- **API.md** - API reference documentation
- **ARCHITECTURE.md** - System architecture overview
- **DEPLOYMENT.md** - Deployment instructions
- **SECURITY.md** - Security guidelines

### Documentation Site (`docs-site/`)

VitePress-powered documentation website:

```
docs-site/
├── .vitepress/
│   └── config.js          # VitePress configuration
├── guide/                 # User guides
├── api/                   # API documentation
└── index.md              # Documentation homepage
```

## Build Output

When you run `npm run build`, the production files are generated in:

- **`dist/`** - Built application files ready for deployment

## Scripts (`scripts/`)

Utility scripts for development and maintenance:

- **`auto-fix.sh`** - Automated code fixing script
- **`validate-workflows.sh`** - GitHub Actions validation

## Best Practices

### File Naming

- Use **kebab-case** for directories and files
- Use **PascalCase** for component files
- Use **camelCase** for utility functions

### Import Organization

```javascript
// External dependencies first
import { createApp } from 'vue'

// Internal modules
import { router } from './modules/router.js'
import { api } from './modules/api.js'

// Components
import Header from './components/Header.js'

// Utilities
import { debug } from './utils/debug.js'
```

### Component Structure

Each component should follow this pattern:

```javascript
// Component dependencies
import { dom } from '../utils/dom.js'

// Component definition
export const ComponentName = {
  // Component logic here
}

// Export as default
export default ComponentName
```

## Adding New Features

### Adding a New Page

1. Create the page component in `src/pages/`
2. Update the router in `src/modules/router.js`
3. Add navigation links if needed
4. Write tests in `tests/`

### Adding a New Component

1. Create the component in `src/components/`
2. Follow the component structure pattern
3. Add appropriate styles
4. Write component tests
5. Update documentation

### Adding Utilities

1. Create utility functions in `src/utils/`
2. Export functions using named exports
3. Add JSDoc comments for documentation
4. Write unit tests

This structure promotes maintainability, scalability, and clear separation of concerns in your application.
