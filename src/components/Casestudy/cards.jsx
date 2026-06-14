'use client';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { FiArrowRight, FiSearch, FiSliders } from 'react-icons/fi';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const Cards = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeDepartment, setActiveDepartment] = useState('Departments');
  const [isDeptDropdownOpen, setIsDeptDropdownOpen] = useState(false);
  const scrollContainerRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDeptDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scroll = direction => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // New template-based case studies (add more as you create them)
  const caseStudiesData = [
    {
      slug: 'real-time-production',
      title: 'Real-Time Production Monitoring with IoT',
      type: 'BI Solutions',
      industry: 'Manufacturing',
      description:
        'How a leading die caster achieved 10-15% productivity boost and 90% reduction in manual effort through connected factory automation.',
      image: '/images/Templates/template1/casebg1.webp',
    },
    // {
    //   slug: 'maximizing-yield',
    //   title: 'Maximizing Yield with Intelligent Production Analytics',
    //   type: 'BI Solutions',
    //   industry: 'Manufacturing',
    //   description:
    //     'Driving packaging efficiency through real-time visibility and predictive insights.',
    //   image: '/images/Templates/template1/hero1.webp',
    // },
    // {
    //   slug: 'mobile-manufacturing-quality',
    //   title: 'Commonality & Traceability Analysis for Mobile Manufacturing Quality',
    //   type: 'AI Solutions',
    //   industry: 'Manufacturing',
    //   description:
    //     'Enabling end-to-end visibility and data-driven quality governance in phone manufacturing.',
    //   image: '/images/Templates/template3/heroimage1.webp',
    // },
    // {
    //   slug: 'predictive-maintenance',
    //   title: 'Predictive Maintenance Powered by Advanced Analytics',
    //   type: 'AI Solutions',
    //   industry: 'Manufacturing',
    //   description: 'Minimizing unplanned downtime through proactive maintenance intelligence.',
    //   image: '/images/Templates/template4/herobg.webp',
    // },
    // {
    //   slug: 'streamlining-production',
    //   title: 'Streamlining Production Through Data-Driven IE Applications',
    //   type: 'BI Solutions',
    //   industry: 'Manufacturing',
    //   description:
    //     'Digitizing maintenance operations for improved equipment reliability and performance.',
    //   image: '/images/Templates/template5/herobgmain.webp',
    // },
    // {
    //   slug: 'optimizing-production',
    //   title: 'Optimizing Production Efficiency Through Scrap Analytics',
    //   type: 'BI Solutions',
    //   industry: 'Manufacturing',
    //   description:
    //     'Reducing material waste through real-time scrap tracking and data-driven insights.',
    //   image: '/images/Templates/template6/hero6.webp',
    // },
    // {
    //   slug: 'sustainable-impact',
    //   title: 'Sustainable Impact in Manufacturing',
    //   type: 'BI Solutions',
    //   industry: 'Manufacturing',
    //   description:
    //     'Driving sustainability, compliance, and operational efficiency through Power Platform automation.',
    //   image: '/images/Templates/template7/bg7.webp',
    // },
    // {
    //   slug: 'tool-management',
    //   title: 'Tool Management Solution for Manufacturing',
    //   type: 'BI Solutions',
    //   industry: 'Manufacturing',
    //   description:
    //     'Driving efficiency, traceability, and operational excellence through Power Platform automation.',
    //   image: '/images/Templates/template8/temp888.webp',
    // },
    // {
    //   slug: 'smart-maintenance',
    //   title: 'Smart Maintenance Solution for Manufacturing',
    //   type: 'AI Solutions',
    //   industry: 'Manufacturing',
    //   description:
    //     'Modernizing traditional maintenance processes with Microsoft Power Platform, enabling predictive analytics and preventive maintenance strategies',
    //   image: '/images/Templates/template9/9hero.webp',
    // },
    // {
    //   slug: 'next-gen-knowledge',
    //   title: 'Next-Gen Knowledge Engine on Azure',
    //   type: 'AI Solutions',
    //   industry: 'HR',
    //   description: 'Transforming Enterprise Knowledge Access with AI-Powered Retrieval',
    //   image: '/images/Templates/template10/hero10.webp',
    // },
    // {
    //   slug: 'centralized-marketing',
    //   title: 'Centralized Marketing Dashboard and Automated Reporting',
    //   type: 'BI Solutions',
    //   industry: 'Marketing',
    //   description: 'Turning Multi-Channel Marketing Data into One Real-Time Source of Truth',
    //   image: '/images/Templates/templatez/z2.png',
    // },
    {
      slug: 'next-gen-sales',
      title: 'Next-Gen Sales Campaign Infrastructure on GCP',
      type: 'Cloud Solutions',
      industry: 'Sales',
      description: 'Enabling data-driven sales strategies with cloud-native solutions',
      image: '/images/Templates/templatez/z2sol.png',
    },
    {
      slug: 'bay',
      title: 'Product Authentication & Theft Monitoring Analytics Platform',
      type: 'AI Solutions',
      industry: 'Retail',
      description:
        'A centralized analytics solution that transformed fragmented counterfeit monitoring into an automated intelligence platform delivering real-time threat detection and secure, role-based insights to 50+ stakeholders.',
      image: '/images/Templates/z-bay/business-impact.png',
    },
    {
      slug: 'john-good-groups',
      title: 'Unified Travel Analytics Platform Implementation',
      type: 'BI Solutions',
      industry: 'Travel and hospitality',
      description:
        'A global travel organization transformed its analytics ecosystem by migrating from Power BI to a scalable, centralized platform, enabling faster insights, improved accessibility, and consistent reporting across regions.',
      image: '/images/Templates/z-john-good-groups/hero-bg.png',
    },
    {
      slug: 'hy-24',
      title: 'Automated Asset & Project Reporting Platform',
      type: 'BI Solutions',
      industry: 'Energy',
      description:
        'A global clean energy investment firm transformed its reporting ecosystem by replacing complex Excel-based processes with an automated, centralized BI platform enabling real-time portfolio insights, improved accuracy, and scalable decision-making.',
      image: '/images/Templates/z-hy-24/sunset-sky-powers-wind.png',
    },
    // {
    //   slug: 'mahsing',
    //   title: 'Driving Real Estate Excellence Through Customer Feedback Insights',
    //   type: 'AI Solutions',
    //   industry: 'Real Estate',
    //   description:
    //     'Transforming customer satisfaction tracking with data-driven insights to systematically analyze feedback across large-scale property development projects.',
    //   image: '/images/Templates/mahsing/img1.png',
    // },
    {
      slug: 'style-bazaar',
      title: 'Retail Data Warehouse & Business Intelligence Platform',
      type: 'BI Solutions',
      industry: 'Retail',
      description:
        'Optimizing retail operations through advanced data warehousing and business intelligence.',
      image: '/images/Templates/style_bazaar/style_i4.png',
    },
    {
      slug: 'style-union',
      title: 'Transforming Retail Performance with Unified Analytics',
      type: 'BI Solutions',
      industry: 'Retail',
      description:
        'Omnichannel Data Warehouse & BI Platform enabling real-time business visibility for fashion retail.',
      image: '/images/Templates/style_bazaar/style_i5.png',
    },
    {
      slug: 'tez',
      title: 'Unified Data Platform & Analytics for Smart Parking Operations',
      type: 'AI Solutions',
      industry: 'Travel and hospitality',
      description:
        'Achieving a 60% reduction in data processing time and unlocking AI-driven insights for smart parking.',
      image: '/images/Templates/tez/tez3.png',
    },
    {
      slug: 'custom-dashboard',
      title: 'AI-Enabled Safety Analytics & Custom Dashboard Solution',
      type: 'AI Solutions',
      industry: 'Manufacturing',
      description:
        'Transforming complex safety data into actionable, AI-powered insights enabling faster decisions and proactive risk management.',
      image: '/images/Templates/tez/tez2.png',
    },
    {
      slug: 'aequs',
      title: 'Transforming Parts Testing with End-to-End Digital Automation',
      type: 'AI Solutions',
      industry: 'Manufacturing',
      description:
        'Achieving 60–70% reduction in manual errors and ~50% faster testing cycles through a custom-built lifecycle management system.',
      image: '/images/Templates/aequs/aequs2.png',
    },
    // {
    //   slug: 'centralized-marketing',
    //   title: 'Centralized Marketing Dashboard and Automated Reporting',
    //   type: 'AI Solutions',
    //   industry: 'Manufacturing',
    //   description: 'Turning Multi-Channel Marketing Data into One Real-Time Source of Truth',
    //   image: '/images/Templates/templatez/z2.png',
    // },
    {
      slug: 'toyota',
      title: 'Transforming Tool Lifecycle Management Through Intelligent Digitization',
      type: 'AI Solutions',
      industry: 'Automotive',
      description:
        'Streamlining tool management processes with intelligent digital solutions to enhance operational efficiency and lifecycle visibility.',
      image: '/images/Templates/toyota/toyota4.png',
    },
    {
      slug: 'toyota2',
      title: 'Maintenance Management Digitization & Operational Analytics System',
      type: 'AI Solutions',
      industry: 'Automotive',
      description:
        'Transforming maintenance operations and enabling data-driven decision-making for a leading global automotive manufacturer.',
      image: '/images/Templates/toyota2/toy2.png',
    },
    {
      slug: 'gcon',
      title: 'AI-Driven Submittal Extraction from Construction Specbooks',
      type: 'AI Solutions',
      industry: 'Real Estate',
      description:
        'How a leading construction company reduced document review effort by up to 85% and cut turnaround time from days to hours with an intelligent multi- agent AI workflow.',
      image: '/images/Templates/gcon/hero-bg.png',
    },

    {
      slug: 'style-union-2',
      title: 'Store Manager Mobile Application for Retail Execution',
      type: 'AI Solutions',
      industry: 'Retail',
      description:
        'Empowering retail teams with real-time inventory intelligence and streamlined execution workflows to drive measurable business outcomes.',
      image: '/images/Templates/style-union-2/hero-bg.png',
    },
    {
      slug: 'bissell',
      title: 'AI-Powered Executive Reporting & PPT Automation Platform',
      type: 'AI Solutions',
      industry: 'Retail',
      description:
        'Transforming dashboard data into executive-ready insights through intelligent automation and AI-driven reporting.',
      image: '/images/Templates/bissell/hero-bg.png',
    },
    {
      slug: 'gsk',
      title: 'Identity Access Management (IDAM) Reporting & License Optimization',
      type: 'AI Solutions',
      industry: 'Healthcare',
      description:
        'Enabling enterprise-grade governance, automation, and cost optimization through centralized identity and license management.',
      image: '/images/Templates/gsk/gsk2.png',
    },
    {
      slug: 'tess',
      title: 'Enterprise Digital Transformation for Production, Quality & Supply Chain',
      type: 'AI Solutions',
      industry: 'Manufacturing',
      description:
        'Driving real-time visibility, operational efficiency, and data-driven decision-making across manufacturing operations through an integrated digital platform.',
      image: '/images/Templates/tess/tess1.png',
    },
    {
      slug: 'careabout',
      title: 'Cloud-Based Data Platform & ETL Modernization for Payer Systems',
      type: 'AI Solutions',
      industry: 'Healthcare',
      description:
        'Enabling cloud modernization, scalable data infrastructure, and standardized analytics for a leading healthcare organization.',
      image: '/images/Templates/aequs/aequs3.png',
    },
    {
      slug: 'tessera',
      title: 'Real-Time Enterprise Data Integration using Boomi',
      type: 'AI Solutions',
      industry: 'Healthcare',
      description:
        'Enabling seamless data synchronization, automation, and enterprise connectivity for a leading biotechnology organization.',
      image: '/images/Templates/tessera/tessera3.png',
    },
    {
      slug: 'sephora',
      title: 'AI-Based Workforce Scheduling and Rostering Platform',
      type: 'AI Solutions',
      industry: 'Retail',
      description:
        'Transforming workforce management through AI-driven scheduling automation — delivering measurable efficiency gains across multi-location retail operations.',
      image: '/images/Templates/sephora/sep1.png',
    },
    {
      slug: 'curiculam1',
      title: 'Digital Transformation & Data Platform Modernization',
      type: 'AI Solutions',
      industry: 'Education',
      description:
        'Showcasing cloud migration, data platform modernization, and reporting transformation initiatives that improved performance, scalability, and analytics capabilities.',
      image: '/images/Templates/careabout/care1.png',
    },
    {
      slug: 'curiculam2',
      title: 'Domo to Snowflake Migration & Data Platform Modernization',
      type: 'AI Solutions',
      industry: 'Education',
      description:
        'Replacing constrained Magic ETL workflows with a scalable, cost-efficient Snowflake architecture.',
      image: '/images/Templates/careabout/care2.png',
    },
    {
      slug: 'curiculam3',
      title: 'Tableau to Power BI Migration & Reporting Modernization',
      type: 'AI Solutions',
      industry: 'Education',
      description:
        'Unifying a fragmented reporting estate into a governed, high-performance Power BI environment.',
      image: '/images/Templates/careabout/care3.png',
    },
    {
      slug: 'tavent',
      title: 'Loan, Deposit & Teller Performance Analytics Dashboard',
      type: 'BI Solutions',
      industry: 'Banking',
      description:
        'Delivering real-time visibility into banking operations through interactive dashboards and self-service analytics.',
      image: '/images/Templates/tavent/t2.png',
    },
    // {
    //   slug: 'unified-hr-finance-analytics',
    //   title: 'Unified HR & Finance Analytics Integration',
    //   type: 'BI Solutions',
    //   industry: 'Banking',
    //   description:
    //     'How we connected workforce management and POS data into a single analytics platform enabling real-time insights for leadership decision-making.',
    //   image: '/images/Templates/template11/side-img.png',
    // },
    // {
    //   slug: 'ai-powered-hospitality',
    //   title: 'Enhancing Guest Experience with AI-Powered Hospitality',
    //   type: 'BI Solutions',
    //   industry: 'Banking',
    //   description:
    //     'How GWC partnered with the client to revolutionize hotel operations and deliver smarter, data-driven experiences for guests worldwide.',
    //   image: '/images/Templates/template12/ai-bg.png',
    // },
    // {
    //   slug: 'banking-analytics',
    //   title: 'Driving Compliance and Performance with Banking Analytics',
    //   type: 'BI Solutions',
    //   industry: 'Banking',
    //   description:
    //     'How GWC transformed banking operations with real-time analytics, automated compliance monitoring, and centralized financial insights.',
    //   image: '/images/Templates/template13/bg1.png',
    // },
    {
      slug: 'end-to-end-digitalization',
      title: 'End-to-End Digitalization of Manufacturing Reports',
      type: 'BI Solutions',
      industry: 'Banking',
      description:
        'Transforming manufacturing reporting systems with automation, centralized dashboards, and real-time operational intelligence.',
      image: '/images/Templates/template14/bg1.png',
    },
    {
      slug: 'finance-hr-performance-insights',
      title: 'Building Unified Finance & HR Performance Insights',
      type: 'BI Solutions',
      industry: 'Banking',
      description:
        'Transforming siloed finance and HR data into unified, real-time performance insights that drive strategic decision-making across global operations.',
      image: '/images/Templates/template15/bg1.png',
    },
    // {
    //   slug: 'agentic-ai-data-center',
    //   title: 'Transforming Data Center Operations with Agentic AI',
    //   type: 'BI Solutions',
    //   industry: 'Banking',
    //   description:
    //     'How GWC and the client built an AI-driven platform for predictive monitoring, automated response systems, and operational intelligence across data centers.',
    //   image: '/images/Templates/template16/bg1.png',
    // },
    // {
    //   slug: 'boosting-food-retail-performance',
    //   title: 'Boosting Food Retail Performance with Real-Time Analytics',
    //   type: 'BI Solutions',
    //   industry: 'Banking',
    //   description:
    //     'How GWC transformed food retail operations using real-time analytics, outlet benchmarking, and executive performance reporting.',
    //   image: '/images/Templates/template17/bg1.png',
    // },
    {
      slug: 'lskg',
      title: 'Empowering Fashion Retail with Real-Time Sales & Inventory Insights',
      type: 'AI Solutions',
      industry: 'Retail',
      description:
        'How a fashion and retail brand transformed decision-making with automated dashboards and real-time analytics',
      image: '/images/Templates/lskg/img3.png',
    },
    {
      slug: 'parisar',
      title: 'Improving Public Transport Efficiency',
      type: 'AI Solutions',
      industry: 'Travel and hospitality',
      description: 'Real-Time Operations Dashboards ',
      image: '/images/Templates/parisar/img1.png',
    },
    {
      slug: 'anyday',
      title: 'Unlocking Restaurant Growth with Customer Trends Analytics',
      type: 'AI Solutions',
      industry: 'Restaurant',
      description:
        'How a hospitality brand transformed customer engagement and sales strategy with real-time data insights',
      image: '/images/Templates/anyday/img4.jpg',
    },
    {
      slug: 'style-union-1',
      title: 'Transforming Retail Performance with Unified Analytics',
      type: 'AI Solutions',
      industry: 'Retail',
      description:
        'How a leading apparel brand achieved real-time visibility and data-driven growth through comprehensive retail analytics',
      image: '/images/Templates/style-union-1/img3.png',
    },
    {
      slug: 'kamrt',
      title: 'Optimizing Retail Performance Through Data- Driven Dashboards',
      type: 'AI Solutions',
      industry: 'Retail',
      description:
        'A major player in the retail industry, needed a centralized solution to track and monitor sales, inventory, and operational performance. With multiple business units and high transaction volumes, leadership required real-time dashboards to support faster and more data-driven decisions.',
      image: '/images/Templates/kamrt/overview.png',
    },
    {
      slug: 'accor',
      title: 'AI-Based Menu Analysis & Licensing Automation Platform',
      type: 'AI Solutions',
      industry: 'Retail',
      description:
        'Transforming manual menu review into an intelligent, automated pipeline powered by AI-driven document intelligence and classification.',
      image: '/images/Templates/accor/hero.png',
    },
    {
      slug: 'bissell-3',
      title: 'Logistics Network Optimization & Cost Reduction Analytics',
      type: 'AI Solutions',
      industry: 'Retail',
      description:
        'Transforming supply chain performance through data-driven network optimization and strategic cost reduction.',
      image: '/images/Templates/bissell-3/hero.png',
    },
    {
      slug: 'wellstat',
      title: 'Enterprise Data Integration & Automated Reporting Platform',
      type: 'AI Solutions',
      industry: 'Retail',
      description:
        'Transforming fragmented data ecosystems into a unified, automated intelligence layer — enabling real-time visibility and accelerated decision- making.',
      image: '/images/Templates/wellstat/hero-bg.png',
    },
    {
      slug: 'connect-wise',
      title: 'End-to-End Enterprise Integration and Data Synchronization Platform',
      type: 'AI Solutions',
      industry: 'Retail',
      description:
        'Enabling real-time integration, seamless automation, and enterprise-grade data synchronization across mission-critical business systems.',
      image: '/images/Templates/connect-wise/hero-bg.png',
    },
    {
      slug: 'henkel',
      title: 'Campaign Performance and Conversion Analytics Platform',
      type: 'AI Solutions',
      industry: 'Retail',
      description:
        'Empowering data-driven marketing decisions through unified analytics, end-to-end funnel visibility, and actionable campaign intelligence.',
      image: '/images/Templates/henkel/hero-float.png',
    },
    {
      slug: 'take2eton-1',
      title: 'Digital Transformation for a Leading Global Travel Management Organization',
      type: 'AI Solutions',
      industry: 'Retail',
      description:
        'Showcasing AI, automation, data integration, and analytics-driven solutions that improved operational efficiency, financial accuracy, compliance visibility, and customer experience across travel management functions.',
      image: '/images/Templates/take2eton-1/hero-float.png',
    },
    {
      slug: 'take2eton-2',
      title: 'Digital Transformation for a Leading Global Travel Management Organization',
      type: 'AI Solutions',
      industry: 'Retail',
      description:
        'Showcasing AI, automation, data integration, and analytics-driven solutions that improved operational efficiency, financial accuracy, compliance visibility, and customer experience across travel management functions.',
      image: '/images/Templates/take2eton-2/challenge.png',
    },
    {
      slug: 'take2eton-3',
      title: 'Digital Transformation for a Leading Global Travel Management Organization',
      type: 'AI Solutions',
      industry: 'Retail',
      description:
        'Showcasing AI, automation, data integration, and analytics-driven solutions that improved operational efficiency, financial accuracy, compliance visibility, and customer experience across travel management functions.',
      image: '/images/Templates/take2eton-3/challenge.png',
    },
    {
      slug: 'take2eton-4',
      title: 'Digital Transformation for a Leading Global Travel Management Organization',
      type: 'AI Solutions',
      industry: 'Retail',
      description:
        'Showcasing AI, automation, data integration, and analytics-driven solutions that improved operational efficiency, financial accuracy, compliance visibility, and customer experience across travel management functions.',
      image: '/images/Templates/take2eton-4/challenge.png',
    },
    {
      slug: 'take2eton-5',
      title: 'Digital Transformation for a Leading Global Travel Management Organization',
      type: 'AI Solutions',
      industry: 'Retail',
      description:
        'Showcasing AI, automation, data integration, and analytics-driven solutions that improved operational efficiency, financial accuracy, compliance visibility, and customer experience across travel management functions.',
      image: '/images/Templates/take2eton-5/challenge.png',
    },
    {
      slug: 'tig-golf',
      title: 'Automated Data Pipeline for Excel-Based Reporting',
      type: 'AI Solutions',
      industry: 'Retail',
      description:
        'Transforming semi-structured Excel data into scalable, automated, and analysis-ready datasets for real-time retail reporting.',
      image: '/images/Templates/tig-golf/hero-float.png',
    },
    {
      slug: 'altimetrik',
      title: 'Sales, Inventory & Customer Analytics Platform',
      type: 'AI Solutions',
      industry: 'Retail',
      description:
        'Enabling real-time visibility into sales, inventory, and customer behavior to drive smarter retail decisions and optimize  operations.',
      image: '/images/Templates/altimetrik/hero-float.png',
    },
    // {
    //   slug: 'sales-intelligence',
    //   title: 'Sales Intelligence Transformation & Time Based Reporting Standardization',
    //   type: 'AI Solutions',
    //   industry: 'Retail',
    //   description:
    //     'How we rebuilt confidence in sales analytics by standardizing time- intelligence models and optimizing reporting workflows for a leading fashion retailer.',
    //   image: '/images/Templates/templatez/salesIntelligence/sihead.png',
    // },
    // {
    //   slug: 'real-time-workflow',
    //   title: 'Real-Time Workforce & Operations Monitoring Dashboard',
    //   type: 'AI Solutions',
    //   industry: 'Retail',
    //   description: 'Transforming Cleaning Operations with Real-Time Visibility',
    //   image: '/images/Templates/templatez/rtwrokforce/rthero.png',
    // },
    // {
    //   slug: 'centralizing-sales-performance',
    //   title: 'Sales Performance & Time-Based Reporting Transformation',
    //   type: 'AI Solutions',
    //   industry: 'Retail',
    //   description:
    //     'Transforming Sales Performance & Time-Based Reporting with AI-Powered Analytics',
    //   image: '/images/Templates/templatez/csperformance/cspbg.jpg',
    // },
    // {
    //   slug: 'driving-entertainment-success',
    //   title: 'Driving Entertainment Success with Artist and Performance Dashboards',
    //   type: 'AI Solutions',
    //   industry: 'Retail',
    //   description:
    //     'Transforming Entertainment Insights with Real-Time Artist and Performance Analytics',
    //   image: '/images/Templates/templatez/jamm/jammbg.jpg',
    // },
    {
      slug: 'real-time-dashboard',
      title: 'Centralizing Sales Performance with Real-Time Dashboards',
      type: 'AI Solutions',
      industry: 'Retail',
      description:
        'Redefining Retail Intelligence Through Real-Time Sales and Time-Based Analytics',
      image: '/images/Templates/templatez/titan22/header.png',
    },
    {
      slug: 'real-estate-performance',
      title: 'Centralizing Real Estate Performance for Smarter Decision-Making',
      type: 'AI Solutions',
      industry: 'Retail',
      description:
        'Transforming Real Estate Insights with Centralized Performance Dashboards and Data-Driven Decision-Making',
      image: '/images/Templates/templatez/realestate/header.png',
    },
    {
      slug: 'driving-sales-excellence',
      title: 'Driving Sales Excellence with Validated Data',
      type: 'AI Solutions',
      industry: 'Retail',
      description:
        'How GWC transformed the client sales reporting with real - time insights and executive- level analytics',
      image: '/images/Templates/templatez/drivingsales/head.png',
    },
    // {
    //   slug: 'real-time-portfolio',
    //   title: 'Empowering Clean Hydrogen Investment with Real-Time Portfolio Intelligence',
    //   type: 'AI Solutions',
    //   industry: 'Retail',
    //   description:
    //     'How GWC transformed clean energy investment management with real-time insights for a leading clean hydrogen firm.',
    //   image: '/images/Templates/templatez/rtportfolio/head.png',
    // },
    // {
    //   slug: 'retail-1',
    //   title: 'Driving Sales Excellence Through Validated Data',
    //   type: 'BI Solutions',
    //   industry: 'Banking',
    //   description:
    //     'A unified reporting framework that transformed fragmented sales data into real-time executive intelligence enabling faster, evidence-based decisions across regions and channels.',
    //   image: '/images/Templates/retail-1/solution.png',
    // },
  ];

  const aiSlugs = [
    'ai-powered-hospitality',
    'agentic-ai-data-center',
    'gcon',
    'custom-dashboard',
    'bissell',
    'sephora',
    'accor',
  ];

  const cardsData = caseStudiesData.map((study, i) => {
    const isAI = aiSlugs.includes(study.slug);
    return {
      id: i + 1,
      image: study.image,
      title: study.title,
      description: study.description,
      slug: study.slug,
      type: isAI ? 'AI Solutions' : 'BI Solutions',
      industry: study.industry,
      link: `/casestudy/${study.slug}`,
    };
  });

  const categories = [
    'All',
    'Travel',
    'Smart mobility',
    'Safety',
    'Retail',
    'Manufacturing',
    'Logistics',
    'IT Services',
    'IDAM licence',
    'Hospitality',
    'Healthcare',
    'Finance',
    'Energy',
    'Education',
    'Digital Marketing',
    'Construction',
    'Biotech',
    'Banking',
  ];

  const checkCategoryMatch = (card, categoryName) => {
    if (categoryName === 'All') return true;
    const slug = card.slug?.toLowerCase() || '';
    const title = card.title?.toLowerCase() || '';
    const desc = card.description?.toLowerCase() || '';
    const ind = card.industry?.toLowerCase() || '';
    const cat = categoryName.toLowerCase();

    if (cat === 'travel management' || cat === 'travel') {
      return slug.includes('john-good') || slug.includes('parisar') || slug.includes('take2eton');
    } else if (cat === 'smart mobility') {
      return slug.includes('esr') || slug.includes('tez');
    } else if (cat === 'safety') {
      return (
        slug.includes('mojo') ||
        slug.includes('safety') ||
        title.includes('safety') ||
        desc.includes('safety') ||
        slug.includes('custom-dashboard')
      );
    } else if (cat === 'retail') {
      return (
        slug.includes('lskd') ||
        slug.includes('lskg') ||
        slug.includes('marry') ||
        slug.includes('style-bazaar') ||
        slug.includes('style-union') ||
        slug.includes('titan') ||
        slug.includes('altimetrik') ||
        slug.includes('sephora') ||
        slug.includes('tig-golf') ||
        slug.includes('kamrt') ||
        slug.includes('kmart') ||
        slug.includes('sales-intelligence') ||
        slug.includes('real-time-dashboard') ||
        slug.includes('driving-sales') ||
        slug.includes('rtwrokforce') ||
        slug.includes('real-time-workflow') ||
        slug.includes('centralizing-sales') ||
        slug.includes('boosting-food')
      );
    } else if (cat === 'manufacturing') {
      return (
        slug.includes('aequs') ||
        slug.includes('alubee') ||
        slug.includes('real-time-production') ||
        slug.includes('tata') ||
        slug.includes('toyota') ||
        slug.includes('bissell') ||
        slug.includes('tess') ||
        slug.includes('yield') ||
        slug.includes('quality') ||
        slug.includes('predictive') ||
        slug.includes('maintenance') ||
        slug.includes('scrap') ||
        slug.includes('sustainable') ||
        slug.includes('tool-management') ||
        title.includes('manufacturing') ||
        ind.includes('manufacturing')
      );
    } else if (cat === 'logistics') {
      return (
        slug.includes('bissell') ||
        slug.includes('logistics') ||
        title.includes('logistics') ||
        desc.includes('logistics')
      );
    } else if (cat === 'it services' || cat === 'it service') {
      return slug.includes('connect-wise') || slug.includes('connectwise');
    } else if (cat === 'idam licence') {
      return slug.includes('gsk') || title.includes('idam') || desc.includes('idam');
    } else if (cat === 'hospitality') {
      return (
        slug.includes('accor') ||
        slug.includes('anyday') ||
        slug.includes('any-day') ||
        slug.includes('hospitality')
      );
    } else if (cat === 'healthcare' || cat === 'health care') {
      return (
        slug.includes('careabout') || title.includes('healthcare') || title.includes('health care')
      );
    } else if (cat === 'finance') {
      return (
        slug.includes('metro-one') ||
        slug.includes('metroone') ||
        slug.includes('finance-hr') ||
        title.includes('finance')
      );
    } else if (cat === 'energy') {
      return (
        slug.includes('hy-24') ||
        slug.includes('hy24') ||
        slug.includes('wellstat') ||
        slug.includes('portfolio') ||
        title.includes('energy')
      );
    } else if (cat === 'education') {
      return slug.includes('curiculam') || title.includes('education');
    } else if (cat === 'digital marketing') {
      return (
        slug.includes('netrocon') ||
        slug.includes('wpp') ||
        slug.includes('henkel') ||
        slug.includes('marketing') ||
        title.includes('marketing')
      );
    } else if (cat === 'construction') {
      return slug.includes('gcon') || title.includes('construction');
    } else if (cat === 'biotech') {
      return slug.includes('tessera') || title.includes('biotech');
    } else if (cat === 'banking') {
      return slug.includes('tavent') || slug.includes('banking');
    }
    return ind.includes(cat);
  };

  const checkDeptMatch = (card, deptName) => {
    if (deptName === 'Departments' || deptName === 'All departments') return true;
    const dept = deptName.toLowerCase();
    const text = (card.title + ' ' + card.description).toLowerCase();
    if (dept === 'hr') {
      return (
        text.includes('hr') ||
        text.includes('workforce') ||
        text.includes('employee') ||
        text.includes('talent')
      );
    } else if (dept === 'marketing') {
      return (
        text.includes('marketing') ||
        text.includes('campaign') ||
        text.includes('funnel') ||
        text.includes('guest') ||
        text.includes('customer')
      );
    } else if (dept === 'sales') {
      return (
        text.includes('sales') ||
        text.includes('revenue') ||
        text.includes('pos') ||
        text.includes('retail') ||
        text.includes('store')
      );
    } else if (dept === 'operation') {
      return (
        text.includes('operation') ||
        text.includes('production') ||
        text.includes('yield') ||
        text.includes('defect') ||
        text.includes('logistics') ||
        text.includes('inventory')
      );
    } else if (dept === 'it') {
      return (
        text.includes('it') ||
        text.includes('software') ||
        text.includes('platform') ||
        text.includes('integration') ||
        text.includes('cloud') ||
        text.includes('tech') ||
        text.includes('pipeline')
      );
    }
    return true;
  };

  const visibleCategories = categories.filter(cat => {
    if (cat === 'All') return true;
    return cardsData.some(card => checkCategoryMatch(card, cat));
  });

  const allDepts = ['Departments', 'Sales', 'HR', 'Operation', 'Marketing', 'IT'];
  const visibleDepts = allDepts.filter(dept => {
    if (dept === 'Departments' || dept === 'All departments') return true;
    return cardsData.some(
      card => checkCategoryMatch(card, activeCategory) && checkDeptMatch(card, dept)
    );
  });

  // Filter cards based on category, department and search query
  const filteredCards = cardsData.filter(card => {
    const matchesCategory = checkCategoryMatch(card, activeCategory);
    const matchesDept = checkDeptMatch(card, activeDepartment);

    const query = searchQuery.toLowerCase();
    const matchesSearch =
      card.title.toLowerCase().includes(query) || card.description.toLowerCase().includes(query);

    return matchesCategory && matchesDept && matchesSearch;
  });

  return (
    <section className='relative py-16 px-4 md:px-12'>
      <div className='max-w-7xl mx-auto'>
        <h2
          className='text-[40px] font-medium text-center mb-12 bg-clip-text text-transparent'
          style={{
            background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Explore Our Case Studies
        </h2>

        {/* Filter Controls Container */}
        <div className='flex flex-col gap-6 mb-12'>
          {/* Top Row: Search Bar Centered */}
          <div className='flex justify-center w-full'>
            <div
              className='relative w-full max-w-2xl flex items-center bg-white rounded-full border border-[#DBDBDB] pl-6 pr-2 py-1.5 transition-all duration-300 focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-transparent'
              style={{
                boxShadow:
                  '0px 1.34px 4.15px 0px #D2D0E111, 0px 3.23px 9.98px 0px #D2D0E119, 0px 6.08px 18.8px 0px #D2D0E11F, 0px 10.85px 33.53px 0px #D2D0E124, 0px 20.3px 62.72px 0px #D2D0E12C',
              }}
            >
              <input
                type='text'
                placeholder='Search Case Studies'
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className='w-full bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none py-2.5 text-sm md:text-base'
              />
              <button className='flex-shrink-0 w-11 h-11 rounded-full bg-gradient-to-b from-[#7030B1] to-[#B56DD3] flex items-center justify-center text-white shadow-md hover:scale-105 transition-transform'>
                <FiSearch size={20} />
              </button>
            </div>
          </div>

          {/* Bottom Row: Industry + Categories Slider */}
          <div className='w-full flex flex-col md:flex-row items-center justify-between gap-4'>
            {/* Left/Right Slider with Pills */}
            <div className='w-full md:flex-grow flex items-center gap-2.5 overflow-hidden'>
              {/* Left Arrow */}
              <button
                onClick={() => scroll('left')}
                className='w-10 h-10 rounded-full border border-[#E5E5E5] bg-white flex items-center justify-center text-gray-600 hover:text-[#7030B1] hover:border-[#7030B1] transition-all shadow-sm flex-shrink-0'
                aria-label='Scroll left'
              >
                <ChevronLeft size={20} />
              </button>

              {/* Scrollable Container */}
              <div
                ref={scrollContainerRef}
                className='flex-grow flex items-center gap-3 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden py-1'
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {visibleCategories.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 border shadow-sm ${
                      activeCategory === category
                        ? 'border-transparent text-white'
                        : 'bg-white border-[#E5E5E5] text-[#6B7280] hover:border-[#7030B1] hover:text-[#7030B1]'
                    }`}
                    style={
                      activeCategory === category
                        ? {
                            background: 'linear-gradient(94.82deg, #B56DD3 22.28%, #7030B1 94.48%)',
                          }
                        : {}
                    }
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Right Arrow */}
              <button
                onClick={() => scroll('right')}
                className='w-10 h-10 rounded-full border border-[#E5E5E5] bg-white flex items-center justify-center text-gray-600 hover:text-[#7030B1] hover:border-[#7030B1] transition-all shadow-sm flex-shrink-0'
                aria-label='Scroll right'
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Departments Dropdown */}
            <div className='relative w-full md:w-auto flex-shrink-0' ref={dropdownRef}>
              <button
                onClick={() => setIsDeptDropdownOpen(!isDeptDropdownOpen)}
                className='w-full md:w-auto flex items-center justify-between gap-3 px-6 py-3 rounded-[12px] border border-[#E5E5E5] bg-white text-gray-700 md:min-w-[160px] text-sm font-medium hover:border-[#7030B1] transition-all shadow-sm'
              >
                <span>{activeDepartment}</span>
                <ChevronDown
                  size={16}
                  className={`text-gray-400 transition-transform duration-200 ${
                    isDeptDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isDeptDropdownOpen && (
                <div className='absolute right-0 mt-2 w-full md:w-48 bg-white border border-[#E5E5E5] rounded-xl shadow-lg py-1 z-50'>
                  {visibleDepts.map(dept => (
                    <button
                      key={dept}
                      onClick={() => {
                        setActiveDepartment(dept);
                        setIsDeptDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                        activeDepartment === dept
                          ? 'bg-purple-50 text-[#7030B1] font-semibold'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {dept}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {filteredCards.length === 0 ? (
          <div className='col-span-full text-center py-12'>
            <p className='text-gray-500 text-lg'>No case studies found matching your search.</p>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
            {filteredCards.map(card => (
              <Link
                key={card.id}
                href={card.link}
                className='bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col w-full max-w-[400px] cursor-pointer'
                style={{ minHeight: '380px' }}
              >
                {/* Image Container with Padding */}
                <div className='p-4'>
                  <div
                    className='relative overflow-hidden rounded-xl w-full'
                    style={{ height: '190px' }}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
                    />
                  </div>
                </div>

                {/* Content Container */}
                <div className='px-6 pb-6 flex flex-col flex-grow'>
                  <h3 className='text-[18px] font-semibold text-[#404040] mb-3 line-clamp-1 overflow-hidden'>
                    {card.title}
                  </h3>
                  <p className='text-[#404040] text-[14px] font-normal mb-2 leading-relaxed line-clamp-2 overflow-hidden'>
                    {card.description}
                  </p>

                  <div className='inline-flex items-center font-semibold text-[16px] mt-auto group'>
                    <span
                      className='bg-clip-text text-transparent'
                      style={{
                        background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      Explore case study
                    </span>
                    <FiArrowRight
                      className='w-4 h-4 ml-2 transition-transform group-hover:translate-x-1'
                      style={{ color: '#7030B1' }}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Cards;
