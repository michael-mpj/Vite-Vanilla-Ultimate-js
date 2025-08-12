# Getting Started

Welcome to **Vite Vanilla Ultimate** - a modern, production-ready starter template for vanilla JavaScript applications powered by Vite.

## What is Vite Vanilla Ultimate?

Vite Vanilla Ultimate is a comprehensive starter template that combines the power of Vite with vanilla JavaScript, providing you with:

- ⚡ **Lightning-fast development** with Vite's instant HMR
- 🧪 **Complete testing setup** with Vitest and coverage reports
- 🌐 **PWA capabilities** with service workers and offline functionality
- 🔧 **Modern tooling** including ESLint, Prettier, and Git hooks
- 📊 **Production optimization** with Brotli compression and tree shaking
- 🎯 **Enhanced debugging** utilities for development

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js 18+** (Recommended: Node.js 20 LTS)
- **npm 8+** (or yarn/pnpm equivalent)
- **Git** for version control

## Installation

### Option 1: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/michael-mpj/Vite-Vanilla-Ultimate-js.git
cd vite-vanilla-ultimate-js

# Install dependencies
npm install

# Start development server
npm run dev
```

### Option 2: Use as Template

1. Click "Use this template" on GitHub
2. Create your new repository
3. Clone your new repository
4. Install dependencies and start developing

## Quick Tour

Once you've installed the project, here's what you'll find:

### Development Server

```bash
npm run dev
```

This starts the Vite development server with:

- 🔥 **Hot Module Replacement (HMR)** - Instant updates without page refresh
- 🌐 **Auto-open browser** - Automatically opens your default browser
- 📱 **Network access** - Access from other devices on your network
- 🐛 **Debug mode** - Enhanced debugging utilities loaded

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.js       # Main header component
│   ├── Footer.js       # Footer with links
│   └── Navbar.js       # Navigation component
├── modules/            # Core application modules
│   ├── router.js       # Client-side routing
│   └── api.js          # API utilities
├── pages/              # Page-specific components
│   ├── index.js        # Home page
│   ├── about.js        # About page
│   └── contact.js      # Contact page
├── styles/             # CSS stylesheets
│   ├── main.css        # Main styles
│   └── reset.css       # CSS reset
├── utils/              # Utility functions
│   ├── debug.js        # Debug utilities
│   ├── dom.js          # DOM helpers
│   └── logger.js       # Logging utilities
└── main.js             # Application entry point
```

### Testing

```bash
npm test                # Run tests in watch mode
npm run test:coverage   # Generate coverage report
npm run test:ui         # Run tests with UI
```

### Building for Production

```bash
npm run build           # Create production build
npm run preview         # Preview production build
```

## Next Steps

Now that you have the project running, here are some recommended next steps:

1. **[Explore the Project Structure](/guide/project-structure)** - Understand how the code is organized
2. **[Learn About Configuration](/guide/configuration)** - Customize the build and development settings
3. **[Set Up Your Development Workflow](/guide/development)** - Learn about debugging and testing
4. **[Deploy Your Application](/guide/deployment)** - Get your app live on the web

## Need Help?

- 📖 Check out the [full documentation](/guide/)
- 🐛 [Report issues](https://github.com/michael-mpj/Vite-Vanilla-Ultimate-js/issues)
- 💬 [Join discussions](https://github.com/michael-mpj/Vite-Vanilla-Ultimate-js/discussions)
- 🚀 [View live demo](https://vite-vanilla-ultimate-at1a3g8yu-michaels-projects-6a11f466.vercel.app)
