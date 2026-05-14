import HomePage from './(site)/Home/page';

export const metadata = {
  metadataBase: new URL('https://gwcdata.ai'),
  title: 'Enterprise AI Agents & Data Solutions | GWC DATA.AI',
  description:
    'GWC DATA.AI provides enterprise AI agents that automate complex data management, ensure compliance, and enable faster decision-making across your organization.',
  openGraph: {
    title: 'Enterprise AI Agents & Data Solutions | GWC DATA.AI',
    description: 'Automate complex data management with AI-powered enterprise solutions.',
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
    title: 'Enterprise AI Agents & Data Solutions | GWC DATA.AI',
    description: 'Automate complex data management with AI-powered enterprise solutions.',
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

      {/* 🚀 SEO Semantic Structure (SSR Visible, Visually Hidden for Users) */}
      <section
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: '0',
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: '0',
        }}
      >
        <header>
          <h1>Enterprise AI Agents & Data Solutions | GWC DATA.AI</h1>
          <p>
            GWC DATA.AI delivers enterprise AI agents and solutions that streamline complex data
            management. Ensure transparency, compliance, and smarter decision-making across your
            organization with automated workflows.
          </p>
        </header>

        <main>
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
              Intelligent automation for complex business processes, from data sourcing to
              settlement.
            </p>
            <h3>Compliance & Governance</h3>
            <p>
              Automated data governance and compliance tracking to ensure regulatory adherence and
              transparency.
            </p>
            <h3>Decision Intelligence</h3>
            <p>
              AI-powered analytics and insights that accelerate enterprise decision-making and
              predictive growth.
            </p>
          </section>

          <section>
            <h2>Key Capabilities</h2>
            <ul>
              <li>Automated data governance and compliance tracking</li>
              <li>Real-time analytics for faster decision-making</li>
              <li>Transparent AI agents that explain their reasoning</li>
              <li>Enterprise-grade security and data protection</li>
              <li>Seamless integration with existing data infrastructure</li>
            </ul>
          </section>

          <section>
            <h2>Proven Results & Value Proposition</h2>
            <p>
              Transform how your organization manages data. GWC's AI solutions reduce manual
              processing time by 80%, improve compliance accuracy, and provide actionable insights
              from complex datasets in minutes instead of days.
            </p>
            <p>80% reduction in manual processing</p>
            <p>Minutes instead of days for insights</p>
          </section>

          <section>
            <h2>Why Choose GWC DATA.AI</h2>
            <h3>Enterprise-Grade Security</h3>
            <p>
              Robust security and data protection layers built into every agent and integration.
            </p>
            <h3>Seamless Integration</h3>
            <p>
              Integrate autonomous AI agents seamlessly with your existing data infrastructure and
              ecosystem.
            </p>
          </section>

          <section>
            <h2>Get Started</h2>
            <p>
              Schedule a demo to see how GWC DATA.AI can automate your data management workflows and
              accelerate enterprise decision-making.
            </p>
          </section>
        </main>
      </section>

      <HomePage />
    </>
  );
}
