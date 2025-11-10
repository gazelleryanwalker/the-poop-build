import { client } from "@/tina/__generated__/client"

export async function getAllPosts() {
  try {
    const postsResponse = await client.queries.postConnection()
    return postsResponse.data.postConnection.edges?.map((edge) => edge?.node) || []
  } catch (error) {
    console.error("Error fetching posts:", error)
    return []
  }
}

export async function getPostBySlug(slug: string) {
  try {
    const postResponse = await client.queries.post({
      relativePath: `${slug}.mdx`,
    })
    return postResponse.data.post
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error)
    return null
  }
}

export async function getPageBySlug(slug: string) {
  try {
    const pageResponse = await client.queries.page({
      relativePath: `${slug}.mdx`,
    })
    return pageResponse.data.page
  } catch (error) {
    console.error(`Error fetching page with slug ${slug}:`, error)
    return null
  }
}

export async function getAllTestimonials() {
  try {
    const testimonialsResponse = await client.queries.testimonialConnection()
    return testimonialsResponse.data.testimonialConnection.edges?.map((edge) => edge?.node) || []
  } catch (error) {
    console.error("Error fetching testimonials:", error)
    return []
  }
}

export async function getAllCaseResults() {
  try {
    const caseResultsResponse = await client.queries.caseResultConnection()
    return caseResultsResponse.data.caseResultConnection.edges?.map((edge) => edge?.node) || []
  } catch (error) {
    console.error("Error fetching case results:", error)
    return []
  }
}

export async function getAllPracticeAreas() {
  try {
    const practiceAreasResponse = await client.queries.practiceAreaConnection()
    return practiceAreasResponse.data.practiceAreaConnection.edges?.map((edge) => edge?.node) || []
  } catch (error) {
    console.error("Error fetching practice areas:", error)
    return []
  }
}

export async function getSiteSettings() {
  try {
    const settingsResponse = await client.queries.siteSettings({
      relativePath: "site.json",
    })
    return settingsResponse.data.siteSettings
  } catch (error) {
    console.error("Error fetching site settings:", error)
    return null
  }
}
