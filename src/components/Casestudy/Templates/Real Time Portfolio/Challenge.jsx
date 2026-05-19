'use client';

import Image from 'next/image';

import { AlertCircle, Eye, Clock3, TrendingDown, Target } from 'lucide-react';

export default function ExecutiveSummaryAndChallenge() {
  const challengeCards = [
    {
      icon: <AlertCircle size={22} strokeWidth={2} className='text-[#EF4444]' />,
      title: 'Fragmented Systems',
      description: 'Hydrogen investments were tracked across multiple, siloed systems.',
    },
    {
      icon: <Eye size={22} strokeWidth={2} className='text-[#EF4444]' />,
      title: 'No Real-Time Visibility',
      description: 'No real-time visibility into asset performance or financial KPIs.',
    },
    {
      icon: <Clock3 size={22} strokeWidth={2} className='text-[#EF4444]' />,
      title: 'Manual Reporting',
      description: 'Manual reporting slowed down investment oversight and risk assessment.',
    },
    {
      icon: <TrendingDown size={22} strokeWidth={2} className='text-[#EF4444]' />,
      title: 'Limited Portfolio View',
      description: 'Leadership lacked a unified view of the entire hydrogen portfolio.',
    },
    {
      icon: <Target size={22} strokeWidth={2} className='text-[#EF4444]' />,
      title: 'Strategy Alignment',
      description: 'Difficult to align investment outcomes with clean energy goals.',
    },
  ];

  return (
    <div className="w-full bg-white font-['Poppins'] py-12 md:py-16 flex flex-col items-center">
      {/* ================= SECTION 1: EXECUTIVE SUMMARY ================= */}
      <div className='max-w-[1250px] w-full px-4 md:px-6 flex flex-col items-center mb-5'>
        <h2
          className='text-center font-bold mb-8'
          style={{
            fontSize: '34px',
            lineHeight: '1.2',
            color: '#000000',
          }}
        >
          Executive Summary
        </h2>

        <div
          className='w-full p-6 md:p-10 text-[16px] md:text-[20px] lg:text-[22px] font-normal leading-[28px] md:leading-[36px] tracking-normal'
          style={{
            background: '#FFFFFF',
            border: '2px solid #DADFE7',
            borderRadius: '12px',
            color: '#1D2530',
          }}
        >
          <p className='mb-6'>
            HY24, a global leader in clean hydrogen investment and asset management, required a
            solution to monitor and optimize its rapidly growing portfolio of hydrogen projects.
            Traditional reporting systems were fragmented, limiting the ability to track asset
            performance, investment KPIs, and portfolio health in real time.
          </p>
          <p>
            GWC partnered with HY24 to develop a{' '}
            <span className='font-bold text-[#1DACC9]'>custom Domo application</span> that
            centralized hydrogen investment insights, provided portfolio-level dashboards, and
            enabled leadership to make faster, data-driven decisions for clean energy strategies.
          </p>
        </div>
      </div>

      {/* ================= SECTION 2: THE CHALLENGE ================= */}
      <div
        className='relative max-w-[100%] w-full min-h-[752px] px-4 md:px-6 py-12 md:py-16 flex flex-col items-center justify-start overflow-hidden mx-auto'
        style={{
          borderRadius: '27px',
        }}
      >
        {/* Background Industrial Image Asset Overlay */}
        <div className='absolute inset-0 z-0 opacity-40'>
          <Image
            src='/images/Templates/templatez/rtportfolio/challenge.png'
            alt='Industrial backdrop workspace background'
            fill
            priority
            className='object-cover'
          />
        </div>

        {/* Content Container Layer */}
        <div className='relative z-10 w-full max-w-[1200px] flex flex-col items-center'>
          <h2
            className='font-bold text-center mb-2'
            style={{
              fontSize: '34px',
              lineHeight: '40px',
              letterSpacing: '-0.9px',
              color: '#1D2530',
            }}
          >
            The Challenge
          </h2>

          <p className='text-[#676F7E] text-[18px] md:text-[20px] font-medium text-center mb-10 md:mb-16'>
            Fragmented Portfolio Visibility
          </p>

          {/* Centered Symmetric Cards Flex/Grid System */}
          <div className='flex flex-wrap gap-6 md:gap-8 justify-center w-full'>
            {challengeCards.map((card, idx) => (
              <div
                key={idx}
                className='flex flex-col p-6 text-left w-full sm:w-[368px] min-h-[170px] shadow-sm transition-transform hover:scale-[1.01]'
                style={{
                  background: '#FFFFFF',
                  borderRadius: '12px',
                  borderWidth: '1px 1px 1px 4px',
                  borderStyle: 'solid',
                  borderColor: '#DADFE7',
                  borderLeftColor: '#EF4444',
                }}
              >
                {/* Card Heading Header Icon + Title */}
                <div className='flex items-center gap-3 mb-3'>
                  <div className='w-9 h-9 rounded-xl bg-[#EF4444]/10 flex items-center justify-center shrink-0'>
                    {card.icon}
                  </div>
                  <h3 className='font-bold text-[18px] text-[#1D2530]'>{card.title}</h3>
                </div>

                {/* Card Narrative Paragraph Content Description */}
                <p className='text-[#676F7E] text-[14px] leading-[22px] font-normal'>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
