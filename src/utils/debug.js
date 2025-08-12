// Enhanced Debug utility for development
export const isDebugMode = import.meta.env.DEV || window.location.search.includes('debug=true')

// Debug levels for granular control
export const DEBUG_LEVELS = {
  NONE: 0,
  ERROR: 1,
  WARN: 2,
  INFO: 3,
  DEBUG: 4,
  TRACE: 5,
}

// Get debug level from environment or URL
const getDebugLevel = () => {
  if (typeof window !== 'undefined') {
    const urlParams = new window.URLSearchParams(window.location.search)
    const urlLevel = urlParams.get('debug-level')
    if (urlLevel && DEBUG_LEVELS[urlLevel.toUpperCase()]) {
      return DEBUG_LEVELS[urlLevel.toUpperCase()]
    }
  }
  return import.meta.env.VITE_DEBUG_LEVEL || DEBUG_LEVELS.DEBUG
}

const currentDebugLevel = getDebugLevel()

// Event tracking for debugging user interactions
const eventTracker = {
  events: [],
  track: (eventName, data = {}) => {
    if (isDebugMode) {
      const event = {
        timestamp: Date.now(),
        name: eventName,
        data,
        stack: new Error().stack.split('\n').slice(2, 5),
      }
      eventTracker.events.push(event)
      if (eventTracker.events.length > 100) {
        eventTracker.events.shift() // Keep only last 100 events
      }
      console.log(`📝 Event tracked: ${eventName}`, data)
    }
  },
  getEvents: () => eventTracker.events,
  clear: () => {
    eventTracker.events = []
    console.log('🗑️ Event history cleared')
  },
}

export const debug = {
  // Enhanced logging with levels
  log: (...args) => {
    if (isDebugMode && currentDebugLevel >= DEBUG_LEVELS.DEBUG) {
      console.log('🐛 DEBUG:', ...args)
    }
  },
  info: (...args) => {
    if (isDebugMode && currentDebugLevel >= DEBUG_LEVELS.INFO) {
      console.info('ℹ️ INFO:', ...args)
    }
  },
  warn: (...args) => {
    if (isDebugMode && currentDebugLevel >= DEBUG_LEVELS.WARN) {
      console.warn('⚠️ WARNING:', ...args)
    }
  },
  error: (...args) => {
    if (isDebugMode && currentDebugLevel >= DEBUG_LEVELS.ERROR) {
      console.error('❌ ERROR:', ...args)
    }
  },
  trace: (label = 'Debug trace') => {
    if (isDebugMode && currentDebugLevel >= DEBUG_LEVELS.TRACE) {
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
  // Enhanced performance monitoring
  performance: {
    marks: new Map(),
    measures: [],
    mark: (name) => {
      if (isDebugMode && 'performance' in window) {
        window.performance.mark(name)
        debug.performance.marks.set(name, window.performance.now())
        console.log(`📊 Performance mark: ${name}`)
      }
    },
    measure: (name, startMark, endMark) => {
      if (isDebugMode && 'performance' in window) {
        window.performance.measure(name, startMark, endMark)
        const measure = window.performance.getEntriesByName(name)[0]
        const result = {
          name,
          duration: measure.duration,
          timestamp: Date.now(),
        }
        debug.performance.measures.push(result)
        console.log(`📈 Performance measure: ${name} = ${measure.duration.toFixed(2)}ms`)
        return result
      }
    },
    getReport: () => {
      if (isDebugMode) {
        console.table(debug.performance.measures)
        return debug.performance.measures
      }
    },
    fps: {
      enabled: false,
      frameCount: 0,
      lastTime: 0,
      start: () => {
        if (isDebugMode && !debug.performance.fps.enabled) {
          debug.performance.fps.enabled = true
          debug.performance.fps.frameCount = 0
          debug.performance.fps.lastTime = window.performance.now()
          debug.performance.fps._loop()
          console.log('🎬 FPS monitoring started')
        }
      },
      stop: () => {
        debug.performance.fps.enabled = false
        console.log('🛑 FPS monitoring stopped')
      },
      _loop: () => {
        if (!debug.performance.fps.enabled) return
        const now = window.performance.now()
        debug.performance.fps.frameCount++

        if (now >= debug.performance.fps.lastTime + 1000) {
          const fps = Math.round(
            (debug.performance.fps.frameCount * 1000) / (now - debug.performance.fps.lastTime),
          )
          console.log(`🎬 FPS: ${fps}`)
          debug.performance.fps.frameCount = 0
          debug.performance.fps.lastTime = now
        }

        window.requestAnimationFrame(debug.performance.fps._loop)
      },
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
  // Enhanced network debugging
  network: {
    requests: [],
    interceptor: null,
    logRequest: (url, options = {}) => {
      if (isDebugMode) {
        const request = {
          id: Math.random().toString(36).substring(7),
          timestamp: new Date().toISOString(),
          url,
          method: options.method || 'GET',
          headers: options.headers || {},
          body: options.body || null,
          status: 'pending',
        }
        debug.network.requests.push(request)
        console.log('🌐 Network Request:', request)
        return request.id
      }
    },
    logResponse: (requestId, response) => {
      if (isDebugMode) {
        const request = debug.network.requests.find((r) => r.id === requestId)
        if (request) {
          request.status = response.status
          request.responseTime = Date.now() - new Date(request.timestamp).getTime()
          request.size = response.headers.get('content-length') || 'unknown'
        }
        console.log('📡 Network Response:', {
          requestId,
          status: response.status,
          url: response.url,
        })
      }
    },
    interceptFetch: () => {
      if (isDebugMode && !debug.network.interceptor) {
        const originalFetch = window.fetch
        debug.network.interceptor = originalFetch

        window.fetch = async (...args) => {
          const requestId = debug.network.logRequest(args[0], args[1])
          try {
            const response = await originalFetch(...args)
            debug.network.logResponse(requestId, response)
            return response
          } catch (error) {
            debug.error('Network request failed:', error)
            throw error
          }
        }
        console.log('🔌 Fetch interceptor enabled')
      }
    },
    restoreFetch: () => {
      if (debug.network.interceptor) {
        window.fetch = debug.network.interceptor
        debug.network.interceptor = null
        console.log('🔌 Fetch interceptor disabled')
      }
    },
    summary: () => {
      if (isDebugMode) {
        console.group('🌐 Network Summary')
        console.table(
          debug.network.requests.map((r) => ({
            method: r.method,
            url: r.url.substring(0, 50) + (r.url.length > 50 ? '...' : ''),
            status: r.status,
            responseTime: r.responseTime ? `${r.responseTime}ms` : 'pending',
          })),
        )
        console.groupEnd()
      }
    },
    clear: () => {
      debug.network.requests = []
      console.log('🗑️ Network history cleared')
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
  // Enhanced DOM debugging
  dom: {
    highlight: (selector, color = 'red', duration = 0) => {
      if (isDebugMode) {
        const elements = document.querySelectorAll(selector)
        elements.forEach((el) => {
          const originalOutline = el.style.outline
          const originalOffset = el.style.outlineOffset
          el.style.outline = `2px solid ${color}`
          el.style.outlineOffset = '2px'
          el.setAttribute('data-debug-highlighted', 'true')

          if (duration > 0) {
            window.setTimeout(() => {
              el.style.outline = originalOutline
              el.style.outlineOffset = originalOffset
              el.removeAttribute('data-debug-highlighted')
            }, duration)
          }
        })
        console.log(`🎯 Highlighted ${elements.length} elements with selector: ${selector}`)
        return elements
      }
    },
    clearHighlights: () => {
      if (isDebugMode) {
        document.querySelectorAll('[data-debug-highlighted]').forEach((el) => {
          el.style.outline = ''
          el.style.outlineOffset = ''
          el.removeAttribute('data-debug-highlighted')
        })
        console.log('✨ Cleared all highlights')
      }
    },
    inspect: (selector) => {
      if (isDebugMode) {
        const element = document.querySelector(selector)
        if (element) {
          console.group(`🔍 DOM Inspector: ${selector}`)
          console.log('Element:', element)
          console.log('Computed Style:', window.getComputedStyle(element))
          console.log('Bounding Rect:', element.getBoundingClientRect())
          console.log(
            'Data Attributes:',
            Object.fromEntries(
              [...element.attributes]
                .filter((attr) => attr.name.startsWith('data-'))
                .map((attr) => [attr.name, attr.value]),
            ),
          )
          console.log(
            'Event Listeners:',
            window.getEventListeners
              ? window.getEventListeners(element)
              : 'Not available (Chrome DevTools only)',
          )
          console.groupEnd()
          return element
        } else {
          console.warn(`🔍 Element not found: ${selector}`)
        }
      }
    },
    tree: (element = document.body, maxDepth = 3, currentDepth = 0) => {
      if (isDebugMode && currentDepth <= maxDepth) {
        const indent = '  '.repeat(currentDepth)
        const tag = element.tagName?.toLowerCase() || 'text'
        const id = element.id ? `#${element.id}` : ''
        const classes = element.className ? `.${element.className.split(' ').join('.')}` : ''
        console.log(`${indent}${tag}${id}${classes}`)

        if (currentDepth < maxDepth) {
          ;[...element.children].forEach((child) => {
            debug.dom.tree(child, maxDepth, currentDepth + 1)
          })
        }
      }
    },
    mutations: {
      observer: null,
      start: (target = document.body, options = { childList: true, subtree: true }) => {
        if (isDebugMode && !debug.dom.mutations.observer) {
          debug.dom.mutations.observer = new window.MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
              console.log('🔄 DOM Mutation:', {
                type: mutation.type,
                target: mutation.target,
                addedNodes: mutation.addedNodes.length,
                removedNodes: mutation.removedNodes.length,
              })
            })
          })
          debug.dom.mutations.observer.observe(target, options)
          console.log('👁️ DOM mutation observer started')
        }
      },
      stop: () => {
        if (debug.dom.mutations.observer) {
          debug.dom.mutations.observer.disconnect()
          debug.dom.mutations.observer = null
          console.log('👁️ DOM mutation observer stopped')
        }
      },
    },
  },
  // State debugging and monitoring
  state: {
    watchers: new Map(),
    watch: (obj, key, callback) => {
      if (isDebugMode && obj && typeof obj === 'object') {
        const watcherId = `${key}_${Date.now()}`
        const originalValue = obj[key]

        Object.defineProperty(obj, key, {
          get() {
            return originalValue
          },
          set(newValue) {
            const oldValue = originalValue
            console.log(`🔄 State change: ${key}`, { oldValue, newValue })
            callback?.(newValue, oldValue)
          },
        })

        debug.state.watchers.set(watcherId, { obj, key })
        console.log(`👁️ Watching state: ${key}`)
        return watcherId
      }
    },
    unwatch: (watcherId) => {
      if (debug.state.watchers.has(watcherId)) {
        debug.state.watchers.delete(watcherId)
        console.log(`👁️ Stopped watching state: ${watcherId}`)
      }
    },
    snapshot: (obj, label = 'State snapshot') => {
      if (isDebugMode) {
        const snapshot = JSON.parse(JSON.stringify(obj))
        console.log(`📸 ${label}:`, snapshot)
        return snapshot
      }
    },
    diff: (obj1, obj2, label = 'State diff') => {
      if (isDebugMode) {
        console.group(`🔄 ${label}`)
        console.log('Previous:', obj1)
        console.log('Current:', obj2)

        // Simple diff for primitive values
        if (typeof obj1 === 'object' && typeof obj2 === 'object') {
          const keys = new Set([...Object.keys(obj1 || {}), ...Object.keys(obj2 || {})])
          keys.forEach((key) => {
            if (obj1?.[key] !== obj2?.[key]) {
              console.log(`  ${key}: ${obj1?.[key]} → ${obj2?.[key]}`)
            }
          })
        }
        console.groupEnd()
      }
    },
  },

  // Event tracking and debugging
  events: eventTracker,

  // Enhanced CSS debugging
  css: {
    inject: (css, id = 'debug-css') => {
      if (isDebugMode) {
        // Remove existing debug CSS with same id
        const existing = document.querySelector(`style[data-debug-css="${id}"]`)
        if (existing) existing.remove()

        const style = document.createElement('style')
        style.textContent = css
        style.setAttribute('data-debug-css', id)
        document.head.appendChild(style)
        console.log(`🎨 Injected debug CSS: ${id}`)
        return id
      }
    },
    remove: (id = null) => {
      if (isDebugMode) {
        const selector = id ? `[data-debug-css="${id}"]` : '[data-debug-css]'
        document.querySelectorAll(selector).forEach((el) => el.remove())
        console.log(`🗑️ Removed debug CSS${id ? `: ${id}` : ''}`)
      }
    },
    highlight: (selector, styles = {}) => {
      if (isDebugMode) {
        const defaultStyles = {
          outline: '2px solid red',
          backgroundColor: 'rgba(255, 0, 0, 0.1)',
          position: 'relative',
          zIndex: '9999',
        }
        const finalStyles = { ...defaultStyles, ...styles }
        const cssRules = Object.entries(finalStyles)
          .map(([prop, value]) => `${prop}: ${value} !important`)
          .join('; ')

        const css = `${selector} { ${cssRules} }`
        return debug.css.inject(css, `highlight-${selector.replace(/[^a-zA-Z0-9]/g, '_')}`)
      }
    },
  },

  // Utility functions
  utils: {
    clipboard: async (text) => {
      if (isDebugMode && navigator.clipboard) {
        try {
          await navigator.clipboard.writeText(text)
          console.log('📋 Copied to clipboard:', text)
        } catch (err) {
          console.error('📋 Failed to copy to clipboard:', err)
        }
      }
    },
    download: (data, filename, type = 'application/json') => {
      if (isDebugMode) {
        const content = typeof data === 'string' ? data : JSON.stringify(data, null, 2)
        const blob = new window.Blob([content], { type })
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = filename
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        window.URL.revokeObjectURL(url)
        console.log(`� Downloaded: ${filename}`)
      }
    },
    exportLogs: () => {
      if (isDebugMode) {
        const logs = {
          timestamp: new Date().toISOString(),
          performance: debug.performance.measures,
          network: debug.network.requests,
          events: debug.events.getEvents(),
          memory: debug.memory ? debug.memory() : null,
        }
        debug.utils.download(logs, `debug-logs-${Date.now()}.json`)
      }
    },
  },
}

// Initialize global debug object with enhanced features
if (isDebugMode) {
  window.DEBUG_UTILS = debug
  window.DEBUG = true
  window.DEBUG_LEVEL = currentDebugLevel

  // Enhanced global helpers
  window.dbg = debug
  window.bp = debug.breakpoint

  // Performance monitoring
  window.perf = debug.performance
  window.fps = debug.performance.fps
  window.mem = debug.memory

  // Network debugging
  window.net = debug.network
  window.interceptFetch = debug.network.interceptFetch
  window.restoreFetch = debug.network.restoreFetch

  // Storage debugging
  window.store = debug.storage

  // DOM debugging and inspection
  window.dom = debug.dom
  window.inspect = debug.dom.inspect

  // State monitoring
  window.state = debug.state
  window.watch = debug.state.watch

  // Event tracking
  window.events = debug.events
  window.track = debug.events.track

  // CSS debugging
  window.css = debug.css

  // Utilities
  window.utils = debug.utils
  window.exportLogs = debug.utils.exportLogs

  debug.info('🔧 Enhanced debug utilities loaded')
  debug.info(
    `🎯 Debug level: ${Object.keys(DEBUG_LEVELS).find((key) => DEBUG_LEVELS[key] === currentDebugLevel)}`,
  )
  debug.info('📚 Available globals:')
  debug.info('  Core: window.dbg, window.bp')
  debug.info('  Performance: window.perf, window.fps, window.mem')
  debug.info('  Network: window.net, window.interceptFetch')
  debug.info('  DOM: window.dom, window.inspect')
  debug.info('  State: window.state, window.watch')
  debug.info('  Events: window.events, window.track')
  debug.info('  Utils: window.utils, window.exportLogs')

  // Auto-enable fetch interception in debug mode
  if (currentDebugLevel >= DEBUG_LEVELS.DEBUG) {
    debug.network.interceptFetch()
  }
}

export default debug
