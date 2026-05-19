'use client';

import Image from 'next/image';

const impactCards = [
  {
    value: '~15%',
    title: 'Cost Reduction',
    desc: 'Through optimized campaign performance',
  },
  {
    value: '~25%',
    title: 'Less Manual Effort',
    desc: 'Reduction in manual reporting overhead',
  },
  {
    value: '100%',
    title: 'Funnel Visibility',
    desc: 'End-to-end conversion tracking',
  },
  {
    value: '↑ ROI',
    title: 'Enhanced Returns',
    desc: 'Actionable CTA & campaign insights',
  },
];

const techTags = [
  'Power BI Desktop',
  'Power BI Service',
  'Salesforce',
  'SharePoint',
  'Excel',
  'Third-Party Marketing Tools',
];

const BusinessImpactSection = () => {
  return (
    <section className='relative w-full overflow-hidden'>
      {/* FLOATING RIGHT IMAGE */}
      <div className='absolute right-0 top-[430px] hidden md:block z-0'>
        <Image
          src='/images/Templates/henkel/techstack.png'
          alt='Lab'
          width={280}
          height={320}
          priority
          className='h-[320px] w-[280px] object-contain opacity-90'
        />
      </div>

      <div className='relative z-10 mx-auto max-w-7xl px-4 md:px-6 py-0'>
        {/* ================= BUSINESS IMPACT ================= */}
        <div>
          {/* TITLE */}
          <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[-1px] text-[#11C92E]'>
            Business Impact
          </h2>

          {/* DESCRIPTION */}
          <p className='mt-4 text-[12px] md:text-[18px] leading-[1.8] text-[#5C6474]'>
            Measurable outcomes delivered across operational efficiency, data quality, and financial
            agility.
          </p>

          {/* IMPACT GRID */}
          <div className='mt-12 grid grid-cols-1 gap-5 md:grid-cols-4'>
            {impactCards.map((item, index) => (
              <div
                key={index}
                className='
                  rounded-[24px]
                  border-2
                  border-[#12C82E]
                  bg-white
                  px-5
                  md:px-6
                  py-7
                  text-center
                  shadow-[0px_10px_24px_rgba(0,0,0,0.05)]
                '
              >
                {/* VALUE */}
                <h3 className='text-2xl md:text-5xl leading-none font-semibold tracking-[-1px] text-[#11C92E]'>
                  {item.value}
                </h3>

                {/* TITLE */}
                <h4 className='mt-8 text-[12px] md:text-[20px] leading-[1.3] font-semibold tracking-[-0.5px] text-[#12C82E]'>
                  {item.title}
                </h4>

                {/* DESCRIPTION */}
                <p className='mt-6 text-[12px] md:text-[15px] leading-[1.8] text-[#2D2F35]'>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= TECHNOLOGY STACK ================= */}
        <div className='mt-16'>
          {/* TOP ROW */}
          <div className='flex flex-col gap-6 md:flex-row md:items-center'>
            {/* TITLE */}
            <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[-1px] text-[#184B9D]'>
              Technology Stack
            </h2>

            {/* ICONS */}
            <div className='flex flex-wrap items-center gap-5 md:gap-6'>
              <Image
                src='/images/Templates/henkel/powerbi.png'
                alt='Power BI'
                width={42}
                height={42}
                className='h-[32px] w-auto object-contain'
              />

              <Image
                src='/images/Templates/henkel/salesforce.png'
                alt='Salesforce'
                width={42}
                height={42}
                className='h-[32px] w-auto object-contain'
              />

              <Image
                src='/images/Templates/henkel/sharepoint.png'
                alt='SharePoint'
                width={42}
                height={42}
                className='h-[32px] w-auto object-contain'
              />

              <Image
                src='/images/Templates/henkel/excel.png'
                alt='Excel'
                width={42}
                height={42}
                className='h-[32px] w-auto object-contain'
              />
            </div>
          </div>

          {/* TAGS */}
          <div className='mt-8 flex flex-wrap items-center gap-3 md:gap-5'>
            {techTags.map((item, index) => (
              <div
                key={index}
                className='
                  rounded-full
                  border-2
                  border-[#0F5198]
                  bg-[#E2EDF8]
                  px-6
                  md:px-8
                  py-2.5
                  text-[12px]
                  md:text-[14px]
                  text-[#0F5198]
                '
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* ================= VALUE DELIVERED ================= */}
        <div className='mt-8'>
          {/* TITLE */}
          <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[1px] uppercase text-[#173F88]'>
            VALUE DELIVERED
          </h2>

          {/* DESCRIPTION */}
          <div className='mt-6 space-y-7'>
            <p className='text-[12px] md:text-[18px] leading-[2] text-[#7A8394]'>
              By unifying fragmented data sources into a single analytics platform, we enabled the
              organization to transition from reactive, manual reporting to proactive, data-driven
              marketing decision-making.
            </p>

            <p className='text-[12px] md:text-[18px] leading-[2] text-[#7A8394]'>
              The platform delivers complete visibility across the conversion funnel, empowers
              marketing teams with real-time campaign intelligence, and provides measurable outcomes
              — driving cost efficiency, accelerating reporting cycles, and maximizing marketing
              ROI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessImpactSection;
