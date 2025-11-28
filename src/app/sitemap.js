// app/sitemap.js

/**
 * 🧠 Purpose:
 * Automatically generates an XML sitemap listing all your site's pages.
 *
 * Search engines (like Google) use this to:
 * - Discover all your URLs
 * - Know when pages were last updated
 * - Understand your site structure
 *
 * ⚙️ Next.js will convert this JS output into a valid sitemap.xml file
 * at build time (fully static).
 */

export const dynamic = 'force-static'; // Ensure this runs only at build time

export default async function sitemap() {
  // Base domain (use environment variable in production)
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gwcdata.ai';

  /**
   * 🧩 Add your important routes here
   * You can expand this list manually or pull routes dynamically.
   * Example: ['', '/about', '/services', '/contact', '/blog']
   */
  const routes = ['', '/about', '/services', '/contact', '/blog'];

  /**
   * 🧮 Return sitemap entries
   * Each route is converted into a sitemap item with:
   * - Full URL
   * - Last modification date (ISO format)
   */
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));
}
