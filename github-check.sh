#!/bin/bash

# 🔍 GitHub Repository Health Check
echo "🔍 Checking Vite + Vanilla JavaScript project health..."

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

SCORE=0
TOTAL_CHECKS=30

check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✅ $1${NC}"
        ((SCORE++))
    else
        echo -e "${RED}❌ Missing: $1${NC}"
    fi
}

check_dir() {
    if [ -d "$1" ]; then
        echo -e "${GREEN}✅ $1/${NC}"
        ((SCORE++))
    else
        echo -e "${RED}❌ Missing directory: $1/${NC}"
    fi
}

check_npm_script() {
    if npm run | grep -q "^  $1$"; then
        echo -e "${GREEN}✅ npm run $1${NC}"
        ((SCORE++))
    else
        echo -e "${RED}❌ Missing npm script: $1${NC}"
    fi
}

echo -e "${BLUE}📁 Essential Files Check:${NC}"
check_file "package.json"
check_file "vite.config.js"
check_file "vitest.config.js"
check_file "eslint.config.js"
check_file ".prettierrc"
check_file "LICENSE"
check_file "README.md"
check_file "CONTRIBUTING.md"

echo -e "\n${BLUE}🏗️ Project Structure:${NC}"
check_dir "src"
check_dir "public"
check_dir "tests"
check_dir ".github"
check_dir ".github/workflows"
check_dir "docs"

echo -e "\n${BLUE}🤖 GitHub Integration:${NC}"
check_file ".github/workflows/ci-cd.yml"
check_file ".github/ISSUE_TEMPLATE/bug_report.md"
check_file ".github/ISSUE_TEMPLATE/feature_request.md"
check_file ".github/pull_request_template.md"

echo -e "\n${BLUE}⚙️ Essential Scripts:${NC}"
check_npm_script "dev"
check_npm_script "build"
check_npm_script "test"
check_npm_script "lint"
check_npm_script "format"
check_npm_script "fix"

echo -e "\n${BLUE}🔧 Development Tools:${NC}"
check_file ".husky/pre-commit"
check_file ".vscode/settings.json"
check_file "setup.sh"

echo -e "\n${PURPLE}📊 Project Health Score: $SCORE/$TOTAL_CHECKS${NC}"

PERCENTAGE=$((SCORE * 100 / TOTAL_CHECKS))

if [ $PERCENTAGE -ge 90 ]; then
    echo -e "${GREEN}🏆 Excellent! Your project is enterprise-ready.${NC}"
elif [ $PERCENTAGE -ge 80 ]; then
    echo -e "${YELLOW}👍 Good! Minor improvements needed.${NC}"
elif [ $PERCENTAGE -ge 70 ]; then
    echo -e "${YELLOW}⚠️  Decent, but several components missing.${NC}"
else
    echo -e "${RED}🚨 Needs significant improvement.${NC}"
fi

echo -e "\n${BLUE}🧪 Running Quick Tests:${NC}"

# Test build
if npm run build > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Build successful${NC}"
else
    echo -e "${RED}❌ Build failed${NC}"
fi

# Test linting
if npm run lint:check > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Linting passed${NC}"
else
    echo -e "${YELLOW}⚠️  Linting issues found${NC}"
fi

# Test formatting
if npm run format:check > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Formatting is correct${NC}"
else
    echo -e "${YELLOW}⚠️  Formatting issues found${NC}"
fi

# Test basic functionality
if npm run test:run > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Tests passed${NC}"
else
    echo -e "${RED}❌ Tests failed${NC}"
fi

echo -e "\n${BLUE}🔗 Useful Commands:${NC}"
echo "  npm run dev          - Start development server"
echo "  npm run build        - Build for production"
echo "  npm run fix          - Auto-fix formatting and linting"
echo "  npm run check        - Run all health checks"
echo "  ./scripts/auto-fix.sh - Comprehensive auto-fix"
echo "  ./github-check.sh    - Run this health check"

echo -e "\n${GREEN}🎉 GitHub repository check completed!${NC}"
