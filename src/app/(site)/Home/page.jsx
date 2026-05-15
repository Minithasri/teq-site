import AIMatters from '@/components//homePage/AIMatters';
import HomeBanner from '@/components/homePage/HomeBanner';
import ROI from '@/components/homePage/ROI';
import TechnologyPartner from '@/components/homePage/TechnologyPartner';
import dynamic from 'next/dynamic';
import FullStackAgent from '@/components/homePage/FullStackAgent';
import AISolutions from '@/components/homePage/AISolutions';
import AIAgents from '@/components/homePage/AIAgents';
import AINative from '@/components/homePage/AINative';
import ConcepttoProduction from '@/components/homePage/ConcepttoProduction';
import AIVideosWrapper from '@/components/homePage/AIVideosWrapper';

export const metadata = {
  title: 'Enterprise AI Agents & Data Solutions | GWC DATA.AI',
  description:
    'GWC DATA.AI provides enterprise AI agents that automate complex data management, ensure compliance, and enable faster decision-making across your organization.',
  keywords:
    'enterprise AI agents, data management automation, AI solutions, compliance automation, decision intelligence',
  alternates: {
    canonical: 'https://gwcdata.ai/',
  },
  openGraph: {
    title: 'Enterprise AI Agents & Data Solutions | GWC DATA.AI',
    description: 'Automate complex data management with AI-powered enterprise solutions.',
    type: 'website',
    url: 'https://gwcdata.ai/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise AI Agents & Data Solutions | GWC DATA.AI',
    description: 'Automate complex data management with AI-powered enterprise solutions.',
  },
};

export default function HomePage() {
  return (
    <div>
      {/* 🧬 STRUCTURED DATA (JSON-LD) 
          This provides search engines and AI systems with explicit 
          metadata about the organization, improving brand authority.
      */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />

      <main>
        <HomeBanner />
        <TechnologyPartner />
        <ROI />
        <FullStackAgent />
        <AIVideosWrapper />
        <AINative />
        <AISolutions />
        <AIAgents />
        <ConcepttoProduction />
        <AIMatters />
      </main>
    </div>
  );
}
