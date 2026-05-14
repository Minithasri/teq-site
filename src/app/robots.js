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
 * ✅ GEO FIX: AI crawlers (CCBot, omgili, Bytespider, etc.) are now
 * explicitly ALLOWED so your content appears in ChatGPT, Perplexity,
 * Gemini, and other AI-powered search results.
 */

export const dynamic = 'force-static';

export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gwcdata.ai';

  return {
    rules: [
      // ✅ AI Crawler Access Policy - Updated to enable GEO visibility
      {
        userAgent: [
          'GPTBot', // OpenAI GPTBot (ChatGPT)
          'CCBot', // Common Crawl (CCBot)
          'Bytespider', // ByteDance/TikTok AI (ByteSpider)
          'omgili', // Omgili crawler (content discovery)
          'Google-Extended', // Google Extended (Bard/Gemini)
          'anthropic-ai', // Anthropic Claude
          'PerplexityBot', // Perplexity AI
        ],
        allow: '/',
      },

      // ✅ Standard search engines
      {
        userAgent: ['Googlebot', 'Bingbot'],
        allow: '/',
      },

      // 🚫 Block malicious or resource-heavy bots
      {
        userAgent: ['AhrefsBot', 'SemrushBot'],
        disallow: '/',
      },

      // 🌐 Default rule for all other crawlers
      {
        userAgent: '*',
        allow: '/',
        crawlDelay: 1,
      },
    ],

    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/image-sitemap.xml`,
      `${baseUrl}/video-sitemap.xml`,
    ],

    host: baseUrl,
  };
}
