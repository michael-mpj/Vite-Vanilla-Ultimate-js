import Navbar from './Navbar.js'
export default function Header() {
  return `
    <header class="site-header">
      <h1>Vite Vanilla Ultimate JS</h1>
      ${Navbar()}
    </header>
  `
}
