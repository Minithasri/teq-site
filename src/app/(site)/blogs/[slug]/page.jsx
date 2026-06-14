// src/app/(site)/blogs/[slug]/page.jsx
export const dynamic = 'force-static';

import React from 'react';
import { blogsData } from '@/data/blogsData';
import BlogTemplate from '@/components/Blogs/BlogTemplate';

// Generate static parameters for static site generation
export async function generateStaticParams() {
  return blogsData.map(blog => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = blogsData.find(b => b.slug === slug);

  return <BlogTemplate blog={blog} />;
}
