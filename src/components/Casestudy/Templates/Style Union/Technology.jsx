'use client';

import Image from 'next/image';

export default function Technology() {
  const techs = [
    {
      name: 'Google Cloud Platform',
      category: 'CLOUD INFRASTRUCTURE',
      description: 'Data ingestion pipelines and cloud-native processing',
      icon: '/images/Templates/style_union/unionsvg19.svg',
    },
    {
      name: 'Domo',
      category: 'BI & ETL PLATFORM',
      description: 'Magic ETL workflows, dashboards, and automated reporting',
      icon: '/images/Templates/style_union/unionsvg20.svg',
    },
    {
      name: 'Jupyter Notebook',
      category: 'DATA ANALYSIS',
      description: 'Exploratory data analysis and data quality validation',
      icon: '/images/Templates/style_union/unionsvg21.svg',
    },
    {
      name: 'Ginesys POS',
      category: 'POINT OF SALE',
      description: 'Offline retail transaction data from physical stores',
      icon: '/images/Templates/style_union/unionsvg22.svg',
    },
    {
      name: 'Supplymint',
      category: 'SUPPLY CHAIN',
      description: 'Supply chain and vendor management data integration',
      icon: '/images/Templates/style_union/unionsvg23.svg',
    },
    {
      name: 'Excel Inputs',
      category: 'MANUAL DATA',
      description: 'Structured manual inputs from operational teams',
      icon: '/images/Templates/style_union/unionsvg24.svg',
    },
  ];

  return (
    <section className='relative w-full bg-[#F8FAFC] py-20 px-6 md:px-12 lg:px-24'>
      <div className='max-w-[1440px] mx-auto'>
        {/* Header Section */}
        <div className='text-center mb-16'>
          <h2 className='text-[#000000] font-bold text-lg md:text-2xl lg:text-4xl uppercase tracking-widest mb-12'>
            TECHNOLOGY STACK
          </h2>
          <h3 className='text-[#0F1729] text-xl md:text-2xl lg:text-3xl mb-6'>
            Powered by Modern Data Infrastructure
          </h3>
          <p className='text-[#6B7280] text-sm md:text-base lg:text-lg max-w-5xl mx-auto leading-relaxed'>
            A carefully selected technology stack enabling scalable, secure, and real-time analytics
            across the enterprise.
          </p>
        </div>

        {/* Tech Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {techs.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-[16px] p-8 border-[1px] border-[#255DB999] shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full min-h-[200px]'
            >
              <div className='flex justify-between items-start mb-6'>
                <div>
                  <h4 className='text-[#0F1729] font-bold text-lg md:text-xl mb-1'>{item.name}</h4>
                  <span className='text-[#259D91] font-bold text-[10px] md:text-xs tracking-wider'>
                    {item.category}
                  </span>
                </div>
                <div
                  className={`relative ${index === 3 || index === 4 ? 'w-24 h-16 md:w-28 md:h-20' : 'w-16 h-16'} flex-shrink-0`}
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    fill
                    className='object-contain object-right'
                  />
                </div>
              </div>

              <p className='text-[#6B7280] text-xs md:text-sm leading-relaxed'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
