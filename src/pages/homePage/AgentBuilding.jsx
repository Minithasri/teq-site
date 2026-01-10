'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiArrowRight, FiX } from 'react-icons/fi';
import { agentData } from '../../data/agentBuildingData';

const categories = [
  { id: 'hr', label: 'HR' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'sales', label: 'Sales' },
  { id: 'retail', label: 'Retail' },
  { id: 'manufacturing', label: 'Manufacturing' },
  { id: 'supplychain', label: 'Supply Chain & Logistics' },
  { id: 'travelandhospitality', label: 'Travel and Hospitality' },
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
        <div className='relative w-full p-10 pb-0'>
          <div className='h-52 w-full overflow-hidden rounded-2xl'>
            <img
              src={agent.image || '/images/HomePage/agentbuildingbg.svg'}
              alt={agent.title}
              className='w-full h-full object-cover'
            />
          </div>
        </div>

        <div className='px-8 pt-4 pb-8'>
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
          <div className='pt-2'>
            <Link
              href='/contact'
              className='group flex items-center gap-2 text-[#B56DD3] font-medium text-sm hover:gap-3 transition-all duration-300'
            >
              Request Custom Implementation
              <FiArrowRight className='transition-transform group-hover:translate-x-1' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AgentBuilding() {
  const [activeCategory, setActiveCategory] = useState('hr');
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
                {/* Background Image with Shadow and Rounded Corners */}
                <div className='absolute inset-0 z-0'>
                  <div
                    className='w-full h-full rounded-2xl overflow-hidden'
                    style={{
                      boxShadow: `
      0 12px 30px rgba(0,0,0,0.35),
      0 0 0 1px rgba(255,255,255,0.06)
    `,
                    }}
                  >
                    <img
                      src={agent.image || '/images/HomePage/agentbuildingbg.svg'}
                      alt=''
                      className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                    />
                  </div>
                </div>

                {/* Dark Gradient Overlays on All 4 Sides */}

                {/* Bottom Gradient */}
                <div
                  className='absolute inset-x-0 bottom-0 h-[260px] z-10 pointer-events-none'
                  style={{
                    background: `
                      linear-gradient(
                        to top,
                        rgba(0,0,0,0.95) 0%,
                        rgba(0,0,0,0.75) 30%,
                        rgba(0,0,0,0.45) 55%,
                        rgba(0,0,0,0.15) 75%,
                        rgba(0,0,0,0.0) 100%
                      )
                    `,
                  }}
                />

                {/* Content */}
                {/* Content */}
                <div className='absolute bottom-0 w-full p-6 z-20 pointer-events-none'>
                  <div className='flex items-end justify-between w-full'>
                    <div className='pointer-events-auto max-w-[80%]'>
                      <h3 className='text-[16px] font-semibold text-white leading-[1.8] line-clamp-3'>
                        {agent.title}
                      </h3>
                    </div>
                    <button
                      onClick={() => setSelectedAgent(agent)}
                      className='group relative pointer-events-auto w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-lg shrink-0 border-[1.5px] border-[#F97316] overflow-hidden'
                    >
                      <div className='absolute inset-0 bg-gradient-to-r from-[#FBB07B] to-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                      <img
                        src='/images/HomePage/orangearrow1.svg'
                        alt=''
                        className='w-3 h-3 relative z-10 transition-all duration-300 group-hover:brightness-0 group-hover:invert'
                      />
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
                {/* Background Image with Shadow and Rounded Corners */}
                <div className='absolute inset-0 z-0'>
                  <div
                    className='w-full h-full rounded-2xl overflow-hidden'
                    style={{
                      boxShadow: `
                        0 12px 30px rgba(0,0,0,0.35),
                        0 0 0 1px rgba(255,255,255,0.06)
                      `,
                    }}
                  >
                    <img
                      src={agent.image || '/images/HomePage/agentbuildingbg.svg'}
                      alt=''
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>

                {/* Dark Gradient Overlays on All 4 Sides */}

                {/* Bottom Gradient */}
                <div
                  className='absolute inset-x-0 bottom-0 h-[260px] z-10 pointer-events-none'
                  style={{
                    background: `
                      linear-gradient(
                        to top,
                        rgba(0,0,0,0.95) 0%,
                        rgba(0,0,0,0.75) 30%,
                        rgba(0,0,0,0.45) 55%,
                        rgba(0,0,0,0.15) 75%,
                        rgba(0,0,0,0.0) 100%
                      )
                    `,
                  }}
                />

                {/* Top Gradient */}
                <div
                  className='absolute inset-x-0 top-0 h-32 z-10 pointer-events-none'
                  style={{
                    background: `
                      linear-gradient(
                        to bottom,
                        rgba(0,0,0,0.6) 0%,
                        rgba(0,0,0,0.3) 40%,
                        rgba(0,0,0,0.0) 100%
                      )
                    `,
                  }}
                />

                {/* Left Gradient */}
                <div
                  className='absolute inset-y-0 left-0 w-24 z-10 pointer-events-none'
                  style={{
                    background: `
                      linear-gradient(
                        to right,
                        rgba(0,0,0,0.5) 0%,
                        rgba(0,0,0,0.2) 50%,
                        rgba(0,0,0,0.0) 100%
                      )
                    `,
                  }}
                />

                {/* Right Gradient */}
                <div
                  className='absolute inset-y-0 right-0 w-24 z-10 pointer-events-none'
                  style={{
                    background: `
                      linear-gradient(
                        to left,
                        rgba(0,0,0,0.5) 0%,
                        rgba(0,0,0,0.2) 50%,
                        rgba(0,0,0,0.0) 100%
                      )
                    `,
                  }}
                />

                {/* Center Radial Gradient - Vignette Effect */}
                <div
                  className='absolute inset-0 z-10 pointer-events-none'
                  style={{
                    background: `
                      radial-gradient(
                        ellipse at center,
                        rgba(0,0,0,0.3) 0%,
                        rgba(0,0,0,0.45) 40%,
                        rgba(0,0,0,0.65) 70%,
                        rgba(0,0,0,0.85) 100%
                      )
                    `,
                  }}
                />

                <div className='absolute bottom-0 w-full p-6 z-20 pointer-events-none'>
                  <div className='flex items-end justify-between w-full'>
                    <div className='pointer-events-auto max-w-[200px]'>
                      <h3 className='text-[16px] font-semibold text-white leading-snug line-clamp-2'>
                        {agent.title}
                      </h3>
                    </div>
                    <button
                      onClick={() => setSelectedAgent(agent)}
                      className='group relative pointer-events-auto w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-lg shrink-0 border-[1.5px] border-[#F97316] overflow-hidden'
                    >
                      <div className='absolute inset-0 bg-gradient-to-r from-[#FBB07B] to-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                      <img
                        src='/images/HomePage/orangearrow.svg'
                        alt=''
                        className='w-4 h-4 relative z-10 transition-all duration-300 group-hover:brightness-0 group-hover:invert'
                      />
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
