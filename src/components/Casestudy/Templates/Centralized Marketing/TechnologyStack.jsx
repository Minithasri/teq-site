'use client';

import Image from 'next/image';

const logos = [
  { src: '/images/Templates/templatez/tcdomo.png', alt: 'Domo' },
  { src: '/images/Templates/templatez/tcga.png', alt: 'Google Analytics' },
  { src: '/images/Templates/templatez/tcmeta.png', alt: 'Meta' },
  { src: '/images/Templates/templatez/tcshopify.png', alt: 'Shopify' },
  { src: '/images/Templates/templatez/tctiktok.png', alt: 'TikTok Ads' },
  { src: '/images/Templates/templatez/tcpinterest.png', alt: 'Pinterest ads' },
];

export default function TechnologyStack() {
  return (
    <section
      className="relative w-full font-['Poppins']"
      style={{
        backgroundColor: '#FCFBF8',
        paddingTop: '56px',
      }}
    >
      <div className='max-w-7xl mx-auto px-4 mb-10'>
        <h2
          className='text-center font-semibold text-black text-[24px] md:text-[32px]'
          style={{
            letterSpacing: '1.4px',
            lineHeight: '1.2',
          }}
        >
          Technology Stack
        </h2>
      </div>

      <div
        className='relative w-full overflow-hidden flex items-center justify-center py-12'
        style={{ minHeight: '334px' }}
      >
        {/* Background Layer */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/Templates/templatez/techStackbg.png'
            alt='Background Pattern'
            fill
            className='object-cover opacity-[0.58]'
          />
          <div className='absolute inset-0' style={{ backgroundColor: 'rgba(0, 13, 157, 0.81)' }} />
        </div>

        {/* Content Layer */}
        <div className='relative z-10 max-w-5xl mx-auto px-4 w-full'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-x-8 md:gap-y-6 justify-items-center'>
            {logos.map((logo, index) => {
              const isTikTok = logo.alt === 'TikTok Ads';

              return (
                <div
                  key={index}
                  className='bg-white rounded-[10px] flex items-center justify-center transition-transform hover:scale-105'
                  style={{
                    width: '100%',
                    maxWidth: '229px',
                    height: '122px',
                    boxShadow:
                      '0px 1px 3px 0px rgba(29, 37, 48, 0.06), 0px 1px 2px -1px rgba(29, 37, 48, 0.06)',
                  }}
                >
                  <div
                    className='relative flex items-center justify-center'
                    style={{
                      width: isTikTok ? '80%' : '60%',
                      height: '60px',
                    }}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className='object-contain'
                      style={{
                        transform: isTikTok ? 'scale(1.6)' : 'scale(1)',
                        transition: 'transform 0.3s ease',
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
