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
      ],
      megaMenuColumns: [
        {
          title: 'ABOUT',
          links: [
            { label: 'About Us', href: '/company/about' },
            // { label: 'Vision & Mission', href: '/company/vision-mission' },
            // { label: 'Leadership Team', href: '/company/leadership' },
            { label: 'Case Study', href: '/Casestudy' },
          ],
        },
        // {
        //   title: 'WORK CULTURE',
        //   links: [
        //     { label: 'Work From Hometown', href: '/company/work-from-hometown' },
        //     { label: 'Core Values', href: '/company/values' },
        //   ],
        // },
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
            // { label: 'Domo', href: '/partners/domo' },
            { label: 'Snowflake', href: '/partners/snowflake' },
            { label: 'Databricks', href: '/partners/databricks' },
            { label: 'Google Cloud', href: '/partners/google-cloud' },
            { label: 'Boomi', href: '/partners/boomi' },
          ],
        },
      ],
    },
    {
      label: 'Domo Agentic AI',
      href: '/domo-agentic-ai',
      megaMenu: false,
      children: [],
      megaMenuColumns: [],
    },
    // {
    //   label: 'Boomi',
    //   href: '/boomi-integration',
    //   megaMenu: false,
    //   children: [],
    //   megaMenuColumns: [],
    // },
    {
      label: 'Careers',
      href: '/careers',
      megaMenu: false,
      children: [],
      megaMenuColumns: [],
    },
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
  'Domo Agentic AI': 'Advanced AI solutions for your business',
  Boomi: 'Seamless integration solutions',
};

export const ctas = {
  Solutions: { text: 'Our partner agencies', href: '/partners/agencies' },
  Company: { text: 'Explore Company', href: '/company' },
  Partners: { text: 'Become a Partner', href: '/partners/join' },
  Careers: { text: 'Apply Now', href: '/careers/apply' },
  'Domo Agentic AI': { text: 'Learn More', href: '/domo-agentic-ai/demo' },
  Boomi: { text: 'Get Started', href: '/boomi-integration/contact' },
};
