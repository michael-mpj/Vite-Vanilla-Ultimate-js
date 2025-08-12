# Performance Guidelines

This document outlines practices and metrics to maintain high performance.

## Performance Goals

- Fast initial load (< 1 second on modern connections)
- Smooth interactions (60 FPS)
- Minimal bundle size

## Tips

- Use Vite's built-in code splitting and lazy loading.
- Avoid large dependencies; prefer vanilla JS or lightweight libs.
- Minimize DOM manipulations.
- Use `requestAnimationFrame` for animations.
- Optimize images and assets.
- Leverage browser caching and HTTP/2 when deploying.
- Analyze bundle with tools like `rollup-plugin-visualizer`.

## Measuring Performance

- Use browser DevTools (Lighthouse, Performance tab).
- Test on multiple devices and network conditions.
- Set performance budgets and track regressions.

## Continuous Monitoring

Integrate performance tests in your CI/CD pipeline to prevent regressions.

---

Maintaining performance is key to good UX and SEO.
