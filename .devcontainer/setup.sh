
#!/bin/bash
set -e
echo "🔧 Installing project dependencies with PNPM..."
pnpm install --frozen-lockfile
echo "🪶 Verifying Feathers CLI..."
if ! pnpm dlx feathers --version > /dev/null 2>&1; then
  echo "Installing Feathers CLI globally..."
  pnpm add -g @feathersjs/cli
fi
echo "📁 Creating .env files if missing..."
cp -n ./api/.env.example ./api/.env || true
cp -n ./web/.env.example ./web/.env || true
echo "✅ Setup complete."
