import React from 'react';

// Divided into left and right arrays to keep the header title centered perfectly
const leftLogos = [
  '/images/Templates/template15/tech1.svg', // Tableau Brand Logo
  '/images/Templates/template15/tech2.svg', // Domo Brand Logo
  '/images/Templates/template15/tech3.svg', // Power BI Brand Logo
];

const rightLogos = [
  '/images/Templates/template15/tech4.svg', // SQL Brand Logo
  '/images/Templates/template15/tech5.svg', // ETL Brand Logo
];

const tags = [
  {
    label: 'Power BI',
    icon: '/images/Templates/template15/techno1.svg',
  },
  {
    label: 'Tableau',
    icon: '/images/Templates/template15/techno2.svg',
  },
  {
    label: 'Domo',
    icon: '/images/Templates/template15/techno3.svg',
  },
  {
    label: 'SQL',
    icon: '/images/Templates/template15/techno4.svg',
  },
  {
    label: 'HRIS Integration',
    icon: '/images/Templates/template15/01.svg', // Using fallback/reused SVG icon path
  },
  {
    label: 'Finance Systems',
    icon: '/images/Templates/template15/techno5.svg',
  },
  {
    label: 'ETL Pipelines',
    icon: '/images/Templates/template15/techno6.svg',
  },
];

export default function TechnologyStack() {
  return (
    <section className='py-[48px] md:py-[56px] bg-white w-full relative border-b border-gray-100'>
      <div className='max-w-[1140px] mx-auto px-4 md:px-6 text-center'>
        {/* CENTERED ROW HEADER GROUP: Splits brand logos around title */}
        <div className='flex justify-center items-center gap-4 md:gap-[24px] flex-wrap mb-4 w-full'>
          {/* Left Side Logo Pack */}
          <div className='flex items-center gap-4 md:gap-[24px]'>
            {leftLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt='Tech Brand Logo'
                className='h-[28px] md:h-[36px] w-auto object-contain max-w-[90px]'
              />
            ))}
          </div>

          {/* Main Title Block */}
          <h2 className='text-[24px] md:text-[28px] font-extrabold text-[#071326] tracking-tight mx-2 whitespace-nowrap'>
            Technology Stack
          </h2>

          {/* Right Side Logo Pack */}
          <div className='flex items-center gap-4 md:gap-[24px]'>
            {rightLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt='Tech Brand Logo'
                className='h-[28px] md:h-[36px] w-auto object-contain max-w-[90px]'
              />
            ))}
          </div>
        </div>

        {/* SUBTITLE */}
        <p className='text-[14px] md:text-[15.5px] text-[#64748b] font-medium mb-8 tracking-tight'>
          Modern data stack powering the analytics solution
        </p>

        {/* PILLS CONTAINER ROW */}
        <div className='flex flex-wrap justify-center gap-2.5 md:gap-3 max-w-[1000px] mx-auto'>
          {tags.map((item, index) => (
            <div
              key={index}
              className='inline-flex items-center gap-2 px-4 md:px-5 py-2 rounded-full text-[12.5px] md:text-[13px] font-bold tracking-tight border-2 border-[#F5F5F5] shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:opacity-95'
            >
              {/* Dynamic rendering using your specific uploaded SVG asset indicators */}
              <img
                src={item.icon}
                alt=''
                className='w-[15px] h-[15px] object-contain invert brightness-0 shrink-0 select-none pointer-events-none'
              />

              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
