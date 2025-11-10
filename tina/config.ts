import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    loadCustomStore: async () => {
      const pack = await import("next-tinacms-cloudinary");
      return pack.TinaCloudCloudinaryMediaStore;
    },
  },
  schema: {
    collections: [
      // Pages Collection
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Page Title",
            required: true,
          },
          {
            type: "string",
            name: "slug",
            label: "URL Slug",
            required: true,
          },
          {
            type: "rich-text",
            name: "content",
            label: "Page Content",
            isBody: true,
          },
          {
            type: "object",
            name: "seo",
            label: "SEO Settings",
            fields: [
              {
                type: "string",
                name: "title",
                label: "SEO Title",
              },
              {
                type: "string",
                name: "description",
                label: "SEO Description",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "keywords",
                label: "SEO Keywords (comma separated)",
              },
            ],
          },
        ],
      },
      // Blog Posts Collection
      {
        name: "post",
        label: "Blog Posts",
        path: "content/posts",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "slug",
            label: "URL Slug",
            required: true,
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Content",
            isBody: true,
          },
          {
            type: "image",
            name: "featured_image",
            label: "Featured Image",
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            options: ["Joshua Costello", "Staff"],
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: [
              "Personal Injury",
              "Auto Accidents",
              "Insurance Claims",
              "Criminal Defense",
              "Legal News",
            ],
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "datetime",
            name: "published_at",
            label: "Published Date",
          },
          {
            type: "boolean",
            name: "published",
            label: "Published",
          },
          {
            type: "object",
            name: "seo",
            label: "SEO Settings",
            fields: [
              {
                type: "string",
                name: "title",
                label: "SEO Title",
              },
              {
                type: "string",
                name: "description",
                label: "SEO Description",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "keywords",
                label: "SEO Keywords",
                list: true,
              },
            ],
          },
        ],
        ui: {
          router: ({ document }) => `/blog/${document._sys.filename}`,
        },
      },
      // Testimonials Collection
      {
        name: "testimonial",
        label: "Testimonials",
        path: "content/testimonials",
        format: "json",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Client Name",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Case Type",
          },
          {
            type: "string",
            name: "content",
            label: "Testimonial",
            ui: {
              component: "textarea",
            },
            required: true,
          },
          {
            type: "number",
            name: "rating",
            label: "Rating (1-5)",
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured",
          },
        ],
      },
      // Case Results Collection
      {
        name: "case_result",
        label: "Case Results",
        path: "content/case-results",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Case Title",
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Practice Area",
            options: [
              "Personal Injury",
              "Auto Accidents",
              "Insurance Claims",
              "Premises Liability",
              "Wrongful Death",
              "Criminal Defense",
            ],
          },
          {
            type: "string",
            name: "result",
            label: "Settlement/Verdict Amount",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Case Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured",
          },
        ],
      },
      // Practice Areas Collection
      {
        name: "practice_area",
        label: "Practice Areas",
        path: "content/practice-areas",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Practice Area Name",
            required: true,
          },
          {
            type: "string",
            name: "slug",
            label: "URL Slug",
            required: true,
          },
          {
            type: "string",
            name: "icon",
            label: "Icon Name",
          },
          {
            type: "string",
            name: "excerpt",
            label: "Short Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "rich-text",
            name: "content",
            label: "Full Description",
            isBody: true,
          },
          {
            type: "image",
            name: "image",
            label: "Featured Image",
          },
          {
            type: "number",
            name: "order",
            label: "Display Order",
          },
          {
            type: "object",
            name: "seo",
            label: "SEO Settings",
            fields: [
              {
                type: "string",
                name: "title",
                label: "SEO Title",
              },
              {
                type: "string",
                name: "description",
                label: "SEO Description",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
        ],
        ui: {
          router: ({ document }) => `/practice-areas/${document._sys.filename}`,
        },
      },
      // Team Members Collection
      {
        name: "team",
        label: "Team Members",
        path: "content/team",
        format: "json",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Full Name",
            required: true,
          },
          {
            type: "string",
            name: "position",
            label: "Position/Title",
            required: true,
          },
          {
            type: "image",
            name: "photo",
            label: "Profile Photo",
          },
          {
            type: "string",
            name: "email",
            label: "Email Address",
          },
          {
            type: "string",
            name: "phone",
            label: "Phone Number",
          },
          {
            type: "string",
            name: "bio",
            label: "Biography",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "social",
            label: "Social Media",
            fields: [
              {
                type: "string",
                name: "linkedin",
                label: "LinkedIn URL",
              },
              {
                type: "string",
                name: "twitter",
                label: "Twitter/X URL",
              },
            ],
          },
          {
            type: "number",
            name: "order",
            label: "Display Order",
          },
        ],
      },
      // FAQ Collection
      {
        name: "faq",
        label: "FAQ Items",
        path: "content/faq",
        format: "json",
        fields: [
          {
            type: "string",
            name: "question",
            label: "Question",
            required: true,
          },
          {
            type: "string",
            name: "answer",
            label: "Answer",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: [
              "General",
              "Personal Injury",
              "Car Accidents",
              "Workers Compensation",
              "Medical Malpractice",
              "Other",
            ],
          },
          {
            type: "number",
            name: "order",
            label: "Display Order",
          },
        ],
      },
      // Services Collection
      {
        name: "service",
        label: "Service Pages",
        path: "content/services",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Service Title",
            required: true,
          },
          {
            type: "string",
            name: "slug",
            label: "URL Slug",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Short Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "image",
            label: "Featured Image",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Service Content",
            isBody: true,
          },
          {
            type: "object",
            name: "seo",
            label: "SEO Settings",
            fields: [
              {
                type: "string",
                name: "title",
                label: "SEO Title",
              },
              {
                type: "string",
                name: "description",
                label: "SEO Description",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "keywords",
                label: "SEO Keywords",
              },
            ],
          },
        ],
        ui: {
          router: ({ document }) => `/services/${document._sys.filename}`,
        },
      },
      // Site Settings
      {
        name: "settings",
        label: "Site Settings",
        path: "content/settings",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "company",
            label: "Company Information",
            fields: [
              {
                type: "string",
                name: "name",
                label: "Company Name",
              },
              {
                type: "string",
                name: "tagline",
                label: "Tagline",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "contact",
            label: "Contact Information",
            fields: [
              {
                type: "string",
                name: "phone",
                label: "Phone Number",
              },
              {
                type: "string",
                name: "email",
                label: "Email Address",
              },
              {
                type: "string",
                name: "address",
                label: "Physical Address",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "social",
            label: "Social Media Links",
            fields: [
              {
                type: "string",
                name: "facebook",
                label: "Facebook URL",
              },
              {
                type: "string",
                name: "twitter",
                label: "Twitter/X URL",
              },
              {
                type: "string",
                name: "instagram",
                label: "Instagram URL",
              },
              {
                type: "string",
                name: "linkedin",
                label: "LinkedIn URL",
              },
              {
                type: "string",
                name: "youtube",
                label: "YouTube URL",
              },
            ],
          },
          {
            type: "object",
            name: "theme",
            label: "Theme Colors",
            fields: [
              {
                type: "string",
                name: "primary",
                label: "Primary Color (Teal)",
                ui: {
                  component: "color",
                },
              },
              {
                type: "string",
                name: "secondary",
                label: "Secondary Color (Navy)",
                ui: {
                  component: "color",
                },
              },
            ],
          },
        ],
      },
    ],
  },
});
