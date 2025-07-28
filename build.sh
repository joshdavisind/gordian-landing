#!/bin/bash

echo "🚀 Starting Cloudflare Workers build..."
echo "📍 Current directory: $(pwd)"
echo "📅 Build time: $(date -u +"%Y-%m-%dT%H:%M:%SZ")"
echo ""

# Check environment
echo "🔧 Environment:"
echo "  NODE_ENV: ${NODE_ENV:-not set}"
echo "  Node version: $(node --version)"
echo "  PNPM version: $(pnpm --version 2>/dev/null || echo 'not installed')"
echo ""

# Cloudflare-specific environment variables
if [ -n "$CF_PAGES" ]; then
  echo "☁️  Cloudflare Pages environment detected:"
  echo "  CF_PAGES_BRANCH: $CF_PAGES_BRANCH"
  echo "  CF_PAGES_COMMIT_SHA: $CF_PAGES_COMMIT_SHA"
  echo "  CF_PAGES_URL: $CF_PAGES_URL"
  echo ""
fi

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install --frozen-lockfile || npm install

# Build the project
echo ""
echo "🔨 Building project..."
pnpm build || npm run build

# List final output
echo ""
echo "📂 Final build output:"
ls -la web/dist/

echo ""
echo "✅ Build complete!"