# Setting Up Pages CMS with GitHub App on Vercel

This guide walks you through setting up Pages CMS for The Costello Law Group website using a GitHub App deployed on Vercel.

## Overview

Pages CMS is a free, open-source CMS that reads and writes content directly to your GitHub repository. Unlike TinaCMS or Sanity, it requires no additional services beyond a simple GitHub App.

## Prerequisites

- GitHub account with access to the repository
- Vercel account (free tier works)
- Your website repository: `gazelleryanwalker/the-poop-build`

## Step 1: Create a GitHub App

1. Go to GitHub Settings → Developer settings → GitHub Apps → **New GitHub App**
   - URL: https://github.com/settings/apps/new

2. **Fill in the App Details:**

   **GitHub App name:** `pages-cms-costello-law` (must be unique)
   
   **Homepage URL:** `https://your-pages-cms-app.vercel.app` (you'll get this from Vercel)
   
   **Callback URL:** `https://your-pages-cms-app.vercel.app/api/auth/callback`
   
   **Setup URL:** Leave empty
   
   **Webhook:** Uncheck "Active"

3. **Set Repository Permissions:**
   - Contents: **Read and write**
   - Metadata: **Read-only**
   - Pull requests: **Read and write**

4. **Set User Permissions:** All can be **No access**

5. **Where can this GitHub App be installed?**
   - Select **Only on this account**

6. Click **Create GitHub App**

7. **After creation, you'll see the App ID** - save this number

8. **Generate a Private Key:**
   - Scroll down to "Private keys" section
   - Click **Generate a private key**
   - A `.pem` file will download - save this securely

9. **Install the App to Your Repository:**
   - Click **Install App** in the left sidebar
   - Select your account
   - Choose **Only select repositories**
   - Select `gazelleryanwalker/the-poop-build`
   - Click **Install**

## Step 2: Deploy Pages CMS to Vercel

1. **Clone the Pages CMS repository:**
   ```bash
   git clone https://github.com/pages-cms/pages-cms.git
   cd pages-cms
   ```

2. **Push to Your Own GitHub Repository:**
   ```bash
   # Create a new repo on GitHub called "pages-cms-app"
   git remote set-url origin https://github.com/gazelleryanwalker/pages-cms-app.git
   git push -u origin main
   ```

3. **Deploy to Vercel:**
   - Go to https://vercel.com
   - Click **New Project**
   - Import your `pages-cms-app` repository
   - Leave all defaults as-is
   - Click **Deploy**

4. **Once deployed, note your Vercel app URL:**
   - Example: `https://pages-cms-app.vercel.app`

## Step 3: Configure Environment Variables in Vercel

1. In your Vercel dashboard, go to your Pages CMS project
2. Go to **Settings** → **Environment Variables**
3. Add the following variables:

   **GITHUB_APP_ID**
   - Value: The App ID from Step 1.7
   
   **GITHUB_PRIVATE_KEY**
   - Value: The entire contents of the `.pem` file from Step 1.8
   - Copy the entire text including `-----BEGIN RSA PRIVATE KEY-----` and `-----END RSA PRIVATE KEY-----`
   
   **GITHUB_INSTALLATION_ID** (optional, Pages CMS can auto-detect)
   - Find this in the GitHub App installation URL
   - URL format: `https://github.com/settings/installations/{INSTALLATION_ID}`

4. **Redeploy** the Pages CMS app after adding environment variables:
   - Go to **Deployments** tab
   - Click the three dots on the latest deployment
   - Click **Redeploy**

## Step 4: Update GitHub App Callback URL

1. Go back to GitHub Settings → Developer settings → GitHub Apps
2. Select your app (`pages-cms-costello-law`)
3. Update the following URLs with your actual Vercel URL:
   - **Homepage URL:** `https://pages-cms-app.vercel.app`
   - **Callback URL:** `https://pages-cms-app.vercel.app/api/auth/callback`
4. Click **Save changes**

## Step 5: Access Pages CMS

1. Navigate to your Pages CMS app: `https://pages-cms-app.vercel.app`
2. Click **Sign in with GitHub**
3. Authorize the GitHub App
4. Select the `gazelleryanwalker/the-poop-build` repository
5. You should now see your content collections!

## Using Pages CMS

### Content Collections Available

Based on the `.pages.yml` configuration, you can edit:

- **Pages** - Website pages with hero sections
- **Blog Posts** - Articles and legal news
- **Practice Areas** - Legal service offerings
- **Testimonials** - Client reviews
- **Case Results** - Settlement outcomes
- **Settings** - Site-wide configuration

### Editing Content

1. Log into Pages CMS
2. Select a collection from the sidebar
3. Click on an item to edit or click **New** to create
4. Make your changes in the editor
5. Click **Save** to commit changes to GitHub
6. Vercel will automatically rebuild and deploy your site

### Content File Structure

Content is stored in the repository at:
```
content/
├── pages/              # Website pages
├── posts/              # Blog posts (.mdx files)
├── practice-areas/     # Practice area descriptions
├── testimonials/       # Client testimonials (.json files)
├── case-results/       # Case outcomes (.json files)
└── settings/           # Site settings (.json files)
```

## Troubleshooting

### "Authentication Failed" Error
- Verify the GITHUB_APP_ID is correct
- Check that GITHUB_PRIVATE_KEY includes the full key text
- Ensure the GitHub App is installed on your repository

### "Repository Not Found" Error
- Verify the GitHub App has access to your repository
- Check that Contents permission is set to "Read and write"

### Changes Not Appearing on Site
- Check Vercel deployment logs
- Ensure the main website is deployed and connected to the repository
- Verify that content files are in the correct directory structure

## Security Notes

- Never share your private key (`.pem` file)
- Store the `.pem` file securely - you cannot re-download it
- Only install the GitHub App on repositories you need to manage
- Limit team access to Vercel project to authorized users only

## Support

- Pages CMS Documentation: https://pagescms.org/docs
- GitHub Apps Documentation: https://docs.github.com/en/apps
- Vercel Documentation: https://vercel.com/docs

## Next Steps

After setup, you can:
- Customize the `.pages.yml` configuration to add more fields
- Add team members to the GitHub organization
- Set up custom domain for your Pages CMS instance
- Configure content preview URLs in Vercel
