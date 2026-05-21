'use client';

import Image from 'next/image';

const stackItems = [
  {
    title: 'Shopify',
    subtitle: 'E-commerce',
    src: '/images/Templates/templatez/tcshopify.png',
  },
  {
    title: 'Domo',
    subtitle: 'Analytics',
    src: '/images/Templates/templatez/tcdomo.png',
  },
  {
    title: 'Google Sheets',
    subtitle: 'Data Source',
    src: '/images/Templates/templatez/csperformance/tcxl.svg',
  },
  {
    title: 'ETL Tools',
    subtitle: 'Integration',
    src: '/images/Templates/templatez/csperformance/tcetl.svg',
  },
];

export default function TechnologyStack() {
  return (
    <section
      className="relative w-full overflow-hidden font-['Poppins'] flex flex-col items-center justify-center text-center px-4"
      style={{
        maxWidth: '100%',
        minHeight: '426px',
        background: 'linear-gradient(0deg, #616161ff, #5e5e5eff)',
        isolation: 'isolate',
      }}
    >
      {/* Background Graphic Layer */}
      <div className='absolute inset-0 z-0 '>
        <Image
          src='/images/Templates/templatez/csperformance/nexttc.png'
          alt='Background Pattern'
          fill
          className='object-cover opacity-[0.15]'
          priority
        />
      </div>

      {/* Header Container */}
      <div className='relative z-10 flex flex-col items-center gap-2 mb-10'>
        <h2
          className='font-bold uppercase text-white mb-1'
          style={{
            fontSize: '32px',
            lineHeight: '1.2',
            letterSpacing: '1.4px',
          }}
        >
          TECHNOLOGY STACK
        </h2>
        <p
          className='font-bold text-white'
          style={{
            fontSize: '30px',
            lineHeight: '36px',
            letterSpacing: '-0.75px',
          }}
        >
          Built on Best-in-Class Tools
        </p>
      </div>

      {/* Grid Content Container */}
      <div className='relative z-10 w-full max-w-6xl mx-auto flex flex-wrap gap-14 justify-center items-center'>
        {stackItems.map((item, index) => (
          /* 1. Added unique key prop here */
          <div
            key={index}
            className='bg-white flex flex-col items-center justify-between py-5 px-4 transition-transform hover:scale-105'
            style={{
              width: '229px',
              height: '154px',
              borderRadius: '12px',
              borderTop: '1px solid #E0E5EB',
              boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.08)',
            }}
          >
            {/* Top Text label */}
            <span className='text-[#0F172A] font-bold text-lg leading-tight'>{item.title}</span>

            {/* Middle Logo Wrapper */}
            <div className='relative w-full h-[50px] flex items-center justify-center'>
              {/* 2. Replaced static dimensions with fill layout for cleaner responsive aspect-ratio containment */}
              <Image
                src={item.src}
                alt={item.title}
                fill
                className='object-contain'
                style={{
                  maxHeight: item.title === 'Domo' ? '55px' : '45px',
                  transform: item.title === 'Domo' ? 'scale(1.35)' : 'scale(1)',
                }}
              />
            </div>

            {/* Bottom Subtitle context */}
            <span className='text-[#334155] font-medium text-sm capitalize'>{item.subtitle}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
