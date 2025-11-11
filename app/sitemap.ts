import { MetadataRoute } from 'next';
import { getAllPosts, getAllPracticeAreas } from '@/lib/pages-client';

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
    // Fetch blog posts from Pages CMS
    const posts = await getAllPosts();
    const postsUrls: MetadataRoute.Sitemap = posts.map((post: any) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date || Date.now()),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

    // Fetch practice areas from Pages CMS
    const practiceAreas = await getAllPracticeAreas();
    const practiceAreasUrls: MetadataRoute.Sitemap = practiceAreas.map((area: any) => ({
      url: `${baseUrl}/practice-areas/${area.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }));

    return [...staticPages, ...postsUrls, ...practiceAreasUrls];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return staticPages;
  }
}
