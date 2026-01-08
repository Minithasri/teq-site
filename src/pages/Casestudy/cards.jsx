'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FiArrowRight, FiSearch } from 'react-icons/fi';

const Cards = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const caseStudiesData = [
    {
      slug: 'eliminating-downtime-centralized-maintenance',
      title: 'Eliminating Downtime Through Centralized Digital Maintenance',
      description:
        'Reduces unplanned downtime through centralized and digitized maintenance management.',
    },
    {
      slug: 'quality-yield-intelligence',
      title: 'Driving First-Time-Right Manufacturing Through Quality & Yield Intelligence',
      description: 'Improves production accuracy using real time quality and yield insights.',
    },
    {
      slug: 'real-time-iot-visibility',
      title: 'Transforming Manufacturing Operations with Real-Time IoT Visibility',
      description: 'Provides live IoT driven visibility into manufacturing operations.',
    },
    {
      slug: 'downtime-optimization-electronics',
      title: 'Downtime Optimization & Maintenance Digitization',
      description: 'Optimizes downtime by digitizing maintenance workflows and data.',
    },
    {
      slug: 'yield-visibility-throughput-growth',
      title: 'Turning Yield Visibility into Throughput Growth',
      description: 'Boosts throughput by converting yield insights into actionable improvements.',
    },
    {
      slug: 'digitizing-tool-intelligence',
      title: 'Digitizing Tool Intelligence for Manufacturing Performance',
      description: 'Enhances manufacturing performance through digital tool monitoring.',
    },
    {
      slug: 'sustainability-energy-competitive-advantage',
      title: 'Turning Energy Consumption into a Measurable Competitive Advantage',
      description: 'Optimizes energy usage to reduce costs and improve efficiency.',
    },
    {
      slug: 'predictive-maintenance-ai-iot',
      title: 'Predictive Maintenance (AI & IoT)',
      description: 'Prevents equipment failures using AI powered predictive insights.',
    },
    {
      slug: 'ai-chatbot-knowledge-access',
      title: 'AI Chatbot for Enterprise Knowledge Access',
      description: 'Enables instant enterprise knowledge access through conversational AI.',
    },
    {
      slug: 'commonality-traceability-analytics',
      title: 'Commonality & Traceability Analytics',
      description: 'Improves component traceability and root cause analysis.',
    },
    {
      slug: 'iot-based-machine-monitoring',
      title: 'IoT-Based Machine Monitoring',
      description: 'Monitors machine health and performance in real time.',
    },
    {
      slug: 'scrap-analytics-quality-improvement',
      title: 'Scrap Analytics for Quality Improvement',
      description: 'Reduces scrap by identifying quality issues and trends.',
    },
    {
      slug: 'maintenance-amc-management-plant',
      title: 'Maintenance & AMC Management',
      description: 'Streamlines maintenance operations and AMC contract tracking.',
    },
    {
      slug: 'quality-defect-traceability-source',
      title: 'Quality & Defect Traceability',
      description: 'Tracks defects end to end for faster resolution.',
    },
    {
      slug: 'breakdown-analytics-mttr-mtbf',
      title: 'Breakdown Analytics (MTTR / MTBF)',
      description: 'Analyzes breakdown metrics to improve equipment reliability.',
    },
    {
      slug: 'maintenance-efficiency-improvement-platform',
      title: 'Maintenance Efficiency Improvement',
      description: 'Improves maintenance productivity and operational efficiency.',
    },
    {
      slug: 'automobile-warranty-vehicle-health',
      title: 'Warranty & Vehicle Health Analytics',
      description: 'Analyzes vehicle health and warranty data to reduce service costs.',
    },
    {
      slug: 'banking-operational-performance-analytics',
      title: 'Operational Performance Analytics',
      description: 'Provides insights into operational efficiency and performance.',
    },
    {
      slug: 'funnel-conversion-analytics',
      title: 'Funnel & Conversion Analytics',
      description: 'Optimizes customer journeys by tracking funnel performance.',
    },
    {
      slug: 'cross-platform-campaign-analytics',
      title: 'Cross-Platform Campaign Analytics',
      description: 'Delivers unified insights across multiple marketing platforms.',
    },
    {
      slug: 'healthcare-operational-kpi-dashboards',
      title: 'Operational KPI Dashboards',
      description: 'Offers real time visibility into healthcare operational KPIs.',
    },
    {
      slug: 'healthcare-data-platform-modernization',
      title: 'Data Platform Modernization',
      description: 'Modernizes data platforms for scalable and secure analytics.',
    },
    {
      slug: 'retail-demand-forecasting',
      title: 'Demand Forecasting & Replenishment Planning',
      description: 'Predicts demand to optimize inventory replenishment.',
    },
    {
      slug: 'retail-store-benchmarking',
      title: 'Store Performance Benchmarking',
      description: 'Benchmarks store KPIs to identify improvement opportunities.',
    },
    {
      slug: 'retail-sales-inventory-intelligence',
      title: 'Sales & Inventory Intelligence',
      description: 'Provides unified insights into sales and inventory performance.',
    },
    {
      slug: 'retail-customer-segmentation',
      title: 'Customer Segmentation & Buying Behavior',
      description: 'Analyzes customer behavior to enable targeted retail strategies.',
    },
    {
      slug: 'oil-gas-work-order-monitoring',
      title: 'Work Order & Asset Monitoring',
      description: 'Monitors assets and work orders to improve operational reliability.',
    },
  ];

  const cardsData = caseStudiesData.map((study, i) => {
    const imgNumber = i + 21;
    const extension = imgNumber === 46 || imgNumber === 47 ? 'jpg' : 'png';

    return {
      id: imgNumber,
      image: `/images/Casestudy/img${imgNumber}.${extension}`,
      title: study.title,
      description: study.description,
      slug: study.slug,
      link: study.slug ? `/Casestudy/${study.slug}` : '/case-study-details',
    };
  });

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
