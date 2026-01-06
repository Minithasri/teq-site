'use client';

import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

const categories = [
  { id: 'hr', label: 'HR' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'sales', label: 'Sales' },
  { id: 'retail', label: 'Retail' },
  { id: 'manufacturing', label: 'Manufacturing' },
  { id: 'supplychain', label: 'Supply chain and Logistics' },
  { id: 'travel', label: 'Travel and hospitality' },
];

const agentData = {
  hr: [
    {
      title: 'AI L&D Agent',
      description: 'For: Employees, HR Leaders, Enterprise Enablement',
      image: '/images/HomePage/Component_1.png',
    },
    {
      title: 'AI performance Review Agent',
      description: 'For: Managers, HR Support Teams, Operations',
      image: '/images/HomePage/Component_2.png',
    },
    {
      title: 'Employee Onboarding Agent',
      description: 'For: Retail Ops, Inventory Planners',
      image: '/images/HomePage/Component_3.png',
    },
    {
      title: 'HR HelpDesk Agent',
      description: 'For: Employees, HR Support Teams, Operations',
      image: '/images/HomePage/Component_4.png',
    },
    {
      title: 'Policy generator Agent',
      description: 'For: HR Leaders, Compliance Teams, Legal Operations',
      image: '/images/HomePage/Component_5.png',
    },
    {
      title: 'AI Hiring Assistant',
      description: 'For: Retail Ops, Inventory Planners',
      image: '/images/HomePage/Component_6.png',
    },
    {
      title: 'Interview Analysis Agent',
      description: 'For: Retail Ops, Inventory Planners',
      image: '/images/HomePage/Component_7.png',
    },
    {
      title: 'AI Resume Filtering',
      description: 'For: Retail Ops, Inventory Planners',
      image: '/images/HomePage/Component_2.png',
    },
    {
      title: 'Job Description Generator',
      description: 'For: Retail Ops, Inventory Planners',
      image: '/images/HomePage/Component_2.png',
    },
  ],
  marketing: [
    {
      title: 'Content Generation Agent',
      description: 'For: Marketing Teams, Content Creators',
    },
    {
      title: 'Social Media Manager',
      description: 'For: Marketing Teams, Social Media Managers',
    },
    {
      title: 'Campaign Analytics Agent',
      description: 'For: Marketing Teams, Data Analysts',
    },
  ],
  sales: [
    {
      title: 'Lead Qualification Agent',
      description: 'For: Sales Teams, Account Managers',
    },
    {
      title: 'Sales Forecasting Agent',
      description: 'For: Sales Teams, Revenue Planners',
    },
    {
      title: 'Customer Outreach Agent',
      description: 'For: Sales Teams, Business Development',
    },
  ],
  support: [
    {
      title: 'Customer Support Agent',
      description: 'For: Support Teams, Service Desk',
    },
    {
      title: 'Ticket Routing Agent',
      description: 'For: Support Teams, IT Helpdesk',
    },
    {
      title: 'Knowledge Base Agent',
      description: 'For: Support Teams, Documentation',
    },
  ],
  banking: [
    {
      title: 'Fraud Detection Agent',
      description: 'For: Banking Operations, Risk Management',
    },
    {
      title: 'Loan Processing Agent',
      description: 'For: Banking Operations, Loan Officers',
    },
    {
      title: 'Customer KYC Agent',
      description: 'For: Banking Operations, Compliance',
    },
  ],
  insurance: [
    {
      title: 'Claims Processing Agent',
      description: 'For: Insurance Operations, Claims Adjusters',
    },
    {
      title: 'Policy Recommendation Agent',
      description: 'For: Insurance Operations, Underwriters',
    },
    {
      title: 'Risk Assessment Agent',
      description: 'For: Insurance Operations, Actuaries',
    },
  ],
  retail: [
    {
      title: 'Inventory Management Agent',
      description: 'For: Retail Ops, Inventory Planners',
    },
    {
      title: 'Customer Experience Agent',
      description: 'For: Retail Ops, Customer Service',
    },
    {
      title: 'Price Optimization Agent',
      description: 'For: Retail Ops, Pricing Teams',
    },
  ],
  manufacturing: [
    {
      title: 'Production Planning Agent',
      description: 'For: Manufacturing Ops, Production Planners',
    },
    {
      title: 'Quality Control Agent',
      description: 'For: Manufacturing Ops, QA Teams',
    },
    {
      title: 'Supply Chain Agent',
      description: 'For: Manufacturing Ops, Supply Chain',
    },
  ],

  supplychain: [
    {
      title: 'Route Optimization Agent',
      description: 'For: Logistics, Operations Teams',
    },
    {
      title: 'Demand Forecasting Agent',
      description: 'For: Supply Chain, Planning Teams',
    },
    {
      title: 'Warehouse Management Agent',
      description: 'For: Logistics, Warehouse Ops',
    },
  ],
  travel: [
    {
      title: 'Booking Assistant Agent',
      description: 'For: Travel, Customer Service',
    },
    {
      title: 'Itinerary Planning Agent',
      description: 'For: Travel, Concierge Services',
    },
    {
      title: 'Revenue Management Agent',
      description: 'For: Hospitality, Revenue Teams',
    },
  ],
};

export default function AgentBuilding() {
  const [activeCategory, setActiveCategory] = useState('hr');

  return (
    <section className='w-full py-16 lg:py-24' style={{ backgroundColor: '#F2ECFE' }}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Title */}
        <h2 className='text-[28px] md:text-[32px] font-medium text-center mb-12 sm:mb-16 tracking-tight text-[#333333]'>
          <span
            style={{
              background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Agentic building blocks
          </span>{' '}
          for the modern enterprise
        </h2>

        {/* =========================================
            DESKTOP VIEW: TABS + INTERACTIVE GRID
           ========================================= */}
        <div className='hidden lg:block'>
          {/* Category Tabs */}
          <div className='flex justify-center mb-12 overflow-x-auto'>
            <div className='inline-flex flex-wrap justify-center bg-[#FBF4FE] rounded-full p-2 gap-2  border border-purple-50 max-w-full'>
              {categories.map(category => {
                const isActive = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 lg:px-6 py-2 lg:py-2.5 rounded-full text-[12px] lg:text-[14px] font-medium transition-all duration-300 border whitespace-nowrap ${isActive
                      ? 'text-white border-transparent shadow-md'
                      : 'text-[#7030B1] border-[#EBD4F4] hover:bg-purple-50'
                      }`}
                    style={{
                      background: isActive
                        ? 'linear-gradient(90deg, #B56DD3 0%, #7030B1 100%)'
                        : 'transparent',
                    }}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Agent Cards Grid */}
          <div className='grid grid-cols-3 gap-8'>
            {agentData[activeCategory]?.map((agent, index) => (
              <div
                key={index}
                className='relative rounded-2xl overflow-hidden group border border-[#E5E5E5] w-full'
                style={{ height: '320px' }}
              >
                {/* Background Image */}
                <div className='absolute inset-0 z-0'>
                  <img
                    src={agent.image || '/images/HomePage/agentbuildingbg.svg'}
                    alt=''
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                </div>



                {/* Overlay for whole card if needed for tint, or keep specific gradients */}

                {/* Content */}
                <div className='absolute bottom-0 w-full p-6 z-20 flex flex-col justify-end h-full'>
                  <div className='mt-auto'>
                    <h3 className='text-[20px] font-bold text-white mb-2 leading-tight'>
                      {agent.title}
                    </h3>
                    <p className='text-[13px] text-white/80 mb-6 font-light'>{agent.description}</p>

                    <div className='w-full h-[1px] bg-white/30 mb-4' />

                    <button className='inline-flex items-center gap-2 text-[#F97316] text-[14px] font-medium hover:gap-3 transition-all duration-200'>
                      Learn more
                      <FiArrowRight className='w-4 h-4' />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================
            MOBILE VIEW: TABS + GRID (same as desktop)
           ========================================= */}
        <div className='lg:hidden'>
          {/* Category Tabs - Mobile */}
          <div className='flex justify-center mb-8 px-4'>
            <div className='flex flex-wrap justify-center bg-[#FBF4FE] rounded-3xl p-3 gap-2 border border-purple-50 max-w-full'>
              {categories.map(category => {
                const isActive = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-[12px] font-medium transition-all duration-300 border whitespace-nowrap ${isActive
                      ? 'text-white border-transparent shadow-md'
                      : 'text-[#7030B1] border-[#EBD4F4] hover:bg-purple-50'
                      }`}
                    style={{
                      background: isActive
                        ? 'linear-gradient(90deg, #B56DD3 0%, #7030B1 100%)'
                        : 'transparent',
                    }}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Agent Cards Grid - Mobile */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {agentData[activeCategory]?.map((agent, index) => (
              <div
                key={index}
                className='relative rounded-2xl overflow-hidden min-h-[320px] shadow-lg group border border-[#E5E5E5]'
              >
                {/* Background Image */}
                <div className='absolute inset-0 z-0'>
                  <img
                    src={agent.image || '/images/HomePage/agentbuildingbg.svg'}
                    alt=''
                    className='w-full h-full object-cover'
                  />
                </div>
                {/* Top Gradient */}
                <div
                  className='absolute inset-x-0 top-0 h-24 z-10'
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(59, 23, 74, 0.7) 0%, rgba(59, 23, 74, 0) 100%)',
                  }}
                />
                {/* Bottom Gradient */}
                <div
                  className='absolute inset-x-0 bottom-0 h-40 z-10'
                  style={{
                    background:
                      'linear-gradient(to bottom, rgba(59, 23, 74, 0) 0%, #3B174A 100%)',
                  }}
                />

                <div className='absolute bottom-0 w-full p-6 z-20 flex flex-col justify-end h-full'>
                  <div className='mt-auto'>
                    <h3 className='text-lg font-bold text-white mb-2 leading-tight'>
                      {agent.title}
                    </h3>
                    <p className='text-sm text-white/80 mb-6 font-light'>{agent.description}</p>
                    <div className='w-full h-[1px] bg-white/30 mb-4' />
                    <button className='inline-flex items-center gap-2 text-[#F97316] text-sm font-medium'>
                      Learn more
                      <FiArrowRight className='w-4 h-4' />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
