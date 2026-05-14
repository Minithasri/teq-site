'use client';

import Image from 'next/image';

export default function Technology() {
  const techs = [
    {
      logo: '/images/Templates/style_bazaar/stylesvg17.svg', // Placeholder logos - should use real ones if available
      name: 'Domo',
      description: 'Magic ETL, Reporting',
    },
    {
      logo: '/images/Templates/style_bazaar/stylesvg18.svg',
      name: 'SFTP Integration',
      description: 'Secure Data Pipelines',
    },
    {
      logo: '/images/Templates/style_bazaar/stylesvg19.svg',
      name: 'Jupyter Notebook',
      description: 'Data Analysis & Validation',
    },
    {
      logo: '/images/Templates/style_bazaar/stylesvg20.svg',
      name: 'Retail POS Systems',
      description: 'Point of Sale Data',
    },
  ];

  return (
    <section className='relative w-full bg-[#F9FAFB] py-16 md:py-24'>
      <div className='max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 text-center'>
        {/* Header */}
        <div className='mb-16'>
          <h2 className='font-semibold uppercase mb-4 tracking-[1.32px] text-3xl md:text-4xl text-[#0A85FF]'>
            TECHNOLOGY STACK
          </h2>
          <h3 className='font-medium text-2xl md:text-3xl text-[#131720]'>Tools & Platforms</h3>
        </div>

        {/* Tech Cards Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {techs.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-[20px] p-8 border-[2px] border-[#0B44B8] shadow-sm hover:shadow-md transition-all flex flex-col items-center'
            >
              <div className='mb-6 w-16 h-16 relative flex items-center justify-center'>
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={64}
                  height={64}
                  className='object-contain'
                />
              </div>
              <h4 className='font-semibold mb-2 text-xl text-[#131720]'>{item.name}</h4>
              <p className='text-sm text-[#6B7280]'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
