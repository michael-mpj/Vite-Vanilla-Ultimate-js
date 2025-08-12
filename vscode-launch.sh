#!/bin/bash

# 🚀 VS Code Easy Launch Script for Vite Vanilla Ultimate

echo "🎯 VS Code Easy Launch for Vite + Vanilla JavaScript"
echo "=================================================="

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if VS Code is installed
if ! command -v code &> /dev/null; then
    echo -e "${YELLOW}⚠️  VS Code command not found. Please install VS Code and add it to PATH.${NC}"
    exit 1
fi

echo -e "${BLUE}🔧 Available launch options:${NC}"
echo "1. 🚀 Open workspace (recommended)"
echo "2. 📁 Open current folder"
echo "3. 🛠️ Install recommended extensions"
echo "4. 🎯 Launch with specific profile"
echo "5. 🔥 Quick start (open + run dev server)"
echo ""

read -p "Choose an option (1-5): " choice

case $choice in
    1)
        echo -e "${GREEN}🚀 Opening VS Code workspace...${NC}"
        code vite-vanilla-ultimate.code-workspace
        ;;
    2)
        echo -e "${GREEN}📁 Opening current folder...${NC}"
        code .
        ;;
    3)
        echo -e "${GREEN}🛠️ Installing recommended extensions...${NC}"

        # Essential extensions
        extensions=(
            "dbaeumer.vscode-eslint"
            "esbenp.prettier-vscode"
            "antfu.vite"
            "PKief.material-icon-theme"
            "eamodio.gitlens"
            "github.copilot"
            "vitest.explorer"
            "ritwickdey.liveserver"
            "christian-kohler.path-intellisense"
            "aaron-bond.better-comments"
            "usernamehw.errorlens"
        )

        for ext in "${extensions[@]}"; do
            echo "Installing $ext..."
            code --install-extension "$ext"
        done

        echo -e "${GREEN}✅ Extensions installed successfully!${NC}"
        ;;
    4)
        echo -e "${GREEN}🎯 Opening with Vite Vanilla profile...${NC}"
        code --profile "Vite Vanilla Ultimate" .
        ;;
    5)
        echo -e "${GREEN}🔥 Quick start: Opening workspace + starting dev server...${NC}"
        code vite-vanilla-ultimate.code-workspace

        # Wait a moment for VS Code to open
        sleep 2

        # Start development server
        echo -e "${BLUE}🚀 Starting development server...${NC}"
        npm run dev
        ;;
    *)
        echo -e "${YELLOW}Invalid option. Please choose 1-5.${NC}"
        exit 1
        ;;
esac

echo ""
echo -e "${GREEN}✅ VS Code launch completed!${NC}"
echo ""
echo -e "${BLUE}💡 Quick tips:${NC}"
echo "  • Press Ctrl+Shift+P for Command Palette"
echo "  • Press Ctrl+` to toggle terminal"
echo "  • Press F5 to start debugging"
echo "  • Press Ctrl+Shift+F for global search"
echo "  • Use 'npm run dev' to start development server"
echo ""
echo -e "${BLUE}🔧 Available tasks in VS Code:${NC}"
echo "  • Ctrl+Shift+P → 'Tasks: Run Task' → 'dev'"
echo "  • Ctrl+Shift+P → 'Tasks: Run Task' → 'build'"
echo "  • Ctrl+Shift+P → 'Tasks: Run Task' → 'test'"
echo "  • Ctrl+Shift+P → 'Tasks: Run Task' → 'fix'"
echo ""
