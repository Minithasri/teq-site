'use client';

import { useState } from 'react';
import { FiArrowRight, FiX } from 'react-icons/fi';
import { agentData } from '../../data/agentBuildingData';

const categories = [
  { id: 'realestate', label: 'Real Estate' },
  { id: 'supplychain', label: 'Supply Chain & Logistics' },
  { id: 'manufacturing', label: 'Manufacturing' },
  { id: 'retail', label: 'Retail' },
  { id: 'sales', label: 'Sales' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'hr', label: 'HR' },
];

const AgentModal = ({ agent, categoryLabel, onClose }) => {
  if (!agent) return null;

  return (
    <div
      className='fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/60'
      onClick={onClose}
    >
      <div
        className='bg-white rounded-2xl w-full relative shadow-2xl overflow-y-auto'
        style={{ maxWidth: '850px', maxHeight: '680px' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className='absolute top-4 right-4 z-10 text-[#7030B1] hover:text-[#B56DD3] transition-colors'
          onClick={onClose}
        >
          <FiX size={24} />
        </button>

        {/* Header Image */}
        <div className='relative w-full p-8'>
          <div className='h-52 w-full overflow-hidden rounded-2xl'>
            <img
              src={agent.image || '/images/HomePage/agentbuildingbg.svg'}
              alt={agent.title}
              className='w-full h-full object-cover'
            />
          </div>
        </div>

        <div className='p-8'>
          {/* Title */}
          <h3
            className='text-lg font-semibold mb-6 bg-clip-text text-transparent'
            style={{
              background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {agent.title}
          </h3>

          {/* Audience & Category - Gray Background Container */}
          <div className='bg-gray-50 rounded-xl p-6 mb-6'>
            <div className='grid grid-cols-2 gap-8'>
              <div>
                <h4 className='font-semibold text-gray-900 text-sm mb-3'>Audience</h4>
                <p className='text-gray-600 text-sm leading-relaxed'>
                  {agent.audience ? agent.audience.join(', ') : 'General Audience'}
                </p>
              </div>
              <div>
                <h4 className='font-semibold text-gray-900 text-sm mb-3'>Category</h4>
                <span
                  className='inline-block px-3 py-1.5 rounded-[12px] text-xs font-medium'
                  style={{ backgroundColor: '#F0DEF8' }}
                >
                  {categoryLabel}
                </span>
              </div>
            </div>
          </div>

          {/* Dotted Separator */}
          <div className='w-full mb-6' style={{ borderTop: '2px dashed #D1D5DB' }} />

          {/* How it works */}
          <div className='mb-6'>
            <h4 className='font-semibold text-gray-900 mb-4 text-sm'>How it works</h4>
            <ul className='space-y-2.5'>
              {agent.howItWorks?.map((item, i) => (
                <li
                  key={i}
                  className='flex items-start gap-3 text-gray-600 text-sm leading-relaxed'
                >
                  <span className='w-1 h-1 rounded-full bg-gray-400 mt-2 shrink-0' />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Dotted Separator */}
          <div className='w-full mb-6' style={{ borderTop: '1px dashed #D1D5DB' }} />

          {/* Potential Impact */}
          <div className='mb-6'>
            <h4 className='font-semibold text-gray-900 mb-5 text-sm'>Potential Impact</h4>
            <div className='grid grid-cols-3 gap-4'>
              {agent.potentialImpact?.map((item, i) => (
                <div
                  key={i}
                  className='border border-purple-200 rounded-xl p-4 text-center'
                  style={{ backgroundColor: '#FAF0FF' }}
                >
                  <p className=' font-medium text-sm leading-snug'>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Link */}
          {/* <div className='pt-2'>
            <button className='group flex items-center gap-2 text-[#8B5CF6] font-medium text-sm hover:gap-3 transition-all duration-300'>
              Request Custom Implementation
              <FiArrowRight className='transition-transform group-hover:translate-x-1' />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default function AgentBuilding() {
  const [activeCategory, setActiveCategory] = useState('realestate');
  const [selectedAgent, setSelectedAgent] = useState(null);

  // Helper to get current agents safely
  const currentAgents = agentData[activeCategory] || [];
  const activeCategoryLabel = categories.find(c => c.id === activeCategory)?.label || 'General';

  return (
    <section
      id='agent-building'
      className='w-full py-16 lg:py-24'
      style={{ backgroundColor: '#F2ECFE' }}
    >
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
            <div className='inline-flex flex-wrap justify-center bg-[#FBF4FE] rounded-full p-1 gap-2  max-w-full'>
              {categories.map(category => {
                const isActive = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 lg:px-6 py-2 lg:py-2.5 rounded-full text-[12px] lg:text-[14px] font-medium transition-all duration-300 whitespace-nowrap ${
                      isActive ? 'text-white shadow-md' : 'text-[#7030B1] hover:bg-purple-50'
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
            {currentAgents.map((agent, index) => (
              <div
                key={index}
                className='relative rounded-2xl overflow-hidden group border border-[#E5E5E5] w-full bg-white'
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

                {/* Content */}
                <div className='absolute bottom-0 w-full p-6 z-20 flex flex-col justify-end h-full pointer-events-none'>
                  <div className='mt-auto pointer-events-auto'>
                    <h3 className='text-[16px] font-medium text-white mb-2 leading-tight'>
                      {agent.title}
                    </h3>
                    <p className='text-[13px] text-white/80 mb-6 font-light'>{agent.description}</p>

                    <div
                      className='w-full h-[1px] mb-4 border-t border-dashed'
                      style={{ borderColor: '#797979' }}
                    />

                    <button
                      onClick={() => setSelectedAgent(agent)}
                      className='inline-flex items-center gap-2 text-[#F97316] text-[14px] font-medium hover:gap-3 transition-all duration-200 cursor-pointer'
                    >
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
                    className={`px-4 py-2 rounded-full text-[12px] font-medium transition-all duration-300 whitespace-nowrap ${
                      isActive ? 'text-white shadow-md' : 'text-[#7030B1] hover:bg-purple-50'
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
            {currentAgents.map((agent, index) => (
              <div
                key={index}
                className='relative rounded-2xl overflow-hidden min-h-[320px] shadow-lg group border border-[#E5E5E5] bg-white'
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
                    background: 'linear-gradient(to bottom, rgba(59, 23, 74, 0) 0%, #3B174A 100%)',
                  }}
                />

                <div className='absolute bottom-0 w-full p-6 z-20 flex flex-col justify-end h-full pointer-events-none'>
                  <div className='mt-auto pointer-events-auto'>
                    <h3 className='text-lg font-bold text-white mb-2 leading-tight'>
                      {agent.title}
                    </h3>
                    <p className='text-sm text-white/80 mb-6 font-light'>{agent.description}</p>
                    <div
                      className='w-full h-[1px] mb-4 border-t border-dashed'
                      style={{ borderColor: '#797979' }}
                    />
                    <button
                      onClick={() => setSelectedAgent(agent)}
                      className='inline-flex items-center gap-2 text-[#F97316] text-sm font-medium cursor-pointer'
                    >
                      Learn more
                      <FiArrowRight className='w-4 h-4' />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        <AgentModal
          agent={selectedAgent}
          categoryLabel={activeCategoryLabel}
          onClose={() => setSelectedAgent(null)}
        />
      </div>
    </section>
  );
}
