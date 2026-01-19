'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const metrics = [
  {
    value: '345 %',
    label: 'ROI over 3 years',
  },
  {
    value: 'Over $ 1M',
    label: 'increased revenue',
  },
  {
    value: '< 6 Month',
    label: 'Payback period',
  },
];

const timeline = [
  {
    text: "Built in ML, NLP, and predictive analytics power Domo's AI driven data experience platform",
  },
  {
    text: 'The AI Service Layer connects end to end data to enable intelligent workflows, alerts, and automation',
  },
  {
    text: 'Low code and no code tools make building and deploying AI models simple for all users',
  },
  {
    text: "GWC's Domo expertise manages the full AI lifecycle, enabling secure, scalable deployment across the organization",
  },
];

export default function WhyDomo() {
  return (
    <section className='w-full bg-white relative overflow-hidden py-16 md:py-24'>
      {/* Background Circle */}
      <div className='absolute top-72 left-20 w-[1200px] h-[900px] -translate-x-1/4 -translate-y-1/3 pointer-events-none z-0'>
        <Image
          src='/images/HomePage/circle_big.png'
          alt='Background Decoration'
          fill
          className='object-contain opacity-50'
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header */}
        <div className='flex items-center justify-between gap-4 mb-16 w-full'>
          {/* Sparkle Icon */}
          <div className='w-12 h-12 bg-white border border-purple-100 rounded-xl shadow-sm flex items-center justify-center p-2 shrink-0'>
            <Image
              src='/images/partners/domo/sparkss.svg'
              alt='Sparkle'
              width={24}
              height={24}
              className='w-6 h-6'
            />
          </div>

          {/* Dotted Line */}
          <div className='flex-1 h-[2px] bg-[linear-gradient(to_right,#A0A0A0_50%,rgba(0,0,0,0)_0%)] bg-[length:10px_2px] bg-repeat-x opacity-30'></div>

          {/* CTA Button */}
          <Link
            href='/contact'
            className='group inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#9156AA] text-[#6F2B8B] font-medium hover:bg-purple-50 transition-colors duration-300 shrink-0'
          >
            Talk to Our Experts
            <FiArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
          </Link>
        </div>

        {/* Title Section */}
        <div className='flex flex-col lg:flex-row justify-between items-start gap-12 mb-20'>
          <h2 className='text-[32px] md:text-[40px] font-medium text-[#404040]'>Why Domo?</h2>
          <p className='text-[#404040] text-[16px] leading-[24px] max-w-xl lg:text-right'>
            With over 1,000 pre built connectors, Domo enables fast data integration without complex
            engineering, empowering teams to analyze data and make smarter decisions with ease.
          </p>
        </div>

        {/* Content Box */}
        <div className='bg-[#F9F3FB] rounded-[32px] p-8 md:p-12 lg:p-16'>
          {/* Timeline */}
          <div className='relative mb-20 hidden md:block'>
            {/* Horizontal Connection Line */}
            <div className='absolute top-[144px] left-0 right-0 z-0'>
              <Image
                src='/images/partners/domo/Line 60.svg'
                alt='Timeline Line'
                width={951}
                height={1}
                className='w-full'
              />
            </div>

            <div className='grid grid-cols-4 gap-8'>
              {timeline.map((item, index) => {
                const iconSequence = [
                  'round1',
                  'round2',
                  'round3',
                  'round2',
                  'round1',
                  'round2',
                  'round3',
                ];
                return (
                  <div key={index} className='relative flex flex-col items-center text-center z-10'>
                    {/* Text */}
                    <p className='text-[13px] text-gray-500 leading-relaxed mb-12 h-[80px] flex items-end justify-center'>
                      {item.text}
                    </p>

                    {/* Icon Point */}
                    <div className='w-8 h-8 relative mb-12 bg-[#F9F3FB] z-20'>
                      <Image
                        src={`/images/partners/domo/${iconSequence[index] || 'round1'}.svg`}
                        alt='Milestone Point'
                        fill
                        className='object-contain'
                      />
                    </div>

                    {/* Vertical Line - Only for specific items if design requires, keeping logical connection */}
                    <div className='absolute top-[145px] bottom-[-40px] w-[1px] bg-[#404040]/20'></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Metrics Grid */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {metrics.map((metric, index) => (
              <div
                key={index}
                className='rounded-xl p-8 text-white relative overflow-hidden'
                style={{
                  background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                }}
              >
                <div className='relative z-10'>
                  <h3 className='text-[26px] md:text-[26px] font-bold text-[#FFFFFF] mb-2'>
                    {metric.value}
                  </h3>
                  <p className='text-[#FFF] font-medium text-[16px]'>{metric.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
