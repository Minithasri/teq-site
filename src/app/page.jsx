import HomePage from './(site)/Home/page';

export const metadata = {
  metadataBase: new URL('https://gwcdata.ai'),
  title: 'Enterprise AI Agents & Solutions | GWC DATA.AI',
  description:
    'GWC DATA.AI delivers enterprise AI agents and solutions that streamline complex data management, ensuring transparency, compliance, and smarter decision-making.',
  openGraph: {
    title: 'Enterprise AI Agents & Solutions | GWC DATA.AI',
    description:
      'Ensure transparency, compliance, and smarter decision-making across your organization with automated AI workflows.',
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
    title: 'Enterprise AI Agents & Solutions | GWC DATA.AI',
    description: 'Streamline complex data management with AI-powered automated workflows.',
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

      {/* 🚀 SEO Semantic Structure (SSR Visible, Hidden from UI) */}
      <section style={{ display: 'none' }} aria-hidden='true'>
        <header>
          <h1>Enterprise AI Agents & Solutions | GWC DATA.AI</h1>
          <p>
            GWC DATA.AI delivers enterprise AI agents and solutions that streamline complex data
            management. Ensure transparency, compliance, and smarter decision-making across your
            organization with automated workflows.
          </p>
        </header>

        <main>
          <section>
            <h2>Key Capabilities</h2>
            <p>Our AI-powered platform provides high-impact capabilities including:</p>
            <ul>
              <li>Automated data governance and compliance tracking</li>
              <li>Real-time analytics for faster decision-making</li>
              <li>Transparent AI agents that explain their reasoning</li>
              <li>Enterprise-grade security and data protection</li>
              <li>Seamless integration with existing data infrastructure</li>
            </ul>
          </section>

          <section>
            <h2>Value Proposition</h2>
            <p>
              Transform how your organization manages data. GWC's AI solutions reduce manual
              processing time by 80%, improve compliance accuracy, and provide actionable insights
              from complex datasets in minutes instead of days.
            </p>
          </section>

          <section>
            <h2>Proven Results & Enterprise Impact</h2>
            <p>
              By deploying GWC's autonomous agents, organizations achieve a 99.7% uptime SLA and
              significant operational efficiency gains in automated support and data workflows.
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
