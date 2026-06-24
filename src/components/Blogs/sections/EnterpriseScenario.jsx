// src/components/Blogs/sections/EnterpriseScenario.jsx
'use client';

import React from 'react';

export default function EnterpriseScenario({ scenarioData }) {
  if (!scenarioData) return null;

  return (
    <div
      className='w-full py-16 px-4 md:px-6 my-12'
      style={{
        background:
          'linear-gradient(0deg, #F9EAE1, #F9EAE1), linear-gradient(258.79deg, rgba(229, 170, 102, 0.3) -13.56%, rgba(255, 165, 129, 0.3) -13.56%, rgba(221, 161, 108, 0.3) 18.23%, rgba(230, 242, 246, 0.3) 53.64%, rgba(202, 185, 246, 0.3) 91.85%, rgba(112, 48, 177, 0.3) 119.62%)',
      }}
    >
      <div className='max-w-7xl mx-auto flex flex-col gap-8'>
        {/* Header Tag prefix with line */}
        <div className='flex items-center gap-2'>
          {/* Horizontal line */}
          <div
            className='w-6 h-[3px]'
            style={{
              background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
            }}
          />
          <span
            className='text-xs md:text-sm font-bold uppercase tracking-widest'
            style={{
              background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
            }}
          >
            {scenarioData.title}
          </span>
        </div>

        {/* 3-Card Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {scenarioData.cards.map((card, idx) => (
            <div
              key={idx}
              className='bg-[#FFFFFF] rounded-2xl p-8 shadow-sm flex flex-col gap-4 border border-[#ECEAE6]'
            >
              <h3 className='text-xl font-bold text-[#404040]'>{card.title}</h3>

              {card.type === 'outcome' ? (
                <ul className='space-y-3'>
                  {card.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className='text-sm md:text-base text-[#737373] font-sans font-regular flex items-start gap-2'
                    >
                      <span className='text-[#404040]'>•</span>
                      <span>
                        {bullet.text}
                        <strong
                          style={{
                            background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 'bold',
                          }}
                        >
                          {bullet.highlight}
                        </strong>
                        {bullet.suffix}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className='text-sm md:text-base text-[#737373] leading-relaxed font-sans font-regular whitespace-pre-wrap'>
                  {card.text}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Card Quote (spans full-bleed row) */}
        <div className='bg-[#FFFFFF] rounded-2xl p-8 md:p-10 shadow-sm border border-[#ECEAE6] text-center'>
          <p className='text-base md:text-xl text-[#404040] italic font-sans font-medium max-w-4xl mx-auto leading-relaxed'>
            {scenarioData.quote}
          </p>
        </div>
      </div>
    </div>
  );
}
