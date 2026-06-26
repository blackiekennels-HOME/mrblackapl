# Deploy to GitHub Pages - Complete Guide

Deploy your Mr. Black APL website directly from GitHub with automatic builds on every push.

---

## 🚀 Quick Setup (3 Steps)

### Step 1: Go to Repository Settings

1. Go to: `https://github.com/blackiekennels-HOME/mrblackapl`
2. Click **Settings** tab
3. Scroll down to **Pages** section

### Step 2: Enable GitHub Pages

1. Under "Build and deployment":
   - Select **Deploy from a branch**
   - Choose branch: **main**
   - Choose folder: **/ (root)**
2. Click **Save**

### Step 3: Push Your Code

```bash
cd /home/ubuntu/mrblackapl
git add -A
git commit -m "Initial deployment to GitHub Pages"
git push user_github main
```

**That's it! Your site is now live on GitHub Pages.**

---

## 📍 Where Your Site Will Be

After setup, your site will be available at:

**Option A: GitHub Pages Default URL**
```
https://blackiekennels-HOME.github.io/mrblackapl
```

**Option B: Custom Domain** (optional)
```
https://yourdomain.com
```

---

## ✅ How It Works

1. **You make changes** to your code locally
2. **You push to GitHub** (`git push user_github main`)
3. **GitHub automatically detects** the push
4. **GitHub builds your site** (runs the build process)
5. **Your site updates** automatically
6. **Changes go live** in 1-2 minutes

---

## 🔄 Deployment Workflow

```
Edit Code
   ↓
Commit Changes: git add -A && git commit -m "message"
   ↓
Push to GitHub: git push user_github main
   ↓
GitHub detects push
   ↓
GitHub builds your site
   ↓
Site updates automatically
   ↓
Visit your GitHub Pages URL to see changes
```

---

## 📋 Complete Step-by-Step Instructions

### Step 1: Enable GitHub Pages in Settings

1. Go to `https://github.com/blackiekennels-HOME/mrblackapl`
2. Click **Settings** (top right)
3. In left sidebar, click **Pages**
4. Under "Build and deployment":
   - Select **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**

### Step 2: Verify Your Build Configuration

GitHub will automatically detect your build setup:
- Detects Node.js project
- Runs `pnpm install`
- Runs `pnpm build`
- Deploys the `dist` folder

### Step 3: Make Your First Push

```bash
# Navigate to project
cd /home/ubuntu/mrblackapl

# Check status
git status

# Add all changes
git add -A

# Commit
git commit -m "Initial deployment to GitHub Pages"

# Push to GitHub
git push user_github main
```

### Step 4: Watch the Build

1. Go to your repository: `https://github.com/blackiekennels-HOME/mrblackapl`
2. Click **Actions** tab
3. You'll see your build running
4. Wait for it to complete (usually 2-3 minutes)

### Step 5: View Your Site

Visit: `https://blackiekennels-HOME.github.io/mrblackapl`

---

## 🎯 Common Tasks

### Make an Update and Deploy

```bash
# 1. Edit your file
nano client/src/pages/Home.tsx

# 2. Commit changes
git add -A
git commit -m "Update homepage content"

# 3. Push to GitHub
git push user_github main

# 4. Wait 1-2 minutes for automatic build
# 5. Visit your site to see changes
```

### View Build Status

1. Go to `https://github.com/blackiekennels-HOME/mrblackapl`
2. Click **Actions** tab
3. See all builds and their status

### View Build Logs

1. Click on a build in the Actions tab
2. Click on the workflow run
3. See detailed build logs

---

## 🔧 Troubleshooting

### Build Failed

**Check the logs:**
1. Go to **Actions** tab
2. Click on the failed build
3. Scroll down to see error message
4. Common issues:
   - Missing dependencies: Run `pnpm install` locally
   - TypeScript errors: Fix errors and push again
   - Build errors: Check `pnpm build` output locally

**Fix locally and retry:**
```bash
# Test build locally
pnpm build

# If it works locally, push again
git add -A
git commit -m "Fix build error"
git push user_github main
```

### Site Not Updating

**Try these steps:**
1. Hard refresh your browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear browser cache
3. Wait a few minutes for GitHub to rebuild
4. Check Actions tab to see if build is still running

### "404 Not Found" Error

**Possible causes:**
- Build hasn't completed yet (wait 2-3 minutes)
- Build failed (check Actions tab for errors)
- Wrong URL (should be `https://blackiekennels-HOME.github.io/mrblackapl`)

---

## 🌐 Use Custom Domain (Optional)

To use your own domain instead of GitHub's default:

### Step 1: Buy a Domain

Purchase a domain from:
- GoDaddy
- Namecheap
- Google Domains
- Any domain registrar

### Step 2: Configure GitHub Pages

1. Go to your repository **Settings** → **Pages**
2. Under "Custom domain", enter: `yourdomain.com`
3. Click **Save**

### Step 3: Update Domain DNS

In your domain registrar's DNS settings, add:

**For apex domain (yourdomain.com):**
```
A record pointing to: 185.199.108.153
A record pointing to: 185.199.109.153
A record pointing to: 185.199.110.153
A record pointing to: 185.199.111.153
```

**For subdomain (www.yourdomain.com):**
```
CNAME record pointing to: blackiekennels-HOME.github.io
```

### Step 4: Wait for DNS Propagation

DNS changes take 24-48 hours to propagate. Your site will be available at your custom domain once complete.

---

## 📊 Monitoring Your Deployments

### View All Deployments

1. Go to `https://github.com/blackiekennels-HOME/mrblackapl`
2. Click **Actions** tab
3. See all builds and deployment history

### Check Build Status

- 🟢 **Green checkmark** = Build successful
- 🔴 **Red X** = Build failed
- 🟡 **Yellow circle** = Build in progress

### View Build Details

Click on any build to see:
- Build logs
- Errors or warnings
- Build time
- Deployment status

---

## ⚡ Performance Tips

1. **Keep your main branch clean** - Only push working code
2. **Test locally first** - Run `pnpm build` before pushing
3. **Use meaningful commit messages** - Makes history clear
4. **Monitor build times** - Should be 2-3 minutes

---

## 🔐 Security Notes

✅ **GitHub Pages is secure:**
- HTTPS enabled by default
- Free SSL certificate
- Automatic certificate renewal
- No credit card required

---

## 📞 Need Help?

**Common issues:**

| Issue | Solution |
|-------|----------|
| Build failed | Check Actions logs for errors |
| Site not updating | Hard refresh browser, wait for build |
| 404 error | Wait for build to complete |
| Custom domain not working | Check DNS settings, wait 24-48 hours |

---

## 🎉 You're Ready!

Your site is now set up for automatic GitHub Pages deployment. Every time you push to the `main` branch, your site will automatically rebuild and update.

**Next steps:**
1. Enable GitHub Pages (follow steps above)
2. Make a test change
3. Push to GitHub
4. Watch it deploy automatically
5. Visit your GitHub Pages URL

---

**GitHub Pages URL:** `https://blackiekennels-HOME.github.io/mrblackapl`

**Repository:** `https://github.com/blackiekennels-HOME/mrblackapl`

**Actions Tab:** `https://github.com/blackiekennels-HOME/mrblackapl/actions`
