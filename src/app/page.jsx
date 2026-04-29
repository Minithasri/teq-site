import HomePage from './(site)/Home/page';

export const metadata = {
  metadataBase: new URL('https://gwcdata.ai'),
  title: 'GWC DATA.AI | Enterprise AI Agents & Solutions',
  description:
    'GWC streamlines and automates complex data management, ensuring transparency, compliance, and smarter, faster decision making across the organization.',
  openGraph: {
    title: 'GWC DATA.AI | Enterprise AI Agents & Solutions',
    description:
      'Autonomous agents that convert insight into action seamlessly integrated within your data ecosystem. Welcome to the future of intelligent operations.',
    url: 'https://gwcdata.ai',
    siteName: 'GWC DATA.AI',
    images: [
      {
        url: '/images/HomePage/agenteco.png',
        width: 1200,
        height: 630,
        alt: 'GWC AI Agent Ecosystem',
      },
      {
        url: '/images/HomePage/pro.png',
        width: 1200,
        height: 630,
        alt: 'GWC Procurement Agent',
      },
      {
        url: '/images/HomePage/supply6.webp',
        width: 1200,
        height: 630,
        alt: 'Supply Chain AI Agent',
      },
      {
        url: '/images/AIVideologo.png',
        width: 800,
        height: 800,
        alt: 'GWC AI Action Video',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GWC DATA.AI | Enterprise AI Agents & Solutions',
    description: 'Autonomous agents that convert insight into action.',
    images: ['/images/HomePage/agenteco.png'],
  },
};

export default function Home() {
  return <HomePage />;
}
