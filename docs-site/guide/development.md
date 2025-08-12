# Development Workflow

This guide covers the development workflow and best practices for working with Vite Vanilla Ultimate.

## Getting Started

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` with:

- ⚡ Hot Module Replacement (HMR)
- 🔍 Error overlay
- 📊 Performance metrics

### Development Scripts

```bash
# Development with debug mode
npm run dev:debug

# Run tests in watch mode
npm run test

# Run tests with UI
npm run test:ui

# Lint and format code
npm run fix
```

## Code Quality

### Automated Formatting

Code is automatically formatted on save and before commits:

```bash
# Format all files
npm run format

# Check formatting
npm run format:check
```

### Linting

ESLint ensures code quality:

```bash
# Fix linting issues
npm run lint

# Check only (no fixes)
npm run lint:check
```

### Git Hooks

Pre-commit hooks ensure quality:

- Code formatting with Prettier
- Linting with ESLint
- Test execution
- Commit message validation

## Testing Workflow

### Running Tests

```bash
# Run all tests
npm run test:run

# Run tests with coverage
npm run test:coverage

# Interactive test UI
npm run test:ui

# Debug mode
npm run test:debug
```

### Writing Tests

Create tests in the `tests/` directory:

```javascript
import { describe, it, expect } from 'vitest'
import { MyComponent } from '../src/components/MyComponent.js'

describe('MyComponent', () => {
  it('should render correctly', () => {
    const component = MyComponent()
    expect(component).toBeDefined()
  })
})
```

## Debugging

### Development Tools

Enable debug mode:

```javascript
// In main.js
if (import.meta.env.DEV) {
  import('./utils/debug.js').then(({ enableDebug }) => {
    enableDebug()
  })
}
```

### Browser DevTools

- Use browser DevTools for debugging
- Vite provides source maps for easier debugging
- React DevTools extension support

### Debug Utilities

```javascript
import { debug } from './utils/debug.js'

// Log with timestamp
debug.log('User clicked button', { userId: 123 })

// Performance timing
debug.time('api-call')
await apiCall()
debug.timeEnd('api-call')

// Memory usage
debug.memory()
```

## Build Process

### Development Build

```bash
# Build for development
npm run build

# Build with debug info
npm run build:debug
```

### Production Build

```bash
# Optimized production build
NODE_ENV=production npm run build

# Preview production build
npm run preview
```

## File Organization

### Adding New Components

1. Create component file in `src/components/`
2. Follow naming conventions
3. Add JSDoc comments
4. Write tests
5. Update documentation

### Adding New Pages

1. Create page component in `src/pages/`
2. Update router configuration
3. Add navigation links
4. Write page tests
5. Update sitemap

### Adding Utilities

1. Create utility in `src/utils/`
2. Use named exports
3. Add comprehensive tests
4. Document with JSDoc

## Performance Optimization

### Bundle Analysis

Analyze bundle size:

```bash
# Build with bundle analyzer
npm run build -- --analyze

# Check bundle size
npm run build && npx bundlephobia analyze
```

### Code Splitting

Implement lazy loading:

```javascript
// Dynamic imports
const LazyComponent = () => import('./components/Heavy.js')

// Route-based splitting
addRoute('/heavy', () => import('./pages/Heavy.js'))
```

### Asset Optimization

- Use WebP images when possible
- Compress assets
- Implement lazy loading for images
- Use CSS containment

## Environment Management

### Environment Variables

Create environment-specific configurations:

```bash
# .env.development
VITE_API_URL=http://localhost:3000
VITE_DEBUG=true

# .env.production
VITE_API_URL=https://api.example.com
VITE_DEBUG=false
```

### Feature Flags

Implement feature toggles:

```javascript
const features = {
  newUI: import.meta.env.VITE_FEATURE_NEW_UI === 'true',
  analytics: import.meta.env.VITE_FEATURE_ANALYTICS === 'true',
}

if (features.newUI) {
  // Load new UI components
}
```

## Deployment Workflow

### Pre-deployment Checks

```bash
# Complete quality check
npm run check

# Build verification
npm run build

# Test production build
npm run preview
```

### Continuous Integration

The project includes GitHub Actions for:

- Automated testing
- Code quality checks
- Dependency updates
- Security scanning
- Automated deployment

## Best Practices

### Code Style

- Use consistent naming conventions
- Write self-documenting code
- Add JSDoc comments for public APIs
- Keep functions small and focused
- Use TypeScript-style JSDoc for better IntelliSense

### Performance

- Minimize bundle size
- Use lazy loading
- Optimize images and assets
- Implement proper caching strategies
- Monitor Core Web Vitals

### Security

- Validate all inputs
- Sanitize user content
- Use Content Security Policy
- Keep dependencies updated
- Follow OWASP guidelines

### Accessibility

- Use semantic HTML
- Provide proper ARIA labels
- Ensure keyboard navigation
- Test with screen readers
- Maintain good color contrast

## Troubleshooting

### Common Issues

**Port conflicts:**

```bash
# Use different port
npm run dev -- --port 3000
```

**Cache issues:**

```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

**Build failures:**

```bash
# Clean build
rm -rf dist
npm run build
```

**Test failures:**

```bash
# Clear test cache
npx vitest --run --coverage.enabled=false
```
