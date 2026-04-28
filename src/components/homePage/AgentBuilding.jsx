'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { FiArrowRight, FiX } from 'react-icons/fi';
import { agentData } from '../../data/agentBuildingData';

const categories = [
  { id: 'retail', label: 'Retail' },
  { id: 'supplychain', label: 'Supply Chain & Logistics' },
  { id: 'travelandhospitality', label: 'Travel and Hospitality' },
  { id: 'manufacturing', label: 'Manufacturing' },
  { id: 'hr', label: 'HR' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'sales', label: 'Sales' },
];

export const AgentModal = ({ agent, categoryLabel, onClose }) => {
  if (!agent) return null;

  useEffect(() => {
    // Lock body scroll
    document.body.style.overflow = 'hidden';

    // Hide navbar elements
    const navElements = document.querySelectorAll('header, nav');
    navElements.forEach(el => {
      el.style.visibility = 'hidden'; // Using visibility hidden to maintain layout space if needed, or display none. User said "closed", let's use display none to remove it.
      el.style.display = 'none';
    });

    return () => {
      document.body.style.overflow = '';
      navElements.forEach(el => {
        el.style.visibility = '';
        el.style.display = '';
      });
    };
  }, []);

  return createPortal(
    <div
      className='fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/60'
      onClick={onClose}
    >
      <div
        className='bg-white rounded-2xl w-full relative shadow-2xl overflow-y-auto'
        style={{ maxWidth: '850px', maxHeight: '580px' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className='absolute top-4 right-2 z-10 w-8 h-8 flex items-center justify-center rounded-full text-white shadow-md hover:scale-110 transition-transform'
          style={{ background: 'linear-gradient(180deg, #a6a6a6ff 10%, #525151ff 100%)' }}
          onClick={onClose}
        >
          <FiX size={16} />
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
    </div>,
    document.body
  );
};

export default function AgentBuilding() {
  const [activeCategory, setActiveCategory] = useState('retail');
  const [selectedAgent, setSelectedAgent] = useState(null);

  // Helper to get current agents safely
  const currentAgents = agentData[activeCategory] || [];
  const activeCategoryLabel = categories.find(c => c.id === activeCategory)?.label || 'General';

  return (
    <section
      id='agent-building'
      className='mx-4 md:mx-8 py-12 lg:py-16 rounded-xl relative overflow-hidden'
      style={{
        background:
          'linear-gradient(90deg, rgba(255, 247, 235, 0.75) 0%, rgba(250, 224, 250, 0.75) 100%), url("/images/HomePage/BG1.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Title */}
        <h2 className='text-[28px] md:text-[32px] font-medium text-center mb-8 sm:mb-10 tracking-tight text-[#333333]'>
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

        {/* Category Tabs */}
        <div className='flex justify-center mb-8 overflow-x-auto'>
          <div className='inline-flex flex-wrap justify-center bg-white rounded-full p-1.5 gap-2 max-w-full shadow-sm'>
            {categories.map(category => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 lg:px-6 py-2 rounded-full text-[13px] lg:text-[14px] font-medium transition-all duration-300 whitespace-nowrap ${
                    isActive ? 'text-white shadow-md' : 'text-[#4B5563] hover:bg-gray-50'
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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4'>
          {currentAgents.map((agent, index) => (
            <div
              key={index}
              className='flex flex-col rounded-2xl overflow-hidden cursor-pointer group bg-white shadow-sm hover:shadow-xl transition-all duration-300'
              style={{
                boxShadow: '0px 4px 24px -1px rgba(0, 0, 0, 0.05)',
              }}
              onClick={() => setSelectedAgent(agent)}
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
                      switch (activeCategory) {
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
                      e.target.style.display = 'none';
                    }}
                  />
                </div>

                <h3 className='text-[14px] font-semibold text-[#525252] leading-[1.6] line-clamp-3'>
                  {agent.title}
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

        {/* Modal */}
        {selectedAgent && (
          <AgentModal
            agent={selectedAgent}
            categoryLabel={activeCategoryLabel}
            onClose={() => setSelectedAgent(null)}
          />
        )}
      </div>
    </section>
  );
}
