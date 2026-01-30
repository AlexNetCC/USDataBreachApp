# Data Breach Law Navigator - Setup Guide

## What I Fixed For You

1. **Updated package.json** - Added all required dependencies (React, Vite, TypeScript, etc.)
2. **Generated laws.json** - Created the database file from your 52 state law files
3. **Added npm scripts** - Created easy commands to run your app

## How to Run Your App Locally

### Step 1: Open Terminal
- **On Mac**: Open the "Terminal" app
- **On Windows**: Open "Command Prompt" or "PowerShell"
- **Navigate to your project folder**:
  ```
  cd path/to/USDataBreachApp
  ```

### Step 2: Install Dependencies (One-time only)
```bash
npm install
```
This downloads all the code libraries your app needs. It takes 1-2 minutes.

### Step 3: Start the App
```bash
npm run dev
```

This will:
- Generate the laws.json file (if needed)
- Start a local web server
- Show you a URL like: `http://localhost:3000`

### Step 4: Open in Browser
Open your web browser and go to: **http://localhost:3000**

Your app should now load! 🎉

## To Stop the App
Press `Ctrl+C` in the terminal window where the app is running.

## If You Make Changes to State Law Files

If you update any `.md` files in the `raw-laws/` folder, regenerate the database:
```bash
npm run parse-laws
```

## Deploying to the Web

To deploy your app so others can access it online:

### Option 1: Netlify (Easiest - Free)
1. Go to https://netlify.com
2. Sign up for free
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click "Deploy"

### Option 2: Vercel (Also Easy - Free)
1. Go to https://vercel.com
2. Sign up for free
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Build command: `npm run build`
6. Output directory: `dist`
7. Click "Deploy"

### Option 3: GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## Common Issues

### "Port 3000 is already in use"
Another app is using that port. Either:
- Close the other app
- Or change the port in `vite.config.ts` (line 9) to a different number like 3001

### "Failed to fetch laws.json"
Run this command:
```bash
npm run parse-laws
```

### App is slow
The laws.json file is large (836KB). This is normal for the first load. After that, your browser caches it.

## Need Help?

The app is now properly configured! If you have questions:
- Check the browser console (F12) for error messages
- Make sure you're running `npm run dev` before opening the browser
- The app must be accessed via http://localhost:3000, not by opening index.html directly

## What's Next?

Your app is ready to use! Consider:
- Adding more state laws as they update
- Customizing the design/branding
- Adding the features from the comprehensive review document
