# AI Coding Agent Instructions - The Costello Law Group

## Project Architecture

This is a **Next.js 15 law firm website** with **Pages CMS** (headless CMS integrated with GitHub). All content is stored as files in the `content/` directory and managed directly through GitHub.

- **Pages CMS**: File-based CMS via GitHub repository
- **Content Storage**: YAML frontmatter + Markdown for content, JSON for structured data
- **Data Layer**: `lib/pages-client.ts` reads content directly from `content/` directory
- **Server Actions**: Email handling via Resend API in `app/actions/`
- **Deployment**: Automatic CI/CD via Vercel on git commits

## Critical Development Workflows

### Build & Development
```bash
# Local development (no CMS server needed)
pnpm dev  # Runs: next dev

# Build for production
pnpm build  # Runs: next build (generates static pages from content files)
```

### Content Management Pattern
- **Always commit content changes to GitHub** - file system is the source of truth
- **Markdown files** in `content/posts/`, `content/practice-areas/`, `content/pages/` use YAML frontmatter
- **JSON files** in `content/testimonials/`, `content/case-results/` for structured data
- **Client queries** in `lib/pages-client.ts` use file system access via Node.js `fs` module
- **Revalidation**: All pages use `export const revalidate = 60` for ISR

## Project-Specific Patterns

### Component Architecture
- **Page-Server Split**: Server components (`page.tsx`) fetch data, client components (`page-client.tsx`) handle interactivity
- **Server Actions**: Contact forms use `"use server"` actions with Resend email integration
- **UI Components**: Extensive shadcn/ui component library in `components/ui/`

### Data Flow
```typescript
// Typical pattern - server component fetches from pages-client
import { getAllPosts, getPageBySlug } from "@/lib/pages-client"

export default async function BlogPage() {
  const posts = await getAllPosts()  // Reads content/posts/*.md
  return <BlogPageClient posts={posts} />
}
```

### Content Fetching (`lib/pages-client.ts`)

**Available functions:**
- `getAllPosts()` - Reads all markdown from `content/posts/`, returns array
- `getPostBySlug(slug)` - Reads single post file, returns parsed markdown + frontmatter
- `getPageBySlug(slug)` - Reads single page file from `content/pages/`
- `getAllPracticeAreas()` - Reads practice area markdown files, sorted by order
- `getAllTestimonials()` - Reads JSON testimonials from `content/testimonials/`
- `getAllCaseResults()` - Reads JSON case results from `content/case-results/`
- `getSiteSettings()` - Reads JSON settings from `content/settings/`

**All functions handle errors gracefully:**
- Missing files return `null` or empty arrays
- Parsing errors are logged to console
- Frontmatter parsed via `gray-matter` package

### Content File Structure
```
content/
├── pages/             # Homepage, about, etc. (Markdown with frontmatter)
├── posts/             # Blog articles (Markdown with frontmatter)
├── practice-areas/    # Practice area pages (Markdown with frontmatter)
├── testimonials/      # Client testimonials (JSON files)
├── case-results/      # Case settlements (JSON files)
└── settings/          # Site settings (JSON files)
```

### Frontmatter Format (YAML)
```markdown
---
title: Post Title
slug: post-slug
date: 2024-01-20
author: Joshua Costello, Esq.
category: Personal Injury
tags:
  - tag1
  - tag2
seo_title: SEO Title
seo_description: SEO description
---

# Markdown Content Goes Here
```

### SEO & Metadata
- **Dynamic Metadata**: Each page extracts `seo_title` and `seo_description` from frontmatter
- **Structured Data**: JSON-LD schema in root layout for LocalBusiness
- **Sitemap**: Auto-generated at `app/sitemap.ts` from content files

## Integration Points

### Email System
- **Resend API**: Server actions in `app/actions/` handle contact form submissions
- **Email Templates**: HTML embedded in server action functions
- **Recipients**: Configured environment variables for email destinations

### GitHub Integration
- **Source of Truth**: All content lives in GitHub `content/` directory
- **Commit Triggers**: Every git commit triggers Vercel rebuild
- **Version Control**: Full git history for all content changes

### Vercel Deployment
- **Automatic**: Push to main branch → Vercel builds → Website updates
- **Build Process**: `next build` generates static pages from content files
- **ISR**: Incremental Static Regeneration with 60-second revalidate

### Environment Configuration
```bash
# Required for email
RESEND_API_KEY=your_resend_api_key

# Optional for media hosting
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_SECRET=
```

## Critical Conventions

### File Organization
- **Content**: Edit in GitHub via web editor or local git. Always commit to main.
- **Actions**: All server actions in `app/actions/` directory
- **Components**: Shared UI in `components/`, page-specific in respective app directories
- **Styles**: Tailwind CSS + CSS modules as needed

### Content Editing Workflow
1. **GitHub Web Editor**: Go to file in `content/` → Click ✏️ → Commit changes
2. **Local Git**: Clone repo → Edit content files → Push to main
3. **Result**: Vercel automatically rebuilds and deploys within 5-10 minutes

### Slug Generation
- **Practice Areas**: Slug = filename without `.md`/`.mdx` (e.g., `car-accidents.md` → `car-accidents`)
- **Blog Posts**: Extract from `slug:` field in frontmatter
- **Pages**: Extract from `slug:` field in frontmatter

### Error Handling
- **Missing Content**: All data fetching returns empty arrays or null with console warnings
- **Build Configuration**: `eslint.ignoreDuringBuilds: true`, `typescript.ignoreBuildErrors: true`
- **Try/Catch**: All file operations wrapped with proper error logging

### Markdown Rendering
- **Blog Posts**: Use `dangerouslySetInnerHTML` with sanitized HTML
- **Parsing**: `gray-matter` extracts frontmatter, body rendered as HTML
- **Images**: Prefix with `/` for public folder (e.g., `/images/photo.jpg`)

## Development Commands

```bash
# Development (no CMS server needed)
pnpm dev          # Start Next.js dev server

# Production build
pnpm build        # Generate static site

# Run locally built site
pnpm start        # Start production server

# Type checking
pnpm lint         # ESLint check
```

## Key Files

- `.pages.yml` - CMS collection definitions
- `lib/pages-client.ts` - Content fetching from filesystem
- `app/page.tsx` - Homepage server component
- `app/page-client.tsx` - Homepage UI component
- `app/blog/[slug]/page.tsx` - Dynamic blog post routing
- `PAGES_CMS_QUICK_START.md` - User editing guide

## Legal Website Specifics

- **Practice Areas**: 11 areas (car accidents, truck accidents, slip & fall, etc.)
- **Blog Posts**: Multiple articles on legal topics
- **Case Results**: Tracked as JSON with settlement amounts
- **Testimonials**: Client feedback with ratings (1-5 stars)
- **Phone**: (954) 591-8099 (configured throughout site)
- **Service Areas**: Broward County, Florida

## Important Notes

- Content changes require **git commit** to GitHub
- Pages regenerate on each build (via ISR or on-demand)
- All content is **version controlled** in GitHub
- No database needed - filesystem is the CMS
- Vercel handles automatic deployment on commits

When modifying this codebase, remember that content is managed via GitHub commits to the `content/` directory, and the filesystem is the single source of truth.