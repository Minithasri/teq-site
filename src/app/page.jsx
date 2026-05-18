import HomePage from './(site)/Home/page';
import SeoBlock from './(site)/Home/SeoBlock';

export const metadata = {
  metadataBase: new URL('https://gwcdata.ai'),
  title: 'GWC DATA.AI | Enterprise AI Agents & Solutions',
  description:
    'GWC streamlines and automates complex data management, ensuring transparency, compliance, and smarter, faster decision making across the organization.',
  openGraph: {
    title: 'GWC DATA.AI | Enterprise AI Agents & Solutions',
    description:
      'GWC streamlines and automates complex data management, ensuring transparency, compliance, and smarter, faster decision making across the organization.',
    url: 'https://gwcdata.ai',
    siteName: 'GWC DATA.AI',
    images: [
      {
        url: '/images/HomePage/agent2.webp',
        width: 1200,
        height: 630,
        alt: 'GWC AI Agent Ecosystem',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GWC DATA.AI | Enterprise AI Agents & Solutions',
    description:
      'GWC streamlines and automates complex data management, ensuring transparency, compliance, and smarter, faster decision making across the organization.',
    images: ['/images/HomePage/agent2.webp'],
  },
  keywords:
    'enterprise AI agents, data management automation, AI solutions, compliance automation, decision intelligence, automated workflows',
  alternates: {
    canonical: 'https://gwcdata.ai/',
  },
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GWC DATA.AI',
    description:
      'GWC streamlines and automates complex data management, ensuring transparency, compliance, and smarter, faster decision making across the organization.',
    url: 'https://www.gwcdata.ai',
    logo: 'https://www.gwcdata.ai/logo.png',
    sameAs: ['https://www.linkedin.com/company/gwc-data-ai'],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      email: 'contact@gwcdata.ai',
    },
    areaServed: 'Worldwide',
    knowsAbout: [
      'Enterprise AI',
      'Data Management',
      'AI Agents',
      'Data Governance',
      'Compliance Automation',
    ],
  };

  return (
    <>
      {/* 🛠️ JSON-LD Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/*
        SeoBlock is a pure server component — no client imports.
        Next.js will pre-render it to real HTML so crawlers see actual <h1> tags.
      */}
      <SeoBlock />

      {/* Visible page — client components render here */}
      <HomePage />
    </>
  );
}
