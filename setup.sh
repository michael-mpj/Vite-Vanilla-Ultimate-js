#!/bin/bash

# 🔧 Setup Development Environment
echo "🚀 Setting up Vite Vanilla Ultimate development environment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo "🔧 Setting up Git hooks with Husky..."
npx husky install

echo "✅ Installing pre-commit hooks..."
npx husky add .husky/pre-commit "npx lint-staged"
npx husky add .husky/commit-msg "npx commitlint --edit \$1"

echo "🧪 Running initial tests..."
npm run test:run

echo "🔍 Running initial linting..."
npm run lint

echo "🎨 Running code formatting..."
npm run format

echo "🏗️ Testing build process..."
npm run build

echo ""
echo "✅ Development environment setup complete!"
echo ""
echo "📝 Available commands:"
echo "  npm run dev          - Start development server"
echo "  npm run build        - Build for production" 
echo "  npm run test         - Run tests in watch mode"
echo "  npm run test:run     - Run tests once"
echo "  npm run lint         - Check code quality"
echo "  npm run format       - Format code with Prettier"
echo "  npm run fix          - Auto-fix all issues"
echo "  npm run check        - Run all checks"
echo "  npm run docs:dev     - Start documentation server"
echo "  npm run release      - Create a new release"
echo ""
echo "🎯 Quick start:"
echo "  npm run dev"
echo ""
echo "📚 Documentation:"
echo "  npm run docs:dev"
echo ""
echo "🔄 Automation:"
echo "  npm run auto-fix     - Auto-fix dependencies, formatting, and run tests"
echo "  npm run check        - Comprehensive project health check"
echo ""
