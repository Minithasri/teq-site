/**
 * 🔍 SEO & Schema Utilities
 * --------------------------------------------
 * This module generates meta tags, structured data (JSON-LD schemas),
 * and SEO helpers for Next.js pages. Each function focuses on improving
 * SEO, social sharing, and structured search visibility.
 */

import { getBaseUrl } from '@/lib/utils';

/* -----------------------------------------------------
   🏷️ 1. generateMetaTags()
   -----------------------------------------------------
   Creates meta information for:
   - SEO (title, description, keywords)
   - Social sharing (Open Graph + Twitter)
   - Canonical URL
   - Robots & Googlebot indexing
----------------------------------------------------- */
export function generateMetaTags({
  title,
  description,
  keywords = '',
  image = '/images/og-image.jpg',
  url = '',
  canonical,
  type = 'website',
  publishedTime,
  modifiedTime,
}) {
  const baseUrl = getBaseUrl();
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const fullImage = image.startsWith('http') ? image : `${baseUrl}${image}`;

  return {
    // Page title for search results
    title: title,

    // Meta description (150–160 chars for best SEO)
    description: description,

    // Optional meta keywords (low SEO weight, but harmless)
    keywords: keywords,

    // Open Graph (Facebook, LinkedIn, etc.)
    openGraph: {
      title,
      description,
      type, // e.g. 'website', 'article'
      url: fullUrl,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: 'GWC Data AI',
      locale: 'en_US',
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },

    // Twitter card metadata (for nice preview when shared)
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImage],
      creator: '@gwcdata',
      site: '@gwcdata',
    },

    // Canonical URL (prevents duplicate content)
    alternates: {
      canonical: canonical || fullUrl,
    },

    // Control search engine crawling/indexing
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

/* -----------------------------------------------------
   🏢 2. generateOrganizationSchema()
   -----------------------------------------------------
   JSON-LD schema describing your organization.
   Helps Google show Knowledge Panels & Brand info.
----------------------------------------------------- */
export function generateOrganizationSchema() {
  const baseUrl = getBaseUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'GWC Data AI',
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    description: 'Leading provider of Agentic AI and Data Analytics solutions.',
    sameAs: [
      'https://www.linkedin.com/company/gwcdata',
      'https://twitter.com/gwcdata',
      'https://github.com/gwcdata',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      email: 'contact@gwcdata.ai',
      areaServed: 'US',
      availableLanguage: 'en',
    },
    foundingDate: '2020',
    employees: '50-100',
    legalName: 'GWC Data AI Inc.',
    slogan: 'Transforming Businesses with Agentic AI',
  };
}

/* -----------------------------------------------------
   🌐 3. generateWebsiteSchema()
   -----------------------------------------------------
   JSON-LD for your overall website.
   Helps Google understand site structure & search intent.
----------------------------------------------------- */
export function generateWebsiteSchema() {
  const baseUrl = getBaseUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: 'GWC Data AI',
    description: 'Leading provider of Agentic AI and Data Analytics solutions.',
    publisher: {
      '@id': `${baseUrl}/#organization`,
    },
    inLanguage: 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/* -----------------------------------------------------
   🧭 4. generateBreadcrumbSchema(items)
   -----------------------------------------------------
   JSON-LD breadcrumbs (hierarchical navigation).
   Appears in Google results, improving CTR.
----------------------------------------------------- */
export function generateBreadcrumbSchema(items) {
  const baseUrl = getBaseUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
}

/* -----------------------------------------------------
   ❓ 5. generateFAQSchema(questions)
   -----------------------------------------------------
   Adds FAQ schema for Google rich results (FAQ dropdowns).
----------------------------------------------------- */
export function generateFAQSchema(questions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((qa) => ({
      '@type': 'Question',
      name: qa.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: qa.answer,
      },
    })),
  };
}

/* -----------------------------------------------------
   ⚙️ 6. generateServiceSchema(service)
   -----------------------------------------------------
   Defines your services as structured data.
   Useful for SEO visibility for "services" searches.
----------------------------------------------------- */
export function generateServiceSchema(service) {
  const baseUrl = getBaseUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'GWC Data AI',
      url: baseUrl,
    },
    areaServed: 'Worldwide',
    serviceType: service.type || 'AI Consulting',
    offers: {
      '@type': 'Offer',
      description: service.description,
    },
    ...(service.audience && { audience: service.audience }),
  };
}

/* -----------------------------------------------------
   📰 7. generateArticleSchema(article)
   -----------------------------------------------------
   Structured data for blog posts or articles.
   Helps Google News & “Top Stories” features.
----------------------------------------------------- */
export function generateArticleSchema(article) {
  const baseUrl = getBaseUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image ? `${baseUrl}${article.image}` : `${baseUrl}/images/og-image.jpg`,
    datePublished: article.publishedTime,
    dateModified: article.modifiedTime || article.publishedTime,
    author: {
      '@type': 'Organization',
      name: 'GWC Data AI',
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'GWC Data AI',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}${article.url}`,
    },
  };
}

/* -----------------------------------------------------
   ⏱️ 8. getReadingTime(text)
   -----------------------------------------------------
   Simple utility to estimate reading time.
   Helpful for UX (e.g., "3 min read" labels).
----------------------------------------------------- */
export function getReadingTime(text) {
  const wordsPerMinute = 200; // Average reading speed
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wordsPerMinute);
  return time;
}

/* -----------------------------------------------------
   🗺️ 9. generateSitemapEntries(pages)
   -----------------------------------------------------
   Builds sitemap.xml entries for Next.js routes.
   Keeps search engines up-to-date.
----------------------------------------------------- */
export function generateSitemapEntries(pages) {
  const baseUrl = getBaseUrl();

  return pages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: page.lastModified || new Date().toISOString(),
    changeFrequency: page.changeFrequency || 'monthly',
    priority: page.priority || 0.7,
  }));
}
