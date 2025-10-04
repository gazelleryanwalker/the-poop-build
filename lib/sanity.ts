import { createClient } from "next-sanity"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"

export const client =
  projectId !== "placeholder"
    ? createClient({
        projectId,
        dataset,
        apiVersion: "2025-01-01",
        useCdn: false,
      })
    : null

let builder: any = null

export function urlFor(source: any) {
  if (!client) return null

  if (!builder) {
    const imageUrlBuilder = require("@sanity/image-url")
    builder = imageUrlBuilder(client)
  }

  return builder.image(source)
}

export async function getBlogPosts() {
  if (!client) return []
  try {
    return await client.fetch(
      `*[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        "mainImage": mainImage.asset->url,
        publishedAt,
        "readTime": round(length(pt::text(body)) / 5 / 180 ),
        "category": categories[0]->title
      }`,
    )
  } catch (error) {
    return []
  }
}

export async function getBlogPost(slug: string) {
  if (!client) return null
  try {
    return await client.fetch(
      `*[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        excerpt,
        body,
        "mainImage": mainImage.asset->url,
        publishedAt,
        "readTime": round(length(pt::text(body)) / 5 / 180 ),
        "category": categories[0]->title,
        "author": author->{name, "image": image.asset->url}
      }`,
      { slug },
    )
  } catch (error) {
    return null
  }
}

export async function getTestimonials() {
  if (!client) return []
  try {
    return await client.fetch(
      `*[_type == "testimonial"] | order(_createdAt desc) {
        _id,
        clientName,
        caseType,
        quote,
        rating
      }`,
    )
  } catch (error) {
    return []
  }
}

export async function getPracticeAreas() {
  if (!client) return []
  try {
    return await client.fetch(
      `*[_type == "practiceArea"] | order(order asc) {
        _id,
        title,
        slug,
        description,
        icon,
        "image": image.asset->url
      }`,
    )
  } catch (error) {
    return []
  }
}

export async function getPracticeArea(slug: string) {
  if (!client) return null
  try {
    return await client.fetch(
      `*[_type == "practiceArea" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        description,
        content,
        icon,
        "image": image.asset->url
      }`,
      { slug },
    )
  } catch (error) {
    return null
  }
}

export async function getTeamMembers() {
  if (!client) return []
  try {
    return await client.fetch(
      `*[_type == "teamMember"] | order(order asc) {
        _id,
        name,
        role,
        bio,
        "image": image.asset->url,
        email,
        linkedin
      }`,
    )
  } catch (error) {
    return []
  }
}
