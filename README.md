# GWC Data AI - Next.js Website Template 🚀

A production-ready, SEO-optimized Next.js template specifically designed for **GWC Data AI** - focusing on Agentic AI and Data Analytics solutions. Built with cutting-edge SEO practices to maximize traffic and search engine rankings.

## 🌟 Features

### 🎯 SEO Excellence

- **Comprehensive Structured Data** (JSON-LD) for all pages
- **Automatic Sitemap Generation** with priority settings
- **Robots.txt Optimization** for search engine crawling
- **Open Graph & Twitter Cards** for social media sharing
- **Meta Tags Optimization** with keyword targeting
- **Canonical URLs** to prevent duplicate content
- **Performance Optimized** for Core Web Vitals

### 🛠 Technical Stack

- **Next.js 14+** with App Router
- **Tailwind CSS** with CSS variables
- **GSAP + ScrollTrigger** for animations
- **next-seo** for SEO management
- **Custom Hooks** for reusable functionality
- **Responsive Design** with mobile-first approach

### 📈 SEO Performance

- 90+ Lighthouse Scores
- Fast loading with lazy loading
- Optimized images and fonts
- Semantic HTML structure
- Schema.org markup implementation

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo>
cd gwc-revamp

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

### Environment Setup

```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://gwcdata.ai
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Google Analytics 4
```

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint and format code
npm run lint
npm run format
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (site)/            # Main website pages
│   │   ├── about/
│   │   ├── services/
│   │   └── _not-found.jsx
│   ├── layout.jsx         # Root layout with global SEO
│   ├── page.jsx           # Homepage
│   ├── sitemap.js         # Automatic sitemap generation
│   └── robots.js          # SEO robots.txt
├── components/            # Reusable React components
│   ├── Header.jsx         # Navigation with mobile menu
│   ├── Footer.jsx         # Site footer
│   ├── SEO.jsx            # Structured data component
│   └── UI components...
├── hooks/                 # Custom React hooks
│   ├── useIsMobile.js     # Responsive detection
│   ├── useScrollDirection.js # Scroll behavior
│   ├── useIntersectionObserver.js # Lazy loading
│   └── More hooks...
├── lib/                   # Core utilities
│   ├── seo.js            # SEO configuration
│   ├── utils.js          # Utility functions
│   └── gsap.js           # Animation setup
└── utils/                # Helper functions
    ├── seo-helper.js     # SEO generators
    ├── responsive.js     # Breakpoint utilities
    └── formatters.js     # Data formatting
```

## 🎯 SEO Implementation Guide

### 1. Page-Level SEO Setup

Every page includes comprehensive SEO metadata and structured data:

```jsx
// Example: Services Page
import { generateMetaTags } from '@/utils/seo-helper';
import { generateServiceSchema, generateFAQSchema } from '@/utils/seo-helper';

export const metadata = generateMetaTags({
  title: 'AI Services - Agentic AI Implementation & Data Analytics | GWC Data AI',
  description:
    'Comprehensive AI services including Agentic AI implementation, machine learning, data analytics, and custom AI solutions for enterprise businesses.',
  keywords:
    'AI services, Agentic AI implementation, machine learning services, data analytics consulting',
  url: '/services',
});

export default function ServicesPage() {
  const servicesSchema = generateServiceSchema({
    name: 'Agentic AI Implementation',
    description: 'Deploy autonomous AI systems...',
  });

  return (
    <>
      <SEO structuredData={[servicesSchema]} />
      {/* Page content */}
    </>
  );
}
```

### 2. Available Schema Types

- **Organization Schema** - Company information
- **Website Schema** - Site structure
- **Service Schema** - Service offerings
- **FAQ Schema** - Question & answers
- **Breadcrumb Schema** - Navigation structure
- **Article Schema** - Blog content

### 3. SEO Best Practices Checklist

**For Every Page:**

- [ ] Unique title tag (55-60 characters)
- [ ] Compelling meta description (150-160 characters)
- [ ] Relevant keywords (natural placement)
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] JSON-LD structured data
- [ ] Canonical URL
- [ ] Mobile-responsive design
- [ ] Fast loading (Lighthouse score 90+)
- [ ] Alt tags on all images
- [ ] Internal linking structure

## 🪝 Custom Hooks Usage

### Responsive Design

```jsx
import { useIsMobile, useDeviceType } from '@/hooks/useIsMobile';

function Component() {
  const isMobile = useIsMobile();
  const deviceType = useDeviceType();

  return (
    <div className={isMobile ? 'mobile-layout' : 'desktop-layout'}>
      Current device: {deviceType}
    </div>
  );
}
```

### Scroll Animations

```jsx
import { useScrollDirection, useIsScrolled } from '@/hooks/useScrollDirection';

function Header() {
  const scrollDirection = useScrollDirection();
  const isScrolled = useIsScrolled(100);

  return (
    <header
      className={`
      ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}
      ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}
    `}
    >
      {/* Header content */}
    </header>
  );
}
```

### Lazy Loading

```jsx
import { useIntersectionObserver, useLazyImage } from '@/hooks/useIntersectionObserver';

function LazySection() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section ref={ref} className={isVisible ? 'opacity-100' : 'opacity-0'}>
      {/* Content appears when scrolled into view */}
    </section>
  );
}
```

## 🎨 Styling System

### CSS Variables (Color System)

All colors are managed through CSS variables in `globals.css`:

```css
:root {
  --color-primary: 200 98% 39%; /* sky-600 */
  --color-background: 0 0% 100%; /* white */
  --color-foreground: 222.2 84% 4.9%;
  /* More variables... */
}
```

### Tailwind Configuration

Extended with custom color system:

```js
// tailwind.config.js
colors: {
  primary: {
    DEFAULT: 'hsl(var(--color-primary))',
    foreground: 'hsl(var(--color-primary-foreground))',
  },
  // More colors...
}
```

## 📊 Performance Optimization

### Core Web Vitals Targets

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **INP (Interaction to Next Paint)**: < 200ms

### Optimization Features

- Automatic image optimization with Next.js
- Code splitting and lazy loading
- CSS and JavaScript minification
- Font optimization and preloading
- Efficient caching strategies

## 🔧 Development Guidelines

### Creating New Pages

1. Create folder in `app/(site)/`
2. Add `page.jsx` with SEO metadata
3. Implement structured data
4. Add to sitemap (automatic)
5. Test with Google Rich Results Test

### Example: New Solutions Page

```jsx
// app/(site)/solutions/page.jsx
import { generateMetaTags } from '@/utils/seo-helper';
import { generateServiceSchema } from '@/utils/seo-helper';

export const metadata = generateMetaTags({
  title: 'AI Solutions - Industry-Specific AI Implementation',
  description: 'Custom AI solutions for healthcare, finance, retail, and manufacturing industries.',
  url: '/solutions',
});

export default function SolutionsPage() {
  const solutionsSchema = generateServiceSchema({
    name: 'Industry AI Solutions',
    description: 'Custom AI implementations for specific industries',
  });

  return (
    <>
      <SEO structuredData={[solutionsSchema]} />
      <div className="pt-20">{/* Page content */}</div>
    </>
  );
}
```

### Adding New Hooks

```jsx
// hooks/useNewHook.js
'use client';
import { useState, useEffect } from 'react';

export function useNewHook() {
  const [state, setState] = useState(null);

  useEffect(() => {
    // Hook logic
  }, []);

  return state;
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on git push

### CPanel Deployment

```bash
# Build and export
npm run build

# Upload .next folder to your hosting
```

### Environment Variables for Production

```env
NEXT_PUBLIC_SITE_URL=https://gwcdata.ai
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📈 SEO Monitoring & Analytics

### Tools Integration

- **Google Search Console** - Monitor rankings and indexing
- **Google Analytics 4** - Track user behavior
- **Google Rich Results Test** - Validate structured data
- **Lighthouse CI** - Performance monitoring
- **SEMrush/Ahrefs** - Competitor analysis

### Regular SEO Tasks

- [ ] Submit sitemap to Google Search Console
- [ ] Monitor Core Web Vitals
- [ ] Update structured data for new content
- [ ] Conduct keyword research updates
- [ ] Analyze competitor strategies
- [ ] Optimize page speed regularly

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**: Check import paths and hook dependencies
2. **SEO Validation**: Use Google Rich Results Test
3. **Performance**: Run Lighthouse audits regularly
4. **Mobile Issues**: Test with Chrome DevTools device simulation

### Support

- Check browser console for errors
- Validate structured data with [Schema Markup Validator](https://validator.schema.org/)
- Test pages with [Google PageSpeed Insights](https://pagespeed.web.dev/)

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
