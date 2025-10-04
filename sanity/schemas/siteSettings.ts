import { defineType, defineField } from "sanity"

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "contactInfo",
      title: "Contact Information",
      type: "object",
      fields: [
        { name: "phone", title: "Phone", type: "string" },
        { name: "email", title: "Email", type: "string" },
        { name: "address", title: "Address", type: "text" },
      ],
    }),
    defineField({
      name: "socialMedia",
      title: "Social Media",
      type: "object",
      fields: [
        { name: "facebook", title: "Facebook URL", type: "url" },
        { name: "twitter", title: "Twitter URL", type: "url" },
        { name: "linkedin", title: "LinkedIn URL", type: "url" },
        { name: "instagram", title: "Instagram URL", type: "url" },
      ],
    }),
  ],
})
