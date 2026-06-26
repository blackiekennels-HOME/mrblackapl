#!/bin/bash

################################################################################
# Mr. Black APL - Quick Deployment Script
# 
# Fast deployment without full build (for minor changes)
# Use this for quick updates to content, text, or styling
#
# Usage: ./deploy-quick.sh "Your commit message here"
# Example: ./deploy-quick.sh "Update donor testimonials"
################################################################################

set -e

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Configuration
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
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

print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

# Check if commit message is provided
if [ -z "$1" ]; then
    print_error "Commit message is required!"
    echo "Usage: ./deploy-quick.sh \"Your commit message here\""
    exit 1
fi

COMMIT_MESSAGE="$1"

# Start
print_header "⚡ Quick Deployment"
print_info "Timestamp: $TIMESTAMP"
print_info "Message: $COMMIT_MESSAGE"
echo ""

cd "$PROJECT_DIR"

# Stage changes
print_info "Staging changes..."
git add -A

# Check if there are changes
if git diff --cached --quiet; then
    print_error "No changes to commit"
    exit 1
fi

# Show files
print_info "Files to be committed:"
git diff --cached --name-only | sed 's/^/  - /'
echo ""

# Commit
print_info "Committing..."
git commit -m "$COMMIT_MESSAGE (Quick deploy - $TIMESTAMP)"

# Push
print_info "Pushing to GitHub..."
if git push origin "$(git rev-parse --abbrev-ref HEAD)"; then
    print_success "Deployment complete!"
    print_info "Commit: $(git rev-parse --short HEAD)"
else
    print_error "Push failed"
    exit 1
fi

echo ""
print_success "Done! Your changes are live."
