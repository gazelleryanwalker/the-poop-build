# The Costello Law Group Website

A modern, professional website for The Costello Law Group - Personal Injury and Criminal Defense Attorneys serving Broward County, Florida.

## 🌐 Live Website

Visit: [https://www.thecostellolawgroup.com](https://www.thecostellolawgroup.com)

## 📋 Overview

This is a Next.js-based website featuring:
- Professional legal services presentation
- Practice areas showcase
- Blog/Industry news section
- Contact forms and career applications
- SEO optimized for local search
- Mobile-responsive design

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion
- **Analytics**: Vercel Analytics

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/gazelleryanwalker/the-poop-build.git
cd the-poop-build
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file (if needed):
```bash
cp .env.example .env
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🚀 Deployment

This site is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
3. Deploy!

### Build Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Content Management with Pages CMS

This website is configured to use [Pages CMS](https://pagescms.org) for content management.

### Setting Up Pages CMS

1. **Create a GitHub App** for Pages CMS following the [official instructions](https://github.com/pages-cms/pages-cms/#create-a-github-app)

2. **Deploy Pages CMS to Vercel**:
   - Fork or clone the Pages CMS repository
   - Deploy it to Vercel as a separate app
   - Configure environment variables with your GitHub App credentials

3. **Configuration File**: The `.pages.yml` file in the root directory defines the content structure with collections for:
   - Pages
   - Blog Posts
   - Practice Areas
   - Testimonials
   - Case Results
   - Site Settings

### Content Collections

The following content types are available for editing:

- **Pages** (`content/pages/`) - Website pages with hero sections and rich content
- **Blog Posts** (`content/posts/`) - Industry news and legal articles
- **Practice Areas** (`content/practice-areas/`) - Legal service offerings
- **Testimonials** (`content/testimonials/`) - Client reviews and feedback
- **Case Results** (`content/case-results/`) - Settlement outcomes and wins
- **Settings** (`content/settings/`) - Site-wide configuration

### Using Pages CMS

1. Navigate to your deployed Pages CMS application
2. Authenticate with GitHub
3. Select this repository
4. Edit content using the visual editor
5. Changes are committed directly to the repository
6. Vercel automatically rebuilds and deploys your site

## 📁 Project Structure

```
.
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── attorneys/         # Attorney profiles
│   ├── blog/              # Blog listing and posts
│   ├── careers/           # Careers page
│   ├── case-results/      # Case results page
│   ├── contact/           # Contact form
│   ├── practice-areas/    # Practice areas
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # UI component library
│   ├── footer.tsx        # Site footer
│   ├── navigation.tsx    # Main navigation
│   └── ...
├── content/              # Content files (managed by Pages CMS)
│   ├── pages/           # Page content
│   ├── posts/           # Blog posts
│   ├── practice-areas/  # Practice area content
│   ├── testimonials/    # Client testimonials
│   ├── case-results/    # Case outcome data
│   └── settings/        # Site settings
├── lib/                  # Utility functions
├── public/               # Static assets
├── styles/               # Global styles
├── .pages.yml           # Pages CMS configuration
├── next.config.mjs      # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## 🎨 Branding

- **Primary Color**: `#00A878` (Teal) - Main brand color for CTAs and accents
- **Secondary Color**: `#0A1628` (Navy) - Hero backgrounds and dark sections
- **Accent Color**: `#0066B2` (Blue) - Links and secondary CTAs

## 📧 Contact

**The Costello Law Group**
- Phone: (954) 591-8099
- Email: joshua@thecostellolawgroup.com
- Address: 5846 S Flamingo Rd. Ste. 520, Cooper City, FL 33330

## 📄 License

This project is private and proprietary to The Costello Law Group.

## 🔄 Recent Updates

- Removed TinaCMS dependencies for simpler deployment
- Removed Sanity CMS integration
- Configured for Pages CMS content management
- Streamlined build process for Vercel deployment
- Updated to Next.js 15 and React 19
