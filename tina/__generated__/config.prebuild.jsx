// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || "main",
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "mdx",
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "home") {
              return `/`;
            }
            return `/${document._sys.filename}`;
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Meta Description",
            required: true,
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "keywords",
            label: "Meta Keywords",
            description: "Comma-separated keywords for SEO"
          },
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              {
                type: "string",
                name: "badge",
                label: "Badge Text"
              },
              {
                type: "string",
                name: "heading",
                label: "Main Heading",
                required: true
              },
              {
                type: "string",
                name: "subheading",
                label: "Subheading",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "image",
                name: "image",
                label: "Hero Image"
              },
              {
                type: "object",
                name: "cta",
                label: "Call to Action",
                fields: [
                  {
                    type: "string",
                    name: "primaryText",
                    label: "Primary Button Text"
                  },
                  {
                    type: "string",
                    name: "primaryLink",
                    label: "Primary Button Link"
                  },
                  {
                    type: "string",
                    name: "secondaryText",
                    label: "Secondary Button Text"
                  },
                  {
                    type: "string",
                    name: "secondaryLink",
                    label: "Secondary Button Link"
                  }
                ]
              },
              {
                type: "object",
                name: "stats",
                label: "Statistics",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "value",
                    label: "Value"
                  },
                  {
                    type: "string",
                    name: "label",
                    label: "Label"
                  }
                ]
              }
            ]
          },
          {
            type: "rich-text",
            name: "body",
            label: "Page Content",
            isBody: true
          }
        ]
      },
      {
        name: "post",
        label: "Blog Posts",
        path: "content/posts",
        format: "mdx",
        ui: {
          router: ({ document }) => {
            return `/blog/${document._sys.filename}`;
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Meta Description",
            required: true,
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "keywords",
            label: "Meta Keywords",
            description: "Comma-separated keywords for SEO"
          },
          {
            type: "datetime",
            name: "date",
            label: "Published Date",
            required: true
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true
          },
          {
            type: "image",
            name: "image",
            label: "Featured Image"
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: [
              "Personal Injury",
              "Car Accidents",
              "Insurance Claims",
              "Legal Tips",
              "Case Results",
              "News"
            ]
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Post Content",
            isBody: true
          }
        ]
      },
      {
        name: "practiceArea",
        label: "Practice Areas",
        path: "content/practice-areas",
        format: "mdx",
        ui: {
          router: ({ document }) => {
            return `/services/${document._sys.filename}`;
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Meta Description",
            required: true,
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "keywords",
            label: "Meta Keywords"
          },
          {
            type: "string",
            name: "shortDescription",
            label: "Short Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "image",
            name: "icon",
            label: "Icon/Image"
          },
          {
            type: "number",
            name: "order",
            label: "Display Order"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Content",
            isBody: true
          }
        ]
      },
      {
        name: "caseResult",
        label: "Case Results",
        path: "content/case-results",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Case Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "caseType",
            label: "Case Type",
            options: [
              "Car Accident",
              "Truck Accident",
              "Motorcycle Accident",
              "Slip & Fall",
              "Premises Liability",
              "Wrongful Death",
              "Insurance Claim",
              "PIP Claim",
              "Criminal Defense"
            ]
          },
          {
            type: "string",
            name: "result",
            label: "Result Amount",
            required: true
          },
          {
            type: "string",
            name: "summary",
            label: "Case Summary",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "datetime",
            name: "date",
            label: "Case Date"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Full Case Description",
            isBody: true
          }
        ]
      },
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
            required: true
          },
          {
            type: "string",
            name: "caseType",
            label: "Case Type"
          },
          {
            type: "string",
            name: "content",
            label: "Testimonial",
            required: true,
            ui: {
              component: "textarea"
            }
          },
          {
            type: "number",
            name: "rating",
            label: "Rating (1-5)",
            required: true
          },
          {
            type: "datetime",
            name: "date",
            label: "Date"
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured on Homepage"
          }
        ]
      },
      {
        name: "settings",
        label: "Site Settings",
        path: "content/settings",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          {
            type: "object",
            name: "general",
            label: "General Settings",
            fields: [
              {
                type: "string",
                name: "siteName",
                label: "Site Name"
              },
              {
                type: "string",
                name: "siteDescription",
                label: "Site Description",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "image",
                name: "logo",
                label: "Logo"
              },
              {
                type: "image",
                name: "favicon",
                label: "Favicon"
              }
            ]
          },
          {
            type: "object",
            name: "contact",
            label: "Contact Information",
            fields: [
              {
                type: "string",
                name: "phone",
                label: "Phone Number"
              },
              {
                type: "string",
                name: "email",
                label: "Email Address"
              },
              {
                type: "string",
                name: "address",
                label: "Physical Address",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "string",
                name: "hours",
                label: "Business Hours",
                ui: {
                  component: "textarea"
                }
              }
            ]
          },
          {
            type: "object",
            name: "social",
            label: "Social Media",
            fields: [
              {
                type: "string",
                name: "facebook",
                label: "Facebook URL"
              },
              {
                type: "string",
                name: "twitter",
                label: "Twitter URL"
              },
              {
                type: "string",
                name: "linkedin",
                label: "LinkedIn URL"
              },
              {
                type: "string",
                name: "instagram",
                label: "Instagram URL"
              }
            ]
          },
          {
            type: "object",
            name: "seo",
            label: "SEO Settings",
            fields: [
              {
                type: "string",
                name: "defaultTitle",
                label: "Default Page Title"
              },
              {
                type: "string",
                name: "defaultDescription",
                label: "Default Meta Description",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "string",
                name: "defaultKeywords",
                label: "Default Keywords",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "image",
                name: "ogImage",
                label: "Default Open Graph Image"
              }
            ]
          },
          {
            type: "object",
            name: "colors",
            label: "Brand Colors",
            fields: [
              {
                type: "string",
                name: "primary",
                label: "Primary Color",
                ui: {
                  component: "color"
                }
              },
              {
                type: "string",
                name: "secondary",
                label: "Secondary Color",
                ui: {
                  component: "color"
                }
              },
              {
                type: "string",
                name: "accent",
                label: "Accent Color",
                ui: {
                  component: "color"
                }
              }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
