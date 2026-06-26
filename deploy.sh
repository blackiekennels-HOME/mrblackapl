#!/bin/bash

################################################################################
# Mr. Black APL - Deployment Script
# 
# This script automates the process of:
# 1. Building the static site
# 2. Committing changes to GitHub
# 3. Deploying to Manus hosting
#
# Usage: ./deploy.sh "Your commit message here"
# Example: ./deploy.sh "Update homepage with new donor information"
################################################################################

set -e  # Exit on any error

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECT_NAME="Mr. Black APL"
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BUILD_DIR="$PROJECT_DIR/dist"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

# Functions
print_header() {
    echo -e "${BLUE}================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}================================${NC}"
}

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

# Check if commit message is provided
if [ -z "$1" ]; then
    print_error "Commit message is required!"
    echo ""
    echo "Usage: ./deploy.sh \"Your commit message here\""
    echo ""
    echo "Examples:"
    echo "  ./deploy.sh \"Update homepage content\""
    echo "  ./deploy.sh \"Fix donation form styling\""
    echo "  ./deploy.sh \"Add new volunteer program details\""
    exit 1
fi

COMMIT_MESSAGE="$1"

# Start deployment
print_header "🚀 $PROJECT_NAME Deployment Script"
print_info "Timestamp: $TIMESTAMP"
print_info "Commit Message: $COMMIT_MESSAGE"
echo ""

# Step 1: Check git status
print_header "Step 1: Checking Git Status"
cd "$PROJECT_DIR"

if ! git rev-parse --git-dir > /dev/null 2>&1; then
    print_error "Not a git repository. Please initialize git first."
    exit 1
fi

print_success "Git repository found"

# Check for uncommitted changes
if git diff-index --quiet HEAD --; then
    print_warning "No changes detected in working directory"
else
    print_info "Changes detected in working directory"
fi

echo ""

# Step 2: Install dependencies (if needed)
print_header "Step 2: Installing Dependencies"
if [ ! -d "node_modules" ]; then
    print_info "node_modules not found. Installing dependencies..."
    pnpm install
    print_success "Dependencies installed"
else
    print_success "Dependencies already installed"
fi

echo ""

# Step 3: Build the project
print_header "Step 3: Building Static Site"
print_info "Running: pnpm build"

if pnpm build; then
    print_success "Build completed successfully"
    
    if [ -d "$BUILD_DIR" ]; then
        BUILD_SIZE=$(du -sh "$BUILD_DIR" | cut -f1)
        print_info "Build size: $BUILD_SIZE"
    fi
else
    print_error "Build failed! Please fix errors and try again."
    exit 1
fi

echo ""

# Step 4: Run linting and type checks (optional but recommended)
print_header "Step 4: Code Quality Checks"

if command -v pnpm &> /dev/null; then
    print_info "Running TypeScript type check..."
    if pnpm tsc --noEmit 2>/dev/null; then
        print_success "TypeScript check passed"
    else
        print_warning "TypeScript check had warnings (non-blocking)"
    fi
fi

echo ""

# Step 5: Stage and commit changes
print_header "Step 5: Git Commit"
print_info "Staging changes..."

# Stage all changes
git add -A

# Check if there are changes to commit
if git diff --cached --quiet; then
    print_warning "No changes to commit"
else
    print_info "Changes staged for commit"
    
    # Show what will be committed
    print_info "Files to be committed:"
    git diff --cached --name-only | sed 's/^/  - /'
    
    echo ""
    
    # Commit with message
    print_info "Creating commit: \"$COMMIT_MESSAGE\""
    git commit -m "$COMMIT_MESSAGE

Deployed at: $TIMESTAMP
Build: $(git rev-parse --short HEAD)
"
    
    print_success "Changes committed successfully"
fi

echo ""

# Step 6: Push to GitHub
print_header "Step 6: Pushing to GitHub"

# Get current branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
print_info "Current branch: $CURRENT_BRANCH"

if git push origin "$CURRENT_BRANCH"; then
    print_success "Changes pushed to GitHub successfully"
    
    # Get commit hash
    COMMIT_HASH=$(git rev-parse --short HEAD)
    print_info "Commit hash: $COMMIT_HASH"
else
    print_error "Failed to push to GitHub"
    print_info "Please check your GitHub connection and try again"
    exit 1
fi

echo ""

# Step 7: Deployment summary
print_header "✅ Deployment Complete!"
echo ""
print_success "Your changes have been deployed!"
echo ""
echo "Summary:"
echo "  Project: $PROJECT_NAME"
echo "  Branch: $CURRENT_BRANCH"
echo "  Commit: $(git rev-parse --short HEAD)"
echo "  Message: $COMMIT_MESSAGE"
echo "  Timestamp: $TIMESTAMP"
echo ""
print_info "Your site will be updated shortly at:"
echo "  https://mrblackapl-okslpqub.manus.space"
echo ""
print_info "View your GitHub repository:"
echo "  https://github.com/yourusername/mrblackapl"
echo ""

# Optional: Show git log
print_header "Recent Commits"
git log --oneline -5

echo ""
print_success "Deployment script completed successfully!"
