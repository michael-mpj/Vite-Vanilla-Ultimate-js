#!/bin/bash

# 🛠️ Auto-Fix Script for Prettier & ESLint
echo "🔧 Running comprehensive auto-fix for Prettier & ESLint..."

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}📋 Starting auto-fix process...${NC}"

# 1. Format all files with Prettier
echo -e "${YELLOW}🎨 Step 1: Running Prettier formatter...${NC}"
npm run format

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Prettier formatting completed successfully${NC}"
else
    echo -e "${RED}❌ Prettier formatting failed${NC}"
    exit 1
fi

# 2. Auto-fix ESLint issues
echo -e "${YELLOW}🔍 Step 2: Running ESLint auto-fix...${NC}"
npm run lint

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ ESLint auto-fix completed successfully${NC}"
else
    echo -e "${RED}❌ ESLint auto-fix failed${NC}"
    exit 1
fi

# 3. Check for remaining issues
echo -e "${YELLOW}🧪 Step 3: Checking for remaining issues...${NC}"
npm run lint:check

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ No ESLint issues remaining${NC}"
else
    echo -e "${YELLOW}⚠️  Some ESLint issues may require manual attention${NC}"
fi

# 4. Check Prettier formatting
echo -e "${YELLOW}📝 Step 4: Verifying Prettier formatting...${NC}"
npm run format:check

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ All files are properly formatted${NC}"
else
    echo -e "${YELLOW}⚠️  Some files may need manual formatting${NC}"
fi

# 5. Show git status
echo -e "${YELLOW}📊 Step 5: Checking for changes...${NC}"
if [ -n "$(git status --porcelain)" ]; then
    echo -e "${BLUE}📝 Files modified during auto-fix:${NC}"
    git status --short
    echo ""
    echo -e "${BLUE}💡 You can commit these changes with:${NC}"
    echo "git add ."
    echo "git commit -m \"style: auto-fix formatting and linting issues\""
else
    echo -e "${GREEN}✅ No files were modified - everything was already properly formatted!${NC}"
fi

echo ""
echo -e "${GREEN}🎉 Auto-fix process completed!${NC}"
echo ""
echo -e "${BLUE}📚 Available commands:${NC}"
echo "  npm run fix          - Run this auto-fix process"
echo "  npm run format       - Format files with Prettier"
echo "  npm run lint         - Fix ESLint issues"
echo "  npm run format:check - Check Prettier formatting"
echo "  npm run lint:check   - Check ESLint without fixing"
echo "  npm run auto-fix     - Full auto-fix including dependency updates"
echo ""
