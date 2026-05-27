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
      ],
      megaMenuColumns: [
        {
          title: 'ABOUT',
          links: [
            { label: 'About Us', href: '/company/about' },
            // { label: 'Vision & Mission', href: '/company/vision-mission' },
            // { label: 'Leadership Team', href: '/company/leadership' },
            { label: 'Case Study', href: '/casestudy' },
          ],
        },
        {
          title: 'WORK CULTURE',
          links: [
            { label: 'Work From Hometown', href: '/company/work-from-hometown' },
            // { label: 'Core Values', href: '/company/values' },
            { label: 'Careers', href: '/careers' },
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
              label: 'Voice Call Quality Evaluation & Compliance Agent',
              href: '/agentic-ai/voice-call-quality-evaluation-compliance-agent',
            },
            {
              label: 'Chat Quality Evaluation & Compliance Agent',
              href: '/agentic-ai/chat-quality-evaluation-compliance-agent',
            },
            {
              label: 'Email Quality Evaluation & Compliance Agent',
              href: '/agentic-ai/email-quality-evaluation-compliance-agent',
            },
            { label: 'Warranty Management Agent', href: '/agentic-ai/warranty-management-agent' },
            {
              label: 'Sierra – Customer Support Analytics Agent',
              href: '/agentic-ai/sierra-customer-support-analytics-agent',
            },
            {
              label: 'AAI – IT Service Ticket Agent',
              href: '/agentic-ai/aai-it-service-ticket-agent',
            },
            {
              label: 'Tenant Sentiment Intelligence Agent',
              href: '/agentic-ai/tenant-sentiment-intelligence-agent',
            },
          ],
        },
        {
          id: 'procurement',
          label: 'Procurement',
          agents: [
            { label: 'Procurement Agent', href: '/agentic-ai/procurement-agent' },
            {
              label: 'Manufacturing Procurement Agent',
              href: '/agentic-ai/manufacturing-procurement-agent',
            },
            { label: 'Supplier Catalog Agent', href: '/agentic-ai/supplier-catalog-agent' },
            {
              label: 'Supplier Performance Intelligence Agent',
              href: '/agentic-ai/supplier-performance-intelligence-agent',
            },
            {
              label: 'Invoice Anomaly Detection Agent',
              href: '/agentic-ai/invoice-anomaly-detection-agent',
            },
            { label: 'Price Guard', href: '/agentic-ai/price-guard' },
          ],
        },
        {
          id: 'human-resources',
          label: 'Human Resources',
          agents: [
            { label: 'AI Resume Screening', href: '/agentic-ai/ai-resume-screening' },
            { label: 'AI Candidate Screening', href: '/agentic-ai/ai-candidate-screening' },
            { label: 'AI Hiring Assistant', href: '/agentic-ai/ai-hiring-assistant' },
            {
              label: 'Recruitment Intelligence Agent',
              href: '/agentic-ai/recruitment-intelligence-agent',
            },
            { label: 'Magic Rostering', href: '/agentic-ai/magic-rostering' },
          ],
        },
        {
          id: 'sales',
          label: 'Sales',
          agents: [
            { label: 'Sales Agent App', href: '/agentic-ai/sales-agent-app' },
            {
              label: 'Intelligent Sales Productivity App',
              href: '/agentic-ai/intelligent-sales-productivity-app',
            },
            { label: 'Lead Distribution Agent', href: '/agentic-ai/lead-distribution-agent' },
            { label: 'Analyst Chatbot', href: '/agentic-ai/analyst-chatbot' },
          ],
        },
        {
          id: 'marketing',
          label: 'Marketing',
          agents: [
            {
              label: 'SEO Opportunity Mapper Agent',
              href: '/agentic-ai/seo-opportunity-mapper-agent',
            },
            {
              label: 'Influencer Fit Assessment Agent',
              href: '/agentic-ai/influencer-fit-assessment-agent',
            },
            {
              label: 'D2C Upsell/Cross-sell Agent',
              href: '/agentic-ai/d2c-upsell-cross-sell-agent',
            },
            {
              label: 'Multi Agent Digital Marketing & AdTech',
              href: '/agentic-ai/multi-agent-digital-marketing-adtech',
            },
            {
              label: 'Digital Marketing Interactive Workflow',
              href: '/agentic-ai/digital-marketing-interactive-workflow',
            },
            { label: 'Budget Allocation Agent', href: '/agentic-ai/budget-allocation-agent' },
            { label: 'Campaign Performance Agent', href: '/agentic-ai/campaign-performance-agent' },
            {
              label: 'Email & CRM Optimization Agent',
              href: '/agentic-ai/email-crm-optimization-agent',
            },
            {
              label: 'Personalized Product & Color Palette Recommender',
              href: '/agentic-ai/personalized-product-color-palette-recommender',
            },
            {
              label: 'Marketing Campaign Performance & Alert Agent',
              href: '/agentic-ai/marketing-campaign-performance-alert-agent',
            },
            {
              label: 'AI Marketing & Recommendation Agent',
              href: '/agentic-ai/ai-marketing-recommendation-agent',
            },
            {
              label: 'Real Estate Marketing Agent',
              href: '/agentic-ai/real-estate-marketing-agent',
            },
            {
              label: 'Real Estate Search History Marketing',
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
              label: 'Booking Amendment Detection Agent',
              href: '/agentic-ai/booking-amendment-detection-agent',
            },
            {
              label: 'AutoFulfill AI Intelligent Exception Handling',
              href: '/agentic-ai/autofulfill-ai-intelligent-exception-handling',
            },
            {
              label: 'Capacity Conflict Resolver Agent',
              href: '/agentic-ai/capacity-conflict-resolver-agent',
            },
            {
              label: 'Listing Freshness & Expiry Agent',
              href: '/agentic-ai/listing-freshness-expiry-agent',
            },
          ],
        },
        {
          id: 'retail-merchandising',
          label: 'Retail & Merchandising',
          agents: [
            { label: 'Store to Store Allocation', href: '/agentic-ai/store-to-store-allocation' },
            {
              label: 'First Allocation Product Planner',
              href: '/agentic-ai/first-allocation-product-planner',
            },
            {
              label: 'Smart Pricing Allocation Agent',
              href: '/agentic-ai/smart-pricing-allocation-agent',
            },
            {
              label: 'Product Review Intelligence Agent',
              href: '/agentic-ai/product-review-intelligence-agent',
            },
            {
              label: 'Cart Abandonment Recovery Agent',
              href: '/agentic-ai/cart-abandonment-recovery-agent',
            },
            {
              label: 'Cart Abandonment Reasoning Agent',
              href: '/agentic-ai/cart-abandonment-reasoning-agent',
            },
            { label: 'Discount Suggestion Agent', href: '/agentic-ai/discount-suggestion-agent' },
            {
              label: 'Retail Inventory Optimization & Personalized Marketing Agent',
              href: '/agentic-ai/retail-inventory-optimization-personalized-marketing-agent',
            },
            {
              label: 'Return Abuse Detection Agent',
              href: '/agentic-ai/return-abuse-detection-agent',
            },
            {
              label: 'Sales Floor Allocation Agent',
              href: '/agentic-ai/sales-floor-allocation-agent',
            },
            {
              label: 'Product Planogram Navigator Agent',
              href: '/agentic-ai/product-planogram-navigator-agent',
            },
            {
              label: 'Retail Promotion Effectiveness Agent',
              href: '/agentic-ai/retail-promotion-effectiveness-agent',
            },
            {
              label: 'Customer Segmentation Analysis',
              href: '/agentic-ai/customer-segmentation-analysis',
            },
            { label: 'Retail Optimization', href: '/agentic-ai/retail-optimization' },
          ],
        },
        {
          id: 'manufacturing-maintenance',
          label: 'Manufacturing & Maintenance',
          agents: [
            {
              label: 'Manufacturing Production Planning & Predictive Maintenance Agent',
              href: '/agentic-ai/manufacturing-production-planning-predictive-maintenance-agent',
            },
            {
              label: 'AI-Driven Downtime Root Cause Agent',
              href: '/agentic-ai/ai-driven-downtime-root-cause-agent',
            },
            {
              label: 'Auto-Approve Maintenance Agent',
              href: '/agentic-ai/auto-approve-maintenance-agent',
            },
            {
              label: 'Hazard Alert Prioritization Agent',
              href: '/agentic-ai/hazard-alert-prioritization-agent',
            },
            {
              label: 'AI-Driven Inventory Disposal Agent',
              href: '/agentic-ai/ai-driven-inventory-disposal-agent',
            },
            { label: 'Manufacturing Consumable', href: '/agentic-ai/manufacturing-consumable' },
            {
              label: 'Risk Forecasting & Safety Intelligence Agent',
              href: '/agentic-ai/risk-forecasting-safety-intelligence-agent',
            },
            {
              label: 'Supply Chain Efficiency Agents',
              href: '/agentic-ai/supply-chain-efficiency-agents',
            },
          ],
        },
        {
          id: 'finance-risk',
          label: 'Finance & Risk',
          agents: [
            {
              label: 'Risk & Fraudulent Transactions Analysis',
              href: '/agentic-ai/risk-fraudulent-transactions-analysis',
            },
            {
              label: 'Lease Agreement Extraction Agent',
              href: '/agentic-ai/lease-agreement-extraction-agent',
            },
            {
              label: 'Menu Compliance Validation Agent',
              href: '/agentic-ai/menu-compliance-validation-agent',
            },
          ],
        },
        {
          id: 'real-estate',
          label: 'Real Estate & Property Management',
          agents: [
            {
              label: 'Real Estate Property Comparison Agent',
              href: '/agentic-ai/real-estate-property-comparison-agent',
            },
            {
              label: 'Real Estate Suggestion Agent',
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
