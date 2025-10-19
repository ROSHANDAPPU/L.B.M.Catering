/**
 * AUTOMATED FIX SCRIPT FOR FIGMA ASSET IMPORTS
 * 
 * This script automatically replaces Figma asset imports with local image paths.
 * 
 * BEFORE RUNNING:
 * 1. Download your logo and business card images from Figma
 * 2. Place them in public/images/ folder with these names:
 *    - logo-light.png
 *    - logo-dark.png
 *    - business-card-cream.png
 * 
 * TO RUN:
 * node fix-imports.js
 */

const fs = require('fs');
const path = require('path');

// Files to update
const filesToUpdate = [
  'components/Header.tsx',
  'components/Footer.tsx',
  'components/About.tsx',
  'pages/MenuPage.tsx'
];

// Replacement mappings
const replacements = [
  {
    search: /import logoLight from ['"]figma:asset\/[^'"]+\.png['"];/g,
    replace: "const logoLight = '/images/logo-light.png';"
  },
  {
    search: /import logoDark from ['"]figma:asset\/[^'"]+\.png['"];/g,
    replace: "const logoDark = '/images/logo-dark.png';"
  },
  {
    search: /import logoFooter from ['"]figma:asset\/[^'"]+\.png['"];/g,
    replace: "const logoFooter = '/images/logo-dark.png';"
  },
  {
    search: /import businessCardCream from ['"]figma:asset\/[^'"]+\.png['"];/g,
    replace: "const businessCardCream = '/images/business-card-cream.png';"
  }
];

console.log('🔧 Fixing Figma asset imports...\n');

let totalReplacements = 0;
let filesModified = 0;

filesToUpdate.forEach(filePath => {
  try {
    // Read file
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let fileReplacements = 0;

    // Apply all replacements
    replacements.forEach(({ search, replace }) => {
      const matches = content.match(search);
      if (matches) {
        content = content.replace(search, replace);
        fileReplacements += matches.length;
      }
    });

    // Write back if changes were made
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      filesModified++;
      totalReplacements += fileReplacements;
      console.log(`✅ ${filePath} - ${fileReplacements} import(s) fixed`);
    } else {
      console.log(`⏭️  ${filePath} - no changes needed`);
    }

  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log(`⚠️  ${filePath} - file not found`);
    } else {
      console.log(`❌ ${filePath} - error: ${error.message}`);
    }
  }
});

console.log(`\n📊 Summary:`);
console.log(`   Files modified: ${filesModified}`);
console.log(`   Total replacements: ${totalReplacements}`);

// Check if images exist
console.log(`\n🖼️  Checking for image files...`);
const requiredImages = [
  'public/images/logo-light.png',
  'public/images/logo-dark.png',
  'public/images/business-card-cream.png'
];

let missingImages = [];
requiredImages.forEach(imgPath => {
  if (fs.existsSync(imgPath)) {
    console.log(`✅ ${imgPath} - found`);
  } else {
    console.log(`❌ ${imgPath} - MISSING!`);
    missingImages.push(imgPath);
  }
});

if (missingImages.length > 0) {
  console.log(`\n⚠️  WARNING: You're missing ${missingImages.length} image file(s)!`);
  console.log(`   Please download these images from Figma and place them in public/images/`);
} else {
  console.log(`\n✅ All image files found!`);
}

// Verify no figma:asset imports remain
console.log(`\n🔍 Verifying all Figma imports are fixed...`);
let remainingImports = 0;

filesToUpdate.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const figmaImports = content.match(/figma:asset/g);
    if (figmaImports) {
      remainingImports += figmaImports.length;
      console.log(`⚠️  ${filePath} still has ${figmaImports.length} figma:asset import(s)`);
    }
  } catch (error) {
    // File doesn't exist, skip
  }
});

if (remainingImports === 0) {
  console.log(`✅ No Figma imports remaining!`);
  console.log(`\n🎉 SUCCESS! Your project is ready to deploy!`);
  console.log(`\nNext steps:`);
  console.log(`1. Run: git add .`);
  console.log(`2. Run: git commit -m "Fixed Figma asset imports"`);
  console.log(`3. Run: git push`);
  console.log(`4. Deploy to Vercel/Netlify`);
} else {
  console.log(`\n❌ Found ${remainingImports} remaining Figma import(s)`);
  console.log(`   Please fix these manually.`);
}
