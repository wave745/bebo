#!/bin/bash
set -e

echo "🔨 Building client..."
cd client && npm run build
cd ..

echo "🔨 Building server..."
npm run build:server

echo "📁 Creating dist/public directory..."
mkdir -p dist/public

echo "📋 Copying client files to server's expected location..."
cp -r client/dist/* dist/public/

echo "✅ Build completed successfully!"
echo "📦 Client built in: client/dist/"
echo "📦 Server built in: dist/index.js"
echo "📁 Static files copied to: dist/public/"