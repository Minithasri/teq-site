import React from 'react';
import Image from 'next/image';

export default function TechnologyStack() {
  const inlineLogos = [
    { src: '/images/Templates/template13/tab.svg', alt: 'Tableau Logo' },
    { src: '/images/Templates/template13/sql.svg', alt: 'SQL Logo' },
    { src: '/images/Templates/template13/elt-tools.svg', alt: 'ETL Tools Logo' },
  ];

  const techItems = [
    {
      title: 'Tableau',
      text: '• Analytics & Visualization',
    },
    {
      title: 'SQL',
      text: '• Data Integration',
    },
    {
      title: 'Core Banking Systems',
      text: '• Source Data',
    },
    {
      title: 'ETL Tools',
      text: '• Automation',
    },
  ];

  return (
    <section className='py-[64px] bg-white'>
      <div className='max-w-[1140px] mx-auto px-6'>
        {/* Integrated Header Block: Title, Subtitle Description, and Logos Together */}
        <div className='flex flex-col items-center text-center mb-[40px]'>
          <h2 className='text-[28px] font-extrabold text-[#071326] tracking-tight mb-[12px]'>
            Technology Stack
          </h2>

          <div className='flex flex-wrap items-center justify-center gap-[18px] max-w-[850px]'>
            {/* Left Brand Logos */}
            <div className='flex items-center gap-[16px] shrink-0'>
              {inlineLogos.slice(0, 2).map((logo, index) => (
                <div key={index} className='h-[36px] w-auto relative flex items-center'>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={85}
                    height={32}
                    className='object-contain'
                  />
                </div>
              ))}
            </div>

            {/* Subtext Statement */}
            <p className='text-[15.5px] text-[#64748b] font-medium tracking-tight px-2'>
              Enterprise-grade tools for reliable, scalable analytics
            </p>

            {/* Right Brand Logo */}
            <div className='h-[44px] w-auto relative flex items-center shrink-0'>
              <Image
                src={inlineLogos[2].src}
                alt={inlineLogos[2].alt}
                width={85}
                height={40}
                className='object-contain'
              />
            </div>
          </div>
        </div>

        {/* Horizontal Pill Row Layout Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-[16px] max-w-[1040px] mx-auto w-full mt-[12px]'>
          {techItems.map((item, index) => (
            <div
              key={index}
              className='bg-[#f1f5f9] rounded-full px-[24px] py-[16px] flex flex-col justify-center items-center text-center shadow-[0_2px_8px_rgba(0,0,0,0.01)] border border-gray-100/50 min-h-[82px]'
            >
              <h3 className='text-[15.5px] font-extrabold text-[#071326] tracking-tight leading-tight'>
                {item.title}
              </h3>
              <p className='text-[13px] text-[#64748b] font-semibold mt-[4px] leading-none whitespace-nowrap'>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
