import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Starting Cloudflare Workers build process...\n');
console.log(`📍 Current directory: ${process.cwd()}`);
console.log(`📅 Build time: ${new Date().toISOString()}\n`);

// Log environment info
console.log('🔧 Environment:');
console.log(`  NODE_ENV: ${process.env.NODE_ENV || 'not set'}`);
console.log(`  Node version: ${process.version}`);
console.log(`  Platform: ${process.platform}\n`);

// Check if we're in CI/CD environment (Cloudflare Pages)
if (process.env.CF_PAGES) {
  console.log('☁️  Running in Cloudflare Pages environment');
  console.log(`  CF_PAGES_BRANCH: ${process.env.CF_PAGES_BRANCH}`);
  console.log(`  CF_PAGES_COMMIT_SHA: ${process.env.CF_PAGES_COMMIT_SHA}`);
  console.log(`  CF_PAGES_URL: ${process.env.CF_PAGES_URL}\n`);
}

// Clean previous build
console.log('🧹 Cleaning previous build...');
if (fs.existsSync('./web/dist')) {
  fs.rmSync('./web/dist', { recursive: true, force: true });
  console.log('  ✅ Removed old dist directory');
} else {
  console.log('  ℹ️  No previous build found');
}

// Run the build
console.log('\n📦 Building web application...');
try {
  execSync('cd web && pnpm build', { 
    stdio: 'inherit',
    env: { ...process.env, FORCE_COLOR: '1' }
  });
} catch (error) {
  console.error('❌ Build failed!');
  console.error(error);
  process.exit(1);
}

// Verify build output
console.log('\n🔍 Verifying build output...');
const distPath = './web/dist';

if (!fs.existsSync(distPath)) {
  console.error('❌ Build directory not created!');
  process.exit(1);
}

// Log file structure
function logFileTree(dir, prefix = '') {
  const items = fs.readdirSync(dir).sort();
  items.forEach((item, index) => {
    const itemPath = path.join(dir, item);
    const stats = fs.statSync(itemPath);
    const isLast = index === items.length - 1;
    const connector = isLast ? '└── ' : '├── ';
    
    if (stats.isDirectory()) {
      console.log(`${prefix}${connector}📁 ${item}/`);
      logFileTree(itemPath, prefix + (isLast ? '    ' : '│   '));
    } else {
      const size = (stats.size / 1024).toFixed(2);
      console.log(`${prefix}${connector}📄 ${item} (${size} KB)`);
    }
  });
}

console.log('\n📂 Build output structure:');
logFileTree(distPath);

// Check for required files
const requiredFiles = [
  'index.html',
  'assets'
];

console.log('\n✅ Checking required files:');
let hasAllRequired = true;

requiredFiles.forEach(file => {
  const filePath = path.join(distPath, file);
  if (fs.existsSync(filePath)) {
    console.log(`  ✓ ${file}`);
  } else {
    console.log(`  ✗ ${file} - MISSING!`);
    hasAllRequired = false;
  }
});

// Read and log index.html first few lines
const indexPath = path.join(distPath, 'index.html');
if (fs.existsSync(indexPath)) {
  const indexContent = fs.readFileSync(indexPath, 'utf-8');
  const lines = indexContent.split('\n').slice(0, 10);
  console.log('\n📄 index.html preview:');
  lines.forEach((line, i) => {
    console.log(`  ${i + 1}: ${line.trim()}`);
  });
  if (indexContent.split('\n').length > 10) {
    console.log('  ... (truncated)');
  }
}

// Calculate total size
function getDirSize(dir) {
  let totalSize = 0;
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const itemPath = path.join(dir, item);
    const stats = fs.statSync(itemPath);
    
    if (stats.isDirectory()) {
      totalSize += getDirSize(itemPath);
    } else {
      totalSize += stats.size;
    }
  });
  
  return totalSize;
}

const totalSize = getDirSize(distPath);
console.log(`\n📊 Build statistics:`);
console.log(`  Total files: ${fs.readdirSync(distPath).length}`);
console.log(`  Total size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);

if (!hasAllRequired) {
  console.error('\n❌ Build verification failed - missing required files!');
  process.exit(1);
}

console.log('\n✅ Build completed successfully!');
console.log(`🎯 Ready for deployment to Cloudflare Workers\n`);