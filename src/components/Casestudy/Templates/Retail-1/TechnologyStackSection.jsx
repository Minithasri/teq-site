'use client';

import Image from 'next/image';

const techStack = [
  {
    title: 'Power BI',
    subtitle: 'Visualization',
    logo: '/images/Templates/retail-1/powerbi.png',
  },
  {
    title: 'Tableau',
    subtitle: 'Visualization',
    logo: '/images/Templates/retail-1/tableau.png',
  },
  {
    title: 'Domo',
    subtitle: 'Analytics',
    logo: '/images/Templates/retail-1/domo.png',
  },
  {
    title: 'Shopify / POS',
    subtitle: 'Data Source',
    logo: '/images/Templates/retail-1/shopify.png',
  },
  {
    title: 'ETL Tools',
    subtitle: 'Integration',
    logo: '/images/Templates/retail-1/etl.png',
  },
];

const TechnologyStackSection = () => {
  return (
    <section className='relative w-full overflow-hidden'>
      {/* BACKGROUND IMAGE */}
      <div className='absolute inset-0'>
        <Image
          src='/images/Templates/retail-1/tech-stack.png'
          alt='Background'
          fill
          priority
          className='object-cover'
        />

        {/* DARK OVERLAY */}
        <div className='absolute inset-0 bg-[#1E1E1E]/5' />
      </div>

      {/* CONTENT */}
      <div className='relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16'>
        {/* TITLE */}
        <h2
          className='
            text-center
            text-2xl
            md:text-5xl
            leading-none
            font-semibold
            uppercase
            tracking-[2px]
            text-white
          '
        >
          TECHNOLOGY STACK
        </h2>

        {/* SUBTITLE */}
        <p
          className='
            mt-4
            text-center
            text-2xl
            md:text-5xl
            leading-none
            tracking-[-0.5px]
            text-white
          '
        >
          Built on Best-in-Class Tools
        </p>

        {/* CARDS */}
        <div
          className='
            mt-12
            grid
            grid-cols-2
            gap-4
            md:grid-cols-3
            xl:grid-cols-5
          '
        >
          {techStack.map((item, index) => (
            <div
              key={index}
              className='
                flex
                flex-col
                items-center
                justify-center
                rounded-[16px]
                bg-white
                px-4
                py-6
              '
            >
              {/* TITLE */}
              <h3
                className='
                  text-center
                  text-[20px]
                  md:text-[26px]
                  leading-none
                  font-semibold
                  tracking-[-0.5px]
                  text-[#232A35]
                '
              >
                {item.title}
              </h3>

              {/* LOGO */}
              <div className='mt-5 flex items-center justify-center'>
                <Image
                  src={item.logo}
                  alt={item.title}
                  width={72}
                  height={72}
                  className='
                    h-[44px]
                    w-auto
                    object-contain
                  '
                />
              </div>

              {/* SUBTITLE */}
              <p
                className='
                  mt-5
                  text-center
                  text-[14px]
                  md:text-[18px]
                  font-semibold
                  text-[#232A35]
                '
              >
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStackSection;
