import client from "../../tina/__generated__/client";

export async function getHomepage() {
  try {
    const result = await client.queries.homepage({
      relativePath: "homepage.json",
    });
    return result.data.homepage;
  } catch (error) {
    console.error("Error fetching homepage:", error);
    return null;
  }
}

export async function getBlogPosts() {
  try {
    const result = await client.queries.postConnection();
    return result.data.postConnection.edges?.map((edge) => edge?.node) || [];
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export async function getBlogPost(filename: string) {
  try {
    const result = await client.queries.post({
      relativePath: `${filename}.mdx`,
    });
    return result.data.post;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

export async function getPracticeAreas() {
  try {
    const result = await client.queries.practiceAreaConnection();
    return result.data.practiceAreaConnection.edges?.map((edge) => edge?.node) || [];
  } catch (error) {
    console.error("Error fetching practice areas:", error);
    return [];
  }
}

export async function getPracticeArea(filename: string) {
  try {
    const result = await client.queries.practiceArea({
      relativePath: `${filename}.mdx`,
    });
    return result.data.practiceArea;
  } catch (error) {
    console.error("Error fetching practice area:", error);
    return null;
  }
}

export async function getAttorneys() {
  try {
    const result = await client.queries.attorneyConnection();
    return result.data.attorneyConnection.edges?.map((edge) => edge?.node) || [];
  } catch (error) {
    console.error("Error fetching attorneys:", error);
    return [];
  }
}

export async function getAttorney(filename: string) {
  try {
    const result = await client.queries.attorney({
      relativePath: `${filename}.mdx`,
    });
    return result.data.attorney;
  } catch (error) {
    console.error("Error fetching attorney:", error);
    return null;
  }
}

export async function getCaseResults() {
  try {
    const result = await client.queries.caseResultConnection();
    return result.data.caseResultConnection.edges?.map((edge) => edge?.node) || [];
  } catch (error) {
    console.error("Error fetching case results:", error);
    return [];
  }
}

export async function getSiteSettings() {
  try {
    const result = await client.queries.siteSettings({
      relativePath: "site.json",
    });
    return result.data.siteSettings;
  } catch (error) {
    console.error("Error fetching site settings:", error);
    return null;
  }
}

// Export for image handling (Tina handles images differently)
export function urlFor(source: any) {
  if (!source) return null;
  // Tina images are already URLs, just return them
  return source;
}
