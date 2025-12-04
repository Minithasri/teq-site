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
    <section className='px-4 py-16 md:py-20 lg:py-24' style={{ backgroundColor: '#f3edff' }}>
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Spark + Button Row */}
        <div className='relative flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 lg:mb-16'>
          <div className='z-10'>
            <div
              className='flex items-center justify-center rounded-2xl shadow-md'
              style={{ backgroundColor: '#ffffff', width: '66px', height: '66px' }}
            >
              <Image
                src='/images/Spark.svg'
                alt='Spark'
                width={36}
                height={36}
                className='object-contain'
              />
            </div>
          </div>

          <div className='hidden sm:flex border-t-2 border-dashed border-[#1F1F1F] absolute left-[calc(66px+20px)] right-[calc(250px+40px)] top-1/2 transform -translate-y-1/2 opacity-20' />

          <div className='z-10'>
            <button
              className='flex items-center gap-3 font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg justify-center'
              style={{
                border: '2px solid #8c49bf',
                borderRadius: '30px',
                color: '#8c49bf',
                backgroundColor: 'transparent',
                width: '250px',
                height: '48px',
                fontSize: '16px',
              }}
            >
              Talk to our experts
              <FiArrowRight className='text-xl' />
            </button>
          </div>
        </div>

        {/* Title + Description */}
        <div className='grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 mb-16 lg:mb-20 items-start'>
          <div className='text-center lg:text-left'>
            <h1
              className='leading-tight'
              style={{
                fontSize: '40px',
                fontWeight: 500,
                color: '#1f1f1f',
              }}
            >
              What does <br></br>GWC actually solve?
            </h1>
          </div>

          <div className='flex justify-center lg:justify-end'>
            <p
              dir='ltr'
              className='max-w-xl text-center lg:text-left font-medium leading-relaxed'
              style={{
                color: '#525252',
                fontSize: '14px',
                lineHeight: '1.6',
                fontWeight: '500',
              }}
            >
              GWC streamlines and automates complex data management, ensuring transparency, compliance, and smarter, faster decision making across the organization.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-items-center'>
          {cards.map((card, index) => (
            <div
              key={index}
              className='rounded-[24px] p-[1px]'
              style={{
                background: 'linear-gradient(to right, #C4A3E5, #E5E5E5)',
                width: '275px',
                height: '235px',
              }}
            >
              <div
                className='text-center shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-start'
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '24px',
                  padding: '28px',
                  width: '100%',
                  height: '100%',
                }}
              >
                <div
                  className='rounded-full p-5 mb-4 flex items-center justify-center shadow-md'
                  style={{
                    background: 'linear-gradient(to right, #7030B1, #B56DD3)',
                    width: '72px',
                    height: '72px',
                  }}
                >
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={36}
                    height={36}
                    className='object-contain invert brightness-0'
                  />
                </div>

                <h3 className='font-semibold mb-2' style={{ color: '#404040', fontSize: '18px' }}>
                  {card.title}
                </h3>

                {/* FIXED HERE → 14px + regular */}
                <p
                  className='leading-relaxed text-center'
                  style={{
                    color: '#525252',
                    fontSize: '14px',
                    fontWeight: 400,
                  }}
                >
                  {card.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgenticAI;
