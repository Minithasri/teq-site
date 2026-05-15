'use client';

import Image from 'next/image';

const TechnologyStack = () => {
  const logos = [
    '/images/Templates/toyota/tsvg13.svg',
    '/images/Templates/toyota/tsvg14.svg',
    '/images/Templates/toyota/tsvg15.svg',
    '/images/Templates/toyota/tsvg16.svg',
    '/images/Templates/toyota/tsvg17.svg',
    '/images/Templates/toyota/tsvg18.svg',
    '/images/Templates/toyota/tsvg19.svg',
  ];

  const techItems = [
    { category: 'FRONTEND', name: 'Power Apps' },
    { category: 'WORKFLOW', name: 'Power Automate' },
    { category: 'DATABASE', name: 'SQL Server' },
    { category: 'ANALYTICS', name: 'Power BI' },
    { category: 'DOCUMENTS', name: 'SharePoint' },
    { category: 'DATA PIPELINE', name: 'Azure Data Factory' },
    { category: 'DEVOPS', name: 'CI/CD Pipelines' },
  ];

  return (
    <section className='pt-16 pb-6 md:pt-20 md:pb-2' style={{ backgroundColor: '#F0F1F5' }}>
      <div className='max-w-7xl mx-auto px-6 md:px-12'>
        {/* Header Section: Title and Icons in one row */}
        <div className='flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-12'>
          <h2 className='text-xl md:text-4xl font-bold text-[#131720] whitespace-nowrap'>
            Technology Stack
          </h2>
          <div className='flex flex-wrap items-center justify-center md:justify-start gap-8 md:gap-10'>
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Tech Logo ${index}`}
                className='h-12 md:h-12 w-auto object-contain transition-transform hover:scale-110'
              />
            ))}
          </div>
        </div>

        {/* Content Row: Tech Tags and Decorative Image */}
        <div className='flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16'>
          {/* Tech Items: Flex-wrap layout matching the image */}
          <div className='flex flex-wrap gap-3 md:gap-5 flex-grow'>
            {techItems.map((item, index) => (
              <div
                key={index}
                className='bg-white px-5 py-3 rounded-[1.2rem] shadow-sm flex items-center gap-3 transition-all duration-300 hover:shadow-md hover:-translate-y-1'
              >
                <div
                  className='px-2 py-1.5 rounded-full text-[10px] font-extrabold tracking-widest whitespace-nowrap'
                  style={{
                    backgroundColor: '#EBF5FB',
                    color: '#1481B8',
                  }}
                >
                  {item.category}
                </div>
                <span className='text-sm md:text-md font-bold text-[#131720]'>{item.name}</span>
              </div>
            ))}
          </div>

          {/* Right Side Image - Restored */}
          <div className='w-full lg:w-[420px] flex-shrink-0 lg:sticky lg:top-24 mt-8 lg:mt-0'>
            <div className='relative aspect-[4/3] top-44 -right-44 rounded-[20px] overflow-hidden shadow-2xl border border-white/20'>
              <Image
                src='/images/Templates/toyota/toyota6.png'
                alt='Toyota Technology Visual'
                fill
                className='object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
