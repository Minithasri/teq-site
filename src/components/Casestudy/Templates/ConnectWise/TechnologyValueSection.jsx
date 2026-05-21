'use client';

import Image from 'next/image';

const techTags = ['Boomi', 'Salesforce (SFDC)', 'NetSuite', 'Snowflake', 'Manage', 'ePay'];

const TechnologyValueSection = () => {
  return (
    <section className='w-full overflow-hidden'>
      <div className='mx-auto max-w-7xl px-4 md:px-6'>
        {/* ================= TECHNOLOGY STACK ================= */}
        <div>
          {/* TITLE */}
          <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[-1px] text-center'>
            Technology Stack
          </h2>
          {/* TOP ROW */}
          <div className='mt-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-center'>
            {/* LOGOS */}
            <div className='flex flex-wrap items-center gap-5 md:gap-6'>
              <Image
                src='/images/Templates/connect-wise/boomi.png'
                alt='Boomi'
                width={42}
                height={42}
                className='h-[32px] w-auto object-contain'
              />

              <Image
                src='/images/Templates/connect-wise/salesforce.png'
                alt='Salesforce'
                width={42}
                height={42}
                className='h-[32px] w-auto object-contain'
              />

              <Image
                src='/images/Templates/connect-wise/netsuite.png'
                alt='NetSuite'
                width={42}
                height={42}
                className='h-[32px] w-auto object-contain'
              />

              <Image
                src='/images/Templates/connect-wise/snowflake.png'
                alt='Snowflake'
                width={42}
                height={42}
                className='h-[32px] w-auto object-contain'
              />

              <Image
                src='/images/Templates/connect-wise/epay.png'
                alt='ePay'
                width={42}
                height={42}
                className='h-[32px] w-auto object-contain'
              />
            </div>
          </div>

          {/* TAGS */}
          <div className='mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-5'>
            {techTags.map((item, index) => (
              <div
                key={index}
                className='
                  rounded-full
                  border-2
                  border-[#F5F5F5]
                  bg-white
                  px-7
                  md:px-10
                  py-2.5
                  text-[13px]
                  md:text-[15px]
                  font-medium
                  text-[#0F1729]/80
                  shadow-[0px_8px_22px_rgba(0,0,0,0.08)]
                '
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* ================= VALUE DELIVERED ================= */}
        <div className='mt-14 text-center'>
          {/* TITLE */}
          <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[1px] uppercase'>
            Value Delivered
          </h2>

          {/* DESCRIPTION */}
          <div className='mt-4'>
            <p className='text-[12px] md:text-[18px] leading-[2] text-[#70798A]'>
              By implementing a unified integration framework and enabling real-time enterprise
              connectivity, we helped the organization eliminate data silos, reduce operational
              overhead, and establish a foundation for continuous scalability. The platform now
              serves as the backbone for reliable, automated data exchange — empowering stakeholders
              with accurate insights and accelerating business outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyValueSection;
