# Tina CMS Setup Guide

## Quick Start - Getting Your Tina Token

Your Tina CMS project is already created and configured! You just need to get your authentication token to start managing content.

### Step 1: Access Your Tina Cloud Project

Visit your project dashboard:
**https://app.tina.io/projects/f262313b-8c9d-4f93-a387-b87565a285dd/overview**

### Step 2: Generate a Read-Only Token

1. In the Tina Cloud dashboard, click **"Tokens"** in the left sidebar
2. Click **"New Token"** or **"Generate Token"**
3. Select **"Read-Only Token"** (for production) or **"Read/Write Token"** (for development)
4. Give it a name like "Production Site" or "Development"
5. Click **"Create Token"**
6. **Copy the token immediately** - you won't be able to see it again!

### Step 3: Add Token to Your Project

Add the token to your `.env.local` file:

```env
TINA_TOKEN=your-token-here
```

### Step 4: Build and Run

```bash
# Build Tina CMS admin
npm run build

# Start development server
npm run dev
```

## Accessing the Admin Interface

Once your token is configured and you've built the project:

### Local Development
- **Admin URL**: http://localhost:3000/admin
- **Website**: http://localhost:3000

### Production
- **Admin URL**: https://thecostellolawgroup.com/admin  
- **Website**: https://thecostellolawgroup.com

## Visual Editing

Tina CMS provides visual editing capabilities:

1. Visit any page on your site
2. If logged in to Tina Cloud, you'll see an "Edit with Tina" button
3. Click it to edit content directly on the page
4. Changes are saved to your Git repository

## Content Management Workflow

### Editing Content

1. **Via Admin Interface**:
   - Go to `/admin`
   - Navigate to the content type (Homepage, Blog Posts, etc.)
   - Edit fields
   - Click "Save"

2. **Via Visual Editor**:
   - Visit a page on your site
   - Click "Edit with Tina"
   - Edit content inline
   - Changes save automatically

### Publishing Changes

All content changes are stored in your Git repository in the `/content` directory. To publish:

1. Commit changes:
   ```bash
   git add content/
   git commit -m "Update homepage content"
   git push
   ```

2. Vercel automatically deploys the changes

## Content Structure

Your content is organized in these folders:

```
content/
├── pages/
│   └── homepage.json         # Homepage sections and content
├── posts/
│   └── *.mdx                 # Blog posts (Markdown with frontmatter)
├── practice-areas/
│   └── *.mdx                 # Practice area descriptions
├── attorneys/
│   └── *.mdx                 # Attorney profiles
├── case-results/
│   └── *.mdx                 # Case results and success stories
└── settings/
    └── site.json             # Site-wide settings (logo, contact info, etc.)
```

## What You Can Edit

### Homepage (`content/pages/homepage.json`)
- Hero section (heading, subheading, CTA buttons)
- Expertise badges
- Statistics section
- Practice areas preview
- Testimonials
- Contact form section
- Final CTA section

### Blog Posts (`content/posts/*.mdx`)
- Title, excerpt, featured image
- Author and publish date
- Category
- Full post content (Markdown)

### Practice Areas (`content/practice-areas/*.mdx`)
- Title and description
- Icon and images
- Full content (Markdown)
- Display order

### Attorneys (`content/attorneys/*.mdx`)
- Name, title/position
- Photo
- Contact info (email, phone)
- Biography (Markdown)

### Case Results (`content/case-results/*.mdx`)
- Title
- Settlement/verdict amount
- Case type and date
- Description (Markdown)
- Featured flag

### Site Settings (`content/settings/site.json`)
- Site name and logo
- Contact information (phone, email, address)
- Social media links
- Brand colors

## Common Tasks

### Adding a New Blog Post

1. Go to `/admin`
2. Click "Blog Posts" in the sidebar
3. Click "Create New"
4. Fill in the fields:
   - Title
   - Excerpt (short description)
   - Featured Image
   - Author
   - Category
   - Body content
5. Click "Save"

### Editing the Homepage

1. Go to `/admin`
2. Click "Homepage" in the sidebar
3. Edit any section:
   - Hero section
   - Statistics
   - Practice areas
   - Testimonials
4. Click "Save"

### Changing Contact Information

1. Go to `/admin`
2. Click "Site Settings" in the sidebar
3. Update contact info:
   - Phone number
   - Email address
   - Physical address
   - Social media links
4. Click "Save"

### Adding a New Practice Area

1. Go to `/admin`
2. Click "Practice Areas" in the sidebar
3. Click "Create New"
4. Fill in:
   - Title
   - Description
   - Icon name (e.g., "Car", "Scale", "Shield")
   - Display order
   - Full content
5. Click "Save"

## Troubleshooting

### "Unauthorized" or "401" errors

**Problem**: Token is missing or invalid

**Solution**:
1. Go to https://app.tina.io/projects/f262313b-8c9d-4f93-a387-b87565a285dd
2. Generate a new token
3. Update `.env.local` with the new token
4. Restart your dev server: `npm run dev`

### Admin page shows 404

**Problem**: Tina hasn't been built yet

**Solution**:
```bash
npm run build
```

### Changes not appearing on the site

**Problem**: Need to rebuild after content changes

**Solution**:
1. In development: Just refresh the page
2. In production: Commit and push changes:
   ```bash
   git add content/
   git commit -m "Update content"
   git push
   ```

### Can't see "Edit with Tina" button

**Problem**: Not logged in to Tina Cloud

**Solution**:
1. Go to https://app.tina.io
2. Log in with your Tina account
3. Return to your site
4. The edit button should now appear

## User Management

To add team members who can edit content:

1. Go to your Tina Cloud dashboard
2. Click "Users" in the sidebar
3. Click "Invite User"
4. Enter their email address
5. Set their role (Admin or Editor)
6. Send invite

They'll receive an email with instructions to join.

## Support Resources

- **Tina CMS Documentation**: https://tina.io/docs/
- **Your Project Dashboard**: https://app.tina.io/projects/f262313b-8c9d-4f93-a387-b87565a285dd
- **Tina Community**: https://discord.com/invite/zumN63Ybpf
- **Next.js Documentation**: https://nextjs.org/docs

## Important Links

- **Tina Cloud Project**: https://app.tina.io/projects/f262313b-8c9d-4f93-a387-b87565a285dd/overview
- **Local Admin**: http://localhost:3000/admin (development)
- **Production Admin**: https://thecostellolawgroup.com/admin (once deployed)

---

## Next Steps

1. ✅ Get your Tina token from the dashboard
2. ✅ Add it to `.env.local`
3. ✅ Run `npm run build`
4. ✅ Run `npm run dev`
5. ✅ Visit http://localhost:3000/admin
6. ✅ Start editing content!

Your website is ready to go live! All content is managed through Tina CMS, and changes are version-controlled through Git.
