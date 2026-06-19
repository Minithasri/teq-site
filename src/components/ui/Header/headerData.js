// headerData.js
export const headerData = {
  banner: {
    text: 'Solutions Matter – Code, Collaboration, Creativity, Commitment, Impact.',
    borderRadius: 'var(--radius)',
  },

  logo: {
    text: 'GWC Data.Ai',
  },

  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Company',
      href: '/company',
      megaMenu: true,
      subtitle: 'Building the future of data-driven growth',
      cta: {
        text: 'Explore Company',
        href: '/company',
      },
      children: [
        { label: 'About Us', href: '/company/about' },
        { label: 'Vision & Mission', href: '/company/vision-mission' },
        { label: 'Leadership', href: '/company/leadership' },
        { label: 'Work From Hometown', href: '/company/work-from-hometown' },
        { label: 'Careers', href: '/careers' },
        { label: 'Blogs', href: '/blogs' },
      ],
      megaMenuColumns: [
        {
          title: 'ABOUT',
          links: [
            { label: 'About Us', href: '/company/about' },
            // { label: 'Vision & Mission', href: '/company/vision-mission' },
            // { label: 'Leadership Team', href: '/company/leadership' },
          ],
        },
        {
          title: 'WORK CULTURE',
          links: [
            { label: 'Careers', href: '/careers' },
            { label: 'Case Study', href: '/casestudy' },
            { label: 'Blogs', href: '/blogs' },
            { label: 'Work From Hometown', href: '/company/work-from-hometown' },
            // { label: 'Core Values', href: '/company/values' },
          ],
        },
      ],
    },
    {
      label: 'Solutions',
      href: '/solutions',
      megaMenu: true,
      subtitle: 'AI-powered marketing automation at scale',
      cta: {
        text: 'Our partner agencies',
        href: '/partners/agencies',
      },
      children: [
        { label: 'Data Strategy & Engineering', href: '/solutions/data-strategy-engineering' },
        { label: 'Data Governance', href: '/solutions/data-governance' },
        {
          label: 'Business Intelligence & Analytics',
          href: '/solutions/business-intelligence-analytics',
        },
        { label: 'BI Migration & Modernization', href: '/solutions/bi-migration-modernization' },
        { label: 'Cloud Transformation', href: '/solutions/cloud-transformation' },
      ],
      megaMenuColumns: [
        {
          title: 'OUR SOLUTIONS',
          links: [
            { label: 'Data Strategy & Engineering', href: '/solutions/data-strategy-engineering' },
            { label: 'Data Governance', href: '/solutions/data-governance' },
            {
              label: 'Business Intelligence & Analytics',
              href: '/solutions/business-intelligence-analytics',
            },
            {
              label: 'BI Migration & Modernization',
              href: '/solutions/bi-migration-modernization',
            },
            { label: 'Cloud Transformation', href: '/solutions/cloud-transformation' },
          ],
        },
      ],
    },
    {
      label: 'Partners',
      href: '/partners/domo',
      megaMenu: true,
      subtitle: 'Grow together with industry leaders',
      cta: {
        text: 'Become a Partner',
        href: '/partners/domo/join',
      },
      children: [
        { label: 'Domo', href: '/partners/domo' },
        { label: 'Snowflake', href: '/partners/snowflake' },
        { label: 'Databricks', href: '/partners/databricks' },
        { label: 'Google Cloud', href: '/partners/google-cloud' },
        { label: 'Boomi', href: '/partners/boomi' },
        { label: 'Claude', href: '/partners/claude' },
      ],
      megaMenuColumns: [
        {
          title: 'PARTNER TYPES',
          links: [
            { label: 'Domo', href: '/partners/domo' },
            { label: 'Snowflake', href: '/partners/snowflake' },
            { label: 'Databricks', href: '/partners/databricks' },
            { label: 'Google Cloud', href: '/partners/google-cloud' },
            { label: 'Boomi', href: '/partners/boomi' },
            { label: 'Claude', href: '/partners/claude' },
          ],
        },
      ],
    },
    {
      label: 'Domo',
      href: '/domo-consulting',
      megaMenu: false,
      children: [],
      megaMenuColumns: [],
    },
    {
      label: 'Claude',
      href: '/partners/claude',
      megaMenu: false,
      children: [],
      megaMenuColumns: [],
    },
    {
      label: 'Agentic Domo',
      href: '/agentic-ai',
      megaMenu: false,
      agenticMegaMenu: true,
      children: [],
      megaMenuColumns: [],
      agenticCategories: [
        {
          id: 'customer-support',
          label: 'Customer Support',
          agents: [
            {
              label: 'Voice Auditor Agent',
              href: '/agentic-ai/voice-call-quality-evaluation-compliance-agent',
            },
            {
              label: 'Chat Auditor Agent',
              href: '/agentic-ai/chat-quality-evaluation-compliance-agent',
            },
            {
              label: 'Email Auditor Agent',
              href: '/agentic-ai/email-quality-evaluation-compliance-agent',
            },
            { label: 'Warranty Manager Agent', href: '/agentic-ai/warranty-management-agent' },
            {
              label: 'Customer Analytics Agent',
              href: '/agentic-ai/sierra-customer-support-analytics-agent',
            },
            {
              label: 'Ticket Assistant Agent',
              href: '/agentic-ai/aai-it-service-ticket-agent',
            },
            {
              label: 'Tenant Analyzer Agent',
              href: '/agentic-ai/tenant-sentiment-intelligence-agent',
            },
          ],
        },
        {
          id: 'procurement',
          label: 'Procurement',
          agents: [
            { label: 'Procurement Assistant Agent', href: '/agentic-ai/procurement-agent' },
            {
              label: 'Manufacturing Procurement Agent',
              href: '/agentic-ai/manufacturing-procurement-agent',
            },
            { label: 'Catalog Manager Agent', href: '/agentic-ai/supplier-catalog-agent' },
            {
              label: 'Supplier Analyzer Agent',
              href: '/agentic-ai/supplier-performance-intelligence-agent',
            },
            {
              label: 'Invoice Detector Agent',
              href: '/agentic-ai/invoice-anomaly-detection-agent',
            },
            { label: 'Price Guard Agent', href: '/agentic-ai/price-guard' },
          ],
        },
        {
          id: 'human-resources',
          label: 'Human Resources',
          agents: [
            { label: 'Resume Screening Agent', href: '/agentic-ai/ai-resume-screening' },
            { label: 'Candidate Screening Agent', href: '/agentic-ai/ai-candidate-screening' },
            { label: 'Hiring Assistant Agent', href: '/agentic-ai/ai-hiring-assistant' },
            {
              label: 'Recruitment Intelligence Agent',
              href: '/agentic-ai/recruitment-intelligence-agent',
            },
            { label: 'Roster Manager Agent', href: '/agentic-ai/magic-rostering' },
          ],
        },
        {
          id: 'sales',
          label: 'Sales',
          agents: [
            { label: 'Sales App Agent', href: '/agentic-ai/sales-agent-app' },
            {
              label: 'Sales Assistant Agent',
              href: '/agentic-ai/intelligent-sales-productivity-app',
            },
            { label: 'Lead Manager Agent', href: '/agentic-ai/lead-distribution-agent' },
            { label: 'Analyst Chatbot Agent', href: '/agentic-ai/analyst-chatbot' },
          ],
        },
        {
          id: 'marketing',
          label: 'Marketing',
          agents: [
            {
              label: 'SEO Mapper Agent',
              href: '/agentic-ai/seo-opportunity-mapper-agent',
            },
            {
              label: 'Influencer Analyzer Agent',
              href: '/agentic-ai/influencer-fit-assessment-agent',
            },
            {
              label: 'Upsell Assistant Agent',
              href: '/agentic-ai/d2c-upsell-cross-sell-agent',
            },
            {
              label: 'Marketing Suite Agent',
              href: '/agentic-ai/multi-agent-digital-marketing-adtech',
            },
            {
              label: 'Workflow Assistant Agent',
              href: '/agentic-ai/digital-marketing-interactive-workflow',
            },
            { label: 'Budget Assistant Agent', href: '/agentic-ai/budget-allocation-agent' },
            { label: 'Campaign Analyzer Agent', href: '/agentic-ai/campaign-performance-agent' },
            {
              label: 'CRM Assistant Agent',
              href: '/agentic-ai/email-crm-optimization-agent',
            },
            {
              label: 'Style Recommender Agent',
              href: '/agentic-ai/personalized-product-color-palette-recommender',
            },
            {
              label: 'Campaign Alerts Agent',
              href: '/agentic-ai/marketing-campaign-performance-alert-agent',
            },
            {
              label: 'Marketing Assistant Agent',
              href: '/agentic-ai/ai-marketing-recommendation-agent',
            },
            {
              label: 'Property Marketing Agent',
              href: '/agentic-ai/real-estate-marketing-agent',
            },
            {
              label: 'Search Marketing Agent',
              href: '/agentic-ai/real-estate-search-history-marketing',
            },
          ],
        },
        {
          id: 'operations',
          label: 'Operations',
          agents: [
            { label: 'Dashboard Summary Agent', href: '/agentic-ai/dashboard-summary-agent' },
            {
              label: 'Booking Detector Agent',
              href: '/agentic-ai/booking-amendment-detection-agent',
            },
            {
              label: 'Exception Handler Agent',
              href: '/agentic-ai/autofulfill-ai-intelligent-exception-handling',
            },
            {
              label: 'Conflict Resolver Agent',
              href: '/agentic-ai/capacity-conflict-resolver-agent',
            },
            {
              label: 'Listing Tracker Agent',
              href: '/agentic-ai/listing-freshness-expiry-agent',
            },
          ],
        },
        {
          id: 'retail-merchandising',
          label: 'Retail & Merchandising',
          agents: [
            { label: 'Store Allocation Agent', href: '/agentic-ai/store-to-store-allocation' },
            {
              label: 'Product Planner Agent',
              href: '/agentic-ai/first-allocation-product-planner',
            },
            {
              label: 'Pricing Assistant Agent',
              href: '/agentic-ai/smart-pricing-allocation-agent',
            },
            {
              label: 'Review Intelligence Agent',
              href: '/agentic-ai/product-review-intelligence-agent',
            },
            {
              label: 'Cart Recovery Agent',
              href: '/agentic-ai/cart-abandonment-recovery-agent',
            },
            {
              label: 'Cart Reasoning Agent',
              href: '/agentic-ai/cart-abandonment-reasoning-agent',
            },
            { label: 'Discount Assistant Agent', href: '/agentic-ai/discount-suggestion-agent' },
            {
              label: 'Retail Optimization Agent',
              href: '/agentic-ai/retail-inventory-optimization-personalized-marketing-agent',
            },
            {
              label: 'Abuse Detector Agent',
              href: '/agentic-ai/return-abuse-detection-agent',
            },
            {
              label: 'Floor Allocator Agent',
              href: '/agentic-ai/sales-floor-allocation-agent',
            },
            {
              label: 'Planogram Navigator Agent',
              href: '/agentic-ai/product-planogram-navigator-agent',
            },
            {
              label: 'Promotion Analyzer Agent',
              href: '/agentic-ai/retail-promotion-effectiveness-agent',
            },
            {
              label: 'Customer Segmentation Agent',
              href: '/agentic-ai/customer-segmentation-analysis',
            },
            { label: 'Retail Optimization Agent', href: '/agentic-ai/retail-optimization' },
          ],
        },
        {
          id: 'manufacturing-maintenance',
          label: 'Manufacturing & Maintenance',
          agents: [
            {
              label: 'Production Planning Agent',
              href: '/agentic-ai/manufacturing-production-planning-predictive-maintenance-agent',
            },
            {
              label: 'Downtime Analyzer Agent',
              href: '/agentic-ai/ai-driven-downtime-root-cause-agent',
            },
            {
              label: 'Maintenance Approval Agent',
              href: '/agentic-ai/auto-approve-maintenance-agent',
            },
            {
              label: 'Hazard Prioritizer Agent',
              href: '/agentic-ai/hazard-alert-prioritization-agent',
            },
            {
              label: 'Inventory Disposal Agent',
              href: '/agentic-ai/ai-driven-inventory-disposal-agent',
            },
            { label: 'Consumable Manager Agent', href: '/agentic-ai/manufacturing-consumable' },
            {
              label: 'Risk Forecaster Agent',
              href: '/agentic-ai/risk-forecasting-safety-intelligence-agent',
            },
            {
              label: 'Supply Efficiency Agent',
              href: '/agentic-ai/supply-chain-efficiency-agents',
            },
          ],
        },
        {
          id: 'finance-risk',
          label: 'Finance & Risk',
          agents: [
            {
              label: 'Fraud Analyzer Agent',
              href: '/agentic-ai/risk-fraudulent-transactions-analysis',
            },
            {
              label: 'Lease Extraction Agent',
              href: '/agentic-ai/lease-agreement-extraction-agent',
            },
            {
              label: 'Menu Validator Agent',
              href: '/agentic-ai/menu-compliance-validation-agent',
            },
          ],
        },
        {
          id: 'real-estate',
          label: 'Real Estate & Property Management',
          agents: [
            {
              label: 'Property Comparison Agent',
              href: '/agentic-ai/real-estate-property-comparison-agent',
            },
            {
              label: 'Property Suggestions Agent',
              href: '/agentic-ai/real-estate-suggestion-agent',
            },
          ],
        },
      ],
    },
    // {
    //   label: 'Careers',
    //   href: '/careers',
    //   megaMenu: false,
    //   children: [],
    //   megaMenuColumns: [],
    // },
  ],

  ctaButton: {
    text: 'Contact Us',
    href: '/contact',
  },

  styles: {
    megaMenu: {
      overlayOpacity: 0.4,
    },
  },
};

export const subtitles = {
  Solutions: 'AI-powered marketing automation at scale',
  Company: 'Building the future of data-driven growth',
  Partners: 'Grow together with industry leaders',
  Careers: 'Join a team that values innovation & impact',
  Domo: 'Advanced AI solutions for your business',
  // Boomi: 'Seamless integration solutions',
  'Agentic AI': 'Advanced AI solutions for your business',
};

export const ctas = {
  Solutions: { text: 'Our partner agencies', href: '/partners/agencies' },
  Company: { text: 'Explore Company', href: '/company' },
  Partners: { text: 'Become a Partner', href: '/partners/join' },
  Careers: { text: 'Apply Now', href: '/careers/apply' },
  Domo: { text: 'Learn More', href: '/domo-consulting/demo' },
  // Boomi: { text: 'Get Started', href: '/boomi-integration/contact' },
  'Agentic AI': { text: 'Learn More', href: '/boomi-integration' },
};
