# Deployment Guide

This document explains how to build and deploy the Vite Vanilla project.

## Build for Production

To create an optimized production build, run:

```bash
npm run build
```

This generates the `dist/` folder containing static assets ready to be deployed.

## Preview Production Build Locally

To preview the production build locally:

```bash
npm run preview
```

## Deploying

You can deploy the contents of the `dist/` folder to any static hosting provider:

- **Netlify**: Drag and drop the `dist` folder or use CLI.
- **Vercel**: Connect repository and specify `npm run build` as build command and `dist` as output directory.
- **GitHub Pages**: Use `gh-pages` branch to host `dist`.
- **Firebase Hosting**: Configure Firebase and deploy `dist`.

## Continuous Deployment

Set up your CI/CD pipeline to run `npm install` and `npm run build`, then upload the contents of `dist/`.

---

Make sure your hosting supports SPA routing if you use client-side routing.
