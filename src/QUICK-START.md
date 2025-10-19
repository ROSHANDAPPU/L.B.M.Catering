# 🚀 QUICK START - La Bella Mesa Website

## ⚡ Fastest Way to Get Your Site Live (5 Minutes)

### Step 1: Download from Figma Make
1. In Figma Make, click the **Export/Download** button
2. Save the ZIP file to your computer
3. Extract/unzip the files

### Step 2: Fix Image Imports ⚠️ CRITICAL

Your code currently uses `figma:asset` imports that won't work outside Figma Make.

**You have two options:**

#### Option A: Quick Fix (Temporary - for testing)
Replace Figma asset imports with Unsplash URLs temporarily:

```typescript
// In Header.tsx, About.tsx, Footer.tsx, MenuPage.tsx
// Replace:
import logo from 'figma:asset/xxxxx.png';

// With:
const logo = 'https://via.placeholder.com/300x100/5B2E34/EFE3D7?text=La+Bella+Mesa';
```

#### Option B: Proper Fix (Recommended)
1. Download all your logo/business card images from Figma
2. Create folder: `public/images/`
3. Save images there:
   - `public/images/logo-light.png`
   - `public/images/logo-dark.png`
   - `public/images/business-card-cream.png`
4. Update all imports:
   ```typescript
   // Replace this:
   import logo from 'figma:asset/d6a7c683...png';
   
   // With this:
   const logo = '/images/logo-light.png';
   ```

### Step 3: Create GitHub Repository
1. Go to **github.com** (create account if needed)
2. Click **"+ New repository"**
3. Name: `la-bella-mesa-catering`
4. Select **Public**
5. Click **Create repository**

### Step 4: Upload Code to GitHub

**Two Ways:**

#### Method A: Using GitHub Web Interface (Easiest)
1. On your new repository page, click **"uploading an existing file"**
2. Drag and drop ALL your project files
3. Scroll down, click **"Commit changes"**

#### Method B: Using Git Commands (Recommended)
Open Terminal/Command Prompt in your project folder:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/la-bella-mesa-catering.git
git push -u origin main
```

### Step 5: Deploy to Vercel (Easiest & Free)

1. Go to **vercel.com**
2. Click **"Sign Up"** → **"Continue with GitHub"**
3. Click **"New Project"**
4. Select `la-bella-mesa-catering` repository
5. Click **"Deploy"**
6. Wait 30 seconds... **DONE!** ✅

Your live site URL: `https://la-bella-mesa-catering.vercel.app`

---

## 🔄 How to Update Your Live Site

After making changes:

1. **Edit your code**
2. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Updated contact info"
   git push
   ```
3. **Vercel automatically deploys** your changes (30 seconds)

---

## ✅ Complete Checklist

- [ ] Downloaded project from Figma Make
- [ ] Fixed image imports (removed `figma:asset`)
- [ ] Created GitHub repository
- [ ] Pushed code to GitHub
- [ ] Connected to Vercel
- [ ] Site is live!

---

## 🆘 Common Issues

### "Module not found: figma:asset"
→ You need to replace Figma asset imports (see Step 2 above)

### "Failed to build"
→ Check that all image imports are fixed
→ Make sure `package.json` exists

### "Site shows blank page"
→ Check browser console for errors
→ Verify image paths are correct

### Need to update the site?
→ Just push to GitHub - Vercel auto-deploys

---

## 📁 Expected File Structure

```
la-bella-mesa-catering/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   └── images/           ← Put your logo/images here
│       ├── logo-light.png
│       ├── logo-dark.png
│       └── business-card-cream.png
├── src/
│   └── main.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ... (all other components)
├── pages/
│   └── MenuPage.tsx
├── styles/
│   └── globals.css
├── App.tsx
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

---

## 🎯 Next Steps After Going Live

1. **Custom Domain** (optional):
   - In Vercel: Settings → Domains
   - Add `www.labellamesa­events.com`
   - Update DNS records at your domain registrar

2. **SEO Optimization**:
   - Update meta tags in `index.html`
   - Add Google Analytics (optional)

3. **Performance**:
   - Optimize images (compress PNGs)
   - Use WebP format for faster loading

---

**Questions? Check `DEPLOYMENT-GUIDE.md` for detailed instructions!**

**Need help? Contact me or check Vercel's documentation.**

---

Good luck! Your website will look amazing live! 🎉
