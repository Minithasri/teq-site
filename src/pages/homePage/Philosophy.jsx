'use client';
import Image from 'next/image';
import { useState } from 'react';

const Philosophy = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

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
    <div className='relative w-full bg-white py-16 lg:py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-12 sm:mb-16'>
          <h1 className='text-[28px] md:text-[28px] font-medium mb-6 tracking-light'>
            Our{' '}
            <span className='bg-gradient-to-r from-[#7030B1] to-[#B56DD3] bg-clip-text text-transparent'>
              Development Philosophy
            </span>
          </h1>
          <p className='text-gray-700 text-[18px] md:text-[28px] font-medium max-w-4xl mx-auto leading-relaxed'>
            We build reliable, scalable AI that delivers real impact.
          </p>
        </div>

        {/* ==============================
            DESKTOP LAYOUT (Accordion)
           ============================== */}
        <div className='hidden lg:grid grid-cols-2 gap-16 items-start'>
          {/* Left: Image */}
          <div className='flex justify-center sticky top-24'>
            <Image
              src='/images/Philosophy.png'
              alt='Development Philosophy'
              width={500}
              height={500}
              className='w-full max-w-[500px] h-auto object-contain drop-shadow-xl'
            />
          </div>

          {/* Right: Accordion Items */}
          <div className='space-y-2'>
            {items.map((item, index) => (
              <div key={index} className='pb-4 border-b border-gray-100 last:border-0'>
                <button
                  onClick={() => toggleItem(index)}
                  className='w-full flex items-center gap-5 text-left group py-4 select-none'
                >
                  {/* Circle with Arrow */}
                  <div className='flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#7030B1] to-[#B56DD3] flex items-center justify-center transition-transform duration-300 shadow-md group-hover:scale-110'>
                    <Image
                      src='/images/HomePage/downarrow.svg'
                      alt=''
                      width={12}
                      height={12}
                      className={`transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''
                        }`}
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                  </div>

                  {/* Title */}
                  <div className='flex-1'>
                    <h3
                      className={`font-semibold text-md transition-colors duration-200 ${expandedIndex === index
                        ? 'text-[#7030B1]'
                        : 'text-gray-400 group-hover:text-gray-600'
                        }`}
                    >
                      {item.title}
                    </h3>
                  </div>
                </button>

                {/* Expandable Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <p className='text-gray-600 text-base leading-relaxed pl-[3.25rem] pb-4'>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==============================
            MOBILE LAYOUT (Stacked Cards)
           ============================== */}
        <div className='lg:hidden flex flex-col gap-10'>
          {/* Top Image */}
          <div className='flex justify-center'>
            <Image
              src='/images/Philosophy.png'
              alt='Development Philosophy'
              width={350}
              height={350}
              className='w-full max-w-[320px] h-auto object-contain drop-shadow-lg'
            />
          </div>

          {/* List of Feature Cards */}
          <div className='space-y-4'>
            {items.map((item, index) => (
              <div
                key={index}
                className='bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col gap-2'
              >
                <div className='flex items-center gap-3'>
                  <div className='w-2 h-2 rounded-full bg-[#7030B1]' />
                  <h3 className='font-semibold text-lg text-[#333]'>{item.title}</h3>
                </div>
                <p className='text-gray-600 text-sm leading-relaxed pl-5'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
