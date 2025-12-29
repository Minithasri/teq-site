'use client';

import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

const categories = [
  { id: 'hr', label: 'HR' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'sales', label: 'Sales' },
  { id: 'retail', label: 'Retail' },
  { id: 'manufacturing', label: 'Manufacturing' },
  { id: 'realestate', label: 'Real-estate' },
  { id: 'fashion', label: 'Fashion' },
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
  realestate: [
    {
      title: 'Property Valuation Agent',
      description: 'For: Real Estate, Property Valuers',
    },
    {
      title: 'Lead Generation Agent',
      description: 'For: Real Estate, Sales Teams',
    },
    {
      title: 'Document Processing Agent',
      description: 'For: Real Estate, Legal Teams',
    },
  ],
  fashion: [
    {
      title: 'Trend Analysis Agent',
      description: 'For: Fashion, Design Teams',
    },
    {
      title: 'Inventory Forecasting Agent',
      description: 'For: Fashion, Merchandising',
    },
    {
      title: 'Customer Styling Agent',
      description: 'For: Fashion, Personal Shoppers',
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
    <section className='w-full py-16 lg:py-20' style={{ backgroundColor: '#F2ECFE' }}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Title */}
        <h2 className='text-3xl md:text-4xl font-medium text-center mb-12'>
          <span className='text-[#7030B1]'>Agentic building blocks</span>{' '}
          <span className='text-gray-700'>for the modern enterprise</span>
        </h2>

        {/* Category Tabs */}
        <div className='flex flex-wrap justify-center gap-3 rounded-2xl mb-12'>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-2xl border-2 text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'border-[#7030B1] bg-white text-[#7030B1] shadow-xl'
                  : 'border-gray-200 bg-white text-gray-600 hover:border-purple-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Agent Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {agentData[activeCategory]?.map((agent, index) => (
            <div
              key={index}
              className='bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col'
            >
              <h3 className='text-lg font-semibold text-gray-800 mb-2'>{agent.title}</h3>
              <p className='text-sm text-gray-500 mb-6'>{agent.description}</p>

              {/* Dashed line separator */}
              <div className='w-full h-[1px] mb-4 bg-[linear-gradient(to_right,#D1D5DB_50%,rgba(0,0,0,0)_0%)] bg-[length:8px_1px] bg-repeat-x' />

              <button className='inline-flex items-center gap-2 text-[#7030B1] text-sm font-medium hover:gap-3 transition-all duration-200 mt-auto'>
                Learn more
                <FiArrowRight className='w-4 h-4' />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
