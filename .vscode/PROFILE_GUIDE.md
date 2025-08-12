# 🎯 VS Code Profile Setup Guide

This guide will help you set up the optimized VS Code profile for Vite + Vanilla JavaScript development.

## 🚀 Quick Setup

### Option 1: Automatic Setup

```bash
# Make the launch script executable and run it
chmod +x vscode-launch.sh
./vscode-launch.sh
```

### Option 2: Manual Profile Import

1. **Open VS Code Settings**
   - `Ctrl+Shift+P` → "Preferences: Open Settings (JSON)"

2. **Import Profile**
   - `Ctrl+Shift+P` → "Profiles: Import Profile..."
   - Select the `.vscode/profile.json` file
   - Choose "Vite Vanilla Ultimate" as profile name

3. **Apply Profile**
   - `Ctrl+Shift+P` → "Profiles: Switch Profile..."
   - Select "Vite Vanilla Ultimate"

## 📦 Included Extensions

### 🎨 Essential Tools

- **ESLint** - Code quality and linting
- **Prettier** - Code formatting
- **EditorConfig** - Consistent editor settings
- **Vite** - Build tool support

### 🌐 Web Development

- **Live Server** - Local development server
- **Path Intellisense** - Auto-completion for file paths
- **HTML CSS Support** - Enhanced HTML/CSS editing
- **Auto Rename Tag** - Automatically rename paired tags

### 🔍 Git & GitHub

- **GitLens** - Enhanced Git capabilities
- **GitHub Pull Requests** - PR management
- **GitHub Copilot** - AI-powered coding assistant

### 🧪 Testing & Debugging

- **Vitest Explorer** - Test runner integration
- **Playwright** - End-to-end testing support

### 🚀 Productivity

- **Error Lens** - Inline error display
- **Better Comments** - Enhanced comment styling
- **Todo Tree** - TODO/FIXME highlighting
- **Code Spell Checker** - Spell checking for code

## ⌨️ Custom Keybindings

| Shortcut       | Action          |
| -------------- | --------------- |
| `Ctrl+Shift+D` | Run dev server  |
| `Ctrl+Shift+B` | Build project   |
| `Ctrl+Shift+T` | Run tests       |
| `Ctrl+Shift+L` | Run linter      |
| `Ctrl+Shift+F` | Run npm scripts |

## 🎨 Code Snippets

### JavaScript Snippets

#### Quick Component (`qcomp`)

```javascript
export function ComponentName() {
  const element = document.createElement('div')
  element.innerHTML = `<h1>${ComponentName}</h1>`
  return element
}
```

#### Quick Test (`qtest`)

```javascript
import { test, expect } from 'vitest'

test('description', () => {
  expect(actual).toBe(expected)
})
```

## 🔧 Tasks & Debugging

### Available Tasks

- **🚀 Quick Start Dev** - `npm run dev`
- **🧪 Run Tests** - `npm test`
- **🏗️ Build Project** - `npm run build`
- **🔧 Fix All Issues** - `npm run fix`

### Debug Configurations

- **🚀 Launch Chrome with Debugger** - Debug in browser
- **🔍 Debug Production Build** - Debug production build
- **🧪 Debug Tests** - Debug test files
- **📦 Debug Build Process** - Debug Vite build

## 🎯 Profile Settings Highlights

### Editor Experience

- **Font**: JetBrains Mono with ligatures
- **Theme**: Default Dark+ with Material Icons
- **Auto-save**: On focus change
- **Format on save**: Enabled
- **Bracket colorization**: Enabled

### Code Quality

- **ESLint auto-fix**: On save
- **Prettier formatting**: On save
- **Import organization**: Automatic
- **Trailing whitespace**: Auto-removed

### Performance

- **Files excluded**: `node_modules`, `dist`, `coverage`
- **Smart search**: Case-sensitive when needed
- **Preview disabled**: Faster file opening

## 🚀 Getting Started

1. **Install Extensions**:

   ```bash
   ./vscode-launch.sh
   # Choose option 3: Install recommended extensions
   ```

2. **Open Workspace**:

   ```bash
   code vite-vanilla-ultimate.code-workspace
   ```

3. **Start Development**:
   - Press `Ctrl+Shift+P`
   - Type "Tasks: Run Task"
   - Select "🚀 Quick Start Dev"

4. **Begin Debugging**:
   - Press `F5` or `Ctrl+Shift+D`
   - Select "🔥 Launch & Debug"

## 💡 Pro Tips

### Workspace Management

- Use `Ctrl+K, Ctrl+W` to close all editors
- Use `Ctrl+K, Ctrl+S` to save all files
- Use `Ctrl+K, Ctrl+O` to open folder in new window

### Code Navigation

- `Ctrl+P` - Quick file search
- `Ctrl+Shift+O` - Symbol search
- `Ctrl+T` - Workspace symbol search
- `F12` - Go to definition

### Terminal Integration

- `Ctrl+`` - Toggle terminal
- `Ctrl+Shift+`` - New terminal
- `Ctrl+K` - Clear terminal

### Debugging

- `F5` - Start debugging
- `F9` - Toggle breakpoint
- `F10` - Step over
- `F11` - Step into

## 🔄 Profile Maintenance

### Update Extensions

```bash
# Update all extensions
code --list-extensions | xargs -L 1 echo code --install-extension
```

### Backup Settings

```bash
# Export current profile
cp .vscode/profile.json profile-backup-$(date +%Y%m%d).json
```

### Reset Profile

```bash
# Restore original profile
git checkout HEAD -- .vscode/profile.json
```

---

**Happy coding with your optimized VS Code setup!** 🚀✨
