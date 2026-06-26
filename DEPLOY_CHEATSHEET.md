# 🚀 Deployment Cheat Sheet

Quick reference for deploying Mr. Black APL

---

## ⚡ Quick Commands

### Standard Deployment
```bash
./deploy.sh "Your commit message"
```

### Quick Deployment (no build)
```bash
./deploy-quick.sh "Your commit message"
```

### Production Deployment (full checks)
```bash
./deploy-prod.sh "Your commit message"
```

---

## 📝 Common Commit Messages

```bash
# Homepage updates
./deploy.sh "Update homepage hero section"

# Donor information
./deploy.sh "Add new donor testimonials"

# Volunteer program
./deploy.sh "Update volunteer requirements"

# Events
./deploy.sh "Add new event: Community Awareness Day"

# Bug fixes
./deploy.sh "Fix donation form validation"

# Content updates
./deploy.sh "Refresh animal rescue statistics"

# Styling
./deploy.sh "Improve mobile responsiveness"

# Release
./deploy-prod.sh "Release v1.1 - Donor portal launch"
```

---

## 🔄 Workflow

```
1. Make changes locally
   ↓
2. Test in browser
   ↓
3. Run deployment script
   ↓
4. Script builds & commits
   ↓
5. Changes pushed to GitHub
   ↓
6. Site updates automatically
```

---

## ✅ Before Deploying

- [ ] Changes saved
- [ ] Tested locally
- [ ] No console errors
- [ ] Mobile view checked
- [ ] Links working

---

## 📊 Deployment Types

| Script | Use Case | Speed | Checks |
|--------|----------|-------|--------|
| `deploy.sh` | Regular updates | Fast | Full |
| `deploy-quick.sh` | Minor changes | Very Fast | Minimal |
| `deploy-prod.sh` | Major releases | Slower | Comprehensive |

---

## 🆘 Troubleshooting

**Build failed?**
```bash
rm -rf node_modules
pnpm install
pnpm build
```

**Push failed?**
```bash
git status
git pull origin main
git push origin main
```

**Want to see what changed?**
```bash
git status
git diff
```

---

## 📍 Site URLs

- **Live Site:** https://mrblackapl-okslpqub.manus.space
- **GitHub:** https://github.com/yourusername/mrblackapl
- **Dev Server:** http://localhost:3000

---

## 📋 File Locations

- Deployment scripts: `/home/ubuntu/mrblackapl/deploy*.sh`
- Full guide: `/home/ubuntu/mrblackapl/DEPLOYMENT_GUIDE.md`
- GitHub Actions: `/home/ubuntu/mrblackapl/.github/workflows/deploy.yml`
- Deployment logs: `/home/ubuntu/mrblackapl/.deploy-log.txt`

---

## 🎯 Pro Tips

1. **Use descriptive commit messages** - Makes history clear
2. **Deploy frequently** - Smaller changes are easier to debug
3. **Test locally first** - Catch errors before deployment
4. **Check logs** - Review `.deploy-log.txt` for details
5. **Use quick deploy** - For content-only changes

---

## 🔐 Security Checklist

- ✓ No `.env` files committed
- ✓ No API keys in code
- ✓ No passwords in commits
- ✓ `.gitignore` is updated
- ✓ Environment variables used

---

**Last Updated:** June 26, 2026
