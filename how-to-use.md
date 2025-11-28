### Project Overview: GWC Data AI Next.js Template

This template is a modern Next.js 14+ (App Router) project built for a professional AI consulting
website (GWC Data AI). It includes Tailwind CSS for styling, GSAP for animations, comprehensive SEO
tools, custom hooks for interactivity, and utilities for responsive design and validation. The
structure is organized for scalability, with a focus on performance, accessibility, and SEO best
practices.

Key features:

- **Routing**: App Router with dynamic/static pages (e.g., `/`, `/about`, `/services`, `/contact`).
- **Styling**: Tailwind CSS with centralized color variables in `globals.css` for easy theming.
- **Animations**: GSAP integration for scroll-triggered effects.
- **SEO**: Built-in metadata, structured data (JSON-LD), and Next.js SEO components.
- **Hooks & Utils**: Custom React hooks (e.g., `useIntersectionObserver`, `useScrollDirection`) and
  utilities (e.g., formatters, validation).
- **Providers**: Client-side context for SEO and theme management.

The template is production-ready but requires environment setup for features like Google Analytics.

---

### How to Use This Template: Quick Start Guide

#### 1. **Prerequisites**

- Node.js 18+ installed.
- Yarn or npm as your package manager (npm is used in the scripts).

#### 2. **Setup**

Clone or download the project, then install dependencies:

```bash
# Clone the repo (if from Git)
git clone <your-repo-url>
cd gwc-revamp

# Install dependencies
npm install

# Optional: Set environment variables
# Create .env.local for production
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

- **Environment Variables**:
  - `NEXT_PUBLIC_SITE_URL`: Base URL for SEO and sitemaps (default: `http://localhost:3000`).
  - `NEXT_PUBLIC_GA_ID`: Google Analytics tracking ID (enables tracking in `SEO.jsx`).

#### 3. **Running the Project**

- **Development Mode** (with hot reload):

  ```bash
  npm run dev
  ```

  Open `http://localhost:3000` to view the homepage.

- **Production Build & Start**:

  ```bash
  npm run build  # Builds optimized assets
  npm start      # Starts production server on http://localhost:3000
  ```

- **Linting & Formatting**:

  ```bash

  ```

- `npm run lint` - Run ESLint
- `npm run lint:fix` - Auto-fix ESLint issues
- `npm run type-check` - Run TypeScript type checking

  ```

  ```

#### 4. **Project Structure**

Based on the provided folder structure:

```
.
├── .editorconfig          # Code formatting rules
├── .eslintrc.cjs          # ESLint config
├── .gitignore             # Git ignore rules
├── .next/                 # Next.js build output (auto-generated)
├── .prettierignore        # Prettier ignore rules
├── .prettierrc            # Prettier config
├── copy-code.cjs          # Utility script (e.g., for code copying)
├── jsconfig.json          # JS/TS path aliases (e.g., @/ for src/)
├── next-env.d.ts          # Next.js TypeScript declarations
├── next.config.js         # Next.js config (e.g., images, strict mode)
├── node_modules/          # Dependencies
├── package-lock.json      # Lockfile
├── package.json           # Scripts & deps
├── postcss.config.js      # PostCSS config (Tailwind + Autoprefixer)
├── project_dump.txt       # Project notes/dump
├── README.md              # This guide (see below for full content)
├── tailwind.config.js     # Tailwind theme (colors, container, etc.)
└── src/
    ├── app/               # App Router pages & layouts
    │   ├── (site)/        # Route group for site pages
    │   │   ├── about/page.jsx
    │   │   ├── contact/page.jsx
    │   │   ├── services/page.jsx
    │   │   └── solutions/page.jsx
    │   ├── globals.css    # Tailwind imports + CSS vars (centralized colors)
    │   ├── layout.jsx     # Root layout (metadata, providers, header/footer)
    │   ├── page.jsx       # Homepage
    │   ├── robots.js      # Robots.txt config
    │   ├── sitemap.js     # Sitemap generation
    │   └── _not-found.jsx # 404 page
    ├── components/        # Reusable UI components
    │   ├── Button.jsx
    │   ├── Container.jsx
    │   ├── Footer.jsx
    │   ├── Header.jsx
    │   ├── Providers.jsx  # Client-side providers (e.g., SEO)
    │   ├── Section.jsx
    │   └── SEO.jsx        # Structured data & analytics
    ├── hooks/             # Custom React hooks
    │   ├── useClickOutside.js
    │   ├── useDebounce.js
    │   ├── useIntersectionObserver.js
    │   ├── useIsMobile.js
    │   ├── useLocalStorage.js
    │   ├── useScrollDirection.js
    │   └── useWindowSize.js
    ├── lib/               # Core libraries & utils
    │   ├── gsap.js        # GSAP setup (see GSAP section)
    │   ├── seo.js         # Default SEO config
    │   └── utils.js       # General utils (cn, formatDate, etc.)
    └── utils/             # Helper functions
        ├── formatters.js
        ├── responsive.js
        ├── seo-helper.js
        └── validation.js
```

- **Path Aliases**: Use `@/` for imports (e.g., `import Container from '@/components/Container';`)
  via `jsconfig.json`.

#### 5. **Adding New Pages**

- Create a new folder in `src/app/(site)/`, e.g., `blog/page.jsx`.
- Define `export const metadata = { title: 'Blog' };` for page-specific SEO.
- Use components like `<Section>`, `<Container>`, and Tailwind classes for styling.
- For dynamic routes: Use `[slug]/page.jsx` and `params` prop.

#### 6. **Customization Tips**

- **Theming**: Edit colors in `src/app/globals.css` (e.g., `--color-primary: 270 70% 50%;` for
  purple primary).
- **Build Optimization**: `next.config.js` enables image optimization; add more remote patterns as
  needed.
- **Deployment**: Works with Vercel, Netlify, or any Node host. Set `NEXT_PUBLIC_SITE_URL` for
  production SEO.

---

### How to Work with GSAP in This Template

GSAP (GreenSock Animation Platform) is pre-integrated for smooth animations, especially
scroll-triggered ones via ScrollTrigger. It's set up in `src/lib/gsap.js` to avoid duplicate
registrations.

#### 1. **Import GSAP**

In any client component (add `'use client';` at the top if needed):

```jsx
// e.g., in a component like src/components/AnimatedSection.jsx
'use client';
import { getGsap, ScrollTrigger } from '@/lib/gsap';

const gsap = getGsap(); // Registers ScrollTrigger automatically
```

#### 2. **Basic Usage**

- **Simple Animation**:

  ```jsx
  useEffect(() => {
    gsap.to('.fade-in', {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2, // For multiple elements
    });
  }, []);
  ```

- **Scroll-Triggered Animation** (e.g., fade in on scroll):
  ```jsx
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // Already handled in lib/gsap.js
    gsap.from('.scroll-element', {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.scroll-element',
        start: 'top 80%', // Start when top of element hits 80% of viewport
        end: 'bottom 20%',
        toggleActions: 'play none none reverse', // Play on enter, reverse on leave
      },
    });
  }, []);
  ```

#### 3. **Integration Example: Animate Hero Section**

Add to `src/app/page.jsx` (homepage hero):

```jsx
// In src/app/page.jsx, inside the hero div
'use client'; // Add at top if not present
import { useEffect } from 'react';
import { getGsap } from '@/lib/gsap';

export default function HomePage() {
  useEffect(() => {
    const gsap = getGsap();
    gsap.from('.hero-title', {
      y: -30,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    });
  }, []);

  return (
    <Section className='bg-gradient-to-br from-blue-50 to-white'>
      <Container>
        <div className='text-center py-20'>
          <h1 className='hero-title text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
            Transform Your Business with <span className='text-blue-600'>Agentic AI</span>
          </h1>
          {/* ... rest of content */}
        </div>
      </Container>
    </Section>
  );
}
```

#### 4. **Best Practices**

- **Performance**: Use `useEffect` for animations; clean up with
  `return () => gsap.killTweensOf(element);`.
- **Hooks Integration**: Combine with `useIntersectionObserver` from
  `hooks/useIntersectionObserver.js` for lazy animations.
- **ScrollTrigger**: Ideal for parallax or reveal effects; configure in `next.config.js` if needed
  for SSR compatibility.
- **Docs**: Refer to [GSAP Docs](https://gsap.com/docs/v3/) for advanced timelines or plugins.

---

### README.md: Full "How to Use" Guide

Here's the complete, updated `README.md` content you can copy-paste into your project's `README.md`
file. It expands on the quick start above with detailed usage, troubleshooting, and contribution
notes.

````markdown
# GWC Data AI - Next.js Template

A production-ready Next.js template for AI consulting websites, featuring Tailwind CSS, GSAP
animations, advanced SEO, and custom hooks.

## Features

- Next.js 14+ App Router
- Tailwind CSS with centralized theming
- GSAP + ScrollTrigger for animations
- SEO: Metadata, JSON-LD schemas, sitemaps, robots.txt
- Custom hooks: IntersectionObserver, ScrollDirection, etc.
- Responsive utils and validation
- TypeScript-ready (via jsconfig.json)

## Quick Start

1. **Install Dependencies**:
   ```bash
   npm install
   ```
````

2. **Environment Setup** (optional, in `.env.local`):

   ```
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   NEXT_PUBLIC_GA_ID=GA_MEASUREMENT_ID
   ```

3. **Run Locally**:
   - Dev: `npm run dev` (http://localhost:3000)
   - Build: `npm run build`
   - Start: `npm start`

4. **Lint & Format**:
   ```bash
   npm run lint
   npm run format
   ```

## Project Structure

- `src/app/`: Pages, layouts, globals.css
- `src/components/`: UI components (e.g., Header, SEO)
- `src/hooks/`: React hooks (e.g., useScrollDirection)
- `src/lib/`: Core libs (e.g., gsap.js, seo.js)
- `src/utils/`: Helpers (e.g., seo-helper.js)

## Customization

- **Colors/Theming**: Edit CSS vars in `globals.css` (e.g., `--color-primary`).
- **Pages**: Add folders in `src/app/(site)/` (e.g., `blog/page.jsx`).
- **SEO**: Use `generateMetaTags` in page metadata; add schemas via `<SEO structuredData={...} />`.
- **Animations**: Import from `@/lib/gsap` in client components.

## GSAP Usage

See [GSAP section](#how-to-work-with-gsap-in-this-template) in this README or the inline example.

## SEO Guide

See [SEO section](#how-to-use-seo-in-this-template) below.

## Deployment

- **Vercel**: `vercel --prod`
- **Netlify**: Drag `.next` folder or use CLI
- Ensure `NEXT_PUBLIC_SITE_URL` is set for production.

## Troubleshooting

- **Build Errors**: Clear `.next` cache (`rm -rf .next`).
- **Tailwind Issues**: Check `content` in `tailwind.config.js`.
- **Hydration Mismatches**: Disable browser extensions or use `dynamic = 'force-dynamic'`.

## Contributing

- Fork, branch, PR.
- Run `npm run lint` before committing.

## License

MIT - Feel free to use/modify.

````

Save this to `README.md` and commit it for your repo.

---

### How to Use SEO and Its Uses in This Template

SEO is deeply integrated for better search visibility, structured data, and performance. It uses Next.js 14+ metadata API, `next-seo`, and custom helpers for JSON-LD schemas (e.g., FAQ, Organization).

#### 1. **Core SEO Components**
- **`metadata` Export**: Page-specific titles/descriptions (server-side, static).
  ```jsx
  // In any page.jsx
  export const metadata = {
    title: 'About | GWC Data AI',
    description: 'Our mission...',
  };
````

- **Uses**: Sets `<title>`, `<meta name="description">`, OpenGraph/Twitter cards automatically.

- **`generateMetaTags` Helper** (`src/utils/seo-helper.js`): Generates full metadata objects.

  ```jsx
  import { generateMetaTags } from '@/utils/seo-helper';

  export const metadata = generateMetaTags({
    title: 'Services',
    description: 'AI services...',
    keywords: 'AI, Machine Learning',
    url: '/services',
  });
  ```

  - **Uses**: Handles OpenGraph images, Twitter cards, canonical URLs, robots directives.

- **`<SEO />` Component** (`src/components/SEO.jsx`): Adds structured data (JSON-LD) and GA
  tracking.

  ```jsx
  // In a page
  import SEO from '@/components/SEO';
  import { generateFAQSchema } from '@/utils/seo-helper';

  <SEO structuredData={[generateFAQSchema(questions)]} />;
  ```

  - **Uses**: Injects schemas like Organization, Breadcrumb, FAQPage for rich snippets in Google.

#### 2. **Structured Data Schemas** (`src/utils/seo-helper.js`)

- **Organization**: Auto-generated in `<SEO />` for business info (name, logo, contact).
- **FAQ**: `generateFAQSchema([{ question: '...', answer: '...' }])` – For FAQ rich results.
- **Service/Breadcrumb**: `generateServiceSchema({ name: 'AI Consulting' })` – For service pages.
- **Uses**: Improves SERP features (e.g., FAQ accordions, breadcrumbs) and crawlability.

#### 3. **Sitemap & Robots**

- `src/app/sitemap.js`: Generates XML sitemap with priorities (e.g., homepage: 1.0).
- `src/app/robots.js`: Allows crawling of `/` but disallows `/api/`.
- **Uses**: Helps search engines index pages efficiently.

#### 4. **Providers & Default SEO** (`src/components/Providers.jsx`, `src/lib/seo.js`)

- Wraps app with `DefaultSeo` for global defaults (title template, OG images).
- **Uses**: Ensures consistent site-wide SEO (e.g., `@gwcdata` Twitter handle).

#### 5. **Best Practices & Uses**

- **Performance**: Static metadata for fast loads; schemas boost click-through rates by 20-30% (per
  Google studies).
- **Customization**: Add GA in `<SEO />` for analytics; use `generateArticleSchema` for blog posts.
- **Testing**: Use Google Search Console or
  [Rich Results Test](https://search.google.com/test/rich-results) to validate schemas.
- **Example on Services Page**: Already uses FAQ/Service schemas for AI consulting snippets.

This setup makes your site SEO-optimized out-of-the-box—focus on content, and the template handles
the rest!

If you need code examples, expansions, or help with a specific page/animation, let me know!
