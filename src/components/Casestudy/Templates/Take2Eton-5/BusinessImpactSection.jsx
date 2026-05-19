'use client';

import Image from 'next/image';

const techStack = ['Domo (Magic ETL)', 'AppDB', 'Jupyter', 'Python', 'APIs', 'Webhooks'];

const businessImpact = [
  {
    bold: '60–70%',
    text: 'Reduction in manual effort',
  },
  {
    bold: 'Improved',
    text: 'data accuracy and consistency',
  },
  {
    bold: 'Faster',
    text: 'processing cycles',
  },
  {
    bold: 'Enhanced',
    text: 'system reliability',
  },
];

const BusinessImpactSection = () => {
  return (
    <section className='relative w-full overflow-hidden'>
      {/* FLOATING IMAGE */}
      <div className='absolute right-0 bottom-0 hidden md:block pointer-events-none'>
        <Image
          src='/images/Templates/take2eton-5/business-impact.png'
          alt='Travel'
          width={430}
          height={260}
          priority
          className='
          h-[480px]
          w-[720px]
          rounded-[26px]
          object-cover
        '
        />
      </div>

      <div className='relative mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-14'>
        {/* LEFT CONTENT */}

        {/* ================= TECHNOLOGY STACK ================= */}
        <div>
          {/* TITLE */}
          <div className='flex flex-col md:flex-row gap-6'>
            <h2 className='text-2xl md:text-5xl leading-none font-semibold uppercase tracking-[2px] text-[#4A4F5D]'>
              TECHNOLOGY STACK
            </h2>

            <div className='flex flex-wrap gap-6'>
              <Image
                src='/images/Templates/take2eton-5/domo.png'
                alt='Domo'
                width={52}
                height={52}
                className='h-[52px] w-[52px] object-contain'
              />

              <Image
                src='/images/Templates/take2eton-5/python.png'
                alt='Python'
                width={52}
                height={52}
                className='h-[52px] w-[52px] object-contain'
              />

              <Image
                src='/images/Templates/take2eton-5/jupyter.png'
                alt='Python'
                width={52}
                height={52}
                className='h-[52px] w-[52px] object-contain'
              />

              <Image
                src='/images/Templates/take2eton-5/webhooks.png'
                alt='Python'
                width={52}
                height={52}
                className='h-[52px] w-[52px] object-contain'
              />
            </div>
          </div>

          {/* TAGS */}
          <div className='mt-8 flex flex-wrap items-center gap-3'>
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
                    text-[#143C62]
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

        {/* MOBILE IMAGE */}
        <div className='mt-10 flex justify-center md:hidden'>
          <Image
            src='/images/Templates/take2eton-5/business-impact.png'
            alt='Travel'
            width={320}
            height={220}
            priority
            className='
              h-[220px]
              w-[320px]
              rounded-[22px]
              object-cover
            '
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessImpactSection;
