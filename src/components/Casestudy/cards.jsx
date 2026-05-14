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
                AI Solutions
              </button>
              <button
                onClick={() => setActiveTab('BI Solutions')}
                className={`flex-1 md:flex-none px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === 'BI Solutions'
                    ? 'bg-white text-[#7030B1] shadow-sm'
                    : 'text-[#6B7280] hover:text-[#7030B1]'
                }`}
              >
                BI Solutions
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
