'use client';

import { AlertCircle, Clock, EyeOff, Unlink } from 'lucide-react';
import Image from 'next/image';

const challengeCards = [
  {
    title: 'No Centralized Tracking',
    description: 'No centralized workforce performance tracking across operations.',
    icon: <AlertCircle size={22} className='text-white' />,
  },
  {
    title: 'Disconnected Systems',
    description: 'Disconnected operational systems preventing unified insights.',
    icon: <Unlink size={22} className='text-white' />,
  },
  {
    title: 'Reporting Delays',
    description: 'Delays in reporting and decision-making slowing operations.',
    icon: <Clock size={22} className='text-white' />,
  },
  {
    title: 'Limited Visibility',
    description: 'Limited cost and productivity visibility for leadership.',
    icon: <EyeOff size={22} className='text-white' />,
  },
];

export default function ChallengeSection() {
  return (
    <section
      className='relative flex flex-col items-center pt-[40px] md:pt-[60px] pb-0 overflow-hidden'
      style={{
        width: '100%',
        background: '#FCFBF8',
      }}
    >
      {/* Header Section */}
      <div className='relative z-10 flex flex-col items-center text-center px-6 mb-[20px]'>
        <h2
          className='font-bold mb-[10px] text-[24px] sm:text-[30px] md:text-[36px]'
          style={{
            fontFamily: 'Inter, sans-serif',
            letterSpacing: '1.4px',
            color: '#262626',
          }}
        >
          The Challenge
        </h2>

        <h3
          className='font-bold mb-[10px] text-[20px] sm:text-[24px] md:text-[28px]'
          style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            color: '#1D2530',
          }}
        >
          Operational Blind Spots
        </h3>
      </div>

      {/* Description paragraph */}
      <div className='relative z-10 flex flex-col items-center text-center max-w-[1100px] px-6 sm:px-8 mb-[40px] md:mb-[50px]'>
        <p
          className='font-semibold text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed md:leading-[29.25px]'
          style={{
            fontFamily: 'Inter, sans-serif',
            color: '#4F555C',
          }}
        >
          The organization lacked real-time visibility into cleaning operations and workforce
          performance due to disconnected systems and manual reporting. This led to delayed
          decisions and inefficient resource allocation.
        </p>
      </div>

      {/* Cards + Background Illustration area */}
      <div className='relative w-full flex flex-col items-center'>
        {/* Cards Grid */}
        <div className='relative z-10 w-full max-w-[1400px] px-6 sm:px-8 pb-[80px] md:pb-[120px]'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] w-full'>
            {challengeCards.map((card, index) => (
              <div
                key={index}
                className='flex flex-row items-start text-left p-[20px] md:p-[25px]'
                style={{
                  width: '100%',
                  minHeight: '140px', // Changed height to minHeight for text expansion
                  borderRadius: '12px',
                  background: '#FFFAFA',
                  border: '1px solid #F5F5F5',
                  boxShadow: '10px 4px 15px rgba(255, 67, 67, 0.05)',
                  gap: '16px', // Slightly reduced gap for mobile
                }}
              >
                {/* Icon Container */}
                <div
                  className='flex items-center justify-center shrink-0'
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: '#FF4343',
                  }}
                >
                  {card.icon}
                </div>

                {/* Content Container */}
                <div className='flex flex-col'>
                  <h4
                    className='font-bold text-[#1D2530] text-[16px] md:text-[18px] leading-tight mb-2'
                    style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                  >
                    {card.title}
                  </h4>
                  <p
                    className='text-[#4F555C] text-[13px] md:text-[14px] leading-snug font-medium'
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Background Illustration */}
        <div
          className='absolute bottom-0 left-0 right-0 z-0 pointer-events-none'
          style={{
            height: '100%', // Makes it relative to the container height
            maxHeight: '580px',
            opacity: 0.22,
            clipPath: 'inset(16% 0 0 0)',
          }}
        >
          <Image
            src='/images/Templates/templatez/rtwrokforce/rtchallenge.png'
            alt='Challenge Background'
            fill
            className='object-cover object-top'
          />
        </div>
      </div>
    </section>
  );
}
