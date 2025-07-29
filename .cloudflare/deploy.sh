#!/bin/bash
# Cloudflare deployment script

echo "Starting Cloudflare Workers deployment..."

# Deploy using wrangler
npx wrangler deploy --site web/dist

echo "Deployment complete!"