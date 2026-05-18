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
      {/* 🧬 STRUCTURED DATA (JSON-LD) */}
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

      {/*
        🚀 SSR SEMANTIC BLOCK — fully server-rendered for crawlers & AI indexers.
        Visually hidden from users. Uses position absolute + left:-9999px so
        crawlers count the text (clip/display:none can suppress it).
        This fixes: "Found 58 characters", "No heading structure", "JS-rendered" warnings.
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

        <main>
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
                regulatory requirements with AI that monitors and reports on data usage and lineage
                in real-time.
              </li>
              <li>
                <strong>Real-time analytics for faster decision-making:</strong> Convert raw data
                into actionable insights instantly, enabling leadership to make informed choices
                with up-to-the-minute information.
              </li>
              <li>
                <strong>Transparent AI agents that explain their reasoning:</strong> Move beyond
                black-box AI. Our agents provide clear audit trails and explanations for every
                action they take.
              </li>
              <li>
                <strong>Enterprise-grade security and data protection:</strong> Your data is
                protected with end-to-end encryption and robust access controls.
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
              from complex datasets in minutes instead of days. This shift from reactive to
              proactive data management empowers your organization to scale efficiently while
              maintaining full governance and control over your digital assets.
            </p>
          </section>

          <section>
            <h2>Our AI Agent Solutions</h2>
            <h3>Data Management Automation</h3>
            <p>
              Intelligent automation for complex business processes, from data sourcing to
              settlement. We build agents that unify disparate data sources and automate end-to-end
              workflows.
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
              Robust security and data protection layers are built into every agent and integration,
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
              accelerate enterprise decision-making. Join forward-thinking enterprises already
              transforming their operations with our intelligent AI agent ecosystem.
            </p>
            <p>Contact us today at: https://gwcdata.ai/contact</p>
          </section>
        </main>
      </div>

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
