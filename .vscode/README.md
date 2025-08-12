# 🎯 VS Code Setup Guide for Vite + Vanilla JavaScript

This guide provides comprehensive VS Code configuration for optimal development experience with your Vite + Vanilla JavaScript project.

## 🚀 Quick Start

### Option 1: Easy Launch Script

```bash
./vscode-launch.sh
```

### Option 2: Manual Launch

```bash
# Open workspace (recommended)
code vite-vanilla-ultimate.code-workspace

# Or open current folder
code .
```

## 📦 Recommended Extensions

The project includes curated extension recommendations in `.vscode/extensions.json`:

### 🎨 Essential Tools

- **ESLint** - Code quality and error detection
- **Prettier** - Code formatting and style consistency
- **EditorConfig** - Consistent coding styles across editors

### 🏗️ Build & Framework Support

- **Vite** - Official Vite extension for enhanced support
- **Auto Rename Tag** - Automatically rename paired HTML/XML tags
- **Tailwind CSS IntelliSense** - Intelligent autocomplete for CSS

### 🌐 Web Development

- **Live Server** - Local development server with live reload
- **Path Intellisense** - Autocomplete for file paths
- **HTML CSS Support** - Enhanced HTML and CSS features

### 🔍 Git & GitHub

- **GitLens** - Supercharged Git capabilities
- **GitHub Pull Requests** - GitHub integration
- **GitHub Copilot** - AI-powered code assistance

### 🧪 Testing & Debugging

- **Vitest Explorer** - Test runner integration
- **Playwright** - End-to-end testing support

### 🚀 Productivity

- **Better Comments** - Improved comment highlighting
- **Error Lens** - Inline error display
- **TODO Tree** - TODO/FIXME comment tracking
- **Bookmarks** - Code navigation bookmarks

## ⚙️ VS Code Settings

### 🎨 Editor Configuration

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "explicit"
  },
  "editor.fontLigatures": true,
  "editor.bracketPairColorization.enabled": true
}
```

### 🔧 Auto-Fix on Save

- **Prettier** formatting
- **ESLint** error fixing
- **Import organization**
- **Missing import addition**

### 📁 File Exclusions

- `node_modules/`, `dist/`, `coverage/`
- `.git/`, `.cache/`, `.DS_Store`
- VitePress cache files

## 🐛 Debugging Configuration

### Available Debug Configurations:

1. **🚀 Launch Chrome with Debugger** - Debug in Chrome with dev tools
2. **🔍 Debug Production Build** - Debug production build
3. **🔗 Attach to Chrome** - Attach to existing Chrome instance
4. **🧪 Debug Tests** - Debug Vitest tests
5. **📦 Debug Build Process** - Debug Vite build
6. **🔧 Debug ESLint** - Debug ESLint configuration
7. **📚 Debug VitePress** - Debug documentation site

### Quick Debug Launch:

- Press `F5` or `Ctrl+Shift+D`
- Select "🔥 Launch Dev + Debugger"
- Automatically starts dev server and opens debugger

## 🛠️ Tasks & Shortcuts

### Available Tasks:

- **dev** - Start development server
- **build** - Build for production
- **test** - Run tests in watch mode
- **test:run** - Run tests once
- **lint** - Fix ESLint issues
- **format** - Format code with Prettier
- **fix** - Run format + lint
- **check** - Comprehensive health check
- **docs:dev** - Start documentation server

### Quick Access:

- `Ctrl+Shift+P` → "Tasks: Run Task"
- Or use Command Palette shortcuts

## 📝 Code Snippets

Custom snippets available for common patterns:

### JavaScript Snippets:

- `jscomp` - JavaScript component template
- `jsmodule` - JavaScript module template
- `fetchapi` - Fetch API call template
- `domevent` - DOM event handler template
- `errorhandler` - Error handling template
- `localstorage` - Local storage helper

### Testing Snippets:

- `vitest` - Vitest test template
- `qtest` - Quick test template

### Utility Snippets:

- `cdebug` - Console debug template
- `csscustom` - CSS custom properties
- `vitehtml` - Vite HTML template

## 🎨 Theme & UI Recommendations

### Recommended Themes:

- **Default Dark+** (default)
- **GitHub Dark**
- **Dracula Official**
- **Material Theme**

### Icon Themes:

- **Material Icon Theme** (recommended)
- **VS Code Seti**

## 🚀 Productivity Tips

### Essential Shortcuts:

- `Ctrl+P` - Quick file open
- `Ctrl+Shift+O` - Go to symbol
- `Ctrl+Shift+F` - Global search
- `Ctrl+`` - Toggle terminal
- `Shift+Alt+F` - Format document
- `Ctrl+.` - Quick fix
- `F12` - Go to definition
- `Shift+F12` - Find all references

### Terminal Integration:

- Integrated terminal with zsh
- Custom font and cursor settings
- Multiple terminal instances
- Task runner integration

### Git Integration:

- Smart commit enabled
- Auto-fetch enabled
- Push notifications
- Diff decorations

## 🔧 Workspace Configuration

The project includes a `.code-workspace` file with:

- Optimized settings for Vite development
- Pre-configured tasks and launch configurations
- Extension recommendations
- File associations

### Opening Workspace:

```bash
code vite-vanilla-ultimate.code-workspace
```

## 📊 Performance Optimization

### Optimized Settings:

- Auto-save on focus change
- Smart search case sensitivity
- Efficient file watching
- Optimized suggestion settings

### Excluded Directories:

- Build outputs (`dist/`, `coverage/`)
- Dependencies (`node_modules/`)
- Cache directories (`.cache/`, `.vitepress/cache/`)

## 🎯 Custom Key Bindings

### Quick Actions:

- `Ctrl+Shift+T` - Run tests
- `Ctrl+Shift+D` - Start dev server
- `Ctrl+Shift+B` - Build project
- `Ctrl+Shift+L` - Run linting

## 🔍 Troubleshooting

### Common Issues:

1. **Extensions not installing:**

   ```bash
   ./vscode-launch.sh
   # Choose option 3 to install extensions
   ```

2. **Formatting not working:**
   - Check Prettier extension is enabled
   - Verify `.prettierrc` configuration
   - Check "Format on Save" setting

3. **ESLint not working:**
   - Ensure ESLint extension is installed
   - Check `eslint.config.js` configuration
   - Reload VS Code window

4. **Debugger not connecting:**
   - Ensure dev server is running on port 5173
   - Check launch configuration URLs
   - Verify Chrome is available

### Reset Configuration:

```bash
# Remove VS Code settings
rm -rf .vscode/
# Re-run setup
./setup.sh
```

## 📚 Additional Resources

- [VS Code Documentation](https://code.visualstudio.com/docs)
- [Vite VS Code Extension](https://marketplace.visualstudio.com/items?itemName=antfu.vite)
- [ESLint VS Code Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier VS Code Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

---

**Happy Coding! 🚀** Your VS Code environment is now optimized for Vite + Vanilla JavaScript development.
