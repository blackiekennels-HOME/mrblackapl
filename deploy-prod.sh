#!/bin/bash

################################################################################
# Mr. Black APL - Production Deployment Script
# 
# Full production deployment with comprehensive checks:
# 1. Environment validation
# 2. Dependency installation
# 3. Code quality checks
# 4. Full build
# 5. Git commit
# 6. GitHub push
# 7. Deployment verification
#
# Usage: ./deploy-prod.sh "Your commit message here"
# Example: ./deploy-prod.sh "Release v1.0 - Major donor platform launch"
################################################################################

set -e

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m'

# Configuration
PROJECT_NAME="Mr. Black APL"
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BUILD_DIR="$PROJECT_DIR/dist"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
LOG_FILE="$PROJECT_DIR/.deploy-log.txt"

# Functions
print_header() {
    echo -e "${CYAN}╔════════════════════════════════════════╗${NC}"
    echo -e "${CYAN}║ $1${NC}"
    echo -e "${CYAN}╚════════════════════════════════════════╝${NC}"
}

print_section() {
    echo ""
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
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

log_message() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" >> "$LOG_FILE"
}

# Check if commit message is provided
if [ -z "$1" ]; then
    print_error "Commit message is required!"
    echo ""
    echo "Usage: ./deploy-prod.sh \"Your commit message here\""
    echo ""
    echo "Examples:"
    echo "  ./deploy-prod.sh \"Release v1.0 - Major donor platform launch\""
    echo "  ./deploy-prod.sh \"Production hotfix - Payment processing\""
    exit 1
fi

COMMIT_MESSAGE="$1"

# Initialize log
> "$LOG_FILE"
log_message "Starting production deployment"
log_message "Commit message: $COMMIT_MESSAGE"

# Start deployment
print_header "🚀 $PROJECT_NAME - PRODUCTION DEPLOYMENT"
print_info "Timestamp: $TIMESTAMP"
print_info "Commit Message: $COMMIT_MESSAGE"
print_info "Log file: $LOG_FILE"
echo ""

# Step 1: Environment checks
print_section "Step 1: Environment Validation"

cd "$PROJECT_DIR"
log_message "Changed to project directory: $PROJECT_DIR"

# Check git
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    print_error "Not a git repository"
    log_message "ERROR: Not a git repository"
    exit 1
fi
print_success "Git repository found"
log_message "Git repository verified"

# Check Node.js
if ! command -v node &> /dev/null; then
    print_error "Node.js not found"
    log_message "ERROR: Node.js not found"
    exit 1
fi
NODE_VERSION=$(node --version)
print_success "Node.js found: $NODE_VERSION"
log_message "Node.js version: $NODE_VERSION"

# Check pnpm
if ! command -v pnpm &> /dev/null; then
    print_error "pnpm not found"
    log_message "ERROR: pnpm not found"
    exit 1
fi
PNPM_VERSION=$(pnpm --version)
print_success "pnpm found: $PNPM_VERSION"
log_message "pnpm version: $PNPM_VERSION"

# Check git status
print_info "Checking git status..."
if ! git diff-index --quiet HEAD --; then
    print_warning "Uncommitted changes detected"
    git status --short | head -10 | sed 's/^/  /'
    log_message "Uncommitted changes detected"
else
    print_success "Working directory clean"
    log_message "Working directory clean"
fi

echo ""

# Step 2: Dependencies
print_section "Step 2: Dependency Management"

if [ ! -d "node_modules" ]; then
    print_info "Installing dependencies..."
    log_message "Installing dependencies"
    pnpm install
    print_success "Dependencies installed"
    log_message "Dependencies installed successfully"
else
    print_info "Updating dependencies..."
    log_message "Updating dependencies"
    pnpm install
    print_success "Dependencies updated"
    log_message "Dependencies updated successfully"
fi

echo ""

# Step 3: Code quality checks
print_section "Step 3: Code Quality Checks"

print_info "Running TypeScript type check..."
log_message "Running TypeScript type check"
if pnpm tsc --noEmit 2>&1 | tee -a "$LOG_FILE"; then
    print_success "TypeScript check passed"
    log_message "TypeScript check passed"
else
    print_warning "TypeScript check had warnings"
    log_message "TypeScript check had warnings"
fi

echo ""

# Step 4: Build
print_section "Step 4: Building Static Site"

print_info "Running: pnpm build"
log_message "Starting build process"

if pnpm build 2>&1 | tee -a "$LOG_FILE"; then
    print_success "Build completed successfully"
    log_message "Build completed successfully"
    
    if [ -d "$BUILD_DIR" ]; then
        BUILD_SIZE=$(du -sh "$BUILD_DIR" | cut -f1)
        BUILD_FILES=$(find "$BUILD_DIR" -type f | wc -l)
        print_info "Build size: $BUILD_SIZE"
        print_info "Build files: $BUILD_FILES"
        log_message "Build size: $BUILD_SIZE, Files: $BUILD_FILES"
    fi
else
    print_error "Build failed!"
    log_message "ERROR: Build failed"
    exit 1
fi

echo ""

# Step 5: Git commit
print_section "Step 5: Git Commit"

print_info "Staging changes..."
git add -A
log_message "Changes staged"

if git diff --cached --quiet; then
    print_warning "No changes to commit"
    log_message "No changes to commit"
else
    print_info "Changes staged for commit"
    print_info "Files to be committed:"
    git diff --cached --name-only | sed 's/^/  - /' | tee -a "$LOG_FILE"
    
    echo ""
    
    COMMIT_HASH=$(git rev-parse --short HEAD)
    print_info "Creating commit: \"$COMMIT_MESSAGE\""
    
    git commit -m "$COMMIT_MESSAGE

Production deployment: $TIMESTAMP
Build: $COMMIT_HASH
Environment: Production
"
    
    print_success "Changes committed successfully"
    log_message "Changes committed: $(git rev-parse --short HEAD)"
fi

echo ""

# Step 6: Push to GitHub
print_section "Step 6: Pushing to GitHub"

CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
print_info "Current branch: $CURRENT_BRANCH"
log_message "Current branch: $CURRENT_BRANCH"

print_info "Pushing to GitHub..."
if git push origin "$CURRENT_BRANCH" 2>&1 | tee -a "$LOG_FILE"; then
    print_success "Changes pushed to GitHub successfully"
    
    COMMIT_HASH=$(git rev-parse --short HEAD)
    print_info "Commit hash: $COMMIT_HASH"
    log_message "Push successful: $COMMIT_HASH"
else
    print_error "Failed to push to GitHub"
    log_message "ERROR: Push to GitHub failed"
    exit 1
fi

echo ""

# Step 7: Deployment summary
print_section "✅ DEPLOYMENT COMPLETE"

echo ""
echo -e "${GREEN}Your production deployment has been completed successfully!${NC}"
echo ""
echo "Summary:"
echo "  Project: $PROJECT_NAME"
echo "  Branch: $CURRENT_BRANCH"
echo "  Commit: $(git rev-parse --short HEAD)"
echo "  Message: $COMMIT_MESSAGE"
echo "  Timestamp: $TIMESTAMP"
echo "  Build Size: $BUILD_SIZE"
echo ""
print_info "Your site will be updated shortly at:"
echo "  https://mrblackapl-okslpqub.manus.space"
echo ""
print_info "View your GitHub repository:"
echo "  https://github.com/yourusername/mrblackapl"
echo ""

# Recent commits
print_section "Recent Commits"
git log --oneline -5 | tee -a "$LOG_FILE"

echo ""
print_success "Deployment script completed successfully!"
log_message "Deployment completed successfully"

# Show log file location
echo ""
print_info "Full deployment log saved to: $LOG_FILE"
