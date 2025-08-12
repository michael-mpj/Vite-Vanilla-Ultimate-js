/**
 * Enhanced Debug Utilities Demo
 *
 * This file demonstrates all the advanced debugging features available
 * in the Vite Vanilla Ultimate starter template.
 *
 * @eslint-disable no-unused-vars, no-undef
 */

import { debug } from './src/utils/debug.js'

// =============================================================================
// 🚀 GETTING STARTED WITH ENHANCED DEBUG UTILITIES
// =============================================================================

console.log('🎯 Enhanced Debug Utilities Demo')
console.log('Open your browser console to see all debug features in action!')

// =============================================================================
// 🐛 BASIC LOGGING WITH LEVELS
// =============================================================================

debug.info('This is an info message')
debug.log('This is a debug message')
debug.warn('This is a warning message')
debug.error('This is an error message')
debug.trace('This shows a stack trace')

// =============================================================================
// ⏱️ PERFORMANCE MONITORING
// =============================================================================

// Basic performance marking and measuring
debug.performance.mark('demo-start')

// Simulate some work
for (let i = 0; i < 1000; i++) {
  Math.random()
}

debug.performance.mark('demo-end')
debug.performance.measure('demo-duration', 'demo-start', 'demo-end')

// Get performance report
window.setTimeout(() => {
  debug.performance.getReport()
}, 100)

// FPS Monitoring (useful for animations)
debug.performance.fps.start()
window.setTimeout(() => {
  debug.performance.fps.stop()
}, 3000)

// =============================================================================
// 💾 MEMORY MONITORING
// =============================================================================

// Check memory usage (Chrome only)
debug.memory()

// =============================================================================
// 🌐 NETWORK DEBUGGING
// =============================================================================

// Auto-intercept all fetch requests (already enabled)
// Try making an API call to see it in action:
/*
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => debug.info('API Response:', data))
*/

// Manual network logging
debug.network.logRequest('/api/users', { method: 'GET' })

// View network summary
window.setTimeout(() => {
  debug.network.summary()
}, 500)

// =============================================================================
// 🎯 DOM DEBUGGING AND INSPECTION
// =============================================================================

// Highlight elements (auto-clear after 3 seconds)
debug.dom.highlight('body', 'blue', 3000)

// Inspect an element in detail
debug.dom.inspect('body')

// Show DOM tree structure
debug.dom.tree(document.querySelector('main'), 2)

// Start watching for DOM mutations
debug.dom.mutations.start()

// Stop after 5 seconds
window.setTimeout(() => {
  debug.dom.mutations.stop()
}, 5000)

// =============================================================================
// 🔄 STATE MONITORING
// =============================================================================

// Create a sample object to watch
const appState = {
  user: null,
  theme: 'light',
  notifications: [],
}

// Watch for state changes (store references to avoid ESLint warnings)
window.userWatcher = debug.state.watch(appState, 'user', (newValue, oldValue) => {
  debug.info('User state changed!', { newValue, oldValue })
})

window.themeWatcher = debug.state.watch(appState, 'theme', (newValue, oldValue) => {
  debug.info('Theme changed!', { newValue, oldValue })
})

// Trigger state changes to see watchers in action
window.setTimeout(() => {
  appState.user = { id: 1, name: 'John Doe' }
}, 1000)

window.setTimeout(() => {
  appState.theme = 'dark'
}, 2000)

// Create state snapshots
debug.state.snapshot(appState, 'Initial app state')

window.setTimeout(() => {
  debug.state.snapshot(appState, 'Updated app state')
  debug.state.diff({ user: null, theme: 'light', notifications: [] }, appState, 'State changes')
}, 3000)

// =============================================================================
// 📝 EVENT TRACKING
// =============================================================================

// Track custom events
debug.events.track('page-load', { url: window.location.href })
debug.events.track('user-interaction', { type: 'click', element: 'button' })

// View event history
window.setTimeout(() => {
  console.log('📝 Event History:', debug.events.getEvents())
}, 1000)

// =============================================================================
// 🎨 CSS DEBUGGING
// =============================================================================

// Inject debug CSS
debug.css.inject(
  `
  .debug-demo {
    border: 2px dashed #ff6b6b !important;
    background: rgba(255, 107, 107, 0.1) !important;
    padding: 10px !important;
  }
`,
  'demo-styles',
)

// Apply debug styles to elements
debug.css.highlight('h1', {
  backgroundColor: 'rgba(0, 255, 0, 0.2)',
  outline: '3px solid green',
})

// Remove debug CSS after 5 seconds
window.setTimeout(() => {
  debug.css.remove('demo-styles')
}, 5000)

// =============================================================================
// 🛠️ UTILITY FUNCTIONS
// =============================================================================

// Copy debug data to clipboard
debug.utils.clipboard('Debug utilities are awesome!')

// Export all debug logs
window.setTimeout(() => {
  debug.utils.exportLogs()
}, 2000)

// =============================================================================
// 🌍 GLOBAL SHORTCUTS (Available in browser console)
// =============================================================================

console.log(`
🎯 GLOBAL DEBUG SHORTCUTS:
Use these directly in your browser console:

📊 Performance:
  window.perf.mark('my-mark')
  window.perf.measure('my-measure', 'start', 'end')
  window.fps.start() / window.fps.stop()
  window.mem()

🌐 Network:
  window.net.summary()
  window.net.clear()
  window.interceptFetch() / window.restoreFetch()

🎯 DOM:
  window.dom.highlight('.my-class', 'red')
  window.inspect('body')
  window.dom.tree(document.body, 3)

💾 Storage:
  window.store.localStorage()
  window.store.sessionStorage()

🔄 State:
  window.watch(myObject, 'property', callback)
  window.state.snapshot(myObject)

📝 Events:
  window.track('event-name', data)
  window.events.getEvents()

🛠️ Utilities:
  window.utils.clipboard('text')
  window.exportLogs()

🔴 Quick Debugging:
  window.bp() // immediate breakpoint
  window.bp(condition, 'message') // conditional breakpoint
`)

// =============================================================================
// 🎮 INTERACTIVE DEMO
// =============================================================================

// Add some interactive elements for testing
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDemo)
} else {
  initDemo()
}

function initDemo() {
  // Create demo button
  const demoButton = document.createElement('button')
  demoButton.textContent = '🎯 Test Debug Features'
  demoButton.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 10000;
    padding: 10px 20px;
    background: #646cff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: system-ui;
  `

  demoButton.addEventListener('click', () => {
    debug.events.track('demo-button-click', { timestamp: Date.now() })
    debug.dom.highlight('button', 'yellow', 2000)
    debug.performance.mark('button-click')
    debug.info('Demo button clicked! Check console for debug info.')
  })

  document.body.appendChild(demoButton)

  // Track the button creation
  debug.events.track('demo-initialized', {
    button: 'created',
    features: ['performance', 'dom', 'events', 'network', 'state'],
  })
}

export { debug }
