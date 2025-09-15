#!/bin/bash
set -e

echo "🔨 Building client..."
cd client && npm run build
cd ..

echo "🔨 Building server..."
npm run build:server

echo "✅ Build completed successfully!"
echo "📦 Client built in: client/dist/"
echo "📦 Server built in: dist/index.js"