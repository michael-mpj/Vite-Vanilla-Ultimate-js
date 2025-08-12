#!/bin/bash

# 🔍 GitHub Actions Workflow Validator
# This script validates the GitHub Actions workflows in this repository

set -e

echo "🔍 Validating GitHub Actions Workflows..."
echo "================================================"

WORKFLOWS_DIR=".github/workflows"
ERRORS=0

# Check if workflows directory exists
if [ ! -d "$WORKFLOWS_DIR" ]; then
    echo "❌ Workflows directory not found: $WORKFLOWS_DIR"
    exit 1
fi

# Function to validate a workflow file
validate_workflow() {
    local file=$1
    local filename=$(basename "$file")

    echo "📋 Checking $filename..."

    # Check if file exists and is readable
    if [ ! -r "$file" ]; then
        echo "  ❌ Cannot read file: $file"
        ((ERRORS++))
        return
    fi

    # Check if file is valid YAML
    if command -v yq >/dev/null 2>&1; then
        if ! yq eval '.' "$file" >/dev/null 2>&1; then
            echo "  ❌ Invalid YAML syntax"
            ((ERRORS++))
            return
        fi
    else
        echo "  ⚠️  yq not found, skipping YAML validation"
    fi

    # Check required fields
    local required_fields=("name" "on" "jobs")
    for field in "${required_fields[@]}"; do
        if command -v yq >/dev/null 2>&1; then
            if ! yq eval "has(\"$field\")" "$file" | grep -q "true"; then
                echo "  ❌ Missing required field: $field"
                ((ERRORS++))
            fi
        fi
    done

    # Check for common issues
    if grep -q "uses: actions/" "$file"; then
        echo "  ✅ Uses GitHub Actions"
    fi

    if grep -q "timeout-minutes:" "$file"; then
        echo "  ✅ Has timeout configuration"
    fi

    if grep -q "if:" "$file"; then
        echo "  ✅ Has conditional execution"
    fi

    echo "  ✅ $filename validation complete"
}

# Validate each workflow file
for workflow in "$WORKFLOWS_DIR"/*.yml "$WORKFLOWS_DIR"/*.yaml; do
    if [ -f "$workflow" ]; then
        validate_workflow "$workflow"
        echo ""
    fi
done

# Summary
echo "================================================"
if [ $ERRORS -eq 0 ]; then
    echo "✅ All workflows validated successfully!"
    echo ""
    echo "📊 Workflow Summary:"
    echo "  CI/CD Workflows: $(find $WORKFLOWS_DIR -name "*.yml" -o -name "*.yaml" | wc -l)"
    echo "  Configuration: .github/workflows/"
    echo "  Documentation: .github/WORKFLOWS.md"
    echo ""
    echo "🚀 Ready to run GitHub Actions!"
else
    echo "❌ Found $ERRORS validation errors"
    echo "Please fix the issues above before proceeding."
    exit 1
fi

# Check if running in GitHub Actions
if [ -n "$GITHUB_ACTIONS" ]; then
    echo "::notice::GitHub Actions workflows validated successfully"
fi
