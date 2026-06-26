# Mr. Black APL - Deployment Guide

Complete guide for deploying your Mr. Black APL website to production.

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Deployment Scripts](#deployment-scripts)
3. [GitHub Actions](#github-actions)
4. [Manual Deployment](#manual-deployment)
5. [Troubleshooting](#troubleshooting)

---

## 🚀 Quick Start

### Option 1: Full Deployment (Recommended)

For comprehensive deployments with full checks:

```bash
./deploy.sh "Your commit message here"
```

**Example:**
```bash
./deploy.sh "Update homepage with new donor testimonials"
```

### Option 2: Quick Deployment

For minor content updates without full build:

```bash
./deploy-quick.sh "Your commit message here"
```

**Example:**
```bash
./deploy-quick.sh "Fix typo in about page"
```

### Option 3: Production Deployment

For major releases with comprehensive checks and logging:

```bash
./deploy-prod.sh "Your commit message here"
```

**Example:**
```bash
./deploy-prod.sh "Release v1.0 - Major donor platform launch"
```

---

## 📜 Deployment Scripts

### 1. `deploy.sh` - Standard Deployment

**What it does:**
- ✓ Checks git status
- ✓ Installs dependencies
- ✓ Builds the project
- ✓ Runs TypeScript checks
- ✓ Commits changes to git
- ✓ Pushes to GitHub
- ✓ Shows deployment summary

**When to use:**
- Regular content updates
- Feature additions
- Bug fixes
- Standard deployments

**Usage:**
```bash
chmod +x deploy.sh
./deploy.sh "Update donor information"
```

---

### 2. `deploy-quick.sh` - Quick Deployment

**What it does:**
- ✓ Stages changes
- ✓ Commits to git
- ✓ Pushes to GitHub
- ✓ Skips build process

**When to use:**
- Minor text changes
- Quick fixes
- Content-only updates
- When you've already built locally

**Usage:**
```bash
chmod +x deploy-quick.sh
./deploy-quick.sh "Update testimonial text"
```

---

### 3. `deploy-prod.sh` - Production Deployment

**What it does:**
- ✓ Validates environment
- ✓ Checks Node.js and pnpm
- ✓ Installs/updates dependencies
- ✓ Runs TypeScript checks
- ✓ Builds project
- ✓ Commits changes
- ✓ Pushes to GitHub
- ✓ Creates detailed log file
- ✓ Shows comprehensive summary

**When to use:**
- Major releases
- Production hotfixes
- Critical deployments
- When you need full audit trail

**Usage:**
```bash
chmod +x deploy-prod.sh
./deploy-prod.sh "Release v1.0 - Major update"
```

**Log file location:** `.deploy-log.txt`

---

## 🤖 GitHub Actions

Automatic deployment on push to main branch.

### How it works:

1. Push changes to GitHub
2. GitHub Actions automatically triggers
3. Runs build and tests
4. Deploys to production
5. Creates deployment summary

### Workflow file:
`.github/workflows/deploy.yml`

### View deployment status:
1. Go to your GitHub repository
2. Click "Actions" tab
3. View deployment history

---

## 🔧 Manual Deployment

If you prefer to deploy manually without scripts:

### Step 1: Build the project
```bash
pnpm install
pnpm build
```

### Step 2: Commit changes
```bash
git add -A
git commit -m "Your commit message"
```

### Step 3: Push to GitHub
```bash
git push origin main
```

---

## 📝 Commit Message Guidelines

Write clear, descriptive commit messages:

### Format:
```
[Type] Brief description

Optional detailed explanation
```

### Types:
- `feat:` New feature
- `fix:` Bug fix
- `update:` Content update
- `style:` Styling changes
- `docs:` Documentation
- `refactor:` Code refactoring

### Examples:
```bash
./deploy.sh "feat: Add new donor testimonials section"
./deploy.sh "fix: Correct donation form validation"
./deploy.sh "update: Refresh volunteer program details"
./deploy.sh "style: Improve mobile responsiveness"
```

---

## 🛠️ Troubleshooting

### Issue: "Not a git repository"

**Solution:**
```bash
cd /home/ubuntu/mrblackapl
git status
```

### Issue: "pnpm: command not found"

**Solution:**
```bash
npm install -g pnpm
pnpm --version
```

### Issue: "Build failed"

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

### Issue: "Push failed - authentication error"

**Solution:**
```bash
# Check git remote
git remote -v

# Update remote if needed
git remote set-url origin https://github.com/yourusername/mrblackapl.git

# Try push again
git push origin main
```

### Issue: "No changes to commit"

**Solution:**
```bash
# Check git status
git status

# If no changes, make sure you've edited files
# Then try deployment again
```

---

## 📊 Deployment Checklist

Before deploying:

- [ ] All changes saved locally
- [ ] Tested in browser
- [ ] No console errors
- [ ] Responsive design verified
- [ ] Links working correctly
- [ ] Images loading properly
- [ ] Forms functioning
- [ ] Mobile view tested

---

## 🔐 Security Reminders

- ✓ Never commit `.env` files
- ✓ Never commit API keys
- ✓ Never commit passwords
- ✓ Always use environment variables
- ✓ Review `.gitignore` before deploying

---

## 📞 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review the deployment log file (`.deploy-log.txt`)
3. Check GitHub Actions logs
4. Verify git status: `git status`
5. Check build errors: `pnpm build`

---

## 🎯 Next Steps

After successful deployment:

1. Visit your live site: https://mrblackapl-okslpqub.manus.space
2. Test all functionality
3. Check mobile responsiveness
4. Monitor for any errors
5. Share updates with team

---

## 📚 Additional Resources

- [Git Documentation](https://git-scm.com/doc)
- [pnpm Documentation](https://pnpm.io/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Build Guide](https://vitejs.dev/guide/build.html)

---

**Last Updated:** June 26, 2026

**Project:** Mr. Black APL - Animal Protection League

**Website:** https://mrblackapl-okslpqub.manus.space
