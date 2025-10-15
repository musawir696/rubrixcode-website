# Vercel Manual Setup Instructions

## ⚠️ Important: Manual Configuration Required

Since your build works locally and on Netlify, we need to configure Vercel manually in the dashboard.

## Step-by-Step Setup

### 1. Project Settings in Vercel Dashboard

Go to your project in Vercel → **Settings** → **General**

Configure these settings:

**Framework Preset:** `Other`

**Root Directory:** `.` (leave empty or put a dot)

**Build & Development Settings:**
- **Build Command:** `npm run build`
- **Output Directory:** `main-files/vie_gatsby/public`
- **Install Command:** `npm install`

### 2. Environment Variables

Go to **Settings** → **Environment Variables**

Add these variables (for Production, Preview, and Development):

```
GATSBY_TELEMETRY_DISABLED = 1
GENERATE_SOURCEMAP = false
NODE_VERSION = 18.x
```

### 3. Node.js Version

Go to **Settings** → **General** → scroll to **Node.js Version**

Select: **18.x**

### 4. Redeploy

After making these changes:
1. Go to **Deployments** tab
2. Click the three dots (**...**) on the latest deployment
3. Click **Redeploy**
4. Select **Use existing Build Cache: NO**
5. Click **Redeploy**

## If Still Failing - Alternative Approach

If the above doesn't work, try this:

### Option A: Change Root Directory

In Vercel Dashboard → Settings → General:
- **Root Directory:** `main-files/vie_gatsby`
- **Build Command:** `npm install && npm run build`
- **Output Directory:** `public` (just `public`, not the full path)

### Option B: Use Build Script

Keep vercel.json minimal and let the root package.json handle it.

The current setup should work with:
- Root package.json has: `"build": "cd main-files/vie_gatsby && npm install && npm run build"`
- Vercel runs: `npm run build` from root
- Output: `main-files/vie_gatsby/public`

## Debugging Steps

### 1. Check Build Logs
In Vercel Dashboard:
- Go to **Deployments**
- Click on the failed deployment
- Read the **Build Logs**
- Look for the specific error message

### 2. Common Error Patterns

**"Error: No Output Directory"**
- Fix: Set Output Directory to `main-files/vie_gatsby/public`

**"Module not found"**
- Fix: Make sure dependencies are in `main-files/vie_gatsby/package.json`

**"Build script not found"**
- Fix: Verify the build command in Settings matches the package.json script

**"Command failed with exit code 1"**
- This is generic - check the full build log for the actual error

### 3. Test Locally

Before redeploying, test locally:

```bash
# From project root
npm run build

# This should:
# 1. cd into main-files/vie_gatsby
# 2. Run npm install
# 3. Run gatsby build
# 4. Create files in main-files/vie_gatsby/public
```

If this works locally, it should work on Vercel with the same commands.

## What's Different from Netlify?

- **Netlify** auto-detects Gatsby and looks for it in subdirectories
- **Vercel** needs explicit configuration for nested projects
- Our setup tells Vercel exactly where to find and build the project

## Need More Help?

**Share with me:**
1. Screenshot of Vercel build logs (the error part)
2. Screenshot of your Vercel project settings (Build & Development Settings section)
3. The specific error message

**Then I can provide a more specific fix!**

## Quick Reference

| Setting | Value |
|---------|-------|
| Framework | Other |
| Root Directory | `.` |
| Build Command | `npm run build` |
| Output Directory | `main-files/vie_gatsby/public` |
| Install Command | `npm install` |
| Node.js Version | 18.x |

---

After configuring these settings, click **Redeploy** and it should work! 🚀

