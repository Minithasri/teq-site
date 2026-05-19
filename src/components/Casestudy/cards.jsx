'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FiArrowRight, FiSearch, FiSliders } from 'react-icons/fi';

const Cards = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('AI Solutions');
  const [activeCategory, setActiveCategory] = useState('All');

  // New template-based case studies (add more as you create them)
  const caseStudiesData = [
    {
      slug: 'real-time-production',
      title: 'Real-Time Production Monitoring with IoT',
      type: 'BI Solutions',
      industry: 'Manufacturing',
      description:
        'How Alubee Die Casters achieved 10-15% productivity boost and 90% reduction in manual effort through connected factory automation.',
      image: '/images/Templates/template1/casebg1.webp',
    },
    {
      slug: 'maximizing-yield',
      title: 'Maximizing Yield with Intelligent Production Analytics',
      type: 'BI Solutions',
      industry: 'Manufacturing',
      description:
        'Driving packaging efficiency through real-time visibility and predictive insights.',
      image: '/images/Templates/template1/hero1.webp',
    },
    {
      slug: 'mobile-manufacturing-quality',
      title: 'Commonality & Traceability Analysis for Mobile Manufacturing Quality',
      type: 'AI Solutions',
      industry: 'Manufacturing',
      description:
        'Enabling end-to-end visibility and data-driven quality governance in phone manufacturing.',
      image: '/images/Templates/template3/heroimage1.webp',
    },
    {
      slug: 'predictive-maintenance',
      title: 'Predictive Maintenance Powered by Advanced Analytics',
      type: 'AI Solutions',
      industry: 'Manufacturing',
      description: 'Minimizing unplanned downtime through proactive maintenance intelligence.',
      image: '/images/Templates/template4/herobg.webp',
    },
    {
      slug: 'streamlining-production',
      title: 'Streamlining Production Through Data-Driven IE Applications',
      type: 'BI Solutions',
      industry: 'Manufacturing',
      description:
        'Digitizing maintenance operations for improved equipment reliability and performance.',
      image: '/images/Templates/template5/herobgmain.webp',
    },
    {
      slug: 'optimizing-production',
      title: 'Optimizing Production Efficiency Through Scrap Analytics',
      type: 'BI Solutions',
      industry: 'Manufacturing',
      description:
        'Reducing material waste through real-time scrap tracking and data-driven insights.',
      image: '/images/Templates/template6/hero6.webp',
    },
    {
      slug: 'sustainable-impact',
      title: 'Sustainable Impact in Manufacturing',
      type: 'BI Solutions',
      industry: 'Manufacturing',
      description:
        'Driving sustainability, compliance, and operational efficiency through Power Platform automation.',
      image: '/images/Templates/template7/bg7.webp',
    },
    {
      slug: 'tool-management',
      title: 'Tool Management Solution for Manufacturing',
      type: 'BI Solutions',
      industry: 'Manufacturing',
      description:
        'Driving efficiency, traceability, and operational excellence through Power Platform automation.',
      image: '/images/Templates/template8/temp888.webp',
    },
    {
      slug: 'smart-maintenance',
      title: 'Smart Maintenance Solution for Manufacturing',
      type: 'AI Solutions',
      industry: 'Manufacturing',
      description:
        'Modernizing traditional maintenance processes with Microsoft Power Platform, enabling predictive analytics and preventive maintenance strategies',
      image: '/images/Templates/template9/9hero.webp',
    },
    {
      slug: 'next-gen-knowledge',
      title: 'Next-Gen Knowledge Engine on Azure',
      type: 'AI Solutions',
      industry: 'HR',
      description: 'Transforming Enterprise Knowledge Access with AI-Powered Retrieval',
      image: '/images/Templates/template10/hero10.webp',
    },
    {
      slug: 'centralized-marketing',
      title: 'Centralized Marketing Dashboard and Automated Reporting',
      type: 'BI Solutions',
      industry: 'Marketing',
      description: 'Turning Multi-Channel Marketing Data into One Real-Time Source of Truth',
      image: '/images/Templates/templatez/z2.png',
    },
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
      image: '/images/Templates/z-bay/hero-bg.png',
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
    {
      slug: 'mahsing',
      title: 'Driving Real Estate Excellence Through Customer Feedback Insights',
      type: 'AI Solutions',
      industry: 'Real Estate',
      description:
        'Transforming customer satisfaction tracking with data-driven insights to systematically analyze feedback across large-scale property development projects.',
      image: '/images/Templates/mahsing/img1.png',
    },
    {
      slug: 'style-bazaar',
      title: 'Retail Data Warehouse & Business Intelligence Platform',
      type: 'BI Solutions',
      industry: 'Retail',
      description:
        'Optimizing retail operations through advanced data warehousing and business intelligence.',
      image: '/images/Templates/style_bazaar/style_hero.png',
    },
    {
      slug: 'style-union',
      title: 'Transforming Retail Performance with Unified Analytics',
      type: 'BI Solutions',
      industry: 'Retail',
      description:
        'Omnichannel Data Warehouse & BI Platform enabling real-time business visibility for fashion retail.',
      image: '/images/Templates/style_bazaar/style_hero.png',
    },
    {
      slug: 'tez',
      title: 'Unified Data Platform & Analytics for Smart Parking Operations',
      type: 'AI Solutions',
      industry: 'Travel and hospitality',
      description:
        'Achieving a 60% reduction in data processing time and unlocking AI-driven insights for smart parking.',
      image: '/images/Templates/tez/tez1.png',
    },
    {
      slug: 'custom-dashboard',
      title: 'AI-Enabled Safety Analytics & Custom Dashboard Solution',
      type: 'AI Solutions',
      industry: 'Manufacturing',
      description:
        'Transforming complex safety data into actionable, AI-powered insights enabling faster decisions and proactive risk management.',
      image: '/images/Templates/tez/tez1.png',
    },
    {
      slug: 'aequs',
      title: 'Transforming Parts Testing with End-to-End Digital Automation',
      type: 'AI Solutions',
      industry: 'Manufacturing',
      description:
        'Achieving 60–70% reduction in manual errors and ~50% faster testing cycles through a custom-built lifecycle management system.',
      image: '/images/Templates/aequs/aequs1.png',
    },
    {
      slug: 'centralized-marketing',
      title: ' Centralized Marketing Dashboard and Automated Reporting',
      type: 'AI Solutions',
      industry: 'Manufacturing',
      description: 'Turning Multi-Channel Marketing Data into One Real-Time Source of Truth',
      image: '/images/Templates/templatez/z2.png',
    },
    {
      slug: 'toyota',
      title: 'Transforming Tool Lifecycle Management Through Intelligent Digitization',
      type: 'AI Solutions',
      industry: 'Automotive',
      description:
        'Streamlining tool management processes with intelligent digital solutions to enhance operational efficiency and lifecycle visibility.',
      image: '/images/Templates/toyota/toyota1.png',
    },
    {
      slug: 'toyota2',
      title: 'Maintenance Management Digitization & Operational Analytics System',
      type: 'AI Solutions',
      industry: 'Automotive',
      description:
        'Transforming maintenance operations and enabling data-driven decision-making for a leading global automotive manufacturer.',
      image: '/images/Templates/toyota2/toy1.png',
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
      image: '/images/Templates/careabout/care1.png',
    },
    {
      slug: 'tessera',
      title: 'Real-Time Enterprise Data Integration using Boomi',
      type: 'AI Solutions',
      industry: 'Healthcare',
      description:
        'Enabling seamless data synchronization, automation, and enterprise connectivity for a leading biotechnology organization.',
      image: '/images/Templates/tessera/tessera1.png',
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
  ];

  const cardsData = caseStudiesData.map((study, i) => {
    return {
      id: i + 1,
      image: study.image,
      title: study.title,
      description: study.description,
      slug: study.slug,
      type: study.type,
      industry: study.industry,
      link: `/casestudy/${study.slug}`,
    };
  });

  const categories = [
    'All',
    'HR',
    'Marketing',
    'Sales',
    'Retail',
    'Manufacturing',
    'Supply chain and logistics',
    'Travel and hospitality',
  ];

  // Filter cards based on tab, category and search query
  const filteredCards = cardsData.filter(card => {
    const matchesTab = card.type === activeTab;
    const matchesCategory = activeCategory === 'All' || card.industry === activeCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      card.title.toLowerCase().includes(query) || card.description.toLowerCase().includes(query);

    return matchesTab && matchesCategory && matchesSearch;
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
          {/* Top Row: Toggle + Search */}
          <div className='flex flex-col md:flex-row items-center gap-6'>
            {/* AI/BI Toggle */}
            <div className='flex items-center p-1.5 bg-[#F5F5F5] rounded-full w-full md:w-auto'>
              <button
                onClick={() => setActiveTab('AI Solutions')}
                className={`flex-1 md:flex-none px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === 'AI Solutions'
                    ? 'bg-white text-[#404040] shadow-sm'
                    : 'text-[#6B7280] hover:text-[#404040]'
                }`}
              >
                AI Intelligence
              </button>
              <button
                onClick={() => setActiveTab('BI Solutions')}
                className={`flex-1 md:flex-none px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === 'BI Solutions'
                    ? 'bg-white text-[#7030B1] shadow-sm'
                    : 'text-[#6B7280] hover:text-[#7030B1]'
                }`}
              >
                BI Intelligence
              </button>
            </div>

            {/* Search Bar */}
            <div className='flex-1 relative w-full'>
              <input
                type='text'
                placeholder='Search Case Studies'
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className='w-full pl-6 pr-16 py-4 rounded-full border border-[#DBDBDB] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all'
                style={{
                  boxShadow:
                    '0px 1.34px 4.15px 0px #D2D0E111, 0px 3.23px 9.98px 0px #D2D0E119, 0px 6.08px 18.8px 0px #D2D0E11F, 0px 10.85px 33.53px 0px #D2D0E124, 0px 20.3px 62.72px 0px #D2D0E12C',
                }}
              />
              <button className='absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-b from-[#7030B1] to-[#B56DD3] flex items-center justify-center text-white shadow-md hover:scale-105 transition-transform'>
                <FiSearch size={22} />
              </button>
            </div>
          </div>

          {/* Bottom Row: Industry + Categories */}
          <div className='flex flex-col md:flex-row items-center gap-4 overflow-x-auto pb-2 scrollbar-hide'>
            {/* Industry Filter Button */}
            <div className='flex items-center gap-2 px-6 py-3 rounded-2xl border border-[#DBDBDB] bg-white text-[#6B7280] min-w-fit shadow-sm'>
              <span className='text-sm font-medium'>Industry</span>
              <img src='/images/Templates/filtersvg.svg' alt='filter' className='w-6 h-6' />
            </div>

            {/* Category Pills */}
            <div className='flex items-center gap-3 w-full'>
              {categories.map(category => (
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
