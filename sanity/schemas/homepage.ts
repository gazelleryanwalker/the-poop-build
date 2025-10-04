import { defineType, defineField } from "sanity"

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "heroHeading",
      title: "Hero Heading",
      type: "string",
    }),
    defineField({
      name: "heroSubheading",
      title: "Hero Subheading",
      type: "text",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "aboutSection",
      title: "About Section",
      type: "object",
      fields: [
        { name: "heading", title: "Heading", type: "string" },
        { name: "content", title: "Content", type: "array", of: [{ type: "block" }] },
        { name: "image", title: "Image", type: "image", options: { hotspot: true } },
      ],
    }),
    defineField({
      name: "whyChooseUs",
      title: "Why Choose Us Section",
      type: "object",
      fields: [
        { name: "heading", title: "Heading", type: "string" },
        { name: "description", title: "Description", type: "text" },
        {
          name: "features",
          title: "Features",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "title", title: "Title", type: "string" },
                { name: "description", title: "Description", type: "text" },
              ],
            },
          ],
        },
      ],
    }),
  ],
})
