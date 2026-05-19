'use client';

import Image from 'next/image';

const techStack = ['Domo (App Studio)', 'Code Engine', 'AppDB', 'React.js'];

const businessImpact = [
  {
    bold: '~50%',
    text: 'Reduction in manual tracking effort',
  },
  {
    bold: 'Improved',
    text: 'compliance visibility',
  },
  {
    bold: 'Faster and accurate',
    text: 'reporting',
  },
  {
    bold: 'Reduced',
    text: 'compliance risks',
  },
];

const BusinessImpactSection = () => {
  return (
    <section className='w-full overflow-hidden'>
      <div className='relative mx-auto max-w-7xl px-4 md:px-6'>
        {/* FLOATING IMAGE */}
        <div className='absolute right-0 bottom-[40px] hidden md:block'>
          <Image
            src='/images/Templates/take2eton-2/business-impact.png'
            alt='Travel'
            width={420}
            height={420}
            priority
            className='h-[420px] w-[480px] object-contain'
          />
        </div>

        {/* LEFT CONTENT */}
        <div>
          {/* ================= TECHNOLOGY STACK ================= */}
          <div>
            {/* HEADER */}
            <div className='flex flex-col gap-5 md:flex-row md:items-center md:gap-8'>
              {/* TITLE */}
              <h2 className='text-2xl md:text-5xl leading-none font-semibold uppercase tracking-[2px] text-[#4A4F5D]'>
                TECHNOLOGY STACK
              </h2>

              {/* ICONS */}
              <div className='flex items-center gap-5'>
                <Image
                  src='/images/Templates/take2eton-2/domo.png'
                  alt='Domo'
                  width={52}
                  height={52}
                  className='h-[52px] w-[52px] object-contain'
                />

                <Image
                  src='/images/Templates/take2eton-2/react.png'
                  alt='React'
                  width={52}
                  height={52}
                  className='h-[52px] w-[52px] object-contain'
                />
              </div>
            </div>

            {/* TAGS */}
            <div className='mt-7 flex flex-wrap gap-3'>
              {techStack.map((item, index) => (
                <div
                  key={index}
                  className='
                    rounded-[8px]
                    border-2
                    border-[#3B82F6]
                    bg-[#EFF2F5]
                    px-5
                    py-2
                    text-[14px]
                    md:text-[20px]
                    font-medium
                    text-[#3B82F6]
                    shadow-[0px_4px_10px_rgba(0,0,0,0.03)]
                  '
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* ================= BUSINESS IMPACT ================= */}
          <div className='mt-16'>
            {/* TITLE */}
            <h2 className='text-2xl md:text-5xl leading-none font-semibold uppercase tracking-[2px] text-[#10B81F]'>
              BUSINESS IMPACT
            </h2>

            {/* LIST */}
            <div className='mt-8 space-y-6'>
              {businessImpact.map((item, index) => (
                <div key={index} className='flex items-start gap-4'>
                  {/* DOT */}
                  <div className='mt-[11px] h-[8px] w-[8px] rounded-full bg-[#0F172A]' />

                  {/* TEXT */}
                  <p className='text-[14px] md:text-[20px] leading-[1.7] text-[#0F172A]'>
                    <span className='font-semibold text-[#10B81F]'>{item.bold}</span> {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE IMAGE */}
        <div className='flex justify-center md:hidden'>
          <Image
            src='/images/Templates/take2eton-2/business-impact.png'
            alt='Travel'
            width={280}
            height={280}
            priority
            className='h-[220px] w-[280px] object-contain'
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessImpactSection;
