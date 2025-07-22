# Deployment Guide

## Vercel Deployment (Recommended)

1. **Connect Repository**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Build Settings**
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Environment Variables** (if using AI features)
   - Add any required environment variables in Vercel dashboard

4. **Deploy**
   - Click "Deploy"
   - Your app will be available at `https://your-project-name.vercel.app`

## Manual Build

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview the build locally
npm run preview
```

## Troubleshooting

### Common Issues:

1. **3D Model Not Loading**
   - Ensure `shirt_baked.glb` is in the `public` folder
   - Check browser console for 404 errors

2. **Assets Not Found**
   - Verify all images are in the `public` folder
   - Use absolute paths starting with `/` for public assets

3. **AI Features Not Working**
   - Check if backend service is running
   - Verify CORS settings on backend
   - Check network tab for API call errors

### Performance Optimization:

- The app uses lazy loading for 3D components
- Error boundaries prevent crashes
- Assets are preloaded for better UX