# GitHub Actions CI/CD Setup

## Overview

This project uses GitHub Actions for:
- ✅ Automated testing on every push
- ✅ Code quality checks (ESLint)
- ✅ Automatic deployment (when configured)

## How It Works

### On Every Push:
1. Code is checked out
2. Dependencies installed
3. Law files parsed
4. ESLint checks code quality
5. All 32 tests run
6. Production build created
7. Build artifacts saved

### On Pull Requests:
- Same checks as push
- Must pass before merging allowed
- Status checks displayed in PR

## Current Status

**Test Results:** 32/32 passing ✅  
**Build Status:** Passing ✅  
**Lint Status:** 47 warnings (no errors) ⚠️

## Deployment (Optional)

To enable automatic deployment, add these secrets to your GitHub repository:

### For Netlify:
1. Go to Netlify → Site Settings → General → Site Details
2. Copy "Site ID"
3. Go to Netlify → User Settings → Applications → Personal Access Tokens
4. Generate new token
5. In GitHub repo → Settings → Secrets and variables → Actions
6. Add:
   - `NETLIFY_AUTH_TOKEN` - Your Netlify token
   - `NETLIFY_SITE_ID` - Your site ID

### For Vercel:
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in project directory
3. Get token from Vercel dashboard
4. Add `VERCEL_TOKEN` secret to GitHub

Then uncomment the deploy section in `.github/workflows/ci.yml`

## Monitoring

View workflow runs:
1. GitHub repo → Actions tab
2. Click on a workflow run
3. View logs for each step
4. Download build artifacts if needed

## Troubleshooting

### Tests Failing?
- Run locally: `npm run test:run`
- Check which test failed
- Fix the issue
- Push again

### Build Failing?
- Run locally: `npm run build`
- Check error message
- Usually TypeScript or import issues

### ESLint Errors?
- Run: `npm run lint`
- Fix reported issues
- Or run: `npm run lint:fix` for auto-fixable issues

## Manual Deployment

If you prefer manual deployment:

```bash
# Build locally
 npm run build

# Deploy dist/ folder to your hosting provider
# Upload to Netlify, Vercel, or your server
```
