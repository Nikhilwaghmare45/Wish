# Deploying Birthday Website to Render

This guide will help you deploy the Birthday Website for Mrunmayaa on Render.

## Prerequisites

1. A Render account (sign up at https://render.com)
2. This project pushed to a GitHub repository

## Step 1: Push to GitHub

First, push this entire project to a GitHub repository:

```bash
git init
git add .
git commit -m "Birthday website for Mrunmayaa"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

## Step 2: Create a New Web Service on Render

1. Go to https://dashboard.render.com
2. Click **"New +"** button
3. Select **"Web Service"**
4. Connect your GitHub account if you haven't already
5. Select the repository you just pushed

## Step 3: Configure the Web Service

Fill in the following details:

| Field | Value |
|-------|-------|
| **Name** | `Birthday-1` (or any name you prefer) |
| **Project** | Leave empty or select a project |
| **Environment** | Leave as default |
| **Language** | `Node` |
| **Branch** | `main` |
| **Region** | `Oregon (US West)` (or your preferred region) |
| **Root Directory** | Leave empty (use repository root) |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm run start` |

## Step 4: Environment Variables

No environment variables are required for this frontend-only app.

However, if you see any errors, you can add:

| Key | Value |
|-----|-------|
| `NODE_ENV` | `production` |

## Step 5: Deploy

1. Scroll down and select the **Free** plan
2. Click **"Create Web Service"**
3. Wait for the build and deployment to complete (usually 2-5 minutes)

## Step 6: Access Your Site

Once deployed, Render will provide you with a URL like:
- `https://birthday-1.onrender.com`

Share this URL with Mrunmayaa on her birthday!

## Troubleshooting

### Build Fails
- Make sure all files are pushed to GitHub
- Check that `package.json` exists in the root directory
- Verify the build command is exactly: `npm install && npm run build`

### Site Not Loading
- Wait a few minutes after deployment
- Check Render logs for any errors
- Make sure the start command is: `npm run start`

### Free Plan Limitations
- Free tier services spin down after 15 minutes of inactivity
- First request after spin-down may take 30+ seconds
- Consider upgrading to a paid plan for faster response times

## Quick Reference

```
Service Type: Web Service
Name: Birthday-1
Language: Node
Branch: main
Region: Oregon (US West)
Build Command: npm install && npm run build
Start Command: npm run start
```

## Need Help?

If you encounter issues, check:
1. Render Dashboard logs
2. Make sure GitHub repo is public or Render has access
3. Verify all image files are included in the repository

Enjoy celebrating Mrunmayaa's birthday! 🎂🎉
