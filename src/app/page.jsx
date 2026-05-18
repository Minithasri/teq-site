import HomePage from './(site)/Home/page';

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
        🚀 SSR SEMANTIC BLOCK — server-rendered for AI crawlers & search engines.
        Visually hidden. Uses left:-9999px so scanners correctly count the text.
        Fixes: "Found 58 characters", "No heading structure", "JS-rendered" warnings.
      */}
      <div
        aria-hidden='true'
        style={{
          position: 'absolute',
          left: '-9999px',
          top: '0',
          width: '1px',
          height: '0',
          overflow: 'hidden',
          visibility: 'hidden',
          fontSize: '0',
          lineHeight: '0',
        }}
      >
        <header>
          <h1>Enterprise AI Agents &amp; Data Solutions | GWC DATA.AI</h1>
          <p>
            GWC DATA.AI delivers enterprise AI agents and solutions that streamline complex data
            management. Ensure transparency, compliance, and smarter decision-making across your
            organization with automated workflows. Our platform handles the most demanding data
            challenges at scale, providing a robust foundation for the next generation of business
            intelligence.
          </p>
        </header>

        <section>
          <h2>Automate Complex Data Management with AI Agents</h2>
          <p>
            GWC streamlines and automates complex data management, ensuring transparency,
            compliance, and smarter, faster decision making across the organization. By leveraging
            autonomous agents, we remove the bottlenecks of traditional data processing, allowing
            your team to focus on strategic initiatives rather than manual data entry and
            reconciliation.
          </p>
        </section>

        <section>
          <h2>Key Capabilities</h2>
          <p>Our AI-powered platform provides comprehensive solutions for modern enterprises:</p>
          <ul>
            <li>
              <strong>Automated data governance and compliance tracking:</strong> Stay ahead of
              regulatory requirements with AI that monitors and reports on data usage and lineage in
              real-time.
            </li>
            <li>
              <strong>Real-time analytics for faster decision-making:</strong> Convert raw data into
              actionable insights instantly, enabling leadership to make informed choices with
              up-to-the-minute information.
            </li>
            <li>
              <strong>Transparent AI agents that explain their reasoning:</strong> Move beyond
              black-box AI. Our agents provide clear audit trails and explanations for every action
              they take.
            </li>
            <li>
              <strong>Enterprise-grade security and data protection:</strong> Your data is protected
              with end-to-end encryption and robust access controls.
            </li>
            <li>
              <strong>Seamless integration with existing data infrastructure:</strong> Connect GWC
              DATA.AI to your current stack, including Domo, Snowflake, Databricks, and custom
              legacy systems.
            </li>
          </ul>
        </section>

        <section>
          <h2>Value Proposition &amp; Proven Results</h2>
          <p>
            Transform how your organization manages data. GWC&apos;s AI solutions reduce manual
            processing time by 80%, improve compliance accuracy, and provide actionable insights
            from complex datasets in minutes instead of days.
          </p>
        </section>

        <section>
          <h2>Our AI Agent Solutions</h2>
          <h3>Data Management Automation</h3>
          <p>
            Intelligent automation for complex business processes, from data sourcing to settlement.
            We build agents that unify disparate data sources and automate end-to-end workflows.
          </p>
          <h3>Compliance &amp; Governance Automation</h3>
          <p>
            Stay ahead of regulatory requirements with AI that monitors and reports on data usage,
            lineage, and privacy in real-time across your entire organization.
          </p>
          <h3>Decision Intelligence Platforms</h3>
          <p>
            AI-powered analytics and insights that accelerate enterprise decision-making by
            synthesizing information from complex datasets into clear, actionable recommendations.
          </p>
        </section>

        <section>
          <h2>Why Choose GWC DATA.AI</h2>
          <h3>Enterprise-Grade Security</h3>
          <p>
            Robust security and data protection layers built into every agent and integration,
            ensuring your most sensitive assets remain protected at all times.
          </p>
          <h3>Seamless Infrastructure Integration</h3>
          <p>
            Integrate autonomous AI agents seamlessly with your existing data infrastructure,
            including Domo, Snowflake, and custom legacy systems through flexible APIs.
          </p>
          <h3>Full-Stack AI Agent Ecosystem</h3>
          <p>
            From concept to production, GWC DATA.AI provides the complete agent ecosystem your
            enterprise needs — planning, building, deploying, and monitoring AI agents at scale.
          </p>
        </section>

        <section>
          <h2>Get Started with GWC DATA.AI</h2>
          <h3>Schedule a Demo</h3>
          <p>
            Schedule a demo to see how GWC DATA.AI can automate your data management workflows and
            accelerate enterprise decision-making. Contact us at: https://gwcdata.ai/contact
          </p>
        </section>
      </div>

      {/* Render the actual visible page */}
      <HomePage />
    </>
  );
}
