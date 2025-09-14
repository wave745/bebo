# BEBO Website - Vercel Deployment Guide

## 🚀 Quick Deploy to Vercel

### Option 1: Deploy from GitHub (Recommended)

1. **Push to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "feat: Prepare for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import the `wave745/bebo` repository
   - Vercel will automatically detect the configuration

3. **Deploy**:
   - Vercel will use the `vercel.json` configuration
   - Build command: `cd client && npm install && npm run build`
   - Output directory: `client/dist`
   - Click "Deploy"

### Option 2: Deploy with Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

## 📁 Project Structure

```
BeboSolanaSite/
├── client/                 # Frontend React app
│   ├── src/               # Source code
│   ├── public/            # Static assets
│   ├── dist/              # Build output (generated)
│   ├── package.json       # Client dependencies
│   ├── vite.config.ts     # Vite configuration
│   └── tailwind.config.js # Tailwind CSS config
├── vercel.json            # Vercel deployment config
└── package.json           # Root package.json
```

## ⚙️ Configuration Details

### Vercel Configuration (`vercel.json`)
- **Framework**: Vite
- **Build Command**: `cd client && npm install && npm run build`
- **Output Directory**: `client/dist`
- **Rewrites**: All routes redirect to `index.html` (SPA routing)
- **Caching**: Static assets cached for 1 year

### Build Process
1. Install dependencies in client directory
2. Build React app with Vite
3. Output optimized static files to `client/dist`
4. Deploy static files to Vercel CDN

## 🎨 Features Included

- **8 Character Gallery** with themed backgrounds
- **Hero Section** with BEBO logo and contract address
- **Responsive Design** optimized for all devices
- **Modern UI** with Tailwind CSS and Framer Motion
- **Static Assets** with proper caching headers
- **SPA Routing** with client-side navigation

## 🔧 Environment Variables

No environment variables required for this static deployment.

## 📱 Performance Optimizations

- **Code Splitting**: Vendor and UI chunks separated
- **Asset Optimization**: Images and fonts optimized
- **Caching**: Long-term caching for static assets
- **Minification**: JavaScript and CSS minified
- **Tree Shaking**: Unused code eliminated

## 🚨 Troubleshooting

### Build Fails
- Check that all dependencies are in `client/package.json`
- Ensure TypeScript compilation passes
- Verify all asset paths are correct

### Assets Not Loading
- Check that images are in `client/public/assets/`
- Verify asset paths in components
- Ensure proper import statements

### Routing Issues
- Verify `vercel.json` rewrites configuration
- Check that all routes redirect to `index.html`

## 📞 Support

For deployment issues:
1. Check Vercel deployment logs
2. Verify build configuration
3. Test locally with `npm run build` in client directory

---

**Ready to deploy!** 🎉
