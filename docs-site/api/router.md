# Router API

The router module provides client-side routing functionality for single-page applications.

## Overview

The router enables navigation between different views without full page reloads, providing a smooth user experience.

## Usage

```javascript
import { router, navigate, getCurrentRoute } from '../modules/router.js'

// Navigate to a route
navigate('/about')

// Get current route
const currentRoute = getCurrentRoute()

// Listen for route changes
router.on('routeChange', (newRoute) => {
  console.log('Route changed to:', newRoute)
})
```

## API Reference

### `navigate(path, options)`

Navigate to a specific route.

**Parameters:**

- `path` (string) - The route path to navigate to
- `options` (object, optional) - Navigation options

**Options:**

- `replace` (boolean) - Replace current history entry instead of pushing
- `state` (object) - State object to associate with the route

**Example:**

```javascript
// Simple navigation
navigate('/about')

// Replace current route
navigate('/login', { replace: true })

// Navigate with state
navigate('/user/123', {
  state: { userId: 123, from: 'dashboard' },
})
```

### `getCurrentRoute()`

Get the current active route information.

**Returns:** Object with route details

- `path` (string) - Current route path
- `params` (object) - Route parameters
- `query` (object) - Query string parameters
- `state` (object) - Route state

**Example:**

```javascript
const route = getCurrentRoute()
console.log(route.path) // '/user/123'
console.log(route.params) // { id: '123' }
console.log(route.query) // { tab: 'profile' }
```

### `addRoute(path, handler)`

Add a new route to the router.

**Parameters:**

- `path` (string) - Route pattern (supports parameters)
- `handler` (function) - Route handler function

**Example:**

```javascript
addRoute('/user/:id', async (params) => {
  const { default: UserPage } = await import('../pages/user.js')
  return UserPage(params)
})

// Route with multiple parameters
addRoute('/user/:id/post/:postId', (params) => {
  console.log(params.id, params.postId)
})
```

### `removeRoute(path)`

Remove a route from the router.

**Parameters:**

- `path` (string) - Route path to remove

**Example:**

```javascript
removeRoute('/old-page')
```

### Router Events

The router emits events that you can listen to:

#### `routeChange`

Fired when the route changes.

```javascript
router.on('routeChange', (newRoute, oldRoute) => {
  console.log('Navigation from', oldRoute.path, 'to', newRoute.path)
})
```

#### `beforeRouteChange`

Fired before route change (can be cancelled).

```javascript
router.on('beforeRouteChange', (newRoute, oldRoute) => {
  if (hasUnsavedChanges()) {
    return false // Cancel navigation
  }
})
```

#### `routeError`

Fired when route handling fails.

```javascript
router.on('routeError', (error, route) => {
  console.error('Route error:', error, 'for route:', route)
})
```

## Route Patterns

### Simple Routes

```javascript
addRoute('/home', HomeHandler)
addRoute('/about', AboutHandler)
addRoute('/contact', ContactHandler)
```

### Parameterized Routes

```javascript
// Single parameter
addRoute('/user/:id', UserHandler)

// Multiple parameters
addRoute('/category/:category/item/:id', ItemHandler)

// Optional parameters
addRoute('/posts/:id?', PostsHandler)
```

### Wildcard Routes

```javascript
// Catch-all route (should be last)
addRoute('*', NotFoundHandler)

// Prefix matching
addRoute('/admin/*', AdminHandler)
```

## Route Guards

Implement route protection with guards:

```javascript
// Authentication guard
router.beforeEach((to, from) => {
  if (to.path.startsWith('/admin') && !isAuthenticated()) {
    navigate('/login')
    return false
  }
})

// Permission guard
router.beforeEach((to, from) => {
  if (to.meta?.requiresPermission && !hasPermission(to.meta.permission)) {
    navigate('/unauthorized')
    return false
  }
})
```

## Advanced Usage

### Programmatic Navigation

```javascript
// Go back
router.back()

// Go forward
router.forward()

// Go to specific history entry
router.go(-2) // Go back 2 entries
```

### Route Metadata

Associate metadata with routes:

```javascript
addRoute('/admin/users', {
  handler: AdminUsersHandler,
  meta: {
    requiresAuth: true,
    permission: 'admin',
    title: 'User Management',
  },
})
```

### Lazy Loading

Implement code splitting with lazy route loading:

```javascript
addRoute('/dashboard', async () => {
  const { default: Dashboard } = await import('../pages/Dashboard.js')
  return Dashboard
})
```

### Query Parameters

Handle query string parameters:

```javascript
// URL: /search?q=javascript&page=2
const route = getCurrentRoute()
console.log(route.query.q) // 'javascript'
console.log(route.query.page) // '2'

// Navigate with query parameters
navigate('/search', {
  query: { q: 'react', page: 1 },
})
```

## Error Handling

Handle routing errors gracefully:

```javascript
router.on('routeError', (error, route) => {
  // Log error
  console.error('Routing error:', error)

  // Fallback to home page
  navigate('/')

  // Show user-friendly message
  showNotification('Page not found', 'error')
})
```

## Performance Tips

1. **Lazy Load Routes**: Use dynamic imports for better performance
2. **Route Caching**: Cache route handlers to avoid re-parsing
3. **Minimal Re-renders**: Only update components that depend on route changes
4. **Preload Critical Routes**: Preload important routes during idle time

```javascript
// Preload critical routes
const criticalRoutes = ['/dashboard', '/profile']
criticalRoutes.forEach((route) => {
  router.preload(route)
})
```
