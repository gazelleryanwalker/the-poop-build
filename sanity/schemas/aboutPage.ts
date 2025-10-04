import { defineType, defineField } from "sanity"

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
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
      name: "missionStatement",
      title: "Mission Statement",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "founderProfile",
      title: "Founder Profile",
      type: "object",
      fields: [
        { name: "name", title: "Name", type: "string" },
        { name: "title", title: "Title", type: "string" },
        { name: "bio", title: "Bio", type: "array", of: [{ type: "block" }] },
        { name: "image", title: "Image", type: "image", options: { hotspot: true } },
        { name: "email", title: "Email", type: "string" },
      ],
    }),
  ],
})
