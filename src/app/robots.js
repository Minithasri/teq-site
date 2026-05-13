/**
 * 🧠 Purpose:
 * This file automatically generates a "robots.txt" file
 * for your website when building the project.
 *
 * It tells search engine crawlers:
 * - Which parts of your site they can crawl (Allow)
 * - Which parts to ignore (Disallow)
 * - Where to find your sitemap.xml
 *
 * ⚙️ Works with Next.js App Router
 * and supports static export (output: 'export').
 */

// Tell Next.js to build this statically (no server needed)
export const dynamic = 'force-static';

export default function robots() {
  // Base URL for production or local environment
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gwcdata.ai';

  return {
    // ✅ Main crawling rules
    rules: [
      {
        // 🌐 Standard Search Engines
        userAgent: '*',
        allow: ['/', '/.well-known/llms.txt'],
        disallow: ['/api/', '/admin/', '/private/'],
      },
      {
        // 🤖 Major AI Crawlers (Restrictive Configuration)
        // Allow access to public content while protecting sensitive paths
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Anthropic-AI',
          'Google-Extended',
          'PerplexityBot',
          'FacebookBot',
        ],
        allow: '/',
        disallow: ['/admin/', '/api/', '/private/', '/user/'],
      },
      {
        // 🚫 Blocked AI/Training Bots
        // Prevent unauthorized data mining and large-scale model training
        userAgent: ['CCBot', 'cohere-ai', 'Diffbot', 'omgili', 'YouBot', 'Bytespider'],
        disallow: '/',
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
