import IndexPage from '../pages/index.js'
import AboutPage from '../pages/about.js'
import ContactPage from '../pages/contact.js'

const routes = {
  '/': IndexPage,
  '/about': AboutPage,
  '/contact': ContactPage
}

export function renderRoute(path) {
  const el = document.querySelector('#app')
  const Page = routes[path] || IndexPage
  el.innerHTML = Page()
}

export function initRouter() {
  renderRoute(window.location.pathname)

  document.body.addEventListener('click', (e) => {
    const a = e.target.closest('a[data-link]')
    if (a) {
      e.preventDefault()
      const href = a.getAttribute('href')
      history.pushState({}, '', href)
      renderRoute(href)
    }
  })

  window.addEventListener('popstate', () => {
    renderRoute(window.location.pathname)
  })
}
