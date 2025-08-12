import './styles/reset.css'
import './styles/main.css'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import { initRouter } from './modules/router.js'
import './registerServiceWorker.js'

document.querySelector('#header').innerHTML = Header()
document.querySelector('#footer').innerHTML = Footer()
initRouter()
