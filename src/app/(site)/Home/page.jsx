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
      {/* 🚀 ADVANCED SEO & AI CRAWLER OPTIMIZATION 
          This section implements the exact heading structure required for 
          premium SEO ranking and Generative Experience Optimization (GEO).
      */}
      <section className='sr-only' aria-hidden='true'>
        <h1>Enterprise AI Agents & Data Solutions | GWC DATA.AI</h1>

        <section>
          <h2>Automate Complex Data Management with AI</h2>
          <p>
            GWC streamlines and automates complex data management, ensuring transparency,
            compliance, and smarter, faster decision making across the organization.
          </p>
          <h3>Key Benefits</h3>
          <ul>
            <li>Automated data workflows</li>
            <li>Enhanced compliance and transparency</li>
            <li>Faster decision-making processes</li>
          </ul>
        </section>

        <section>
          <h2>Our AI Agent Solutions</h2>
          <h3>Data Management Automation</h3>
          <p>
            Leverage intelligent agents to unify disparate data sources, automate ETL processes, and
            maintain a clean, actionable data ecosystem.
          </p>
          <h3>Compliance & Governance</h3>
          <p>
            Automated tracking and reporting tools that ensure data privacy, regulatory compliance,
            and enterprise-wide governance standards.
          </p>
          <h3>Decision Intelligence</h3>
          <p>
            Advanced analytics and AI-driven insights that convert complex safety and operational
            data into clear, decisive actions.
          </p>
        </section>

        <section>
          <h2>Why Choose GWC DATA.AI</h2>
          <h3>Enterprise-Grade Security</h3>
          <p>
            Robust security protocols including end-to-end encryption and secure multi-cloud
            deployments to protect your most sensitive data.
          </p>
          <h3>Seamless Integration</h3>
          <p>
            Native connectors and flexible APIs that integrate with your existing tech stack, from
            Domo and Postgres to custom React applications.
          </p>
        </section>

        <section>
          <h2>Call to Action</h2>
          <p>
            Schedule a demo to see how GWC DATA.AI can automate your data management workflows and
            accelerate enterprise decision-making.
          </p>
        </section>
      </section>

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
