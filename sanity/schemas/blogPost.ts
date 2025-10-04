import { defineType, defineField } from "sanity"

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "attorney" }],
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Personal Injury", value: "personal-injury" },
          { title: "Legal Updates", value: "legal-updates" },
          { title: "Case Studies", value: "case-studies" },
        ],
      },
    }),
  ],
  orderings: [
    {
      title: "Published Date, New",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
})
