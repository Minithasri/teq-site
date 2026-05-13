/**
 * 🧠 Purpose:
 * This file automatically generates a "robots.txt" file
 * for your website when building the project.
 *
 * It tells search engine crawlers:
 * - Which parts of your site they can crawl (Allow)
 * - Which parts to ignore (Disallow)
 * - Where to find your sitemap.xml
 */

// Tell Next.js to build this statically (no server needed)
export const dynamic = 'force-static';

export default function robots() {
  // Base URL for production or local environment
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gwcdata.ai';

  return {
    // ✅ AI Crawler Rules - Restrictive Configuration
    // Blocks AI crawlers from sensitive areas while allowing public content access
    rules: [
      {
        // 🤖 Major AI Crawlers (Allowed with restrictions)
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Anthropic-AI',
          'Google-Extended',
          'PerplexityBot',
          'FacebookBot',
        ],
        allow: ['/', '/llms.txt', '/.well-known/llms.txt'],
        disallow: ['/admin/', '/api/', '/private/', '/user/'],
      },
      {
        // 🚫 Blocked AI/Training Bots
        userAgent: ['CCBot', 'cohere-ai', 'Diffbot', 'omgili', 'Bytespider', 'YouBot'],
        disallow: '/',
      },
      {
        // 🌐 Standard Search Engines & Default Rules
        userAgent: '*',
        allow: ['/', '/llms.txt', '/.well-known/llms.txt'],
        disallow: ['/api/', '/admin/', '/private/'],
        crawlDelay: 1,
      },
    ],

    // ✅ Tells bots where the sitemaps are
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/image-sitemap.xml`,
      `${baseUrl}/video-sitemap.xml`,
    ],

    // ✅ Optionally specify the preferred domain
    host: baseUrl,
  };
}
