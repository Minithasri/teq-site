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
    // ✅ Main crawling rules for all bots
    rules: [
      {
        userAgent: '*', // Applies to all bots (Google, Bing, etc.)
        allow: '/', // Allow crawling of all public pages
        disallow: [
          // Disallow specific private sections
          '/api/',
          '/admin/',
          '/private/',
        ],
      },
    ],

    // ✅ Tells bots where the sitemap is
    sitemap: `${baseUrl}/sitemap.xml`,

    // ✅ Optionally specify the preferred domain
    host: baseUrl,
  };
}
