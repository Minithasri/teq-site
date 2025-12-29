'use client';
import Image from 'next/image';
import { useState } from 'react';

const Philosophy = () => {
  const [expandedIndex, setExpandedIndex] = useState(0); // First item expanded by default

  const items = [
    {
      title: 'Use Case-First Design',
      description:
        'We build for outcomes, not for hype. Every agent is tied to a tangible business goal.',
    },
    {
      title: 'Human in the Loop Native',
      description:
        "Approvals, exceptions, and escalations are part of the agent's logic, not an afterthought.",
    },
    {
      title: 'Model Agnostic Engineering',
      description:
        'Our platform works with multiple AI models, giving you flexibility and avoiding vendor lock-in.',
    },
    {
      title: 'Designed for Production',
      description:
        'Our agents are observable, auditable, secure, and continuously improving for real-world deployment.',
    },
    {
      title: 'Engineering Excellence',
      description:
        'Built with best practices, scalable architecture, and rigorous testing for enterprise-grade reliability.',
    },
    {
      title: 'Measurable Outcomes',
      description:
        'Track ROI, performance metrics, and business impact with comprehensive analytics and reporting.',
    },
  ];

  const toggleItem = index => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <div className='relative w-full bg-white py-16 lg:py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-12 lg:mb-16'>
          <h1 className='text-3xl md:text-3xl font-medium mb-6'>
            Our{' '}
            <span className='bg-gradient-to-r from-[#7030B1] to-[#B56DD3] bg-clip-text text-transparent'>
              Development Philosophy
            </span>
          </h1>
          <p className='text-gray-700 text-lg md:text-3xl font-medium max-w-5xl mx-auto'>
            We build reliable, scalable AI that delivers real impact.
          </p>
        </div>

        {/* Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
          {/* Left: Image */}
          <div className='flex items-center justify-center order-2 lg:order-1'>
            <Image
              src='/images/Philosophy.png'
              alt='Development Philosophy'
              width={500}
              height={500}
              className='w-full max-w-[400px] lg:max-w-[500px] h-auto object-contain'
            />
          </div>

          {/* Right: Accordion Items */}
          <div className='space-y-4 order-1 lg:order-2'>
            {items.map((item, index) => (
              <div key={index} className=' pb-6'>
                <button
                  onClick={() => toggleItem(index)}
                  className='w-full flex items-start gap-3 text-left group'
                >
                  {/* Circle with Arrow */}
                  <div className='flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#7030B1] to-[#B56DD3] flex items-center justify-center transition-transform duration-300'>
                    <Image
                      src='/images/HomePage/downarrow.svg'
                      alt=''
                      width={10}
                      height={10}
                      className={`transition-transform duration-300 ${
                        expandedIndex === index ? 'rotate-180' : ''
                      }`}
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                  </div>

                  {/* Title */}
                  <div className='flex-1'>
                    <h3
                      className={`font-semibold text-[18px] transition-colors duration-200 ${
                        expandedIndex === index ? 'text-black' : 'text-gray-400'
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>
                </button>

                {/* Expandable Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedIndex === index ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className='text-gray-600 text-[14px] leading-relaxed pl-11'>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
