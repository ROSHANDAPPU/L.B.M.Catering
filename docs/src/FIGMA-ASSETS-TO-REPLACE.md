# 🖼️ Figma Assets That Need to be Replaced

## ⚠️ IMPORTANT: Before Deploying

Your code currently uses Figma-specific asset imports that will **NOT work** outside of Figma Make. You need to replace these with actual image files.

---

## 📋 Assets Used in Your Website

### 1. **Logo Assets** (Used in Header.tsx)

```typescript
// Current (Figma Make):
import logoLight from 'figma:asset/d6a7c683620c32417b447b6d2db494a4d28b09c3.png';
import logoDark from 'figma:asset/52859160954b1ee67ba6840d61c406ba9681560a.png';

// Replace with:
const logoLight = '/images/logo-light.png';
const logoDark = '/images/logo-dark.png';
```

**Used in:**
- `components/Header.tsx` (lines 2-3)

---

### 2. **Footer Logo** (Used in Footer.tsx)

```typescript
// Current:
import logoFooter from 'figma:asset/52859160954b1ee67ba6840d61c406ba9681560a.png';

// Replace with:
const logoFooter = '/images/logo-dark.png';
```

**Used in:**
- `components/Footer.tsx` (line 2)

---

### 3. **Business Card - Cream** (Used in About.tsx & MenuPage.tsx)

```typescript
// Current:
import businessCardCream from 'figma:asset/6b400490cc61dbc71522459ab83bafbe29d05aea.png';

// Replace with:
const businessCardCream = '/images/business-card-cream.png';
```

**Used in:**
- `components/About.tsx` (line 1)
- `pages/MenuPage.tsx` (line 5)

---

## 🔧 How to Fix

### Step 1: Download Images from Figma

1. Open your Figma design file
2. Select each logo/business card
3. Right-click → Export → PNG (2x for retina quality)
4. Save with these names:
   - `logo-light.png` (cream/light colored logo)
   - `logo-dark.png` (burgundy/dark colored logo)
   - `business-card-cream.png` (cream business card)
   - `business-card-burgundy.png` (burgundy business card - if used)

### Step 2: Create Images Folder

In your project, create:
```
public/
  └── images/
      ├── logo-light.png
      ├── logo-dark.png
      └── business-card-cream.png
```

### Step 3: Update Code

#### File: `components/Header.tsx`

**Find (lines 1-3):**
```typescript
import { useState, useEffect } from 'react';
import { Instagram, Phone } from 'lucide-react';
import logoLight from 'figma:asset/d6a7c683620c32417b447b6d2db494a4d28b09c3.png';
import logoDark from 'figma:asset/52859160954b1ee67ba6840d61c406ba9681560a.png';
```

**Replace with:**
```typescript
import { useState, useEffect } from 'react';
import { Instagram, Phone } from 'lucide-react';

const logoLight = '/images/logo-light.png';
const logoDark = '/images/logo-dark.png';
```

---

#### File: `components/Footer.tsx`

**Find (lines 1-2):**
```typescript
import { Instagram, Facebook, Mail } from 'lucide-react';
import logoFooter from 'figma:asset/52859160954b1ee67ba6840d61c406ba9681560a.png';
```

**Replace with:**
```typescript
import { Instagram, Facebook, Mail } from 'lucide-react';

const logoFooter = '/images/logo-dark.png';
```

---

#### File: `components/About.tsx`

**Find (line 1):**
```typescript
import businessCardCream from 'figma:asset/6b400490cc61dbc71522459ab83bafbe29d05aea.png';
```

**Replace with:**
```typescript
const businessCardCream = '/images/business-card-cream.png';
```

---

#### File: `pages/MenuPage.tsx`

**Find (lines 1-5):**
```typescript
import { useEffect, useRef, useState } from 'react';
import { Phone, Instagram, Mail } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import businessCardCream from 'figma:asset/6b400490cc61dbc71522459ab83bafbe29d05aea.png';
```

**Replace with:**
```typescript
import { useEffect, useRef, useState } from 'react';
import { Phone, Instagram, Mail } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const businessCardCream = '/images/business-card-cream.png';
```

---

## ✅ Quick Verification

After making changes, search your entire codebase for:
- `figma:asset` - Should return **0 results**

If you still see `figma:asset` anywhere, you missed a file!

---

## 🆘 Don't Have the Original Images?

If you don't have access to the original Figma files:

### Option 1: Use Placeholder Logo (Temporary)
```typescript
const logoLight = 'https://via.placeholder.com/200x60/EFE3D7/36394C?text=La+Bella+Mesa';
const logoDark = 'https://via.placeholder.com/200x60/5B2E34/EFE3D7?text=La+Bella+Mesa';
```

### Option 2: Create Simple Text Logo
Use a text-based logo in your code (SVG):
```typescript
const logoLight = 'data:image/svg+xml,<svg>...</svg>';
```

### Option 3: Download from Figma Make
1. In Figma Make, right-click each image component
2. "Export" or "Download"
3. Save to `public/images/`

---

## 📊 Summary

| File | Line | Import to Remove | Replacement |
|------|------|------------------|-------------|
| `components/Header.tsx` | 3-4 | logoLight, logoDark | `/images/logo-*.png` |
| `components/Footer.tsx` | 2 | logoFooter | `/images/logo-dark.png` |
| `components/About.tsx` | 1 | businessCardCream | `/images/business-card-cream.png` |
| `pages/MenuPage.tsx` | 5 | businessCardCream | `/images/business-card-cream.png` |

---

## ⚡ After Fixing

Your site will build successfully and work on:
- ✅ Vercel
- ✅ Netlify
- ✅ GitHub Pages
- ✅ Any hosting service

Without fixing these imports, your build will **fail**.

---

**Need help? Check the QUICK-START.md guide!**
