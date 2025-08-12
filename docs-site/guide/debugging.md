# Debug Utilities

The Vite Vanilla Ultimate starter includes a comprehensive debug utility system designed to enhance your development experience.

## Overview

The debug utilities are located in `src/utils/debug.js` and provide enhanced logging, performance monitoring, and debugging capabilities that are automatically enabled in development mode.

## Features

### 🐛 Enhanced Logging

```javascript
import { debug } from './utils/debug.js'

// Basic logging with emoji indicators
debug.log('Application started') // 🐛 DEBUG: Application started
debug.info('User logged in') // ℹ️ INFO: User logged in
debug.warn('Deprecated API used') // ⚠️ WARNING: Deprecated API used
debug.error('Network request failed') // ❌ ERROR: Network request failed
```

### ⏱️ Performance Monitoring

```javascript
// Mark performance points
debug.performance.mark('component-render-start')
// ... component rendering code ...
debug.performance.mark('component-render-end')

// Measure performance between marks
debug.performance.measure('component-render', 'component-render-start', 'component-render-end')
// Output: 📈 Performance measure: component-render = 15.24ms
```

### 💾 Storage Debugging

```javascript
// View localStorage contents
debug.storage.localStorage()
// Output: 💾 LocalStorage Contents
//         theme: "dark"
//         user: "{"id":1,"name":"John"}"

// View sessionStorage contents
debug.storage.sessionStorage()
// Output: 🔒 SessionStorage Contents
//         tempData: "temporary value"
```

### 🌐 Network Monitoring

```javascript
// Log network requests
debug.network.logRequest('/api/users', { method: 'GET' })
// Output: 🌐 Network Request: {timestamp: "...", url: "/api/users", method: "GET"}

// View network summary
debug.network.summary()
// Output: 🌐 Network Summary (table with all requests)
```

### 🎯 DOM Debugging

```javascript
// Highlight elements visually
debug.dom.highlight('.my-component', 'blue')
// Highlights all elements matching the selector with a blue outline

// Clear all highlights
debug.dom.clearHighlights()
// Removes all debug highlights
```

### 🔴 Smart Breakpoints

```javascript
// Conditional breakpoints
debug.breakpoint(user.isAdmin, 'Admin user detected')
// Only triggers debugger if condition is true

// Simple breakpoint
debug.breakpoint()
// Triggers debugger immediately (dev mode only)
```

### 🎨 CSS Injection

```javascript
// Inject debug CSS
debug.css.inject(`
  .debug-mode {
    border: 2px solid red !important;
    background: rgba(255, 0, 0, 0.1) !important;
  }
`)

// Remove debug CSS
debug.css.remove()
```

## Global Access

In development mode, debug utilities are automatically available globally:

```javascript
// Global shortcuts available in browser console
window.dbg.log('Quick debug message')
window.bp(true, 'Quick breakpoint')
window.perf.mark('my-mark')
window.mem() // Check memory usage
window.net.summary() // View network requests
window.store.localStorage() // View localStorage
window.dom.highlight('.my-class') // Highlight elements
```

## Configuration

### Environment Variables

```bash
# Enable debug mode explicitly
VITE_DEBUG=true

# Set debug level
VITE_DEBUG_LEVEL=3
```

### URL Parameters

```
# Enable debug mode via URL
http://localhost:5173/?debug=true

# Set debug level via URL
http://localhost:5173/?debug-level=info
```

## Debug Levels

The debug utility supports different verbosity levels:

- **NONE (0)**: No debug output
- **ERROR (1)**: Only errors
- **WARN (2)**: Warnings and errors
- **INFO (3)**: Info, warnings, and errors
- **DEBUG (4)**: Debug, info, warnings, and errors (default)
- **TRACE (5)**: All output including traces

## Memory Monitoring

```javascript
// Check current memory usage (Chrome only)
const memInfo = debug.memory()
// Output: Memory usage table with:
// - Used JS Heap Size: 15.24 MB
// - Total JS Heap Size: 32.00 MB
// - JS Heap Size Limit: 2048.00 MB
```

## Best Practices

### 1. Use Appropriate Log Levels

```javascript
// ❌ Don't use debug.log for everything
debug.log('User clicked button')
debug.log('Critical error occurred')

// ✅ Use appropriate levels
debug.info('User clicked button')
debug.error('Critical error occurred')
```

### 2. Group Related Debug Output

```javascript
debug.group('User Authentication')
debug.info('Checking credentials')
debug.performance.mark('auth-start')
// ... authentication logic ...
debug.performance.mark('auth-end')
debug.performance.measure('auth', 'auth-start', 'auth-end')
debug.groupEnd()
```

### 3. Use Conditional Breakpoints

```javascript
// ❌ Always breaking
debug.breakpoint()

// ✅ Break only when needed
debug.breakpoint(data.length === 0, 'Empty data array')
debug.breakpoint(response.status >= 400, 'HTTP error response')
```

### 4. Clean Up in Production

Debug utilities are automatically disabled in production builds, but you can also manually control them:

```javascript
// Debug code is automatically stripped in production
if (import.meta.env.DEV) {
  debug.log('This only runs in development')
}
```

## Integration Examples

### Component Debugging

```javascript
// src/components/UserProfile.js
import { debug } from '../utils/debug.js'

export class UserProfile {
  constructor(userData) {
    debug.group('UserProfile Creation')
    debug.info('Creating user profile', userData)
    debug.performance.mark('profile-create-start')

    this.render(userData)

    debug.performance.mark('profile-create-end')
    debug.performance.measure('profile-creation', 'profile-create-start', 'profile-create-end')
    debug.groupEnd()
  }

  render(userData) {
    debug.info('Rendering user profile')
    // ... rendering logic ...
  }
}
```

### API Debugging

```javascript
// src/modules/api.js
import { debug } from '../utils/debug.js'

export async function fetchUser(id) {
  debug.network.logRequest(`/api/users/${id}`, { method: 'GET' })

  try {
    const response = await fetch(`/api/users/${id}`)
    debug.network.response(`/api/users/${id}`, response.status)

    if (!response.ok) {
      debug.error('Failed to fetch user', { id, status: response.status })
      throw new Error('Failed to fetch user')
    }

    const userData = await response.json()
    debug.info('User data received', userData)
    return userData
  } catch (error) {
    debug.error('API request failed', error)
    throw error
  }
}
```

The debug utilities provide a powerful foundation for development and troubleshooting, making it easier to understand your application's behavior and performance characteristics.
