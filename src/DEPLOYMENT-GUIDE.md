# 🚀 Deployment Guide - La Bella Mesa Website

## Option 1: Deploy to Vercel (Recommended - Easiest)

### Why Vercel?
- ✅ **FREE** for personal projects
- ✅ Automatic deployments from GitHub
- ✅ Custom domain support
- ✅ Lightning-fast CDN
- ✅ Zero configuration needed

### Steps:

1. **Push your code to GitHub** (see GitHub setup below)

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" and choose "Continue with GitHub"
   - Click "Import Project"
   - Select your `la-bella-mesa-catering` repository
   - Click "Deploy"
   - Done! Your site will be live in ~30 seconds

3. **Your live URL**: Vercel will give you a URL like:
   ```
   https://la-bella-mesa-catering.vercel.app
   ```

4. **Custom Domain** (Optional):
   - In Vercel dashboard → Settings → Domains
   - Add `www.labellamesa­events.com`
   - Follow DNS instructions

---

## Option 2: Deploy to Netlify

### Steps:

1. **Push code to GitHub** (see below)

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Your live URL**: 
   ```
   https://la-bella-mesa-catering.netlify.app
   ```

---

## Option 3: GitHub Pages

### Steps:

1. **Update `vite.config.ts`**:
   ```typescript
   export default defineConfig({
     plugins: [react(), tailwindcss()],
     base: '/la-bella-mesa-catering/', // Your repo name
   });
   ```

2. **Create `.github/workflows/deploy.yml`**:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       
       steps:
       - uses: actions/checkout@v3
       
       - name: Setup Node
         uses: actions/setup-node@v3
         with:
           node-version: '18'
           
       - name: Install dependencies
         run: npm install
         
       - name: Build
         run: npm run build
         
       - name: Deploy to GitHub Pages
         uses: peaceiris/actions-gh-pages@v3
         with:
           github_token: ${{ secrets.GITHUB_TOKEN }}
           publish_dir: ./dist
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from branch `gh-pages`
   - Save

4. **Your live URL**:
   ```
   https://yourusername.github.io/la-bella-mesa-catering/
   ```

---

## 📦 GitHub Setup (Required for all options)

### 1. Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon (top right) → **"New repository"**
3. Name it: `la-bella-mesa-catering`
4. Keep it **Public** (required for free GitHub Pages)
5. **Don't** initialize with README (we already have one)
6. Click **"Create repository"**

### 2. Push Your Code to GitHub

**On your computer**, open Terminal/Command Prompt and navigate to your project folder:

```bash
# Navigate to your project folder
cd path/to/la-bella-mesa-catering

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - La Bella Mesa website"

# Add your GitHub repository as remote
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/la-bella-mesa-catering.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Future Updates

After making changes to your website:

```bash
# Add changed files
git add .

# Commit with a message
git commit -m "Updated contact information"

# Push to GitHub (triggers auto-deployment)
git push
```

---

## 🔧 Local Development

### First Time Setup:
```bash
# Install all dependencies
npm install

# Start development server
npm run dev
```

Your site will be at: `http://localhost:5173`

### Building for Production:
```bash
npm run build
```

This creates a `dist/` folder with optimized files.

---

## ⚠️ Important Notes

### Image Assets
Your current code uses Figma asset imports like:
```typescript
import logo from 'figma:asset/...png';
```

**These won't work outside Figma Make!** You need to:

1. **Download all images** from Figma Make
2. Create a `/public/images/` folder
3. Put images there (e.g., `/public/images/logo-light.png`)
4. Update imports:
   ```typescript
   // Before (Figma Make)
   import logo from 'figma:asset/d6a7c683...png';
   
   // After (Production)
   const logo = '/images/logo-light.png';
   ```

### Quick Fix for All Images
Search your code for `figma:asset` and replace with proper paths.

---

## 🎯 Recommended: Vercel

For the **fastest and easiest** deployment:
1. Push to GitHub
2. Import to Vercel
3. Done!

**Live in under 2 minutes** with automatic deployments on every push.

---

## 📞 Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **GitHub Pages**: https://pages.github.com

---

## ✅ Checklist

- [ ] All configuration files created
- [ ] Images downloaded and moved to `/public/images/`
- [ ] Image imports updated (no `figma:asset`)
- [ ] Code pushed to GitHub
- [ ] Deployed to Vercel/Netlify/GitHub Pages
- [ ] Live site is working
- [ ] Custom domain connected (optional)

---

**Good luck! Your beautiful La Bella Mesa website will be live soon! 🎉**
