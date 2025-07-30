#!/usr/bin/env node

/**
 * Package Test Script
 * Tests the built package to ensure all exports work correctly
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🧪 Testing neo-ui-icons package...\n');

// Test 1: Check if dist folder exists and has required files
console.log('1. Checking build output...');
const distPath = path.join(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
  console.error('❌ dist folder not found. Run "npm run build" first.');
  process.exit(1);
}

const requiredFiles = [
  'index.js',
  'index.esm.js',
  'index.d.ts',
  'react/index.js',
  'react/index.esm.js',
  'react/index.d.ts',
  'vue/index.js',
  'vue/index.esm.js',
  'vue/index.d.ts',
  'motion/index.js',
  'motion/index.esm.js',
  'motion/index.d.ts'
];

let allFilesExist = true;
requiredFiles.forEach(file => {
  const filePath = path.join(distPath, file);
  if (fs.existsSync(filePath)) {
    console.log(`   ✅ ${file}`);
  } else {
    console.log(`   ❌ ${file} - MISSING`);
    allFilesExist = false;
  }
});

if (!allFilesExist) {
  console.error('\n❌ Some required files are missing. Build may have failed.');
  process.exit(1);
}

// Test 2: Check package.json exports
console.log('\n2. Checking package.json exports...');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const exports = packageJson.exports;

const requiredExports = ['.', './react', './vue', './motion'];
requiredExports.forEach(exportPath => {
  if (exports[exportPath]) {
    console.log(`   ✅ ${exportPath} export configured`);
  } else {
    console.log(`   ❌ ${exportPath} export missing`);
    allFilesExist = false;
  }
});

// Test 3: Check motion components specifically
console.log('\n3. Checking motion components...');
const motionIndexPath = path.join(distPath, 'motion', 'index.js');
if (fs.existsSync(motionIndexPath)) {
  const motionIndex = fs.readFileSync(motionIndexPath, 'utf8');
  
  const requiredMotionComponents = [
    'MatrixCubeRotating',
    'BinaryCodeFlashing', 
    'WhiteRabbitHopping'
  ];
  
  requiredMotionComponents.forEach(component => {
    if (motionIndex.includes(component)) {
      console.log(`   ✅ ${component} exported`);
    } else {
      console.log(`   ❌ ${component} not found in exports`);
      allFilesExist = false;
    }
  });
}

// Test 4: Check TypeScript declarations
console.log('\n4. Checking TypeScript declarations...');
const motionTypesPath = path.join(distPath, 'motion', 'index.d.ts');
if (fs.existsSync(motionTypesPath)) {
  const motionTypes = fs.readFileSync(motionTypesPath, 'utf8');
  
  if (motionTypes.includes('export')) {
    console.log('   ✅ Motion TypeScript declarations generated');
  } else {
    console.log('   ❌ Motion TypeScript declarations appear empty');
    allFilesExist = false;
  }
}

// Test 5: Check bundle sizes
console.log('\n5. Checking bundle sizes...');
const files = [
  { name: 'Main Bundle', path: 'index.esm.js' },
  { name: 'React Bundle', path: 'react/index.esm.js' },
  { name: 'Vue Bundle', path: 'vue/index.esm.js' },
  { name: 'Motion Bundle', path: 'motion/index.esm.js' }
];

files.forEach(file => {
  const filePath = path.join(distPath, file.path);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(1);
    console.log(`   📦 ${file.name}: ${sizeKB} KB`);
    
    // Warn if bundle is unusually large
    if (stats.size > 500 * 1024) { // 500KB
      console.log(`   ⚠️  ${file.name} is quite large (${sizeKB} KB)`);
    }
  }
});

// Test 6: Validate package.json
console.log('\n6. Validating package.json...');
const requiredPackageFields = [
  'name',
  'version', 
  'description',
  'main',
  'module',
  'types',
  'exports',
  'files',
  'keywords'
];

requiredPackageFields.forEach(field => {
  if (packageJson[field]) {
    console.log(`   ✅ ${field} field present`);
  } else {
    console.log(`   ❌ ${field} field missing`);
    allFilesExist = false;
  }
});

// Check version
if (packageJson.version === '1.1.0') {
  console.log('   ✅ Version updated to 1.1.0');
} else {
  console.log(`   ⚠️  Version is ${packageJson.version}, expected 1.1.0`);
}

// Check keywords
const motionKeywords = ['animations', 'motion', 'loading-states'];
motionKeywords.forEach(keyword => {
  if (packageJson.keywords.includes(keyword)) {
    console.log(`   ✅ "${keyword}" keyword present`);
  } else {
    console.log(`   ❌ "${keyword}" keyword missing`);
    allFilesExist = false;
  }
});

// Final result
console.log('\n' + '='.repeat(50));
if (allFilesExist) {
  console.log('🎉 All tests passed! Package is ready for publishing.');
  console.log('\n📋 Next steps:');
  console.log('1. Commit your changes');
  console.log('2. Push to GitHub');
  console.log('3. Run: npm publish');
} else {
  console.log('❌ Some tests failed. Please fix the issues above.');
  process.exit(1);
} 