'use client';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';

const AgenticAI = () => {
  const cards = [
    {
      icon: '/images/Eye.svg',
      title: 'Observe',
      subtitle: 'Real time data monitoring and ingestion from multiple sources',
    },
    {
      icon: '/images/Reason.svg',
      title: 'Reason',
      subtitle: 'Advanced AI reasoning using LLMs and custom logic engines',
    },
    {
      icon: '/images/PlanandCollab.svg',
      title: 'Plan & Collaborate',
      subtitle: 'Multi agent coordination and collaborative task execution',
    },
    {
      icon: '/images/Execute.svg',
      title: 'Execute',
      subtitle: 'Direct system integration and automated task completion',
    },
  ];

  return (
    <section className='w-full py-16 md:py-20 lg:py-24'>
      <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-12 xl:px-24'>
        {/* Header with Spark Icon and CTA Button */}
        <div className='flex items-center justify-between mb-12 lg:mb-16'>
          {/* Spark Icon */}
          <div className='flex-shrink-0'>
            <div className='w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center'>
              <Image src='/images/Spark.svg' alt='' aria-hidden width={32} height={32} />
            </div>
          </div>

          {/* Dashed Line */}
          <div className='hidden lg:block flex-1 mx-6 h-[2px] bg-[linear-gradient(to_right,rgba(107,114,128,0.3)_40%,rgba(0,0,0,0)_0%)] bg-[length:12px_2px] bg-repeat-x' />

          {/* CTA Button */}
          <button
            className='px-6 py-3 rounded-full border-2 font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2'
            style={{ borderColor: '#6F2B8B', color: '#6F2B8B' }}
          >
            Talk to Our Experts
            <FiArrowRight className='w-5 h-5' />
          </button>
        </div>

        {/* Title + Description Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 lg:mb-20'>
          {/* Left: Title */}
          <div>
            <h2 className='text-4xl md:text-5xl font-medium text-[#1F1F1F] leading-tight'>
              What does
              <br />
              GWC actually solve?
            </h2>
          </div>

          {/* Right: Description */}
          <div className='flex items-center'>
            <p className='text-[#525252] text-sm md:text-base leading-relaxed'>
              GWC streamlines and automates complex data management, ensuring transparency,
              compliance, and smarter, faster decision making across the organization.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {cards.map((card, index) => (
            <div
              key={index}
              className='bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 p-8 flex flex-col items-center text-center'
              style={{ minHeight: '280px' }}
            >
              {/* Icon Container */}
              <div
                className='w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm'
                style={{ backgroundColor: '#F3E8FF' }}
              >
                <Image
                  src={card.icon}
                  alt=''
                  aria-hidden
                  width={32}
                  height={32}
                  className='object-contain'
                  style={{ filter: 'invert(29%) sepia(56%) saturate(1847%) hue-rotate(262deg)' }}
                />
              </div>

              {/* Title */}
              <h3 className='text-lg font-semibold text-[#404040] mb-3'>{card.title}</h3>

              {/* Subtitle */}
              <p className='text-sm text-[#525252] leading-relaxed'>{card.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgenticAI;
