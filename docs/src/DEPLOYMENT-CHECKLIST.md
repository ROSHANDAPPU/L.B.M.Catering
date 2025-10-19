# ✅ Complete Deployment Checklist

## Pre-Deployment (Do These First!)

### 1. Fix Figma Asset Imports ⚠️ CRITICAL
- [ ] Download logo images from Figma
- [ ] Download business card images from Figma
- [ ] Create `public/images/` folder
- [ ] Place images in `public/images/`
- [ ] Update `components/Header.tsx` - remove `figma:asset` imports
- [ ] Update `components/Footer.tsx` - remove `figma:asset` imports
- [ ] Update `components/About.tsx` - remove `figma:asset` imports
- [ ] Update `pages/MenuPage.tsx` - remove `figma:asset` imports
- [ ] Search entire codebase for `figma:asset` - should be 0 results

**See `FIGMA-ASSETS-TO-REPLACE.md` for detailed instructions**

### 2. Verify Configuration Files Exist
- [ ] `package.json`
- [ ] `vite.config.ts`
- [ ] `tsconfig.json`
- [ ] `tsconfig.node.json`
- [ ] `index.html`
- [ ] `src/main.tsx`
- [ ] `.gitignore`
- [ ] `README.md`

---

## GitHub Setup

### 3. Create GitHub Repository
- [ ] Go to github.com and sign in
- [ ] Click "+ New repository"
- [ ] Repository name: `la-bella-mesa-catering`
- [ ] Visibility: **Public** (for free deployment)
- [ ] Do NOT initialize with README
- [ ] Click "Create repository"
- [ ] Copy the repository URL

### 4. Push Code to GitHub

**Option A: Using Git Commands**
```bash
cd /path/to/your/project
git init
git add .
git commit -m "Initial commit - La Bella Mesa website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/la-bella-mesa-catering.git
git push -u origin main
```

- [ ] Opened Terminal/Command Prompt
- [ ] Navigated to project folder
- [ ] Ran `git init`
- [ ] Ran `git add .`
- [ ] Ran `git commit -m "Initial commit"`
- [ ] Ran `git branch -M main`
- [ ] Added remote origin (with YOUR username)
- [ ] Ran `git push -u origin main`
- [ ] Code is visible on GitHub

**Option B: Using GitHub Desktop**
- [ ] Download GitHub Desktop
- [ ] File → Add Local Repository
- [ ] Publish to GitHub
- [ ] Push to origin

---

## Deployment (Choose One Method)

### Option 1: Vercel (RECOMMENDED - Easiest & Fastest)

- [ ] Go to vercel.com
- [ ] Click "Sign Up"
- [ ] Choose "Continue with GitHub"
- [ ] Authorize Vercel to access GitHub
- [ ] Click "Import Project" or "New Project"
- [ ] Select `la-bella-mesa-catering` repository
- [ ] Framework Preset: **Vite** (auto-detected)
- [ ] Root Directory: `./` (default)
- [ ] Build Command: `npm run build` (auto-filled)
- [ ] Output Directory: `dist` (auto-filled)
- [ ] Click "Deploy"
- [ ] Wait 30-60 seconds
- [ ] **SITE IS LIVE!** 🎉

**Your URL**: `https://la-bella-mesa-catering.vercel.app`

---

### Option 2: Netlify

- [ ] Go to netlify.com
- [ ] Click "Sign up" with GitHub
- [ ] Click "Add new site" → "Import an existing project"
- [ ] Connect to GitHub
- [ ] Select `la-bella-mesa-catering`
- [ ] Build settings:
  - Build command: `npm run build`
  - Publish directory: `dist`
- [ ] Click "Deploy site"
- [ ] Wait for deployment

**Your URL**: `https://la-bella-mesa-catering.netlify.app`

---

### Option 3: GitHub Pages

- [ ] Updated `vite.config.ts` with correct base path
- [ ] Pushed `.github/workflows/deploy.yml` to repository
- [ ] Go to repository Settings → Pages
- [ ] Source: **GitHub Actions** (not branch)
- [ ] Wait for Actions to complete
- [ ] Site is live

**Your URL**: `https://YOUR_USERNAME.github.io/la-bella-mesa-catering/`

---

## Post-Deployment Testing

### 5. Test Your Live Site
- [ ] Site loads successfully
- [ ] All images appear (logos, business cards)
- [ ] Navigation works (About, Services, Menu, Gallery, Contact)
- [ ] Menu page loads correctly
- [ ] Contact form works
- [ ] Mobile responsive design works
- [ ] All links work (phone, email, Instagram)
- [ ] No console errors in browser DevTools

### 6. Performance Check
- [ ] Test on mobile device
- [ ] Test on desktop
- [ ] Page loads in under 3 seconds
- [ ] Images load properly
- [ ] Smooth scrolling works

---

## Optional: Custom Domain

### 7. Connect Custom Domain (Optional)

**For Vercel:**
- [ ] Go to Vercel Dashboard → Your Project → Settings → Domains
- [ ] Click "Add"
- [ ] Enter: `www.labellamesa­events.com`
- [ ] Follow DNS configuration instructions
- [ ] Update DNS records at your domain registrar:
  - Type: `CNAME`
  - Name: `www`
  - Value: `cname.vercel-dns.com`
- [ ] Wait 24-48 hours for DNS propagation
- [ ] SSL certificate automatically provisioned

**For Netlify:**
- [ ] Settings → Domain Management → Add custom domain
- [ ] Follow similar DNS setup

---

## Future Updates Workflow

### 8. Making Changes to Your Live Site

Whenever you want to update your website:

```bash
# Make your changes in code
# Then commit and push:
git add .
git commit -m "Updated contact information"
git push
```

- [ ] Code changes made locally
- [ ] Changes committed to git
- [ ] Changes pushed to GitHub
- [ ] Vercel/Netlify automatically deploys (30-60 seconds)
- [ ] Live site updated!

**No manual deployment needed - it's automatic!**

---

## Troubleshooting

### Build Fails
- ✅ Check for `figma:asset` imports (should be 0)
- ✅ Verify all image files exist in `public/images/`
- ✅ Check build logs in Vercel/Netlify dashboard

### Blank Page
- ✅ Open browser DevTools (F12)
- ✅ Check Console for errors
- ✅ Verify image paths are correct
- ✅ Clear browser cache

### Images Not Showing
- ✅ Verify images are in `public/images/` folder
- ✅ Check image file names match code
- ✅ Paths should start with `/images/` not `./images/`

### 404 on Menu Page
- ✅ Vercel handles this automatically
- ✅ For other hosts, check routing configuration

---

## 🎯 Success Criteria

Your deployment is successful when:

- ✅ Site loads at live URL
- ✅ All pages work (Home, Menu)
- ✅ All images display correctly
- ✅ Navigation is smooth
- ✅ Contact information is correct
- ✅ No console errors
- ✅ Mobile responsive
- ✅ Fast loading (<3 seconds)

---

## 📊 Deployment Status

**GitHub Repository**: 
- [ ] Created
- URL: `https://github.com/YOUR_USERNAME/la-bella-mesa-catering`

**Live Website**:
- [ ] Deployed
- URL: `_______________________________`
- Deployment date: `___/___/2025`

**Custom Domain** (Optional):
- [ ] Connected
- URL: `www.labellamesa­events.com`

---

## 🎉 You're Done!

Congratulations! Your La Bella Mesa website is now live on the internet!

**Share your site:**
- Phone: (214) 716-9201
- Email: contact@labellamesa­events.com
- Instagram: @labellamesa_events

---

## 📚 Additional Resources

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **GitHub Pages**: https://pages.github.com
- **Vite Docs**: https://vitejs.dev
- **React Docs**: https://react.dev

---

**Questions? Refer to:**
- `QUICK-START.md` - Fast deployment guide
- `DEPLOYMENT-GUIDE.md` - Detailed deployment options
- `FIGMA-ASSETS-TO-REPLACE.md` - Image import fixes
- `README.md` - Project overview

---

**Need Help?**
1. Check the deployment logs in Vercel/Netlify
2. Review browser console for errors
3. Verify all checklist items are complete
4. Search for specific error messages online

**Good luck! 🚀**
