# Deployment Guide

## Quick Deploy to Vercel

### Prerequisites
- GitHub account with your code pushed
- Vercel account (free tier works great)

### Steps

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite

2. **Configure Build Settings** (usually auto-detected)
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live!

### Post-Deployment

- ✅ Your site will have a `*.vercel.app` URL
- ✅ You can add a custom domain in Project Settings
- ✅ Every push to main branch auto-deploys
- ✅ Preview deployments for pull requests

## Local Testing

Before deploying, test your production build locally:

```bash
npm run build
npm run preview
```

Visit `http://localhost:3000` to see the production build.

## Environment Variables

If you need environment variables:

1. **Local Development**: Create `.env.local` file
2. **Vercel**: Add in Project Settings → Environment Variables
3. **Access in Code**: Use `import.meta.env.VITE_YOUR_VAR`

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Run `npm run build` locally to test

### Routing Issues
- The `vercel.json` includes SPA routing rules
- All routes redirect to `index.html` for client-side routing

### Performance
- Assets are automatically optimized by Vercel
- Static assets are cached with long TTL
- Check Vercel Analytics for performance metrics

## Continuous Deployment

Vercel automatically:
- Deploys on every push to main branch
- Creates preview deployments for pull requests
- Provides deployment URLs for each commit

## Custom Domain

1. Go to Project Settings → Domains
2. Add your domain
3. Follow DNS configuration instructions
4. SSL certificate is automatically provisioned

