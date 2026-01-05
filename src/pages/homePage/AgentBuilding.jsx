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
      description: 'For: Retail Ops, Inventory Planners',
    },
    {
      title: 'AI performance Review Agent',
      description: 'For: Retail Ops, Inventory Planners',
    },
    {
      title: 'Employee Onboarding Agent',
      description: 'For: Retail Ops, Inventory Planners',
    },
    {
      title: 'HR  HelpDesk Agent',
      description: 'For: Retail Ops, Inventory Planners',
    },
    {
      title: 'Policy generator Agent',
      description: 'For: Retail Ops, Inventory Planners',
    },
    {
      title: 'AI Hiring Assistant',
      description: 'For: Retail Ops, Inventory Planners',
    },
    {
      title: 'Interview Analysis Agent',
      description: 'For: Retail Ops, Inventory Planners',
    },
    {
      title: 'AI Resume Filtering',
      description: 'For: Retail Ops, Inventory Planners',
    },
    {
      title: 'Job Description Generator',
      description: 'For: Retail Ops, Inventory Planners',
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
        <h2 className='text-[28px] md:text-[32px] font-medium text-center mb-12 sm:mb-16 tracking-tight'>
          <span className='text-[#7030B1]'>Agentic building blocks</span>{' '}
          <span className='text-gray-700'>for the modern enterprise</span>
        </h2>

        {/* =========================================
            DESKTOP VIEW: TABS + INTERACTIVE GRID
           ========================================= */}
        <div className='hidden lg:block'>
          {/* Category Tabs */}
          <div className='flex flex-wrap justify-center gap-4 mb-10'>
            {categories.map(category => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2.5 rounded-full text-[14px] font-medium transition-all duration-300 border ${
                    isActive
                      ? 'text-white border-transparent shadow-md'
                      : 'border-[#EBD4F4] hover:bg-purple-50'
                  }`}
                  style={{
                    background: isActive
                      ? 'linear-gradient(270deg, #7030B1 0%, #B56DD3 100%)'
                      : 'white',
                  }}
                >
                  <span
                    style={
                      !isActive
                        ? {
                            background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                          }
                        : {}
                    }
                  >
                    {category.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Agent Cards Grid */}
          <div className='grid grid-cols-3 gap-8'>
            {agentData[activeCategory]?.map((agent, index) => (
              <div
                key={index}
                className='bg-white border border-gray-200 rounded-2xl p-10 hover:shadow-lg transition-shadow duration-300 flex flex-col'
                style={{ width: '400px', height: '200px' }}
              >
                <h3 className='text-[20px] font-semibold text-gray-800 mb-3 leading-tight'>
                  {agent.title}
                </h3>
                <p className='text-[14px] text-gray-500 mb-4 leading-relaxed'>
                  {agent.description}
                </p>
                <div className='mt-auto w-full'>
                  <div className='w-full border-t border-dashed border-gray-300 mb-4'></div>
                  <button className='inline-flex items-center gap-2 text-[#7030B1] text-[14px] font-medium hover:gap-3 transition-all duration-200'>
                    Learn more
                    <FiArrowRight className='w-4 h-4' />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================
            MOBILE VIEW: STACKED CATEGORIES list
           ========================================= */}
        <div className='lg:hidden flex flex-col gap-12'>
          {categories.map(category => (
            <div key={category.id} className='flex flex-col gap-6'>
              {/* Category Header */}
              <div className='flex items-center gap-4'>
                <div className='h-[2px] flex-1 bg-gray-200'></div>
                <h3 className='text-2xl font-semibold text-[#7030B1] whitespace-nowrap'>
                  {category.label}
                </h3>
                <div className='h-[2px] flex-1 bg-gray-200'></div>
              </div>

              {/* Cards for this Category */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {agentData[category.id]?.map((agent, index) => (
                  <div
                    key={index}
                    className='bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col min-h-[200px]'
                  >
                    <h3 className='text-lg font-semibold text-gray-800 mb-3 leading-tight'>
                      {agent.title}
                    </h3>
                    <p className='text-sm text-gray-500 mb-6 leading-relaxed'>
                      {agent.description}
                    </p>
                    <div className='w-full h-[1px] mb-4 bg-[linear-gradient(to_right,#D1D5DB_50%,rgba(0,0,0,0)_0%)] bg-[length:8px_1px] bg-repeat-x mt-auto' />
                    <button className='inline-flex items-center gap-2 text-[#7030B1] text-sm font-medium'>
                      Learn more
                      <FiArrowRight className='w-4 h-4' />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
