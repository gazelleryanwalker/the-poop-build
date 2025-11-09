# Costello Law Group Website

A modern, high-performance website for The Costello Law Group built with Next.js 15 and **Tina CMS**.

## Features

- ✅ Multi-step contact form
- ✅ Google Reviews integration
- ✅ **Tina CMS for content management** (Visual Editing)
- ✅ Responsive design with Tailwind CSS
- ✅ Framer Motion animations
- ✅ Blog system
- ✅ Practice area pages
- ✅ Attorney profiles
- ✅ Case results showcase

## Tech Stack

- **Framework:** Next.js 15.2.4
- **CMS:** Tina CMS 2.9.1 (Replaces Sanity)
- **Styling:** Tailwind CSS 4.1.9
- **UI Components:** Radix UI
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Email:** Resend

## Setup Instructions

### 1. Install Dependencies

```bash
npm install --legacy-peer-deps
```

### 2. Configure Environment Variables

Your `.env.local` file should contain:

```env
# Tina CMS Configuration
NEXT_PUBLIC_TINA_CLIENT_ID=f262313b-8c9d-4f93-a387-b87565a285dd
NEXT_PUBLIC_TINA_BRANCH=main
NEXT_PUBLIC_TINA_API_URL=https://content.tinajs.io

# Get your read-only token from Tina Cloud
# Visit: https://app.tina.io/projects/f262313b-8c9d-4f93-a387-b87565a285dd/overview
# Click "Tokens" → Generate Read-Only Token
TINA_TOKEN=your-read-only-token-here

# Email Configuration (Resend)
RESEND_API_KEY=your-resend-api-key

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://thecostellolawgroup.com
```

### 3. Get Tina CMS Token

1. Visit your Tina Cloud project: https://app.tina.io/projects/f262313b-8c9d-4f93-a387-b87565a285dd/overview
2. Click on **"Tokens"** in the sidebar
3. Generate a **Read-Only Token** for production
4. Add it to your `.env.local` file as `TINA_TOKEN`

### 4. Build Tina CMS

Once you have the token configured:

```bash
npm run build
```

This will:
- Generate the Tina CMS admin interface in `/public/admin`
- Create the necessary GraphQL schema
- Index your content files

### 5. Run Development Server

```bash
npm run dev
```

Visit:
- **Website**: http://localhost:3000
- **Tina CMS Admin**: http://localhost:3000/admin

## Accessing Tina CMS

### Development
- **Local Admin**: http://localhost:3000/admin
- **Visual Editing**: Click "Edit with Tina" on any page

### Production
- **Live Admin**: https://thecostellolawgroup.com/admin
- **Visual Editing**: Available on the live site for authenticated users

### Tina Cloud Dashboard
- **Project Dashboard**: https://app.tina.io/projects/f262313b-8c9d-4f93-a387-b87565a285dd/overview
- Manage users, tokens, and deployment settings

## Content Management

All content is managed through Tina CMS at `/admin` or via visual editing:

- **Homepage** - Hero, stats, practice areas, testimonials
- **Blog Posts** - Articles and legal updates
- **Practice Areas** - Service descriptions
- **Attorneys** - Team member profiles
- **Case Results** - Success stories
- **Site Settings** - Contact info, social media, branding

## Content Structure

```
content/
├── pages/
│   └── homepage.json        # Homepage content
├── posts/
│   └── *.mdx               # Blog posts
├── practice-areas/
│   └── *.mdx               # Practice area pages
├── attorneys/
│   └── *.mdx               # Attorney profiles
├── case-results/
│   └── *.mdx               # Case result stories
└── settings/
    └── site.json            # Site-wide settings
```

## Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_TINA_CLIENT_ID`
   - `NEXT_PUBLIC_TINA_BRANCH`
   - `NEXT_PUBLIC_TINA_API_URL`
   - `TINA_TOKEN` (Read-Only Token from Tina Cloud)
   - `RESEND_API_KEY`
4. Deploy

### Build Command for Vercel

The build command is already configured in `package.json`:

```bash
npm run build
```

This runs:
1. `tinacms build` - Generates Tina admin
2. `next build` - Builds Next.js app

### Configure Custom Domain

Add these DNS records to your domain registrar:

**For Apex Domain (thecostellolawgroup.com):**
- Type: A
- Name: @
- Value: 76.76.21.21

**For WWW Subdomain:**
- Type: CNAME
- Name: www
- Value: cname.vercel-dns.com

## Development Workflow

1. **Edit Content Locally**:
   ```bash
   npm run dev
   ```
   Open http://localhost:3000/admin

2. **Edit Content Visually**:
   - Visit any page
   - Click "Edit with Tina" (if logged in to Tina Cloud)
   - Edit content directly on the page

3. **Commit Changes**:
   ```bash
   git add content/
   git commit -m "Update content"
   git push
   ```

4. **Deploy**:
   - Vercel auto-deploys on push to main branch
   - Or manually deploy via Vercel dashboard

## Troubleshooting

### "Client not configured properly" error

Make sure you have:
1. Added `TINA_TOKEN` to `.env.local`
2. The token is a valid Read-Only Token from Tina Cloud
3. Restarted your dev server after adding the token

### Content not showing

1. Check that content files exist in `/content/` directories
2. Verify JSON/MDX syntax is valid
3. Check browser console for errors
4. Try rebuilding: `npm run build`

### Admin page not loading

1. Ensure Tina build completed successfully
2. Check that `/public/admin/index.html` exists
3. Clear browser cache and try again

## Getting Help

- **Tina CMS Docs**: https://tina.io/docs/
- **Tina Cloud Dashboard**: https://app.tina.io/projects/f262313b-8c9d-4f93-a387-b87565a285dd
- **Next.js Docs**: https://nextjs.org/docs
- **Support**: Contact the development team

## Migration Notes

This project has been migrated from Sanity CMS to Tina CMS:
- ✅ All Sanity dependencies removed
- ✅ Content structure preserved
- ✅ Visual editing enabled
- ✅ File-based content (Git-backed)
- ✅ Tina Cloud integration configured

# Trigger deployment with admin page
