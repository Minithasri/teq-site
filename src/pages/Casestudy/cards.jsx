'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const Cards = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const caseStudiesData = [
    {
      title: 'LMS Success for Digital Training Firm',
      description:
        'Moodle based LMS centralized training, reduced costs, and improved learning scalability.',
    },
    {
      title: 'Data Analytics Transforming Restaurant Experiences',
      description:
        'Brisbane restaurant group automated analytics with GWC Data.AI, achieving 70% time savings.',
    },
    {
      title: 'WhatsApp Salesforce Cybersecurity Integration',
      description:
        'Cybersecurity firm integrated WhatsApp via GWC Data.AI, driving 33% higher sales and 40% time savings.',
    },
    {
      title: 'Salesforce Analytics Boosts Sales Performance',
      description:
        'Global industrial software leader improved sales analytics, delivering 15% cost savings and 25% sales growth.',
    },
    {
      title: 'ABC XYZ Inventory Optimization Analysis',
      description:
        'A home improvement retailer optimized inventory and pricing through advanced analytics.',
    },
    {
      title: 'HR Analytics for Workforce Insights',
      description:
        'GWC enhanced workforce planning through improved people analytics dashboards and reporting.',
    },
    {
      title: 'BI Solutions for IT Management Firms',
      description:
        'Executive dashboards delivered real time insights into sales, engagement, and KPIs for an IT management software provider.',
    },
    {
      title: 'Advanced Analytics for Home Furnishing Retail',
      description:
        'GWC Data.AI enabled data driven sales optimization for a leading home furnishing retailer.',
    },
    {
      title: 'MicroStrategy to Power BI Migration',
      description:
        'Power BI implementation ensured reliable, error free data access while saving time and operational costs.',
    },
    {
      title: 'Workplace Analytics in Manufacturing',
      description:
        'Workplace analytics optimized hybrid office utilization for a global tobacco manufacturer.',
    },
    {
      title: 'Power Apps for Task Management',
      description:
        'Advanced analytics supported operational insights for a global commercial real estate leader.',
    },
    {
      title: 'Oil and Gas Data Analytics',
      description:
        'Data analytics enabled sustainability and efficiency initiatives for a global energy company.',
    },
    {
      title: 'Data Driven Culinary Transformation',
      description:
        'Anyday Group improved diner insights, pricing, and menu strategy using GWC Analytics to drive sales growth.',
    },
    {
      title: 'Analytics Driven Home Retail Success',
      description:
        'A home improvement retailer optimized inventory and pricing through advanced analytics.',
    },
    {
      title: 'Manufacturing Success with Workplace Analytics',
      description:
        'Hybrid workplace analytics improved office safety and space utilization for a global enterprise.',
    },
    {
      title: 'IoT Driven Production Efficiency',
      description:
        'Analytics strengthened operational efficiency for a leading aluminium die casting manufacturer.',
    },
    {
      title: 'Manufacturing Demand & Supply Forecasting',
      description:
        'Data driven insights supported precision manufacturing and workforce growth in the mobile components sector.',
    },
    {
      title: 'Healthcare Claims and Risk Analytics',
      description:
        'Advanced analytics and blockchain streamlined insurance operations and improved customer experience.',
    },
    {
      title: 'Power Apps for Data Auditing',
      description:
        'Data analytics supported operational excellence across a 6,800 flight global airline network.',
    },
    {
      title: 'Power Platform for Complaint Management',
      description:
        'Analytics ensured compliant and efficient customer complaint resolution for a UK energy provider.',
    },
    {
      title: 'Salesforce Customization for CRM Transition',
      description:
        'Cost effective CRM analytics replaced expensive Salesforce licenses for a cybersecurity solutions provider.',
    },
    {
      title: 'Sales Analytics Using Salesforce Studio',
      description:
        'Salesforce Analytics Studio improved forecasting, win rates, and revenue for a global industrial software firm.',
    },
    {
      title: 'Cybersecurity Growth via WhatsApp Integration',
      description:
        'WhatsApp CRM integration boosted engagement and operational efficiency for a cybersecurity services company.',
    },
    {
      title: 'Teqcertify Academy LMS Development',
      description:
        'Moodle based LMS centralized training, reduced costs, and improved learning scalability.',
    },
    {
      title: 'Financial Performance Analytics',
      description:
        'Analytics supported digital transformation for a global FinTech software provider.',
    },
  ];

  const cardsData = caseStudiesData.map((study, i) => ({
    id: i + 21,
    image: `/images/Casestudy/img${i + 21}.png`,
    title: study.title,
    description: study.description,
    link: '/case-study-details',
  }));

  // Filter cards based on search query
  const filteredCards = cardsData.filter(card => {
    const query = searchQuery.toLowerCase();
    return (
      card.title.toLowerCase().includes(query) || card.description.toLowerCase().includes(query)
    );
  });

  return (
    <section className='relative py-16 px-4 md:px-12'>
      {/* Search Bar - Overlapping from hero section */}
      <div className='absolute top-0 left-0 right-0 px-4 md:px-20 -mt-8 z-50'>
        <div className='max-w-2xl mx-auto relative'>
          <FiSearch size={20} className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400' />
          <input
            type='text'
            placeholder='Search case study'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className='w-full pl-12 pr-4 py-4 rounded-full bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-lg'
          />
        </div>
      </div>

      <div className='max-w-7xl mx-auto mt-16'>
        <h2
          className='text-[32px] font-medium text-center mb-12 bg-clip-text text-transparent'
          style={{
            background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Explore our case studies
        </h2>

        {filteredCards.length === 0 ? (
          <div className='col-span-full text-center py-12'>
            <p className='text-gray-500 text-lg'>No case studies found matching your search.</p>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
            {filteredCards.map(card => (
              <div
                key={card.id}
                className='bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col w-full max-w-[400px]'
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

                  <Link
                    href={card.link}
                    className='inline-flex items-center font-semibold text-[16px] hover:underline mt-auto bg-clip-text text-transparent'
                    style={{
                      background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Explore case study
                    <svg
                      className='w-4 h-4 ml-2'
                      fill='none'
                      stroke='url(#gradient)'
                      viewBox='0 0 24 24'
                    >
                      <defs>
                        <linearGradient id='gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
                          <stop offset='0%' stopColor='#7030B1' />
                          <stop offset='100%' stopColor='#B56DD3' />
                        </linearGradient>
                      </defs>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17 8l4 4m0 0l-4 4m4-4H3'
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Cards;
