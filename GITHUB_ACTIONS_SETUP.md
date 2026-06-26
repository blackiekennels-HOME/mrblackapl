# Enable GitHub Actions for Mr. Black APL

This guide will help you enable GitHub Actions for your repository so that your site builds and deploys automatically on every push.

---

## 🚀 Quick Setup (2 Steps)

### Step 1: Go to Your Repository Settings

1. Go to your GitHub repository: `https://github.com/yourusername/mrblackapl`
2. Click the **Settings** tab
3. In the left sidebar, click **Actions** → **General**

### Step 2: Enable Actions

1. Under "Actions permissions", select **Allow all actions and reusable workflows**
2. Click **Save**

That's it! GitHub Actions is now enabled.

---

## ✅ Verify Actions is Working

1. Go to the **Actions** tab in your repository
2. You should see your workflow: **Deploy to Production**
3. When you push changes to `main` or `master` branch, the workflow will automatically run

---

## 📋 What Happens When You Push

When you push code to GitHub:

1. ✅ GitHub Actions automatically triggers
2. ✅ Checks out your code
3. ✅ Installs dependencies
4. ✅ Runs TypeScript checks
5. ✅ Builds your static site
6. ✅ Creates a deployment summary
7. ✅ Your site updates automatically

---

## 🔍 Monitor Your Deployments

### View Workflow Status

1. Go to **Actions** tab in your repository
2. Click on the latest workflow run
3. View the build logs and status

### View Deployment Summary

1. In the workflow run details
2. Scroll down to see the deployment summary
3. Check build size and file count

---

## 🆘 Troubleshooting

### "Actions is disabled"

**Solution:**
- Go to Settings → Actions → General
- Select "Allow all actions and reusable workflows"
- Click Save

### "Workflow failed"

**Solution:**
1. Click on the failed workflow run
2. Click on the "Build project" step
3. Review the error logs
4. Fix the issue locally and push again

### "Build is taking too long"

**Solution:**
- This is normal for the first build
- Subsequent builds will be faster due to caching
- Check the build logs for any warnings

---

## 📊 Workflow Details

Your workflow file: `.github/workflows/deploy.yml`

**What it does:**
- Runs on every push to `main` or `master` branch
- Can also be manually triggered via "Run workflow" button
- Uses Node.js 24 (latest stable)
- Uses pnpm for package management
- Includes caching for faster builds
- Creates detailed deployment summaries

---

## 🎯 Next Steps

1. **Enable Actions** (follow steps above)
2. **Make a test change** to your code
3. **Push to GitHub**
4. **Watch the workflow run** in the Actions tab
5. **Verify your site updates**

---

## 📞 Need Help?

If you encounter issues:

1. Check the workflow logs in the Actions tab
2. Review the error messages
3. Ensure your code builds locally: `pnpm build`
4. Check that all dependencies are installed: `pnpm install`

---

**Last Updated:** June 26, 2026

**Project:** Mr. Black APL - Animal Protection League

**Repository:** https://github.com/yourusername/mrblackapl
