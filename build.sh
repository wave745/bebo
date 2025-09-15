#!/bin/bash
set -e

echo "🔨 Building client..."
cd client && npm run build
cd ..

echo "🔨 Building server..."
npm run build:server

echo "✅ Build completed successfully!"
echo "📦 Client built directly to: server/public/"
echo "📦 Server built in: dist/index.js"
echo "📁 Static files ready at: server/public/"