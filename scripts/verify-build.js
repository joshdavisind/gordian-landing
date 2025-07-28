import fs from 'fs';
import path from 'path';

const DIST_DIR = './web/dist';

console.log('🔍 Verifying build output for Cloudflare Workers...\n');

// Check if dist directory exists
if (!fs.existsSync(DIST_DIR)) {
  console.error(`❌ Build directory ${DIST_DIR} does not exist!`);
  process.exit(1);
}

console.log(`✅ Build directory exists: ${DIST_DIR}`);

// List all files in dist directory
function listFiles(dir, prefix = '') {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      console.log(`📁 ${prefix}${file}/`);
      listFiles(filePath, prefix + '  ');
    } else {
      const size = (stat.size / 1024).toFixed(2);
      console.log(`📄 ${prefix}${file} (${size} KB)`);
    }
  });
}

console.log('\n📦 Build contents:');
listFiles(DIST_DIR);

// Check for critical files
const criticalFiles = ['index.html'];
console.log('\n🔍 Checking critical files:');

criticalFiles.forEach(file => {
  const filePath = path.join(DIST_DIR, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file} found`);
  } else {
    console.error(`❌ ${file} missing!`);
  }
});

// Check total size
function getDirSize(dir) {
  let size = 0;
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      size += getDirSize(filePath);
    } else {
      size += stat.size;
    }
  });
  
  return size;
}

const totalSize = getDirSize(DIST_DIR);
console.log(`\n📊 Total build size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);

console.log('\n✅ Build verification complete!');