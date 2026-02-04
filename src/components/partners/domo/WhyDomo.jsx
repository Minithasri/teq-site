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
    <section className='w-full bg-white relative overflow-hidden py-8'>
      {/* Background Circle */}
      <div className='absolute top-72 left-20 w-[1200px] h-[900px] -translate-x-1/4 -translate-y-1/3 pointer-events-none z-0'>
        <Image
          src='/images/HomePage/circle_big.png'
          alt='Background Decoration'
          fill
          className='object-contain opacity-50'
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-10'>
        {/* Header */}
        <div className='flex items-center justify-between gap-4 mb-12 w-full'>
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
        <div className='flex flex-col lg:flex-row justify-between items-start gap-12 mb-12'>
          <h2 className='text-[32px] md:text-[40px] font-medium text-[#404040]'>Why Domo?</h2>
          <p className='text-[#404040] text-[16px] leading-[24px] max-w-xl lg:text-right'>
            With over 1,000 pre built connectors, Domo enables fast data integration without complex
            engineering, empowering teams to analyze data and make smarter decisions with ease.
          </p>
        </div>
      </div>

      <div className='w-full px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Content Box */}
        <div className='bg-[#F9F3FB] rounded-[32px] max-w-9xl p-8 md:p-12 lg:p-16 mx-auto'>
          {/* Timeline */}
          <div className='relative mb-32 hidden md:block'>
            {/* Horizontal Connection Line */}
            <div className='absolute top-[100px] left-16 right-0 z-0'>
              <Image
                src='/images/partners/domo/lines.svg'
                alt='Timeline Line'
                width={1200}
                height={40}
                className=''
              />
            </div>

            <div className='grid grid-cols-4 gap-8'>
              {timeline.map((item, index) => {
                const iconSequence = [];
                return (
                  <div key={index} className='relative flex flex-col items-center text-center z-10'>
                    {/* Text */}
                    <p className='text-[14px] text-gray-500 leading-relaxed mb-12 h-[120px] w-full max-w-[300px] flex items-start justify-center px-2'>
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Timeline View */}
          <div className='md:hidden space-y-8 mb-16'>
            {timeline.map((item, index) => (
              <div
                key={index}
                className='flex gap-4 items-start border-l-2 border-purple-200 pl-4 py-2 hover:border-purple-400 transition-colors'
              >
                <p className='text-[14px] text-gray-600 leading-relaxed'>{item.text}</p>
              </div>
            ))}
          </div>

          {/* Metrics Grid */}
          <div className='grid grid-cols-1 md:grid-cols-3 lg:mx-24 gap-6'>
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
