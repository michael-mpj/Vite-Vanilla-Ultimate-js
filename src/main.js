import './styles/reset.css'
import './styles/main.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { initRouter } from './modules/router'
import './registerServiceWorker'
import debug from './utils/debug'

// Initialize debug mode
debug.log('🚀 Initializing Vite Vanilla Ultimate JS App')

if (debug.isDebugMode) {
  debug.log('📦 Application modules loaded:', {
    Header,
    Footer,
    initRouter,
  })

  // Enable debugging globally
  window.app = {
    Header,
    Footer,
    initRouter,
  }

  // Attach debugger for development
  debug.breakpoint(true, 'Application startup - main.js loaded')
}

debug.time('App Initialization')

document.querySelector('#header').innerHTML = Header()
document.querySelector('#footer').innerHTML = Footer()
initRouter()

debug.timeEnd('App Initialization')
debug.log('✅ Application initialized successfully')
