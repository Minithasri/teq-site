// src/app/(site)/blogs/[slug]/page.jsx
export const dynamic = 'force-static';
export const dynamicParams = false;

import React from 'react';
import { blogsData } from '@/data/blogsData';
import BlogTemplate from '@/components/Blogs/BlogTemplate';

// Generate static parameters for static site generation
export const generateStaticParams = async () => {
  return blogsData.map(blog => ({
    slug: blog.slug,
  }));
};

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = blogsData.find(b => b.slug === slug);

  return <BlogTemplate blog={blog} />;
}
