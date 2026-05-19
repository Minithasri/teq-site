'use client';

import { GitBranch, ShieldCheck, Target } from 'lucide-react';
import Image from 'next/image';

const impactData = [
  {
    title: 'Restored Reporting Confidence',
    description:
      'Rebuilt trust in sales and marketing performance reporting across the organization.',
    icon: <ShieldCheck size={22} className='text-white' />,
  },
  {
    title: 'Consistent Comparisons',
    description:
      'Enabled transparent, standardized time-based performance comparisons (YOY, MOM, WOW).',
    icon: <GitBranch size={22} className='text-white' />,
  },
  {
    title: 'Targeted Growth Strategies',
    description:
      'Improved customer segmentation insights for more precise and effective growth strategies.',
    icon: <Target size={22} className='text-white' />,
  },
];

export default function BusinessImpactSection() {
  return (
    <section
      className="relative overflow-hidden font-['Poppins'] w-full h-[706px] flex flex-col items-center"
      style={{
        background: 'linear-gradient(180deg, #F3F4F6 0%, #CBFAD3 50%, #FFFFFF 100%)',
      }}
    >
      {/* right corner Background Image*/}
      <div
        className='absolute z-0 pointer-events-none'
        style={{
          width: '750px',
          height: '280px',
          bottom: '0px',
          right: '0px',
          opacity: 0.37,
        }}
      >
        <Image
          src='/images/Templates/templatez/salesintelligence/siill.png'
          alt='Retail Context Illustration'
          fill
          className='object-cover object-right-bottom'
          priority
        />
      </div>

      <div className='relative z-10 w-full max-w-[1420px] pt-[50px] px-4'>
        {/* Business Impact Header */}
        <h2
          className='font-semibold uppercase mb-[12px]'
          style={{
            fontSize: '36px',
            letterSpacing: '1.4px',
            color: '#18BE3C',
          }}
        >
          Business Impact
        </h2>

        {/* Subtitle */}
        <h3
          className='font-semibold text-[#0F1729] mb-[35px]'
          style={{
            fontSize: '30px',
            lineHeight: '36px',
          }}
        >
          Measurable outcomes that transformed decision-making
        </h3>

        {/* Impact Cards Grid */}
        <div className='flex gap-[20px] mb-[50px]'>
          {impactData.map((item, index) => (
            <div
              key={index}
              className='bg-white'
              style={{
                width: '429px',
                height: '187px',
                borderRadius: '12px',
                borderTop: '2px solid #18BE3C',
                boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
                padding: '30px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
              }}
            >
              {/* Icon Container - Matching Screenshot 2026-05-14 174838.png */}
              <div
                className='flex mb-[40px] items-center justify-center flex-shrink-0'
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: '#37F647',
                }}
              >
                {item.icon}
              </div>
              <div>
                <h4
                  className='font-semibold leading-tight mb-2'
                  style={{ color: '#18BE3C', fontSize: '22px' }}
                >
                  {item.title}
                </h4>
                <p className='text-[#4B5563] text-[15px] leading-[22px]'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stack Header */}
        <div className='mt-[20px]'>
          <h2
            className='font-bold uppercase mb-[24px]'
            style={{
              fontSize: '36px',
              letterSpacing: '1.4px',
              color: '#000000',
            }}
          >
            Technology Stack
          </h2>

          {/* Domo Card */}
          <div
            className='bg-white flex items-center justify-between relative z-10'
            style={{
              width: '429px',
              height: '116px',
              borderRadius: '16px',
              border: '1.5px solid #C4F4D4',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.04)',
              padding: '0 30px',
            }}
          >
            <div>
              <h4 className='font-extrabold text-black text-[22px] leading-tight mb-0.5'>Domo</h4>
              <p className='text-[#4B5563] text-[15px] font-medium'>
                Business Intelligence Platform
              </p>
            </div>

            <div
              className='relative'
              style={{
                width: '108px',
                height: '75px',
              }}
            >
              <Image
                src='/images/Templates/templatez/salesIntelligence/sidomo.svg'
                alt='Domo Logo'
                fill
                className='object-contain'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
