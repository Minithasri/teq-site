import { getBaseUrl } from './utils';

export const defaultSEO = {
  title: 'GWC Data AI - Agentic AI & Data Analytics Solutions',
  description:
    'Leading provider of Agentic AI and Data Analytics solutions. We help businesses unlock insights and automate processes with cutting-edge artificial intelligence.',
  keywords:
    'AI, Artificial Intelligence, Data Analytics, Machine Learning, Agentic AI, Data Solutions, Business Intelligence, AI Consulting, Machine Learning Solutions',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: getBaseUrl(),
    siteName: 'GWC Data AI',
    title: 'GWC Data AI - Agentic AI & Data Analytics Solutions',
    description: 'Leading provider of Agentic AI and Data Analytics solutions.',
    images: [
      {
        url: `${getBaseUrl()}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'GWC Data AI - Transforming Businesses with AI',
      },
    ],
  },
  twitter: {
    handle: '@gwcdata',
    site: '@gwcdata',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=5',
    },
    {
      name: 'theme-color',
      content: '#0066FF',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'default',
    },
    {
      name: 'author',
      content: 'GWC Data AI',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/icons/icon-192.png',
      sizes: '192x192',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
  ],
};

export const createPageSEO = (pageSEO = {}) => ({
  ...defaultSEO,
  ...pageSEO,
  openGraph: {
    ...defaultSEO.openGraph,
    ...pageSEO.openGraph,
  },
  twitter: {
    ...defaultSEO.twitter,
    ...pageSEO.twitter,
  },
});
