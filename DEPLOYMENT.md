# Deployment Guide for Vercel

This guide will walk you through deploying your personal website to Vercel.

## Important Configuration Notes

This project is configured with:
- **Next.js 16.0.1** (pinned version to ensure consistent builds)
- **React 19.2.0** (pinned version)
- **Node.js >= 18.17.0** requirement specified in package.json
- Vercel deployment settings in `vercel.json`

These version specifications prevent deployment failures due to version mismatches.

## Prerequisites

- A GitHub, GitLab, or Bitbucket account
- A Vercel account (free - sign up at https://vercel.com)
- Node.js >= 18.17.0 installed locally

## Step-by-Step Deployment

### 1. Initialize Git Repository (if not already done)

```bash
cd personal-website
git init
git add .
git commit -m "Initial commit: Personal website"
```

### 2. Push to GitHub

Create a new repository on GitHub (https://github.com/new), then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 3. Deploy to Vercel

#### Option A: Using Vercel CLI (Recommended for quick setup)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy (run from the personal-website directory)
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (Choose your account)
# - Link to existing project? No
# - What's your project's name? (e.g., personal-website)
# - In which directory is your code located? ./
# - Want to override the settings? No
```

#### Option B: Using Vercel Dashboard

1. Go to https://vercel.com/new
2. Import your Git repository
3. Select your repository from the list
4. Vercel will auto-detect Next.js and configure everything
5. Click "Deploy"

### 4. Custom Domain (Optional)

Once deployed, you can add a custom domain:

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Environment Variables

This project doesn't currently use environment variables, but if you add any in the future:

1. Create a `.env.local` file locally (already in .gitignore)
2. Add the same variables in Vercel dashboard under Settings → Environment Variables

## Automatic Deployments

Once connected to Vercel:
- Every push to `main` branch triggers a production deployment
- Pull requests get preview deployments automatically
- You can see deployment status and logs in the Vercel dashboard

## Testing Locally Before Deployment

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Test production build locally
npm start
```

Visit http://localhost:3000 to preview.

## Troubleshooting

If you encounter issues:
1. Check the build logs in Vercel dashboard
2. Ensure all dependencies are in package.json
3. Verify the build succeeds locally with `npm run build`
4. Check Vercel's system status: https://vercel-status.com

## Next Steps

After deployment:
- Update your LinkedIn profile with your new URL
- Add the URL to your resume
- Share your site with potential employers or clients
- Monitor performance with Vercel Analytics (optional, but free)

## Support

- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- GitHub Issues: Create an issue in your repository
