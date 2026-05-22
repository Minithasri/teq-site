'use client';

import Image from 'next/image';

const techLogos = [
  { src: '/images/Templates/templatez/nextgc.png', alt: 'GCP (BigQuery)', name: 'GCP (BigQuery)' },
  { src: '/images/Templates/templatez/nextreact.png', alt: 'React JS', name: 'React JS' },
  { src: '/images/Templates/templatez/nextsf.png', alt: 'Salesforce', name: 'Salesforce' },
  { src: '/images/Templates/templatez/nextadv.png', alt: 'Adverity', name: 'Adverity' },
];

export default function TechnologyStack() {
  return (
    <section
      className="relative w-full font-['Poppins'] overflow-hidden py-16 md:py-0"
      style={{
        minHeight: '497px', // Changed to minHeight for mobile flexibility
        background: '#302B2B',
      }}
    >
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/Templates/templatez/nexttc.png'
          alt='Tech Stack Background'
          fill
          className='object-cover opacity-[0.39]'
        />
        <div
          className='absolute inset-0'
          style={{
            background:
              'linear-gradient(0deg, rgba(48, 43, 43, 0.6) 0%, rgba(48, 43, 43, 0.6) 100%)',
          }}
        />
      </div>

      <div className='relative z-10 flex flex-col items-center justify-center min-h-[497px] max-w-[1450px] mx-auto px-4'>
        <h2 className='text-white font-bold text-center mb-1 text-[42px] md:text-[32px]'>
          Technology Stack
        </h2>

        <h3
          className='text-white font-bold text-center my-8 md:my-8 text-[22px] md:text-[30px]'
          style={{
            lineHeight: '1.2',
            letterSpacing: '-0.75px',
          }}
        >
          Built on Best-in-Class Tools
        </h3>

        {/* Added responsive grid/flex behavior */}
        <div className='flex flex-wrap justify-center gap-4 md:gap-6 w-full'>
          {techLogos.map((logo, index) => {
            const isReact = logo.name === 'React JS';

            return (
              <div
                key={index}
                className='bg-white flex flex-col items-center justify-center p-4 w-[160px] h-[120px] md:w-[229px] md:h-[154px] border-2 border-[#F5F5F5] rounded-[12px] shadow-[0px_8px_22px_rgba(0,0,0,0.08)]'
              >
                <div className='relative w-full h-[40px] md:h-[60px] mb-2 md:mb-3 overflow-hidden'>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className={`object-contain px-2 md:px-4 ${isReact ? 'scale-[1.3] origin-top' : ''}`}
                    style={{
                      objectPosition: isReact ? 'center -1px' : 'center',
                    }}
                  />
                </div>
                <span className='text-[#1D2530] font-bold text-[12px] md:text-[14px] text-center'>
                  {logo.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
