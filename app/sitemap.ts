import { MetadataRoute } from 'next';
import client from '../tina/__generated__/client';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://thecostellolawgroup.com';

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  try {
    // Fetch blog posts from TinaCMS
    const postsResponse = await client.queries.postConnection();
    const posts: MetadataRoute.Sitemap = (postsResponse.data.postConnection.edges || []).map((edge: any) => ({
      url: `${baseUrl}/blog/${edge.node?._sys.filename}`,
      lastModified: new Date(edge.node?._sys.lastModified || Date.now()),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

    // Fetch practice areas from TinaCMS
    const practiceAreasResponse = await client.queries.practice_areaConnection();
    const practiceAreas: MetadataRoute.Sitemap = (practiceAreasResponse.data.practice_areaConnection.edges || []).map((edge: any) => ({
      url: `${baseUrl}/practice-areas/${edge.node?._sys.filename}`,
      lastModified: new Date(edge.node?._sys.lastModified || Date.now()),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }));

    return [...staticPages, ...posts, ...practiceAreas];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return staticPages;
  }
}
