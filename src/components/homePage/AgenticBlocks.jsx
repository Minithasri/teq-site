'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AgentModal } from './AgentBuilding';

const allImages = [
  '/images/Agents/Background+Shadow (1).png',
  '/images/Agents/Background+Shadow (2).png',
  '/images/Agents/Background+Shadow (3).png',
  '/images/Agents/Background+Shadow (4).png',
  '/images/Agents/Background+Shadow (5).png',
  '/images/Agents/Background+Shadow (6).png',
  '/images/Agents/Background+Shadow (7).png',
  '/images/Agents/Background+Shadow (8).png',
  '/images/Agents/Background+Shadow (9).png',
  '/images/Agents/Background+Shadow (10).png',
  '/images/Agents/Background+Shadow (11).png',
  '/images/Agents/Background+Shadow (12).png',
  '/images/Agents/Background+Shadow (13).png',
  '/images/Agents/Background+Shadow.png',
];

const categories = [
  {
    id: 'hr',
    label: 'HR',
    agents: [
      { name: 'Magic Rostering', image: allImages[5] },
      { name: 'Agent Horoscope with Developer Dashboard', image: allImages[10] },
      { name: 'Credit Optimization Agent', image: allImages[0] },
      { name: 'Employee Onboarding Agent', image: allImages[11] },
      { name: 'Performance Review Automation', image: allImages[12] },
      { name: 'Leave & Attendance Manager', image: allImages[13] },
      { name: 'Payroll Processing Agent', image: allImages[2] },
    ],
  },
  {
    id: 'marketing',
    label: 'Marketing',
    agents: [
      { name: 'Automated Tech Generator - Bissel Reference (PPT Generator)', image: allImages[3] },
      { name: 'Domo Agent Hub', image: allImages[6] },
      { name: 'Campaign Performance Analyzer', image: allImages[1] },
      { name: 'Content Calendar Planner', image: allImages[8] },
      { name: 'Social Media Sentiment Agent', image: allImages[11] },
      { name: 'Lead Scoring & Nurturing Agent', image: allImages[12] },
    ],
  },
  {
    id: 'sales',
    label: 'Sales',
    agents: [
      { name: 'Sierra - Customer (C Certify)', image: allImages[7] },
      { name: 'Credit Optimization Agent', image: allImages[0] },
      { name: 'Sales Forecast Intelligence Agent', image: allImages[9] },
      { name: 'Deal Risk Detection Agent', image: allImages[12] },
      { name: 'Customer Churn Predictor', image: allImages[13] },
      { name: 'Pipeline Velocity Optimizer', image: allImages[4] },
    ],
  },
  {
    id: 'retail',
    label: 'Retail',
    agents: [
      { name: 'Fashion Retail - Store Manager', image: allImages[4] },
      { name: 'Inventory Replenishment Agent', image: allImages[6] },
      { name: 'Pricing & Promotion Governance Agent', image: allImages[1] },
      { name: 'Markdown & Clearance Decision Agent', image: allImages[8] },
      { name: 'Store Performance Intelligence Agent', image: allImages[11] },
      { name: 'Customer Loyalty Rewards Agent', image: allImages[12] },
    ],
  },
  {
    id: 'manufacturing',
    label: 'Manufacturing',
    agents: [
      { name: 'Predictive Maintenance Agent', image: allImages[9] },
      { name: 'Network Optimization', image: allImages[8] },
      { name: 'Quality Control Inspection Agent', image: allImages[2] },
      { name: 'Production Schedule Optimizer', image: allImages[11] },
      { name: 'Energy Consumption Monitor', image: allImages[12] },
      { name: 'Supplier Risk Assessment Agent', image: allImages[13] },
    ],
  },
  {
    id: 'supplychain',
    label: 'Supply chain and logistics',
    agents: [
      { name: 'Hapag Lloyd', image: allImages[1] },
      { name: 'Procurement Agent', image: allImages[2] },
      { name: 'Network Optimization', image: allImages[8] },
      { name: 'Last Mile Delivery Optimizer', image: allImages[11] },
      { name: 'Warehouse Slotting Agent', image: allImages[12] },
      { name: 'Demand Forecasting Agent', image: allImages[13] },
      { name: 'Freight Cost Analyzer', image: allImages[3] },
    ],
  },
  {
    id: 'travel',
    label: 'Travel and hospitality',
    agents: [
      { name: 'Agent Horoscope with Developer Dashboard', image: allImages[10] },
      { name: 'Dynamic Pricing Agent', image: allImages[6] },
      { name: 'Guest Experience Optimizer', image: allImages[11] },
      { name: 'Flight Delay Prediction Agent', image: allImages[12] },
      { name: 'Hotel Revenue Management Agent', image: allImages[13] },
      { name: 'Travel Itinerary Builder', image: allImages[0] },
    ],
  },
];

const VISIBLE = 4;

export default function AgenticBlocks() {
  const [activeId, setActiveId] = useState('hr');
  const [current, setCurrent] = useState(0);
  const [selectedAgent, setSelectedAgent] = useState(null);

  const activeCategory = categories.find(c => c.id === activeId);
  const agents = activeCategory?.agents ?? [];
  const maxIndex = Math.max(0, agents.length - VISIBLE);

  const handleTabChange = id => {
    setActiveId(id);
    setCurrent(0);
  };

  const prev = () => setCurrent(c => Math.max(0, c - 1));
  const next = () => setCurrent(c => Math.min(maxIndex, c + 1));

  return (
    <section className='py-16 md:py-20 bg-[#FAFAFA]'>
      <div className='max-w-7xl mx-auto px-6 md:px-10 lg:px-16'>
        {/* Title */}
        <h2 className='text-[28px] md:text-[34px] font-semibold text-[#111111] text-center mb-8 leading-tight'>
          Agentic building blocks for the modern enterprise
        </h2>

        {/* Category Tabs */}
        <div className='flex flex-wrap justify-center gap-3 mb-8'>
          {categories.map(cat => {
            const isActive = cat.id === activeId;
            return (
              <button
                key={cat.id}
                onClick={() => handleTabChange(cat.id)}
                className={`px-5 py-2 rounded-full text-[14px] font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-[#212191] bg-[#EAECFF] shadow-[0_2px_16px_rgba(33,33,145,0.18)] border border-[#c7caff]'
                    : 'border border-gray-200 text-[#555555] bg-[#f5f5f7] hover:border-[#c7caff] hover:text-[#212191] hover:bg-[#EAECFF]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* White Container */}
        <div className='bg-white rounded-[24px] px-8 pt-7 pb-10 shadow-[0_2px_20px_rgba(0,0,0,0.05)]'>
          {/* Header Row */}
          <div className='flex items-center justify-between mb-8'>
            <span className='text-[18px] font-semibold text-[#111111]'>
              {activeCategory?.label}
            </span>

            <div className='flex items-center gap-4'>
              {/* Colored dots */}
              <div className='flex items-center gap-1.5'>
                <span className='w-2.5 h-2.5 rounded-full bg-[#FF6B6B]' />
                <span className='w-2.5 h-2.5 rounded-full bg-[#914ec2]' />
                <span className='w-2.5 h-2.5 rounded-full bg-[#4ECDC4]' />
              </div>

              <span className='text-[15px] font-semibold text-[#111111]'>
                {agents.length} Agent{agents.length !== 1 ? 's' : ''}
              </span>

              {/* Prev / Next Arrows */}
              <div className='flex items-center gap-2'>
                <button
                  onClick={prev}
                  disabled={current === 0}
                  className='w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#914ec2] disabled:opacity-30 transition-all duration-200'
                >
                  <svg width='12' height='12' viewBox='0 0 12 12' fill='none'>
                    <path
                      d='M7.5 2L3.5 6L7.5 10'
                      stroke='#444'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </button>
                <button
                  onClick={next}
                  disabled={current >= maxIndex}
                  className='w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#914ec2] disabled:opacity-30 transition-all duration-200'
                >
                  <svg width='12' height='12' viewBox='0 0 12 12' fill='none'>
                    <path
                      d='M4.5 2L8.5 6L4.5 10'
                      stroke='#444'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Agent Cards Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4'>
            {agents.map((agent, index) => (
              <div
                key={index}
                className='flex flex-col rounded-2xl overflow-hidden cursor-pointer group bg-white shadow-sm hover:shadow-xl transition-all duration-300'
                style={{
                  boxShadow: '0px 4px 24px -1px rgba(0, 0, 0, 0.05)',
                }}
                onClick={() => setSelectedAgent({ ...agent, title: agent.name })}
              >
                {/* Top Content Area - Gray Background */}
                <div className='bg-[#F8F8F8] m-2 rounded-2xl px-4 py-8 flex-1 flex flex-row items-center gap-4 min-h-[120px]'>
                  {/* Brain Icon */}
                  <div
                    className='w-14 h-14 rounded-2xl flex items-center justify-center border border-[#E5E5E5] shrink-0'
                    style={{
                      backgroundColor: '#FAFAFA',
                      boxShadow: '0px 0px 10px 0px #0000001A',
                    }}
                  >
                    <img
                      src={(() => {
                        const i = index + 1;
                        switch (activeId) {
                          case 'retail':
                            return `/images/HomePage/icons/${i}.svg`;
                          case 'supplychain':
                            return `/images/HomePage/icons/s${i}.svg`;
                          case 'travelandhospitality':
                            return `/images/HomePage/icons/t${i}.svg`;
                          case 'manufacturing':
                            return `/images/HomePage/icons/m${i}.svg`;
                          case 'hr':
                            return `/images/HomePage/icons/hr${i}.svg`;
                          case 'marketing':
                            return `/images/HomePage/icons/mark${i}.svg`;
                          case 'sales':
                            return `/images/HomePage/icons/sales${i}.svg`;
                          default:
                            return '/images/HomePage/brain.svg';
                        }
                      })()}
                      alt='AI'
                      className='w-8 h-8'
                      onError={e => {
                        e.target.onerror = null;
                        e.target.src = '/images/HomePage/brain.svg';
                      }}
                    />
                  </div>

                  <h3 className='text-[14px] font-semibold text-[#525252] leading-[1.6] line-clamp-3'>
                    {agent.name}
                  </h3>
                </div>

                {/* Bottom Area - White Background */}
                <div className='bg-white px-8 pt-2 pb-4 flex items-center justify-between'>
                  <span
                    className='text-[16px] font-medium group-hover:underline'
                    style={{
                      background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Explore
                  </span>

                  <button
                    className='group/btn w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110'
                    style={{
                      background: 'transparent',
                    }}
                    onMouseEnter={e =>
                      (e.currentTarget.style.background =
                        'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)')
                    }
                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                  >
                    <img
                      src='/images/HomePage/sidearrow.svg'
                      alt='Arrow'
                      className='w-10 h-10 transition-all duration-300 group-hover/btn:brightness-0 group-hover/btn:invert'
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedAgent && (
          <AgentModal
            agent={selectedAgent}
            categoryLabel={activeCategory?.label || 'General'}
            onClose={() => setSelectedAgent(null)}
          />
        )}
      </div>
    </section>
  );
}
