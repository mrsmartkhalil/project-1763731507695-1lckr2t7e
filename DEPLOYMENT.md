# Deployment Guide

Your Muhammad Afaq AI Portfolio is now ready to deploy! 🚀

## GitHub Repository

✅ **Repository Created**: https://github.com/mrsmartkhalil/project-1763731507695-1lckr2t7e

Your code is now on GitHub and ready for deployment!

## Deploy to Vercel (Recommended - Free)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project"
4. Import your repository: `mrsmartkhalil/project-1763731507695-1lckr2t7e`
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"
7. Done! Your site will be live in ~2 minutes

**Your live URL will be**: `https://project-1763731507695-1lckr2t7e.vercel.app`
(You can customize this domain in Vercel settings)

### Option 2: Deploy via CLI

```bash
# Install Vercel CLI globally (optional)
npm i -g vercel

# Deploy
npx vercel

# Follow the prompts:
# - Link to existing project or create new
# - Confirm settings
# - Deploy!

# For production deployment
npx vercel --prod
```

## Deploy to Netlify (Alternative)

1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy"

## Environment Variables

If you need to add environment variables:

### For Vercel:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add any required variables
4. Redeploy

### For Netlify:
1. Go to "Site settings" → "Environment variables"
2. Add your variables
3. Trigger a new deploy

## Custom Domain

### On Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### On Netlify:
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS

## Post-Deployment Checklist

After deployment, update these in your code:

1. **Update Social Links** in `components/Footer.tsx`:
   - Replace GitHub, LinkedIn, Twitter URLs with your actual profiles
   - Update email address

2. **Update Contact Email** in `app/page.tsx`:
   - Line 254: Change `mailto:contact@example.com` to your email

3. **Update Portfolio Data** in `data/portfolio.json`:
   - Replace sample projects with your real projects
   - Update blog posts with your content
   - Update project images and links

4. **Access Admin Panel**:
   - Visit: `https://your-domain.vercel.app/admin`
   - Start managing your content!

## Important Notes

- **Data Persistence**: The current setup uses JSON file storage. For production, consider:
  - Using a database (Supabase, MongoDB, etc.)
  - Or use Vercel's edge config for persistent data

- **Admin Security**: Add authentication to `/admin` before going live:
  - Use NextAuth.js
  - Or implement simple password protection

## Continuous Deployment

Both Vercel and Netlify offer automatic deployments:
- Every push to `main` branch triggers a new deployment
- Pull requests get preview deployments
- Rollback to previous versions anytime

## Monitoring

### Vercel Analytics:
- Enable in project settings
- Free tier includes basic analytics

### Netlify Analytics:
- Available as a paid add-on
- Or use Google Analytics (free)

## Support & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com

## Your Repository

📦 **GitHub**: https://github.com/mrsmartkhalil/project-1763731507695-1lckr2t7e

---

Need help? Check the README.md for more information about the project structure and features!
