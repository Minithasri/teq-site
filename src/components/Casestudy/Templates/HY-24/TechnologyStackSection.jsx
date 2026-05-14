'use client';

import Image from 'next/image';

const technologies = [
  {
    name: 'Domo',
    description: 'App Studio, Magic ETL, Reporting',
    image: '/images/Domo.png',
  },
  {
    name: 'JavaScript',
    description: 'App Studio Development',
    image: '/images/Templates/z-bay/js-logo.png',
  },
  {
    name: 'Python',
    description: 'Jupyter Integration',
    image: '/images/Templates/z-bay/python-logo.png',
  },
  {
    name: 'API Integration',
    description: 'JSON Data Feeds',
    image: '/images/Templates/z-hy-24/api-text.png',
  },
  {
    name: 'Excel',
    description: 'Legacy System',
    image: '/images/Templates/z-john-good-groups/excel-logo.png',
  },
];

const TechnologyStackSection = () => {
  return (
    <section className='w-full overflow-hidden bg-[#F5F5F5]'>
      <div className='mx-auto max-w-7xl px-4 md:px-6 py-8 md:py-10'>
        {/* TOP CONTENT */}
        <div className='flex flex-col gap-6 md:flex-row md:items-start md:justify-between'>
          {/* LEFT SECTION */}
          <div className='flex items-start gap-8'>
            {/* TEXT CONTENT */}
            <div>
              {/* LABEL */}
              <h2 className='text-2xl md:text-5xl leading-none font-semibold uppercase tracking-tight text-[#2B2B2B]'>
                TECHNOLOGY STACK
              </h2>

              {/* HEADING */}
              <h3 className='mt-4 text-2xl md:text-5xl leading-[1.1] tracking-[-2px] text-[#111827]'>
                Tools & Technologies
              </h3>
            </div>

            {/* LOGOS */}
            <div className='hidden md:flex items-center gap-4 pt-1'>
              {technologies.map((item, index) => (
                <div key={index} className='flex items-center'>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    priority
                    className='h-[42px] w-[72px] object-contain'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE LOGOS */}
        <div className='mt-6 flex flex-wrap items-center gap-4 md:hidden'>
          {technologies.map((item, index) => (
            <div key={index} className='flex items-center'>
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                priority
                className='h-[42px] w-[62px] object-contain'
              />
            </div>
          ))}
        </div>

        {/* TECHNOLOGY TAGS */}
        <div className='mt-8 flex flex-wrap gap-3 md:gap-4'>
          {technologies.map((item, index) => (
            <div
              key={index}
              className='flex items-center gap-2 rounded-2xl border border-[#9D9D9D] bg-white px-4 py-3'
            >
              {/* TITLE */}
              <p className='text-[13px] md:text-[14px] font-semibold text-[#111827]'>{item.name}</p>

              {/* DESCRIPTION */}
              <p className='text-[11px] md:text-[12px] text-[#7A7F8C]'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStackSection;
