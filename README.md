# Costello Law Group Website

A modern, high-performance website for The Costello Law Group built with Next.js 15 and Sanity CMS.

## Features

- ✅ Multi-step contact form
- ✅ Google Reviews integration
- ✅ Sanity CMS for content management
- ✅ Responsive design with Tailwind CSS
- ✅ Framer Motion animations
- ✅ Blog system
- ✅ Practice area pages
- ✅ Attorney profiles
- ✅ Case results showcase

## Tech Stack

- **Framework:** Next.js 15.2.4
- **CMS:** Sanity.io
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

Create a `.env.local` file in the root directory:

```env
# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token

# Email Configuration (Resend)
RESEND_API_KEY=your-resend-api-key

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://thecostellolawgroup.com
```

### 3. Set Up Sanity CMS

1. Create a Sanity account at https://www.sanity.io
2. Create a new project
3. Copy the project ID to your `.env.local`
4. Generate an API token with write permissions
5. Add the token to your `.env.local`

### 4. Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000 to see the site.

### 5. Access Sanity Studio

Visit http://localhost:3000/studio to access the CMS.

## Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

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

## Content Management

All content can be managed through the Sanity Studio at `/studio`:

- Homepage content
- Practice areas
- Attorney profiles
- Blog posts
- Case results
- Site settings

## Support

For issues or questions, contact the development team.
