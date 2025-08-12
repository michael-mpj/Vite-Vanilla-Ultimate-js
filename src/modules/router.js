import IndexPage from '../pages/index'
import AboutPage from '../pages/about'
import ContactPage from '../pages/contact'
import debug from '../utils/debug'

const routes = {
  '/': IndexPage,
  '/about': AboutPage,
  '/contact': ContactPage,
}

export function renderRoute(path) {
  debug.log('🧭 Router: Navigating to', path)
  debug.breakpoint(debug.isDebugMode, `Navigation to ${path}`)

  const el = document.querySelector('#app')
  const Page = routes[path] || IndexPage

  debug.log('📄 Router: Rendering page component', Page.name || 'Anonymous')

  if (debug.isDebugMode) {
    window.currentPage = { path, Page }
  }

  debug.time(`Page Render: ${path}`)
  el.innerHTML = Page()
  debug.timeEnd(`Page Render: ${path}`)
}

export function initRouter() {
  debug.log('🚀 Router: Initializing SPA router')

  if (debug.isDebugMode) {
    window.router = { renderRoute, routes }
  }

  renderRoute(window.location.pathname)

  document.body.addEventListener('click', (e) => {
    const a = e.target.closest('a[data-link]')
    if (a) {
      e.preventDefault()
      const href = a.getAttribute('href')

      debug.log('🔗 Router: Link clicked', href)

      window.history.pushState({}, '', href)
      renderRoute(href)
    }
  })

  window.addEventListener('popstate', () => {
    debug.log('⬅️ Router: Browser back/forward', window.location.pathname)
    renderRoute(window.location.pathname)
  })
}
