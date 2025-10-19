# 📁 La Bella Mesa - Complete Project Structure

## Current File Structure

```
la-bella-mesa-catering/
│
├── 📄 index.html                    # Main HTML entry point
├── 📄 package.json                  # Dependencies & scripts
├── 📄 vite.config.ts               # Vite configuration
├── 📄 tsconfig.json                # TypeScript config
├── 📄 tsconfig.node.json           # TypeScript config for Node
├── 📄 vercel.json                  # Vercel deployment config
├── 📄 .gitignore                   # Git ignore rules
├── 📄 README.md                    # Project documentation
│
├── 📁 .github/
│   └── 📁 workflows/
│       └── 📄 deploy.yml           # GitHub Actions deployment
│
├── 📁 public/                      # Static assets (publicly accessible)
│   └── 📁 images/                  # ⚠️ CREATE THIS FOLDER
│       ├── 🖼️ logo-light.png       # ⚠️ ADD YOUR LOGO
│       ├── 🖼️ logo-dark.png        # ⚠️ ADD YOUR LOGO
│       └── 🖼️ business-card-cream.png  # ⚠️ ADD YOUR CARD
│
├── 📁 src/
│   └── 📄 main.tsx                 # React app entry point
│
├── 📁 components/
│   ├── 📄 Header.tsx               # Sticky navigation header
│   ├── 📄 Hero.tsx                 # Full-screen hero with parallax
│   ├── 📄 About.tsx                # About section with stats
│   ├── 📄 Services.tsx             # Services grid
│   ├── 📄 Gallery.tsx              # Masonry gallery with lightbox
│   ├── 📄 Testimonials.tsx         # Client testimonials carousel
│   ├── 📄 Contact.tsx              # Contact form & information
│   ├── 📄 Footer.tsx               # Footer with links & socials
│   │
│   ├── 📁 figma/
│   │   └── 📄 ImageWithFallback.tsx  # Protected - Do not edit
│   │
│   └── 📁 ui/                      # ShadCN UI components
│       ├── 📄 accordion.tsx
│       ├── 📄 alert-dialog.tsx
│       ├── 📄 alert.tsx
│       ├── 📄 button.tsx
│       ├── 📄 card.tsx
│       ├── 📄 dialog.tsx
│       ├── 📄 input.tsx
│       ├── 📄 select.tsx
│       ├── 📄 textarea.tsx
│       └── ... (40+ UI components)
│
├── 📁 pages/
│   └── 📄 MenuPage.tsx             # Complete menu page
│
├── 📁 styles/
│   └── 📄 globals.css              # Global styles & Tailwind
│
├── 📁 guidelines/
│   ├── 📄 Brand-Implementation.md  # Brand implementation guide
│   └── 📄 Guidelines.md            # Design guidelines
│
├── 📄 App.tsx                      # Main app component
├── 📄 Attributions.md              # Image/asset credits
│
└── 📚 DOCUMENTATION/               # Deployment guides (you're reading these!)
    ├── 📄 QUICK-START.md           # ⭐ START HERE - 5 minute deploy
    ├── 📄 DEPLOYMENT-GUIDE.md      # Detailed deployment instructions
    ├── 📄 DEPLOYMENT-CHECKLIST.md  # Step-by-step checklist
    ├── 📄 FIGMA-ASSETS-TO-REPLACE.md  # Fix image imports
    └── 📄 PROJECT-STRUCTURE.md     # This file
```

---

## 🎯 Key Files Explained

### Entry Points
- **`index.html`** - The HTML file that loads your React app
- **`src/main.tsx`** - The JavaScript entry point that renders React
- **`App.tsx`** - The main React component with routing logic

### Configuration
- **`package.json`** - Lists all dependencies (React, Vite, Tailwind, etc.)
- **`vite.config.ts`** - Configures Vite build tool
- **`tsconfig.json`** - TypeScript compiler settings
- **`vercel.json`** - Deployment settings for Vercel

### Components (Building Blocks)
- **`components/`** - Reusable React components for each section
- **`pages/`** - Full page components (Menu page)
- **`components/ui/`** - Pre-built UI components from ShadCN

### Styling
- **`styles/globals.css`** - Contains:
  - Tailwind CSS imports
  - Custom CSS variables (brand colors)
  - Typography settings
  - Global styles

### Static Assets
- **`public/`** - Files served directly (not processed by Vite)
  - Images, fonts, favicon
  - Accessible via `/images/logo.png` in code

---

## ⚠️ Critical Files to Update Before Deployment

### 1. Create `public/images/` folder
```
public/
  └── images/
      ├── logo-light.png          ← Download from Figma
      ├── logo-dark.png           ← Download from Figma
      └── business-card-cream.png ← Download from Figma
```

### 2. Fix these files to remove `figma:asset` imports:
- ✅ `components/Header.tsx` (lines 3-4)
- ✅ `components/Footer.tsx` (line 2)
- ✅ `components/About.tsx` (line 1)
- ✅ `pages/MenuPage.tsx` (line 5)

**See `FIGMA-ASSETS-TO-REPLACE.md` for exact code changes**

---

## 🚫 Files to NEVER Edit

These are protected system files:
- `components/figma/ImageWithFallback.tsx`
- `components/ui/*` (ShadCN components - unless you know what you're doing)

---

## 📦 What Gets Deployed

When you run `npm run build`, Vite creates a `dist/` folder:

```
dist/
├── index.html              # Optimized HTML
├── assets/
│   ├── index-[hash].js     # Bundled & minified JavaScript
│   ├── index-[hash].css    # Bundled & minified CSS
│   └── logo-[hash].png     # Optimized images
└── images/                 # Your static images
```

This `dist/` folder is what gets uploaded to Vercel/Netlify/GitHub Pages.

---

## 🗂️ Folder Purposes

| Folder | Purpose | Edit? |
|--------|---------|-------|
| `components/` | React components for sections | ✅ Yes |
| `pages/` | Full page components | ✅ Yes |
| `styles/` | CSS and styling | ✅ Yes |
| `public/` | Static assets (images) | ✅ Yes |
| `src/` | React entry point | ⚠️ Rarely |
| `components/ui/` | ShadCN components | ⚠️ Rarely |
| `components/figma/` | Protected system files | ❌ Never |
| `.github/` | GitHub automation | ⚠️ Rarely |
| `guidelines/` | Documentation | ✅ Yes |

---

## 🔄 How the App Works

```
1. Browser loads → index.html
2. index.html loads → src/main.tsx
3. main.tsx renders → App.tsx
4. App.tsx manages:
   - Current page (home vs menu)
   - Navigation between sections
   - Routing logic

5. App.tsx renders components:
   Homepage:
   ├── Header (sticky navigation)
   ├── Hero (full-screen banner)
   ├── About (company story)
   ├── Services (what you offer)
   ├── Gallery (photo gallery)
   ├── Testimonials (client reviews)
   ├── Contact (contact form)
   └── Footer (links & info)

   Menu Page:
   ├── Header (sticky navigation)
   ├── MenuPage (complete menu)
   └── Footer
```

---

## 🎨 Styling System

Your brand colors are defined in `styles/globals.css`:

```css
:root {
  --color-cream: #EFE3D7;
  --color-burgundy: #5B2E34;
  --color-brass: #C4A46A;
  --color-stone: #C9C3BA;
  --color-navy: #36394C;
}
```

Used in components like:
```tsx
<div className="bg-[#EFE3D7] text-[#36394C]">
  {/* Light cream background, navy text */}
</div>
```

---

## 📊 File Sizes (Approximate)

| File Type | Count | Total Size |
|-----------|-------|------------|
| React Components | 8 main + 40 UI | ~150 KB |
| CSS | 1 file | ~50 KB |
| JavaScript | Bundle | ~200 KB (minified) |
| Images | 3 logos/cards | ~100 KB |
| **Total Website** | ~50 files | **~500 KB** |

Your website is **very lightweight** and will load fast! ⚡

---

## 🔍 Finding Specific Code

### To find where something is used:

**Example: Find all uses of phone number**
1. Open project in VS Code
2. Press `Ctrl+Shift+F` (Windows) or `Cmd+Shift+F` (Mac)
3. Search for: `214-716-9201`
4. Results show all locations

### Common searches:
- `figma:asset` - Find Figma imports to fix
- `#EFE3D7` - Find cream color usage
- `(214) 716-9201` - Find phone number
- `@labellamesa_events` - Find Instagram handle

---

## 🆕 Adding New Files

### Adding a new component:
1. Create file in `components/` folder
2. Name it: `MyComponent.tsx`
3. Import in `App.tsx`:
   ```typescript
   import { MyComponent } from './components/MyComponent';
   ```
4. Use it:
   ```tsx
   <MyComponent />
   ```

### Adding new images:
1. Place in `public/images/`
2. Reference in code:
   ```typescript
   const myImage = '/images/my-photo.jpg';
   ```

---

## 🚀 Ready to Deploy?

Follow this order:
1. ✅ Read `QUICK-START.md` (5 minutes)
2. ✅ Fix Figma assets (see `FIGMA-ASSETS-TO-REPLACE.md`)
3. ✅ Push to GitHub
4. ✅ Deploy to Vercel
5. ✅ Check `DEPLOYMENT-CHECKLIST.md`

---

## 📞 Questions?

Refer to:
- **Quick deployment**: `QUICK-START.md`
- **Detailed guide**: `DEPLOYMENT-GUIDE.md`
- **Step-by-step**: `DEPLOYMENT-CHECKLIST.md`
- **Fix images**: `FIGMA-ASSETS-TO-REPLACE.md`

---

**Your website has a clean, organized structure that's easy to maintain!** 🎉
