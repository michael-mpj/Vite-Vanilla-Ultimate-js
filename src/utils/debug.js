// Debug utility for development
export const isDebugMode = import.meta.env.DEV || window.location.search.includes('debug=true')

export const debug = {
  log: (...args) => {
    if (isDebugMode) {
      console.log('🐛 DEBUG:', ...args)
    }
  },
  warn: (...args) => {
    if (isDebugMode) {
      console.warn('⚠️ DEBUG WARNING:', ...args)
    }
  },
  error: (...args) => {
    if (isDebugMode) {
      console.error('❌ DEBUG ERROR:', ...args)
    }
  },
  trace: (label = 'Debug trace') => {
    if (isDebugMode) {
      console.trace(`🔍 ${label}`)
    }
  },
  breakpoint: (condition = true, message = 'Debug breakpoint') => {
    if (isDebugMode && condition) {
      console.log(`🔴 ${message}`)
      if (import.meta.env.DEV) {
        // Use eval to avoid ESLint error in production builds
        eval('debugger')
      }
    }
  },
  time: (label) => {
    if (isDebugMode) {
      console.time(`⏱️ ${label}`)
    }
  },
  timeEnd: (label) => {
    if (isDebugMode) {
      console.timeEnd(`⏱️ ${label}`)
    }
  },
  group: (label) => {
    if (isDebugMode) {
      console.group(`📂 ${label}`)
    }
  },
  groupEnd: () => {
    if (isDebugMode) {
      console.groupEnd()
    }
  },
  table: (data, columns) => {
    if (isDebugMode) {
      console.table(data, columns)
    }
  },
  // 🆕 NEW ENHANCEMENTS
  performance: {
    mark: (name) => {
      if (isDebugMode && 'performance' in window) {
        window.performance.mark(name)
        console.log(`📊 Performance mark: ${name}`)
      }
    },
    measure: (name, startMark, endMark) => {
      if (isDebugMode && 'performance' in window) {
        window.performance.measure(name, startMark, endMark)
        const measure = window.performance.getEntriesByName(name)[0]
        console.log(`📈 Performance measure: ${name} = ${measure.duration.toFixed(2)}ms`)
      }
    },
  },
  memory: () => {
    if (isDebugMode && window.performance && 'memory' in window.performance) {
      const mem = window.performance.memory
      console.table({
        'Used JS Heap Size': `${(mem.usedJSHeapSize / 1048576).toFixed(2)} MB`,
        'Total JS Heap Size': `${(mem.totalJSHeapSize / 1048576).toFixed(2)} MB`,
        'JS Heap Size Limit': `${(mem.jsHeapSizeLimit / 1048576).toFixed(2)} MB`,
      })
    }
  },
  network: {
    requests: [],
    logRequest: (url, options = {}) => {
      if (isDebugMode) {
        const request = {
          timestamp: new Date().toISOString(),
          url,
          method: options.method || 'GET',
          headers: options.headers || {},
        }
        debug.network.requests.push(request)
        console.log('🌐 Network Request:', request)
      }
    },
    summary: () => {
      if (isDebugMode) {
        console.group('🌐 Network Summary')
        console.table(debug.network.requests)
        console.groupEnd()
      }
    },
  },
  storage: {
    localStorage: () => {
      if (isDebugMode && 'localStorage' in window) {
        console.group('💾 LocalStorage Contents')
        for (let i = 0; i < window.localStorage.length; i++) {
          const key = window.localStorage.key(i)
          console.log(`${key}:`, window.localStorage.getItem(key))
        }
        console.groupEnd()
      }
    },
    sessionStorage: () => {
      if (isDebugMode && 'sessionStorage' in window) {
        console.group('🔒 SessionStorage Contents')
        for (let i = 0; i < window.sessionStorage.length; i++) {
          const key = window.sessionStorage.key(i)
          console.log(`${key}:`, window.sessionStorage.getItem(key))
        }
        console.groupEnd()
      }
    },
  },
  dom: {
    highlight: (selector, color = 'red') => {
      if (isDebugMode) {
        const elements = document.querySelectorAll(selector)
        elements.forEach((el) => {
          el.style.outline = `2px solid ${color}`
          el.style.outlineOffset = '2px'
        })
        console.log(`🎯 Highlighted ${elements.length} elements with selector: ${selector}`)
      }
    },
    clearHighlights: () => {
      if (isDebugMode) {
        document.querySelectorAll('*').forEach((el) => {
          el.style.outline = ''
          el.style.outlineOffset = ''
        })
        console.log('✨ Cleared all highlights')
      }
    },
  },
  css: {
    inject: (css) => {
      if (isDebugMode) {
        const style = document.createElement('style')
        style.textContent = css
        style.setAttribute('data-debug-css', 'true')
        document.head.appendChild(style)
        console.log('🎨 Injected debug CSS')
      }
    },
    remove: () => {
      if (isDebugMode) {
        document.querySelectorAll('[data-debug-css]').forEach((el) => el.remove())
        console.log('🗑️ Removed debug CSS')
      }
    },
  },
}

// Initialize global debug object
if (isDebugMode) {
  window.DEBUG_UTILS = debug
  window.DEBUG = true

  // Add global debug helpers
  window.dbg = debug
  window.bp = debug.breakpoint

  // 🆕 Add performance monitoring
  window.perf = debug.performance
  window.mem = debug.memory
  window.net = debug.network
  window.store = debug.storage
  window.dom = debug.dom

  console.log('🔧 Debug utilities loaded. Use window.dbg or window.DEBUG_UTILS')
  console.log('🎯 Quick breakpoint: window.bp(condition, message)')
  console.log('📊 Performance: window.perf.mark("name") / window.perf.measure()')
  console.log('💾 Storage: window.store.localStorage() / window.store.sessionStorage()')
  console.log('🎯 DOM: window.dom.highlight("selector") / window.dom.clearHighlights()')
}

export default debug
