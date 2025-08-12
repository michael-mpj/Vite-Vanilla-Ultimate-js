if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const reg = await navigator.serviceWorker.register('/sw.js')
      console.log('ServiceWorker registered', reg)
    } catch (err) {
      console.error('ServiceWorker registration failed:', err)
    }
  })
}
