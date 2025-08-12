# Installation

## Prerequisites

Before getting started with Vite Vanilla Ultimate, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js) or **yarn** as package manager
- **Git** for version control

## Quick Install

### Option 1: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/michael-mpj/Vite-Vanilla-Ultimate-js.git

# Navigate to the project directory
cd vite-vanilla-ultimate-js

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Option 2: Use as Template

1. Click the "Use this template" button on GitHub
2. Create a new repository from the template
3. Clone your new repository
4. Install dependencies and start developing

## Development Setup

After installation, you can start the development server:

```bash
npm run dev
```

This will start the Vite development server at `http://localhost:5173` with hot module replacement (HMR) enabled.

## Verify Installation

To verify everything is working correctly:

```bash
# Run tests
npm test

# Run linting
npm run lint:check

# Run formatting check
npm run format:check

# Build for production
npm run build
```

## Next Steps

- Read the [Project Structure](/guide/project-structure) guide
- Learn about [Configuration](/guide/configuration) options
- Start [Development](/guide/development) with the framework

## Troubleshooting

### Common Issues

**Port already in use:**

```bash
# Kill the process using port 5173
npx kill-port 5173

# Or specify a different port
npm run dev -- --port 3000
```

**Permission errors on macOS/Linux:**

```bash
# Fix permissions
sudo chown -R $(whoami) node_modules
```

**Cache issues:**

```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```
