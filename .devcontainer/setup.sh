
#!/bin/bash
set -e
echo "🔧 Installing project dependencies with PNPM..."
if [ -f "pnpm-lock.yaml" ]; then
  pnpm install --frozen-lockfile
else
  echo "No lockfile found, generating one..."
  pnpm install
fi
echo "🪶 Verifying Feathers CLI..."
pnpm setup || true
if ! pnpm dlx feathers --version > /dev/null 2>&1; then
  echo "Installing Feathers CLI globally..."
  pnpm add -g @feathersjs/cli || echo "Global install failed, will use dlx"
fi
echo "📁 Creating .env files if missing..."
cp -n ./api/.env.example ./api/.env || true
cp -n ./web/.env.example ./web/.env || true
echo "✅ Setup complete."
