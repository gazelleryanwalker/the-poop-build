// SEO Utilities for The Costello Law Group

export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

// Generate JSON-LD structured data for organization
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'The Costello Law Group',
    description: 'Premier personal injury law firm in Florida',
    url: 'https://thecostellolawgroup.com',
    logo: 'https://thecostellolawgroup.com/logo.png',
    image: 'https://thecostellolawgroup.com/og-image.jpg',
    telephone: '+1-555-123-4567',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Legal Street',
      addressLocality: 'Miami',
      addressRegion: 'FL',
      postalCode: '33101',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '25.7617',
      longitude: '-80.1918',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
    sameAs: [
      'https://www.facebook.com/costellolawgroup',
      'https://twitter.com/costellolaw',
      'https://www.linkedin.com/company/costello-law-group',
    ],
  };
}

// Generate JSON-LD structured data for articles/blog posts
export function generateArticleSchema(data: {
  title: string;
  description: string;
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.title,
    description: data.description,
    image: data.image || 'https://thecostellolawgroup.com/og-image.jpg',
    datePublished: data.publishedTime,
    dateModified: data.modifiedTime || data.publishedTime,
    author: {
      '@type': 'Person',
      name: data.author || 'The Costello Law Group',
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Costello Law Group',
      logo: {
        '@type': 'ImageObject',
        url: 'https://thecostellolawgroup.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': data.url,
    },
  };
}

// Generate JSON-LD structured data for FAQ
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Generate JSON-LD structured data for breadcrumbs
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Generate Open Graph meta tags
export function generateOpenGraphTags(data: SEOData) {
  const tags = [
    { property: 'og:title', content: data.title },
    { property: 'og:description', content: data.description },
    { property: 'og:type', content: data.type || 'website' },
    { property: 'og:url', content: data.url || 'https://thecostellolawgroup.com' },
    { property: 'og:image', content: data.image || 'https://thecostellolawgroup.com/og-image.jpg' },
    { property: 'og:site_name', content: 'The Costello Law Group' },
  ];

  if (data.publishedTime) {
    tags.push({ property: 'article:published_time', content: data.publishedTime });
  }

  if (data.modifiedTime) {
    tags.push({ property: 'article:modified_time', content: data.modifiedTime });
  }

  if (data.author) {
    tags.push({ property: 'article:author', content: data.author });
  }

  return tags;
}

// Generate Twitter Card meta tags
export function generateTwitterCardTags(data: SEOData) {
  return [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: data.title },
    { name: 'twitter:description', content: data.description },
    { name: 'twitter:image', content: data.image || 'https://thecostellolawgroup.com/og-image.jpg' },
    { name: 'twitter:site', content: '@costellolaw' },
  ];
}

// Generate all SEO meta tags
export function generateSEOTags(data: SEOData) {
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    openGraph: generateOpenGraphTags(data),
    twitter: generateTwitterCardTags(data),
  };
}
