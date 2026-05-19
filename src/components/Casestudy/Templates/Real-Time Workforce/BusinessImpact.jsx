'use client';

import { Activity, TrendingUp, Users, Zap } from 'lucide-react';
import Image from 'next/image';

const impactData = [
  {
    title: '70%',
    description: 'Operational Efficiency Improvement',
    icon: <TrendingUp size={22} className='text-white' />,
  },
  {
    title: 'Real-Time',
    description: 'Task Tracking & Monitoring',
    icon: <Activity size={22} className='text-white' />,
  },
  {
    title: 'Faster',
    description: 'Issue Resolution Time',
    icon: <Zap size={22} className='text-white' />,
  },
  {
    title: 'Optimized',
    description: 'Workforce Allocation',
    icon: <Users size={22} className='text-white' />,
  },
];

const techStack = [
  {
    name: 'MySQL',
    subtitle: 'Relational Database',
    logo: '/images/Templates/templatez/rtwrokforce/rtmysql.svg',
  },
  {
    name: 'Domo',
    subtitle: 'Business Intelligence',
    logo: '/images/Templates/templatez/rtwrokforce/sidomo.svg',
  },
];

export default function BusinessImpactSection() {
  return (
    <section
      className='relative overflow-hidden w-full flex flex-col items-center pb-[60px] md:pb-[100px]'
      style={{ background: '#FFFFFF' }}
    >
      {/* Background Illustration */}
      <div
        className='absolute z-0 pointer-events-none flex justify-center items-center w-full px-4'
        style={{ top: '250px', opacity: 0.15 }}
      >
        <Image
          src='/images/Templates/templatez/rtwrokforce/rtbibg.png'
          alt='Workers Background'
          width={1200}
          height={600}
          className='object-contain w-full h-auto max-w-[1200px]'
        />
      </div>

      <div className='relative z-10 w-full max-w-[1400px] flex flex-col items-center px-6'>
        {/* 1. Business Impact Header */}
        <div className='text-center mb-[40px]'>
          <h2
            className='font-bold uppercase text-[28px] md:text-[36px] mb-2'
            style={{
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '1.4px',
              color: '#34BF0D',
            }}
          >
            Business Impact
          </h2>

          <h3
            className='font-bold text-[18px] md:text-[20px]'
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              color: '#1D2530',
            }}
          >
            Measurable Results
          </h3>
        </div>

        {/* 3. Impact Cards Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] mb-[60px] w-full max-w-[1200px]'>
          {impactData.map((item, index) => (
            <div
              key={index}
              className='flex flex-col p-[20px] w-full min-h-[142px]'
              style={{
                borderRadius: '12px',
                background: '#EDFEE9',
                border: '1px solid #34BF0D',
                boxShadow: '0px 1px 3px 0px rgba(29, 37, 48, 0.06)',
              }}
            >
              <div className='flex items-center gap-4 mb-3'>
                <div
                  className='flex items-center justify-center shrink-0'
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: '#34BF0D',
                  }}
                >
                  {item.icon}
                </div>
                <span
                  className='font-bold text-[#34BF0D] text-[22px] md:text-[24px] leading-none'
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {item.title}
                </span>
              </div>

              <p
                className='text-[#4F555C] font-bold text-[15px] md:text-[16px] leading-tight sm:pl-[60px]'
                style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* 5. Technology Stack Header */}
        <div className='w-full flex flex-col items-center'>
          <h2
            className='font-bold uppercase text-center mb-[30px] md:mb-[40px] text-[28px] md:text-[36px]'
            style={{
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '1.4px',
              color: '#000000',
            }}
          >
            Technology Stack
          </h2>

          {/* 6. Logo Cards Container */}
          <div className='flex flex-col sm:flex-row gap-[20px] md:gap-[30px] justify-center w-full max-w-[500px] sm:max-w-none'>
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className='bg-white flex flex-col items-center justify-center p-6 w-full sm:w-[208px] h-[198px]'
                style={{
                  borderRadius: '12px',
                  border: '1px solid #124889',
                  boxShadow: '0px 4px 10px rgba(0,0,0,0.05)',
                }}
              >
                <div className='relative w-[120px] h-[70px] mb-4'>
                  <Image src={tech.logo} alt={tech.name} fill className='object-contain' />
                </div>

                <p
                  className='text-[#4F555C] font-semibold text-[16px] leading-[20px] text-center'
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    maxWidth: '140px',
                  }}
                >
                  {tech.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
