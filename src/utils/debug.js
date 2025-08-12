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
        debugger // This will pause execution in debugger (only in dev)
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
}

// Initialize global debug object
if (isDebugMode) {
  window.DEBUG_UTILS = debug
  window.DEBUG = true

  // Add global debug helpers
  window.dbg = debug
  window.bp = debug.breakpoint

  console.log('🔧 Debug utilities loaded. Use window.dbg or window.DEBUG_UTILS')
  console.log('🎯 Quick breakpoint: window.bp(condition, message)')
}

export default debug
