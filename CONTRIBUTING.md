# Contributing to Vite Vanilla Ultimate JS

🎉 Thank you for considering contributing to Vite Vanilla Ultimate JS! This guide will help you get started.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Testing](#testing)
- [Documentation](#documentation)

## 🤝 Code of Conduct

This project adheres to our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (Recommended: Node.js 20 LTS)
- npm 8+ or equivalent package manager
- Git
- VS Code (recommended for optimal development experience)

### Fork and Clone

1. Fork the repository on GitHub
2. Clone your fork locally:

```bash
git clone https://github.com/YOUR_USERNAME/Vite-Vanilla-Ultimate-js.git
cd Vite-Vanilla-Ultimate-js
```

3. Add the original repository as upstream:

```bash
git remote add upstream https://github.com/michael-mpj/Vite-Vanilla-Ultimate-js.git
```

### Installation

```bash
npm install
npm run dev
```

## 🔄 Development Workflow

### 1. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### 2. Make Changes

- Follow our coding standards
- Write/update tests as needed
- Update documentation if required
- Test your changes thoroughly

### 3. Run Quality Checks

```bash
npm run lint          # Check code style
npm run format        # Format code
npm test              # Run tests
npm run test:coverage # Check test coverage
npm run build         # Ensure build works
```

### 4. Commit Changes

We use [Conventional Commits](https://www.conventionalcommits.org/):

```bash
git add .
git commit -m "feat: add new component feature"
```

**Commit Types:**

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code formatting (no logic changes)
- `refactor:` Code refactoring
- `test:` Adding or modifying tests
- `chore:` Maintenance tasks

### 5. Push and Create PR

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

## 📝 Coding Standards

### JavaScript Style

We use ESLint and Prettier for consistent code formatting:

- **ES2022+** features encouraged
- **ESM modules** only (`import`/`export`)
- **Functional programming** patterns preferred
- **Clear, descriptive** variable and function names
- **JSDoc comments** for public APIs

### Code Organization

```
src/
├── components/     # Reusable UI components
├── modules/        # Core application modules
├── pages/          # Page-specific code
├── styles/         # CSS stylesheets
├── utils/          # Utility functions
└── main.js         # Application entry point
```

### File Naming

- Use **kebab-case** for files: `user-profile.js`
- Use **PascalCase** for components: `UserProfile.js`
- Use **camelCase** for utilities: `dateUtils.js`

### CSS Guidelines

- Use **CSS custom properties** for theming
- Follow **BEM methodology** for class names
- **Mobile-first** responsive design
- **Semantic** HTML structure

## 🧪 Testing

### Writing Tests

- Place tests in `tests/` directory
- Use descriptive test names
- Follow AAA pattern (Arrange, Act, Assert)
- Aim for high test coverage (>80%)

```javascript
import { describe, it, expect } from 'vitest'
import { myFunction } from '../src/utils/myModule'

describe('myFunction', () => {
  it('should return expected result for valid input', () => {
    // Arrange
    const input = 'test'
    const expected = 'test-result'

    // Act
    const result = myFunction(input)

    // Assert
    expect(result).toBe(expected)
  })
})
```

### Running Tests

```bash
npm test              # Watch mode
npm run test:coverage # With coverage
npm run test:debug    # Debug mode
```

## 📚 Documentation

### Code Documentation

- Add JSDoc comments for public functions
- Include examples in documentation
- Update README.md for significant changes

### Commit Documentation

Every commit should:

- Have a clear, descriptive message
- Follow conventional commit format
- Reference issues when applicable

## 🔍 Pull Request Process

### Before Submitting

1. ✅ All tests pass
2. ✅ Code is linted and formatted
3. ✅ Documentation is updated
4. ✅ Branch is up to date with main
5. ✅ No merge conflicts

### PR Template

When creating a PR, include:

- **Description** of changes
- **Type** of change (feature, bugfix, etc.)
- **Testing** steps performed
- **Screenshots** if UI changes
- **Breaking changes** if any

### Review Process

1. Automated checks must pass
2. At least one maintainer review required
3. All conversations must be resolved
4. Final approval from maintainer

## 🐛 Reporting Issues

### Bug Reports

Include:

- Steps to reproduce
- Expected vs actual behavior
- Environment details
- Screenshots/logs if applicable

### Feature Requests

Include:

- Clear description of the feature
- Use cases and benefits
- Possible implementation approach

## 🆘 Getting Help

- **GitHub Issues**: For bugs and features
- **GitHub Discussions**: For questions and ideas
- **Documentation**: Check existing docs first

## 📜 License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

**Thank you for contributing!** 🙏

Every contribution, no matter how small, makes this project better for everyone.
