# Project Architecture

This document describes the overall architecture of the Vite Vanilla project.

## Overview

- **Vite**: Build tool and development server.
- **Vanilla JavaScript**: No framework, pure JS for simplicity and speed.
- **ES Modules**: Modular code organization using native JS modules.
- **Static Assets**: Managed under `public/`.
- **Entry Point**: `index.html` loads the main JS module.

## Folder Structure

```
/
├── index.html       # Main HTML file
├── src/             # Source files
│   ├── main.js      # Entry JavaScript file
│   ├── components/  # Reusable JS or UI components
│   ├── styles/      # CSS or PostCSS files
│   └── assets/      # Images, fonts, icons
├── public/          # Static assets copied as-is
├── vite.config.js   # Vite configuration
├── package.json
└── README.md
```

## Build and Dev

- Dev server supports hot module replacement (HMR).
- Production build optimized with minification, tree-shaking.

## Key Design Principles

- Minimal dependencies for performance and maintainability.
- Use native web APIs and modern JavaScript features.
- Clear modular code separation.
